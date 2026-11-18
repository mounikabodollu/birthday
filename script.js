/* ==========================================================================
   BIRTHDAY SURPRISE WEBSITE — CENTRAL CONFIGURATION & INTERACTIVE LOGIC
   Pure HTML5 / CSS3 / Vanilla JavaScript (Zero external JS dependencies)
   ========================================================================== */

/**
 * --------------------------------------------------------------------------
 * PERSONALIZE EVERYTHING HERE IN ONE PLACE!
 * Edit names, secret password, birthday date, music track, photos, letter,
 * timeline, quiz questions, and final surprise message below.
 * --------------------------------------------------------------------------
 */
const SURPRISE_CONFIG = {
  recipientName: "My Love",
  senderName: "Forever Yours ❤️",

  quizEmail: {
    serviceId: "service_9l4qaxs",
    templateId: "template_berbp5c",
    publicKey: "eNXaDyXpJ0TUn-8VS",
    recipient: "mounikabodollu2006@gmail.com"
  },

  // Secret password settings (comparison is case-insensitive and trimmed)
  password: "Mouna",
  passwordPrompt: "What do you call ur favorite person?",
  passwordHint: "Hint:  what do you call me cutely. 💖",

  // Set to a future ISO date/time to display the live countdown timer,
  // or a past/today date to show the "Today Is Your Special Day!" banner.
  birthdayDate: "2026-12-13T00:00:00",

  heroSubtitle:
    "May today wrap you in golden light, gentle laughter, unforgettable memories, and all the love your heart can hold.",

  candleWish:
    "On December 13th, 1999, the moon sent its most beautiful reflection to Earth, unaware that one day he would become the entire universe to me.🌙❤️",

  // Place the legally obtained audio file at this path.
  music: {
    src: "assets/music/rangulu-ranguley.mp3",
    title: "Ramayana: Rangulu Ranguley",
    album: "Ramayana",
    artists: "Namit M, Nitesh T, A. R. Rahman, Raghav K, Vaishali S"
  },

  // Section 4: Vertical Memories Timeline
  timeline: [
    {
    
      imagePosition: "center 20%",
      caption:
        "I remember feeling a little nervous before sitting down — and within five minutes of your laugh, it felt like I had known you my whole life.",
      image: "assets/images/personal-1.png"
    },
    {
    
      imagePosition: "center 10%",
      caption:
        "You insisted on catching every single falling petal for good luck. Watching your smile glow in the golden hour is still my favorite photograph in my mind.",
      image: "assets/images/personal-2.png"
    },
    {
     
      imagePosition: "center 48%",
      caption:
        "We sprinted two blocks under one tiny umbrella, completely soaked and laughing so hard we couldn't even order our hot cocoa properly!",
      image: "assets/images/personal-4.png"
    },
    {
    
      imagePosition: "center top",
      caption:
        "Lying under a blanket of purple twilight stars with warm fairy lights beside us, whispering dreams about all the places we want to see.",
      image: "assets/images/personal-3.png"
    },
    {
     
      imagePosition: "center top",
      caption:
        "No schedules, no rush — just salty breeze, pastel skies, and your hand warm in mine while the waves washed away every worry.",
      image: "assets/images/personal-5.png"
    },
    {
    
      imagePosition: "center top",
      caption:
        "Here is to another year of your kindness, your adorable laugh, your unstoppable sparkle, and a thousand more memories waiting for us.",
      image: "assets/images/personal-7.png"
    }
  ],

  // Section 5: Special Birthday Letter (Typewriter Reveal)
  letter: {
    salutation: "Happy Birthday Nanaa...! ❤️🎂",
    paragraphs: [
      "Happy Birthday Nanaa...! 🥹❤️",
      "Nuvvu naa life lo chala special. Nee life lo ee year happiness, success, peace, and endless blessings tho nindipovali. Nuvvu korukunna prathi dream nijam avvali, nee face meedha smile eppudu alane undali.",
      "Nanaa, life lo enni ups and downs vachina, elaanti situation vachina, nee cheyyi eppatiki vadhalanu. Nee happiness lo neetho navvuthanu, nee kastallo nee pakkana nilabadathanu. I promise, whatever happens, I'll always be with you. ❤️",
      "I give you love, support, and care, and I hope to receive the same love, support, care, and understanding from you. I promise to take care of you and our family with all my heart and love. ❤️ Together, let's achieve our dreams, grow, succeed, and build a beautiful future.",
      "Bava, I'll be yours forever. Will you be mine forever? 🥹❤️",
      "One promise from me: No matter how difficult life gets, I'll never leave your hand."
    ],
    emphasizedParagraphs: [4],
    closing: "Love you so much, Nanaa! 🫂❤️ Once again, Happy Birthday, my love! May all your wishes come true. ❤️",
    signature: ""
  },

  // Section 6: Interactive Personalized Birthday Quiz
  quiz: [
    {
      question: "What do you love the most about me?",
      options: [
        "My smile 😊",
        "My love and care ❤️",
        "My childish behaviour 🥰",
        "My understanding nature 💗"
      ]
    },
    {
      question: "If you could relive one moment with me forever, which moment would you choose?",
      options: [
        "Every little moment we spend time 🌙",
        "I haven't experienced my favourite moment yet; it's still waiting to happen with you ❤️",
        "The moment I realised you were special to me ❤️",
        "The first time we started talking 🥹"
      ]
    },
    {
      question: "What is the one nickname you secretly love calling me?",
      options: [
        "Amma❤️",
        "Bangarammm..!🥰",
        "potti💗",
        "Mardhal🥰"
      ]
    },
    {
      question: "What is one thing about me that makes you smile even u are sad?",
      options: [
        "My Face and my Smile 😊",
        "cute and childish behaviour 🥹",
        "Everything about you ❤️",
        "Simply knowing that you are mine 🌙"
      ]
    },
    {
      question: "If the whole world gave you a thousand choices, would you still choose me in every lifetime?",
      options: [
        "Yes ,I Choose You For Every Lifetime ❤️",
        "No, I will choose someone else"
      ]
    }
  ],

};

const EMAILJS_SDK_URLS = [
  "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
  "https://unpkg.com/@emailjs/browser@4/dist/email.min.js"
];
const EMAILJS_SDK_LOAD_TIMEOUT = 15000;
let emailJsLoadPromise = null;

function getEmailJsBrowserSdk() {
  const emailjs = window.emailjs;
  return emailjs &&
    typeof emailjs.init === "function" &&
    typeof emailjs.send === "function"
    ? emailjs
    : null;
}

