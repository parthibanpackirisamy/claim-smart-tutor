package com.ups.hackathon.claimssmarttutor.controller;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
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

//        File document1File = new ClassPathResource("test.pdf").getFile();
        Storage storage = StorageOptions.newBuilder().setProjectId("qwiklabs-gcp-01-e60d1c8078c2").build().getService();

        Blob blob = storage.get(BlobId.of("claimssmarttutor", "test.pdf"));

        return "Hello from SynergyInnovate's Claims Smart Tutor Application!!";
    }

}
