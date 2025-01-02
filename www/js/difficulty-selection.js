function selectDifficulty(difficulty) {
    localStorage.setItem('selectedDifficulty', difficulty);
    window.location.href = 'level-selection.html'; // Navigate to level selection
  }