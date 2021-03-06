# Rick and morty app

## Introduction

> Small App implemented with React in the front and Express + Mongo in the back, both using typescript.

## Setup for local development

To run this project locally you will need [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/install/) installed on your machine. After that just run:

- `docker-compose up --build --remove-orphans` or `docker-compose build` then `docker-compose up`
- Server will be running at localhost:8080 and client at port localhost:3000

## Important notes

### Used libraries

Each folder has a readme with more details on what is being used and why is being used.

### To Do and Issues:

- Style error boundary and pages skeletons
- i18n
- unit testing for controllers adn routes
- E2E testing once workflows are defined
- Implement things done for Characters, for Episodes and Locations
- CircleCI jobs config ymls
- Adequate docker-compose for Prod release
