// Global Audio Manager
const audioManager = {
    bgMusic: null,
    clickSound: null,
    settings: JSON.parse(localStorage.getItem("gameSettings")) || { bgMusic: false, soundEffects: false },
    hasUserInteracted: false,

    // Initialize audio settings
    init() {
        if (!window.globalBgMusic) {
            this.bgMusic = new Audio("audio/background-music.mp3");
            this.bgMusic.loop = true;
            this.bgMusic.volume = 0.5;
            window.globalBgMusic = this.bgMusic; // Store globally to persist across pages
        } else {
            this.bgMusic = window.globalBgMusic; // Use the existing instance
        }

        this.clickSound = new Audio("audio/click.mp3");

        // Load last known state from localStorage
        const wasPlaying = localStorage.getItem("bgMusicPlaying") === "true";
        if (wasPlaying) {
            document.addEventListener("click", () => this.tryPlayMusic(), { once: true });
        }

        this.loadSettings();
    },

    // Load settings from localStorage
    loadSettings() {
        this.settings = JSON.parse(localStorage.getItem("gameSettings")) || { bgMusic: false, soundEffects: false };

        if (this.settings.bgMusic) {
            localStorage.setItem("bgMusicPlaying", "true");
        } else {
            this.bgMusic.pause();
            localStorage.setItem("bgMusicPlaying", "false");
        }

        this.soundEffectsEnabled = this.settings.soundEffects;
    },

    // Play music after user interaction
    tryPlayMusic() {
        if (this.settings.bgMusic) {
            this.bgMusic.play().catch((e) => console.warn("Autoplay blocked:", e));
        }
    },

    // Play click sound
    playClickSound() {
        if (this.soundEffectsEnabled) {
            this.clickSound.play();
        }
    },

    // Save settings and apply them
    saveSettings(updatedSettings) {
        localStorage.setItem("gameSettings", JSON.stringify(updatedSettings));
        this.loadSettings();

        if (updatedSettings.bgMusic) {
            document.addEventListener("click", () => this.tryPlayMusic(), { once: true });
        }
    }
};

// Ensure the audioManager initializes properly
document.addEventListener("DOMContentLoaded", () => {
    audioManager.init();

    // Apply click sound to all buttons dynamically
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => audioManager.playClickSound());
    });
});
