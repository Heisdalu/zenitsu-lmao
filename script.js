const day = document.querySelector(".day");
const time = document.querySelector(".time");
const currentTime = new Date();

const dayArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
day.textContent = dayArr[currentTime.getDay()];
time.textContent = +currentTime
