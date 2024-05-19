let worktitle = document.getElementById("work");
let breaktitle = document.getElementById("break");

let workTime = 25;
let breakTime = 5;

let seconds = "00";

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    worktitle.classList.add('active');
}

// start timer
function start() {

    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";
    // change time

    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // countdown

    let timerfunction = () => {
        // change display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds  = seconds - 1;

        if(seconds === 0){
            workMinutes = workMinutes-1;
            if (workMinutes == -1) {
                if (breakCount % 2 == 0) {
                    // start count
                    workMinutes = breakMinutes;
                    breakCount++;

                    // change panel
                    worktitle.classList.remove('active');
                    breaktitle.classList.add('active');
                }
                else{
                    // continue work
                    workMinutes = workTime;
                    breakCount++;

                    // change panel
                    breaktitle.classList.remove('active');
                    worktitle.classList.add('active');
                    
                }
            }
            seconds = 59
        }
    }

    setInterval(timerfunction, 1000)
}