package com.ups.hackathon.claimssmarttutor.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

@RestController
public class TestController {

    @GetMapping("/hello")
    public String testHello() throws IOException {

        File document1File = new ClassPathResource("test.pdf").getFile();
        return "Hello from SynergyInnovate's Claims Smart Tutor Application!!";
    }

}
