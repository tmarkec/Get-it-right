# Get it right

![Am I responsive snapshot](/readImg/responsivness.png)
[View the Live Website Here](https://tmarkec.github.io/Get-it-right/)

## Table of Content
1. [Project Goals](#project-goals)
   1. [User Goals](#user-goals)
   2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
   1. [Target Audience](#target-audience)
   2. [User Requirements and Expectations](#user-requirements-and-expectations)
   3. [User Stories](#user-stories)
   4. [Site Owner Stories](#site-owner-stories)
3. [Design](#design)
   1. [Design Choices](#design-choices)
   2. [Colour](#colours)
   3. [Fonts](#fonts)
   4. [Structure](#structure)
   5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
   1. [Languages](#languages)
   2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
   1. [HTML Validation](#HTML-validation)
   2. [CSS Validation](#CSS-validation)
   3. [JavaScript Validation](#javascript-validation)
   4. [Accessibility](#accessibility)
   5. [Performance](#performance)
   6. [Device testing](#performing-tests-on-various-devices)
   7. [Browser compatibility](#browser-compatability)
   8. [Testing user stories](#testing-user-stories)
7. [Bugs](#Bugs)
8. [Deployment](#deployment)
9. [Credits](#credits)
10. [Acknowledgments](#acknowledgments)

## Project Goals
Get it right, is classic "chance"game in which user is trying to predict random number generated from computer with limited attempts on the line. Numbers are in the range from 1 - 25!

### User Goals

- Play fun game, that requires minumum effort and it's easy to understand and play

### Site Owner Goals

- Creating engaging game that users would want to come back and play again
- Creating user friendly game
- The game should be fully responsive to be able to be played on different screen sizes.

## User Experience

### Target Audience

- casual gamers
- people who like to play "chance"games
- people looking to test their luck skills

### User Requirements and Expectations

- A simple and friendly use interface
- Quick & easy game to play
- Buttons and functions that work as expected
- Accesabillity and good design on all screen devices

### User Stories

1. As a user, I want to be able to create user name for the game
2. As a user, I want to test my luck in this game
3. As a user, I want to be able to pick the numbers both by clicking the mouse and by using the keyboard
4. As a user, I want to be able to pick only numbers that are in the range of the rules of the game
5. As a user, I want indication if my guesses were higher or lower than the random pick by computer
6. As a user, I want to know when I win or lose game and in both cases that winning or loosing number is clearly displayed on the screen
7. As a user, I want to be able to change my username and start new game

## Design

### Design Choices

- The game was designed as a two page layout, where first page gives user quick glance on what this game is about with clear rules displayed while second page is where user plays his game with the simple & clear layout of the elements.

### Colour

- The main colours I picked for this project were black and yellow. With combination depends on what page user is curently on.

### Fonts

- For the fonts, I've used 'Shadows Into Light' font which gives whole page little bit dramatic and interesting look.

### Wireframes
<details><summary>Desktop version</summary>
<img src="./readImg/balsamic.web.png">
</details>
<details><summary>Mobile version</summary>
<img src="./readImg/balsamic.mob.png">
</details>

## Technologies Used

### Languages

- HTML
- CSS
- JavaScript

### Frameworks & Tools

- Git
- GitHub
- Gitpod
- Csscript
- Balsamiq
- Font Awesome
- Favicon<span>.</span>io
- JSHint
- W3C Markup validation service
- W3C Jigsaw CSS validation service
- WAVE WebAIM web accessibility evaluation tool

## Features

The site consists of two pages.

### Welcome page

  - Provides user with rules of the game
  - Provides user to type his name which will be displayed on the gaming page next to his score
  <details><summary>Welcome page</summary>
<img src="./readImg/landing.page.png"></details>

### Game page

- Clear headline with indication for the range of the guessing numbers
- Question mark is where number will be displayed if user wins/lose the game, with text right next to it which guides user through the game as he plays
- Input box so user can put his prediction and to check his input with button just bellow it
- Clear indication on how many tries user got, and numbers that he already picked
- Button to play again the game and button to go back to previous page if user wish to read rules or change his username
<details><summary>Welcome page</summary>
<img src="./readImg/gaming.page.png"></details>

#### Game over screen

- Gives user clear message that tells him that he lost the game, with the correct number right next to it
- it also desibles "check" button so user can't click again and try the correct number
- also sound button appears on the screen which user can click and get that famous "booo" sound for his performance
<details><summary>Gameover screen</summary>
<img src="./readImg/user.lost.game.png"></details>

#### Correct guess screen

- Gives user clear message that tells him that he won the game, with the correct number right next to it
- it also desibles "check" button so user can't click on it again with different number
- Upon win confetti animation is displayed around input label for user guess
<details><summary>Win screen</summary>
<img src="./readImg/user.won.game.png"></details>