document.addEventListener('DOMContentLoaded', function() {
    const chatBtn = document.getElementById('chatBtn');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const chatInput = document.querySelector('.chat-footer input');
    const sendBtn = document.querySelector('.chat-footer button');

    if (chatBtn) {
        chatBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
                chatWindow.style.display = 'block';
            } else {
                chatWindow.style.display = 'none';
            }
        });
    }

    if (closeChat) {
        closeChat.addEventListener('click', () => {
            chatWindow.style.display = 'none';
        });
    }

    if (chatInput && sendBtn) {
        // Enable input and button
        chatInput.disabled = false;
        sendBtn.disabled = false;

        // Send message on button click
        sendBtn.addEventListener('click', () => {
            const text = chatInput.value.trim();
            if (text) {
                processMessage(text);
                chatInput.value = '';
            }
        });

        // Send message on Enter key
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const text = chatInput.value.trim();
                if (text) {
                    processMessage(text);
                    chatInput.value = '';
                }
            }
        });
    }
});

function sendOption(text) {
    processMessage(text);
}

function processMessage(text) {
    const chatBody = document.querySelector('.chat-body');
    if (!chatBody) return;

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.style.background = '#eee';
    userMsg.style.color = '#333';
    userMsg.style.borderBottomRightRadius = '0';
    userMsg.style.marginLeft = 'auto';
    userMsg.style.width = 'fit-content';
    userMsg.innerText = text;
    chatBody.appendChild(userMsg);

    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;

    // Determine bot response
    let responseText = "Gracias por tu mensaje. Un asesor te responderá pronto.";
    const lowerText = text.toLowerCase();

    if (lowerText.includes("inscribirme") || lowerText.includes("inscripción")) {
        responseText = "Para inscribirte, debes presentar fotocopia de carnet, título académico y llenar el formulario en nuestras oficinas o vía web.";
    } else if (lowerText.includes("informática") || lowerText.includes("sistemas")) {
        responseText = "Actualmente ofrecemos Diplomados en Ciencia de Datos, Ciberseguridad y Desarrollo Web Full Stack.";
    } else if (lowerText.includes("contacto") || lowerText.includes("comunicar") || lowerText.includes("información")) {
        responseText = "Puedes contactarnos al teléfono 44116122 o visitarnos en la Facultad de Ciencias y Tecnología, Campus UMSS.";
    } else if (lowerText.includes("precio") || lowerText.includes("costo")) {
        responseText = "Los costos varían según el programa. Por favor, visita la sección de Diplomados o Maestrías para ver los detalles de cada uno.";
    } else if (lowerText.includes("hola") || lowerText.includes("buenos días")) {
        responseText = "¡Hola! ¿En qué puedo ayudarte hoy?";
    }

    // Simulate bot response
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot';
        botMsg.innerText = responseText;
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

// Expose functions to window for onclick events
window.sendOption = sendOption;
