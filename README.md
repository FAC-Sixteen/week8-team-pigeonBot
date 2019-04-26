# Team PigeonBop READme

### Our Team consisted of four cool cats

![Gif of us being cool](https://media.giphy.com/media/qrIsXgEdorkI/giphy.gif)

- Bobby 
- Dylan 
- Henry
- Sylvia

## Editor Warz
This repo contains our team project for Week 8 of Founders and Coders - Editor Warz!

## Elevator Pitch

- Have you ever wondered who used the 'best' text editor?
- Have you ever wondered who of your colleagues or friends are using out dated text editors?
- Have you ever wanted to tell the world how great your text editor is?
- Would you not like to find out which is collectively better?

#### Find out on the next episode of DRAGONBALL Z!

![gif](https://media.giphy.com/media/K9rQXtu1XdsCQ/giphy.gif)

...or now

## Project Dependencies
* [Express](https://www.npmjs.com/package/express)
* [Express HandleBars](https://www.npmjs.com/package/express-handlebars)
* [Body Parser](https://www.npmjs.com/package/body-parser)
* [Node Postgres](https://www.npmjs.com/package/pg)
* [Env2](https://www.npmjs.com/package/env2)
* [Query-string](https://www.npmjs.com/package/query-string)
* [Serve-Favicon](https://www.npmjs.com/package/serve-favicon)

## Installation Instructions

1. Go to your terminal and clone this repo - ```git clone https://github.com/FAC-Sixteen/week8-team-pigeonBot.git```
2. cd into the directory on your computer
3. run ```npm i``` to install the project dependencies 

![gif](https://media.giphy.com/media/xUPGcEliCc7bETyfO8/giphy.gif)

## Testing Instructions
1. Run ```npm i tape -d``` to install the Tape testing framework
2. Run ```npm i tap-spec -d``` to install the Tap-Spec formatter for Tape
3. Create a config.env file in your root directory
4. Add a TEST_DB_URL to your config.env with a link to a local database. For instructions on setting up a local database, [read this guide](https://hackmd.io/NRxnR1PgQI-iQlF-wsqqdg?both).
5. Run ```npm test```. Happy testing!

## Goals

![](https://i.imgur.com/ULoPEpo.jpg)


![](https://i.imgur.com/Yd70csf.jpg)

## Stretch Goals
![](https://i.imgur.com/fDrnudI.jpg)
- Bar/pie chart
- 

## Our Process
![](https://i.imgur.com/UJKMxDF.jpg)

### Wireframing
We each drew separate wireframes to show our ideas for the user interface part of the website. We then synthesised these into one cohesive vision.

![Wireframe for our project](https://i.imgur.com/HCcY74H.jpg)

### Creating Database Schema
We chose to use a two table database. There is a one-to-many relationship between the 'editors' and 'users' tables.
![](https://i.imgur.com/cKMnwn6.jpg)

![The schema for our project's database](https://i.imgur.com/evi1Gph.png)

We used dbdiagram.io to make our schema and export our build script.

![GIF showing how easy it is to export schema tables from Quick Database Diagrams](https://i.imgur.com/Hve72wG.gif)

### Mini Research Session
We took 30 mins to read and talk about Express, Handlebars, and other tools we needed for our project.

### Setting Up The Express App As A Group

We worked together to set up the basic server/router/home route functionality.

### Splitting Into Pairs

**Henry | Bobby** - Create onpageload GET request and database query

**Sylvia | Dylan** - Create main.hbs, a home.hbs, and partials for the header, footer, form, and 'podium'.

### Switching Pairs

**Dylan | Bobby** - Pass the HTML form GET request through to our Express server

**Henry | Sylvia** - Create HTML form submission POST request and database query, create 404 and 500 error routes


### Switching Pairs Again

**Sylvia | Bobby** - Write integration tests for server routes

**Henry | Dylan** - 

## Challenges We Encountered

- I accidently misspelt const and exports (cont, export) in error.js, the file exporting 

## What We Learned

### Body-parser module = data chunking made easy!
#### From this...
![](https://i.imgur.com/g41D3u8.png)

#### ...to this
![](https://i.imgur.com/4ciDERj.png)

### You Can't Write The Usual Tests For a 500 Server Error




![](https://i.imgur.com/0tWPS8O.jpg)





