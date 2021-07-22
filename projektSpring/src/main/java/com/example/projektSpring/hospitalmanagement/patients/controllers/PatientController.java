package com.example.projektSpring.hospitalmanagement.patients.controllers;

import com.example.projektSpring.hospitalmanagement.patients.entities.Patient;
import com.example.projektSpring.hospitalmanagement.patients.services.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/patients", produces = MediaType.APPLICATION_JSON_VALUE)
public class PatientController {
  private final PatientService service;

  @GetMapping("")
  public Flux<Patient> getPatients() {
    return service.getPatients();
  }

  @GetMapping("/{patientId}")
  public Mono<Patient> getPatientById(@PathVariable String patientId) {
    return service.getPatientById(patientId);
  }

  @PostMapping("")
  public Mono<Patient> createPatient(@RequestBody @Valid Patient patient) {
    return service.createPatient(patient);
  }

  @DeleteMapping("/{patientId}")
  public Mono<Void> deletePatient(@PathVariable String patientId) {
    return service.deletePatient(patientId);
  }
}
