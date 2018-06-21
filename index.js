const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const display = document.querySelector('.display-clock');

var running = 0;
var time = 0;;


start.addEventListener('click', () => {
    running = 1;
    increment();
    
});
stop.addEventListener('click', () => {
    running = 0;
});
reset.addEventListener('click', () => {
    running = 0;
    time = 0;
    display.value = "00:00:00"; 
});

function increment() {

    if(running == 1){
        setTimeout(function() {


            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10);
            var tenths = time % 10;

            if(mins < 10){
                mins = "0" + mins;
            }
            if(secs < 10) {
                secs = "0" + secs;
            }

            display.value = mins + ":" + secs + ":" + "0" + tenths;
            increment();
        }, 100);
    }
    
}