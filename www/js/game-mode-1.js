const settings = JSON.parse(localStorage.getItem("gameSettings")) || { bgMusic: false };

// Background music setup
audioManager.loadSettings();

// Retrieve selected difficulty and level
const difficulty = localStorage.getItem("selectedDifficulty") || "easy";
let level = parseInt(localStorage.getItem("selectedLevel")) || 1;

let score = parseInt(localStorage.getItem("currentScore")) || 0;
let highScore = parseInt(localStorage.getItem("highScore")) || 0;

// Fetch the questions, answers, and descriptions dynamically
const { prompt, answers: questions, descriptions } = getQuestionsAndPrompt(difficulty, level);
if (!descriptions) console.error("Descriptions are missing from questions data.");

let answeredQuestions = Array(questions.length).fill(false);
let revealedHints = Array(questions.length).fill(0);

// DOM elements
const descriptionBox = document.getElementById("answer-description");
const answersList = document.getElementById("answers");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("highscore");
const hintsRemainingDisplay = document.getElementById("hints-remaining");
const userInput = document.getElementById("user-input");

scoreDisplay.textContent = `Score: ${score}`;
highScoreDisplay.textContent = `High Score: ${highScore}`;
hintsRemainingDisplay.textContent = `Hints Remaining: ${difficulty === "easy" ? 3 : difficulty === "medium" ? 4 : 5}`;
document.getElementById("question").textContent = `Level ${level}: ${prompt}`;

// Populate answer list with placeholders
answersList.innerHTML = "";
questions.forEach((question, index) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${index + 1}. <span id="answer${index + 1}">${"-".repeat(question.length)}</span>`;
  answersList.appendChild(listItem);
});

// Handle user input
document.getElementById("submit-answer").addEventListener("click", () => {
  const userAnswer = userInput.value.toLowerCase();
  const index = questions.indexOf(userAnswer);

  if (index !== -1 && !answeredQuestions[index]) {
    answeredQuestions[index] = true;
    document.getElementById(`answer${index + 1}`).textContent = questions[index].toUpperCase();

    // Show the description of the answered word
    descriptionBox.textContent = descriptions[userAnswer] || "No description available.";
    descriptionBox.style.display = "block";

    // Update score
    score += 10;
    scoreDisplay.textContent = `Score: ${score}`;
    localStorage.setItem("currentScore", score);

    // Check for new high score
    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore);
      highScoreDisplay.textContent = `High Score: ${highScore}`;
    }

    userInput.value = "";

    // Check if all questions are answered
    if (answeredQuestions.every((ans) => ans)) {
      alert(`Congratulations! You've completed Level ${level}.`);
      completeLevel(level);
      goToNextLevel();
    }
  } else {
    alert(answeredQuestions[index] ? "You already answered this question!" : "Incorrect answer, try again!");
  }
});

// Handle hint usage
document.getElementById("hint-button").addEventListener("click", () => {
  let hintsRemaining = parseInt(hintsRemainingDisplay.textContent.match(/\d+/)[0]);

  if (hintsRemaining > 0) {
    const unansweredIndexes = answeredQuestions
      .map((answered, i) => (!answered && revealedHints[i] < questions[i].length ? i : null))
      .filter((i) => i !== null);

    if (unansweredIndexes.length > 0) {
      const randomIndex = unansweredIndexes[Math.floor(Math.random() * unansweredIndexes.length)];
      const word = questions[randomIndex];

      // Reveal one letter
      const revealedPositions = [...document.getElementById(`answer${randomIndex + 1}`).textContent]
        .map((char, i) => char !== "-" ? i : null)
        .filter((i) => i !== null);

      const unrevealedIndexes = [...word]
        .map((_, i) => (revealedPositions.includes(i) ? null : i))
        .filter((i) => i !== null);

      if (unrevealedIndexes.length > 0) {
        const randomLetterIndex = unrevealedIndexes[Math.floor(Math.random() * unrevealedIndexes.length)];

        revealedHints[randomIndex] += 1;
        const partialAnswer = [...word]
          .map((letter, i) => (revealedPositions.includes(i) || i === randomLetterIndex ? letter.toUpperCase() : "-"))
          .join("");

        document.getElementById(`answer${randomIndex + 1}`).textContent = partialAnswer;
        hintsRemainingDisplay.textContent = `Hints Remaining: ${--hintsRemaining}`;
      }
    } else {
      alert("No more hints can be used.");
    }
  } else {
    alert("No hints remaining!");
  }
});

// Function to mark the level as complete
function completeLevel(level) {
  const completedLevels = JSON.parse(localStorage.getItem("completedLevels")) || [];
  if (!completedLevels.includes(level)) {
    completedLevels.push(level);
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
  }
}

// Function to proceed to the next level
function goToNextLevel() {
  const maxLevels = Object.keys(questionBank[difficulty]).length;
  if (level < maxLevels) {
    localStorage.setItem("selectedLevel", ++level);
    location.reload();
  } else {
    alert("Congratulations! You've completed all levels for this difficulty.");
    window.location.href = "level-selection.html";
  }
}
