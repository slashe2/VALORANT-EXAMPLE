const axios = require('axios');

async function main() {
  const resp = await axios.get(
    'https://playvalorant.com/page-data/ko-kr/news/tags/patch-notes/page-data.json'
  );

  console.log(resp.data['result']['data']['articles']['nodes'][0]['url']['url'].replace('/news/game-updates/valorant-patch-notes-','').replace('-','.').replace('/','') + ' 패치노트')
  console.log(resp.data['result']['data']['articles']['nodes'][0]['description'])
  console.log('https://playvalorant.com/ko-kr' + resp.data['result']['data']['articles']['nodes'][0]['url']['url'])
  console.log(resp.data['result']['data']['articles']['nodes'][0]['banner']['url'])
  }
  main()
