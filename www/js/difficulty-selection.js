function selectDifficulty(difficulty) {
  localStorage.setItem("selectedDifficulty", difficulty);
  localStorage.setItem("selectedLevel", 1);
  localStorage.setItem("currentScore", 0); // Reset score for new game
  window.location.href = "level-selection.html"; // Navigate to level selection
}