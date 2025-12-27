package com.snapurl.backend.contoller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RestController
public class HealthCheckController {


    @GetMapping("/health-check")
    public String getHealthCheck(){

        log.info("Inside the get health - check");
        return "Health Check Ok in get Request";


    }

    @GetMapping("/MongoDB")
    public String getMongoCheck(){
        log.info("Checking mongoDB health");
        return "DataBase Connected successfully";
    }
}
