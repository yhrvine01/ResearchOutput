const difficulty = localStorage.getItem('selectedDifficulty') || 'easy';
const level = localStorage.getItem('selectedLevel') || 1;

// Adjust jumble and valid words based on difficulty and level
const wordsByDifficulty = {
  easy: { jumble: ["l", "o", "v", "e"], validWords: ["love", "vole"] },
  medium: { jumble: ["b", "r", "e", "a", "k"], validWords: ["break", "baker"] },
  hard: { jumble: ["c", "o", "m", "p", "l", "e", "x"], validWords: ["complex", "compel"] }
};

const { jumble, validWords } = wordsByDifficulty[difficulty];
let wordScore = 0;

document.getElementById("jumble").textContent = jumble.join(" ");

document.getElementById("check-word").addEventListener("click", () => {
  const word = document.getElementById("word-input").value.toLowerCase();
  if (validWords.includes(word)) {
    const foundWordsList = document.getElementById("found-words");
    const listItem = document.createElement("li");
    listItem.textContent = word.toUpperCase();
    foundWordsList.appendChild(listItem);

    wordScore += word.length * 10; // Score based on word length
    document.getElementById("word-score").textContent = 'Score: ${wordScore}';
    validWords.splice(validWords.indexOf(word), 1); // Remove found word
    document.getElementById("word-input").value = "";
  } else {
    alert("Invalid word or already found!");
  }
});