function loadEmailJsSdkFrom(url) {
  return new Promise((resolve, reject) => {
    const sdkScript = document.createElement("script");
    const timeoutId = window.setTimeout(() => {
      sdkScript.remove();
      reject(new Error("Timed out while loading the EmailJS Browser SDK."));
    }, EMAILJS_SDK_LOAD_TIMEOUT);

    sdkScript.src = url;
    sdkScript.async = true;
    sdkScript.onload = () => {
      window.clearTimeout(timeoutId);
      const emailjs = getEmailJsBrowserSdk();
      if (emailjs) {
        resolve(emailjs);
      } else {
        sdkScript.remove();
        reject(new Error("The EmailJS SDK loaded without exposing its browser API."));
      }
    };
    sdkScript.onerror = () => {
      window.clearTimeout(timeoutId);
      sdkScript.remove();
      reject(new Error("The EmailJS SDK could not be downloaded."));
    };
    document.head.appendChild(sdkScript);
  });
}

async function ensureEmailJsSdk() {
  const loadedEmailjs = getEmailJsBrowserSdk();
  if (loadedEmailjs) return loadedEmailjs;
  if (emailJsLoadPromise) return emailJsLoadPromise;

  emailJsLoadPromise = (async () => {
    let lastError;
    for (const url of EMAILJS_SDK_URLS) {
      const emailjs = getEmailJsBrowserSdk();
      if (emailjs) return emailjs;
      try {
        return await loadEmailJsSdkFrom(url);
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError || new Error("The EmailJS Browser SDK could not be loaded.");
  })().finally(() => {
    emailJsLoadPromise = null;
  });

  return emailJsLoadPromise;
}

/* ==========================================================================
   DOM REFERENCES & GLOBAL STATE
   ========================================================================== */
const state = {
  unlocked: false,
  candlesBlown: false,
  letterOpened: false,
  letterTypingComplete: false,
  typewriterTimer: null,
  countdownTimer: null,
  currentQuizIndex: 0,
  quizAnswered: false,
  quizAnswers: [],
  quizEmailSending: false,
  quizEmailSent: false,
  quizEmailInitialized: false,
  openedFeelings: new Set(),
  lightboxIndex: 0,
  musicUserPaused: false,
  musicIsPlaying: false,
  wrongAttempts: 0
};

const els = {
  body: document.body,
  ambientCanvas: document.getElementById("ambientCanvas"),
  celebrationCanvas: document.getElementById("celebrationCanvas"),
  progressHeader: document.getElementById("progressHeader"),
  progressTrack: document.getElementById("explorationProgressBar"),
  progressFill: document.getElementById("progressFill"),
  progressPercentText: document.getElementById("progressPercentText"),
  navTitle: document.getElementById("navTitle"),
  navLinks: document.querySelectorAll(".nav-link"),

  // Music
  bgMusic: document.getElementById("bgMusic"),
  musicTitle: document.getElementById("musicTitle"),
  musicAlbum: document.getElementById("musicAlbum"),
  musicArtists: document.getElementById("musicArtists"),
  musicStatus: document.getElementById("musicStatus"),
  musicEqualizer: document.getElementById("musicEqualizer"),
  musicToggleBtn: document.getElementById("musicToggleBtn"),
  musicPlayIcon: document.getElementById("musicPlayIcon"),
  muteToggleBtn: document.getElementById("muteToggleBtn"),
  musicMuteIcon: document.getElementById("musicMuteIcon"),

  // Section 1: Welcome
  sectionWelcome: document.getElementById("section-welcome"),
  openSurpriseBtn: document.getElementById("openSurpriseBtn"),

  // Section 2: Password
  sectionPassword: document.getElementById("section-password"),
  backToWelcomeBtn: document.getElementById("backToWelcomeBtn"),
  passwordCard: document.getElementById("passwordCard"),
  lockEmblem: document.getElementById("lockEmblem"),
  lockIcon: document.getElementById("lockIcon"),
  passwordPrompt: document.getElementById("passwordPrompt"),
  passwordForm: document.getElementById("passwordForm"),
  passwordInput: document.getElementById("passwordInput"),
  togglePwdVisibility: document.getElementById("togglePwdVisibility"),
  passwordError: document.getElementById("passwordError"),
  hintToggleBtn: document.getElementById("hintToggleBtn"),
  passwordHintText: document.getElementById("passwordHintText"),

  // Main Journey & Section 3: Celebration
  mainJourney: document.getElementById("mainJourney"),
  birthdayPersonName: document.getElementById("birthdayPersonName"),
  heroSubtitle: document.getElementById("heroSubtitle"),
  balloonLayer: document.getElementById("balloonLayer"),
  countdownLabel: document.getElementById("countdownLabel"),
  countdownGrid: document.getElementById("countdownGrid"),
  todayCelebrationBanner: document.getElementById("todayCelebrationBanner"),
  cdDays: document.getElementById("cdDays"),
  cdHours: document.getElementById("cdHours"),
  cdMinutes: document.getElementById("cdMinutes"),
  cdSeconds: document.getElementById("cdSeconds"),
  candlesRow: document.getElementById("candlesRow"),
  blowCandlesBtn: document.getElementById("blowCandlesBtn"),
  birthdayWishReveal: document.getElementById("birthdayWishReveal"),
  candleWishText: document.getElementById("candleWishText"),

  // Section 4: Timeline
  timelineContainer: document.getElementById("timelineContainer"),
  lightbox: document.getElementById("lightbox"),
  lightboxBackdrop: document.getElementById("lightboxBackdrop"),
  lightboxCloseBtn: document.getElementById("lightboxCloseBtn"),
  lightboxPrevBtn: document.getElementById("lightboxPrevBtn"),
  lightboxNextBtn: document.getElementById("lightboxNextBtn"),
  lightboxImage: document.getElementById("lightboxImage"),
  lightboxDate: document.getElementById("lightboxDate"),
  lightboxTitle: document.getElementById("lightboxTitle"),
  lightboxCaption: document.getElementById("lightboxCaption"),
  lightboxCounter: document.getElementById("lightboxCounter"),

  // Section 5: Letter
  envelopeWrapper: document.getElementById("envelopeWrapper"),
  letterSalutation: document.getElementById("letterSalutation"),
  letterBody: document.getElementById("letterBody"),
  letterFooter: document.getElementById("letterFooter"),
  letterClosing: document.getElementById("letterClosing"),
  letterSignature: document.getElementById("letterSignature"),
  envelopeHint: document.getElementById("envelopeHint"),
  skipTypewriterBtn: document.getElementById("skipTypewriterBtn"),

  // Section 6: Quiz
  quizPlayView: document.getElementById("quizPlayView"),
  quizResultView: document.getElementById("quizResultView"),
  quizCounter: document.getElementById("quizCounter"),
  quizDots: document.getElementById("quizDots"),
  quizQuestionText: document.getElementById("quizQuestionText"),
  quizOptions: document.getElementById("quizOptions"),
  quizFeedback: document.getElementById("quizFeedback"),
  feedbackEmoji: document.getElementById("feedbackEmoji"),
  feedbackText: document.getElementById("feedbackText"),
  quizEmailStatus: document.getElementById("quizEmailStatus"),
  quizEmailRetryBtn: document.getElementById("quizEmailRetryBtn"),
  quizNextBtn: document.getElementById("quizNextBtn"),
  resultBadge: document.getElementById("resultBadge"),
  resultTitle: document.getElementById("resultTitle"),
  resultMessage: document.getElementById("resultMessage"),
  quizRetryBtn: document.getElementById("quizRetryBtn"),

  // Section 7: A Little Box of Feelings
  unlockFinalSurpriseBtn: document.getElementById("unlockFinalSurpriseBtn"),
  feelingsContent: document.getElementById("feelingsContent"),
  feelingTriggers: document.querySelectorAll(".feeling-trigger"),
  finalRevealCard: document.getElementById("finalRevealCard"),
  replayNotesBtn: document.getElementById("replayNotesBtn"),
  replaySurpriseBtn: document.getElementById("replaySurpriseBtn"),

  // Desktop Cursor
  cursorDot: document.getElementById("customCursorDot"),
  cursorRing: document.getElementById("customCursorRing")
};

/* ==========================================================================
   INITIALIZATION & PERSONALIZATION HYDRATION
   ========================================================================== */
function hydratePersonalizedContent() {
  document.title = `Happy Birthday, ${SURPRISE_CONFIG.recipientName}! 🎂💖`;
  els.navTitle.textContent = `For ${SURPRISE_CONFIG.recipientName}`;
  els.birthdayPersonName.textContent = SURPRISE_CONFIG.recipientName;
  els.heroSubtitle.textContent = SURPRISE_CONFIG.heroSubtitle;
  els.candleWishText.textContent = SURPRISE_CONFIG.candleWish;

  els.passwordPrompt.textContent = SURPRISE_CONFIG.passwordPrompt;
  els.passwordHintText.textContent = SURPRISE_CONFIG.passwordHint;

  const audioSource = els.bgMusic.querySelector("source");
  audioSource.src = SURPRISE_CONFIG.music.src;
  els.bgMusic.load();
  els.musicTitle.textContent = SURPRISE_CONFIG.music.title;
  els.musicAlbum.textContent = SURPRISE_CONFIG.music.album;
  els.musicArtists.textContent = SURPRISE_CONFIG.music.artists;

  // Letter metadata
  els.letterSalutation.textContent = SURPRISE_CONFIG.letter.salutation;
  els.letterClosing.textContent = SURPRISE_CONFIG.letter.closing;
  els.letterSignature.textContent = SURPRISE_CONFIG.letter.signature;

}

/* ==========================================================================
   AMBIENT FLOATING HEARTS, STARS & SPARKLES CANVAS
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = els.ambientCanvas;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const targetCount = Math.min(44, Math.max(20, Math.floor((width * height) / 34000)));
    if (particles.length === 0) {
      for (let i = 0; i < targetCount; i++) {
        particles.push(createParticle(true));
      }
    }
  }

  function createParticle(randomY = false) {
    const types = ["heart", "star", "sparkle"];
    const type = types[Math.floor(Math.random() * types.length)];
    const colors = [
      "rgba(247, 154, 184, 0.48)",
      "rgba(203, 178, 245, 0.50)",
      "rgba(235, 188, 102, 0.45)",
      "rgba(255, 255, 255, 0.72)"
    ];
    return {
      type,
      x: Math.random() * (width || window.innerWidth),
      y: randomY ? Math.random() * (height || window.innerHeight) : (height || window.innerHeight) + 24,
      size: type === "heart" ? 6 + Math.random() * 8 : 3 + Math.random() * 5,
      speedY: 0.25 + Math.random() * 0.55,
      driftX: (Math.random() - 0.5) * 0.35,
      swayPhase: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      twinkle: Math.random() * Math.PI * 2
    };
  }

  function drawHeart(x, y, size, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    ctx.beginPath();
    const s = size * 0.55;
    ctx.moveTo(0, s);
    ctx.bezierCurveTo(-s * 1.4, -s * 0.2, -s * 0.7, -s * 1.5, 0, -s * 0.5);
    ctx.bezierCurveTo(s * 0.7, -s * 1.5, s * 1.4, -s * 0.2, 0, s);
    ctx.fill();
    ctx.restore();
  }

  function drawStar(x, y, size, color, alphaMod) {
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = alphaMod;
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
      ctx.lineTo(Math.cos(angle + Math.PI / 4) * (size * 0.32), Math.sin(angle + Math.PI / 4) * (size * 0.32));
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, idx) => {
      if (!prefersReducedMotion) {
        p.y -= p.speedY;
        p.swayPhase += 0.015;
        p.x += p.driftX + Math.sin(p.swayPhase) * 0.28;
        p.twinkle += 0.04;
      }

      if (p.y < -30 || p.x < -40 || p.x > width + 40) {
        particles[idx] = createParticle(false);
        return;
      }

      if (p.type === "heart") {
        drawHeart(p.x, p.y, p.size, p.color);
      } else if (p.type === "star") {
        const alpha = 0.45 + 0.5 * Math.sin(p.twinkle);
        drawStar(p.x, p.y, p.size * 1.35, p.color, Math.max(0.15, alpha));
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.55, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
    });

    if (!prefersReducedMotion) {
      requestAnimationFrame(render);
    }
  }

  window.addEventListener("resize", resize);
  resize();
  render();
}

/* ==========================================================================
   CELEBRATION CONFETTI & FIREWORKS CANVAS ENGINE
   ========================================================================== */
const celebrationFX = (() => {
  const canvas = els.celebrationCanvas;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let running = false;
  let fireworkInterval = null;

  const palette = ["#ff7ea8", "#ffd166", "#cbb2f5", "#ff9ebb", "#fff0c2", "#9bf6ff", "#f7a8b8"];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  function addParticles(list) {
    particles.push(...list);
    if (!running) {
      running = true;
      requestAnimationFrame(tick);
    }
  }

  function burst(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 48) {
    const items = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.8 + Math.random() * 7.8;
      items.push({
        kind: Math.random() > 0.25 ? "confetti" : "spark",
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.4,
        gravity: 0.16,
        drag: 0.985,
        w: 6 + Math.random() * 6,
        h: 4 + Math.random() * 5,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.22,
        color: palette[Math.floor(Math.random() * palette.length)],
        life: 1,
        decay: 0.011 + Math.random() * 0.012
      });
    }
    addParticles(items);
  }

  function fireworkRocket() {
    const x = canvas.width * (0.15 + Math.random() * 0.7);
    const y = canvas.height * (0.14 + Math.random() * 0.42);
    const count = 64;
    const baseHueColor = palette[Math.floor(Math.random() * palette.length)];
    const items = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.12;
      const speed = 2.2 + Math.random() * 5.6;
      items.push({
        kind: "spark",
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 0.07,
        drag: 0.965,
        w: 3.5 + Math.random() * 2.5,
        h: 3.5,
        rot: 0,
        rotSpeed: 0,
        color: i % 3 === 0 ? "#fff5c0" : baseHueColor,
        life: 1,
        decay: 0.013 + Math.random() * 0.01
      });
    }
    addParticles(items);
  }

  function launchFireworks(durationMs = 3600) {
    if (fireworkInterval) clearInterval(fireworkInterval);
    fireworkRocket();
    setTimeout(fireworkRocket, 240);
    burst(canvas.width * 0.5, canvas.height * 0.35, 70);

    const started = Date.now();
    fireworkInterval = setInterval(() => {
      if (Date.now() - started >= durationMs) {
        clearInterval(fireworkInterval);
        fireworkInterval = null;
        return;
      }
      fireworkRocket();
    }, 520);
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter((p) => {
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotSpeed;
      p.life -= p.decay;

      if (p.life <= 0) return false;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;

      if (p.kind === "spark") {
        ctx.beginPath();
        ctx.arc(0, 0, p.w * 0.65, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }

      ctx.restore();
      return true;
    });

    if (particles.length > 0) {
      requestAnimationFrame(tick);
    } else {
      running = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  return { burst, launchFireworks };
})();

/* ==========================================================================
   DESKTOP CUSTOM CURSOR EFFECT
   ========================================================================== */
function initCustomCursor() {
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!isFinePointer || !els.cursorDot || !els.cursorRing) return;

  els.body.classList.add("has-custom-cursor");

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    els.cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    const target = e.target.closest("a, button, [role='button'], input");
    els.cursorRing.classList.toggle("is-hovering", Boolean(target));
  });

  window.addEventListener("mousedown", (e) => {
    const sparkle = document.createElement("span");
    sparkle.className = "cursor-sparkle";
    sparkle.textContent = Math.random() > 0.5 ? "✨" : "💖";
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 750);
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    els.cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(animateRing);
  }

  requestAnimationFrame(animateRing);
}

