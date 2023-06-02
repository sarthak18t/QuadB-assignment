# QuadB-assignment

This repository contains my submission for the QuadB assignment. The assignment is about building a web application using React and Node.js.

Features

Feature 1: As instruction given in assignment this repository fetches the top 10 data from https://api.wazirx.com/api/v2/tickers.
Feature 2: Every time when the server starts data is fetched and top 10 data is storred in the database(MongoDB).
Feature 3: There is a route "/api/v1/data" where the top 10 data is fetched from database for frontend.
Feature 4: Both server and client server can be started by npm package concurrently by following commands
    "server": "npm run server --prefix ./server",
    "prod" : "npm start --prefix ./client",
    "start": "concurrently \"npm run server\" \"npm run prod\""
    
    
Technologies Used

React
Node.js
MongoDB
Express
HTML
CSS
JavaScript
