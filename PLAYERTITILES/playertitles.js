const axios = require('axios');

axios.get('https://valorant-api.com/v1/playertitles?language=ko-KR', {'User-Agent': 'info'}).then((Response)=>{
    var data = Response.data['data']
    for (var i = 0; i < data.length; i++) {
        var korname = data[i]['displayName']
        if (korname != ' '){
            console.log(korname)
        }
        else {
            console.log('칭호 없음')
        }
        console.log(i+1 + '/' + data.length)
    }
}).catch((Error)=>{
    console.log(Error);
}) 