/* ==========================================================================
   BACKGROUND MUSIC CONTROLLER
   ========================================================================== */
const musicController = {
  updateUI() {
    const isPlaying = state.musicIsPlaying && !els.bgMusic.paused && !els.bgMusic.ended;
    const isMuted = els.bgMusic.muted;

    els.musicPlayIcon.textContent = isPlaying ? "⏸" : "▶";
    els.musicToggleBtn.setAttribute("aria-label", isPlaying ? "Pause background music" : "Play background music");
    els.musicEqualizer.classList.toggle("is-playing", isPlaying && !isMuted);

    els.musicMuteIcon.textContent = isMuted ? "🔇" : "🔊";
    els.muteToggleBtn.setAttribute("aria-label", isMuted ? "Unmute background music" : "Mute background music");
  },

  handlePlaybackError(error) {
    if (error.name === "NotAllowedError" &&
        els.bgMusic.networkState !== HTMLMediaElement.NETWORK_NO_SOURCE) {
      els.musicStatus.textContent = "Tap Open Your Surprise or Play to enable audio.";
    } else if (els.bgMusic.error ||
        els.bgMusic.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
      this.reportMissingAudio();
      return;
    } else {
      els.musicStatus.textContent = "Could not play audio. Check the MP3 file and browser audio settings.";
    }
    state.musicIsPlaying = false;
    console.error("Background music playback failed:", error);
    this.updateUI();
  },

  reportMissingAudio() {
    state.musicIsPlaying = false;
    els.musicStatus.textContent = "Could not load MP3: assets/music/rangulu-ranguley.mp3";
    console.error("Background music source is unavailable:", {
      source: els.bgMusic.currentSrc,
      errorCode: els.bgMusic.error ? els.bgMusic.error.code : null,
      networkState: els.bgMusic.networkState
    });
    this.updateUI();
  },

  async startPlayback() {
    if (state.musicUserPaused || state.musicIsPlaying) return;
    window.setTimeout(() => {
      if (!state.musicIsPlaying && !state.musicUserPaused &&
          !els.bgMusic.error &&
          els.bgMusic.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
        this.reportMissingAudio();
      }
    }, 2000);
    try {
      els.bgMusic.volume = 1;
      await els.bgMusic.play();
      if (els.bgMusic.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
        this.reportMissingAudio();
      }
    } catch (error) {
      this.handlePlaybackError(error);
    }
    this.updateUI();
  },

  async togglePlay() {
    if (!state.musicIsPlaying || els.bgMusic.paused) {
      state.musicUserPaused = false;
      await this.startPlayback();
    } else {
      state.musicUserPaused = true;
      state.musicIsPlaying = false;
      els.bgMusic.pause();
      els.musicStatus.textContent = "Paused";
    }
    this.updateUI();
  },

  toggleMute() {
    els.bgMusic.muted = !els.bgMusic.muted;
    this.updateUI();
  },

  init() {
    els.musicToggleBtn.addEventListener("click", () => this.togglePlay());
    els.muteToggleBtn.addEventListener("click", () => this.toggleMute());
    els.bgMusic.addEventListener("play", () => {
      if (els.bgMusic.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
        this.reportMissingAudio();
        return;
      }
      state.musicIsPlaying = false;
      els.musicStatus.textContent = "Loading audio…";
      this.updateUI();
    });
    els.bgMusic.addEventListener("playing", () => {
      state.musicIsPlaying = true;
      els.musicStatus.textContent = "Now playing";
      this.updateUI();
    });
    els.bgMusic.addEventListener("pause", () => {
      state.musicIsPlaying = false;
      els.musicStatus.textContent = "Paused";
      this.updateUI();
    });
    els.bgMusic.addEventListener("waiting", () => {
      state.musicIsPlaying = false;
      els.musicStatus.textContent = "Loading audio…";
      this.updateUI();
    });
    els.bgMusic.addEventListener("loadeddata", () => {
      if (!state.musicIsPlaying) els.musicStatus.textContent = "Audio loaded";
    });
    els.bgMusic.addEventListener("volumechange", () => this.updateUI());
    els.bgMusic.addEventListener("error", () => {
      this.reportMissingAudio();
    });
    els.bgMusic.volume = 1;
    els.bgMusic.muted = false;
    this.updateUI();
    this.startPlayback();
  }
};

