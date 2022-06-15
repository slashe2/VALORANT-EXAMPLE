const axios = require('axios');

axios.get('https://valorant-api.com/v1/agents?language=ko-KR&isPlayableCharacter=true', {'User-Agent': 'info'}).then((Response)=>{
    var data = Response.data['data']
    for (var i = 0; i < data.length; i++) {
        var korname = data[i]['displayName']
        var kordescription = data[i]['description']
        console.log(korname)
        console.log(kordescription)
        for (var j = 0; j < data[i]['abilities'].length; j++){
            var korskillname = data[i]['abilities'][j]['displayName']
            var korskilldescription = data[i]['abilities'][j]['description']
            var korrole = data[i]['role']['displayName']
            var korroledescription = data[i]['role']['description']
            console.log(korskillname)
            console.log(korskilldescription)
            console.log(korrole + '\n' + korroledescription)
        console.log(i+1 + '/' + data.length)
        }
    }
}).catch((Error)=>{
    console.log(Error);
}) 
