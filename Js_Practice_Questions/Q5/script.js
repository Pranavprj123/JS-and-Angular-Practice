var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var h3 = document.querySelector("h3");
var interval;
start.addEventListener("click", function () {
    var count = 0;
    interval = setInterval(function () {
        h3.textContent = count;
        count++;
        
    }, 1000);

});

stop.addEventListener("click", function () {
    // Stop the interval and reset the count
    h3.textContent = 0;
    clearInterval(interval);
    interval = null;
    // Reset the count variable to 0
    
});