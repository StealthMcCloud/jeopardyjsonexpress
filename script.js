const HTTPClient = require('./httpClient.js');
const fs = require('fs');
const url = 'http://jservice.io/api/category?id=';

const categoriesArray = [777, 780, 21, 105, 25, 306, 136, 680, 309, 2537, 1470, 18065, 6145, 9646, 15090, 499, 42, 7, 78, 211, 420, 176];

const categoryPromises = categoriesArray.map(id => HTTPClient(url + id))

Promise.all(categoryPromises)
    .then(categories => 
        fs.writeFileSync('./categories.json', JSON.stringify(categories))
    )