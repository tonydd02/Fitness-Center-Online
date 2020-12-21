# Bring JWC Online

Table of contents
  * [Introduction](#Introduction)
  * [Tech](#Tech)
  * [Install](#Install)
  * [How_to_use](#Guide)
  * [Demo](#Demo)

## Introduction

Project Motivation
The online printer and scanner monitoring system in UCLA Mobile app gives us inspiration to build an online monitoring web app for Bfit and JWC. It's a common scene in JWC/Bfit that students have to wait for free equipment to get exercise during overflow hours. Our webapp could save time for users if they can monitor the real-time occupation situation of JWC and Bfit. As a side effect, it could also help JWC and Bfit to mitigate working burden at busy hours. Moreover, future application of this web app is to control user density in JWC/Bfit at post Covid-19 period when the risk of infection still fluctuates.

Features:
- Dynamic display of treadmill availability
- Occupy equipment and sync to database
- Search for historical data for specific time slot
- Planning your exercise
- Recording user exercising time and ranking (We are planning to add
  friend system to deal with privacy issues)

## Tech

Both the client side and server side are written in Nextjs.
We used Mongodb as database.

## Install

You can follow these easy steps to run the all locally

1. Clone this Repository by running the following command in terminal
```shell
git clone [URL to this repo]
```

2. Cd into this repository

3. Run the following command to install dependencies (assuming have Node.js installed)
```shell
npm install
```

4. Start the application
```shell
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) using a browser of your choice

## Guide

1. Sign up and Sign in
2. You can occupy empty treadmill/unoccupy treadmills you occupied
3. Like others exercise/click again to unlike
4. Plan your weeky exercis
5. In the top menu
    - Check your ranking
    - Search for historical availability data

## Demo

Here is the link to the [presentation](https://drive.google.com/file/d/1VQEjpNIQ7rSNTGJyaNXzEON4oAEoe8ID/view?usp=sharing) video.

Because we added some new features and stylings after presentation, we also have a demo of our current app.

1. Directing to Sign In/Sign up:
<img width="981" alt="Screen Shot 2020-12-21 at 9 48 12 AM" src="https://user-images.githubusercontent.com/57846897/102731645-59185900-4373-11eb-9d51-a95aa0de2b7f.png">
<img width="980" alt="Screen Shot 2020-12-21 at 9 48 36 AM" src="https://user-images.githubusercontent.com/57846897/102731691-79e0ae80-4373-11eb-88fb-6458156f3b7c.png">
<img width="978" alt="Screen Shot 2020-12-21 at 9 48 57 AM" src="https://user-images.githubusercontent.com/57846897/102731724-89f88e00-4373-11eb-90b0-284550d98a98.png">

2. Sign in/Sign up page:
<img width="979" alt="Screen Shot 2020-12-21 at 9 49 34 AM" src="https://user-images.githubusercontent.com/57846897/102731812-d04ded00-4373-11eb-9b84-7d598c843305.png">
<img width="508" alt="Screen Shot 2020-12-21 at 9 49 48 AM" src="https://user-images.githubusercontent.com/57846897/102731843-e8be0780-4373-11eb-983d-aa4587b566d2.png">

3. Homepage: 
<img width="977" alt="Screen Shot 2020-12-21 at 9 50 04 AM" src="https://user-images.githubusercontent.com/57846897/102731893-173be280-4374-11eb-965f-08e5a412e8fb.png">

Attempts to occupy more than one treadmill or occupied treadmills will result in an alert.
User can only like occupied treadmills, namely ongoing exercises. Once a treadmill is unoccupied, the likes will be reset.

4. Rank page:
<img width="977" alt="Screen Shot 2020-12-21 at 9 50 23 AM" src="https://user-images.githubusercontent.com/57846897/102731924-333f8400-4374-11eb-9caf-215bc720f15c.png">

5. Search page:
<img width="978" alt="Screen Shot 2020-12-21 at 9 50 43 AM" src="https://user-images.githubusercontent.com/57846897/102731981-55390680-4374-11eb-975e-9662e6da1050.png">

User needs to select both day and time to do a search. Otherwise, an alert will tell user to select both. 
If our database is missing usage information for a specific time, an alert will tell user that the equipment availability being searched is currently unavailable (which we expect users to never see this).
The result of search will be an alert message containing the equipment usage on that day and time.

Rk: User can sign out on each page and signing in would direct user back to the page that they were signed out from.
The friends link in the navigation bar is just a link to a dummy version of friend feature which we did not implemented as part of this project. This feature might be finished in the future.
