document.addEventListener("DOMContentLoaded", () => {
  // Check if the settings elements exist before running the script
  const bgMusicToggle = document.getElementById("bg-music");
  const soundEffectsToggle = document.getElementById("sound-effects");

  if (!bgMusicToggle || !soundEffectsToggle) {
      // Exit script if elements are not found (prevents errors on other pages)
      return;
  }

  // Load settings from localStorage
  const settings = JSON.parse(localStorage.getItem("gameSettings")) || {
      bgMusic: false,
      soundEffects: false,
  };

  // Initialize form inputs with saved settings
  bgMusicToggle.checked = settings.bgMusic;
  soundEffectsToggle.checked = settings.soundEffects;

  // Save settings when button is clicked
  document.getElementById("save-settings").addEventListener("click", () => {
      const updatedSettings = {
          bgMusic: bgMusicToggle.checked,
          soundEffects: soundEffectsToggle.checked,
      };

      audioManager.saveSettings(updatedSettings);

      if (updatedSettings.bgMusic) {
          console.log("Playing music after user interaction.");
          localStorage.setItem("bgMusicPlaying", "true");
          document.addEventListener("click", () => audioManager.tryPlayMusic(), { once: true });
      } else {
          audioManager.bgMusic.pause();
          localStorage.setItem("bgMusicPlaying", "false");
      }

      alert("Settings saved!");
  });
});
