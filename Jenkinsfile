stage('Run Playwright Tests') {
    steps {
        bat 'npm run test:ci'
    }
}

stage('Archive Report') {
    steps {
        junit 'results/*.xml'
    }
}
