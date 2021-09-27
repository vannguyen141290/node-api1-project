const server = require('./api/server');

const port = 5000;

console.log('---Console.log from Index.js -----')
console.log('USERNAME -----', process.env.USERNAME)

// START YOUR SERVER HERE
server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
