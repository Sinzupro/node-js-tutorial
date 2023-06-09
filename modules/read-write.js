
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./modules/sub/testing.txt', 'utf8');


writeFileSync(
 './modules/sub/empty.txt',
 `copy from text ${first}`,
    {flag: 'a'} // append 
)


console.log(first);
// CALLBACKS 
const { readFile, writeFile, read} = require('fs');

readFile('./modules/sub/testing.txt', 'utf-8', (error, result) => {
    if(error) {
        console.log(error)
        return
    }

    const first = result;
    console.log(first)
})

writeFile(
    './modules/sub/async.txt', `Here is the words `, (err, result) => {
        if(err) {console.log(err)
            return
        }
        console.log(result)
    }
)
