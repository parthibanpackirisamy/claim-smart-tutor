package com.ups.hackathon.claimssmarttutor.controller;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.api.GenerationConfig;
import com.google.cloud.vertexai.api.HarmCategory;
import com.google.cloud.vertexai.api.SafetySetting;
import com.google.cloud.vertexai.generativeai.ContentMaker;
import com.google.cloud.vertexai.generativeai.GenerativeModel;
import com.google.cloud.vertexai.generativeai.PartMaker;
import com.google.cloud.vertexai.generativeai.ResponseStream;
import com.google.protobuf.AbstractMessage;
import com.ups.hackathon.claimssmarttutor.DataModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class MainController {

    @Autowired
    public GenerativeModel getGenerativeModel;
    @Autowired
    private VertexAI getVertexAi;

    @Autowired
    private GenerationConfig generationConfig;

    private static final Map<String, String> dataMap = new HashMap<>();


    //    @GetMapping("/getInstruction")
    /*public String getInstruction(@RequestParam String key, @RequestParam String type) throws IOException {

        Storage storage = StorageOptions.newBuilder().setProjectId("qwiklabs-gcp-01-e60d1c8078c2").build().getService();
        Blob blob = storage.get(BlobId.of("claimssmarttutor", "test.pdf"));

        byte[] document1Bytes = blob.getContent();

        var document1 = PartMaker.fromMimeTypeAndData(
                "application/pdf", document1Bytes);


        var content = ContentMaker.fromMultiModalData(document1, type + " What Do I Say  for " + key);
        ResponseStream<GenerateContentResponse> responseStream = getGenerativeModel.generateContentStream(content);

        // Do something with the response
        return responseStream.stream().
                map(AbstractMessage::toString)
                .collect(Collectors.joining(" "));


    }*/

    @PostMapping("/data")
    public String setDataMap(@RequestBody DataModel dataModel) {

        if (!dataModel.getPrompt().isEmpty()) {
            System.out.println(dataModel.getPrompt());

            dataMap.put("PROMPT", dataModel.getPrompt());
            return "Prompt data updated to the map successfully";
        } else if (!dataModel.getSystemInstructions().isEmpty()) {

            System.out.println(dataModel.getSystemInstructions());

            dataMap.put("SYSTEM_INSTRUCTIONS", dataModel.getSystemInstructions());

            return "System Instructions data updated to the map successfully";

        }


        return "something went wrong, please send the payload correctly";
    }


    @GetMapping("/getInstruction")
    public String getInstructions(@RequestParam String key, @RequestParam String type) throws IOException {

        Storage storage = StorageOptions.newBuilder().setProjectId("qwiklabs-gcp-01-e60d1c8078c2").build().getService();
        Blob blob = storage.get(BlobId.of("claimssmarttutor", "test.pdf"));

        byte[] document1Bytes = blob.getContent();

        var document1 = PartMaker.fromMimeTypeAndData(
                "application/pdf", document1Bytes);

        String prompt = "locate the row for the column having the value as \"" + key + "\" and get the value from the column \"" + type + "- What Do I Say\"";

        var content = ContentMaker.fromMultiModalData(document1, dataMap.getOrDefault("PROMPT", prompt));

        System.out.println(dataMap.getOrDefault("PROMPT", prompt));

        String instruction = "Use the information only from input documents and don't add any additional information.\nKeep the input document as reference, and if we ask any data, fetch data from the document by matching the rows and columns.\nFor example, i give a key from a column, you locate the key in that column and based on the data that i ask fetch data from that matching row and share the details";

        GenerativeModel generativeModel = new GenerativeModel.Builder()
                .setModelName("gemini-1.5-flash-001")
                .setVertexAi(getVertexAi)
                .setGenerationConfig(generationConfig)
                .setSafetySettings(getSafetySettings())
                .setSystemInstruction(ContentMaker.fromMultiModalData(dataMap.getOrDefault("SYSTEM_INSTRUCTIONS", instruction)))
                .build();

        System.out.println(dataMap.getOrDefault("SYSTEM_INSTRUCTIONS", instruction));

        ResponseStream<GenerateContentResponse> responseStream = generativeModel.generateContentStream(content);

        // Do something with the response
        return responseStream.stream().
                map(AbstractMessage::toString)
                .collect(Collectors.joining(" "));


    }


    public List<SafetySetting> getSafetySettings() {
        return Arrays.asList(
                SafetySetting.newBuilder()
                        .setCategory(HarmCategory.HARM_CATEGORY_HATE_SPEECH)
                        .setThreshold(SafetySetting.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE)
                        .build(),
                SafetySetting.newBuilder()
                        .setCategory(HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT)
                        .setThreshold(SafetySetting.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE)
                        .build(),
                SafetySetting.newBuilder()
                        .setCategory(HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT)
                        .setThreshold(SafetySetting.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE)
                        .build(),
                SafetySetting.newBuilder()
                        .setCategory(HarmCategory.HARM_CATEGORY_HARASSMENT)
                        .setThreshold(SafetySetting.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE)
                        .build()
        );
    }
}