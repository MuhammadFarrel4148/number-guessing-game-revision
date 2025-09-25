const easyLevelHandler = require('./api/level/easy-level-handler');
const hardLevelHandler = require('./api/level/hard-level-handler');
const mediumLevelHandler = require('./api/level/medium-level-handler');

let startGame;
let endGame;
let resultTimer;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const welcomeMessage = () => {
    console.log(`Welcome to the Number Guessing Game\nI'm thinking of a number between 1 and 100\nYou have 5 chances to guess the correct number`);

    console.log(``);
};

const difficultLevel = () => {
    console.log(`Please select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)`);

    console.log(``);
};

const askToPlayAgain = (startGame) => {
    readline.question('Do you want to play again (Y/N)? ', (answer) => {
        if(answer.toLowerCase() === 'y') {
            difficultLevel();
            choiceLevel(); 
        } else {
            console.log('Thanks for playing!');
            readline.close();
            endGame = new Date();
            resultTimer = Math.floor((endGame - startGame) / 1000);
            console.log(`You played ${resultTimer} detik in this game`);
        };
    });
};

const choiceLevel = () => {
    readline.question('Enter your choice: ', choice => {
        console.log('');

        switch(choice) {
            case '1':
                console.log(`Great! You have selected the Easy difficulty level.`);
                console.log(`Let's start the game!\n`);
                startGame = new Date();
                easyLevelHandler(readline, askToPlayAgain, startGame);
                break;
            case '2':
                console.log(`Great! You have selected the Medium difficulty level.`);
                console.log(`Let's start the game!`);
                mediumLevelHandler(readline, askToPlayAgain, startGame);
                break;
            case '3':
                console.log(`Great! You have selected the Hard difficulty level.`);
                console.log(`Let's start the game!`);
                startGame = new Date();
                hardLevelHandler(readline, askToPlayAgain, startGame);
                break;
            default:
                console.log(`Masukkan perintah yang valid (1, 2, 3)`);
                break;
        };
    });
};

welcomeMessage();
difficultLevel();
choiceLevel();

module.exports = choiceLevel;