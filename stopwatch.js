// global variables
var time = 0.0;
var running = false;
var interval;
var pastimes = [];



// execute functions here

setUp();

// function definitions

function startTimer(){
    if (running == false){
        interval = setInterval(function(){
            time = time + 0.01;
            document.getElementById("timer").innerHTML = time.toFixed(2);
        },10)
        running = true;
    }
}

function startStop(){
    if(running == false){
        startTimer();
    }
    else{
        clearInterval(interval);
        running = false;
    }
}

function recordPastTime(){
    if(running == true){
        pastimes.push(time);
        document.getElementById('pasttimes').innerHTML += time.toFixed(2);
        document.getElementById('pasttimes').innerHTML += "<br>";
        //document.getElementById('pasttimes').innerHTML = pastimes;
    }    
}

function resetTimer(){
    clearInterval(interval);
    document.getElementById('pasttimes').innerHTML = "";
    time = 0;
    document.getElementById("timer").innerHTML = time;
    running = false;
}

function setUp(){

    document.getElementById('startstop').addEventListener('click',function(){
            startStop();
    });

    document.addEventListener('keypress',function(event){
        var charCode = event.keyCode || event.which;
        var charStr = String.fromCharCode(charCode);
        //alert(charStr);
        if(charStr =='s' || charStr == 'S' ){
            startStop();
        }
        if(charStr == 't' || charStr == 'T'){
            recordPastTime();
        }
        if(charStr == 'r' || charStr == 'R'){
            resetTimer();
        }
    });

    document.getElementById('recordtime').addEventListener('click',function(){
        recordPastTime();
    });

    document.getElementById('reset').addEventListener('click',function(){
        resetTimer();
    });
}

