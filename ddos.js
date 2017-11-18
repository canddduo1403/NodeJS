const async = require('async')

const request = require('request')

const items = []
const q = async.queue(function (task, callback) {
    request('http://apptitude.co.th/', (err, res, body) => {
        if(err){
            console.log(err)
            callback()
        }
        console.log('statusCode from apptitude', res && res.statusCode);
        callback()
    })
}, 1)

q.drain = () => {
    console.log('all items have been process');
}

for (i = 0; i < 1000; i++) {
    items.push({ number: i });
}

q.push(items, (err) => {
    console.log('finished process item')
})
