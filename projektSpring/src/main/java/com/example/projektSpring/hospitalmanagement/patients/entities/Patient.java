package com.example.projektSpring.hospitalmanagement.patients.entities;

import com.example.projektSpring.hospitalmanagement.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@EqualsAndHashCode(callSuper = true)
@Document("Patient")
public class Patient extends BaseEntity {
  private String name;
  private String surname;
  private String diagnose;
}
