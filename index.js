//const { html } = require('cheerio');
const cheerio = require('cheerio');
const { error } = require('console');
const request = require('request');

request('https://medium.com/', (error,response,html) => {
if (!error && response.statusCode == 200) {
const $ = cheerio.load(html);
const siteHeading = $('.no');

const output = siteHeading.text();
console.log(output);
}
})
