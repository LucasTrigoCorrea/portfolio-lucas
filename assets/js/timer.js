//SCRIPT JS FOR TIMER
function timer() {
//FUNCTION CONFIGURE SECONDS
function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', { 
        Hour12: false, 
        timeZone: 'UTC',
    });
}

const timer = document.querySelector('.timer');
let seconds = 0;
let timerOn;

//FUNCTION COUNTING TIMER
function initTimer() {
    timerOn = setInterval(function() {
        seconds++;
        timer.innerHTML = getTimeFromSeconds(seconds);
    }, 1000 );
}

//ELEMENT CLICKED
document.addEventListener('click', function(e) {
    const element = e.target;
//BUTTON RESET
    if(element.classList.contains('reset')) {
        timer.classList.remove('paused');
        clearInterval(timerOn);
        timer.innerHTML = '00:00:00';
        seconds = 0;
    }
//BUTTON PAUSE
    if(element.classList.contains('pause')) {
        timer.classList.add('paused');
        clearInterval(timerOn);
    }
//BUTTON INIT
    if(element.classList.contains('init')) {
        timer.classList.remove('paused');
        clearInterval(timerOn);
        initTimer();
    }
});
}
timer()





