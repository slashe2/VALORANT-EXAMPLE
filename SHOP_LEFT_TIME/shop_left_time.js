function remaindTime() {
  var now = new Date();
  var end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),09,00,00);


  var nt = now.getTime();
  var et = end.getTime();
  if(nt<et){
    console.log('d')
    var end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),09,00,00);
    var et = end.getTime();
  } else {
    console.log('f')
    var end = new Date(now.getFullYear(),now.getMonth(),now.getDate() + 1,09,00,00);
    var et = end.getTime();    
  }
  sec =parseInt(et - nt) / 1000;
  day  = parseInt(sec/60/60/24);
  sec = (sec - (day * 60 * 60 * 24));
  hour = parseInt(sec/60/60);
  sec = (sec - (hour*60*60));
  min = parseInt(sec/60);
  sec = parseInt(sec-(min*60));
  if(hour<10){hour="0"+hour;}
  if(min<10){min="0"+min;}
  if(sec<10){sec="0"+sec;}
    console.log(hour, min, sec)

 }
setInterval(remaindTime,1000); 
