const axios = require('axios');
axios.get('https://api.henrikdev.xyz/valorant/v1/leaderboard/kr', {'User-Agent': 'info'}).then((Response)=>{
    var data = Response.data
    for (var i = 0; i < data.length; i++) {
        if  (data[i]['IsAnonymized'] == false) {
            console.log((i+1)+'위 ' + Response.data[i]['gameName'] + '#' + Response.data[i]['tagLine'])
        } else {
            console.log((i+1)+'위 ' + '비밀요원')
        }
    };
}).catch((Error)=>{
    console.log(Error);
})  
