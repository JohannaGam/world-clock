function updateTime() {
  let RomeElement = document.querySelector("#rome");
  let RomeDateElement = RomeElement.querySelector(".date");
  let RomeTimeElement = RomeElement.querySelector(".time");
  let RomeTime = moment().tz("Europe/Rome");
  RomeDateElement.innerHTML = RomeTime.format("MMMM Do YYYY");
  RomeTimeElement.innerHTML = RomeTime.format("h:mm:ss [<small>]a[</small>]");

  let SydneyElement = document.querySelector("#sydney");
  let SydneyDateElement = SydneyElement.querySelector(".date");
  let SydneyTimeElement = SydneyElement.querySelector(".time");
  let SydneyTime = moment().tz("Australia/Sydney");
  SydneyDateElement.innerHTML = SydneyTime.format("MMMM Do YYYY");
  SydneyTimeElement.innerHTML = SydneyTime.format(
    "h:mm:ss [<small>]a[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
