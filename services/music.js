const fetch = require('node-fetch');

const getMusic = async (word) => {
    //console.log('WORD :', word);

    let url = 'https://itunes.apple.com/search?term=';
    url += (typeof word !== 'string' || word.length === 0)? '302053341' : word;

    const response = await fetch(url + '&limit=1');
    const music = await response.json();

    if(music.resultCount === 0) {
        console.log('Aucune chanson correspondante');
        return false;
    } else {
        return music.results[0];
    }
};

module.exports = { getMusic };