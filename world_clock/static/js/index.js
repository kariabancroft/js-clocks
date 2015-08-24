// document.addEventListener('DOMContentLoaded', function(){

    // With this function we will assemble our clock,
    // calling up whole date and then hours, minutes,
    // and seconds individually.

    function displayTime(clock_num) {
      var currentTime, timezone;
      var options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

        switch (clock_num) {
          case 1:
            options.timeZone = "America/Los_Angeles";
            currentTime = new Date().toLocaleString('en-US', options);
            timezone = "West Coast";
            break;
          case 2:
            options.timeZone = "America/New_York";
            currentTime = new Date().toLocaleString('en-US', options);
            timezone = "East Coast";
            break;
          case 3:
            options.timeZone = 'Asia/Jakarta';
            currentTime = new Date().toLocaleString('en-US', options);
            timezone = "Asia";
            break;
          case 4:
            options.timeZone = 'Pacific/Honolulu';
            currentTime = new Date().toLocaleString('en-US', options);
            timezone = "Hawaii";
            break;
          default:
            currentTime = new Date();
            timezone = "N/A";
            break;
        }

        // This gets a "handle" to the clock div in our HTML
        var clockDiv = document.getElementById('clock_' + clock_num);

        // Then we set the text inside the clock div
        // to the hours, minutes, and seconds of the current time

        clockDiv.innerText = timezone + "\n" + currentTime;
        // getTimeString(currentTime);
    }

    for (var i = 1; i < 5; i++) {
      displayTime(i);
      setInterval(displayTime, 1000, i);
    }

// });
