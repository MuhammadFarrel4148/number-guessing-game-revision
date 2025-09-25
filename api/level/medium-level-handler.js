const mediumLevelService = require('../../service/medium-level-service');

const mediumLevelHandler = (readline, askToPlay) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    mediumLevelService(readline, randomNumber, askToPlay);
};

module.exports = mediumLevelHandler;