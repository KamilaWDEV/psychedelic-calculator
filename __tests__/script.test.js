'use strict';
const script = require('./script');
const path = require('path');

test('displays an correct hour after a click', () => {
    document.body.innerHTML = fs.readFileSync(path.resolve(__dirname, '../index.html'))
    
    require('../clickMe');
    
    document.getElementById('btn').click();

    expect(
        document.getElementById('hour').innerText
    ).toEqual(
        new Date()
    );

})
