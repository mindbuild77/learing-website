// StudyBuddy Armenia: chemistry quizzes, saved progress and the unit tracker.
document.addEventListener("DOMContentLoaded", () => {
  const quizzes = {"1": [{"q": "Which state has particles that vibrate in fixed positions?", "options": ["Gas", "Liquid", "Solid", "None of them"], "answer": 2, "explain": "Solid particles are packed tightly and only vibrate."}, {"q": "Which of these is a mixture?", "options": ["Gold", "Oxygen", "Sea water", "Distilled water"], "answer": 2, "explain": "Sea water contains water and dissolved salts."}, {"q": "A solid changing directly into a gas is called…", "options": ["melting", "sublimation", "condensation", "freezing"], "answer": 1, "explain": "This skips the liquid state."}], "2": [{"q": "Which particle has a negative charge?", "options": ["Proton", "Neutron", "Electron", "Nucleus"], "answer": 2, "explain": "Electrons carry a charge of −1."}, {"q": "An atom has atomic number 9 and mass number 19. How many neutrons?", "options": ["9", "10", "19", "28"], "answer": 1, "explain": "19 − 9 = 10."}, {"q": "What is the electron arrangement of magnesium (12 electrons)?", "options": ["2,8,2", "2,10", "8,4", "2,2,8"], "answer": 0, "explain": "Fill 2, then 8, and 2 are left."}], "3": [{"q": "Which group contains the noble gases?", "options": ["Group 1", "Group 7", "Group 0", "Group 2"], "answer": 2, "explain": "Group 0 (or 8) holds the noble gases."}, {"q": "How many outer electrons do halogens have?", "options": ["1", "5", "7", "8"], "answer": 2, "explain": "Halogens are in group 7."}, {"q": "What forms when sodium reacts with water?", "options": ["Oxygen and an acid", "Hydrogen and an alkaline solution", "Carbon dioxide", "Chlorine"], "answer": 1, "explain": "Sodium hydroxide solution and hydrogen gas form."}], "4": [{"q": "Which compound is ionic?", "options": ["CO₂", "H₂O", "NaCl", "CH₄"], "answer": 2, "explain": "NaCl is a metal joined to a non-metal."}, {"q": "A covalent bond is…", "options": ["a transfer of electrons", "a shared pair of electrons", "attraction between metal ions", "a nucleus joining"], "answer": 1, "explain": "Atoms share electrons to fill their outer shells."}, {"q": "Why can molten sodium chloride conduct electricity?", "options": ["It has free electrons", "Its ions are free to move", "It contains molecules", "It is a metal"], "answer": 1, "explain": "Moving ions carry the charge."}], "5": [{"q": "How many oxygen atoms are in Ca(OH)₂?", "options": ["1", "2", "3", "4"], "answer": 1, "explain": "The 2 outside the bracket applies to O and H."}, {"q": "Which is the balanced equation?", "options": ["N₂ + H₂ → 2NH₃", "N₂ + 3H₂ → 2NH₃", "2N₂ + 3H₂ → NH₃", "N₂ + 2H₂ → 2NH₃"], "answer": 1, "explain": "2 N and 6 H on each side."}, {"q": "(aq) means…", "options": ["solid", "gas", "dissolved in water", "liquid"], "answer": 2, "explain": "It stands for aqueous."}], "6": [{"q": "Which is a sign of a chemical reaction?", "options": ["A solid melting", "Gas bubbles forming when a solid meets acid", "Sugar dissolving", "Water freezing"], "answer": 1, "explain": "New gas means a new substance."}, {"q": "20 g of reactants make products in a sealed container. What is the total mass of products?", "options": ["10 g", "20 g", "40 g", "0 g"], "answer": 1, "explain": "Mass is conserved."}, {"q": "Complete combustion of a hydrocarbon makes…", "options": ["carbon monoxide and soot", "carbon dioxide and water", "hydrogen and oxygen", "carbon only"], "answer": 1, "explain": "Plenty of oxygen gives CO₂ and H₂O."}], "7": [{"q": "What is the Mᵣ of CO₂ (C = 12, O = 16)?", "options": ["28", "32", "44", "60"], "answer": 2, "explain": "12 + 16 + 16 = 44."}, {"q": "How many moles are in 80 g of NaOH (M = 40 g/mol)?", "options": ["0.5", "1", "2", "3200"], "answer": 2, "explain": "80 ÷ 40 = 2."}, {"q": "How many particles are in 1 mole?", "options": ["6.02 × 10²³", "6.02 × 10⁻²³", "12", "100"], "answer": 0, "explain": "This is Avogadro’s number."}], "8": [{"q": "pH 7 means the solution is…", "options": ["strongly acidic", "neutral", "weakly alkaline", "strongly alkaline"], "answer": 1, "explain": "pH 7 is neutral."}, {"q": "Acid + alkali makes…", "options": ["salt and water", "metal and gas", "only water", "salt and hydrogen"], "answer": 0, "explain": "This is neutralisation."}, {"q": "Which gas forms when an acid reacts with a carbonate?", "options": ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"], "answer": 2, "explain": "CO₂ fizzes out."}], "9": [{"q": "Which does NOT speed up a reaction?", "options": ["Higher temperature", "Smaller pieces", "Lower concentration", "A catalyst"], "answer": 2, "explain": "Fewer particles means fewer collisions."}, {"q": "An exothermic reaction…", "options": ["absorbs heat", "releases heat", "has no energy change", "needs no energy"], "answer": 1, "explain": "The surroundings get warmer."}, {"q": "Activation energy is…", "options": ["energy released by a reaction", "the minimum energy needed to start a reaction", "the mass of a reactant", "a type of product"], "answer": 1, "explain": "Particles need this much energy to react."}], "10": [{"q": "Which metal is the most reactive?", "options": ["Copper", "Iron", "Potassium", "Gold"], "answer": 2, "explain": "Potassium is at the top of the series."}, {"q": "Zinc is added to copper sulfate solution. What happens?", "options": ["No reaction", "Copper is displaced", "Gold forms", "Hydrogen forms"], "answer": 1, "explain": "Zinc is more reactive than copper."}, {"q": "Rusting needs…", "options": ["oxygen only", "water only", "oxygen and water", "nitrogen"], "answer": 2, "explain": "Both must be present."}], "11": [{"q": "Which method separates sand from water?", "options": ["Filtration", "Chromatography", "Magnetism", "Cracking"], "answer": 0, "explain": "Sand is insoluble and gets stuck in the paper."}, {"q": "In salt water, the salt is the…", "options": ["solvent", "solute", "filtrate", "residue"], "answer": 1, "explain": "The solute is what dissolves."}, {"q": "To get pure water from sea water, use…", "options": ["filtration", "chromatography", "distillation", "sieving"], "answer": 2, "explain": "Boil it and condense the steam."}], "12": [{"q": "What is the formula of ethane?", "options": ["CH₄", "C₂H₄", "C₂H₆", "C₃H₈"], "answer": 2, "explain": "Ethane is an alkane with 2 carbons: C₂H₆."}, {"q": "Which turns bromine water colourless?", "options": ["Methane", "Ethene", "Propane", "Butane"], "answer": 1, "explain": "Ethene is an alkene."}, {"q": "Fractional distillation of crude oil separates it by…", "options": ["colour", "boiling point", "smell", "solubility"], "answer": 1, "explain": "Different chain lengths boil at different temperatures."}]};
  const key = "studybuddy-chem-completed-v1";
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const read = () => {
    try { const v = JSON.parse(localStorage.getItem(key) || "[]"); return Array.isArray(v) ? v.filter((n) => Number.isInteger(n) && n >= 1 && n <= 12) : []; }
    catch { return []; }
  };
  let done = [...new Set(read())];
  const rail = Array.from(document.querySelectorAll(".rail-link"));

  function refresh() {
    const fill = document.getElementById("chemProgressFill");
    const text = document.getElementById("chemProgressText");
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

  document.querySelectorAll("[data-chem-quiz]").forEach((box) => {
    const n = Number(box.dataset.chemQuiz), qs = quizzes[n], content = box.querySelector(".quiz-content");
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

  const reset = document.getElementById("resetChemProgress");
  if (reset) reset.addEventListener("click", () => {
    if (!window.confirm("Reset your completed Chemistry units on this device?")) return;
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
