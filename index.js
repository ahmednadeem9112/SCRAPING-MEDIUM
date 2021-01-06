const axios = require('axios');
const  cheerio = require('cheerio');

axios.get('https://www.forextradingbig.com/instaforex-broker-review/?ref=hackernoon.com').then(response => {
const html = response.data;
const $ = cheerio.load(html);

const scrapedData = $('a','.comment-bubble').text()
console.log(scrapedData);
}).catch(error => {
    console.log(error);
});


