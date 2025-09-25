const easyLevelService = require('../../service/easy-level-service');

const easyLevelHandler = (readline, askToPlay) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    easyLevelService(readline, randomNumber, askToPlay);
};

module.exports = easyLevelHandler;