package com.example.projektSpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class ProjektSpringApplication {

  public static void main(String[] args) {
    SpringApplication.run(ProjektSpringApplication.class, args);
  }
}
