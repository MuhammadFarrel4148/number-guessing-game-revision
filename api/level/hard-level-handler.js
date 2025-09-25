const hardLevelService = require('../../service/hard-level-service');

const hardLevelHandler = (readline, askToPlay) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    hardLevelService(readline, randomNumber, askToPlay);
};

module.exports = hardLevelHandler;