/* ==========================================================================
   SECTION 1 & 2: WELCOME SCREEN -> PASSWORD GATE -> UNLOCK SURPRISE
   ========================================================================== */
function switchStage(fromEl, toEl, onAfter) {
  fromEl.classList.add("is-leaving");
  setTimeout(() => {
    fromEl.classList.add("hidden");
    fromEl.classList.remove("is-leaving", "is-active");
    toEl.classList.remove("hidden");
    toEl.classList.add("is-active");
    if (onAfter) onAfter();
  }, 420);
}

function initWelcomeAndPassword() {
  const cuteWrongMessages = [
    "🙈 Oops! Not quite, cutie — try again 💕",
    "💭 Hmm, close! Peek at the little hint below if you need ✨",
    "🌸 Almost! Think of a word that means always & always 💖"
  ];

  els.openSurpriseBtn.addEventListener("click", (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    celebrationFX.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 42);
    musicController.startPlayback();

    switchStage(els.sectionWelcome, els.sectionPassword, () => {
      els.passwordInput.focus();
    });
  });

  els.backToWelcomeBtn.addEventListener("click", () => {
    els.passwordError.textContent = "";
    switchStage(els.sectionPassword, els.sectionWelcome);
  });

  els.togglePwdVisibility.addEventListener("click", () => {
    const isPassword = els.passwordInput.type === "password";
    els.passwordInput.type = isPassword ? "text" : "password";
    els.togglePwdVisibility.textContent = isPassword ? "🙈" : "👁️";
    els.togglePwdVisibility.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
  });

  els.hintToggleBtn.addEventListener("click", () => {
    const nowHidden = els.passwordHintText.classList.toggle("hidden");
    els.hintToggleBtn.textContent = nowHidden ? "Need a little hint? 💭" : "Hide hint ✨";
  });

  els.passwordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const entered = els.passwordInput.value.trim().toLowerCase();
    const expected = String(SURPRISE_CONFIG.password).trim().toLowerCase();

    if (entered === expected && expected.length > 0) {
      unlockBirthdayExperience();
    } else {
      state.wrongAttempts += 1;
      const msg = cuteWrongMessages[(state.wrongAttempts - 1) % cuteWrongMessages.length];
      els.passwordError.textContent = msg;
      els.passwordCard.classList.remove("is-shaking");
      void els.passwordCard.offsetWidth; // trigger reflow for animation replay
      els.passwordCard.classList.add("is-shaking");
      els.passwordInput.select();
    }
  });
}

