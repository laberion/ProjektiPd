package com.example.projektSpring.hospitalmanagement.doctors.entities;

import com.example.projektSpring.hospitalmanagement.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;

@Data
@EqualsAndHashCode(callSuper = true)
@CompoundIndex(name = "personalId_1", def = "{'personalId' : 1}", unique = true)
@Document("Doctor")
public class Doctor extends BaseEntity {

  @NotBlank private String personalId;
  @NotBlank private String name;
  @NotBlank private String surname;
  private String specialization;
}
