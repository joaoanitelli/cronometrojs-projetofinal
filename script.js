var sec = 0;
var min = 0;
var hr = 0;
var interval;

function twoDigits(digit) {
    if(digit<10) {
        return "0"+digit
    }else{
        return digit
    }
}

function counter() {
    sec++
    if (sec==60){
        sec = 0
        min++
        if (min==60) {
            min = 0
            hr++
        }
    }

    document.getElementById('cronometro').innerHTML = twoDigits(hr)+":"+twoDigits(min)+":"+twoDigits(sec);
}

function start() {
    interval = setInterval(counter,1000);
    document.getElementById('cronometro').style.border = '2px solid red'
}

function pause() {
    clearInterval(interval);
    document.getElementById('cronometro').style.border = '2px solid gray'
}

function stop() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById('cronometro').innerHTML = "00:00:00";
    document.getElementById('cronometro').style.border = '2px solid white'
}