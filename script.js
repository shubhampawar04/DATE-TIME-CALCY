function calculateDifference() {
    var startDate = new Date(document.getElementById("start-date").value);
    var endDate = new Date(document.getElementById("end-date").value);
  
    var difference = endDate.getTime() - startDate.getTime();
  
    var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hoursDifference = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesDifference = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var secondsDifference = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById("time-difference").innerText = daysDifference + " days, " + hoursDifference + " hours, " + minutesDifference + " minutes, " + secondsDifference + " seconds";
}
  
  function updateLiveTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    document.getElementById("live-time").innerText = hours + ":" + minutes + ":" + seconds;
  }
  
  // Update live time every second
  setInterval(updateLiveTime, 1000);
  