const axios = require('axios');

axios.get('https://valorant-api.com/v1/maps?language=ko-KR', {'User-Agent': 'info'}).then((Response)=>{
    var data = Response.data['data']
    for (var i = 0; i < data.length; i++) {
        var korname = data[i]['displayName']
        var korwhere = data[i]['coordinates']
        var korimg = data[i]['displayIcon']
        var korloading = data[i]['splash']
        console.log(korname)
        console.log(korwhere)
        console.log(korimg)
        console.log(korloading)
        console.log(i+1 + '/' + data.length)
    }
}).catch((Error)=>{
    console.log(Error);
}) 
