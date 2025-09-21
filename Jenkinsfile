pipeline {
    agent {
        docker
        {
            image 'mcr.microsoft.com/playwright:v1.55.0-noble'
            args '--network qatech-paybank-pwr-ui_skynet' 
        }

    stages {
        stage('Node.js deps') {
            steps {
                sh 'npm install'
            }
        }
        stage('E2E tests') {
            steps {
                sh 'npx playwright test'
            }
        }       
    }
}
