// Logika interaktywnego quizu WDZ - zawsze pełny test ze wszystkich pytań w losowej kolejności.

const state = {
  screen: "start", // start | quiz | summary
  pool: [],
  currentIndex: 0,
  selectedKey: null,
  answered: false,
  results: [],      // {id, lekcja, lekcjaName, correct}
};

const appEl = document.getElementById("app");

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  state.pool = shuffle(QUESTIONS);
  state.currentIndex = 0;
  state.selectedKey = null;
  state.answered = false;
  state.results = [];
  state.screen = "quiz";
  render();
}

function selectOption(key) {
  if (state.answered) return;
  state.selectedKey = key;
  render();
}

function checkAnswer() {
  const q = state.pool[state.currentIndex];
  const correctKey = q.options.find(o => o.correct).key;
  const isCorrect = state.selectedKey === correctKey;

  state.answered = true;
  state.results.push({
    id: q.id,
    lekcja: q.lekcja,
    lekcjaName: q.lekcjaName,
    correct: isCorrect,
  });
  render();
}

function nextQuestion() {
  state.currentIndex++;
  state.selectedKey = null;
  state.answered = false;
  if (state.currentIndex >= state.pool.length) {
    state.screen = "summary";
  }
  render();
}

function restart() {
  state.screen = "start";
  state.pool = [];
  state.currentIndex = 0;
  state.selectedKey = null;
  state.answered = false;
  state.results = [];
  render();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ---------- RENDER ----------

function render() {
  if (state.screen === "start") renderStart();
  else if (state.screen === "quiz") renderQuiz();
  else if (state.screen === "summary") renderSummary();
}

function renderStart() {
  appEl.innerHTML = `
    <h1>Quiz WDZ</h1>
    <p class="subtitle">Wprowadzenie do zarządzania - baza ${QUESTIONS.length} pytań z 8 lekcji. Test zawsze obejmuje wszystkie pytania, w losowej kolejności.</p>
    <div class="card">
      <button class="btn full" id="startBtn">Rozpocznij test</button>
    </div>
  `;

  document.getElementById("startBtn").addEventListener("click", startQuiz);
}

function renderQuiz() {
  const q = state.pool[state.currentIndex];
  const total = state.pool.length;
  const num = state.currentIndex + 1;

  const optionsHtml = q.options.map(opt => {
    const isChecked = state.selectedKey === opt.key;
    let classes = "option";
    let badge = "";
    if (state.answered) {
      classes += " locked";
      if (opt.correct) {
        classes += " result-correct";
        badge = '<span class="option-badge">Poprawna odpowiedź</span>';
      } else if (isChecked) {
        classes += " result-wrong";
        badge = '<span class="option-badge">Twoja odpowiedź</span>';
      }
    } else if (isChecked) {
      classes += " checked";
    }

    return `
      <label class="${classes}" data-key="${opt.key}">
        <input type="checkbox" ${isChecked ? "checked" : ""} ${state.answered ? "disabled" : ""} data-key="${opt.key}">
        <div class="option-main">
          <span class="option-text">${escapeHtml(opt.text)}</span>
          ${badge}
        </div>
      </label>
    `;
  }).join("");

  let verdictHtml = "";
  let explainHtml = "";
  if (state.answered) {
    const last = state.results[state.results.length - 1];
    verdictHtml = last.correct
      ? `<div class="verdict-banner pass">✓ Poprawna odpowiedź!</div>`
      : `<div class="verdict-banner fail">✗ Niepoprawna odpowiedź.</div>`;

    explainHtml = `
      <div class="explain-box">
        <div class="explain-title">Uzasadnienie</div>
        <div class="explain-text">${escapeHtml(q.uzasadnienie)}</div>
      </div>
      <div class="tip-box">
        <div class="tip-title">💡 Warto wiedzieć</div>
        <div class="tip-text">${escapeHtml(q.wartoWiedziec)}</div>
      </div>
    `;
  }

  const pctDone = Math.round((state.currentIndex / total) * 100);

  appEl.innerHTML = `
    <div class="progress-row">
      <span>Pytanie ${num} z ${total}</span>
      <span class="chapter-info"><span class="chapter-tag">Lekcja ${q.lekcja}</span>${escapeHtml(q.lekcjaName)}</span>
    </div>
    <div class="progress-bar"><div class="progress-bar-fill" style="width:${pctDone}%"></div></div>
    <div class="card">
      <p class="question-text">${escapeHtml(q.question)}</p>
      <div class="options">${optionsHtml}</div>
      ${verdictHtml}
      ${explainHtml}
      <div class="actions-row">
        ${state.answered
          ? `<button class="btn" id="nextBtn">${num === total ? "ZOBACZ PODSUMOWANIE" : "NASTĘPNE PYTANIE"}</button>`
          : `<button class="btn" id="checkBtn" ${state.selectedKey ? "" : "disabled"}>SPRAWDŹ ODPOWIEDŹ</button>`
        }
      </div>
    </div>
  `;

  if (!state.answered) {
    document.querySelectorAll('.option input[type=checkbox]').forEach(cb => {
      cb.addEventListener("change", () => selectOption(cb.dataset.key));
    });
    const checkBtn = document.getElementById("checkBtn");
    if (checkBtn) checkBtn.addEventListener("click", checkAnswer);
  } else {
    document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  }
}

function renderSummary() {
  const total = state.results.length;
  const correctCount = state.results.filter(r => r.correct).length;
  const pct = Math.round((correctCount / total) * 100);

  // Grupowanie po lekcji
  const byLekcja = {};
  state.results.forEach(r => {
    if (!byLekcja[r.lekcja]) {
      byLekcja[r.lekcja] = { name: r.lekcjaName, total: 0, correct: 0 };
    }
    byLekcja[r.lekcja].total++;
    if (r.correct) byLekcja[r.lekcja].correct++;
  });

  const rows = Object.keys(byLekcja).sort((a, b) => a - b).map(lek => {
    const l = byLekcja[lek];
    const lPct = Math.round((l.correct / l.total) * 100);
    const barClass = lPct >= 70 ? "good" : (lPct >= 40 ? "mid" : "low");
    return { lek, name: l.name, correct: l.correct, total: l.total, pct: lPct, barClass };
  });

  const tableHtml = rows.map(r => `
    <tr>
      <td>Lekcja ${r.lek} — ${escapeHtml(r.name)}</td>
      <td>${r.correct}/${r.total}</td>
      <td style="width:120px;">
        <div class="chapter-bar-wrap"><div class="chapter-bar-fill ${r.barClass}" style="width:${r.pct}%"></div></div>
      </td>
      <td class="pct-col" style="width:50px; text-align:right;">${r.pct}%</td>
    </tr>
  `).join("");

  appEl.innerHTML = `
    <h1>Podsumowanie testu</h1>
    <p class="subtitle">Test ukończony - poniżej Twój wynik.</p>
    <div class="card">
      <div class="score-hero">
        <div class="big">${correctCount} / ${total}</div>
        <div class="pct">${pct}% poprawnych odpowiedzi</div>
      </div>

      <table class="chapter-table">
        <thead><tr><th>Lekcja</th><th>Wynik</th><th>Postęp</th><th class="pct-col"></th></tr></thead>
        <tbody>${tableHtml}</tbody>
      </table>

      <div class="footer-actions">
        <button class="btn full" id="restartBtn">Nowy test</button>
      </div>
    </div>
  `;

  document.getElementById("restartBtn").addEventListener("click", restart);
}

render();
