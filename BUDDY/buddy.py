import requests

r = requests.get('https://valorant-api.com/v1/buddies?language=ko-KR')
kor = r.json()
r = requests.get('https://valorant-api.com/v1/buddies')
eng = r.json()
b = kor['data']
d = eng['data']
all = len(b)
counts = 0
for counts in range(0, all):
    korname = b[counts]['displayName'].upper()
    engname = d[counts]['displayName'].upper()
    img = b[counts]['displayIcon']
    print(f'{korname}({engname})\n{img}\n{counts + 1}/{all}')
