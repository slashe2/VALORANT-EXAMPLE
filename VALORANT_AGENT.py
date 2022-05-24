import requests

r = requests.get('https://valorant-api.com/v1/agents?language=ko-KR&isPlayableCharacter=true')
kor = r.json()
b = kor['data']
counts = 0
for counts in range(0, len(b)):
    korname = b[counts]['displayName'].upper()
    kordescription = b[counts]['description'].upper()
    korskill = len(b[counts]['abilities'])
    print(f'{korname}\n{kordescription}')
    for skillcount in range(0, korskill):
        korskillname = b[counts]['abilities'][skillcount]['displayName'].upper()
        korskilldescription = b[counts]['abilities'][skillcount]['description'].upper()
        korrole = b[counts]['role']['displayName'].upper()
        korroledescription =  b[counts]['role']['description'].upper()
        print(korskillname)
        print(korskilldescription)
        print(f'{korrole} \n{korroledescription}')
    print(f'{counts + 1}/{len(b)}')
    print('====================================================================================================')
