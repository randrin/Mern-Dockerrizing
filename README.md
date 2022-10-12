# Mern-Dockerrizing
## Create your backend NodeJs application
- Create the Dockerfile
- Configure the file to set up the application
- Add .dockerignore file to skip the dockerfile during the build
## Create your frontend ReactJs application
- Create the Dockerfile
- Configure the file to set up the application
- Add .dockerignore file to skip the dockerfile during the build
## Create docker-compose yaml file in root application
- Configure the file to set up both mongoDB, backend and frontend
- In your setup, where the url of mongoBD was `mongodb://localhost:27017/<YOUR_DATABASE>`, change with `mongodb://<NAME_MONGODB_SERVICE_IN_DOCKER_COMPOSE_FILE>:27017/<YOUR_DATABASE>`
- In the root of the application, type `docker compose up`
