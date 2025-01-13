# Use a base image with JDK
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the jar file into the Docker container
COPY target/arifemployeesmanagement.jar /app/arifemployeesmanagement.jar

# Expose the port that the application will run on
EXPOSE 8080

# Command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "arifemployeesmanagement.jar"]
