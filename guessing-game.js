const easyLevelHandler = require('./api/level/easy-level-handler');
const mediumLevelHandler = require('./api/level/medium-level-handler');

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

welcomeMessage();
difficultLevel();
readline.question('Enter your choice: ', choice => {
    console.log('');

    switch(choice) {
        case '1':
            console.log(`Great! You have selected the Easy difficulty level.`);
            console.log(`Let's start the game!\n`);
            easyLevelHandler(readline);
            break;
        case '2':
            console.log(`Great! You have selected the Medium difficulty level.`);
            console.log(`Let's start the game!`);
            mediumLevelHandler(readline)
            break;
        case '3':
            console.log(`Great! You have selected the Hard difficulty level.`);
            console.log(`Let's start the game!`);
            break;
        default:
            console.log(`Masukkan perintah yang valid (1, 2, 3)`);
            break;
    };
});