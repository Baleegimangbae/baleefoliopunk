// mobile menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// close menu when clicking link
document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// reveal animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".section, .project-card, .skill-card").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// inject animation style
const style = document.createElement("style");
style.textContent = `
  .hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: all .8s ease;
  }

  .show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// =========================
// CYBERPUNK RAIN GENERATOR
// =========================

const rainContainer = document.getElementById("rain");

function createRain() {
  const totalDrops = window.innerWidth < 768 ? 90 : 180;

  rainContainer.innerHTML = "";

  for (let i = 0; i < totalDrops; i++) {
    const drop = document.createElement("span");
    drop.classList.add("rain-drop");

    // posisi random
    drop.style.left = Math.random() * 100 + "vw";

    // ukuran random
    const height = 14 + Math.random() * 24;
    drop.style.height = height + "px";

    // durasi random
    const duration = 0.6 + Math.random() * 0.9;
    drop.style.animationDuration = duration + "s";

    // delay random
    drop.style.animationDelay = Math.random() * 2 + "s";

    // opacity random
    drop.style.opacity = 0.3 + Math.random() * 0.7;

    rainContainer.appendChild(drop);
  }
}

createRain();

// regenerate saat resize
window.addEventListener("resize", createRain);

// =========================
// CYBERPUNK AI ASSISTANT
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const aiToggle = document.getElementById("aiToggle");
  const aiChat = document.getElementById("aiChat");
  const closeAi = document.getElementById("closeAi");
  const aiMessages = document.getElementById("aiMessages");
  const aiInput = document.getElementById("aiInput");
  const sendAi = document.getElementById("sendAi");

  // cek apakah elemen ada
  if (!aiToggle || !aiChat) return;

  // buka / tutup chat
  aiToggle.addEventListener("click", () => {
    aiChat.classList.toggle("active");
  });

  closeAi.addEventListener("click", () => {
    aiChat.classList.remove("active");
  });

  function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.className = `ai-message ${type}`;
    msg.innerHTML = text;
    aiMessages.appendChild(msg);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  function botReply(message) {
    const msg = message.toLowerCase();

    if (msg.includes("halo") || msg.includes("hai")) {
      return "Halo Bale 👋 Selamat datang di <b>Cyberpunk Portfolio 2027</b> 🚀";
    }

    if (msg.includes("project")) {
      return "📂 Project utama:<br>• BaleeTopUp Game<br>• Cyberpunk Linktree<br>• Pixel Night Smoke ✨";
    }

    if (msg.includes("skill")) {
      return "⚡ HTML • CSS • JavaScript • UI Design • Responsive Web 🎨";
    }

    if (msg.includes("kontak") || msg.includes("contact")) {
      return "📡 Instagram: @hayuniqbal_<br>💬 Discord: Balee Digital<br>🐙 GitHub: Baleegimangbae";
    }

    return "🤖 Coba tanyakan tentang <b>project, skill, atau kontak</b> 🚀";
  }

  function sendMessage() {
    const text = aiInput.value.trim();
    if (!text) return;

    addMessage(text, "user");
    aiInput.value = "";

    setTimeout(() => {
      addMessage(botReply(text), "bot");
    }, 400);
  }

  sendAi.addEventListener("click", sendMessage);

  aiInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});

// =========================================
// CYBERPUNK FINAL TRUE AUTOPLAY
// =========================================
// =========================================
// 🎧 CYBERPUNK LOFI RADIO
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");

  if (!music) return;

  // volume default
  music.volume = 0.15;

  // coba autoplay otomatis
  music.play().catch(() => {
    console.log("🔒 Browser memblokir autoplay");

    // putar setelah klik pertama
    document.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});