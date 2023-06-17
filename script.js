let [milliseconds, seconds, minutes] = [0,0,0];
let timer = document.querySelector('.timer');
let intervalId = 0;

document.getElementById('start').addEventListener('click', () =>{intervalId = setInterval(stopwatch,10)});

document.getElementById('stop').addEventListener('click', () =>{clearInterval(intervalId)})

document.getElementById('reset').addEventListener('click', () =>{
    clearInterval(intervalId);
    [milliseconds, seconds, minutes] = [0,0,0];
    timer.innerHTML = '00 : 00: 00';
    timer.setAttribute("style", "padding: 1rem 3rem;")
})

function stopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++
    }
    
    let ms = milliseconds.toString().padStart(2, '0');
    let s = seconds.toString().padStart(2, '0');
    let m = minutes.toString().padStart(2, '0');

    timer.innerHTML = ` ${m} : ${s} : ${ms} `;
    timer.setAttribute("style", "padding: 1rem 3rem;")
}


//Another way to format the numer as 00 : 00 : 00
// let m = minutes < 10 ? "0" + minutes : minutes;
// let s = seconds < 10 ? "0" + seconds : seconds;
// let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;