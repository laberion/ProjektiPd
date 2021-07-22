package com.example.projektSpring.hospitalmanagement.schedules.services;

import com.example.projektSpring.hospitalmanagement.doctors.services.DoctorService;
import com.example.projektSpring.hospitalmanagement.exceptions.BadRequestException;
import com.example.projektSpring.hospitalmanagement.schedules.entities.Schedule;
import com.example.projektSpring.hospitalmanagement.schedules.repositries.SchedulerRepo;
import com.mongodb.client.result.DeleteResult;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@AllArgsConstructor
public class ScheduleService {
  private final SchedulerRepo repo;
  private final DoctorService doctorService;

  public Flux<Schedule> getSchedules() {
    return repo.getSchedules();
  }

  public Mono<Schedule> createSchedule(Schedule schedule) {
    return doctorService
        .exists(schedule.getDoctorId())
        .<Schedule>handle(
            (exist, sink) -> {
              if (exist) sink.next(schedule);
              sink.error(new BadRequestException("doctorId does not exists"));
            })
        .flatMap(it -> repo.checkForFreeScheduler(it.getDoctorId(), it.getTimeInterval()))
        .flatMap(
            isScheduled -> {
              if (isScheduled) return Mono.error(new BadRequestException("No free time"));
              return repo.createSchedule(schedule);
            });
  }

  public Mono<DeleteResult> deleteSchedule(String scheduleId) {
    return repo.deleteSchedule(scheduleId);
  }

  public Mono<DeleteResult> deleteSchedulesByDoctorId(String doctorId) {
    return repo.deleteSchedulesByDoctorId(doctorId);
  }

    public Mono<DeleteResult> deleteSchedulesByPatientId(String patientId) {
        return repo.deleteSchedulesByPatientId(patientId);
    }
}