function unlockBirthdayExperience() {
  state.unlocked = true;
  els.birthdayPersonName.textContent = "Bava...! ❤️";
  els.passwordError.textContent = "";
  els.lockIcon.textContent = "💖";
  els.lockEmblem.classList.add("is-unlocked");

  const rect = els.lockEmblem.getBoundingClientRect();
  celebrationFX.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 65);
  setTimeout(() => {
    els.sectionPassword.classList.add("hidden");
    els.sectionPassword.classList.remove("is-active");
    els.body.classList.remove("state-locked");

    els.progressHeader.classList.remove("hidden");
    els.mainJourney.classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "instant" });
    spawnBalloons();
    startCountdown();
    observeScrollReveals();
    updateScrollProgress();

    setTimeout(() => {
      celebrationFX.burst(window.innerWidth * 0.5, window.innerHeight * 0.25, 75);
    }, 320);
  }, 550);
}

/* ==========================================================================
   SECTION 3: COUNTDOWN, BALLOONS & INTERACTIVE BIRTHDAY CAKE
   ========================================================================== */
function startCountdown() {
  if (state.countdownTimer) clearInterval(state.countdownTimer);

  const target = new Date(SURPRISE_CONFIG.birthdayDate).getTime();

  function updateClock() {
    const now = Date.now();
    const diff = target - now;

    if (Number.isNaN(target) || diff <= 0) {
      els.countdownGrid.classList.add("hidden");
      els.countdownLabel.textContent = "✨ Celebration Status ✨";
      els.todayCelebrationBanner.classList.remove("hidden");
      if (state.countdownTimer) {
        clearInterval(state.countdownTimer);
        state.countdownTimer = null;
      }
      return;
    }

    els.countdownGrid.classList.remove("hidden");
    els.todayCelebrationBanner.classList.add("hidden");
    els.countdownLabel.textContent = "✨ Counting Down to Your Midnight Magic ✨";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    els.cdDays.textContent = String(days).padStart(2, "0");
    els.cdHours.textContent = String(hours).padStart(2, "0");
    els.cdMinutes.textContent = String(minutes).padStart(2, "0");
    els.cdSeconds.textContent = String(seconds).padStart(2, "0");
  }

  updateClock();
  state.countdownTimer = setInterval(updateClock, 1000);
}

function spawnBalloons() {
  els.balloonLayer.innerHTML = "";
  const colors = [
    "linear-gradient(145deg, #ffc4d8, #f27aa3)",
    "linear-gradient(145deg, #e7d4ff, #b892f0)",
    "linear-gradient(145deg, #fff3c7, #ebc16b)",
    "linear-gradient(145deg, #ffe6f0, #f9a8c6)"
  ];

  const count = window.innerWidth < 640 ? 8 : 13;
  for (let i = 0; i < count; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.left = `${4 + (i * (92 / count)) + (Math.random() * 4 - 2)}%`;
    b.style.background = colors[i % colors.length];
    b.style.setProperty("--dur", `${12 + Math.random() * 7}s`);
    b.style.setProperty("--delay", `${-Math.random() * 12}s`);
    b.style.setProperty("--sway", `${(Math.random() > 0.5 ? 1 : -1) * (16 + Math.random() * 22)}px`);

    b.addEventListener("click", (e) => {
      const r = b.getBoundingClientRect();
      celebrationFX.burst(r.left + r.width / 2, r.top + r.height / 2, 26);
      b.classList.add("is-popped");
      setTimeout(() => {
        b.classList.remove("is-popped");
        b.style.left = `${6 + Math.random() * 88}%`;
      }, 1500);
      e.stopPropagation();
    });

    els.balloonLayer.appendChild(b);
  }
}

function initCakeInteraction() {
  els.blowCandlesBtn.addEventListener("click", () => {
    if (!state.candlesBlown) {
      state.candlesBlown = true;
      els.candlesRow.classList.add("is-blown");
      els.birthdayWishReveal.classList.remove("hidden");
      els.blowCandlesBtn.innerHTML = "<span>Relight Candles 🕯️</span>";

      const rect = els.candlesRow.getBoundingClientRect();
      celebrationFX.burst(rect.left + rect.width / 2, rect.top, 60);
      celebrationFX.launchFireworks(2600);
    } else {
      state.candlesBlown = false;
      els.candlesRow.classList.remove("is-blown");
      els.birthdayWishReveal.classList.add("hidden");
      els.blowCandlesBtn.innerHTML = "<span>Blow Out the Candles 🕯️✨</span>";
    }
  });
}

