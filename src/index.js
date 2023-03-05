//Berlin
let berlinElement = document.querySelector("#berlin");
let berlinDateElement = berlinElement.querySelector(".date");
let berlinTimeElement = berlinElement.querySelector(".time-stamp");

berlinDateElement.innerHTML = moment().format("MMMM Do YYYY")
berlinTimeElement.innerHTML = moment().format("HH:mm:ss");


// London
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time-stamp");

londonDateElement.innerHTML = moment().format("MMMM Do YYYY")
londonTimeElement.innerHTML = moment().format("HH:mm:ss");
