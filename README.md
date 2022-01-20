# Dadu Game

A Dice game script that accepts input N number of players and M number of dice, with the following rules:
1. At the beginning of the game, each player gets a dice of M units.
2. All players will roll their respective dice simultaneously
3. Each player will check the results of their dice and conduct an evaluation
as follows:
a. The 6 digit dice will be removed from the game and added as points
for these players.
b. Dice number 1 will be given to the player sitting next to him.
For example, the first player will give the number 1 dice to the second player. c. Dice numbers 2,3,4 and 5 will still be played by players.
4. After the evaluation, the player who still has the dice will repeat the 2nd step until only 1 player is left.
a. For players who do not have any more dice, they are assumed to have finished playing. 5. The player who has the most points wins.

***
## Getting Started
#### Download the Repository
```javascript
git clone git@github.com:fuaditrockz/dadu_game.git
```

#### Navigate to the Local Repo(Project)
```javascript
cd dadu_game
```

#### Install Dependencies

```javascript
npm install
```

### Start the Project
```javascript
npm start
```