let counter = document.getElementById("counter-red");

let time = 10;

setInterval(countDown, 1000)

function countDown() {
    let seconds = time * 1;
    counter.innerHTML = seconds;
    time--;
   if(seconds == 0){
   window.location.href = "/index.html"
   }
}

