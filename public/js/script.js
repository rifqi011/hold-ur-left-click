// Particles JS
particlesJS.load("particles-js", "../src/particles-config.json", () => {
	console.log("particles.js loaded - callback");
});

// Button
const hourElem = document.getElementById("hour");
const minuteElem = document.getElementById("minute");
const secondElem = document.getElementById("second");
const button = document.getElementById("timerButton");
const buttonImage = document.getElementById("buttonImage");

let timerInterval;
let hours = 0,
	minutes = 0,
	seconds = 0;

// Format waktu menjadi HH:MM:SS
function formatTime(h, m, s) {
	return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// Update tampilan timer
function updateTimer() {
	hourElem.textContent = String(hours).padStart(2, "0");
	minuteElem.textContent = String(minutes).padStart(2, "0");
	secondElem.textContent = String(seconds).padStart(2, "0");
}

// Mulai timer
function startTimer() {
	timerInterval = setInterval(() => {
		seconds++;
		if (seconds === 60) {
			seconds = 0;
			minutes++;
			if (minutes === 60) {
				minutes = 0;
				hours++;
			}
		}
		updateTimer();
	}, 1000);
}

// Hentikan timer
function stopTimer() {
	clearInterval(timerInterval);
}

// Tombol ditekan
button.addEventListener("mousedown", () => {
	buttonImage.src = "../src/img/buttonclicked.png"; // Ganti gambar saat ditekan
	hours = 0;
	minutes = 0;
	seconds = 0;
	updateTimer();
	startTimer();
});

// Tombol dilepas
button.addEventListener("mouseup", () => {
	stopTimer();
	buttonImage.src = "../src/img/button.png"; // Kembalikan gambar tombol
});
