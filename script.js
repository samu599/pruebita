

const TIMER_SEC = 15;
let ci = 0, score = 0, answered = false, timerInt = null, timeLeft = TIMER_SEC;
const results = [];

const qnumEl = document.getElementById('qnum');
const qtextEl = document.getElementById('qtext');
const qsubEl = document.getElementById('qsub');
const ansGrid = document.getElementById('ans-grid');
const jokeBox = document.getElementById('joke-box');
const nextBtn = document.getElementById('next-btn');
const resultWrap = document.getElementById('result-wrap');
const hudQ = document.getElementById('hud-q');
const hudPts = document.getElementById('hud-pts');
const hudTime = document.getElementById('hud-time');
const timerBar = document.getElementById('timer-bar');
const dotsEl = document.getElementById('progress-dots');
const qcardMain = document.getElementById('qcard-main');
const qimg = document.getElementById('qimg');

const startScreen = document.getElementById('start-screen');
const qwrap = document.getElementById('qwrap');
const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  qwrap.style.display = 'flex';
  showQuestion();
});

function makeDots() {
  dotsEl.innerHTML = '';
  questions.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' +
      (i === ci ? ' active' :
        results[i] === true ? ' done-ok' :
          results[i] === false ? ' done-ko' : '');
    dotsEl.appendChild(d);
  });
}

function startTimer() {
  timeLeft = TIMER_SEC;
  timerBar.style.width = '100%';
  timerBar.className = 'timer-bar';
  hudTime.textContent = timeLeft;
  clearInterval(timerInt);
  timerInt = setInterval(() => {
    timeLeft--;
    hudTime.textContent = timeLeft;
    timerBar.style.width = Math.round((timeLeft / TIMER_SEC) * 100) + '%';
    if (timeLeft <= 5) timerBar.className = 'timer-bar danger';
    if (timeLeft <= 0) { clearInterval(timerInt); if (!answered) timeOut(); }
  }, 1000);
}

function timeOut() {
  answered = true;
  results[ci] = false;
  Array.from(ansGrid.children).forEach(b => {
    b.disabled = true;
    if (b.dataset.ok === 'true') b.classList.add('reveal');
  });
  jokeBox.textContent = '¡Se acabó el tiempo! Deberías estar avergonzado/a. ' + questions[ci].joke_wrong;
  jokeBox.style.display = 'block';
  nextBtn.style.display = 'flex';
  makeDots();
}

function showQuestion() {
  answered = false;
  const q = questions[ci];

  if (qcardMain) {
    qcardMain.classList.remove('animate-in');
    void qcardMain.offsetWidth; // trigger reflow
    qcardMain.classList.add('animate-in');
  }

  qnumEl.textContent = 'Pregunta ' + (ci + 1) + ' de ' + questions.length;
  qtextEl.textContent = q.q;
  qsubEl.textContent = q.sub || '';
  hudQ.textContent = (ci + 1) + '/' + questions.length;

  if (qimg) {
    qimg.src = q.img || '';
  }

  jokeBox.style.display = 'none';
  jokeBox.textContent = '';
  nextBtn.style.display = 'none';

  ansGrid.innerHTML = '';
  q.answers.forEach(a => {
    const b = document.createElement('button');
    b.className = 'ans-btn';
    b.textContent = a.t;
    b.dataset.ok = a.ok;
    b.addEventListener('click', () => pick(b, a.ok));
    ansGrid.appendChild(b);
  });

  makeDots();
  startTimer();
}

function pick(btn, ok) {
  if (answered) return;
  answered = true;
  clearInterval(timerInt);

  if (ok) {
    score++;
    results[ci] = true;
    btn.classList.add('correct');
  } else {
    results[ci] = false;
    btn.classList.add('wrong');
  }

  Array.from(ansGrid.children).forEach(b => {
    b.disabled = true;
    if (b.dataset.ok === 'true' && !ok) b.classList.add('reveal');
  });

  hudPts.textContent = score;
  jokeBox.textContent = ok ? questions[ci].joke_right : questions[ci].joke_wrong;
  jokeBox.style.display = 'block';
  nextBtn.style.display = 'flex';
  makeDots();
}

nextBtn.addEventListener('click', () => {
  ci++;
  if (ci < questions.length) { showQuestion(); }
  else { showResult(); }
});

function showResult() {
  clearInterval(timerInt);

  document.querySelector('.hud').style.display = 'none';
  document.querySelector('.progress-dots').style.display = 'none';
  document.querySelector('.timer-bar-wrap').style.display = 'none';
  if (qcardMain) qcardMain.style.display = 'none';
  ansGrid.style.display = 'none';
  jokeBox.style.display = 'none';
  nextBtn.style.display = 'none';

  const msgs = [
    { color: 'var(--error)', msg: 'Eres un desastre absoluto. El Braithwaite te da clases.' },
    { color: 'var(--error)', msg: 'Malísimo. No sirves para esto.' },
    { color: 'var(--warning)', msg: 'Algo es algo. Tu abuelo lo haría mejor.' },
    { color: 'var(--success)', msg: 'Aprobado. Puedes presumir en el bar... con moderación.' },
    { color: 'var(--primary)', msg: 'Casi perfecto. Tienes mi respeto.' },
    { color: 'var(--primary)', msg: '¡Impecable! Eres una enciclopedia del fútbol.' }
  ];
  const m = msgs[score] || msgs[msgs.length - 1];

  const stored = parseInt(localStorage.getItem('quiz_best') || '0');
  const isNew = score > stored;
  if (isNew) localStorage.setItem('quiz_best', score);
  const best = Math.max(score, stored);

  resultWrap.innerHTML = `
    <div class="result-score" style="color:${m.color}">${score}/${questions.length}</div>
    <div class="result-label">puntuación final</div>
    <div class="result-msg">${m.msg}</div>
    <div class="result-record">${isNew ? '🏆 Nueva mejor puntuación!' : 'Mejor histórico: ' + best + '/' + questions.length}</div>
    <button class="replay-btn" onclick="restart()">Volver a intentarlo</button>
  `;
}

function restart() {
  ci = 0; score = 0; results.length = 0;
  hudPts.textContent = 0;
  resultWrap.innerHTML = '';

  document.querySelector('.hud').style.display = 'flex';
  document.querySelector('.progress-dots').style.display = 'flex';
  document.querySelector('.timer-bar-wrap').style.display = 'block';
  if (qcardMain) qcardMain.style.display = 'block';
  ansGrid.style.display = 'grid';

  showQuestion();
}