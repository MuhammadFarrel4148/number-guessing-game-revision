const hardLevelService = require('../../service/hard-level-service');

const randomNumber = Math.floor(Math.random() * 100) + 1;

const hardLevelHandler = (readline, askToPlay, startGame) => {
    console.log(randomNumber);
    hardLevelService(readline, randomNumber, askToPlay, startGame);
};

module.exports = hardLevelHandler;