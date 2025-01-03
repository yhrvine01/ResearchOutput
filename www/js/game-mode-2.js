// Access the global wordBank object
const difficulty = localStorage.getItem("selectedDifficulty") || "easy";
// Initialize global variables
let { word: selectedWord, validAnagrams: validWords } = selectValidWord(difficulty);
let scrambledWord = [...selectedWord].sort(() => Math.random() - 0.5);

// Track player progress
let foundWords = [];


// Initialize UI
document.getElementById("word-score").textContent = `Score: 0`;
document.getElementById("round").textContent = `Round: 1`;
updateLetterButtons(scrambledWord);
initializeWordList(validWords);

// Function to find all possible anagrams for a given word
function findAnagrams(word) {
  const dictionary = [
    "cat", "act", "dog", "god", "bat", "tab", "sun", "fun", "rat", "art", "tar",
    "apple", "break", "chair", "flame", "smart", "grape", "stone", "light",
    "crown", "cloud", "plant", "river", "beach", "house", "storm", "table",
    "sugar", "piano", "phone", "clock",
  ];

  const wordLetters = [...word];
  const validWords = dictionary.filter((dictWord) => {
    const tempLetters = [...wordLetters];
    return [...dictWord].every((char) => {
      const index = tempLetters.indexOf(char);
      if (index !== -1) {
        tempLetters.splice(index, 1);
        return true;
      }
      return false;
    });
  });

  if (validWords.length === 0) {
    console.warn(`No anagrams found for: ${word}`);
    validWords.push(word); // Fallback to the original word as a single valid word
  }

  return validWords;
}


// Initialize the hidden word list
function initializeWordList(validWords) {
  const wordList = document.getElementById("found-words");
  wordList.innerHTML = ""; // Clear existing list

  if (validWords.length === 0) {
    console.error("No valid words provided to initialize the word list.");
  }

  validWords.forEach((word) => {
    const listItem = document.createElement("div");
    listItem.textContent = "-".repeat(word.length); // Display as hidden
    listItem.setAttribute("data-word", word); // Store the actual word
    listItem.classList.add("word-item");
    wordList.appendChild(listItem);
  });

  console.log("Initialized word list:", validWords);
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

  console.log("Letter buttons refreshed: ", letters);
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
  const wordList = document.getElementById("found-words").children;

  if (validWords.includes(word) && !foundWords.includes(word)) {
    // Add to found words
    foundWords.push(word);

    // Reveal the word in the list
    for (let i = 0; i < wordList.length; i++) {
      if (wordList[i].getAttribute("data-word") === word) {
        wordList[i].textContent = word.toUpperCase();
        break;
      }
    }

    // Update score
    const score = foundWords.reduce((acc, w) => acc + w.length * 10, 0);
    document.getElementById("word-score").textContent = `Score: ${score}`;

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

function selectValidWord(difficulty) {
  let word;
  let validAnagrams = [];
  do {
    word = wordBank[difficulty][Math.floor(Math.random() * wordBank[difficulty].length)];
    validAnagrams = findAnagrams(word);
  } while (validAnagrams.length === 0); // Retry until valid anagrams are found

  return { word, validAnagrams };
}




function updateWordList(word) {
  const wordList = document.getElementById("found-words").children;

  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i].getAttribute("data-word") === word) {
      wordList[i].textContent = word.toUpperCase();
      break;
    }
  }
}


// Start the next round
function startNextRound() {
  const { word, validAnagrams } = selectValidWord(difficulty);
  selectedWord = word;
  validWords = validAnagrams;
  scrambledWord = [...selectedWord].sort(() => Math.random() - 0.5);

  initializeWordList(validWords);
  updateLetterButtons(scrambledWord);

  document.getElementById("word-score").textContent = `Score: 0`;
  document.getElementById("round").textContent = `Round: ${
    parseInt(document.getElementById("round").textContent.split(": ")[1]) + 1
  }`;
}

document.getElementById("jumble-button").addEventListener("click", () => {
  const reshuffledLetters = [...selectedWord].sort(() => Math.random() - 0.5);
  updateLetterButtons(reshuffledLetters);
});
