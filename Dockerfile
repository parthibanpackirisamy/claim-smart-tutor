FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/claimssmarttutor.jar /app/myapp.jar
ENTRYPOINT ["java", "-jar", "myapp.jar"]
