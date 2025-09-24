const hardLevelService = require('../../service/hard-level-service');

const randomNumber = Math.floor(Math.random() * 100) + 1;

const hardLevelHandler = (readline, askToPlay) => {
    hardLevelService(readline, randomNumber, askToPlay);
};

module.exports = hardLevelHandler;