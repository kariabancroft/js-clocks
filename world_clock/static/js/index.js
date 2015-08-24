function displayTimeRewrite(timeZoneArray) {
  var currentTime, timezone;
  var options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

  for (var i = 0; i < timeZoneArray.length; i++) {
    options.timeZone = timeZoneArray[i][0];
    currentTime = new Date().toLocaleString('en-US', options);
    timezone = timeZoneArray[i][1];

    var clockDiv = document.getElementById('clock_' + (i + 1));
    clockDiv.innerText = timezone + "\n" + currentTime;
  }
}

var tzList = [["America/Los_Angeles", "West Coast"],
  ["America/New_York", "East Coast"],
  ["Asia/Jakarta", "Indonesia Western"],
  ["Pacific/Honolulu", "Hawaii"]];

displayTimeRewrite(tzList);
setInterval(displayTimeRewrite, 1000, tzList);
