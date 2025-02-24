document.addEventListener("DOMContentLoaded", () => {
    const bgMusicToggle = document.getElementById("bg-music");
    const soundEffectsToggle = document.getElementById("sound-effects");
    const themeModeSelect = document.getElementById("theme-mode");
  
    // Load settings from localStorage
    const settings = JSON.parse(localStorage.getItem("gameSettings")) || {
      bgMusic: false,
      soundEffects: false,
      themeMode: "light",
    };
  
    // Initialize form inputs with saved settings
    bgMusicToggle.checked = settings.bgMusic;
    soundEffectsToggle.checked = settings.soundEffects;
    themeModeSelect.value = settings.themeMode;
  
    // Save settings to localStorage
    document.getElementById("save-settings").addEventListener("click", () => {
      const updatedSettings = {
        bgMusic: bgMusicToggle.checked,
        soundEffects: soundEffectsToggle.checked,
        themeMode: themeModeSelect.value,
      };
  
      localStorage.setItem("gameSettings", JSON.stringify(updatedSettings));
      alert("Settings saved!");
  
      // Apply theme mode immediately
      applyThemeMode(updatedSettings.themeMode);
    });
  
    // Apply saved theme mode on load
    applyThemeMode(settings.themeMode);
  });
  
  // Function to apply light/dark mode
  function applyThemeMode(mode) {
    document.body.setAttribute("data-theme", mode);
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

