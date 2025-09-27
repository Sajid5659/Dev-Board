function getValueOfInText(id){
    const text = document.getElementById(id).innerText;
    const convertedValue = parseInt(text);
    return convertedValue;
}
function getValueById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}
function getIdAndValue(id,value){
    document.getElementById(id).innerText=value;
}
function getTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";

  if (hour >= 12) {
    if (hour > 12) {
      hour -= 12;
    }
    am_pm = "PM";
  } else if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
  return currentTime;
}