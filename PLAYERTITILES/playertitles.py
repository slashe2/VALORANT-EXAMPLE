import requests

r = requests.get('https://valorant-api.com/v1/playertitles?language=ko-KR')
kor = r.json()
b = kor['data']
all = len(b)
counts = 0
for counts in range(0, all):
    korname = b[counts]['displayName'].upper()
    print(f'{korname}\n{counts + 1}/{all}')
