document.addEventListener("DOMContentLoaded", function () {
  const botData = {
    "ai revolution": "The AI revolution refers to the rapid development and integration of artificial intelligence into everyday life...",
    "pioneers of ai": "Key pioneers of AI include Alan Turing, John McCarthy...",
    "uses of ai": "AI is used today in many areas: healthcare, finance, education, transportation, and customer service...",
    "benefits of ai": "AI can increase efficiency, reduce human error, and enable automation of routine tasks...",
    "risks of ai": "Risks include job displacement, algorithmic bias, privacy concerns...",
    "education and ai": "AI benefits education by enabling personalized learning paths, automating grading...",
    "future of ai": "The future of AI is expected to involve ethical development, human-AI teams, and responsible use..."
  };

  const container = document.createElement("div");
  container.id = "chatbot-container";
  container.innerHTML = `
    <div id="chatbot-header">Ask me anything about AI</div>
    <div id="chatbot-messages" style="padding: 10px; font-size: 14px; max-height: 300px; overflow-y: auto;"></div>
    <div id="chatbot-input" style="display: flex; border-top: 1px solid #ccc;">
      <input type="text" id="chatbot-text" placeholder="Type a question..." style="flex: 1; padding: 8px; border: none; border-right: 1px solid #ccc;" />
      <button id="chatbot-send" style="padding: 8px 12px; border: none; background-color: #4a90e2; color: white; cursor: pointer;">Send</button>
    </div>
  `;
  document.body.appendChild(container);

  const input = document.getElementById("chatbot-text");
  const sendBtn = document.getElementById("chatbot-send");
  const messages = document.getElementById("chatbot-messages");

  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function processInput() {
    const question = input.value.trim().toLowerCase();
    if (!question) return;

    addMessage("You", question);
    input.value = "";

    let answer = "I'm still learning. Try rephrasing or ask something else about the AI revolution.";
    for (const [key, response] of Object.entries(botData)) {
      if (question.includes(key)) {
        answer = response;
        break;
      }
    }

    addMessage("FAS", answer);
  }

  sendBtn.onclick = processInput;

  // Fix enter key behavior
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      processInput();
    }
  });
});
