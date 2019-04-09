let secondHand = document.querySelector('.second-hand');
let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function getTime() {
  let now = new Date();

  let seconds = now.getSeconds();
  let secondsDegree = ((seconds * 6) + 90);
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;


  let minutes = now.getMinutes();
  let minutesDegree = ((minutes * 6) + 90) + ((seconds / 60) * 6);
  minHand.style.transform = `rotate(${minutesDegree}deg)`;

  let hours = now.getHours();
  let hoursDegree = ((hours / 12 ) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(getTime, 1000);
getTime();
