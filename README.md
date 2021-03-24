# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Elisa Brooks

Time spent: 3 hours spent in total

Link to project: https://glitch.com/edit/#!/wholesale-fuzzy-oatmeal

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [X] Custom dialogs rather than using the browsers alert method
- [X] Option to replay pattern after a mistake is made
- [X] Keep track of current score

## Video Walkthrough
The gif below illustrates what happens when you make mistakes:
![](https://i.imgur.com/RstsOK4.gif)

The gif below illustrates what happens when you win:
![](https://i.imgur.com/vpEhdgw.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- None

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
- One challenge I encountered in creating this submission happened when I was attempting to implement a way to allow the user to make 2 mistakes before they lose the game. With all of the freedom given for this project, I had to make the decision on whether or not a user must restart the sequence they messed up on or simply continue from the part of the sequence that they messed up on. I decided to have the user re-input the sequence they messed up on. I made this decision after considering the fact that most games do it this way and would therefore be the most user friendly approach. Inorder to ensure that there would be no confusion on the user's side, I wanted to create an alert to explain what they needed to do. At first, I did this with a confirm box similar to the alert boxes for winning and losing. However, it bothered me that the buttons said “Cancel” and “OK” rather than “Yes” and “No.” With this, I realized that I would need to create a custom dialog! Not only did this fix the button problem, but I was able to create a more computer game feel since I no longer had to rely on ugly popup window alerts. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- One question I have about web development is “What makes an app good?” After completing my submission, I have realized that making a web app that is not only user friendly, but optimized for all mobiles, tablets, and desktops is hard. There are so many factors to consider aside from functionality and aesthetics. Yet, I’m not completely sure about what kind of factors need to be considered. I want to learn how to make good applications and understand the app development workflow. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- If I had more time to work on this project, there are a few things I would like to implement. First off, I would have liked to finish implementing the optional features that were provided. Then, I would have liked to make the game more complex than just memorizing a sequence of eight. This way, I could then create a way for users to login so that their top scores could be saved. I noticed that this game didn’t work that well on my phone. The game is responsive to mouse clicks but not to finger taps. Because of this, I would have also liked to create a more responsive web design that’s optimized for mobile and tablet form in addition to desktop forms. Lastly, when running a Lighthouse report, the performance and accessibility of the website could have been better so I would like to improve these. 

## License

    Copyright Elisa Brooks

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.