document.addEventListener('DOMContentLoaded', () => {
const sentences = [
"The quick brown fox jumps over the lazy dog.",
"Programming is the art of telling another human what one wants the computer to do.",
"JavaScript is the world's most popular programming language.",
];
const elements = {
display: document.getElementById('sentenceDisplay'),
input: document.getElementById('typingInput'),
speed: document.getElementById('speed'),
errors: document.getElementById('errors'),
accuracy: document.getElementById('accuracy'),
progress: document.getElementById('progressBar'),
modal: document.getElementById('resultModal'),
resultSpeed: document.getElementById('resultSpeed'),
resultErrors: document.getElementById('resultErrors'),
resultAccuracy: document.getElementById('resultAccuracy'),
resultTime: document.getElementById('resultTime'),
restartBtn: document.getElementById('restartBtn')
};
let state = {
currentSentence: '',
startTime: null,
timer: null,
errors: 0,
totalTyped: 0,
correctTyped: 0,
isRunning: false
};
function initTest() {
state = {
...state,
currentSentence: sentences[Math.floor(Math.random() * sentences.length)],
startTime: null,
timer: null,
errors: 0,
totalTyped: 0,
correctTyped: 0,
isRunning: false
};
elements.display.innerHTML = '';
elements.input.value = '';
elements.speed.textContent = '0';
elements.errors.textContent = '0';
elements.accuracy.textContent = '100';
elements.progress.style.width = '0%';
elements.input.disabled = false;
elements.modal.classList.remove('active');
state.currentSentence.split('').forEach(char => {
const span = document.createElement('span');
span.textContent = char;
elements.display.appendChild(span);
});
elements.input.focus();
}
function startTest() {
state.startTime = new Date();
state.isRunning = true;
state.timer = setInterval(() => {
const timeElapsed = (new Date() - state.startTime) / 1000;
const minutes = timeElapsed / 60;
const wpm = Math.round((state.correctTyped / 5) / minutes) || 0;
elements.speed.textContent = wpm;
const accuracy = state.totalTyped > 0 
    ? Math.round((state.correctTyped / state.totalTyped) * 100) 
    : 100;
elements.accuracy.textContent = accuracy;
const progress = (elements.input.value.length / state.currentSentence.length) * 100;
elements.progress.style.width = `${Math.min(progress, 100)}%`;
if (elements.input.value === state.currentSentence) {
    endTest();
}
}, 1000);
}
function endTest() {
clearInterval(state.timer);
state.isRunning = false;
const timeElapsed = (new Date() - state.startTime) / 1000;
const minutes = timeElapsed / 60;
const wpm = Math.round((state.correctTyped / 5) / minutes) || 0;
const accuracy = state.totalTyped > 0 
? Math.round((state.correctTyped / state.totalTyped) * 100) 
: 100;
elements.resultSpeed.textContent = `${wpm} WPM`;
elements.resultErrors.textContent = state.errors;
elements.resultAccuracy.textContent = `${accuracy}%`;
elements.resultTime.textContent = `${timeElapsed.toFixed(1)}s`;
elements.modal.classList.add('active');
elements.input.disabled = true;
}
elements.input.addEventListener('input', (e) => {
if (!state.isRunning) startTest();
const inputValue = e.target.value;
state.totalTyped++;
const spans = elements.display.querySelectorAll('span');
let newErrors = 0;
spans.forEach((span, i) => {
const inputChar = inputValue[i];
const sentenceChar = state.currentSentence[i];
span.classList.remove('correct', 'incorrect', 'current');
if (inputChar == null) {
    if (i === inputValue.length) span.classList.add('current');
} 
else if (inputChar === sentenceChar) {
    span.classList.add('correct');
    if (i === inputValue.length - 1) state.correctTyped++;
} 
else {
    span.classList.add('incorrect');
    newErrors++;
    if (i === inputValue.length - 1) state.errors++;
}
});
elements.errors.textContent = state.errors + newErrors;
if (inputValue === state.currentSentence) {
endTest();
}
});
elements.restartBtn.addEventListener('click', initTest);
initTest();
});