// Kullanıcıdan bilgi isteme
let isim=prompt("İsminizi girin: ");
// myName id sahip etikete kullanıcı ismi yazdırma 
let myName=document.querySelector("#myName");
myName.innerHTML=`${isim}`

// Saat,dakika,saniye bilgisi çekilerek değişkenlerin içine atılıyor
var tarih=new Date();
var saat=tarih.getHours();
var dakika=tarih.getMinutes();
var saniye=tarih.getSeconds();	
let myClock=document.querySelector("#myClock");
myClock.innerHTML=`${saat}: ${dakika}: ${saniye}`