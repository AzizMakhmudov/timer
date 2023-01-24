let myBirthday = new Date("Dec 24, 2023 00:00:00").getTime();

let calc = setInterval(function () {
  let now = new Date().getTime();

  let distance = myBirthday - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("[data-timer]").innerHTML =
    days +
    " kun " +
    hours +
    " soat " +
    minutes +
    " minut " +
    seconds +
    " sekund ";

  if (distance < 0) {
    clearInterval(calc);
    document.querySelector("[data-timer]").innerHTML = "EXPIRED";
  }
}, 1000);