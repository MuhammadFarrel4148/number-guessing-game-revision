const mediumLevelService = async(readline, randomNumber, askToPlay, startGame) => {
    let attempts = 0;

    const gameLoop = () => {
        if(attempts === 5) {
            console.log(`Game over! The correct number was ${randomNumber}.`);
            askToPlay(startGame);
        };

        readline.question('Enter your guess: ', numberGuessed => {
            let parseNumberGuessed = parseInt(numberGuessed);

            if(parseNumberGuessed !== randomNumber) {
                numberGuessed > randomNumber ? console.log(`Incorrect! The number is less than ${numberGuessed}.\n`) : console.log(`Incorrect! The number is greater than ${numberGuessed}.\n`);
                attempts++;
                gameLoop();
            } else {
                console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
                askToPlay(startGame);
            };
        });
    };

    gameLoop();
};

module.exports = mediumLevelService;