//const fs = require('fs');
// fs.writeFile('mn.txt','test',(err)=>{
//     if (err) throw err;
//     console.log('done');
// })
// console.log('foo');

// const fs = require('fs');
// fs.writeFileSync('test.txt','test');
// console.log('foobar')

{/*server side W/R file*/ }
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     fs.writeFile('mn.txt', 'test', (err) => {
//         if (err) console.log(err);
//         console.log("file is save");
//         fs.readFile('mn.txt',(err,data)=>{
//             res.statusCode = 200;
//             res.setHeader('Conten-Type', 'text/plain');
//             res.end(data.toString());
//             if(err) console.log(err)
//         })
//     })

// });

// server.listen(port, hostname, () => {
//     console.log('hello port 3000')
// })
{/*end server W/R file*/ }

{/*express*/ }
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/user',(req,res)=>{
    res.status(200).json({
        name:"Nantaporn",
        Nickname:"Canddduo"
    })
})

app.listen(3333,()=>{
    console.log('Listen on port 3333');
})

{/*end express*/ }