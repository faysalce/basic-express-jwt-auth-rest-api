# Node Express Rest API Server with JWT Start Guide 

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version latest stable


# Getting started
- Clone the repository
```
git clone  https://github.com/faysalce/basic-express-jwt-auth-rest-api.git
```
- Install dependencies
```
cd basic-express-jwt-auth-rest-api
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:3010`

-  endpoints

  email SignIn end point Endpoint : http://localhost:3010/api/auth/signin/
    email Register end point Endpoint : http://localhost:3010/api/auth/signup/




# Additional advice
If you want to alive express server always even your server restart you need to use a additional node packedge pm2 below for ubuntu server how you mentioned pm2 install process.

please go to application folder with cd command then 

- sudo npm install pm2 -g
- sudo pm2 start --name=express-jwt-rest npm -- start


