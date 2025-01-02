// Retrieve selected difficulty and level
const difficulty = localStorage.getItem('selectedDifficulty') || 'easy';
let level = parseInt(localStorage.getItem('selectedLevel')) || 1;

// Define questions for each difficulty and level
const questionsByDifficulty = {
  easy: {
    1: ["money", "food", "traffic"],
    2: ["house", "school", "garden"],
  },
  medium: {
    1: ["work", "health", "weather"],
    2: ["travel", "fitness", "study"],
  },
  hard: {
    1: ["economy", "politics", "relationships"],
    2: ["investment", "education", "strategy"],
  },
};

// Get the questions for the current level
const questions = questionsByDifficulty[difficulty][level] || [];
let answeredQuestions = Array(questions.length).fill(false);
let score = 0;

// Dynamically populate the answers list with placeholders
const answersList = document.getElementById("answers");
answersList.innerHTML = ""; // Clear any existing content
questions.forEach((question, index) => {
  const placeholder = "-".repeat(question.length); // Generate dashes matching the word length
  const listItem = document.createElement("li");
  listItem.innerHTML = `${index + 1}. <span id="answer${index + 1}">${placeholder}</span>`;
  answersList.appendChild(listItem);
});

// Display level and question prompt
document.getElementById("question").textContent = `Level ${level}: Questions!`;

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
    score += 10;
    document.getElementById("score").textContent = `Score: ${score}`;

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
  const maxLevels = Object.keys(questionsByDifficulty[difficulty]).length; // Total levels for the difficulty
  if (level < maxLevels) {
    level += 1; // Increment the level
    localStorage.setItem("selectedLevel", level);
    location.reload(); // Reload the current page to start the next level
  } else {
    alert("Congratulations! You've completed all levels for this difficulty.");
    window.location.href = "level-selection.html"; // Return to level selection if no more levels
  }
}

