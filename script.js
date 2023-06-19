var sec = 0;
var min = 0;
var hrs = 0;
var interval;


function twoDigits(digit) {
    if(digit < 10) {
        return('0'+digit)
    }else {
        return(digit)
    }
}

function counter() {
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60) {
            hrs++
            min=0
        }
    }

    document.getElementById('cronometro').innerHTML = twoDigits(hrs) + ":" + twoDigits(min) + ":" + twoDigits(sec);
}

function start() {
    interval = setInterval(counter,1000);
    document.getElementById('cronometro').style.border = '1px solid red';
}

function pause() {
    clearInterval(interval);
    document.getElementById('cronometro').style.border = '1px solid white'
}

function stop() {
    clearInterval(interval);
    sec=0;
    min=0;
    document.getElementById('cronometro').innerHTML = "00:00:00";
}