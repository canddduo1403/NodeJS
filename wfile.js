const async = require('async')
const request = require('request')

const fs = require('fs');

const items = []

const q = async.queue((task, callback) => {
    fs.writeFile('mn_' + task.number + '.txt', 'this is file from process ' + task.number, (err) => {
        console.log('done');
        callback()
    })
})

q.drain = () => {
    console.log('all items have been process');
}

for (i = 0; i < 100; i++) {
    items.push({ number: i });
}

q.push(items,(err)=>{
    console.log('finised process itens')
})