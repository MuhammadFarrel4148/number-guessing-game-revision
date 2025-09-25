const fs = require('fs');
const path = require('path');

const HIGHSCORE_FILE = path.join(__dirname, '..', 'model', 'high-score.JSON');
console.log(HIGHSCORE_FILE);

const loadHighScore = () => {
    try {
        if(!fs.existsSync(HIGHSCORE_FILE)) {
            return [10, 5, 3];
        };

        const dataBuffer = fs.readFileSync(HIGHSCORE_FILE);
        const dataArray = dataBuffer.toString();

        if(dataArray === '') {
            return [10, 5, 3];
        };

        return JSON.parse(dataArray);
    } catch(error) {
        console.error(error);
        return [10, 5, 3];
    }
};

const savedHighScore = (highScore) => {
    try {
        const highScoreJSON = JSON.stringify(highScore);
        fs.writeFileSync(HIGHSCORE_FILE, highScoreJSON);

    } catch(error) {
        console.error(error);
    };
};

module.exports = {
    loadHighScore,
    savedHighScore
};