package com.ups.hackathon.claimssmarttutor.controller;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.generativeai.ContentMaker;
import com.google.cloud.vertexai.generativeai.GenerativeModel;
import com.google.cloud.vertexai.generativeai.PartMaker;
import com.google.cloud.vertexai.generativeai.ResponseStream;
import com.google.protobuf.AbstractMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.stream.Collectors;

@RestController
public class MainController {

    @Autowired
    public GenerativeModel getGenerativeModel;


    @GetMapping("/getInstruction")
    public String getInstruction(@RequestParam String key, @RequestParam String type) throws IOException {

        //File document1File = new ClassPathResource("test.pdf").getFile();
        Storage storage = StorageOptions.newBuilder().setProjectId("qwiklabs-gcp-01-e60d1c8078c2").build().getService();
        Blob blob = storage.get(BlobId.of("claimssmarttutor", "test.pdf"));

        byte[] document1Bytes = blob.getContent();// new byte[(int) document1File.length()];
//        try (FileInputStream document1FileInputStream = new FileInputStream(document1File)) {
//            document1FileInputStream.read(document1Bytes);
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }
        var document1 = PartMaker.fromMimeTypeAndData(
                "application/pdf", document1Bytes);


        var content = ContentMaker.fromMultiModalData(document1, type + " What Do I Say  for " + key);
        ResponseStream<GenerateContentResponse> responseStream = getGenerativeModel.generateContentStream(content);

        // Do something with the response
        return responseStream.stream().
                map(AbstractMessage::toString)
                .collect(Collectors.joining(" "));


    }
}