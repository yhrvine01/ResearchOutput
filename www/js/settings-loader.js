document.addEventListener("DOMContentLoaded", () => {
    const settings = JSON.parse(localStorage.getItem("gameSettings")) || {
      bgMusic: false,
      soundEffects: false,
      themeMode: "light",
    };
  
    // Apply theme mode
    applyThemeMode(settings.themeMode);
  
    // Create an audio element for background music
    const bgMusic = new Audio("audio/background-music.mp3");
    
   
  let musicStarted = false;
    // Add an event listener to wait for user interaction
    document.body.addEventListener("click", () => {
        if (settings.bgMusic && !musicStarted) {
            bgMusic.loop = true;
            bgMusic.play().then(() => console.log("music started"));
            musicStarted = true;
          }
    });
  
    console.log("Settings applied:", settings);
  });
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



  