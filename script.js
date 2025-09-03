// --- EDIT YOUR QUESTIONS AND ANSWERS HERE ---
const qaPairs = [
    {
        question: "What is Ayurveda?",
        answer: "Ayurveda is a traditional Indian system of medicine over 3,000 years old. It aims to preserve health and wellness by keeping the mind, body, and spirit in balance. The name is from the Sanskrit words *ayur* (life) and *veda* (science or knowledge)."
    },
    {
        question: "What are the three Doshas?",
        answer: "The three doshas are Vata, Pitta, and Kapha. They are elemental forces believed to govern our body, mind, and spirit. Everyone has a unique mix, with one usually being dominant, which defines their Ayurvedic constitution or *Prakriti*."
    },
    {
        question: "How can I balance my Pitta dosha?",
        answer: "To balance Pitta, associated with fire and water, focus on cooling and calming. Eat cool, refreshing foods, avoid excessive heat and sun, and practice moderation. Meditation and spending time in nature are also very beneficial."
    },
    {
        question: "What is a good daily routine (Dinacharya)?",
        answer: "A good Ayurvedic daily routine, or *Dinacharya*, includes waking up early, cleaning the senses (like tongue scraping), self-massage (*Abhyanga*), exercise, and eating your main meal at midday when digestive fire is strongest. This helps maintain balance."
    }
];
// -------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const questionOptionsContainer = document.getElementById('question-options');

    function createBotMessage(message, isHtml = false) {
        const messageElement = document.createElement('div');
        messageElement.className = 'flex items-start gap-3 mb-4';
        messageElement.innerHTML = `
            <div class="flex-shrink-0 h-10 w-10 bg-[#86A873] rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 0-5 5c0 1.63.8 3.09 2 4v3h6v-3c1.2-0.91 2-2.37 2-4a5 5 0 0 0-5-5z"></path><path d="M12 14v8"></path><path d="M16 18h-8"></path></svg>
            </div>
            <div class="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-md">
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
            <div class="flex-shrink-0 h-10 w-10 bg-[#86A873] rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 0-5 5c0 1.63.8 3.09 2 4v3h6v-3c1.2-0.91 2-2.37 2-4a5 5 0 0 0-5-5z"></path><path d="M12 14v8"></path><path d="M16 18h-8"></path></svg>
            </div>
            <div class="bg-gray-100 p-3 rounded-lg rounded-tl-none typing-indicator">
                <span></span><span></span><span></span>
            </div>
        `;
        chatWindow.appendChild(typingElement);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    function scrollToBottom() {
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function handleQuestionClick(question, answer) {
        createUserMessage(question);
        toggleQuestionButtons(true);
        showTypingIndicator();
        setTimeout(() => {
            removeTypingIndicator();
            createBotMessage(answer, true); // Pass true to render HTML
            toggleQuestionButtons(false);
        }, 1500 + Math.random() * 500);
    }

    function toggleQuestionButtons(disabled) {
        const buttons = questionOptionsContainer.querySelectorAll('button');
        buttons.forEach(button => {
            button.disabled = disabled;
            if (disabled) {
                button.classList.add('opacity-50', 'cursor-not-allowed');
            } else {
                button.classList.remove('opacity-50', 'cursor-not-allowed');
            }
        });
    }

    function populateQuestions() {
        qaPairs.forEach(pair => {
            const button = document.createElement('button');
            button.textContent = pair.question;
            button.className = 'w-full text-left p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-[#86A873] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#86A873]';
            button.onclick = () => handleQuestionClick(pair.question, pair.answer);
            questionOptionsContainer.appendChild(button);
        });
    }

    // Initial welcome message
    setTimeout(() => {
        createBotMessage("Namaste! I am your Ayurveda Wellness guide. How can I help you find balance today?");
    }, 500);
    populateQuestions();
});
