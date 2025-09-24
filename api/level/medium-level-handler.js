const mediumLevelService = require('../../service/medium-level-service');

const randomNumber = Math.floor(Math.random() * 100) + 1;

const mediumLevelHandler = (readline) => {
    try {
        mediumLevelService(readline, randomNumber);
        
    } catch(error) {
        console.error();
    };
};

module.exports = mediumLevelHandler;