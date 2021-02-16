const fetch = require('node-fetch');

const getWord = async () => {
    const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
    const word = await response.json();
    return word[0];
};

module.exports = { getWord };