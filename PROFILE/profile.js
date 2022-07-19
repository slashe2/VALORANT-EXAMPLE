let id = 'ZK Laz'
let tag = 'ZKWIN'
const axios = require('axios');
axios.get(`https://api.henrikdev.xyz/valorant/v1/account/${id.replace(" ","%20")}/${tag.replace(" ","%20")}`, {'User-Agent': 'info'}).then((Response)=>{
    var data1 = Response.data
    var region = data1['data']['region'] //사용자의 지역(kr, ap, na, eu)
    axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr/${region}/${id.replace(" ","%20")}/${tag.replace(" ","%20")}`, {'User-Agent': 'info'}).then((Response2)=>{
        var data2 = Response2.data
        axios.get(`https://valorant-api.com/v1/competitivetiers?language=ko-KR`, {'User-Agent': 'info'}).then((Response3)=>{
            var data3 = Response3.data
            if (data2['data']['currenttier'] == null) {
                console.log(`${id}#${tag}`) //아이디#태그 출력
                console.log(data1['data']['card']['wide']) //사용자의 플레이어 카드 이미지 링크 출력
                console.log('랭크 없음'); //사용자의 랭크 이름 출력
                console.log(`${data1['data']['account_level']}`) //사용자 계정의 레벨
            } else {
                axios.get(`https://api.henrikdev.xyz/valorant/v3/matches/${region}/${id.replace(" ","%20")}/${tag.replace(" ","%20")}?filter=competitive`, {'User-Agent': 'info'}).then((Response4)=>{
                    var data4 = Response4.data
                    console.log(`${id}#${tag}`) //아이디#태그 출력
                    console.log(data1['data']['card']['wide']) //사용자의 플레이어 카드 이미지 링크 출력
                    var tiermuch = data3['data'].length //현재 에피소드의 티어 갯수 확인
                    console.log(`https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/${data2['data']['currenttier']}/largeicon.png`) //사용자의 랭크 이미지 링크 출력
                    console.log(`https://dak.gg/valorant/profile/${id.replace(" ","%20")}-${tag.replace(" ","%20")}`) //사용자의 dak.gg 링크 출력
                    console.log(`https://tracker.gg/valorant/profile/riot/${id.replace(" ","%20")}%23${tag.replace(" ","%20")}/overview`) //사용자의 tracker.gg 링크 출력
                    console.log(`https://valorant.op.gg/profile/name=${id.replace(" ","%20")}&tagLine=${tag.replace(" ","%20")}`) //사용자의 op.gg 링크 출력
                    console.log(data2['data']['currenttier'])
                    console.log(`${data3['data'][parseInt(tiermuch - 1)]['tiers'][data2['data']['currenttier']]['tierName']}`); //사용자의 랭크 이름 출력
                    console.log(`${data2['data']['ranking_in_tier']}`) //사용자의 랭크에서의 점수 출력(ex. 실버 1 50점)
                    console.log(`${data1['data']['account_level']}`) //사용자 계정의 레벨
                    findme = 0
                    while (data4['data'][0]['players']['all_players'][findme]['puuid'] != data1['data']['puuid']) {
                        findme += 1
                    }
                    if (data4['data'][0]['players']['all_players'][findme]['team'] == 'Red') {
                        if (data4['data'][0]['teams']['red']['has_won'] == true) {
                            var winorlose = '승리'
                        } else {
                            var winorlose = '패배'
                        }     
                        var score = `${data4['data'][0]['teams']['red']['rounds_won']} : ${data4['data'][0]['teams']['red']['rounds_lost']}`          
                    } else {
                        if (data4['data'][0]['teams']['blue']['has_won'] == true) {
                            var winorlose = '승리'
                        } else {
                            var winorlose = '패배'
                        }
                        var score = `${data4['data'][0]['teams']['blue']['rounds_won']} : ${data4['data'][0]['teams']['blue']['rounds_lost']}`
                    }
                    console.log(winorlose) //최근 매치의 승패 여부
                    console.log(score) //최근 매치의 스코어
                    console.log(`${data4['data'][0]['players']['all_players'][findme]['stats']['kills']}/${data4['data'][0]['players']['all_players'][findme]['stats']['deaths']}/${data4['data'][0]['players']['all_players'][findme]['stats']['assists']}`) //최근 매치의 K/D/A
                    console.log(`${data4['data'][0]['metadata']['map'].replace("Split","스플릿").replace("Pearl","펄").replace("Icebox","아이스박스").replace("Ascent","어센트").replace("Breeze","브리즈").replace("Haven","헤이븐").replace("Fracture","프랙처").replace("Bind","바인드")}`) //최근 매치의 맵
                    console.log(data4['data'][0]['players']['all_players'][findme]['character'].replace("Jett","제트").replace("Reyna","레이나").replace("Raze","레이즈").replace("Yoru","요루").replace("Phoenix","피닉스").replace("Neon","네온").replace("KAY/O","케이/오").replace("Sova","소바").replace("Skye","스카이").replace("Breach","브리치").replace("Fade","페이드").replace("Killjoy","킬조이").replace("Cypher","사이퍼").replace("Chamber","체임버").replace("Sage","세이지").replace("Omen","오멘").replace("Viper","바이퍼").replace("Astra","아스트라").replace("Brimstone","브림스톤")) //최근 매치의 요원
                    console.log(`${Math.round(data4['data'][0]['players']['all_players'][findme]['stats']['headshots'] / (data4['data'][0]['players']['all_players'][findme]['stats']['bodyshots'] + data4['data'][0]['players']['all_players'][findme]['stats']['headshots'] + data4['data'][0]['players']['all_players'][findme]['stats']['legshots']) * 100)}%`) //최근 매치의 헤드샷 비율
                    console.log(`${Math.round((data4['data'][0]['players']['all_players'][findme]['stats']['kills'] / data4['data'][0]['players']['all_players'][findme]['stats']['deaths']), 1)}`) //최근 매치의 K/D
                    console.log(data1['data']['region'].replace("kr", "한국").replace("ap", "아시아퍼시픽").replace("na", "북아메리카").replace("eu", "유럽")) //사용자 계정의 서버
                    arrange = [
                        {
                            idtag: `${data4['data'][0]['players']['all_players'][0]['name']}#${data4['data'][0]['players']['all_players'][0]['tag']}`, 
                            score:data4['data'][0]['players']['all_players'][0]['stats']['score'],
                            team:data4['data'][0]['players']['all_players'][0]['team'],
                            agent:data4['data'][0]['players']['all_players'][0]['character'],
                            kda:`${data4['data'][0]['players']['all_players'][0]['stats']['kills']}/${data4['data'][0]['players']['all_players'][0]['stats']['deaths']}/${data4['data'][0]['players']['all_players'][0]['stats']['assists']}`
                        },
                        {
                            idtag: `${data4['data'][0]['players']['all_players'][1]['name']}#${data4['data'][0]['players']['all_players'][1]['tag']}`, 
                            score:data4['data'][0]['players']['all_players'][1]['stats']['score'],
                            team:data4['data'][0]['players']['all_players'][1]['team'],
                            agent:data4['data'][0]['players']['all_players'][1]['character'],
                            kda:`${data4['data'][0]['players']['all_players'][1]['stats']['kills']}/${data4['data'][0]['players']['all_players'][1]['stats']['deaths']}/${data4['data'][0]['players']['all_players'][1]['stats']['assists']}`
                        },
                        {
                            idtag: `${data4['data'][0]['players']['all_players'][2]['name']}#${data4['data'][0]['players']['all_players'][2]['tag']}`, 
                            score:data4['data'][0]['players']['all_players'][2]['stats']['score'],
                            team:data4['data'][0]['players']['all_players'][2]['team'],
                            agent:data4['data'][0]['players']['all_players'][2]['character'],
                            kda:`${data4['data'][0]['players']['all_players'][2]['stats']['kills']}/${data4['data'][0]['players']['all_players'][2]['stats']['deaths']}/${data4['data'][0]['players']['all_players'][2]['stats']['assists']}`
                        },
                        {
                            idtag: `${data4['data'][0]['players']['all_players'][3]['name']}#${data4['data'][0]['players']['all_players'][3]['tag']}`, 
                            score:data4['data'][0]['players']['all_players'][3]['stats']['score'],
                            team:data4['data'][0]['players']['all_players'][3]['team'],
                            agent:data4['data'][0]['players']['all_players'][3]['character'],
                            kda:`${data4['data'][0]['players']['all_players'][3]['stats']['kills']}/${data4['data'][0]['players']['all_players'][3]['stats']['deaths']}/${data4['data'][0]['players']['all_players'][3]['stats']['assists']}`
                        },
                        {
                            idtag: `${data4['data'][0]['players']['all_players'][4]['name']}#${data4['data'][0]['players']['all_players'][4]['tag']}`, 
                            score:data4['data'][0]['players']['all_players'][4]['stats']['score'],
                            team:data4['data'][0]['players']['all_players'][4]['team'],
                            agent:data4['data'][0]['players']['all_players'][4]['character'],
                            kda:`${data4['data'][0]['players']['all_players'][4]['stats']['kills']}/${data4['data'][0]['players']['all_players'][4]['stats']['deaths']}/${data4['data'][0]['players']['all_players'][4]['stats']['assists']}`
                        },
                        {
                            idtag: `${data4['data'][0]['players']['all_players'][5]['name']}#${data4['data'][0]['players']['all_players'][5]['tag']}`, 
                            score:data4['data'][0]['players']['all_players'][5]['stats']['score'],
                            team:data4['data'][0]['players']['all_players'][5]['team'],
                            agent:data4['data'][0]['players']['all_players'][5]['character'],
                            kda:`${data4['data'][0]['players']['all_players'][5]['stats']['kills']}/${data4['data'][0]['players']['all_players'][5]['stats']['deaths']}/${data4['data'][0]['players']['all_players'][5]['stats']['assists']}`
                        },
                        {
                            idtag: `${data4['data'][0]['players']['all_players'][6]['name']}#${data4['data'][0]['players']['all_players'][6]['tag']}`, 
                            score:data4['data'][0]['players']['all_players'][6]['stats']['score'],
                            team:data4['data'][0]['players']['all_players'][6]['team'],
                            agent:data4['data'][0]['players']['all_players'][6]['character'],
                            kda:`${data4['data'][0]['players']['all_players'][6]['stats']['kills']}/${data4['data'][0]['players']['all_players'][6]['stats']['deaths']}/${data4['data'][0]['players']['all_players'][6]['stats']['assists']}`
                        },
                        {
                            idtag: `${data4['data'][0]['players']['all_players'][7]['name']}#${data4['data'][0]['players']['all_players'][7]['tag']}`, 
                            score:data4['data'][0]['players']['all_players'][7]['stats']['score'],
                            team:data4['data'][0]['players']['all_players'][7]['team'],
                            agent:data4['data'][0]['players']['all_players'][7]['character'],
                            kda:`${data4['data'][0]['players']['all_players'][7]['stats']['kills']}/${data4['data'][0]['players']['all_players'][7]['stats']['deaths']}/${data4['data'][0]['players']['all_players'][7]['stats']['assists']}`
                        },
                        {
                            idtag: `${data4['data'][0]['players']['all_players'][8]['name']}#${data4['data'][0]['players']['all_players'][8]['tag']}`, 
                            score:data4['data'][0]['players']['all_players'][8]['stats']['score'],
                            team:data4['data'][0]['players']['all_players'][8]['team'],
                            agent:data4['data'][0]['players']['all_players'][8]['character'],
                            kda:`${data4['data'][0]['players']['all_players'][8]['stats']['kills']}/${data4['data'][0]['players']['all_players'][8]['stats']['deaths']}/${data4['data'][0]['players']['all_players'][8]['stats']['assists']}`
                        },
                        {
                            idtag: `${data4['data'][0]['players']['all_players'][9]['name']}#${data4['data'][0]['players']['all_players'][9]['tag']}`, 
                            score:data4['data'][0]['players']['all_players'][9]['stats']['score'],
                            team:data4['data'][0]['players']['all_players'][9]['team'],
                            agent:data4['data'][0]['players']['all_players'][9]['character'],
                            kda:`${data4['data'][0]['players']['all_players'][9]['stats']['kills']}/${data4['data'][0]['players']['all_players'][9]['stats']['deaths']}/${data4['data'][0]['players']['all_players'][9]['stats']['assists']}`
                        },
                    ]
                    allplayers = arrange.sort(function(a, b)  {
                        return b.score - a.score;
                    })
                    playerstatsour = ''
                    playerstatsyou = ''
                    for (var i = 0; i < allplayers.length; i++) {
                        if (data4['data'][0]['players']['all_players'][findme]['team'] == allplayers[i]['team'])  {
                            playerstatsour = playerstatsour + `${allplayers[i]['idtag']} ${allplayers[i]['kda']}\n`
                        } 
                    }
                    for (var i = 0; i < allplayers.length; i++) {
                        if (data4['data'][0]['players']['all_players'][findme]['team'] != allplayers[i]['team'])  {
                            playerstatsyou = playerstatsyou + `${allplayers[i]['idtag']} ${allplayers[i]['kda']}\n`
                        } 
                    }
                    console.log(playerstatsour) //아군의 스탯
                    console.log(playerstatsyou) //적군의 스탯
                }).catch((Error)=>{
                console.log(Error);
                })  
            }
        }).catch((Error)=>{
        console.log(Error);
        })  
    }).catch((Error)=>{
    console.log(Error);
    })  
}).catch((Error)=>{
    console.log(Error);
})  
