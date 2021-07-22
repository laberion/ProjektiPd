package com.example.projektSpring;

import lombok.AllArgsConstructor;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@AllArgsConstructor
@RestController
@RequestMapping(value = "test", produces = MediaType.APPLICATION_JSON_VALUE)
public class ControllerTest {

   final public FirstExample firstExample;

        @RequestMapping(value = "/lavdim")
        public Mono<Void> test() {
        return Mono.fromRunnable(() -> {
            firstExample.showText();
        });
    }
}
