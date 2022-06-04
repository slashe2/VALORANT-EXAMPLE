const axios = require('axios');
axios.get('https://valorant-api.com/v1/playercards?language=ko-KR').then((Response)=>{
    console.log(Response.data['data'])
    datakr = Response.data['data']
    for (var i = 0; i < datakr.length; i++) {
	    var name = datakr[i]['displayName']
        var small = datakr[i]['smallArt']
        var large = datakr[i]['largeArt']
        var wide = datakr[i]['wideArt']
        console.log(name, '\n', small, '\n', large, '\n', wide, '\n', i + 1, '/',datakr.length)
    };
}).catch((Error)=>{
    console.log(Error);
})
