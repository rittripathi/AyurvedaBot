// --- AYURVEDA QA DATABASE ---
// --- AYURVEDA QA DATABASE ---
const qaPairs = [

  {
    question: "heart disease hypertension",
    keywords: ["heart", "hypertension", "blood pressure", "bp", "हृदयरोग", "उच्चरक्तचाप"],
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
        <li>Unhealthy foods: Cake, pizza, salt, fried and packed foods, butter, meat, vegetable oil products, foods made of refined flour and gram flour, jackfruit, cashew, walnut, alcohol, pickles, sauce, biscuits, chips, smoking etc.</li>
      </ul>
  
      <p class="font-bold mb-2 text-green-800">पथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>गेहूँ का आटा, मूँग साबुत तथा अंकुरित दालें, काले चने, हरी पत्तेदार सब्जियाँ, अजवायन, मुनक्का, अदरक, बड़ा नींबू, मालटा, लौकी, तुलसीपत्र, तोरई, पुदीना, परवल, सहिजन, कदू, टिण्डा, करेला आदि।
  अँगूर, मौसमी, पपीता, अनार, संतरा, सेब, अमरूद, अनानास, बादाम, छाछ, सरसों, गाय का घी, पुराना गुड़, शहद आदि।</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">अपथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>केक, पिज्जा, बर्गर, नमक, तले एवं डिब्बाबन्द खाद्य पदार्थ, मक्खन, घी, खोया, मलाई, मांस, वनस्पति घृत से बने पदार्थ, मैदा व बेसन के तले हुए पदार्थ, मिष्ट भोजन, कटहल, काजू, अखरोट, शराब, अचार, चटनी, सॉस, तले पापड़, बिस्कुट, चिप्स, धूम्रपान आदि निषिद्ध हैं।</li>
      </ul>
    `
  },
  
  {
    question: "diabetes mellitus",
    keywords: ["diabetes", "sugar", "madhumeh", "डायबिटीज", "मधुमेह"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Consume :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Sprouted green gram, fenugreek, lentil, gram, bitter gourd, parwal, bottle gourd, torayi, tomato etc. vegetables, amla, jamun fruit and jamun seed powder, fenugreek seed water, 5-7 times daily. Consumption of soft neem leaves, papaya, guava etc. Consumption of plain milk, buttermilk.</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">Prohibited:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Unhealthy regimen: Sitting or resting for a long time, sleeping during the day after eating, new grains, rice, curd, sugarcane juice, apple, smoking and alcohol increase the disease. Urine and stool should not be retained. Honey, sweets, ice cream, cold drinks, refined flour products. Do not eat late at night.</li>
      </ul>
  
      <p class="font-bold mb-2 text-green-800">पथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>अंकुरित मूँग, मोठ, मेथी, मसूर, चना, अरहर, चने की दाल, करेला, परवल, लौकी, तोरई, टमाटर, बथुआ, प्याज, लहसुन, नींबू, मेथी, सहिजन आदि की सब्जियाँ, आँवला, जामुन का फल व जामुन की गुठली का चूर्ण, मेथी दाने का पानी, प्रति दिन 5-7 बार, नीम के कोमल पत्रों का सेवन, पपीता, अमरूद आदि फल।</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">अपथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>अधिक समय तक बैठे रहना या आराम करना, भोजन के पश्चात् दिन में सोना, नया अनाज, चावल, दही, गन्ने का रस, आलू, धूम्रपान तथा मद्यपान रोग को बढ़ाने वाले होते हैं। मूत्र व मल के वेग को नहीं रोकना चाहिए। ग्लूकोज, शहद, मिठाइयां, आइसक्रीम, कोल्डड्रिंक्स, तली चीजें, मैदा की चीजें। देर रात्रि से भोजन न करें।</li>
      </ul>
    `
  },
  
  {
    question: "diarrhoea",
    keywords: ["diarrhoea", "loose motion", "dast", "अतिसार", "दस्त"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Consume :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Daliya made by mixing wheat, rice, millet, moong and barley in equal quantities, buttermilk, ripe banana, apple, raw papaya, amla murabba, coconut water, mint, khichdi, solution of lemon-salt and sugar, rice lava (shell, puffed rice), water of vegetables like bottle gourd, taroyi, tinda etc and fruit juice, honey.</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">Prohibited:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Inedible food - oily food items, different types of dishes made from urad and gram and refined flour, pickles, spicy food, sweets, pumpkin, cucumber, tomato, potato, leafy vegetables, milk, cold drinks, pizza, food with fiber, popcorn, papaya.</li>
      </ul>
  
      <p class="font-bold mb-2 text-green-800">पथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>गेहूँ-चावल, बाजरा, मूँग, जौ को समान मात्रा में मिलाकर बनाया हुआ दलिया, मट्ठा, पका केला, बेल फल, कच्चा पपीता, आँवला मुरब्बा, नारियल का जल, पुदीना, खिचड़ी, नीबू नमक चीनी का घोल, धान का लावा (खील, मुरमुरे), लौकी, तोरई, टिण्डा आदि सब्जियों का पानी, फलों का रस, शहद।</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">अपथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>तैलीय व मैदा से बने व्यंजन, चाट, अचार, अधिक नमक व मिर्च मसाले वाला भोजन, मिष्टान्न, कद्दू, ककड़ी, टमाटर, आलू, पत्ते वाली सब्जियाँ, दूध, कोल्ड ड्रिंक्स, पिज्ज़ा, छिलके एवं रेशे वाले आहार, पॉपकॉर्न।</li>
      </ul>
    `
  },
  
  {
    question: "hyperacidity",
    keywords: ["acidity", "hyperacidity", "acid reflux", "amlapitta", "अम्लपित्त"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Consume :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Fibrous and leafy green vegetables, bottle gourd, taroyi, parwal, boiled apple, pumpkin, drumstick, beans, salad, sprouted grains, fruits, use of Triphala Isabgol with milk or water once a week, porridge/daliya, khichdi and fresh buttermilk, raisins, moong dal, sweet and cold foods, Aloe vera juice, pomegranate juice, sauf, cumin, coriander water, coconut water, boiled carrot and beetroot.</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">Prohibited:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Oily and refined food items, Pizza, Burger, Idli, Dosa, Tea, Coffee, Cold Drinks, Urad, Rajma, Chana, Masoor Dal, Garam Masala, Rice, Brinjal, Potato, Cabbage, Jimikand, Pickle, Gram Flour and Urad, Red Chillies, Spicy Food, Curd, Smoking, Drinking Alcohol, Staying in Mental Stress etc.</li>
      </ul>
  
      <p class="font-bold mb-2 text-green-800">पथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>पत्तेदार हरी सब्जियाँ, लौकी, तोरई, परवल, कद्दू, अंकुरित अन्न, खिचड़ी व ताजा मट्ठा, अनार, किशमिश, मुनक्का, ठण्डे पदार्थ, पेठा, एलोवेरा जूस, नारियल पानी, सौंफ, जीरे, धनिये का पानी, उबला हुआ गाजर एवं चुकन्दर।</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">अपथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>तैलीय व मैदे से बने व्यंजन, बर्गर, इडली, डोसा, चाय, कॉफी, कोल्ड ड्रिंक्स, उड़द, मसूर की दाल, गर्म मसाले, चावल, अमचूर, बैंगन, आलू, गोभी, जिमीकन्द, अचार, उड़द के बने पकवान व नमकीन, लाल मिर्च, तीखे पदार्थ, बैंगन, कुलथी, दही, धूम्रपान, मानसिक तनाव में रहना आदि वर्जित है।</li>
      </ul>
    `
  },

  {
    question: "dental problems",
    keywords: ["dental", "teeth", "toothache", "daant", "दांत"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Consume :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Take juice diet for few days, then consume fruits, salad, sprouted grains. Then go back to normal diet like boiled green vegetables, chapatti made of whole wheat flour.
  vitamin-C rich food like lemon, orange, amla, etc. Rinse/gargle with lukewarm water after eating.</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">Prohibited:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Do not consume sugar, sweets, very hot or very cold food, cakes, chocolates, confectionery items.</li>
      </ul>
  
      <p class="font-bold mb-2 text-green-800">पथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>कुछ दिन रसाहार करें, फिर फल, सलाद, अंकुरित अन्न का प्रयोग करें। फिर सामान्य आहार यथा उबली हरी सब्जियाँ, रोटी।
  विटामिन-सी वाले आहार नींबू, संतरा, आंवला, चेरीज बेरीज आदि। खाने के बाद गुनगुने पानी से कुल्ला करें।</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">अपथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>चीनी, मिठाई, डिब्बाबंद खाद्य, बहुत गर्म या बहुत ठण्डे भोजन, टॉफी तथा केण्डी, पेस्ट्री, चॉकलेट, कन्फेक्शनरी के सामान न लें।</li>
      </ul>
    `
  },
  
  {
    question: "acne pimples",
    keywords: ["acne", "pimples", "skin", "mukhadushika", "मुँहासे"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Consume :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Barley, wheat, multigrain daliya, oats, sprouted grains, maize (corn), brown rice, lentil, green leafy vegetable, bottle gourd, taroyi, tinda, carrot, beetroot, potato etc,
  orange, pomegranate, strawberry, papaya, kiwi, seasonal fruit, raisins, walnut, almond, fig, buttermilk, paneer, ghee, cinnamon, black pepper, cloves, cardamom, coconut oil, olive oil etc.</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">Prohibited:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Refined flour, gram flour, black gram, peanuts, melon, litchi, brinjal, jackfruit, arbi, sweet potato, cashew, oily, chilli, spicy food, egg, candies, ice cream, canned food, potato chips etc.</li>
      </ul>
  
      <p class="font-bold mb-2 text-green-800">पथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>जौ, गेहूँ, बाजरा, ओट्स, मल्टीग्रेन दलिया, अंकुरित अनाज, सोयाबीन, मक्का, ब्राउन राइस, अरहर दाल, मूंग दाल, मसूर दाल, हरी पत्तेदार सब्जियाँ, लौकी, तोरई, टिण्डे, गाजर, चुकन्दर, आलू।
  संतरा, अनार, स्ट्रॉबेरी, पपीता, कीवी आदि। मखाने, किशमिश, अखरोट, बादाम, अंजीर, छाछ, पनीर, घी, लौंग, इलायची, धनिया, सौंफ, नारियल तेल, जैतून का तेल आदि का सेवन करें।</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">अपथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>मैदा, बेसन, उड़द, काले चने, खरबूजा, लीची, बैंगन, कटहल, अरबी, हरी मिर्च, काजू, खजूर, तैलीय मसालेदार भोजन, मांसाहार भोजन, अण्डा, फास्ट फूड, चॉकलेट, केंडीज, आइसक्रीम, डिब्बे बंद खाद्य पदार्थ आदि का सेवन कदापि न करें।</li>
      </ul>
    `
  },
  
  {
    question: "anxiety",
    keywords: ["anxiety", "stress", "chinta", "nervous", "चिंता"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Consume :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Multigrain flour and porridge, oats, old rice, cornflakes, brown rice, sprouted grains, arhar, green gram, lentils, green leafy vegetables, bottle gourd, parwal, tinda, lady's finger, potato, cabbage, carrot etc, apple, papaya, raspberry, blueberry, guava, pomegranate, orange, watermelon etc, makhana, walnut, almond, fig, peanut, turmeric, coriander, black pepper, amla juice, giloy juice, mix fruit juice, amla murabba.</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">Prohibited:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Refined flour, gram flour, urad dal, white rice, jackfruit, arbi, sweet potato, jimikand, brinjal, garlic, onion, fast food (burger, noodles, pastry, bread, biscuits etc.).</li>
      </ul>
  
      <p class="font-bold mb-2 text-green-800">पथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>मल्टीग्रेन्स आटा व दलिया, कार्नफ्लैक्स, ब्राउन राइस, अंकुरित अनाज, अरहर, मूँग, मसूर, हरी पत्तेदार सब्जियाँ, लौकी, तोरई, परवल, टिण्डे, भिण्डी, आलू, गोभी आदि, सेब, पपीता, रसभरी, अमरूद, अनार, संतरा, तरबूज, मखाना, अखरोट, बादाम, अंजीर, मूंगफली, हल्दी, धनिया, सौंफ, लौंग, अजवाइन, कालमिर्च, आँवला जूस, गिलोय जूस, मिक्स फ्रूट जूस, आँवला मुरब्बा।</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-red-800">अपथ्य :</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>मैदा, बेसन, उड़द, सफेद चावल, कटहल, अरबी, जिमीकन्द, बैंगन, लहसुन, प्याज, फास्ट फूड।</li>
      </ul>
    `
  },
  
  {
    question: "fever",
    keywords: ["fever", "jwar", "temperature", "बुखार"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Diet advised in fever:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Rice, Rice flake (Chewda), Green gram dal (mung beans), horse gram dal (Kulatha), spinach (palak), moringa, brinjal, amla, grapes, papaya, cow, goat & buffalo milk.
  When the initial symptoms of fever appear, light food or fasting is useful.
  In chronic fever, intake of ghee is beneficial.</li>
        <li>To avoid / Contraindication in fever: Excess intake of solid/liquid product, excess milk/milk product, alcohol, meal.</li>
        <li>Medicines/home remedy: Sanjeevani Vati, Guduchiadi Kwath, Tribhuvankirti ras, Panchtiktadi Ghrita, Sanshamani Vati.</li>
      </ul>
    `
  },
  
  {
    question: "indigestion",
    keywords: ["indigestion", "ajirna", "gas", "अपच", "अजीर्ण"],
    answer: `
      <p class="font-bold mb-2 text-green-800">For Indigestion (Ajirna):</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Rice, kala chana, Torayi, cucumber, bhindi, banana, watermelon, pomegranate, apple etc.
  Ajwain water with lemon water, Saunf seeds soaked overnight then filtered and drunk in morning.
  Hingwastak churna, Ajmodadi churna.
  Avoid heavy and spicy food.
  Eat small amount of ginger after food.
  Lemon juice (10ml) + onion extract (20ml) + honey.</li>
      </ul>
    `
  },
  
  {
    question: "vomiting",
    keywords: ["vomit", "vomiting", "chhardi", "वमन", "उल्टी"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Diet for Vomiting / Vanti / Chhardi:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Fasting is useful. Rice, wheat, green gram, peas, lemon, grapes, coconut & lime juice.
  Little salt on lemon, sucking it.</li>
      </ul>
    `
  },
  
  {
    question: "cough cold congestion",
    keywords: ["cough", "cold", "congestion", "tightness", "खांसी", "जुकाम"],
    answer: `
      <p class="font-bold mb-2 text-green-800">For Cough / Chest congestion / Tightness:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>1 tsp ajwain + 1/2 tsp haldi → boil till 1/4 remains then mix 1 tsp honey and consume twice daily.</li>
        <li>1/2 tsp black pepper + 1/2 tsp cow ghee after food twice daily.</li>
        <li>1 tbsp bel juice + 1/2 tsp honey morning & evening after meal.</li>
        <li>Dalchini powder + honey, roasted methi + ginger powder, kadha, roasted laung to suck slowly.</li>
        <li>Boil milk with haldi & consume (don’t drink water after that).
  Black pepper powder + honey + ginger juice thrice daily.</li>
        <li>5-10 tulsi leaves with water empty stomach morning.</li>
      </ul>
      <p class="font-bold mt-2 mb-2 text-green-800">For runny nose / jukham:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Paste of 1 tsp dry ginger powder with honey, 5-6 tulsi leaves paste on forehead & nose 2-3×/week.</li>
        <li>Boil raw onion, extract its juice, 4 drops in nose.</li>
        <li>1/2 tsp dalchini powder + 1 tsp honey, 2 tbsp honey + ginger juice (1 tsp).</li>
        <li>4-6 inch giloya stem, boil till 100ml left, drink it.</li>
      </ul>
    `
  },

  
  {
    question: "hyperacidity home remedies",
    keywords: ["acidity", "hyperacidity", "gastric", "amlapitta", "अम्लपित्त"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Home Remedies for Hyperacidity / Acidity:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Boil 1 tsp of ajwain upto 1/4 remaining, filter & drink lukewarm in evening & morning, 1/2 hr before or after food.</li>
        <li>Powder dry roasted jeera, mix about dhaniya & add double amount of sugar. Consume 1/2 tsp morning & evening (1/2 hr after food).</li>
        <li>Aloevera pulp or juice (20-40ml) intake:
        20ml aloevera juice + 40ml lukewarm water = Empty stomach early morning or evening.</li>
        <li>Boil 5-7 giloya stem in 400ml water till 100ml left, drink when lukewarm, morning & evening - empty stomach.</li>
      </ul>
    `
  },
  
  {
    question: "obesity",
    keywords: ["obesity", "weight loss", "motapa", "fat", "मोटापा"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Remedies for Obesity:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>1 tsp lemon juice + 1 tsp honey + pinch of black pepper powder mix in water & drink.</li>
        <li>1/2 tsp dalchini boil in water for 10-15 min. Filter & add 1 tsp honey and drink empty stomach.</li>
        <li>Boil 5gm ginger in 2 cup water, filter & add 1/2 tsp lemon & 1 tsp honey. Drink empty stomach in lukewarm stage.</li>
      </ul>
    `
  },
  
  {
    question: "immunity",
    keywords: ["immunity", "immune", "giloy", "tulsi", "प्रतिरक्षा"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Remedies to Boost Immunity:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Powder of cardamom + cinnamon + dry ginger powder, mix & drink with lukewarm water/H₂O.</li>
        <li>8-10 leaves of tulsi in 1 glass of water, boil till 1/4 water remains, filter & drink twice a day.</li>
        <li>Boil 5-7cm of giloy stem in a glass of water until 1/4 remaining. Drink twice a day.</li>
      </ul>
    `
  },
  
  {
    question: "anemia",
    keywords: ["anemia", "iron deficiency", "raktaalpata", "अनीमिया", "खून की कमी"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Diet for Anemia:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Juice of spinach, pomegranate & apple.</li>
        <li>20ml Aloevera juice in 40ml water, twice a day, empty stomach.</li>
        <li>Boil till 1/4 remains - 4-5 leaves of giloy in water & drink twice a day.</li>
        <li>1 tsp black sesame soaked in water for 2-3 hr, make paste & add 1 tsp honey. Consume 2 times a day.</li>
        <li>Consume roasted gram with jaggery twice, after 1/2 hr, after meal.</li>
      </ul>
    `
  },
  
  {
    question: "painful menstruation",
    keywords: ["menstruation", "period pain", "dysmenorrhea", "mahavari", "पीरियड्स", "मासिक धर्म"],
    answer: `
      <p class="font-bold mb-2 text-green-800">For Painful Menstruation / Periods:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Boil 1 tsp fennel for 5 min in 1 cup water. Filter & drink twice, empty stomach.</li>
        <li>Boil 5-6 guava leaves in 1 glass of water until 1/4 remaining & consume twice.</li>
      </ul>
    `
  },
  
  {
    question: "mouth ulcer",
    keywords: ["mouth ulcer", "blister", "mukha", "छाला", "मुख छाला"],
    answer: `
      <p class="font-bold mb-2 text-green-800">For Mouth Ulcer / Blister:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Elaichi powder + honey (शहद).</li>
      </ul>
    `
  },
  
  {
    question: "hair dandruff lice",
    keywords: ["hair", "dandruff", "lice", "itchy scalp", "जूँ", "रूसी"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Hair Dandruff / Lice Remedies:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>2 tsp ajwain powder + 1/2 lemon juice + 1 tsp alum/fitkari powder + buttermilk → massage & apply on hair before washing.</li>
        <li>2 tsp methi soaked in water overnight, make its paste & apply on scalp for 30 min before hairwash (dandruff remedy).</li>
        <li>3-4 spoon aloevera gel, scalp massage, leave for 2-3 hrs, rinse with water & shampoo. Do this 2 times a week.</li>
      </ul>
    `
  },
  
  {
    question: "headache migraine",
    keywords: ["headache", "migraine", "sir dard", "माइग्रेन", "सिरदर्द"],
    answer: `
      <p class="font-bold mb-2 text-green-800">For Headache / Migraine:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Boil 3-4 tulsi leaves in water for 5 min, filter it, drink like tea.</li>
        <li>Make paste of rice & apply on forehead.</li>
      </ul>
    `
  },
  
  {
    question: "stomach ache",
    keywords: ["stomach ache", "abdominal pain", "pet dard", "पेट दर्द"],
    answer: `
      <p class="font-bold mb-2 text-green-800">For Stomach-ache:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Water + onion extract + lemon juice + salt - drink.</li>
        <li>4-6 spoon aloevera juice - drink daily.</li>
      </ul>
    `
  },
  
  {
    question: "dental caries cavity",
    keywords: ["tooth decay", "cavity", "gum pain", "दंतकृमि"],
    answer: `
      <p class="font-bold mb-2 text-green-800">For Cavities / Dental Caries / दंतकृमि:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>(For pain) apply 2-3 drops of clove oil on cotton & apply on affected area/tooth.</li>
        <li>Massage affected gums with turmeric + salt & mustard oil paste.</li>
        <li>Apply turmeric paste & gargle with lukewarm water 2-3 times a week.</li>
        <li>Boil 1 tsp hing powder in water & gargle when its lukewarm.</li>
      </ul>
    `
  },
  
  {
    question: "low digestive fire anorexia",
    keywords: ["anorexia", "low appetite", "mandagni", "aruchi", "भूख न लगना"],
    answer: `
      <p class="font-bold mb-2 text-green-800">For मंदाग्नि / अरुचि (Low digestive fire / Anorexia):</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Lemon juice + ginger + salt - along with meal.</li>
        <li>(10ml) lemon juice + (20ml) onion extract + honey.</li>
      </ul>
    `
  },
  {
    question: "fever",
    keywords: ["fever", "jwar", "bukhar", "temperature", "ज्वर", "बुखार"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Diet advised in fever:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Rice, Rice flake (Chewda), Green gram dal (mung beans), horse gram dal (Kulatha), spinach (palak), moringa, brinjal, amla, grapes, papaya, cow, goat & buffalo milk.</li>
        <li>When the initial symptoms of fever appear, light food or fasting is useful.</li>
        <li>In chronic fever, intake of ghee is beneficial.</li>
      </ul>
      <p class="font-bold mt-4 mb-2 text-red-800">To avoid / Contraindication in fever:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Excess intake of solid/liquid product, excess milk/milk product, alcohol, meat & poultry products.</li>
      </ul>
      <p class="font-bold mt-4 mb-2 text-green-800">Medicines / home remedy:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Sanjeevani Vati</li>
        <li>Guduchiadi Kwath</li>
        <li>Tribhuvankirti ras</li>
        <li>Panchtiktadi Ghrita</li>
        <li>Sanshamani Vati</li>
      </ul>
    `
  },
  {
    question: "diarrhoea",
    keywords: ["diarrhoea", "loose motion", "dast", "atisara", "अतिसार", "दस्त"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Diet / food consumed / advised in Diarrhoea / Atisara / Loose motions / loose stools:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>4–6gm Jeera → dry roast → powder & mix with curd & consume.</li>
        <li>Fasting is useful: rice, gram dal (masur dal), lentil, unriped banana, coriander (dhaniya) leaves, cow & goat milk, curd, butter & buttermilk.</li>
        <li>Coconut water.</li>
        <li>1 tsp Jeera to be boiled in water, filter/strain and drink.</li>
        <li>Lots and lots of water, after mixing with small amount of salt and sugar.</li>
        <li>Light food (Khichdi / Dal pani).</li>
      </ul>
      <p class="font-bold mt-4 mb-2 text-red-800">To avoid / contraindication in Diarrhoea or dysentery:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Barley (Java), maize & wheat.</li>
        <li>Kala chana, methi, spinach, moringa.</li>
        <li>Mango, amla, orange etc.</li>
        <li>1 tsp ginger extract + a little bit dalchini powder, a little bit haldi, 1 spoon honey = 3 times a day.</li>
      </ul>
    `
  },
  {
    question: "indigestion",
    keywords: ["indigestion", "ajirna", "अपच", "अजीर्ण"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Indigestion (Ajirna):</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Rice, kala chana, Torayi, cucumber, bhindi, banana, watermelon, pomegranate, apple, etc.</li>
        <li>Ajwain water with lemon water.</li>
        <li>Saunf seeds soaked in water overnight, then filter and drink in morning.</li>
        <li>Hingwastak churna, Ajmodadi churna.</li>
      </ul>
      <p class="font-bold mt-4 mb-2 text-red-800">To avoid:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Excess intake of heavy & spicy food.</li>
      </ul>
      <p class="font-bold mt-4 mb-2 text-green-800">Tip:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Eat small amount of ginger after food for better digestion.</li>
        <li>Lemon juice (10ml) + onion extract (20ml) + honey.</li>
      </ul>
    `
  },
  
  {
    question: "vomiting",
    keywords: ["vomiting", "vanti", "chhardi", "ultee", " उल्टी", "वमन"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Vomiting / Vanti / Chhardi:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Fasting is useful.</li>
        <li>Rice, wheat, green gram, peas, lemon, grapes, coconut & lime juice.</li>
        <li>Little salt on lemon, sucking it.</li>
      </ul>
    `
  },
  {
    question: "hyperacidity",
    keywords: ["hyperacidity", "acidity", "amlapitta", "acid reflux", "heartburn", "अम्लपित्त"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Hyperacidity / Acidity:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Boil 1 tsp of ajwain upto 1/4 remaining, filter & drink luke warm, in evening & morning, 1/2 hr before or after food.</li>
        <li>Powder dry roasted jeera, mix about dhaniya & add double amount of sugar. Consume 1/2 tsp morning & evening (1/2 hr after food).</li>
        <li>Aloevera pulp or juice (20-40ml) intake.</li>
        <li>20ml aloevera juice + 40ml luke warm water = Empty stomach early morning or evening.</li>
        <li>Boil 5-7 giloya stem in 400ml water till 100ml left, drink when lukewarm, morning & evening - empty stomach.</li>
      </ul>
    `
  },
  {
    question: "cough",
    keywords: ["cough", "cold", "chest congestion", "chest tightness", "jukham", "खांसी", "जुकाम"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Cough / Chest congestion / Chest tightness:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>1 tsp ajwain + 1/2 tsp haldi → boil till 1/4 remains → then mix 1 tsp honey and consume 2 times a day.</li>
        <li>1/2 tsp black pepper + 1/2 tsp cow’s ghee, consume after food 2 times a day.</li>
        <li>1 tbsp bel juice + 1/2 tsp honey, morning & evening after meal.</li>
        <li>Dalchini powder + honey.</li>
        <li>Roast methi, add small amount of ginger and powder it.</li>
        <li>Make kadha.</li>
        <li>Tightly roast laung & keep it in mouth & slowly suck its juice.</li>
        <li>Roast 1/2 tsp haldi & consume with honey.</li>
        <li>Boil milk with haldi & consume (don’t drink water after that).</li>
        <li>Black pepper powder + honey + ginger juice (3 times a day).</li>
        <li>5-10 tulsi leaves with water, early morning empty stomach.</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-green-800">For runny nose / jukham:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Make paste of 1 tsp dry ginger powder with honey.</li>
        <li>5-6 tulsi leaves, apply on forehead & nose for 5 min 2-3 times in week.</li>
        <li>Boil raw onion, extract its juice, 4 drops in nose.</li>
        <li>1/2 tsp dalchini powder + 1 tsp honey.</li>
        <li>2 tbsp honey + ginger juice (1 tsp).</li>
        <li>4-6 inch giloya stem, boil in 400ml water, till 100ml left, drink it.</li>
      </ul>
    `
  },
  {
    question: "acne",
    keywords: ["acne", "pimples", "freckles", "mukhadushika", "मुँहासे"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Pimples / Acne / Freckles:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Dalchini powder + 1/2 tsp honey → make paste & apply on face for 10-15 min & wash with clean water.</li>
        <li>Paste of green coriander leaves.</li>
        <li>Paste of laung, apply for 5-10 min.</li>
        <li>Haldi, Chandhan powder with neem leaves paste. Apply for 10 min.</li>
        <li>Lemon juice + honey.</li>
        <li>Aloevera gel - stay overnight & wash with normal water in morning, repeat for 15 days.</li>
        <li>Paste of 10-15 tulsi leaves + pinch of turmeric, apply on face for 10-15 min, wash with clean water.</li>
        <li>10-15 piece of chiraunji + soak in raw milk for 2 hrs, make paste, apply on face for 15-20 min, wash with lukewarm water.</li>
        <li>Paste of 20-25 neem leaves + 1/4 tsp haldi, leave for 15-20 min, wash with normal water.</li>
      </ul>
  
      <p class="font-bold mt-4 mb-2 text-green-800">For dandruff / hairfall:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>3-4 spoon aloevera gel scalp massage, leave for 2-3 hrs, rinse with water & shampoo. Do this 2 times a week.</li>
      </ul>
    `
  },
  
  {
    question: "vomiting",
    keywords: ["vomiting", "chhardi", "ulati", "उलटी", "वमन"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Vomiting / Ulti / Chhardi:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Fasting is useful.</li>
        <li>Rice, wheat, green gram, peas, lemon, grapes, coconut & lime juice.</li>
        <li>Little salt on lemon, sucking it.</li>
      </ul>
    `
  },
  {
    question: "hyperacidity",
    keywords: ["acidity", "hyperacidity", "amlapitta", "अम्लपित्त"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Hyperacidity / Acidity:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Boil 1 tsp of ajwain upto 1/4 remaining, filter & drink lukewarm, in evening & morning, 1/2 hr before or after food.</li>
        <li>Powder dry roasted jeera, mix sabut dhaniya & add double amount of sugar. Consume 1/2 tsp morning & evening (1/2 hr after food).</li>
        <li>Aloevera pulp or juice (20–40ml) intake: 20ml aloevera juice + 40ml lukewarm water = empty stomach early morning or evening.</li>
        <li>Boil 5–7 giloya stem in 400ml water till 100ml left, drink when lukewarm, morning & evening empty stomach.</li>
      </ul>
    `
  },
  {
    question: "cough",
    keywords: ["cough", "cold", "chest congestion", "jukham", "खांसी", "जुकाम"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Cough / Chest congestion / Chest tightness:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>1 tsp ajwain + 1/2 tsp haldi → boil till 1/4 remains then mix 1 tsp honey and consume 2 times a day.</li>
        <li>1/2 tsp black pepper + 1/2 tsp cow’s ghee, consume after food 2 times a day.</li>
        <li>1 tbsp bel juice + 1/2 tsp honey, morning & evening after meal.</li>
        <li>Dalchini powder + honey.</li>
        <li>Roast methi, add small amount of ginger and powder.</li>
        <li>Make Kadha.</li>
        <li>Tightly roast laung & keep it in mouth & slowly suck its juice.</li>
        <li>Roast 1/2 tsp haldi & consume with honey.</li>
        <li>Boil milk with haldi & consume (don’t drink water after that).</li>
        <li>Black pepper powder + honey + ginger juice (3 times a day).</li>
        <li>5–10 tulsi leaves with water, early morning empty stomach.</li>
      </ul>
      <p class="font-bold mt-4 mb-2 text-green-800">For runny nose / jukham:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Make paste of 1 tsp dry ginger powder with honey.</li>
        <li>5–6 tulsi leaves, apply on forehead & nose for 5 min 2–3 times in week.</li>
        <li>Boil raw onion, extract its juice, 4 drops in nose.</li>
        <li>1/2 tsp dalchini powder + 1 tsp honey.</li>
        <li>2 tbsp honey + ginger juice (1 tsp).</li>
        <li>4–6 inch giloya stem, boil in 400ml water till 100ml left, drink it.</li>
      </ul>
    `
  },
  {
    question: "acne",
    keywords: ["acne", "pimples", "freckles", "mukhadushika", "मुँहासे"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Pimples / Acne / Freckles:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Dalchini powder + 1/2 tsp honey → make paste & apply on face for 10–15 min & wash with clean water.</li>
        <li>Paste of green coriander leaves.</li>
        <li>Paste of laung, apply for 5–10 min.</li>
        <li>Haldi, Chandhan powder with neem leaves paste. Apply for 10 min.</li>
        <li>Lemon juice + honey.</li>
        <li>Aloevera gel – apply overnight & wash with normal water in morning, repeat for 15 days.</li>
        <li>Paste of 10–15 tulsi leaves + pinch of turmeric, apply on face for 10–15 min, wash with clean water.</li>
        <li>Paste of 10–15 tulsi leaves + soak in raw milk for 2 hrs, make paste, apply on face for 15–20 min, wash with lukewarm water.</li>
        <li>Paste of 20–25 neem leaves + 1/4 tsp haldi, leave for 15–20 min, wash with normal water.</li>
      </ul>
      <p class="font-bold mt-4 mb-2 text-green-800">Dandruff / Hairfall:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>3–4 spoon aloevera gel, scalp massage, leave for 2–3 hrs, rinse with water & shampoo. Do this 2 times a week.</li>
      </ul>
    `
  },
  {
    question: "anorexia",
    keywords: ["anorexia", "low appetite", "mandagni", "aruchee", "अरुचि", "मंदाग्नि"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Mandagni / Aruchi:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Lemon juice + ginger + salt – along with meal.</li>
        <li>Lemon juice (10ml) + onion extract (20ml) + honey.</li>
      </ul>
    `
  },
  {
    question: "headache",
    keywords: ["headache", "migraine", "sir dard", "माइग्रेन", "सिरदर्द"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Headache / Migraine:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Boil 3–4 tulsi leaves in water for 5 min, filter it, drink like tea.</li>
        <li>Make paste of rice & apply on forehead.</li>
      </ul>
    `
  },
  {
    question: "stomach ache",
    keywords: ["stomach ache", "pet dard", "abdominal pain", "पेटदर्द"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Stomach ache:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Water + onion extract + lemon juice + salt – drink.</li>
        <li>4–6 spoon aloevera juice – drink daily.</li>
      </ul>
    `
  },
  {
    question: "cavities",
    keywords: ["cavities", "tooth decay", "dant", "दांत", "दंतकृमि"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Cavities / Dental caries:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>(For pain) Apply 2–3 drops of clove oil on cotton & apply on affected area/tooth.</li>
        <li>Massage on affected gums with turmeric + salt & mustard oil paste.</li>
        <li>Apply turmeric paste & gargle with lukewarm water 2–3 times a week.</li>
        <li>Boil 1 tsp hing powder in water & gargle when lukewarm.</li>
      </ul>
    `
  },
  {
    question: "obesity",
    keywords: ["obesity", "weight loss", "motapa", "मोटापा"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Obesity:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>1 tsp lemon juice + 1 tsp honey + pinch of black pepper powder, mix in water & drink.</li>
        <li>1/2 tsp dalchini, boil in water for 10–15 min, filter & add 1 tsp honey and drink empty stomach.</li>
        <li>Boil 5gm ginger in 2 cup water, filter & add 1/2 tsp honey & drink empty stomach in lukewarm stage.</li>
      </ul>
    `
  },
  {
    question: "immunity",
    keywords: ["immunity", "immune system", "resistance", "प्रतिरक्षा"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Immunity:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Powder of cardamom + cinnamon + dry ginger powder, mix & drink with lukewarm water/H₂O.</li>
        <li>8–10 leaves of tulsi in 1 glass of water, boil till 1/4 water remains, filter & drink twice a day.</li>
        <li>Boil 5–7cm of giloy stem in a glass of water until 1/4 remaining. Drink twice a day.</li>
      </ul>
    `
  },
  {
    question: "anemia",
    keywords: ["anemia", "low hemoglobin", "blood deficiency", "अनीमिया", "खून की कमी"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Anemia:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Juice of spinach, pomegranate & apple.</li>
        <li>20ml Aloevera juice in 40ml water, twice a day, empty stomach.</li>
        <li>Boil till 1/4 remains – 4–5 leaves of giloy in water & drink twice a day.</li>
        <li>1 tsp black sesame soaked in water for 2–3 hr, make paste & add 1 tsp honey. Consume 2 times a day.</li>
        <li>Consume roasted gram with jaggery twice, after 1/2 hr, after meal.</li>
      </ul>
    `
  },
  {
    question: "anxiety",
    keywords: ["anxiety", "tension", "stress", "chinta", "चिंता"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Anxiety:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Pinch of kesar in cow’s milk after dinner.</li>
      </ul>
    `
  },
  {
    question: "painful menstruation",
    keywords: ["period pain", "menstrual cramps", "dysmenorrhea", "menstruation", "महावारी", "मासिक धर्म"],
    answer: `
      <p class="font-bold mb-2 text-green-800">Painful menstruation / periods:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>Boil 1 tsp fennel for 5 min in 1 cup water. Filter & drink twice, empty stomach.</li>
        <li>Boil 5–6 guava leaves in 1 glass of water until 1/4 remaining & consume twice.</li>
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
