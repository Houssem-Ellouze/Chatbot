document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector(".chatbot-toggler");
    const chatbot = document.querySelector(".chatbot");

    if (toggler && chatbot) {
        toggler.addEventListener("click", function () {
            document.body.classList.toggle("show-chatbot");
        });
    } else {
        console.error("Le bouton chatbot-toggler ou l'élément chatbot n'a pas été trouvé.");
    }

    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.querySelector("#send-btn");
    const chatbox = document.querySelector(".chatbox");

    let userMessage;

    const responses = {
        "hello": "Hi! How can I assist you today?",
        "hi": "Hello there! What can I do for you?",
        "who are you": "I'm an AI Assistant for all Admins from JobSekkers'Application.",
        "how are you": "I'm just a bunch of code, but I'm here to help!",
        "bye": "Goodbye! Take care and have a great day!",
        "nice to meet you": "Thank you! It's a pleasure to meet you too.",
        "what is your name": "I am your friendly chatbot, powered by AI.",
        "what can you do": "I can help you with various tasks, answer your questions, and assist with JobSekkers'Application needs.",
        "tell me a joke": "Why don't programmers like nature? It has too many bugs!",
        "what is jobsekkers": "JobSekkers is an application designed to connect job seekers with opportunities and resources.",
        "help": "Sure! What do you need help with? Try asking me about 'JobSekkers' or saying 'Hello'.",
        "where are you from": "I live in the cloud, but I'm always here to help!",
        "how do i use jobsekkers": "You can navigate through the application to find job listings, apply for roles, and manage your profile easily.",
        "thank you": "You're welcome! Let me know if there's anything else you need.",
        "can you assist me": "Of course! Please tell me what you need assistance with.",
        "tell me about yourself": "I'm an AI Assistant, here to make your experience smooth and enjoyable.",
        "what is your purpose": "My purpose is to help admins and users of JobSekkers'Application with their queries and tasks.",
        "do you like coding": "I don't code myself, but I'm made of code, and I love it when it works perfectly!",
        "can you solve my problem": "I'll do my best! Tell me more about the issue you're facing.",
        "how does jobsekkers work": "It connects job seekers to opportunities through a user-friendly interface, providing job listings, profile management, and application tracking.",
        "why should i use jobsekkers": "Because it simplifies your job search and helps you connect with the right opportunities quickly and efficiently.",
        "do you have emotions": "I don’t have emotions, but I’m here to make your experience enjoyable!",
        "how can i contact support": "You can contact support through the Help section in the JobSekkers'Application, or send an email to support@jobsekkers.com.",
        "good morning": "Good morning! How can I assist you today?",
        "good night": "Good night! Sleep well and take care.",
        "what's the weather": "I can't check the weather, but you can use a weather app for accurate information!",
        "do you understand me": "Yes, I do! Let me know how I can help.",
        "how to reset my password": "You can reset your password by clicking on 'Forgot Password' on the login page.",
        "tell me something interesting": "Did you know the first computer virus was created in 1986? It was called the Brain virus!",
        "thank you": "You're welcome! I'm always here to assist you. If you encounter any bugs, feel free to let me know. I'm available 24/7!"

    };


    const defaultResponse = "I'm not sure how to respond to that.";

    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        chatLi.innerHTML = className === "outgoing"
            ? `<p>${message}</p>`
            : `<span class="material-symbols-outlined"></span><p>${message}</p>`;
        return chatLi;
    };

    const handleChat = () => {
        userMessage = chatInput.value.trim().toLowerCase(); // Convert to lowercase for comparison
        if (!userMessage) return;


        chatbox.appendChild(createChatLi(chatInput.value.trim(), "outgoing"));


        setTimeout(() => {
            const reply = responses[userMessage] || defaultResponse;
            chatbox.appendChild(createChatLi(reply, "incoming"));
        }, 600);

        chatInput.value = "";
    };

    sendChatBtn.addEventListener("click", handleChat);
});
