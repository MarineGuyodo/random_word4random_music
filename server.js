const express = require('express');
const app = express();

const { getWord } = require('./services/word');
const { getMusic } = require('./services/music');

app.get('/api', async (_, res) => {
    try {
        let music = '';
        let wordCount = 0;
        
        while(!music) {
            const word = await getWord();
            wordCount++;
            console.log(wordCount, ' - WORD :', word);
            music = await getMusic(word);
            //res.redirect('/api');
        }
        
        res.send(music);
    } catch (error) {
        console.error(error.message);
        res.send('Une erreur est survenue');
    }
});

app.get('/api/word', async (_, res) => {
    const word = await getWord();
    res.send(word);
});

app.get('/api/music', async (req, res) => {
    const music = await getMusic(req.query.word);
    res.send(music);
});

app.listen(5555, () => {
    console.log('Server running on http://localhost:5555/api/music');
});