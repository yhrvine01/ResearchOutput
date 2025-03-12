// questions.js
const questionBank = {
    easy: {
      1: { 
        prompt: "Things people complain about", 
        answers: ["money", "food", "traffic", "noise", "prices"],
        descriptions: {
          "money": "Money is a common source of stress due to expenses and financial responsibilities.",
          "food": "People often complain about food quality, taste, or prices at restaurants.",
          "traffic": "Traffic congestion is a major issue in cities, leading to delays and frustration.",
          "noise": "Loud noises from construction, neighbors, or vehicles can be disturbing.",
          "prices": "Rising prices of goods and services can lead to economic concerns."
        }
      },
      
      2: { 
        prompt: "Places where people gather", 
        answers: ["house", "school", "garden", "church","theaters"],
        descriptions: {
          "house": "A home is where families gather for meals, conversations, and bonding.",
          "school": "Schools are educational institutions where students learn and interact.",
          "garden": "Gardens are outdoor spaces where people grow plants and relax.",
          "church": "A church is a place of worship and religious gatherings.",
          "theaters": "Theaters are venues where people watch movies, plays, or performances."
        }
      },

      3: { 
        prompt: "Something hot", 
        answers: ["fire", "sun", "lava", "coffee", "stoves"],
        descriptions: { "Fire": "A bright, hot flame that burns things and gives off heat and light.",
          "sun": "The big, bright star in the sky that gives us light and warmth.",
          "lava": "Hot, melted rock that flows out of a volcano.",
          "coffee" : "A dark, bitter drink made from beans, often used to help people wake up.",
          "stoves": "Machines used for cooking food by heating it."
      },
    },

      4: { 
        prompt: "Favourite snacks of children", 
        answers: ["candy", "lollipop", "gummies", "icecream", "chocolate"],
        descriptions: {
          "candy": "A sweet treat made with sugar.",
          "lollipop": "A hard candy on a stick.",
          "gummies": "Soft, chewy candies that come in fun shapes.",
          "icecream": "A cold, creamy dessert made from milk and sugar.",
          "chocolate": "A sweet treat made from cocoa beans, often smooth and rich.",
      },
    }, 


      5: { 
        prompt: "Something sour", 
        answers: ["lemon", "vinegar", "calamansi", "yogurt", "lime"],
        descriptions: {
          "lemon": "A sour yellow fruit rich in vitamin C.",
          "vinegar": "A sour liquid used for cooking and cleaning.",
          "calamansi": "A small, sour citrus fruit often used in drinks and dishes.",
          "yogurt": "A creamy, tangy dairy product made from fermented milk.",
          "lime": "A green, sour citrus fruit similar to lemon."
        },
      },
       
      6: { 
        prompt: "Something soft", 
        answers: ["marshmallow", "cotton", "pillow", "feather", "cloud"],
        descriptions: {
          "marshmallow": "A soft, sweet, and fluffy treat often used in desserts.",
          "cotton": "A light, fluffy fiber used to make fabric and clothes.",
          "pillow": "A soft cushion used for sleeping or resting.",
          "feather": "A light, delicate part of a bird's covering, often used in pillows.",
          "cloud": "A white, fluffy mass in the sky made of tiny water droplets."
        },
      },

      7: { 
        prompt: "Something sharp", 
        answers: ["knife", "razor", "thorn", "needle", "scissors"],
        descriptions: {
          "knife": "A sharp tool used for cutting.",
          "razor": "A sharp blade used for shaving or cutting hair.",
          "thorn": "A small, sharp point found on some plants.",
          "needle": "A thin, pointed tool used for sewing or injections.",
          "scissors": "A tool with two sharp blades used for cutting."
      },
     },

      8: { 
        prompt: "Colors of the rainbow", 
        answers: ["blue", "red", "orange", "yellow", "green"],
        descriptions: {
          "blue": "A cool color often associated with the sky and the ocean.",
    "red": "A warm color that represents passion, energy, and danger.",
    "orange": "A vibrant color that is a mix of red and yellow, often linked to warmth and creativity.",
    "yellow": "A bright color that symbolizes happiness, sunlight, and energy.",
    "green": "A natural color often connected to plants, life, and growth."
        }
      },

      9: { 
        prompt: "Animals that can fly", 
       answers: ["eagle", "parrot", "bat", "butterfly", "pigeon"],
       descriptions: {
        "eagle": "A large bird of prey known for its sharp vision and powerful flight.",
    "parrot": "A colorful bird often known for its ability to mimic sounds and speech.",
    "bat": "A flying mammal that is active at night and uses echolocation to navigate.",
    "butterfly": "A delicate insect with colorful wings that undergoes metamorphosis.",
    "pigeon": "A bird often found in cities, known for its cooing sound and ability to return to its home."
       },
      },

      10: { 
        prompt: "Something that melts", 
        answers: ["ice", "butter", "candle wax", "plastic", "chocolate"],
        descriptions: {
          "ice": "Frozen water that is solid and cold.",
          "butter": "A creamy dairy product made from churning milk or cream.",
          "candle wax": "A substance used to make candles, which melts when heated.",
          "plastic": "A synthetic material that is flexible and can be molded into different shapes.",
          "chocolate": "A sweet food made from roasted and ground cacao seeds, often enjoyed in bars or desserts."
        } ,
      },

      11: { 
        prompt: "Something heavy", 
        answers: ["rock", "elephant", "car", "dumbbell", "piano"],
      descriptions: {
        "rock": "A hard, solid material that makes up the Earth's surface.",
        "elephant": "A large, gray mammal with big ears and a trunk.",
        "car": "A vehicle used for transportation, usually powered by an engine.",
        "dumbbell": "A small weight used for exercise and strength training.",
        "piano": "A musical instrument with keys that produce sound when pressed."
      },
     },

      12: { 
        prompt: "Something salty", 
        answers: ["chips", "soy sauce", "popcorn", "salt", "peanuts"],
        descriptions: {
          "chips": "Crispy, thin slices of potatoes or other vegetables, often eaten as a snack.",
          "soy sauce": "A salty liquid condiment made from fermented soybeans, often used in cooking.",
          "popcorn": "Popped corn kernels that expand and become light, often eaten as a snack.",
          "salt": "A white crystalline substance used to season food and preserve it.",
          "peanuts": "Small, crunchy nuts often eaten as a snack or used in cooking."
        }
      },

      13: { 
        prompt: "transportation", 
        answers: ["jeep", "boat", "bicycle", "train", "bus"],
        descriptions: {
          "jeep": "A rugged, four-wheel-drive vehicle designed for off-road use and rough terrains.",
          "boat": "A watercraft designed to float and travel on water, used for transportation, fishing, or recreation.",
          "bicycle": "A two-wheeled vehicle powered by pedaling, typically featuring handlebars for steering and a seat for the rider.",
          "train": "A series of connected rail vehicles that move along tracks, used for transporting passengers or cargo.",
          "bus": "A large motor vehicle designed to carry multiple passengers, usually operating on a fixed route for public or private transport."
        },
      },
  

      14: { 
        prompt: "Something fast", 
        answers: ["cheetah", "rocket", "motorbike", "sports car", "airplane"],
        descriptions: {
          "cheetah": "A large, fast-running wild cat known for being the fastest land animal, capable of reaching high speeds in short bursts.",
          "rocket": "A powerful vehicle that uses propulsion to travel through space or high altitudes, often used for space exploration or military purposes.",
          "motorbike": "A two-wheeled motorized vehicle designed for speed and maneuverability, often used for transportation or sport.",
          "sports car": "A high-performance automobile designed for speed, agility, and enhanced driving experience, often with a sleek and aerodynamic design.",
          "airplane": "A powered aircraft with fixed wings that flies through the air, used for transporting passengers and cargo over long distances."
        },         
      },

      15: { 
        prompt: "Something you wore on your feet", 
        answers: ["shoes", "sandals", "socks", "slippers", "boots"],
        descriptions: {
          "shoes": "Footwear that covers and protects the feet, typically with a sturdy sole and various styles for different activities.",
          "sandals": "Open-toed footwear with straps that secure the foot, often worn in warm weather or casual settings.",
          "socks": "Soft, fabric coverings worn on the feet, usually under shoes, to provide comfort and absorb moisture.",
          "slippers": "Lightweight, comfortable indoor footwear designed for warmth and ease of movement around the house.",
          "boots": "Sturdy footwear that extends above the ankle, providing extra support and protection, often used for work, hiking, or cold weather."
        },     
      },

      16: { 
        prompt: "Types of season", 
        answers: ["winter", "autumn", "summer", "spring", "fall"], 
        descriptions: {
          "winter": "The coldest season of the year, typically marked by snow, ice, and lower temperatures.",
          "autumn": "The season between summer and winter, characterized by falling leaves, cooler temperatures, and harvest time.",
          "summer": "The warmest season of the year, known for long days, high temperatures, and outdoor activities.",
          "spring": "The season following winter, marked by blooming flowers, warmer weather, and new growth in nature.",
          "fall": "Another term for autumn, referring to the season when leaves change color and temperatures begin to drop."
        },
      },


      17: { 
        prompt: "Days of the week", 
        answers: ["wednesday", "friday", "monday", "tuesday", "thrusday"],
        descriptions: {
          "wednesday": "The third day of the week, often considered the midpoint of the workweek.",
          "friday": "The fifth day of the week, typically marking the end of the workweek and the beginning of the weekend.",
          "monday": "The first day of the workweek, often associated with the start of new tasks and responsibilities.",
          "tuesday": "The second day of the week, following Monday and before Wednesday, commonly a productive workday.",
          "thursday": "The fourth day of the week, coming before Friday and often seen as a lead-up to the weekend."
        },
      },

      18: { 
        prompt: "Something that everyone wants to achieve", 
        answers: ["job", "happiness", "success", "wealth", "confidence"],
        descriptions: {
          "job": "A position of employment where a person performs specific tasks in exchange for payment.",
          "happiness": "A state of well-being and contentment, often associated with joy and life satisfaction.",
          "success": "The achievement of goals or objectives, often measured by personal fulfillment or accomplishments.",
          "wealth": "An abundance of valuable resources, money, or assets that contribute to financial security.",
          "confidence": "A sense of self-assurance and belief in one's abilities or decisions."
        },         
      },

      19: { 
        prompt: "Something a student will need", 
        answers: ["pens", "books", "notes", "eraser", "tape"],
        descriptions: {
          "pens": "Writing instruments that use ink to mark paper or other surfaces, commonly used for writing or drawing.",
          "books": "Bound collections of written, printed, or illustrated pages, often used for reading, studying, or storytelling.",
          "notes": "Written records or brief pieces of information used for studying, reminders, or documentation.",
          "eraser": "A small tool made of rubber or similar material used to remove pencil marks from paper.",
          "tape": "A sticky adhesive strip used for sealing, attaching, or repairing various materials."
        },
      },

      20: { 
        prompt: "Something smooth", 
        answers: ["silk", "glass", "marble", "polished wood", "satin"],
        descriptions: {
          "silk": "A soft, smooth, and luxurious fabric made from the fibers of silkworms, known for its shine and elegance.",
          "glass": "A transparent or translucent material made from melted sand, commonly used for windows, containers, and decorations.",
          "marble": "A hard, crystalline rock often used in sculptures and buildings, known for its smooth texture and natural veining.",
          "polished wood": "Wood that has been smoothed and treated to create a shiny, refined surface, often used in furniture and flooring.",
          "satin": "A glossy, smooth fabric with a soft texture, often used in clothing, bedding, and upholstery."
        },
      },

    },
    medium: {
      1: { 
        prompt: "Common topics in workplace conversations", 
        answers: ["work", "health", "weather", "salary", "gossips"],
        descriptions: {
          "work": "An activity involving effort or skill, typically done to earn a living or achieve a goal.",
          "health": "A state of physical, mental, and emotional well-being, free from illness or injury.",
          "weather": "The atmospheric conditions in a particular place at a specific time, including temperature, precipitation, and wind.",
          "salary": "A fixed regular payment received by an employee for their work, usually on a monthly or biweekly basis.",
          "gossips": "Informal conversations or rumors about other people's personal or private affairs, often unverified."
        },
      },

      2: { 
        prompt: "Things people plan for", 
        answers: ["travel", "wedding", "education", "vacation", "birthday"],
        descriptions: {
          "travel": "The act of moving from one place to another, often for leisure, business, or exploration.",
          "wedding": "A ceremony or event where two people get married, typically involving vows, rings, and celebrations with family and friends.",
          "education": "The process of acquiring knowledge, skills, values, or beliefs through study, teaching, or experience.",
          "vacation": "A planned trip away from home for rest, leisure, or travel, often involving a break from work or routine.",
          "birthday": "A celebration of the anniversary of a person's birth, typically involving parties, gifts, and festivities."
        },
      },

     3: { "prompt": "Things found in a kitchen",
    answers: ["fridge", "oven", "microwave", "sink", "cutlery"],
    descriptions: {
      "fridge": "An appliance used to store food and beverages at low temperatures to preserve freshness.",
      "oven": "A kitchen appliance used for baking, roasting, and cooking food by applying dry heat.",
      "microwave": "A kitchen appliance that uses electromagnetic waves to heat or cook food quickly.",
      "sink": "A basin used for washing dishes, hands, or other items, typically with running water.",
      "cutlery": "Utensils used for eating or preparing food, including knives, forks, spoons, and other tools."
    },
  },

  4: {
      prompt: "Types of sports",
      answers: ["football", "basketball", "tennis", "soccer", "golf"],
      descriptions: {
        "football": "A team sport played with an oval ball, where teams attempt to score by carrying or kicking the ball into the opponent's end zone.",
        "basketball": "A team sport played with a round ball, where teams try to score by shooting the ball through a hoop.",
        "tennis": "A sport played with rackets and a ball, where players hit the ball over a net to score points.",
        "soccer": "A team sport played with a round ball, where teams try to score by kicking the ball into the opponent's goal.",
        "golf": "A sport where players hit a small ball into a series of holes on a course using as few strokes as possible."
      },
  },

  5: {
    prompt: "Types of flowers",
    answers: ["rose", "tulip", "lily", "sunflower", "orchid"],
    descriptions: {
      "rose": "A flowering plant known for its fragrant flowers, typically with multiple petals, often used to symbolize love.",
      "tulip": "A brightly colored flower with a bulbous shape, often blooming in the spring.",
      "lily": "A large, trumpet-shaped flower, often white or colorful, symbolizing purity and beauty.",
      "sunflower": "A tall, yellow flower that turns towards the sun, known for its large, bright petals.",
      "orchid": "A diverse family of flowers known for their unique and exotic appearance, often grown in tropical regions."
    },
  },

  6: {
    prompt: "Parts of the body",
    answers: ["head", "arm", "leg", "hand", "foot"],
    descriptions: {
      "head": "The uppermost part of the body, housing the brain, eyes, ears, nose, and mouth.",
      "arm": "The upper limb of the human body, extending from the shoulder to the hand.",
      "leg": "The lower limb of the body, extending from the hip to the foot, used for walking and standing.",
      "hand": "The part of the arm at the end of the wrist, used for gripping and manipulating objects.",
      "foot": "The lower part of the leg, used for standing, walking, and balancing."
    },
  },

  7: {
    prompt: "Types of Animals",
    answers: ["Mammals", "Reptiles", "Birds", "Amphibians", "Fish"],
    descriptions: {
      "Mammals": "Warm-blooded vertebrates that have hair or fur, give birth to live young (except for monotremes), and produce milk to feed their young.",
      "Reptiles": "Cold-blooded vertebrates with scaly skin, including snakes, lizards, and turtles, most of which lay eggs.",
      "Birds": "Warm-blooded vertebrates with feathers, beaks, and the ability to lay eggs, many of which are capable of flight.",
      "Amphibians": "Cold-blooded vertebrates that can live both in water and on land, such as frogs, salamanders, and newts.",
      "Fish": "Cold-blooded aquatic animals with gills and fins, living in both freshwater and saltwater environments."
    },
  },

8: {
  prompt: "Elements of Weather",
    answers: ["Temperature", "Humidity", "Pressure", "Wind", "Precipitation"],
    descriptions: {
      "Temperature": "The measure of how hot or cold the atmosphere is, usually expressed in Celsius or Fahrenheit.",
      "Humidity": "The amount of moisture in the air, typically measured as a percentage.",
      "Pressure": "The force exerted by the atmosphere on the Earth’s surface, affecting weather patterns and storm systems.",
      "Wind": "Air in motion relative to the Earth's surface, created by differences in air pressure, and responsible for distributing heat and moisture.",
      "Precipitation": "Any form of water, such as rain, snow, sleet, or hail, that falls from the atmosphere to the Earth's surface."
    }
},

9: {
  "prompt": "Things people buy for their home",
  "answers": ["furniture", "appliances", "decor", "tools", "security"],
  "descriptions": {
    "furniture": "Items like sofas, beds, and tables that make a home comfortable.",
    "appliances": "Machines like refrigerators and washing machines that help with daily tasks.",
    "decor": "Things like paintings, rugs, and curtains that make a home look nice.",
    "tools": "Basic equipment like hammers and screwdrivers for home repairs.",
    "security": "Items like cameras and locks to keep the home safe."
  },
},

10: {
  "prompt": "Why people change jobs",
  "answers": ["more money", "career growth", "better balance", "moving", "unhappy"],
  "descriptions": {
    "more money": "People switch jobs to earn a higher salary and improve their finances.",
    "career growth": "A new job can offer better opportunities to learn and advance.",
    "better balance": "Some change jobs for a healthier work-life balance or flexible hours.",
    "moving": "Relocating to a new place often means finding a new job.",
    "unhappy": "People leave jobs when they feel stressed, unappreciated, or unfulfilled."
  },
},

11: {
  prompt: "Things people save money for",  
  answers: ["house", "car", "retirement", "education", "emergency"],  
  descriptions: {  
    "house": "A place of residence that people save for to achieve stability, security, and long-term investment.",  
    "car": "A vehicle used for transportation, often requiring significant financial planning for purchase and maintenance.",  
    "retirement": "A stage in life where a person stops working full-time, requiring savings for financial security and comfort.",  
    "education": "The cost of tuition, books, and other expenses for acquiring knowledge and skills through formal schooling.",  
    "emergency": "Unexpected expenses such as medical bills, home repairs, or job loss, requiring an emergency fund for stability.", 
  }, 
},

12:  {  
  prompt: "Common reasons people take out loans",  
  answers: ["mortgage", "student loans", "car loan", "medical bills", "business startup"],  
  descriptions: {  
    "mortgage": "A loan taken to purchase a home, typically repaid over a long period with interest.",  
    "student loans": "Borrowed funds used to cover tuition, books, and other educational expenses, usually repaid after graduation.",  
    "car loan": "A loan to finance the purchase of a vehicle, often requiring monthly payments with interest.",  
    "medical bills": "Loans taken to cover healthcare costs that may not be covered by insurance.",  
    "business startup": "A loan used to fund a new business, including costs for equipment, inventory, and operations.",
  },
},
 
13: {  
  prompt: "Common monthly expenses people budget for",  
  answers: ["rent","utilities","groceries","insurance", "transportation"],  
  descriptions: {  
    "rent": "A monthly payment for housing, whether for an apartment or house, often the largest recurring expense.",  
    "utilities": "Essential services such as electricity, water, gas, and internet that support daily living.",  
    "groceries": "The cost of food and household essentials needed for daily meals and living.",  
    "transportation": "Expenses for commuting, including gas, public transport, or vehicle maintenance.",  
    "insurance": "Payments for policies covering health, auto, home, or life to provide financial protection against risks.",
  },
},

14: {  
  prompt: "Things people spend money on daily",  
  answers: ["coffee", "snacks", "transport", "lunch", "water"],  
  descriptions: {  
    "coffee": "A popular drink people buy in the morning or throughout the day.",  
    "snacks": "Small food items like chips, fruit, or candy bought between meals.",  
    "transport": "Costs for getting around, such as bus fares, gas, or ride-sharing services.",  
    "lunch": "A meal purchased at work, school, or restaurants during the day.",  
    "water": "Bottled or filtered water people buy to stay hydrated."  
  }, 
},

15: {  
  prompt: "Common household items people buy",  
  answers: ["toilet paper", "soap", "detergent", "toothpaste", "trash bags"],  
  descriptions: {  
    "toilet paper": "A basic necessity used for personal hygiene in bathrooms.",  
    "soap": "A cleaning product used for washing hands, body, or dishes.",  
    "detergent": "A substance used for cleaning clothes and removing stains.",  
    "toothpaste": "A hygiene product used with a toothbrush to clean teeth.",  
    "trash bags": "Plastic bags used to collect and dispose of household waste."  
  }, 
},

16: {  
  prompt: "Things people buy at the grocery store",  
  answers: ["bread", "milk", "eggs", "fruits", "vegetables"],  
  descriptions: {  
    "bread": "A common staple food made from flour, water, and yeast.",  
    "milk": "A dairy product used for drinking, cooking, and baking.",  
    "eggs": "A versatile food used in many dishes, high in protein.",  
    "fruits": "Natural, sweet foods like apples, bananas, and oranges.",  
    "vegetables": "Healthy plant-based foods like carrots, lettuce, and broccoli.",
 }, 
},

17: {  
  prompt: "Things people carry in their bags",  
  answers: ["wallet", "keys", "phone", "charger", "notebook"],  
  descriptions: {  
    "wallet": "A small case used to store money, cards, and IDs.",  
    "keys": "Essential items for unlocking homes, cars, or offices.",  
    "phone": "A mobile device used for communication and entertainment.",  
    "charger": "A device used to recharge electronic gadgets like phones.",  
  },
},

18: {  
  prompt: "Things people use every morning",  
  answers: ["toothbrush", "alarm", "shower", "coffee", "clothes"],  
  descriptions: {  
    toothbrush: "A tool used with toothpaste to clean teeth and maintain oral hygiene.",  
    alarm: "A device or phone feature that wakes people up at a set time.",  
    shower: "A daily activity involving water and soap to stay clean and refreshed.",  
    coffee: "A popular morning drink that helps people wake up and stay alert.",  
    clothes: "Outfits chosen each morning to wear for the day’s activities."  
 }, 
},

19:{
    prompt: "Things people do before going to bed",
    answers: ["brush", "alarm", "read", "phone", "lights"],
    descriptions: {
      brush: "Cleaning teeth to maintain oral hygiene before sleep.",
      alarm : "Setting a clock to wake up at a desired time.",
      read:  "Reading a book, article, or other material to relax.",
      phone: "Checking messages, social media, or browsing before sleeping.",
      lights: "Turning off lights to create a dark environment for sleep.",
  } , 
},

20: {
  prompt: "Things people do at a party",
  answers: ["dance", "eat", "talk", "laugh", "socialize"],
  descriptions: {
    "dance": "Moving rhythmically to music for fun or exercise.",
    "eat": "Having food at the event, often snacks or a meal.",
    "talk": "Engaging in conversation with other guests.",
    "laugh": "Reacting to something funny or enjoyable.",
    "socialize": "Interacting with others to build connections or have fun."
  },
},

    },

    hard: {
      1: {
        prompt: "Complex issues discussed in debates",
        answers: ["economy", "politics", "relationships"],
        descriptions: {
          economy: "Discussions about financial systems, markets, and resource management.",
          politics: "Debates on governance, policies, and power structures.",
          relationships: "Conversations about social connections, dynamics, and interactions."
        }
      },
      

      2: {
        prompt: "Subjects requiring long-term planning",
        answers: ["investment", "education", "strategy"],
        descriptions: {
          investment: "Managing assets and financial resources for future growth.",
          education: "Pursuing knowledge and skills over time for career or personal development.",
          strategy: "Developing structured plans to achieve long-term goals.",
        },
      },
   
      3: {
        prompt: "Areas requiring careful risk management",
        answers: ["healthcare", "business", "technology"],
        descriptions: {
          healthcare: "Ensuring patient safety and well-being while managing medical risks.",
          business: "Identifying and mitigating financial, operational, and market risks to ensure company stability.",
          technology: "Addressing cybersecurity threats and technological failures to protect systems and data."
        },
      },

      4: {
        prompt: "Fields where innovation is key to success",
        answers: ["medicine", "engineering", "engineering"],
        descriptions: {
          medicine: "Developing new treatments, technologies, and healthcare solutions to improve patient outcomes.",
          engineering: "Creating cutting-edge designs and solutions to meet the evolving needs of industries.",
          engineering: "Creating innovative solutions to design, build, and improve structures, systems, and processes."
        },
      },

      5: {
        prompt: "Domains requiring continuous adaptation",
        answers: ["marketing", "fashion", "journalism"],
        descriptions: {
          marketing: "Adapting strategies and techniques to stay ahead in a constantly changing market.",
          fashion: "Innovating and evolving to keep up with trends and consumer preferences.",
          journalism: "Adapting to new media platforms, audience preferences, and news delivery methods."
        },
      },

      6: {
        prompt: "Things that need regular maintenance",
        answers: ["car", "house", "phone"],
        descriptions: {
          car: "Keeping it in good condition with regular check-ups and repairs.",
          house: "Fixing and maintaining the structure and appliances over time.",
          phone: "Updating software and replacing parts to keep it working smoothly."
        },
      },

      7: {
        prompt: "Activities that improve well-being",
        answers: ["exercise", "sleep", "meditation"],
        descriptions: {
          exercise: "Physical activity that boosts health and energy.",
          sleep: "Getting enough rest to help the body and mind recover.",
          meditation: "Relaxing the mind to reduce stress and increase focus."
        },
      },

      8: {
        prompt: "Skills that help in daily life",
        answers: ["cooking", "organization", "empathy"],
        descriptions: {
          organization: "Keeping things structured and orderly for improved efficiency.",
          cooking: "Preparing meals to maintain a healthy diet and save money.",
          negotiation: "Reaching agreements through discussion and compromise.",  
        },
      },

      9: {
        prompt: "Skills that enhance personal well-being",
        answers: ["exercise", "mindfulness", "financial planning"],
        descriptions: {
          exercise: "Engaging in physical activity to improve health and reduce stress.",
          mindfulness: "Practicing awareness and being present to reduce anxiety and enhance focus.",
          financialplanning: "Managing money effectively to ensure financial stability and future security.",
        },
      },

      10: {
        prompt: "Concepts essential for understanding the natural world",
        answers: ["ecosystem", "gravity", "photosynthesis", "evaporation", "adaptation"],
        descriptions: {
          ecosystem: "A community of living things interacting with their environment, like animals, plants, and soil working together.",
          gravity: "The force that pulls objects toward each other, keeping everything anchored to Earth's surface.",
          photosynthesis: "The process by which plants use sunlight, water, and carbon dioxide to make their own food and release oxygen.",
          evaporation: "The process where liquid water turns into vapor due to heat, playing a key role in the water cycle.",
          adaptation: "The way living organisms change over time to survive better in their environment."
        },
      },

      11: {
        prompt: "Scientific concepts that explain everyday phenomena",
        answers: ["inertia", "friction", "refraction", "condensation", "oxidation"],
        descriptions: {
          inertia: "The tendency of an object to stay at rest or keep moving unless acted upon by a force.",
          friction: "The resistance that occurs when two surfaces move against each other, slowing things down.",
          refraction: "The bending of light as it passes through different materials, like air to water.",
          condensation: "The process where water vapor turns back into liquid when cooled.",
          oxidation: "A chemical reaction where a substance reacts with oxygen, like metal rusting over time."
        },
      },

      12: {
        prompt: "Key processes in the human body",
        answers: ["digestion", "circulation", "respiration", "excretion", "immunity"],
        descriptions: {
          digestion: "The process of breaking down food into nutrients for the body to use.",
          circulation: "The movement of blood through the heart and blood vessels to deliver oxygen and nutrients.",
          respiration: "The process of breathing in oxygen and releasing carbon dioxide as waste.",
          excretion: "The removal of waste products from the body, like sweat or urine.",
          immunity: "The body's ability to defend itself against harmful bacteria and viruses."
        },
      },

      13: {
        prompt: "Important mathematical concepts",
        answers: ["algebra", "geometry", "fractions", "percentages", "probability"],
        descriptions: {
          algebra: "A branch of mathematics that uses symbols to represent numbers and solve equations.",
          geometry: "The study of shapes, sizes, and spaces using points, lines, and angles.",
          fractions: "A way of representing parts of a whole using numbers like 1/2 or 3/4.",
          percentages: "A method of expressing a number as a fraction of 100, useful in calculating discounts or interest.",
          probability: "The chance of an event happening, measured as a number between 0 and 1."
        },
      },

      14: {
        prompt: "Forces that shape the Earth's surface",
        answers: ["erosion", "weathering", "deposition", "plate tectonics", "volcanism"],
        descriptions: {
          erosion: "The process where wind, water, or ice gradually wear away rocks and soil.",
          weathering: "The breaking down of rocks into smaller pieces due to weather conditions.",
          deposition: "The process where sediments are laid down in new locations, forming landforms like deltas.",
          platetectonics: "The movement of large plates in the Earth's crust, causing earthquakes and mountain formation.",
          volcanism: "The process of magma rising to the Earth's surface, forming volcanoes and lava flows."
        },
      },

      15: {
        prompt: "Important scientific tools and instruments",
        answers: ["microscope", "thermometer", "barometer", "telescope", "caliper"],
        descriptions: {
          microscope: "An instrument used to magnify tiny objects that are too small to see with the naked eye.",
          thermometer: "A tool used to measure temperature in degrees Celsius or Fahrenheit.",
          barometer: "An instrument that measures air pressure to help predict weather changes.",
          telescope: "A device used to observe distant objects in space, like stars and planets.",
          caliper: "A tool used to measure the distance between two points with precision."
        }
      },

      16: {
        prompt: "Key elements in the periodic table",
        answers: ["hydrogen", "oxygen", "carbon", "iron", "calcium"],
        descriptions: {
          hydrogen: "The lightest element, commonly found in water and essential for life.",
          oxygen: "A gas that humans and animals need to breathe and that supports combustion.",
          carbon: "An element found in all living things, forming the basis of life on Earth.",
          iron: "A metal essential for blood production and found in many everyday tools.",
          calcium: "A mineral important for strong bones and teeth, commonly found in milk."
        },
      },

      17: {
        prompt: "Major branches of science",
        answers: ["biology", "chemistry", "physics", "geology", "astronomy"],
        descriptions: {
          biology: "The study of living organisms and their interactions with each other and the environment.",
          chemistry: "The study of matter, its properties, and how substances interact.",
          physics: "The study of energy, motion, and the forces that shape the world.",
          geology: "The study of the Earth's structure, rocks, and natural processes.",
          astronomy: "The study of stars, planets, and the universe beyond Earth."
        },
      },

      18: {
        prompt: "Fundamental computer science concepts",
        answers: ["algorithm", "binary", "encryption", "database", "network"],
        descriptions: {
          algorithm: "A set of step-by-step instructions for solving a problem or completing a task.",
          binary: "A system of numbers using only 0s and 1s, which computers use to store information.",
          encryption: "The process of converting information into a code to protect it from unauthorized access.",
          database: "A structured collection of information that can be easily accessed and managed.",
          network: "A group of computers and devices connected to share information and resources."
        }
      },

      19: {
        prompt: "Key historical civilizations",
        answers: ["Mesopotamia", "Egypt", "Greece", "Rome", "Maya"],
        descriptions: {
          Mesopotamia: "An ancient region between the Tigris and Euphrates rivers known for early writing and cities.",
          Egypt: "An ancient civilization famous for pyramids, pharaohs, and the Nile River.",
          Greece: "A civilization known for democracy, philosophy, and influential art and literature.",
          Rome: "An empire that spread across Europe and is known for its architecture, law, and military strength.",
          Maya: "A Mesoamerican civilization known for its advanced knowledge in astronomy and mathematics."
        }
      },

      20: {
        prompt: "Key environmental concerns",
        answers: ["deforestation", "pollution", "climate change", "biodiversity loss", "ocean acidification"],
        descriptions: {
          deforestation: "The cutting down of forests, which threatens ecosystems and contributes to climate change.",
          pollution: "The release of harmful substances into the air, water, or soil, harming the environment.",
          climatechange: "The long-term shift in global temperatures and weather patterns caused by human activities.",
          biodiversityloss: "The decrease in the variety of living species on Earth, reducing ecosystem stability.",
          oceanacidification: "The increasing acidity of ocean waters due to excess carbon dioxide, harming marine life."
        },
      },

    },
  };
  
  // Function to get a random set of questions and prompt based on difficulty and level
  function getQuestionsAndPrompt(difficulty, level) {
    const data = questionBank[difficulty]?.[level];
    if (!data) return { prompt: "No prompt available", answers: [], descriptions: {} };
  
    return {
        prompt: data.prompt,
        answers: data.answers.sort(() => Math.random() - 0.5), // Shuffle the answers
        descriptions: data.descriptions || {} // Ensure descriptions are included
    };
  }
  