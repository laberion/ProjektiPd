package com.example.projektSpring.hospitalmanagement.patients.repositories;

import com.example.projektSpring.hospitalmanagement.patients.entities.Patient;
import com.mongodb.client.result.DeleteResult;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
@AllArgsConstructor
public class PatientRepo {
  private final ReactiveMongoTemplate reactiveTemplate;

  public Flux<Patient> getPatients() {
    return reactiveTemplate.findAll(Patient.class);
  }

  public Mono<Patient> getPatientById(String patientId) {
    return reactiveTemplate.findById(patientId, Patient.class);
  }

  public Mono<Patient> createPatient(Patient patient) {
    return reactiveTemplate.insert(patient);
  }

  public Mono<DeleteResult> deletePatient(String patientId) {
    return reactiveTemplate.remove(Query.query(Criteria.where(Patient.ID).is(patientId)),Patient.class);
  }
}