/* ==========================================================================
   SECTION 4: OUR BEAUTIFUL MEMORIES TIMELINE
   ========================================================================== */
function renderTimeline() {
  const spine = els.timelineContainer.querySelector(".timeline-spine");
  els.timelineContainer.innerHTML = "";
  if (spine) els.timelineContainer.appendChild(spine);

  SURPRISE_CONFIG.timeline.forEach((item, idx) => {
    const row = document.createElement("article");
    row.className = `timeline-item ${idx % 2 === 0 ? "timeline-left" : "timeline-right"}`;
    const title = item.title || `Memory ${idx + 1}`;

    row.innerHTML = `
      <div class="timeline-node" aria-hidden="true">${item.icon || "💖"}</div>
      <div class="timeline-card glass-panel">
        <div class="timeline-photo-frame">
          <img src="${item.image}" alt="${title}" class="timeline-photo" loading="lazy" decoding="async" />
        </div>
      </div>
    `;

    const photo = row.querySelector(".timeline-photo");
    if (item.imagePosition) photo.style.objectPosition = item.imagePosition;
    photo.setAttribute("role", "button");
    photo.setAttribute("tabindex", "0");
    photo.setAttribute("aria-label", `View photo: ${title}`);
    photo.addEventListener("click", () => openLightbox(idx));
    photo.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(idx);
      }
    });

    els.timelineContainer.appendChild(row);
  });
}

function renderLightboxSlide() {
  const item = SURPRISE_CONFIG.timeline[state.lightboxIndex];
  if (!item) return;

  const title = item.title || `Memory ${state.lightboxIndex + 1}`;
  els.lightboxImage.src = item.image;
  els.lightboxImage.alt = title;
  els.lightboxDate.textContent = item.date || "";
  els.lightboxTitle.textContent = title;
  els.lightboxCaption.textContent = item.caption || "";
  els.lightboxCounter.textContent = `${state.lightboxIndex + 1} / ${SURPRISE_CONFIG.timeline.length}`;
}

function openLightbox(index) {
  const total = SURPRISE_CONFIG.timeline.length;
  state.lightboxIndex = (index + total) % total;
  renderLightboxSlide();
  els.lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  els.lightbox.classList.add("hidden");
  document.body.style.overflow = "";
}

function stepLightbox(delta) {
  const total = SURPRISE_CONFIG.timeline.length;
  state.lightboxIndex = (state.lightboxIndex + delta + total) % total;
  renderLightboxSlide();
}

function initTimelineLightbox() {
  els.lightboxCloseBtn.addEventListener("click", closeLightbox);
  els.lightboxBackdrop.addEventListener("click", closeLightbox);
  els.lightboxPrevBtn.addEventListener("click", () => stepLightbox(-1));
  els.lightboxNextBtn.addEventListener("click", () => stepLightbox(1));

  window.addEventListener("keydown", (event) => {
    if (els.lightbox.classList.contains("hidden")) return;
    if (event.key === "Escape") closeLightbox();
    else if (event.key === "ArrowLeft") stepLightbox(-1);
    else if (event.key === "ArrowRight") stepLightbox(1);
  });

  let touchStartX = 0;
  els.lightbox.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  els.lightbox.addEventListener("touchend", (event) => {
    const diff = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 45) {
      stepLightbox(diff > 0 ? -1 : 1);
    }
  }, { passive: true });
}

/* ==========================================================================
   SECTION 5: SPECIAL BIRTHDAY LETTER (ANIMATED ENVELOPE + TYPEWRITER)
   ========================================================================== */
function createLetterParagraph(index) {
  const paragraph = document.createElement("p");
  if (SURPRISE_CONFIG.letter.emphasizedParagraphs.includes(index)) {
    paragraph.classList.add("letter-emphasized");
  }
  return paragraph;
}

function finishLetterTypingImmediately() {
  if (state.typewriterTimer) {
    clearTimeout(state.typewriterTimer);
    state.typewriterTimer = null;
  }

  els.letterBody.innerHTML = "";
  SURPRISE_CONFIG.letter.paragraphs.forEach((text, index) => {
    const p = createLetterParagraph(index);
    p.textContent = text;
    els.letterBody.appendChild(p);
  });

  state.letterTypingComplete = true;
  els.skipTypewriterBtn.classList.add("hidden");
  els.letterFooter.classList.remove("hidden");
}

function startLetterTypewriter() {
  els.letterBody.innerHTML = "";
  els.letterFooter.classList.add("hidden");
  els.skipTypewriterBtn.classList.remove("hidden");

  const paragraphs = SURPRISE_CONFIG.letter.paragraphs;
  let pIndex = 0;
  let charIndex = 0;

  const cursor = document.createElement("span");
  cursor.className = "type-cursor";

  let currentP = createLetterParagraph(pIndex);
  els.letterBody.appendChild(currentP);
  currentP.appendChild(cursor);

  function typeNextChar() {
    if (pIndex >= paragraphs.length) {
      cursor.remove();
      state.letterTypingComplete = true;
      els.skipTypewriterBtn.classList.add("hidden");
      els.letterFooter.classList.remove("hidden");
      return;
    }

    const activeText = paragraphs[pIndex];
    if (charIndex < activeText.length) {
      const ch = activeText[charIndex];
      cursor.insertAdjacentText("beforebegin", ch);
      charIndex += 1;
      const delay = ch === "." || ch === "," || ch === "—" ? 55 : 22;
      state.typewriterTimer = setTimeout(typeNextChar, delay);
    } else {
      pIndex += 1;
      charIndex = 0;
      if (pIndex < paragraphs.length) {
        currentP = createLetterParagraph(pIndex);
        els.letterBody.appendChild(currentP);
        currentP.appendChild(cursor);
        state.typewriterTimer = setTimeout(typeNextChar, 260);
      } else {
        typeNextChar();
      }
    }
  }

  state.typewriterTimer = setTimeout(typeNextChar, 450);
}

function initLetterSection() {
  function openEnvelope() {
    if (state.letterOpened) return;
    state.letterOpened = true;
    els.envelopeWrapper.classList.add("is-open");
    els.envelopeWrapper.setAttribute("aria-expanded", "true");
    els.envelopeHint.textContent = "💌 Unsealed with love just for you";

    const rect = els.envelopeWrapper.getBoundingClientRect();
    celebrationFX.burst(rect.left + rect.width / 2, rect.top + 80, 36);
    startLetterTypewriter();
  }

  els.envelopeWrapper.addEventListener("click", openEnvelope);
  els.envelopeWrapper.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openEnvelope();
    }
  });

  els.skipTypewriterBtn.addEventListener("click", finishLetterTypingImmediately);
}

