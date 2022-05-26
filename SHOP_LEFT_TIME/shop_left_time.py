import time

cur_time = datetime.datetime.utcnow()
leave_time = cur_time.replace(hour=0, minute=0, second=0)
diffsec = (leave_time - cur_time).total_seconds()
diffsec = diffsec + 60 * 60 * 24 if diffsec < 0 else diffsec
Second= diffsec
Sec=24*60*60
Si=60*60
Bun=60
days=int(Second//Sec)
Second%=Sec
hours=int(Second//Si)
Second%=Si
minutes=int(Second//Bun)
Second%=Bun
print("%d일 %d시간 %d분 %d초"%(days, hours, minutes, Second))
