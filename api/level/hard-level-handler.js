const hardLevelService = require('../../service/hard-level-service');

const randomNumber = Math.floor(Math.random() * 100) + 1;

const hardLevelHandler = (readline) => {
    try {
        hardLevelService(readline, randomNumber);
        
    } catch(error) {
        console.error();
    };
};

module.exports = hardLevelHandler;