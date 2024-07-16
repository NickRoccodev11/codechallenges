
let liftoff = document.getElementById("liftoff")
let timer = document.getElementById("timer")
let time = 5

function countdown(){
timer.innerText = time
time -= 1
if(time <0){
   timer.style.display ="none"
    liftoff.style.display = "block"
    clearInterval(count)
    } 
}

let count = setInterval(countdown, 1000)