/* ==========================================================================
   SECTION 6: INTERACTIVE BIRTHDAY QUIZ
   ========================================================================== */
function renderQuizQuestion() {
  const total = SURPRISE_CONFIG.quiz.length;
  const q = SURPRISE_CONFIG.quiz[state.currentQuizIndex];
  state.quizAnswered = false;

  els.quizCounter.textContent = `Question ${state.currentQuizIndex + 1} of ${total}`;
  els.quizQuestionText.textContent = q.question;

  // Progress dots
  els.quizDots.innerHTML = "";
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("span");
    dot.className = "quiz-dot";
    if (i < state.currentQuizIndex) dot.classList.add("is-done");
    else if (i === state.currentQuizIndex) dot.classList.add("is-current");
    els.quizDots.appendChild(dot);
  }

  // Options
  const letters = ["A", "B", "C", "D"];
  els.quizOptions.innerHTML = "";
  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option-btn";
    btn.innerHTML = `
      <span class="option-letter">${letters[idx] || idx + 1}</span>
      <span>${optText}</span>
    `;
    btn.addEventListener("click", () => handleQuizAnswer(idx, btn));
    els.quizOptions.appendChild(btn);
  });

  els.quizFeedback.classList.add("hidden");
  els.quizNextBtn.classList.add("hidden");
}

function handleQuizAnswer(selectedIndex, clickedBtn) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const q = SURPRISE_CONFIG.quiz[state.currentQuizIndex];
  state.quizAnswers[state.currentQuizIndex] = q.options[selectedIndex];
  const optionButtons = els.quizOptions.querySelectorAll(".quiz-option-btn");
  optionButtons.forEach((b) => (b.disabled = true));

  clickedBtn.classList.add("is-selected");
  els.feedbackEmoji.textContent = "💖";
  els.feedbackText.textContent = "Thanks for sharing your answer!";

  els.quizFeedback.classList.remove("hidden");
  els.quizNextBtn.classList.remove("hidden");

  const isLast = state.currentQuizIndex === SURPRISE_CONFIG.quiz.length - 1;
  els.quizNextBtn.querySelector("span").textContent = isLast ? "See Your Message 💖" : "Next Question →";
  if (isLast) sendQuizAnswers();
}

function setQuizEmailStatus(message, isError = false) {
  els.quizEmailStatus.textContent = message;
  els.quizEmailStatus.classList.toggle("is-error", isError);
}

async function sendQuizAnswers() {
  if (state.quizEmailSending || state.quizEmailSent) return;

  const { serviceId, templateId, publicKey, recipient } = SURPRISE_CONFIG.quizEmail;
  if (![serviceId, templateId, publicKey].every(value => typeof value === "string" && value.trim())) {
    setQuizEmailStatus(
      "Email setup is incomplete. Check the EmailJS Service ID, Template ID, and Public Key in script.js.",
      true
    );
    els.quizEmailRetryBtn.classList.add("hidden");
    return;
  }

  const missingAnswerIndex = SURPRISE_CONFIG.quiz.findIndex((question, index) =>
    typeof state.quizAnswers[index] !== "string" || !state.quizAnswers[index].trim()
  );
  if (missingAnswerIndex !== -1) {
    setQuizEmailStatus(
      `Question ${missingAnswerIndex + 1} has no answer. Please replay the quiz before sending.`,
      true
    );
    els.quizEmailRetryBtn.classList.add("hidden");
    return;
  }

  state.quizEmailSending = true;
  els.quizEmailRetryBtn.disabled = true;
  els.quizEmailRetryBtn.classList.add("hidden");
  els.quizRetryBtn.disabled = true;
  setQuizEmailStatus("Loading EmailJS...");

  const answers = SURPRISE_CONFIG.quiz
    .map((question, index) => `${index + 1}. ${question.question}\nAnswer: ${state.quizAnswers[index]}`)
    .join("\n\n");
  const submittedAt = new Date().toLocaleString();
  let phase = "loading";

  try {
    const emailjs = await ensureEmailJsSdk();

    phase = "initializing";
    if (!state.quizEmailInitialized) {
      emailjs.init({ publicKey });
      state.quizEmailInitialized = true;
    }

    phase = "sending";
    setQuizEmailStatus(`Sending your answers to ${recipient}...`);
    await emailjs.send(
      serviceId,
      templateId,
      {
        title: "Birthday Quiz Answers",
        name: SURPRISE_CONFIG.recipientName,
        time: submittedAt,
        message: answers,
        email: recipient,
        quiz_answers: answers,
        submitted_at: submittedAt
      }
    );
    state.quizEmailSent = true;
    setQuizEmailStatus(`Your answers were emailed to ${recipient}.`);
  } catch (error) {
    const details = error && (error.text || error.message || (typeof error === "string" ? error : ""));
    const statusCode = error && Number(error.status);
    if (phase === "loading") {
      setQuizEmailStatus(
        `EmailJS SDK could not load. Check your connection or content blocker, then retry. ${details || ""}`.trim(),
        true
      );
    } else if (phase === "initializing") {
      setQuizEmailStatus(
        `EmailJS could not initialize. Verify the Public Key in script.js. ${details || ""}`.trim(),
        true
      );
    } else if (statusCode) {
      let guidance = "Verify the service ID, template ID, public key, and allowed website origin in EmailJS.";
      if (statusCode === 401 || statusCode === 403) {
        guidance = "Verify the Public Key and that this website's origin is allowed in EmailJS.";
      } else if (statusCode === 404) {
        guidance = "Verify the EmailJS Service ID and Template ID in script.js.";
      }
      setQuizEmailStatus(
        `Email sending failed (status ${statusCode}). ${details || guidance} ${details ? guidance : ""}`.trim(),
        true
      );
    } else {
      setQuizEmailStatus(
        `Email sending failed, likely because of a network connection problem. Check your connection and EmailJS configuration, then retry. ${details || ""}`.trim(),
        true
      );
    }
    els.quizEmailRetryBtn.classList.remove("hidden");
  } finally {
    state.quizEmailSending = false;
    els.quizEmailRetryBtn.disabled = false;
    els.quizRetryBtn.disabled = false;
  }
}

