package com.snapurl.backend.contoller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheckController {


    @GetMapping("/health-check")
    public String getHealthCheck(){

        return "Health Check Ok in get Request";


    }
}
