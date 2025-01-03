function selectDifficulty(difficulty) {
  localStorage.setItem("selectedDifficulty", difficulty);
  localStorage.setItem("selectedLevel", 1);
  localStorage.setItem("currentScore", 0); // Reset score for new game
  const gameMode = localStorage.getItem("gameMode");

  if (gameMode === "with-question") {
    // For Game Mode 1, navigate to level selection
    window.location.href = "level-selection.html";
  } else if (gameMode === "without-question") {
    // For Game Mode 2, navigate directly to the game
    window.location.href = "game-without-question.html";
  }
}