function showQuizResults() {
  els.quizPlayView.classList.add("hidden");
  els.quizResultView.classList.remove("hidden");
  els.quizRetryBtn.disabled = state.quizEmailSending;

  els.resultBadge.textContent = "💌";
  els.resultTitle.textContent = "Thank you for sharing your answers!";
  els.resultMessage.textContent = "Your answers mean so much to me. 💖";

  const rect = els.quizResultView.getBoundingClientRect();
  celebrationFX.burst(rect.left + rect.width / 2, rect.top + 80, 52);
}

function initQuiz() {
  renderQuizQuestion();

  els.quizNextBtn.addEventListener("click", () => {
    if (state.currentQuizIndex < SURPRISE_CONFIG.quiz.length - 1) {
      state.currentQuizIndex += 1;
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  });

  els.quizEmailRetryBtn.addEventListener("click", sendQuizAnswers);

  els.quizRetryBtn.addEventListener("click", () => {
    state.currentQuizIndex = 0;
    state.quizAnswers = [];
    state.quizEmailSent = false;
    els.quizEmailStatus.textContent = "";
    els.quizEmailStatus.classList.remove("is-error");
    els.quizEmailRetryBtn.classList.add("hidden");
    els.quizResultView.classList.add("hidden");
    els.quizPlayView.classList.remove("hidden");
    renderQuizQuestion();
  });
}

/* ==========================================================================
   SECTION 7: A LITTLE BOX OF FEELINGS & REPLAY ENTIRE EXPERIENCE
   ========================================================================== */
function initFinalSurprise() {
  els.unlockFinalSurpriseBtn.addEventListener("click", () => {
    els.unlockFinalSurpriseBtn.classList.add("hidden");
    els.unlockFinalSurpriseBtn.setAttribute("aria-expanded", "true");
    els.feelingsContent.classList.remove("hidden");
    els.feelingsContent.setAttribute("aria-hidden", "false");
    els.feelingTriggers[0].focus();
  });

  els.feelingTriggers.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (state.openedFeelings.has(index)) return;

      state.openedFeelings.add(index);
      button.setAttribute("aria-expanded", "true");
      button.closest(".feeling-card").classList.add("is-open");
      button.parentElement.querySelector(".feeling-letter").setAttribute("aria-hidden", "false");

      if (state.openedFeelings.size === els.feelingTriggers.length) {
        els.finalRevealCard.classList.remove("hidden");
      }
    });
  });

  els.replayNotesBtn.addEventListener("click", replayFeelingNotes);
  els.replaySurpriseBtn.addEventListener("click", replayEntireSurprise);
}

function replayFeelingNotes() {
  state.openedFeelings.clear();
  els.finalRevealCard.classList.add("hidden");
  els.feelingTriggers.forEach((button) => {
    button.setAttribute("aria-expanded", "false");
    button.closest(".feeling-card").classList.remove("is-open");
    button.parentElement.querySelector(".feeling-letter").setAttribute("aria-hidden", "true");
  });
}

function resetFinalSurpriseGate() {
  els.unlockFinalSurpriseBtn.classList.remove("hidden");
  els.unlockFinalSurpriseBtn.setAttribute("aria-expanded", "false");
  els.feelingsContent.classList.add("hidden");
  els.feelingsContent.setAttribute("aria-hidden", "true");
  replayFeelingNotes();
}

function replayEntireSurprise() {
  // Reset interactive states cleanly
  state.unlocked = false;
  state.candlesBlown = false;
  state.letterOpened = false;
  state.letterTypingComplete = false;
  state.currentQuizIndex = 0;
  state.quizAnswered = false;
  state.quizAnswers = [];
  state.quizEmailSent = false;
  state.wrongAttempts = 0;

  if (state.typewriterTimer) {
    clearTimeout(state.typewriterTimer);
    state.typewriterTimer = null;
  }

  // Reset Password screen
  els.passwordInput.value = "";
  els.passwordError.textContent = "";
  els.lockIcon.textContent = "🔐";
  els.lockEmblem.classList.remove("is-unlocked");
  els.passwordHintText.classList.add("hidden");
  els.hintToggleBtn.textContent = "Need a little hint? 💭";

  // Reset Cake
  els.candlesRow.classList.remove("is-blown");
  els.birthdayWishReveal.classList.add("hidden");
  els.blowCandlesBtn.innerHTML = "<span>Blow Out the Candles 🕯️✨</span>";

  // Reset Letter Envelope
  els.envelopeWrapper.classList.remove("is-open");
  els.envelopeWrapper.setAttribute("aria-expanded", "false");
  els.envelopeHint.textContent = "✨ Tap the envelope to unseal your letter ✨";
  els.letterBody.innerHTML = "";
  els.letterFooter.classList.add("hidden");
  els.skipTypewriterBtn.classList.add("hidden");

  // Reset Quiz
  els.quizResultView.classList.add("hidden");
  els.quizPlayView.classList.remove("hidden");
  els.quizEmailStatus.textContent = "";
  els.quizEmailStatus.classList.remove("is-error");
  els.quizEmailRetryBtn.classList.add("hidden");
  renderQuizQuestion();

  // Reset the final surprise gate and letters
  resetFinalSurpriseGate();

  // Hide Journey & Return to Section 1
  els.progressHeader.classList.add("hidden");
  els.mainJourney.classList.add("hidden");
  els.body.classList.add("state-locked");

  els.sectionPassword.classList.add("hidden");
  els.sectionPassword.classList.remove("is-active");
  els.sectionWelcome.classList.remove("hidden", "is-leaving");
  els.sectionWelcome.classList.add("is-active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ==========================================================================
   SCROLL REVEAL OBSERVER & PROGRESS INDICATOR
   ========================================================================== */
function observeScrollReveals() {
  const revealTargets = document.querySelectorAll(".reveal-on-scroll, .timeline-item");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealTargets.forEach((el) => {
    el.classList.remove("is-visible");
    io.observe(el);
  });

  // Active nav highlight spy
  const sections = document.querySelectorAll(".journey-section");
  const navSpy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          els.navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.dataset.section === id);
          });
        }
      });
    },
    { rootMargin: "-35% 0px -50% 0px" }
  );

  sections.forEach((sec) => navSpy.observe(sec));
}

function updateScrollProgress() {
  if (!state.unlocked) return;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 1;
  const pct = Math.round(ratio * 100);

  els.progressFill.style.width = `${pct}%`;
  els.progressTrack.setAttribute("aria-valuenow", String(pct));
  els.progressPercentText.textContent = `${pct}% Explored`;
}

/* ==========================================================================
   BOOT APPLICATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  hydratePersonalizedContent();
  initAmbientCanvas();
  initCustomCursor();
  musicController.init();
  initWelcomeAndPassword();
  initCakeInteraction();
  renderTimeline();
  initTimelineLightbox();
  initLetterSection();
  initQuiz();
  initFinalSurprise();

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
});
