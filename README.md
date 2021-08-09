# city-explorer-api

# Project Name

**Author**: Hamza Ahmad 
**Version**: 1.0.0 

## Overview

This app/ program is built to act as an API, we did not use an actual database, but we used some data stored in a json file. The app uses express to start a server end point **sorry if this is not correct** and then we can set use the get method and pass it the url where the request will get sent, and two functions, one for receiveing the request and then we handle it, and the other is used to send the response regardless of if it is a valid one or an error.

## Getting Started
At first I installed the requeired packages, and frameworks, express, axios, cors, and so on, then using require from Commonjs i imported the modules needed, then I initialized an app from express to start working with it, then cors for security, and after that dotenv to access .env variables. After that, I initialized a class to create Forecast objects that will contain data about the date and the description of the weather of the selected city. After that, and specified above we initialize the end points to handle the requests and sending the responses. Finally, I used listen and specified the port for the server to start listening on that port for requests.

## Architecture
I believe that almost all of what i need to sat is already said above, but here I will just remention that I used {cors, express, node, dotenv, commonjs}.

## Change Log
-> 9-8-2021: the basic archeticture of the server is done and everything is working just fine
## Credit and Collaborations
Hamza Ahmad and special thanks to Renad Alkhlafat for helping me with an issue.

## features

* Name of feature: 1. Set up your server repository.

Estimate of time needed to complete: 1hr 

Start time: 6:00 pm  -> I had to reorganize the original app from scratch

Finish time: 7:13 pm

Actual time needed to complete: 1 hr and 13 mins

---------------------------------------------------

* Name of feature: 2. Weather (placeholder): As a user of City Explorer, I want to see weather info for the city I searched, so that I know how to pack for an upcoming trip.

Estimate of time needed to complete: 1-1.5 hrs 

Start time: 7:30 pm

Finish time: 9:00 pm

Actual time needed to complete: 1 hr and 30 mins

---------------------------------------------------

* Name of feature: 3. Errors (revisited): As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.

Estimate of time needed to complete: 30 mins

Start time: 10:30 pm

Finish time: 11:10 pm

Actual time needed to complete: 40 mins