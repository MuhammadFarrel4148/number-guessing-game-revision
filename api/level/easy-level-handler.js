const easyLevelService = require('../../service/easy-level-service');

const randomNumber = Math.floor(Math.random() * 100) + 1;

const easyLevelHandler = (readline, askToPlay) => {
    easyLevelService(readline, randomNumber, askToPlay);
};

module.exports = easyLevelHandler;