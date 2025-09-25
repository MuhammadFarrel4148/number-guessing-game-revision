const easyLevelService = require('../../service/easy-level-service');

const easyLevelHandler = (readline, askToPlay, startGame) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    easyLevelService(readline, randomNumber, askToPlay, startGame);
};

module.exports = easyLevelHandler;