function displayTime(){
  var currentTime = new Date();

  var clockDiv = document.getElementById("clock");

  var hours = currentTime.getHours();
  var meridiem = (hours > 12) ? "PM" : "AM";

  hours = formatNonMilitary(hours);
  hours = formatDigit(hours);

  var minutes = formatDigit(currentTime.getMinutes());
  var seconds = formatDigit(currentTime.getSeconds());

  var time = hours + ":" + minutes + ":" + seconds + " " + meridiem;

  clockDiv.innerText = time;
}

function formatDigit(digit) {
  if(digit < 10) {
      return "0" + digit;
  } else {
    return digit;
  }
}

function formatNonMilitary(hours) {
  if (hours === 0) {
    return 12;
  } else if (hours < 12) {
    return hours;
  } else {
    return hours - 12;
  }
}

displayTime();
setInterval(displayTime, 1000);
