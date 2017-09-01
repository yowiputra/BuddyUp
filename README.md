# BuddyUp

## Description
A game match-making web application built on React, Redux, PostgreSQL, Express, Socket.io and Node.js. Meant as a better automatch-making system than an online game's default matching system, this web app uses a Tinder-style approach in pairing up players based on their desired skill-level of their match.

## Screenshots
![Screenshot of the splash page](https://github.com/yowiputra/BuddyUp/blob/master/client/img/splashpage.png)

![Screenshot of the home page](https://github.com/yowiputra/BuddyUp/blob/master/client/img/homescreen.png)

![Screenshot of the request system](https://github.com/yowiputra/BuddyUp/blob/master/client/img/requestcard.png)

![Screenshot of the chat feature](https://github.com/yowiputra/BuddyUp/blob/master/client/img/chat.png)

## Getting Started

### Server side
1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
5. Run the server: `npm start`
6. Run the app on localhost:3000

### Client side
1. Update the .env file with your correct local information
2. Install dependencies: `npm i`
3. Run the webpack-dev-server: `npm start`
