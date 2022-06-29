const axios = require('axios');

function generateURL(from='auto', to='en', text) {
    return encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${text}`);
}

function postRequest(url) {
    return axios.get(url).then(response => {
        return response.data[0][0][0];
    }).catch(error => {
        console.log(error);
    });
}

module.exports.translate = async (text, from='auto', to='en') => {
    const url = generateURL(from, to, text);
    return postRequest(url);
}