function updateTime () {
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time-stamp");
    let berlinTimeZone = moment().tz("Europe/Berlin");
    berlinDateElement.innerHTML = berlinTimeZone.format("MMMM Do YYYY")
    berlinTimeElement.innerHTML = berlinTimeZone.format("HH:mm:ss");
  }
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time-stamp");
    let londonTimeZone = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTimeZone.format("MMMM Do YYYY")
    londonTimeElement.innerHTML = londonTimeZone.format("HH:mm:ss");
  }
}

function changeImage(){
  let cityName = document.querySelector(".city-name");
  if (cityName.innerHTML === "Berlin") {
    document.getElementById("image").src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/070/471/original/BER.jpg?1678226115";
  }
  
  if (cityName.innerHTML === "London") {
    document.getElementById("image").src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/070/476/original/LON.jpg?1678228749";
  }

  if (cityName.innerHTML === "New York") {
    document.getElementById("image").src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/070/477/original/NY.jpg?1678228807";
  }

  if (cityName.innerHTML === "Jakarta") {
    document.getElementById("image").src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/070/478/original/fawazlul-rizqi-2lRqBfCAXLk-unsplash.jpg?1678228980";
  }
}

function updateCity(event){
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
    if (event.target.value.length > 0) {
      let cityName = cityTimeZone.replace("_", " ").split("/")[1];
      let cityTime = moment().tz(cityTimeZone);
      let citiesElement = document.querySelector("#cities");
      citiesElement.innerHTML = `
      <div class="city">
          <div class="row">
              <div class="col-8">
                  <span class="city-name" >${cityName}</span>
              </div>
              <div class="col-4 col-right">
                  <span class="time-stamp" >${cityTime.format("HH:mm:ss")}</span>
              </div>
          </div>
          <div class="row">
              <div class="col-6">
                  <span class="date">${cityTime.format("MMMM Do YYYY")}</span>
              </div>
          </div>`;
    }
    setTimeout(()=>{
      updateCity(event)
    }, 1000);
    changeImage();
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
// let currentDate = moment().tz(event.target.value).format("MMMM Do YYYY");
// let currentTime = cityTime.format("HH:mm:ss");