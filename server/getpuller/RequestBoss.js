let request = require('request');

var getHandler = () => {

    return new Promise(( resolve,reject) => {
        request({
            url: 'https://www.bitstamp.net/api/v2/ticker/xrpusd/',
            json: true
        }, (error, response, body) => {
            console.log(JSON.stringify(body));
            console.log("things are resolved");
            resolve(body);
        })
    })
}


module.exports = { getHandler };