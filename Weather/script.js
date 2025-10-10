// ...existing code...
const dateElement = document.getElementById("date");
const clockElement = document.getElementById("clock");

/* date and month arrays */
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"];

function showDate() {
  const now = new Date();
  const dayName = days[now.getDay()];
  const date = now.getDate();
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();
  dateElement.textContent = `${dayName}, ${date} ${monthName} ${year}`;
}

function showClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

/* Mode toggle — attach once, not every second */
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    modeToggle.textContent = "☀️ Mode";
  } else {
    modeToggle.textContent = "🌙 Mode";
  }
});

/* Image rotator for .weather-img (changes every 3 seconds) */
const weatherImages = Array.from(document.querySelectorAll(".weather-img"));
let imgIndex = 0;

function rotateWeatherImages() {
  if (weatherImages.length === 0) return;
  weatherImages.forEach((img, i) => img.classList.toggle("active", i === imgIndex));
  imgIndex = (imgIndex + 1) % weatherImages.length;
}

/* start rotator */
rotateWeatherImages();
setInterval(rotateWeatherImages, 3000);

/* clock and date initialization */
showDate();
showClock();
setInterval(showClock, 1000);

// ...existing code...