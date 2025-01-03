// questions.js
const questionBank = {
    easy: {
      1: { 
        prompt: "Things people complain about", 
        answers: ["money", "food", "traffic", "noise", "prices"] 
      },

      2: { 
        prompt: "Places where people gather", 
        answers: ["house", "school", "garden", "church"< "theaters"] 
      },

      3: { 
        prompt: "Something hot", 
        answers: ["fire", "sun", "lava", "coffee", "stoves"] 
      },

      4: { 
        prompt: "Favourite snacks of children", 
        answers: ["candy", "lollipop", "gummies", "icecream", "chocolate"] 
      },

      5: { 
        prompt: "Something sour", 
        answers: ["lemon", "vinegar", "calamansi", "yogurt", "lime"] 
      },
       
      6: { 
        prompt: "Something soft", 
        answers: ["marshmallow", "cotton", "pillow", "feather", "cloud"] 
      },

      7: { 
        prompt: "Something sharp", 
        answers: ["knife", "razor", "thorn", "needle", "scissors"] 
      },

      8: { 
        prompt: "Colors of the rainbow", 
        answers: ["blue", "red", "orange", "yellow", "green"] 
      },

      9: { 
        prompt: "Animals that can fly", 
        answers: ["eagle", "parrot", "bat", "butterfly", "pigeon"] 
      },

      10: { 
        prompt: "Something that melts", 
        answers: ["ice", "buter", "candle wax", "plastic", "chocolate"] 
      },

      11: { 
        prompt: "Something heavy", 
        answers: ["rock", "elephant", "car", "dumbbell", "piano"] 
      },

      12: { 
        prompt: "Something salty", 
        answers: ["chips", "soy sauce", "popcorn", "pretzel", "peanuts"] 
      },

      13: { 
        prompt: "transportation", 
        answers: ["jeep", "boat", "bicycle", "train", "bus"] 
      },

      14: { 
        prompt: "Something fast", 
        answers: ["cheetah", "rocket", "motorbike", "sports car", "airplane"] 
      },

      15: { 
        prompt: "Something you wore on your feet", 
        answers: ["shoes", "sandals", "socks", "slippers", "boots"] 
      },

      16: { 
        prompt: "Types of season", 
        answers: ["winter", "autumn", "summer", "spring", "fall"] 
      },

      17: { 
        prompt: "Days of the week", 
        answers: ["wednesday", "friday", "monday", "tuesday", "thrusday"] 
      },

      18: { 
        prompt: "Something that everyone wants to achieve", 
        answers: ["job", "happiness", "success", "wealth", "confidence"] 
      },

      19: { 
        prompt: "Something a student will need", 
        answers: ["pens", "books", "notes", "eraser", "tape"] 
      },

      20: { 
        prompt: "Something smooth", 
        answers: ["silk", "glass", "marble", "polished wood", "satin"] 
      },

    },
    medium: {
      1: { 
        prompt: "Common topics in workplace conversations", 
        answers: ["work", "health", "weather"] 
      },
      2: { 
        prompt: "Things people plan for", 
        answers: ["travel", "fitness", "study"] 
      },
    },
    hard: {
      1: { 
        prompt: "Complex issues discussed in debates", 
        answers: ["economy", "politics", "relationships"] 
      },
      2: { 
        prompt: "Subjects requiring long-term planning", 
        answers: ["investment", "education", "strategy"] 
      },
    },
  };
  
  // Function to get a random set of questions and prompt based on difficulty and level
  function getQuestionsAndPrompt(difficulty, level) {
    const data = questionBank[difficulty]?.[level];
    if (!data) return { prompt: "No prompt available", answers: [] };
  
    return {
      prompt: data.prompt,
      answers: data.answers.sort(() => Math.random() - 0.5), // Shuffle the answers
    };
  }
  
  