pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
            	sh 'pwd'
            	sh 'cd C:\JavaCodes\Angular10Springboot\Angular-10-Spring-Boot-CRUD-Full-Stack-App\springboot-backend'
                sh 'mvn clean install'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to production...'
            }
        }
    }
}
