const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatWindow = document.getElementById("chatWindow");

const responses = [
  {
    keywords: ["price", "pricing", "cost", "plan"],
    answer:
      "Our pricing depends on the package and business needs. I can help qualify your needs and recommend a plan based on users, features, and support level."
  },
  {
    keywords: ["onboarding", "setup", "start", "implementation"],
    answer:
      "For onboarding, we usually start by understanding your goals, setting up your account, configuring workflows, training your team, and scheduling follow-ups to ensure adoption."
  },
  {
    keywords: ["demo", "call", "meeting"],
    answer:
      "A product demo is a great next step. Please share your name, company, and preferred time so our team can follow up."
  },
  {
    keywords: ["integration", "api", "connect", "crm"],
    answer:
      "We support common CRM and workflow integrations depending on the tools being used. A specialist can review your current system and recommend the best setup."
  },
  {
    keywords: ["support", "help", "issue", "problem", "ticket"],
    answer:
      "I can help route your support request. Please describe the issue, how long it has been happening, and whether it is blocking your work."
  }
];

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotResponse(input) {
  const normalized = input.toLowerCase();

  const match = responses.find(item =>
    item.keywords.some(keyword => normalized.includes(keyword))
  );

  if (match) return match.answer;

  return "Thanks for sharing that. I would gather a few more details, identify your goal or issue, and route this to the right customer success or support workflow.";
}

chatForm.addEventListener("submit", event => {
  event.preventDefault();

  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    addMessage(getBotResponse(text), "bot");
  }, 500);
});
