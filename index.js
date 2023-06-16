setInterval(()=>{
    date=new Date();
   var htime=date.getHours();
   var mtime=date.getMinutes();
  var stime=date.getSeconds();
  var hrotation=30*htime+mtime/2;
 var mrotation=6*mtime;

  var  srotation=6*stime;
     document.querySelector("#second").style.transform=`rotate(${srotation}deg)`;
     document.querySelector("#hour").style.transform=`rotate(${hrotation}deg)`;
     document.querySelector("#minute").style.transform=`rotate(${mrotation}deg)`;
  
},1000) ;



/*hour.style.transform='rotate(${hrotation}deg)';
minute.style.transform='rotate(${mrotation}deg)';
second.style.transform='rotate(${srotation}deg)';*/