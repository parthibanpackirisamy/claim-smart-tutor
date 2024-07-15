package com.ups.hackathon.claimssmarttutor.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/hello")
    public String testHello() {
        return "Hello from SynergyInnovate's Claims Smart Tutor Application!!";
    }

}
