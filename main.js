// StudyBuddy Armenia — theme, classroom quizzes, answer reveals, and saved progress.
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    const savedTheme = localStorage.getItem("studybuddy-theme");
    if (savedTheme === "light") document.body.classList.add("light-theme");
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      localStorage.setItem("studybuddy-theme", document.body.classList.contains("light-theme") ? "light" : "dark");
    });
  }

  // Reveal the answers to the independent practice questions only when requested.
  document.querySelectorAll("[data-reveal]").forEach((button) => {
    button.addEventListener("click", () => {
      const answer = document.getElementById(button.dataset.reveal);
      if (!answer) return;
      const willShow = answer.hidden;
      answer.hidden = !willShow;
      button.textContent = willShow ? "Hide answer" : "Reveal answer";
      button.setAttribute("aria-expanded", String(willShow));
    });
  });

  const quizzes = {"unit1": [{"q": "Which is the SI base unit of mass?", "options": ["gram (g)", "kilogram (kg)", "newton (N)", "litre (L)"], "answer": 1, "explain": "The SI base unit of mass is the kilogram."}, {"q": "Convert 4 km to metres.", "options": ["40 m", "400 m", "4000 m", "40 000 m"], "answer": 2, "explain": "Multiply kilometres by 1000: 4 km = 4000 m."}, {"q": "Which is a complete measurement?", "options": ["7.2", "metres", "7.2 m", "long"], "answer": 2, "explain": "A measurement needs a number and a unit."}, {"q": "How many seconds are in 2 minutes?", "options": ["20 s", "60 s", "100 s", "120 s"], "answer": 3, "explain": "2 × 60 = 120 seconds."}, {"q": "A ruler has millimetre divisions. Which statement is best?", "options": ["It has no uncertainty", "It can measure every length exactly", "It allows finer readings than centimetre divisions", "It measures mass"], "answer": 2, "explain": "Smaller scale divisions generally allow more precise readings."}], "unit2": [{"q": "A runner covers 80 m in 10 s. What is the average speed?", "options": ["8 m/s", "10 m/s", "70 m/s", "800 m/s"], "answer": 0, "explain": "80 ÷ 10 = 8 m/s."}, {"q": "A car travels 90 km at 30 km/h. How long does it take?", "options": ["2 h", "3 h", "30 h", "60 h"], "answer": 1, "explain": "Time = distance ÷ speed = 90 ÷ 30 = 3 h."}, {"q": "Which is a unit of speed?", "options": ["m/s", "kg", "N", "J"], "answer": 0, "explain": "Metres per second is a speed unit."}, {"q": "What does a horizontal distance–time graph mean?", "options": ["Speed is increasing", "The object is stopped", "The object is accelerating", "Distance is increasing quickly"], "answer": 1, "explain": "Distance is constant while time passes."}, {"q": "You walk around a track and finish where you started. Your displacement is…", "options": ["equal to the total distance", "zero", "always 100 m", "negative time"], "answer": 1, "explain": "Start and finish positions are the same, so displacement is zero."}], "unit3": [{"q": "Velocity rises from 0 to 12 m/s in 3 s. Acceleration is…", "options": ["3 m/s²", "4 m/s²", "9 m/s²", "36 m/s²"], "answer": 1, "explain": "(12 − 0) ÷ 3 = 4 m/s²."}, {"q": "What is the SI unit of acceleration?", "options": ["m/s", "m/s²", "kg/m³", "N"], "answer": 1, "explain": "Acceleration is measured in metres per second squared."}, {"q": "An object changes direction at constant speed. Does its velocity change?", "options": ["No, never", "Yes, because direction is part of velocity", "Only if its mass changes", "Only in space"], "answer": 1, "explain": "Velocity includes direction, so a direction change is a velocity change."}, {"q": "A velocity–time graph has a flat line at 6 m/s. Its acceleration is…", "options": ["6 m/s²", "1 m/s²", "zero", "infinite"], "answer": 2, "explain": "Constant velocity means zero acceleration."}, {"q": "A moving object has acceleration opposite to its velocity. It usually…", "options": ["slows down", "must speed up", "loses mass", "stops time"], "answer": 0, "explain": "Opposite acceleration reduces its speed, provided it continues in that direction."}], "unit4": [{"q": "What is the SI unit of force?", "options": ["Joule", "Newton", "Watt", "Pascal"], "answer": 1, "explain": "Force is measured in newtons (N)."}, {"q": "A resultant force of 20 N acts on a 5 kg object. What is its acceleration?", "options": ["4 m/s²", "25 m/s²", "100 m/s²", "0.25 m/s²"], "answer": 0, "explain": "a = F/m = 20/5 = 4 m/s²."}, {"q": "If the resultant force is zero, an object…", "options": ["must be at rest", "must speed up", "has no change in velocity", "must have no mass"], "answer": 2, "explain": "Zero resultant force means zero acceleration; velocity stays constant."}, {"q": "Friction usually acts…", "options": ["to oppose relative motion between surfaces", "in the same direction as all motion", "only in space", "only on liquids"], "answer": 0, "explain": "Friction opposes relative sliding or the tendency to slide between surfaces."}, {"q": "Newton’s third-law forces act…", "options": ["on the same object", "on two interacting objects", "only on objects at rest", "only when objects are moving"], "answer": 1, "explain": "The pair acts on different interacting objects."}], "unit5": [{"q": "Which quantity is measured in newtons?", "options": ["Mass", "Weight", "Volume", "Density"], "answer": 1, "explain": "Weight is a gravitational force measured in newtons."}, {"q": "Find the weight of a 2 kg object when g = 10 N/kg.", "options": ["0.2 N", "2 N", "20 N", "200 N"], "answer": 2, "explain": "W = mg = 2 × 10 = 20 N."}, {"q": "Density is calculated by…", "options": ["volume ÷ mass", "mass ÷ volume", "mass × volume", "weight ÷ time"], "answer": 1, "explain": "Density is mass per unit volume."}, {"q": "A material has mass 60 g and volume 20 cm³. Its density is…", "options": ["3 g/cm³", "40 g/cm³", "80 g/cm³", "1200 g/cm³"], "answer": 0, "explain": "60 ÷ 20 = 3 g/cm³."}, {"q": "If an object moves from Earth to the Moon, its mass…", "options": ["becomes zero", "doubles", "stays the same", "turns into weight"], "answer": 2, "explain": "Mass is a property of the object; weight depends on the gravitational field."}], "unit6": [{"q": "A 6 N force moves an object 5 m in its direction. Work done is…", "options": ["1.2 J", "11 J", "30 J", "60 J"], "answer": 2, "explain": "Work = force × distance = 6 × 5 = 30 J."}, {"q": "What is the SI unit of energy?", "options": ["Watt", "Joule", "Newton", "Ampere"], "answer": 1, "explain": "Energy and work are measured in joules."}, {"q": "A device transfers 100 J in 10 s. Its average power is…", "options": ["10 W", "90 W", "1000 W", "0.1 W"], "answer": 0, "explain": "Power = energy ÷ time = 100 ÷ 10 = 10 W."}, {"q": "Which energy store is associated with movement?", "options": ["Kinetic", "Chemical only", "Gravitational only", "Nuclear only"], "answer": 0, "explain": "Moving objects have kinetic energy."}, {"q": "If useful output energy is 80 J from 100 J input, efficiency is…", "options": ["20%", "80%", "100%", "180%"], "answer": 1, "explain": "Efficiency = 80/100 × 100% = 80%."}], "unit7": [{"q": "A 40 N force acts on an area of 2 m². Pressure is…", "options": ["20 Pa", "42 Pa", "80 Pa", "0.05 Pa"], "answer": 0, "explain": "P = F/A = 40/2 = 20 Pa."}, {"q": "For the same force, which produces the greatest pressure?", "options": ["A larger area", "A smaller area", "Area does not matter", "A zero force"], "answer": 1, "explain": "Pressure rises as area decreases for the same force."}, {"q": "Liquid pressure usually…", "options": ["decreases with depth", "increases with depth", "is always zero", "depends only on container colour"], "answer": 1, "explain": "Deeper points have more liquid above them."}, {"q": "What causes gas pressure on a container wall?", "options": ["Particles colliding with the wall", "The colour of the gas", "The wall creating mass", "Gravity disappearing"], "answer": 0, "explain": "Particle collisions exert force on the walls."}, {"q": "One pascal equals…", "options": ["one joule per second", "one newton per square metre", "one kilogram per metre", "one metre per second"], "answer": 1, "explain": "Pa = N/m²."}], "unit8": [{"q": "Which method can transfer energy through empty space?", "options": ["Conduction", "Convection", "Radiation", "All require matter"], "answer": 2, "explain": "Radiation can travel through a vacuum."}, {"q": "Convection mainly occurs in…", "options": ["solids only", "liquids and gases", "a vacuum", "only metals"], "answer": 1, "explain": "Convection involves bulk movement of fluids."}, {"q": "Why are metals often good thermal conductors?", "options": ["They have free electrons that transfer energy", "They have no particles", "They stop all energy transfer", "They are always cold"], "answer": 0, "explain": "Free electrons help transfer energy through metals."}, {"q": "During boiling at a fixed pressure, energy mainly goes into…", "options": ["changing the liquid to gas", "making the substance disappear", "reducing all particle motion to zero", "changing its mass to energy"], "answer": 0, "explain": "Energy is used for the change of state while the boiling temperature stays constant."}, {"q": "Thermal energy tends to transfer spontaneously from…", "options": ["cooler to warmer objects only", "warmer to cooler objects", "smaller objects to larger objects only", "objects with less mass to more mass only"], "answer": 1, "explain": "A temperature difference drives net thermal energy transfer from warmer to cooler."}], "unit9": [{"q": "A wave has f = 5 Hz and λ = 2 m. Its speed is…", "options": ["2.5 m/s", "7 m/s", "10 m/s", "25 m/s"], "answer": 2, "explain": "v = fλ = 5 × 2 = 10 m/s."}, {"q": "Frequency is measured in…", "options": ["metres", "hertz", "newtons", "joules"], "answer": 1, "explain": "Frequency is measured in hertz (Hz)."}, {"q": "Sound is which kind of wave in air?", "options": ["Longitudinal mechanical", "Electromagnetic transverse", "A wave that needs no medium", "A stationary light wave"], "answer": 0, "explain": "Sound travels through air as a longitudinal mechanical wave."}, {"q": "A higher-pitched sound generally has…", "options": ["lower frequency", "higher frequency", "zero amplitude", "greater wavelength in every medium"], "answer": 1, "explain": "Pitch is related to frequency."}, {"q": "What does a wave transfer overall?", "options": ["Matter only", "Energy, without net transfer of matter overall", "Nothing", "Only particles from start to finish"], "answer": 1, "explain": "Waves carry energy; the medium's particles oscillate around their positions."}], "unit10": [{"q": "Current is measured in…", "options": ["volts", "amperes", "ohms", "watts"], "answer": 1, "explain": "Current is measured in amperes (A)."}, {"q": "A 3 Ω resistor has 12 V across it. The current is…", "options": ["4 A", "9 A", "15 A", "36 A"], "answer": 0, "explain": "I = V/R = 12/3 = 4 A."}, {"q": "What is needed for a steady current in a simple circuit?", "options": ["A complete conducting path and a suitable source", "A broken wire", "Only a plastic rod", "No energy source"], "answer": 0, "explain": "A complete circuit and a suitable source are needed."}, {"q": "In a series circuit, current through each component is…", "options": ["the same", "always zero", "different by definition", "measured in kilograms"], "answer": 0, "explain": "A series circuit has one path for charge flow."}, {"q": "Which is the correct unit for resistance?", "options": ["Ohm (Ω)", "Pascal (Pa)", "Joule (J)", "Metre (m)"], "answer": 0, "explain": "Resistance is measured in ohms."}], "unit11": [{"q": "The angle of incidence is 40°. The angle of reflection is…", "options": ["20°", "40°", "50°", "90°"], "answer": 1, "explain": "The law of reflection says the angles are equal."}, {"q": "What is the normal?", "options": ["A line perpendicular to the surface", "The reflected ray itself", "The mirror's colour", "A type of lens"], "answer": 0, "explain": "The normal is drawn at 90° to the surface."}, {"q": "Refraction occurs because light…", "options": ["changes speed between media", "always stops at a boundary", "turns into sound", "loses all energy"], "answer": 0, "explain": "A speed change across a boundary can change the light's direction."}, {"q": "Which kind of lens brings parallel rays together?", "options": ["Converging lens", "Diverging lens", "Plane mirror", "Opaque sheet"], "answer": 0, "explain": "A converging lens focuses parallel rays."}, {"q": "Why can a prism split white light into colours?", "options": ["Different wavelengths refract by different amounts", "The prism creates all light from nothing", "Colours have no wavelengths", "Light cannot pass through glass"], "answer": 0, "explain": "Different wavelengths bend by different amounts in the prism."}], "unit12": [{"q": "A 5 kg object accelerates at 2 m/s². Resultant force is…", "options": ["2.5 N", "7 N", "10 N", "25 N"], "answer": 2, "explain": "F = ma = 5 × 2 = 10 N."}, {"q": "A student travels 100 m in 20 s. Average speed is…", "options": ["2 m/s", "5 m/s", "20 m/s", "2000 m/s"], "answer": 1, "explain": "Speed = 100/20 = 5 m/s."}, {"q": "Which is a unit of energy?", "options": ["Joule", "Ampere", "Kilogram", "Metre"], "answer": 0, "explain": "Energy is measured in joules."}, {"q": "A 20 N force acts on 4 m². Pressure is…", "options": ["5 Pa", "16 Pa", "24 Pa", "80 Pa"], "answer": 0, "explain": "P = F/A = 20/4 = 5 Pa."}, {"q": "What should a final physics calculation include?", "options": ["Only a guess", "A number and appropriate unit", "Only the formula", "No working ever"], "answer": 1, "explain": "A clear final answer includes a number and a suitable unit."}]};
  const completedKey = "studybuddy-physics-completed-v2";
  function readCompleted() {
    try {
      const value = JSON.parse(localStorage.getItem(completedKey) || "[]");
      return Array.isArray(value) ? value.filter(n => Number.isInteger(n) && n >= 1 && n <= 12) : [];
    } catch { return []; }
  }
  let completedUnits = [...new Set(readCompleted())];

  function updateProgress() {
    const fill = document.getElementById("physicsProgressFill");
    const text = document.getElementById("physicsProgressText");
    if (fill) fill.style.width = `${(completedUnits.length / 12) * 100}%`;
    if (text) text.textContent = `${completedUnits.length} of 12 units completed`;
    document.querySelectorAll(".unit-link").forEach((link) => {
      const match = link.getAttribute("href")?.match(/unit-(\d+)/);
      if (!match) return;
      const n = Number(match[1]);
      const number = link.querySelector(".unit-number");
      if (number && completedUnits.includes(n)) {
        number.textContent = "✓";
        number.style.color = "var(--mint)";
      }
    });
  }

  function markUnitComplete(unitNumber) {
    if (!completedUnits.includes(unitNumber)) {
      completedUnits.push(unitNumber);
      completedUnits.sort((a, b) => a - b);
      localStorage.setItem(completedKey, JSON.stringify(completedUnits));
    }
    updateProgress();
  }

  document.querySelectorAll("[data-quiz]").forEach((quizBox) => {
    const quizId = quizBox.dataset.quiz;
    const questions = quizzes[quizId];
    const content = quizBox.querySelector(".quiz-content");
    if (!questions || !content) return;

    let questionIndex = 0;
    let score = 0;
    let answered = false;
    content.innerHTML = `
      <div class="quiz-score" data-score></div>
      <div class="progress-track"><div class="progress-fill" data-progress></div></div>
      <div data-question-area></div>
      <div class="quiz-feedback" data-feedback aria-live="polite"></div>
      <div class="quiz-actions">
        <button class="check-answer" type="button" data-check>Check answer</button>
        <button class="next-question" type="button" data-next hidden>Next question →</button>
        <button class="restart-quiz" type="button" data-restart hidden>Try again</button>
      </div>
      <div class="unit-complete" data-complete hidden>✓ Unit quiz completed! Your progress has been saved on this device.</div>
    `;

    const questionArea = content.querySelector("[data-question-area]");
    const feedback = content.querySelector("[data-feedback]");
    const scoreLabel = content.querySelector("[data-score]");
    const progressFill = content.querySelector("[data-progress]");
    const checkButton = content.querySelector("[data-check]");
    const nextButton = content.querySelector("[data-next]");
    const restartButton = content.querySelector("[data-restart]");
    const completeMessage = content.querySelector("[data-complete]");
    const unitNumber = Number(quizId.replace("unit", ""));

    function renderQuestion() {
      if (questionIndex >= questions.length) {
        finishQuiz();
        return;
      }
      const item = questions[questionIndex];
      answered = false;
      questionArea.innerHTML = `
        <p class="quiz-question">${questionIndex + 1}. ${item.q}</p>
        <div class="quiz-options">
          ${item.options.map((option, index) => `
            <label class="quiz-option">
              <input type="radio" name="${quizId}-answer" value="${index}">
              <span>${option}</span>
            </label>`).join("")}
        </div>`;
      feedback.textContent = "";
      feedback.className = "quiz-feedback";
      scoreLabel.textContent = `Question ${questionIndex + 1} of ${questions.length} · Score: ${score}`;
      progressFill.style.width = `${(questionIndex / questions.length) * 100}%`;
      checkButton.hidden = false;
      nextButton.hidden = true;
      restartButton.hidden = true;
      completeMessage.hidden = true;
    }

    function finishQuiz() {
      questionArea.innerHTML = `<h3>Class complete!</h3><p>You scored ${score} out of ${questions.length}.</p>`;
      feedback.textContent = score === questions.length
        ? "Perfect! You understood every question."
        : score >= Math.ceil(questions.length * 0.6)
          ? "Good work! Review any explanations you missed before moving on."
          : "Keep practising. Revisit the lesson and practice questions, then try again.";
      feedback.className = "quiz-feedback " + (score >= Math.ceil(questions.length * 0.6) ? "correct" : "incorrect");
      scoreLabel.textContent = `Final score: ${score}/${questions.length}`;
      progressFill.style.width = "100%";
      // Keep both navigation buttons hidden after the final question.
      checkButton.hidden = true;
      nextButton.hidden = true;
      restartButton.hidden = false;
      completeMessage.hidden = false;
      if (score >= 3) markUnitComplete(unitNumber);
    }

    checkButton.addEventListener("click", () => {
      if (answered) return;
      const selected = content.querySelector(`input[name="${quizId}-answer"]:checked`);
      if (!selected) {
        feedback.textContent = "Choose an answer first.";
        feedback.className = "quiz-feedback incorrect";
        return;
      }
      answered = true;
      const item = questions[questionIndex];
      const isCorrect = Number(selected.value) === item.answer;
      if (isCorrect) score++;
      feedback.textContent = `${isCorrect ? "Correct! " : "Not quite. "}${item.explain}`;
      feedback.className = "quiz-feedback " + (isCorrect ? "correct" : "incorrect");
      content.querySelectorAll('input[type="radio"]').forEach(input => input.disabled = true);
      scoreLabel.textContent = `Question ${questionIndex + 1} of ${questions.length} · Score: ${score}`;
      checkButton.hidden = true;
      nextButton.hidden = false;
      nextButton.textContent = questionIndex === questions.length - 1 ? "See results →" : "Next question →";
    });

    nextButton.addEventListener("click", () => {
      if (!answered) return;
      questionIndex++;
      if (questionIndex >= questions.length) finishQuiz();
      else renderQuestion();
    });

    restartButton.addEventListener("click", () => {
      questionIndex = 0;
      score = 0;
      answered = false;
      renderQuestion();
    });

    renderQuestion();
  });

  const resetButton = document.getElementById("resetPhysicsProgress");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      if (!window.confirm("Reset your completed Physics units on this device?")) return;
      completedUnits = [];
      localStorage.removeItem(completedKey);
      updateProgress();
    });
  }
  // Welcome dialog: ask for a name and a learning goal, remember them on this device.
  const profileKey = "studybuddy-profile";
  const dialog = document.getElementById("welcomeDialog");
  if (dialog) {
    const form = document.getElementById("welcomeForm");
    const nameInput = document.getElementById("learnerName");
    const otherInput = document.getElementById("goalOther");
    const errorBox = document.getElementById("welcomeError");
    const line = document.getElementById("welcomeLine");
    const lineText = document.getElementById("welcomeText");

    function loadProfile() {
      try {
        const v = JSON.parse(localStorage.getItem(profileKey) || "null");
        if (v && typeof v.name === "string" && v.name.trim()) {
          return { name: v.name.slice(0, 30), goal: typeof v.goal === "string" ? v.goal.slice(0, 80) : "" };
        }
      } catch {}
      return null;
    }
    function renderGreeting(profile) {
      if (!profile) { line.hidden = true; return; }
      lineText.textContent = `Welcome back, ${profile.name}!` + (profile.goal ? ` Your goal: ${profile.goal}.` : "");
      line.hidden = false;
    }
    function openDialog(profile) {
      nameInput.value = profile ? profile.name : "";
      otherInput.value = "";
      errorBox.hidden = true;
      let matched = false;
      form.querySelectorAll('input[name="goal"]').forEach((r) => {
        r.checked = !!profile && r.value === profile.goal;
        if (r.checked) matched = true;
      });
      if (profile && profile.goal && !matched) otherInput.value = profile.goal;
      if (typeof dialog.showModal === "function") dialog.showModal();
      nameInput.focus();
    }

    let profile = loadProfile();
    renderGreeting(profile);
    let skipped = false;
    try { skipped = sessionStorage.getItem("studybuddy-welcome-skipped") === "1"; } catch {}
    if (!profile && !skipped) openDialog(null);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = nameInput.value.trim();
      const chosen = form.querySelector('input[name="goal"]:checked');
      const goal = otherInput.value.trim() || (chosen ? chosen.value : "");
      if (!name) { errorBox.textContent = "Please enter your name."; errorBox.hidden = false; nameInput.focus(); return; }
      if (!goal) { errorBox.textContent = "Pick a goal or write your own."; errorBox.hidden = false; return; }
      profile = { name, goal };
      try { localStorage.setItem(profileKey, JSON.stringify(profile)); } catch {}
      renderGreeting(profile);
      dialog.close();
    });
    document.getElementById("skipWelcome").addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => {
      if (!loadProfile()) { try { sessionStorage.setItem("studybuddy-welcome-skipped", "1"); } catch {} }
    });
    document.getElementById("editProfile").addEventListener("click", () => openDialog(profile));
  }


  updateProgress();
});
