package com.ups.hackathon.claimssmarttutor.config;

import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.GenerationConfig;
import com.google.cloud.vertexai.api.HarmCategory;
import com.google.cloud.vertexai.api.SafetySetting;
import com.google.cloud.vertexai.generativeai.ContentMaker;
import com.google.cloud.vertexai.generativeai.GenerativeModel;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@Configuration
public class AppConfiguration {

    @Bean
    public VertexAI getVertexAi() {
        return new VertexAI("qwiklabs-gcp-01-e60d1c8078c2", "us-central1");

    }

    @Bean
    public GenerationConfig generationConfig() {
        return GenerationConfig.newBuilder()
                .setMaxOutputTokens(8192)
                .setTemperature(1F)
                .setTopP(0.95F)
                .build();
    }

    @Bean
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

    @Bean
    public GenerativeModel getGenerativeModel(VertexAI getVertexAi, GenerationConfig generationConfig) {

        return new GenerativeModel.Builder()
                .setModelName("gemini-1.5-flash-001")
                .setVertexAi(getVertexAi)
                .setGenerationConfig(generationConfig)
                .setSafetySettings(getSafetySettings())
                .setSystemInstruction(ContentMaker.fromMultiModalData("Use the information only from input documents and don't add any additional information.\n\nPlease check all the columns below and combine the answers\n1.Notes \n2.Eligibility Results \n3.Description\n4. Receiver - What Do I Say \n5.Shipper - What Do I Say \n and provide only 3 lines of response" ))
                .build();
    }

}
 