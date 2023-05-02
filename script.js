let time = 1500; // 25 minutes in seconds
let timer;
let isPaused = true;
let isStopped = true;

function startTimer() {
  if (isPaused) {
    timer = setInterval(decrementTime, 1000);
    isPaused = false;
    isStopped = false;
  }
}

function pauseTimer() {
  clearInterval(timer);
  isPaused = true;
}

function resetTimer() {
  clearInterval(timer);
  time = 1500;
  isPaused = true;
  isStopped = true;
  updateTimerDisplay();
}

function decrementTime() {
  time--;
  if (time < 0) {
    clearInterval(timer);
    time = 0;
    isPaused = true;
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  document.getElementById('timer').textContent = `${minutes}:${formattedSeconds}`;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

updateTimerDisplay();
