var start = new Date()


var num = 0;
for (let i = 0; i < 1000000000; i++) {
    num += 1;
}


var end = new Date() - start
console.log('Execution time: %dms', end)
