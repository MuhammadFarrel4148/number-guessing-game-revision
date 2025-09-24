const mediumLevelService = require('../../service/medium-level-service');

const randomNumber = Math.floor(Math.random() * 100) + 1;

const mediumLevelHandler = (readline, askToPlay) => {
    mediumLevelService(readline, randomNumber, askToPlay);
};

module.exports = mediumLevelHandler;