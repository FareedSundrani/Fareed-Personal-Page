document.addEventListener("DOMContentLoaded", function () {
  const botData = {
    "ai revolution": "The AI revolution refers to the rapid development and integration of artificial intelligence into everyday life. It includes advancements in machine learning, robotics, natural language processing, and computer vision, and is transforming industries including healthcare, finance, manufacturing, and education.",
    "pioneers of ai": "Key pioneers of AI include Alan Turing, John McCarthy (who coined the term 'Artificial Intelligence'), Marvin Minsky, and Geoffrey Hinton who is known as the 'Godfather of Deep Learning'.",
    "uses of ai": "AI is used today in many areas: healthcare (for diagnostics and personalized treatment), finance (fraud detection, automated trading), education (adaptive learning), transportation (autonomous vehicles), and customer service (chatbots).",
    "benefits of ai": "AI can increase efficiency, reduce human error, enable automation of routine tasks, and create new possibilities in areas like personalized medicine, smart cities, and predictive analytics.",
    "risks of ai": "Risks include job displacement, algorithmic bias, privacy concerns, misuse in surveillance or warfare, and lack of transparency in decision-making by black-box models.",
    "education and ai": "AI benefits education by enabling personalized learning paths, automating grading, offering intelligent tutoring systems, and providing insights through learning analytics.",
    "future of ai": "The future of AI is expected to involve more human-like interaction, ethical AI development, collaboration with humans (human-AI teams), and strong governance to ensure responsible use."
  };

  const container = document.createElement("div");
  container.id = "chatbot-container";
  container.innerHTML = `
    <div id="chatbot-header">Ask me anything about AI</div>
    <div id="chatbot-messages" style="padding: 10px; font-size: 14px;"></div>
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

    let found = false;
    for (const key in botData) {
      if (question.includes(key)) {
        addMessage("FAS", botData[key]);
        found = true;
        break;
      }
    }

    if (!found) {
      addMessage("FAS", "I'm still learning. Try rephrasing or ask something else about the AI revolution.");
    }
  }

  sendBtn.onclick = processInput;

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      processInput();
    }
  });
});
