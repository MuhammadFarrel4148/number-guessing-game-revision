const easyLevelService = require('../../service/easy-level-service');

const randomNumber = Math.floor(Math.random() * 100) + 1;

const easyLevelHandler = (readline) => {
    try {
        easyLevelService(readline, randomNumber);
        
    } catch(error) {
        console.error();
    };
};

module.exports = easyLevelHandler;