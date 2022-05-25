import requests
from bs4 import BeautifulSoup
url = f'https://playvalorant.com/page-data/ko-kr/news/tags/patch-notes/page-data.json'
response = requests.get(url)
if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'lxml')
    newup4 = soup.find_all('body')
    death_agent = str(newup4[0]).find('"url":"/news') + 12
    death_agent2 = str(newup4[0]).find('/"}')
    death_agent3 = str(newup4[0])[death_agent:death_agent2]
    ver = str(death_agent3).replace('/game-updates/valorant-patch-notes-','').replace('-','.')
    death_agent = str(newup4[0]).find('"banner":{"url":"') + 17
    death_agent2 = str(newup4[0]).find('","dimension"')
    death_agent8 = str(newup4[0])[death_agent:death_agent2]#"description":"
    death_agent = str(newup4[0]).find('"description":"') + 15
    death_agent2 = str(newup4[0]).find('","url"')
    death_agent9 = str(newup4[0])[death_agent:death_agent2]
url = f'https://playvalorant.com/page-data/ko-kr/news{death_agent3}/page-data.json'
response = requests.get(url)
if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'lxml')
    newup4 = soup.find_all('body')
    death_agent = str(newup4[0]).find('"video_id":"') + 12
    death_agent2 = str(newup4[0]).find('"},"vo')
    death_agent4 = str(newup4[0])[death_agent:death_agent2]   
    if len(str(death_agent4)) == 11:
        print(f"{ver} 패치노트({ver} PATCH NOTE)")
        print(f'https://playvalorant.com/ko-kr/news{death_agent3}')
        print(f'https://www.youtube.com/watch?v={death_agent4}')
    else:
        print(f'https://playvalorant.com/ko-kr/news{death_agent3}')
    death_agent6 = str(newup4[0]).find("src=") + 7
    death_agent7 = str(newup4[0]).find("\"'/>") - 1
    death_agent5 = str(newup4[0])[death_agent6:death_agent7]   
    if death_agent6 == -1:
        print(death_agent8)
    else:
        if "Highlights" in str(death_agent5):
            print(death_agent5)
        else:
            print(death_agent8)
    print(death_agent9)
