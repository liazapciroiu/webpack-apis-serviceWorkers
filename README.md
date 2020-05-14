# webpack-apis-serviceWorkers
This project was made as part of the Udacity [Front-end nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011).
This project is made to hone skills for webpack configuration, node with express servers, apis, service workers - by building an app that allows to evaluate a given URL with Natural language processing (NLP).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine. Clone the repo and see notes on prerequsities and run the project.

### Prerequisites

You need to have [Node installed](https://nodejs.org/en/download/) on your machine.

### Run the project
* Install all the dependencies:
```
npm install express
```
* To start the local server:
```
npm run start
```
* To start the development environment:
```
npm run build-dev
```
* To build for production environment:
```
npm run build-prod
```
* To run the tests:
```
npm run test
```
** Please note that you will need an API Key that you can get [here](https://developer.aylien.com/signup). Set them in the dotenv module and replace them in src/srver/index.js.**

## Built With
* HTML, CSS, JavaScript - front-end
* [Node](https://nodejs.org/en/) - back-end
* [Express](https://expressjs.com/) - node framework
* [AlyienAPI](https://aylien.com/text-api/) - text analysis API
