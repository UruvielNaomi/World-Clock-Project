function updateTime () {

  //Berlin
let berlinElement = document.querySelector("#berlin");
let berlinDateElement = berlinElement.querySelector(".date");
let berlinTimeElement = berlinElement.querySelector(".time-stamp");
let berlinTimeZone = moment().tz("Europe/Berlin");

berlinDateElement.innerHTML = berlinTimeZone.format("MMMM Do YYYY")
berlinTimeElement.innerHTML = berlinTimeZone.format("HH:mm:ss");

//London
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time-stamp");
let londonTimeZone = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTimeZone.format("MMMM Do YYYY")
londonTimeElement.innerHTML = londonTimeZone.format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);




function showDateTime(event){
    if (event.target.value.length > 0) {
        let currentDate = moment().tz(event.target.value).format("MMMM Do YYYY");
        let currentTime = moment().tz(event.target.value).format("HH:mm:ss");

       
    }
}

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", showDateTime);