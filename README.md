# Gomoney DevOps Challenge
#### This projet deploys a simple nodejs application to an AKS cluster using azure devops. 
##### CI/CD Pipleline stages
###### Stage 1: Test
The app dependencies are installed, and npm run test command is run which invokes jest ci test

###### Stage 2: Build
The app is built as a docker image using the dockerfile in the project and pushed to azure registry

###### Stage 3: Deploy
Application is deployed to AKS using kubernetes helm chart

_Deployed App_
[URL](http://20.121.100.165/todo)


