pipeline {
    agent any. // This defines that jenkins can run on any available agent.

    triggers {
        githubPush() 
    }
  // This sets up env variables. Here it adds path to npm  either on local or on remote machine 
    environment {
        PATH = "/opt/homebrew/bin:/opt/homebrew/bin/npm:$PATH"  // Add npm path explicitly
    }

//. This block contains different stages of the pipeline. 
    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code...'
                git url: 'https://github.com/parvkhanna/Polestar-demo.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Run WDIO Tests') {
            steps {
                echo 'Running WebdriverIO tests...'
                sh 'npm run wdio'
            }
        }
    }

// Post block defines actions to be performed after the pipeline completes, regardless of success/failure
    post {
        always {
            // echo 'Generating Allure Report...'
            // // Generate Allure report
            // sh 'npm run allure'
            
            // If you have the Jenkins Allure plugin installed, you can use:
            // allure([
            //     includeProperties: false,
            //     jdk: '',
            //     reportBuildPolicy: 'ALWAYS',
            //     results: [[path: 'allure-results']]  // Path to the folder where allure results are stored
            // ])

            echo 'Cleaning up workspace...'
            cleanWs() // Clean the workspace after the build
        }

        success {
            echo 'Build and tests successful!'
            // can sen email 
        }

        failure {
            echo 'Build failed!'
        }
    }
}
