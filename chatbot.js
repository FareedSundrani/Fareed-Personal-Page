
document.addEventListener("DOMContentLoaded", function () {
  const botData = {
    "what is the ai revolution": "The AI revolution refers to the rapid advancements in artificial intelligence technologies, reshaping industries and daily life.",
    "who are the pioneers of ai": "Pioneers include Alan Turing, Marvin Minsky, John McCarthy, and Geoffrey Hinton.",
    "how is ai used today": "AI is used in healthcare, finance, education, customer service, autonomous vehicles, and more.",
    "what are the risks of ai": "Risks include job displacement, biased decision-making, loss of privacy, and ethical concerns.",
    "how can ai benefit education": "AI can personalize learning, automate grading, and provide intelligent tutoring systems."
  };

  const container = document.createElement("div");
  container.id = "chatbot-container";
  container.innerHTML = `
    <div id="chatbot-header">Ask me anything about AI</div>
    <div id="chatbot-messages"></div>
    <div id="chatbot-input">
      <input type="text" id="chatbot-text" placeholder="Type a question..." />
      <button id="chatbot-send">Send</button>
    </div>
  `;
  document.body.appendChild(container);

  const input = document.getElementById("chatbot-text");
  const sendBtn = document.getElementById("chatbot-send");
  const messages = document.getElementById("chatbot-messages");

  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.textContent = sender + ": " + text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  sendBtn.onclick = () => {
    const question = input.value.trim().toLowerCase();
    if (!question) return;

    addMessage("You", question);
    input.value = "";

    const answer = botData[question] || "I'm still learning. Try rephrasing or ask something else about the AI revolution.";
    setTimeout(() => addMessage("Bot", answer), 300);
  };
});
