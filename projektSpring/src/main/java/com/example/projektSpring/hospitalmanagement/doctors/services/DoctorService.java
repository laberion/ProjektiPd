package com.example.projektSpring.hospitalmanagement.doctors.services;

import com.example.projektSpring.hospitalmanagement.doctors.entities.Doctor;
import com.example.projektSpring.hospitalmanagement.doctors.repositries.DoctorRepo;
import com.example.projektSpring.hospitalmanagement.schedules.services.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class DoctorService {
  @Autowired private DoctorRepo repo;

  @Lazy @Autowired private ScheduleService scheduleService;

  public Mono<Boolean> exists(String doctorId) {
    return repo.exists(doctorId);
  }

  public Flux<Doctor> getDoctors() {
    return repo.getDoctors();
  }

  public Mono<Doctor> getDoctorById(String doctorId) {
    return repo.getDoctorById(doctorId);
  }

  public Mono<Doctor> createDoctor(Doctor doctor) {
    return repo.createDoctor(doctor);
  }

  public Mono<Void> deleteDoctor(String doctorId) {
    return repo.deleteDoctor(doctorId).and(scheduleService.deleteSchedulesByDoctorId(doctorId));
  }
}
