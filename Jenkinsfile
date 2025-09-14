pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Kaveri2210/Testing.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --reporter=list'
            }
        }

        stage('Archive Report') {
            steps {
                bat 'npx playwright show-report'
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }
    }

    post {
        always {
            junit 'test-results.xml' // if you generate JUnit format
        }
    }
}
