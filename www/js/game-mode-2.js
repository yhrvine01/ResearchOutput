// Retrieve selected difficulty
const difficulty = localStorage.getItem("selectedDifficulty") || "easy";

// Word bank for dynamic word generation
const wordBank = {
  easy: ["cat", "dog", "bat", "sun", "rat", "fun"],
  medium: ["apple", "break", "chair", "jumble", "flame", "smart"],
  hard: ["complex", "obstacle", "difficult", "strategy", "puzzle"],
};

// Generate a random word and find its anagrams
const selectedWord = wordBank[difficulty][Math.floor(Math.random() * wordBank[difficulty].length)];
const letters = selectedWord.split("");
let scrambledWord = [...letters].sort(() => Math.random() - 0.5); // Scramble the letters
const validWords = findAnagrams(selectedWord); // Generate valid anagrams

// Track player progress
let foundWords = [];

// Update UI
document.getElementById("jumble").textContent = scrambledWord.join(" ");
updateLetterButtons(scrambledWord);
document.getElementById("word-score").textContent = `Score: 0`;
document.getElementById("round").textContent = `Round: 1`;

// Function to find all possible anagrams for a given word
function findAnagrams(word) {
  const anagrams = [];
  const dictionary = ["cat", "act", "dog", "god", "bat", "tab", "sun", "fun", "rat"];
  dictionary.forEach((dictWord) => {
    if (
      dictWord.length <= word.length &&
      dictWord.split("").every((char) => word.includes(char))
    ) {
      anagrams.push(dictWord);
    }
  });
  return anagrams;
}

// Update the clickable letter buttons
function updateLetterButtons(letters) {
  const letterContainer = document.getElementById("letter-buttons");
  letterContainer.innerHTML = ""; // Clear previous buttons
  letters.forEach((letter) => {
    const button = document.createElement("button");
    button.textContent = letter.toUpperCase();
    button.classList.add("letter-button");
    button.addEventListener("click", () => addLetterToInput(letter));
    letterContainer.appendChild(button);
  });
}

// Add a letter to the input field
function addLetterToInput(letter) {
  const inputField = document.getElementById("word-input");
  inputField.value += letter;
}

// Clear the last letter from the input field
function clearLastLetter() {
  const inputField = document.getElementById("word-input");
  inputField.value = inputField.value.slice(0, -1);
}

// Handle word submission
document.getElementById("check-word").addEventListener("click", () => {
  const word = document.getElementById("word-input").value.toLowerCase();
  if (validWords.includes(word) && !foundWords.includes(word)) {
    // Add to found words
    foundWords.push(word);

    // Update score
    const score = foundWords.reduce((acc, w) => acc + w.length * 10, 0);
    document.getElementById("word-score").textContent = `Score: ${score}`;

    // Display found word
    const foundWordsList = document.getElementById("found-words");
    const listItem = document.createElement("li");
    listItem.textContent = word.toUpperCase();
    foundWordsList.appendChild(listItem);

    // Clear input
    document.getElementById("word-input").value = "";

    // Check if all words are found
    if (foundWords.length === validWords.length) {
      alert("Congratulations! You found all the words!");
      startNextRound();
    }
  } else {
    alert("Invalid word or already found!");
  }
});

// Handle jumble button
document.getElementById("jumble-button").addEventListener("click", () => {
  scrambledWord = [...letters].sort(() => Math.random() - 0.5); // Reshuffle the letters
  updateLetterButtons(scrambledWord);
});

// Start the next round
function startNextRound() {
  const nextWord = wordBank[difficulty][Math.floor(Math.random() * wordBank[difficulty].length)];
  if (nextWord) {
    letters.splice(0, letters.length, ...nextWord.split(""));
    scrambledWord = [...letters].sort(() => Math.random() - 0.5);
    updateLetterButtons(scrambledWord);
    foundWords = [];
    document.getElementById("found-words").innerHTML = "";
    document.getElementById("round").textContent = `Round: ${
      parseInt(document.getElementById("round").textContent.split(": ")[1]) + 1
    }`;
  } else {
    alert("No more words available! Restarting the game.");
    location.reload();
  }
}
