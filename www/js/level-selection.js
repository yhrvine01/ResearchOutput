// Display selected difficulty
const difficulty = localStorage.getItem('selectedDifficulty') || 'easy';
document.getElementById('difficulty-title').textContent = `Choose a Level (${difficulty.toUpperCase()})`;

function startLevel(level) {
  localStorage.setItem('selectedLevel', level);
  
  // Navigate to the correct game mode based on stored data
  const gameMode = localStorage.getItem('gameMode'); // This would be set earlier
  if (gameMode === 'with-question') {
    window.location.href = 'game-with-question.html';
  } else if (gameMode === 'without-question') {
    window.location.href = 'game-without-question.html';
  }
}

