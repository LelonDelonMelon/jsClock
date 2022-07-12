let username = prompt("Adınızı giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = `${username}`



function getTimeOnly() {
    var simdi = new Date();
    return simdi.toLocaleTimeString();    
}

function getTime() {
    var sonuc = new Array(3);
    var simdi = new Date();

    sonuc[0] = simdi.getHours();
    sonuc[1] = simdi.getMinutes();
    sonuc[2] = simdi.getSeconds();

    
    for (i = 0; i < 3; i++)
        sonuc[i] = sonuc[i] < 10 ? '0' + sonuc[i] : sonuc[i];

    return sonuc;    
}
function saatGoster() {
    saat = getTimeOnly();
    document.write("getTimeOnly : " + saat + "<br/>");

    saat = getTime();
    document.write("getTime : " + saat[0] + "/" + saat[1] + "/" + saat[2] + "<br/>");
}
saatGoster();
function saatGoster() {
    var saat = document.getElementById("saatKutu");
    saat.innerHTML = getTimeOnly();
}


saatGoster();

setInterval("saatGoster()", 1000);

var d = new Date();
var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
document.getElementById("test").innerHTML = gunler[d.getDay()];