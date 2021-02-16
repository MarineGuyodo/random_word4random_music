const { getWord } = require('./services/word');
const { getMusic } = require('./services/music');

(async () => {
    try {
        let music = '';
        let wordCount = 0;

        while(!music) {
            const word = await getWord();
            wordCount++;
            console.log(wordCount, ' - WORD :', word);
            music = await getMusic(word);
        }
        console.log(music);
    } catch(err) {
        console.error(err.message);
    }
})();