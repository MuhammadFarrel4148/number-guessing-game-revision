const mediumLevelService = require('../../service/medium-level-service');

const randomNumber = Math.floor(Math.random() * 100) + 1;

const mediumLevelHandler = (readline, askToPlay, startGame) => {
    console.log(randomNumber);
    mediumLevelService(readline, randomNumber, askToPlay, startGame);
};

module.exports = mediumLevelHandler;