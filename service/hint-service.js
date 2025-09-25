const hintGame = (readline, randomNumber, gameLoop) => {
    readline.question('Do you need a hint (Y/N) ? ', hint => {
        const result = hint.toLowerCase();

        if(result === 'y') {
            randomNumber % 2 === 0 ? console.log(`The number is even`) : console.log(`The number is odd`);
        };

        gameLoop();
    });
}; 

module.exports = hintGame;