import requests

r = requests.get('https://valorant-api.com/v1/playercards?language=ko-KR')
kor = r.json()
r = requests.get('https://valorant-api.com/v1/playercards')
eng = r.json()
b = kor['data']
d = eng['data']
all = len(b)
counts = 0
for counts in range(0, all):
    korname = b[counts]['displayName'].upper()
    engname = d[counts]['displayName'].upper()
    small = b[counts]['smallArt']
    large = b[counts]['largeArt']
    wide = b[counts]['wideArt']
    print(f'{korname}({engname})\n{small}\n{large}\n{wide}\n{counts + 1}/{all}')
