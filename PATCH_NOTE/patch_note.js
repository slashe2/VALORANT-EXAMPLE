const axios = require('axios');

async function main() {
  const resp = await axios.get(
    'https://playvalorant.com/page-data/ko-kr/news/tags/patch-notes/page-data.json'
  );
  const more = resp.data['result']['data']['articles']['nodes'][0]['url']['url']
  console.log(more)
  console.log(resp.data['result']['data']['articles']['nodes'][0]['url']['url'].replace('/news/game-updates/valorant-patch-notes-','').replace('-','.').replace('/','') + ' 패치노트')
  console.log(resp.data['result']['data']['articles']['nodes'][0]['description'])
  console.log('https://playvalorant.com/ko-kr' + resp.data['result']['data']['articles']['nodes'][0]['url']['url'])
  const resp2 = await axios.get(
    `https://playvalorant.com/page-data/ko-kr/${more}/page-data.json` //https://playvalorant.com/page-data/ko-kr/news{death_agent3}/page-data.json
  );
  var Highlights = JSON.stringify(resp2.data)
  console.log(Highlights)
  if (Highlights.includes("Highlights") == true){
    var a = Highlights.indexOf('src=') +6
    var b = Highlights.indexOf(`\" data-sys-asset-uid=`) - 1
    console.log(Highlights.substring(a, b))
  } else {
    console.log(resp.data['result']['data']['articles']['nodes'][0]['banner']['url'])
  }
  var c = Highlights.indexOf('"video_id"') + 12
  var d = Highlights.indexOf('"},"vo')
  if (Highlights.substring(c, d) != '{"component') {
    console.log('https://www.youtube.com/watch?v=' + Highlights.substring(c, d))
  } else {
    console.log('none')
  }
  }
  main()
