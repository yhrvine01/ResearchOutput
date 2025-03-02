// Display selected difficulty
const difficulty = localStorage.getItem('selectedDifficulty') || 'easy';
document.getElementById('difficulty-title').textContent = `Choose a Level (${difficulty.toUpperCase()})`;

// Retrieve completed levels from localStorage
const completedLevels = JSON.parse(localStorage.getItem('completedLevels')) || [];

// Unlock levels based on progress
const levelButtons = document.querySelectorAll('.level-button');
levelButtons.forEach((button) => {
  const level = parseInt(button.getAttribute('data-level'));
  if (level === 1 || completedLevels.includes(level - 1)) {
    button.disabled = false; // Unlock the level
  } else {
    button.disabled = true; // Keep it locked
  }
});

// Function to start a level
function startLevel(level) {
  localStorage.setItem('selectedLevel', level);
  window.location.href = localStorage.getItem('gameMode') === 'with-question'
    ? 'game-with-question.html'
    : 'game-without-question.html';
}

// Save completed levels (to be called after finishing a level)
function completeLevel(level) {
  const completedLevels = JSON.parse(localStorage.getItem('completedLevels')) || [];
  if (!completedLevels.includes(level)) {
    completedLevels.push(level);
    localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
  }
}
// Function to play sound effects
function playSoundEffect() {
  if (soundEffectsEnabled) {
    const soundEffectsAudio = document.getElementById('sound-effects-audio');
    soundEffectsAudio.play();
  }
}

// Function to initialize sound effects for a specific page
function initializePageSoundEffects() {
  // Add event listeners to buttons or any clickable elements that should have sound effects
  const buttonsWithSound = document.querySelectorAll('.btn-save, .btn-back, .btn-other'); // Add all button selectors here
  buttonsWithSound.forEach(button => {
    button.addEventListener('click', playSoundEffect);
  });
} 






