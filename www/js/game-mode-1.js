// Retrieve selected difficulty and level
const difficulty = localStorage.getItem("selectedDifficulty") || "easy";
let level = parseInt(localStorage.getItem("selectedLevel")) || 1;

let score = parseInt(localStorage.getItem("currentScore")) || 0;
let highScore = parseInt(localStorage.getItem("highScore")) || 0;

// Fetch the questions and prompt dynamically
const { prompt, answers: questions } = getQuestionsAndPrompt(difficulty, level);
let answeredQuestions = Array(questions.length).fill(false);
let revealedHints = Array(questions.length).fill(0);

// Update the score and high score display
document.getElementById("score").textContent = `Score: ${score}`;
document.getElementById("highscore").textContent = `High Score: ${highScore}`;

// Set the number of hints based on difficulty
let hintsRemaining = difficulty === "easy" ? 3 : difficulty === "medium" ? 4 : 5;
document.getElementById("hints-remaining").textContent = `Hints Remaining: ${hintsRemaining}`;

// Display the dynamic prompt for the level
document.getElementById("question").textContent = `Level ${level}: ${prompt}`;

// Dynamically populate the answers list with placeholders
const answersList = document.getElementById("answers");
answersList.innerHTML = ""; // Clear any existing content
questions.forEach((question, index) => {
  const placeholder = "-".repeat(question.length); // Generate dashes matching the word length
  const listItem = document.createElement("li");
  listItem.innerHTML = `${index + 1}. <span id="answer${index + 1}">${placeholder}</span>`;
  answersList.appendChild(listItem);
});

// Handle user input
document.getElementById("submit-answer").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value.toLowerCase();
  const index = questions.indexOf(userInput);

  if (index !== -1 && !answeredQuestions[index]) {
    // Mark the question as answered
    answeredQuestions[index] = true;

    // Display the correct answer in the list
    document.getElementById(`answer${index + 1}`).textContent = questions[index].toUpperCase();

    // Update score
   // Update score
   score += 10;
   document.getElementById("score").textContent = `Score: ${score}`;
   localStorage.setItem("currentScore", score);

   // Check for new high score
   if (score > highScore) {
     highScore = score;
     localStorage.setItem("highScore", highScore);
     document.getElementById("highscore").textContent = `High Score: ${highScore}`;
   }

    // Clear input
    document.getElementById("user-input").value = "";

    // Check if all questions are answered
    if (answeredQuestions.every((ans) => ans)) {
      alert(`Congratulations! You've completed Level ${level}.`);
      completeLevel(level); // Unlock the next level
      goToNextLevel(); // Automatically go to the next level
    }
  } else if (answeredQuestions[index]) {
    alert("You already answered this question!");
  } else {
    alert("Incorrect answer, try again!");
  }
});

// Use a hint
// Use a hint
document.getElementById("hint-button").addEventListener("click", () => {
  if (hintsRemaining > 0) {
    // Find unanswered indexes
    const unansweredIndexes = answeredQuestions
      .map((answered, i) => (!answered && revealedHints[i] < questions[i].length ? i : null))
      .filter((i) => i !== null);

    if (unansweredIndexes.length > 0) {
      // Pick a random unanswered question
      const randomIndex = unansweredIndexes[Math.floor(Math.random() * unansweredIndexes.length)];
      const word = questions[randomIndex];
      const revealed = revealedHints[randomIndex];

      // Track revealed positions
      const revealedPositions = [...document.getElementById(`answer${randomIndex + 1}`).textContent]
        .map((char, i) => char !== "-" ? i : null)
        .filter((i) => i !== null);

      const unrevealedIndexes = [...word]
        .map((_, i) => (revealedPositions.includes(i) ? null : i))
        .filter((i) => i !== null);

      const randomLetterIndex = unrevealedIndexes[Math.floor(Math.random() * unrevealedIndexes.length)];

      // Update revealed letter
      revealedHints[randomIndex] += 1;
      const partialAnswer = [...word]
        .map((letter, i) =>
          revealedPositions.includes(i) || i === randomLetterIndex ? letter.toUpperCase() : "-"
        )
        .join("");

      document.getElementById(`answer${randomIndex + 1}`).textContent = partialAnswer;

      // Decrease hints and update display
      hintsRemaining -= 1;
      document.getElementById("hints-remaining").textContent = `Hints Remaining: ${hintsRemaining}`;
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
  const maxLevels = Object.keys(questionBank[difficulty]).length; // Total levels for the difficulty
  if (level < maxLevels) {
    level += 1; // Increment the level
    localStorage.setItem("selectedLevel", level);
    location.reload(); // Reload the current page to start the next level
  } else {
    alert("Congratulations! You've completed all levels for this difficulty.");
    window.location.href = "level-selection.html"; // Return to level selection if no more levels
  }
}