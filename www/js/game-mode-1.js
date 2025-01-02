const difficulty = localStorage.getItem('selectedDifficulty') || 'easy';
const level = localStorage.getItem('selectedLevel') || 1;

// Adjust questions or time limit based on difficulty and level
const questions = {
  easy: ["money", "food", "traffic"],
  medium: ["work", "health", "weather"],
  hard: ["economy", "politics", "relationships"]
};


let score = 0;

// Display a question based on difficulty
document.getElementById("question").textContent =`Level ${level}: Something people complain about`;

// Handle user input (same as before)
document.getElementById("submit-answer").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value.toLowerCase();
  const index = questions[difficulty].indexOf(userInput);

  if (index !== -1) {
    document.getElementById('answer${index + 1}').textContent = questions[difficulty][index].toUpperCase();
    questions[difficulty][index] = ""; // Prevent duplicate matches
    score += 10;
    document.getElementById("score").textContent = 'Score: ${score}';
    document.getElementById("user-input").value = "";
  } else {
    alert("Incorrect answer, try again!");
  }
});

