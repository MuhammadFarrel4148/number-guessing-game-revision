const hintGame = require("./hint-service");

const easyLevelService = async(readline, randomNumber, askToPlay) => {
    let attempts = 1;

    const gameLoop = () => {
        if(attempts > 10) {
            console.log(`Game over! The correct number was ${randomNumber}.`);
            askToPlay();
        };

        readline.question('Enter your guess: ', numberGuessed => {
            let parseNumberGuessed = parseInt(numberGuessed);

            if(parseNumberGuessed !== randomNumber) {
                numberGuessed > randomNumber ? console.log(`Incorrect! The number is less than ${numberGuessed}.\n`) : console.log(`Incorrect! The number is greater than ${numberGuessed}.\n`);
                attempts++;
                hintGame(readline, randomNumber, gameLoop);
            } else {
                console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
                if(attempts < highScore[0]) {
                    highScore[2] = attempts;
                    savedHighScore(highScore);
                    console.log(`You break the record with ${attempts}`);
                };
                askToPlay();
            };
        });
    };

    gameLoop();
};

module.exports = easyLevelService;