# Music Rick Blahajs
for SharkHacks3

## Inspiration
We wanted to build a hack that is very silly, fun and full of Blahaj. And this got us thinking that what can be better than a party game that includes both Blahaj and Rick Rolling. And thus we came up with the most *sharkiest* and *silliest* party game of all time!

## What it does
It is a game where every player has to select a random card from all the faced-down cards on the website. And if the card has a Blahaj on the other side, then the card will also consist of a karaoke dare, and the player on starting their dare will be redirected to the Youtube video of the karoke version of the song. And if the card picked by a player has Rick on it, the arduino will play the Rick Roll audio and the ASCII Rick Roll dance will play on the terminal, and which will mean that the player is out of the game. This is how the players will keep reducing, and the last player standing will be the winner. 

## How we built it
The website including the cards of the game was built using using *html css and vanilla javascript*. 
The arduino has a *piezo buzzer* which can produce tones using the *tone()* library of various frequencies (50% duty cycle). We used it and open source libraries to play RickRoll tone. The Red light is lit in longer notes and green on shorter notes to give a *visualizer* feel, a nice message is also displayed on the OLED screen of the Arduino board using the U8x8lib module.
And the RickRolling part of the project basically downloads and converts a YouTube video into *ascii art*. You can experience the glory of the rickroll in your terminal! It was built using *python, opencv, and YouTubeDL*.
Never Gonna give you up tone library : https://github.com/robsoncouto/arduino-songs

## Challenges we ran into
Memory was the main challenge in Arudino, the song had to be cut and a lot of Characters couldn't be printed in the OLED panel to save space. Getting the ASCII Rick Roll dance to work was also very challenging. 

## Accomplishments that we're proud of
The biggest achievement was getting all the parts of the project running as they should. Getting the codes to work properly is not easy. But we hope we made Blahaj proud with our hack.

## What we learned
We learned how chill one can stay during a hackathon and just not allow a project to stress us. The true joy of having fun in a hackathon dedicated to our beloved Blahaj, Smolhag, and other friendly plushie Sharks in general. 

## What's next for Musical Rick Blahajs
As the saying goes that possibilities are endless when we are willing to improve something. And when it comes to a party game, we can have a list of things that we can do in future to make it more enjoyable. Maybe find a way for including more players, more karoke dares, and make the game longer and even more silly. 
