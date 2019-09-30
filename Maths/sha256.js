var start = new Date()


var crypto = require('crypto');

for (let i = 0; i < 10000000; i++) {
    var hash = crypto.createHash('sha256').update(i.toString()).digest('base64');
}


var end = new Date() - start
console.log('Execution time: %dms', end)
