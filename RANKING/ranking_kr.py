import requests

r = requests.get('https://api.henrikdev.xyz/valorant/v1/leaderboard/kr', headers={'User-Agent': 'info'})
kor = r.json()
b = kor
for i in range(0, len(b)):
    if  (kor[i]['IsAnonymized'] == False):
        print(str(i+1)+'위 ' + kor[i]['gameName'] + '#' + kor[i]['tagLine'])
    else:
        print(str(i+1)+'위 ' + '비밀요원')
