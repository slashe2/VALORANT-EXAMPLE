const axios = require('axios');

axios.get('https://valorant-api.com/v1/buddies?language=ko-KR', {'User-Agent': 'info'}).then((Response)=>{
    var data = Response.data['data']
    for (var i = 0; i < data.length; i++) {
        var korname = data[i]['displayName']
        var korimg = data[i]['displayIcon']
        console.log(korname)
        console.log(korimg)
        console.log(i+1 + '/' + data.length)
    }
}).catch((Error)=>{
    console.log(Error);
}) 
