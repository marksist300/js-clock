const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const resetHands = () => {
  secondHand.style.transitionTimingFunction = initial;
  return (secondHand.style.transform = "rotate(90deg)");
};

function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsInDegrees = (seconds / 60) * 360 + 90;
  console.log(seconds);
  if (seconds === 59) {
    secondHand.style.transitionTimingFunction = "ease";
    secondHand.style.transition = "0s";
    secondHand.style.transform = "rotate(90deg)";
  } else {
    secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;
  }

  const minutesInDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`;

  const hoursInDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
}

setInterval(setTime, 1000);
