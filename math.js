// StudyBuddy Armenia: mathematics quizzes, saved progress and the unit tracker.
document.addEventListener("DOMContentLoaded", () => {
  const quizzes = {"1": [{"q": "What is 25% of 60?", "options": ["10", "15", "20", "25"], "answer": 1, "explain": "0.25 × 60 = 15."}, {"q": "Simplify 12/18.", "options": ["1/2", "2/3", "3/4", "6/9"], "answer": 1, "explain": "Divide top and bottom by 6."}, {"q": "A price rises from 40 to 50. What is the percentage increase?", "options": ["10%", "20%", "25%", "50%"], "answer": 2, "explain": "10 ÷ 40 = 0.25 = 25%."}], "2": [{"q": "Simplify 7a − 3a + 2.", "options": ["4a + 2", "10a + 2", "4a − 2", "6a"], "answer": 0, "explain": "7a − 3a = 4a, and the 2 stays."}, {"q": "Expand 3(x − 2).", "options": ["3x − 2", "3x − 6", "3x + 6", "x − 6"], "answer": 1, "explain": "3 × x = 3x and 3 × (−2) = −6."}, {"q": "If x = 5, what is 2x + 1?", "options": ["9", "10", "11", "12"], "answer": 2, "explain": "2 × 5 + 1 = 11."}], "3": [{"q": "Solve 2x + 3 = 11.", "options": ["3", "4", "5", "7"], "answer": 1, "explain": "2x = 8, so x = 4."}, {"q": "Solve 5x = 3x + 14.", "options": ["5", "7", "14", "2"], "answer": 1, "explain": "2x = 14, so x = 7."}, {"q": "Solve −2x > 8.", "options": ["x > −4", "x < −4", "x > 4", "x < 4"], "answer": 1, "explain": "Divide by −2 and flip the sign: x < −4."}], "4": [{"q": "What is 2³ × 2²?", "options": ["2⁶", "2⁵", "4⁵", "4⁶"], "answer": 1, "explain": "Add the powers: 3 + 2 = 5."}, {"q": "What is 3⁻²?", "options": ["−9", "−6", "1/9", "1/6"], "answer": 2, "explain": "3⁻² = 1 ÷ 3² = 1/9."}, {"q": "Write 0.00052 in standard form.", "options": ["5.2 × 10⁻⁴", "5.2 × 10⁻³", "52 × 10⁻⁵", "5.2 × 10⁴"], "answer": 0, "explain": "Move the point 4 places right: 5.2 × 10⁻⁴."}], "5": [{"q": "What is the gradient of y = 5x − 3?", "options": ["−3", "5", "3", "−5"], "answer": 1, "explain": "The number in front of x is the gradient."}, {"q": "A line passes through (0, 2) and (2, 6). What is its gradient?", "options": ["1", "2", "4", "8"], "answer": 1, "explain": "(6 − 2) ÷ (2 − 0) = 2."}, {"q": "Which line is parallel to y = 2x + 1?", "options": ["y = −2x + 1", "y = x/2", "y = 2x − 7", "y = x + 2"], "answer": 2, "explain": "Parallel lines have the same gradient, 2."}], "6": [{"q": "x + y = 8 and x − y = 2. What is x?", "options": ["3", "4", "5", "6"], "answer": 2, "explain": "Add: 2x = 10, so x = 5."}, {"q": "y = 3 and x + y = 7. What is x?", "options": ["3", "4", "5", "10"], "answer": 1, "explain": "x + 3 = 7, so x = 4."}, {"q": "Two different parallel lines have…", "options": ["one solution", "two solutions", "no solution", "three solutions"], "answer": 2, "explain": "They never meet."}], "7": [{"q": "Factorise x² + 5x + 4.", "options": ["(x + 2)(x + 2)", "(x + 1)(x + 4)", "(x + 5)(x − 1)", "(x + 4)(x − 1)"], "answer": 1, "explain": "1 × 4 = 4 and 1 + 4 = 5."}, {"q": "What are the solutions of (x − 1)(x + 4) = 0?", "options": ["1 and 4", "−1 and 4", "1 and −4", "−1 and −4"], "answer": 2, "explain": "x − 1 = 0 or x + 4 = 0."}, {"q": "What is the discriminant of x² + 2x + 5?", "options": ["−16", "16", "24", "−4"], "answer": 0, "explain": "b² − 4ac = 4 − 20 = −16, so there are no real solutions."}], "8": [{"q": "Angles on a straight line are 110° and x. Find x.", "options": ["60°", "70°", "80°", "250°"], "answer": 1, "explain": "180° − 110° = 70°."}, {"q": "A right triangle has shorter sides 5 and 12. The hypotenuse is…", "options": ["13", "15", "17", "7"], "answer": 0, "explain": "25 + 144 = 169, and √169 = 13."}, {"q": "What is the interior angle sum of a pentagon?", "options": ["360°", "450°", "540°", "720°"], "answer": 2, "explain": "(5 − 2) × 180° = 540°."}], "9": [{"q": "What is the area of a rectangle 7 by 4?", "options": ["11", "22", "28", "14"], "answer": 2, "explain": "7 × 4 = 28."}, {"q": "A circle has radius 3. Its area is…", "options": ["6π", "9π", "3π", "18π"], "answer": 1, "explain": "π × 3² = 9π."}, {"q": "A cylinder has r = 2 and h = 5. Its volume is…", "options": ["10π", "20π", "40π", "100π"], "answer": 1, "explain": "π × 2² × 5 = 20π."}], "10": [{"q": "Which is the sine ratio?", "options": ["adjacent ÷ hypotenuse", "opposite ÷ hypotenuse", "opposite ÷ adjacent", "hypotenuse ÷ opposite"], "answer": 1, "explain": "SOH: sine = opposite over hypotenuse."}, {"q": "What is tan 45°?", "options": ["0", "0.5", "1", "√2"], "answer": 2, "explain": "At 45° the opposite and adjacent sides are equal."}, {"q": "Opposite = 5 and adjacent = 5. What is the angle?", "options": ["30°", "45°", "60°", "90°"], "answer": 1, "explain": "tan θ = 1, so θ = 45°."}], "11": [{"q": "What is the median of 1, 3, 5, 7, 9?", "options": ["3", "5", "7", "25"], "answer": 1, "explain": "The middle value is 5."}, {"q": "What is P(head) for a fair coin?", "options": ["0", "1/4", "1/2", "1"], "answer": 2, "explain": "There are two equally likely outcomes."}, {"q": "What is the mean of 5, 5, 8, 10, 12?", "options": ["8", "10", "5", "9"], "answer": 0, "explain": "40 ÷ 5 = 8."}], "12": [{"q": "What is the nth term of 2, 4, 6, 8?", "options": ["n + 2", "2n", "2n + 2", "n²"], "answer": 1, "explain": "The terms go up by 2, starting at 2."}, {"q": "What is the next term of 1, 4, 9, 16?", "options": ["20", "24", "25", "36"], "answer": 2, "explain": "These are square numbers: 5² = 25."}, {"q": "What is the common difference of 10, 7, 4, 1?", "options": ["3", "−3", "7", "−7"], "answer": 1, "explain": "Each term is 3 less than the one before."}]};
  const key = "studybuddy-math-completed-v1";
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const read = () => {
    try { const v = JSON.parse(localStorage.getItem(key) || "[]"); return Array.isArray(v) ? v.filter((n) => Number.isInteger(n) && n >= 1 && n <= 12) : []; }
    catch { return []; }
  };
  let done = [...new Set(read())];
  const rail = Array.from(document.querySelectorAll(".rail-link"));

  function refresh() {
    const fill = document.getElementById("mathProgressFill");
    const text = document.getElementById("mathProgressText");
    if (fill) fill.style.width = `${(done.length / 12) * 100}%`;
    if (text) text.textContent = `${done.length} of 12 units completed`;
    rail.forEach((l) => {
      const n = Number(l.dataset.u), ok = done.includes(n);
      l.classList.toggle("done", ok);
      l.firstChild.textContent = ok ? "\u2713" : String(n);
    });
    document.querySelectorAll(".unit-link").forEach((l) => {
      const m = (l.getAttribute("href") || "").match(/lesson-(\d+)/);
      const num = l.querySelector(".unit-number");
      if (m && num && done.includes(Number(m[1]))) { num.textContent = "\u2713"; num.style.color = "var(--mint)"; }
    });
  }
  function complete(n) {
    if (!done.includes(n)) {
      done.push(n); done.sort((a, b) => a - b);
      try { localStorage.setItem(key, JSON.stringify(done)); } catch {}
    }
    refresh();
  }

  document.querySelectorAll("[data-math-quiz]").forEach((box) => {
    const n = Number(box.dataset.mathQuiz), qs = quizzes[n], content = box.querySelector(".quiz-content");
    if (!qs || !content) return;
    let i = 0, score = 0, answered = false;
    content.innerHTML = `<div class="quiz-score" data-score></div><div class="progress-track"><div class="progress-fill" data-bar></div></div><div data-area></div><div class="quiz-feedback" data-fb aria-live="polite"></div><div class="quiz-actions"><button class="check-answer" type="button" data-check>Check answer</button><button class="next-question" type="button" data-next hidden>Next question →</button><button class="restart-quiz" type="button" data-restart hidden>Try again</button></div><div class="unit-complete" data-done hidden>✓ Unit quiz completed! Your progress has been saved on this device.</div>`;
    const $ = (s) => content.querySelector(s);
    const area = $("[data-area]"), fb = $("[data-fb]"), label = $("[data-score]"), bar = $("[data-bar]");
    const check = $("[data-check]"), next = $("[data-next]"), restart = $("[data-restart]"), doneMsg = $("[data-done]");
    const pass = Math.ceil(qs.length * 2 / 3);

    function show() {
      const q = qs[i]; answered = false;
      area.innerHTML = `<p class="quiz-question">${i + 1}. ${esc(q.q)}</p><div class="quiz-options">${q.options.map((o, k) => `<label class="quiz-option"><input type="radio" name="m${n}-answer" value="${k}"><span>${esc(o)}</span></label>`).join("")}</div>`;
      fb.textContent = ""; fb.className = "quiz-feedback";
      label.textContent = `Question ${i + 1} of ${qs.length} · Score: ${score}`;
      bar.style.width = `${(i / qs.length) * 100}%`;
      check.hidden = false; next.hidden = true; restart.hidden = true; doneMsg.hidden = true;
    }
    function finish() {
      const ok = score >= pass;
      area.innerHTML = `<h3>Class complete!</h3><p>You scored ${score} out of ${qs.length}.</p>`;
      fb.textContent = score === qs.length ? "Perfect! You understood every question." : ok ? "Good work! Review any explanations you missed before moving on." : "Keep practising. Revisit the lesson and practice questions, then try again.";
      fb.className = "quiz-feedback " + (ok ? "correct" : "incorrect");
      label.textContent = `Final score: ${score}/${qs.length}`;
      bar.style.width = "100%";
      check.hidden = true; next.hidden = true; restart.hidden = false; doneMsg.hidden = !ok;
      if (ok) complete(n);
    }
    check.addEventListener("click", () => {
      if (answered) return;
      const sel = content.querySelector(`input[name="m${n}-answer"]:checked`);
      if (!sel) { fb.textContent = "Choose an answer first."; fb.className = "quiz-feedback incorrect"; return; }
      answered = true;
      const q = qs[i], right = Number(sel.value) === q.answer;
      if (right) score++;
      fb.textContent = (right ? "Correct! " : "Not quite. ") + q.explain;
      fb.className = "quiz-feedback " + (right ? "correct" : "incorrect");
      content.querySelectorAll('input[type="radio"]').forEach((r) => (r.disabled = true));
      label.textContent = `Question ${i + 1} of ${qs.length} · Score: ${score}`;
      check.hidden = true; next.hidden = false;
      next.textContent = i === qs.length - 1 ? "See results →" : "Next question →";
    });
    next.addEventListener("click", () => { if (!answered) return; i++; i >= qs.length ? finish() : show(); });
    restart.addEventListener("click", () => { i = 0; score = 0; show(); });
    show();
  });

  const reset = document.getElementById("resetMathProgress");
  if (reset) reset.addEventListener("click", () => {
    if (!window.confirm("Reset your completed Mathematics units on this device?")) return;
    done = []; try { localStorage.removeItem(key); } catch {}
    document.querySelectorAll(".unit-link .unit-number").forEach((el, k) => { el.textContent = String(k + 1).padStart(2, "0"); el.style.color = ""; });
    refresh();
  });

  if (window.IntersectionObserver && rail.length) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const id = en.target.id.replace("lesson-", "");
      rail.forEach((l) => l.classList.toggle("current", l.dataset.u === id));
    }), { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll('section[id^="lesson-"]').forEach((s) => io.observe(s));
  }
  refresh();
});
