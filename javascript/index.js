function updateTime() {
  let RomeElement = document.querySelector("#rome");
  if (RomeElement) {
    let RomeDateElement = RomeElement.querySelector(".date");
    let RomeTimeElement = RomeElement.querySelector(".time");
    let RomeTime = moment().tz("Europe/Rome");
    RomeDateElement.innerHTML = RomeTime.format("MMMM Do YYYY");
    RomeTimeElement.innerHTML = RomeTime.format("h:mm:ss [<small>]a[</small>]");
  }
  let SydneyElement = document.querySelector("#sydney");
  if (SydneyElement) {
    let SydneyDateElement = SydneyElement.querySelector(".date");
    let SydneyTimeElement = SydneyElement.querySelector(".time");
    let SydneyTime = moment().tz("Australia/Sydney");
    SydneyDateElement.innerHTML = SydneyTime.format("MMMM Do YYYY");
    SydneyTimeElement.innerHTML = SydneyTime.format(
      "h:mm:ss [<small>]a[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = citiesElement = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss")}
        <small>${cityTime.format("A")}</small>
      </div>
    </div>`;
}
let citiesSelectElement = document.querySelector("#drop-down");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
