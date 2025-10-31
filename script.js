// --- AYURVEDA QA DATABASE ---
// --- AYURVEDA QA DATABASE ---
const qaPairs = [
  // ---------------- HEART ----------------
  {
    question: "heart disease hypertension",
    keywords: ["heart", "hypertension", "blood pressure", "bp", "हृदयरोग", "उच्चरक्तचाप"],
    answer: `
      <p class="font-bold mb-2 text-green-800">✅ Pathya:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Wheat flour, moong, sprouted pulses, black gram.</li>
        <li>Green leafy vegetables, bottle gourd, parwal, drumstick, tinda, bitter gourd.</li>
        <li>Ajwain, ginger, basil (tulsi), mint, Malta (citrus).</li>
        <li>Grapes, papaya, pomegranate, orange, apple, guava, pineapple.</li>
        <li>Almonds, buttermilk, mustard, cow ghee, jaggery, honey.</li>
      </ul>
      <p class="font-bold mt-4 mb-2 text-red-800">❌ Apathya:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Cake, pizza, fried & packed foods, butter, meat, vegetable oil products.</li>
        <li>Refined flour & gram flour foods, jackfruit, cashew, walnut.</li>
        <li>Alcohol, pickles, sauces, biscuits, chips, smoking.</li>
      </ul>
    `
  },

  // ---------------- DIABETES ----------------
  {
    question: "diabetes mellitus",
    keywords: ["diabetes", "sugar", "madhumeh", "डायबिटीज", "मधुमेह"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Consume :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Wheat flour, moong and sprouted pulses, black gram,
green leafy vegetables, ajwain seeds, munakka , ginger , Malta, bottle gourd, basil/tulsi leaves, mint, parwal, drumstick, kattu, tinda, bitter gourd etc.
Grapes, seasonal fruits, papaya, pomegranate, orange, apple, guava, pineapple,
almond, buttermilk, mustard, cow ghee, jaggery, honey etc.</li>
        
      </ul>
      <p class="font-bold mt-4 mb-2 text-red-800">Prohibited:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Unhealthy foods: Cake, pizza, salt, fried and packed foods, butter, meat, vegetable oil products,foods made of refined flour and gram flour, jackfruit, cashew, walnut, alcohol, pickles, sauce, biscuits, chips, smoking etc</li>
</ul>

 </ul>
      <p class="font-bold mt-4 mb-2 text-red-800">पथ्य</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>गेहूँ का आटा, मूँग साबुत तथा अंकुरि रि त दालें, काले चने
हरी पत्तेदार सब्जियाँ, अजवायन, मुनक्का
अदरक, बड ा नींबू, मालटा, लौकी, तुलसीपत्र, तोरई, पुदीना, परवल, सहिजन, कदू, टिण्डा, करेला आदि ।
अँगूर, मौसमी, पपीता, अनार, संतरा, सेब, अमरूद, अनानास
बादाम,छाछ, सरसों, गाय का घी, पुराना गुड़ , शहद आदि ।</li>
</ul>
    `
  },

  // ---------------- FEVER ----------------
  {
    question: "fever",
    keywords: ["fever", "bukhar", "बुखार"],
    answer: `
      <p class="font-bold mb-2 text-green-800">✅ Pathya:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Rice, rice flakes, green gram dal, horse gram, spinach, moringa, brinjal, amla, grapes, papaya, milk (cow/goat/buffalo).</li>
        <li>During initial symptoms, light food or fasting is useful.</li>
        <li>In chronic fever, ghee intake is beneficial.</li>
      </ul>
      <p class="font-bold mt-4 mb-2 text-red-800">❌ Apathya:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Excess intake of solid/liquid food, excess milk products, alcohol, heavy meals.</li>
      </ul>
      <p class="mt-4 font-bold text-blue-800">💊 Remedies:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Sanjeevani Vati</li>
        <li>Guduchiadi Kwath</li>
        <li>Tribhuvankirti ras</li>
        <li>Panchtiktadi Ghrita</li>
        <li>Sanshamani Vati</li>
      </ul>
    `
  },

  // ---------------- DIARRHOEA ----------------
  {
    question: "diarrhoea",
    keywords: ["diarrhoea", "loose motion", "loose stools", "atisara", "दस्त"],
    answer: `
      <p class="font-bold mb-2 text-green-800">✅ Pathya:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Roasted jeera with curd, fasting/light foods like rice, masoor dal, lentil, unripened banana, coriander leaves, cow & goat milk, curd, buttermilk.</li>
        <li>Coconut water, jeera water, lemon-salt-sugar water, khichdi/dal pani.</li>
      </ul>
      <p class="font-bold mt-4 mb-2 text-red-800">❌ Apathya:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Barley, maize, wheat, kala chana, methi, spinach, moringa, mango, amla, orange.</li>
      </ul>
      <p class="mt-4 font-bold text-blue-800">💊 Remedies:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>1 tsp ginger extract + pinch of dalchini + haldi + 1 tsp honey (3×/day)</li>
      </ul>
    `
  },

  // ---------------- INDIGESTION ----------------
  {
    question: "indigestion",
    keywords: ["indigestion", "ajirna", "अपच"],
    answer: `
      <p class="font-bold mb-2 text-green-800">✅ Pathya:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Rice, kala chana, torai, cucumber, bhindi, banana, watermelon, pomegranate, apple.</li>
        <li>Ajwain lemon water, soaked saunf water, Hingwastak churna, Ajmodadi churna.</li>
        <li>Small ginger after food aids digestion.</li>
      </ul>
      <p class="font-bold mt-4 mb-2 text-red-800">❌ Apathya:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Heavy & spicy food.</li>
      </ul>
    `
  },

  // ---------------- VOMITING ----------------
  {
    question: "vomiting",
    keywords: ["vomiting", "vanti", "chhardi", "उल्टी"],
    answer: `
      <p class="font-bold mb-2 text-green-800">✅ Pathya:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Fasting is useful. Rice, wheat, green gram, peas, lemon, grapes, coconut & lime juice.</li>
        <li>Little salt on lemon, sucking it.</li>
      </ul>
    `
  },

  // ---------------- HYPERACIDITY ----------------
  {
    question: "hyperacidity",
    keywords: ["acidity", "hyperacidity", "acid reflux", "amlapitta", "अम्लपित्त"],
    answer: `
      <p class="font-bold mb-2 text-green-800">✅ Pathya:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Ajwain decoction, jeera-dhaniya-sugar mix, aloevera juice, giloy water.</li>
      </ul>
      <p class="font-bold mt-4 mb-2 text-red-800">❌ Apathya:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Pizza, burger, oily/refined foods, tea, coffee, cold drinks, urad/rajma/chana, spicy food.</li>
      </ul>
    `
  },

  // ---------------- COUGH ----------------
  {
    question: "cough chest congestion",
    keywords: ["cough", "cold", "jukham", "chest", "खांसी", "जुकाम"],
    answer: `
      <p class="font-bold mb-2 text-green-800">✅ Remedies:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Ajwain + haldi kadha with honey, black pepper with ghee, bel juice with honey, dalchini + honey.</li>
        <li>Roast methi + ginger, tulsi leaves decoction, haldi + honey, milk with haldi.</li>
        <li>For runny nose: dry ginger + honey paste, tulsi paste on forehead, onion juice drops, giloy water.</li>
      </ul>
    `
  },

  // ---------------- ACNE ----------------
  {
    question: "acne pimples",
    keywords: ["acne", "pimples", "skin", "mukhadushika", "मुँहासे"],
    answer: `
      <p class="font-bold mb-2 text-green-800">✅ Remedies:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Dalchini + honey paste, coriander paste, laung paste, haldi-chandan-neem paste, lemon+honey, aloevera gel overnight.</li>
        <li>Tulsi+haldi paste, chiraunji+milk paste, neem+haldi paste.</li>
      </ul>
    `
  },

  // ---------------- ANOREXIA ----------------
  {
    question: "anorexia",
    keywords: ["anorexia", "low digestive fire", "aruchi", "मंदाग्नि", "अरुचि"],
    answer: `
      <p class="font-bold mb-2 text-green-800">✅ Pathya:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Lemon juice + ginger + salt with meals, lemon + onion extract + honey.</li>
      </ul>
    `
  },

  // ---------------- HEADACHE ----------------
  {
    question: "headache",
    keywords: ["headache", "migraine", "सिरदर्द"],
    answer: `
      <p class="font-bold mb-2 text-green-800">✅ Remedies:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Boil tulsi leaves as tea, rice paste on forehead.</li>
      </ul>
    `
  },

  // ---------------- STOMACH ACHE ----------------
  {
    question: "stomach ache",
    keywords: ["stomach ache", "pet dard", "पेट दर्द"],
    answer: `
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Onion extract + lemon + salt water.</li>
        <li>Aloevera juice daily.</li>
      </ul>
    `
  },

  // ---------------- DENTAL ----------------
  {
    question: "dental problems",
    keywords: ["dental", "teeth", "toothache", "daant", "दांत", "cavities", "दंतकृमि"],
    answer: `
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Clove oil on cotton for pain, turmeric+salt+mustard oil paste on gums, gargle with warm water.</li>
        <li>Boiled hing water gargle.</li>
      </ul>
    `
  },

  // ---------------- OBESITY ----------------
  {
    question: "obesity",
    keywords: ["obesity", "weight loss", "motapa", "मोटापा"],
    answer: `
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Lemon + honey + black pepper drink, dalchini water + honey, ginger-lemon-honey decoction.</li>
      </ul>
    `
  },

  // ---------------- IMMUNITY ----------------
  {
    question: "immunity",
    keywords: ["immunity", "resistance", "रोग प्रतिरोधक क्षमता"],
    answer: `
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Cardamom-cinnamon-dry ginger mix in warm water, tulsi decoction, giloy stem water.</li>
      </ul>
    `
  },

  // ---------------- ANEMIA ----------------
  {
    question: "anemia",
    keywords: ["anemia", "anaemia", "low hb", "pallor", "रक्ताल्पता"],
    answer: `
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Spinach+pomegranate+apple juice, aloevera water, giloy water, black sesame paste + honey, roasted gram + jaggery.</li>
      </ul>
    `
  },

  // ---------------- ANXIETY ----------------
  {
    question: "anxiety",
    keywords: ["anxiety", "tension", "stress", "chinta", "चिंता"],
    answer: `
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Pinch of kesar in cow's milk after dinner.</li>
      </ul>
    `
  },

  // ---------------- PAINFUL PERIODS ----------------
  {
    question: "painful menstruation",
    keywords: ["menstruation", "period pain", "dysmenorrhea", "पीरियड", "दर्द"],
    answer: `
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Fennel water decoction, guava leaves decoction twice a day.</li>
      </ul>
    `
  },

  // ---------------- MOUTH ULCER ----------------
  {
    question: "mouth ulcer",
    keywords: ["mouth ulcer", "blister", "मुंह के छाले"],
    answer: `
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Elaichi powder + honey paste.</li>
      </ul>
    `
  },

  // ---------------- DANDRUFF ----------------
  {
    question: "hair dandruff",
    keywords: ["dandruff", "lice", "joo", "जूँ", "रूसी"],
    answer: `
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Ajwain + lemon + alum + buttermilk scalp massage, methi paste before wash.</li>
      </ul>
    `
  }
];

  
// -------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    function createBotMessage(message, isHtml = false) {
        const messageElement = document.createElement('div');
        messageElement.className = 'flex items-start gap-3 mb-4';
        messageElement.innerHTML = `
            <div class="flex-shrink-0 h-10 w-10 bg-[#86A873] rounded-full flex items-center justify-center text-white">
                🤖
            </div>
            <div class="bg-gray-100 p-4 rounded-lg rounded-tl-none max-w-md">
                ${isHtml ? message : `<p class="text-gray-700">${message}</p>`}
            </div>
        `;
        chatWindow.appendChild(messageElement);
        scrollToBottom();
    }

    function createUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'flex justify-end mb-4';
        messageElement.innerHTML = `
            <div class="bg-[#a5c097] text-white p-3 rounded-lg rounded-br-none max-w-md">
                <p>${message}</p>
            </div>
        `;
        chatWindow.appendChild(messageElement);
        scrollToBottom();
    }

    function showTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.id = 'typing-indicator';
        typingElement.className = 'flex items-start gap-3 mb-4';
        typingElement.innerHTML = `
            <div class="flex-shrink-0 h-10 w-10 bg-[#86A873] rounded-full flex items-center justify-center text-white">🤖</div>
            <div class="bg-gray-100 p-3 rounded-lg rounded-tl-none typing-indicator">
                <span></span><span></span><span></span>
            </div>
        `;
        chatWindow.appendChild(typingElement);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) typingIndicator.remove();
    }

    function scrollToBottom() {
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function getAnswer(userText) {
        userText = userText.toLowerCase().trim();
    
        // Remove punctuation for better matching
        userText = userText.replace(/[.,!?]/g, "");
    
        let bestMatch = null;
        let highestScore = 0;
    
        qaPairs.forEach(pair => {
            let score = 0;
            pair.keywords.forEach(keyword => {
                if (userText.includes(keyword.toLowerCase())) {
                    score += keyword.length; // longer matches = higher score
                }
            });
    
            if (score > highestScore) {
                highestScore = score;
                bestMatch = pair;
            }
        });
    
        if (bestMatch) {
            return bestMatch.answer;
        } else {
            return `
              <p class="text-gray-700">
                🙏 Sorry, I don’t have Ayurvedic advice for that specific query.<br/>
                Try asking about <b>Heart Disease, Diabetes, Diarrhoea, Hyperacidity, Dental problems, Acne, or Anxiety</b>.
              </p>
            `;
        }
    }
    

    function handleUserInput() {
        const text = userInput.value.trim();
        if (!text) return;

        createUserMessage(text);
        userInput.value = "";

        showTypingIndicator();
        setTimeout(() => {
            removeTypingIndicator();
            const answer = getAnswer(text);
            createBotMessage(answer, true);
        }, 1500);
    }

    sendBtn.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') handleUserInput();
    });

    // Initial welcome message
    setTimeout(() => {
        createBotMessage("Namaste! 🌿 I am your Ayurveda Wellness guide. Ask me anything about diet & health.");
    }, 500);
});
