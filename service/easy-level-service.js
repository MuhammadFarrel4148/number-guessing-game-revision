const easyLevelService = async(readline, randomNumber) => {
    let attempts = 0;

    const gameLoop = () => {
        if(attempts === 10) {
            console.log(`Game over! The correct number was ${randomNumber}.`);
            readline.close();
            return;
        };

        readline.question('Enter your guess: ', numberGuessed => {
            let parseNumberGuessed = parseInt(numberGuessed);

            if(parseNumberGuessed !== randomNumber) {
                numberGuessed > randomNumber ? console.log(`Incorrect! The number is less than ${numberGuessed}.\n`) : console.log(`Incorrect! The number is greater than ${numberGuessed}.\n`);
                attempts++;
                gameLoop();
            } else {
                console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
                readline.close();
                return;
            };
        });
    };

    gameLoop();
};

module.exports = easyLevelService;