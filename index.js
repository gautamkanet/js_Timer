let btnstart = document.querySelector('#start');
let min = prompt("Enter Time (in minutes) : ");
let sec = 60;
if (min === null || min === '' || isNaN(min) || min <= 0) {
    document.getElementById("min").innerHTML = '00';
    document.getElementById("sec").innerHTML = '00';
    btnstart.disabled = true;
    sec = 0;
    alert("Invalid input. Reloading the page.");
    location.reload();
} else {
    min = parseInt(min); // Convert string to number
    document.getElementById("min").innerHTML = min > 9 ? min : "0" + min;
    document.getElementById("sec").innerHTML = "00";
}


let run = false;

function start() {
    btnstart.disabled = true;
    run = true;
    timer();
}
function stop() {
    run = false;
    btnstart.disabled = false;
}

function reset() {
    location.reload();
}

// function timer() {
//     if (run === true) {
//         sec = sec - 1;
//         if (sec === 0) {
//             if(min !== 0){
//                 min = min - 1;
//                 sec = 60;
//             }
//         }
//         if (min == 1) {
//             if (sec == 1) {
//                 run = false;
//                 alert("Timer Completed")
//                 sec = "00";
//                 min = 0;
//             }
//         }

//         document.getElementById("sec").innerHTML = sec;
//         if (min > 9) {
//             document.getElementById("min").innerHTML = min;
//         } else {
//             document.getElementById("min").innerHTML = "0" + min;
//         }
//         setTimeout(timer, 100)
//     }
// }

function timer() {
    if (run === true) {
        if (sec === 0) {
            if (min > 0) {
                min -= 1;
                sec = 59;
            } else {
                run = false;
                alert("Timer Completed");
                document.getElementById("sec").innerHTML = "00";
                document.getElementById("min").innerHTML = "00";
                return;
            }
        } else {
            sec -= 1;
        }

        document.getElementById("sec").innerHTML = sec > 9 ? sec : "0" + sec;
        document.getElementById("min").innerHTML = min > 9 ? min : "0" + min;

        setTimeout(timer, 100);
    }
}