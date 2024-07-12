FROM gradle:jdk17 AS  build
COPY . .
RUN gradle build
# Use the official Gradle image with JDK 17 as the build stage
FROM gradle:jdk17 AS build

# Set the working directory in the container
WORKDIR /home/gradle/project

# Copy all files from your local directory to the container's working directory
COPY . .

# Build the application using Gradle
RUN gradle build

# Use a lightweight JDK 17 image as the final stage
FROM openjdk:17.0.1-jdk-slim

# Set the working directory in the final image
WORKDIR /app

# Copy the built JAR file from the build stage to the final image
COPY ./build/libs/WebApplication-0.0.1-SNAPSHOT-plain.jar demo.jar

# Expose port 8080 (optional)
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "demo.jar"]
