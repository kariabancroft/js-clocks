$(document).ready( function() {

    // With this function we will assemble our clock, 
    // calling up whole date and then hours, minutes, 
    // and seconds individually.

    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
    
    
        // Let's set the AM and PM meridiem and 
        // 12-hour format
        var meridiem = "AM";  // Default is AM
        
        // If hours is greater than 12
        if (hours > 12) {
            hours = hours - 12; // Convert to 12-hour format
            meridiem = "PM"; // Keep track of the meridiem
        }
        // 0 AM and 0 PM should read as 12
        if (hours === 0) {
            hours = 12;    
        }


        // If the hours digit is less than 10
        if(hours < 10) {
            // Add the "0" digit to the front
            // so 9 becomes "09"
            hours = "0" + hours;
        }
        // Format minutes and seconds the same way
        if(minutes < 10) {
            minutes = "0" + minutes;
        }        
        if(seconds < 10) {
            seconds = "0" + seconds;
        }
    
        // This gets a "handle" to the clock div in our HTML
        var clockDiv = document.getElementById('clock');

        // Then we set the text inside the clock div 
        // to the hours, minutes, and seconds of the current time
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    }
    
    // This runs the displayTime function the first time
    displayTime();
    
    // This makes our clock 'tick' by repeatedly
    // running the displayTime function every second.
    setInterval(displayTime, 1000);

});