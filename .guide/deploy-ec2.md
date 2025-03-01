## 1. Install Docker on EC2

`sudo apt-get update`

`sudo apt-get install docker.io -y`

// Start Docker
`sudo systemctl start docker`

`sudo docker run hello-world`

// Fix: permission denied while trying to connect to the Docker daemon socket at unix
`sudo chmod 666 /var/run/docker.sock`

// Enable Docker
`sudo systemctl enable docker`

// Check Docker version
`docker --version`

//
`sudo apt-get install chromium-browser`

## 2. Create Dockerfile on root project

## 3. Setup Github Runner

- Go to Setting -> Actions -> Runners
- New self-hosted runner -> Choose Ubuntu -> Copy commands and run on EC2 instance
- Since getting `Connected to GitHub` from EC2 command line, a new self-hosted runner is added
