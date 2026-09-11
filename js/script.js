"use strict";

const planets = {
  sun: {
    name: "Sun",
    image: "images/sun.jpg",
    distance: "Center of the solar system",
    diameter: "1,392,700 km",
    moons: "0",
    day: "About 27 Earth days at the equator",
    year: "Orbits the Milky Way in about 230 million years",
    atmosphere: "Hydrogen and helium plasma",
    temperature: "About 5,500°C at the surface",
    facts: ["The Sun contains more than 99% of the solar system's mass.", "Energy from the Sun supports life and weather on Earth.", "Its gravity keeps the planets in orbit."],
    color: "#ffb703",
    glow: "rgba(255,183,3,0.9)",
    video: "https://www.youtube.com/embed?listType=search&list=NASA%20Sun%20solar%20system"
  },
  mercury: {
    name: "Mercury",
    image: "images/mercury.jpg",
    distance: "57.9 million km",
    diameter: "4,879 km",
    moons: "0",
    day: "58.6 Earth days",
    year: "88 Earth days",
    atmosphere: "Very thin exosphere",
    temperature: "-180°C to 430°C",
    facts: ["Mercury is the smallest planet.", "It has extreme temperature changes.", "Its surface is covered with craters."],
    color: "#a6a6a6",
    glow: "rgba(220,220,220,0.65)",
    video: "https://www.youtube.com/embed?listType=search&list=NASA%20Mercury%20planet"
  },
  venus: {
    name: "Venus",
    image: "images/venus.jpg",
    distance: "108.2 million km",
    diameter: "12,104 km",
    moons: "0",
    day: "243 Earth days",
    year: "225 Earth days",
    atmosphere: "Thick carbon dioxide with sulfuric acid clouds",
    temperature: "About 465°C",
    facts: ["Venus is the hottest planet.", "It rotates in the opposite direction from most planets.", "Its clouds trap heat in a strong greenhouse effect."],
    color: "#d99f52",
    glow: "rgba(217,159,82,0.75)",
    video: "https://www.youtube.com/embed?listType=search&list=NASA%20Venus%20planet"
  },
  earth: {
    name: "Earth",
    image: "images/earth.jpg",
    distance: "149.6 million km",
    diameter: "12,742 km",
    moons: "1",
    day: "24 hours",
    year: "365.25 days",
    atmosphere: "Nitrogen, oxygen, argon and trace gases",
    temperature: "Average about 15°C",
    facts: ["Earth is the only known planet with life.", "About 71% of its surface is covered by water.", "Its magnetic field helps protect life from solar particles."],
    color: "#42a5f5",
    glow: "rgba(66,165,245,0.8)",
    video: "https://www.youtube.com/embed?listType=search&list=NASA%20Earth%20from%20space"
  },
  mars: {
    name: "Mars",
    image: "images/mars.jpg",
    distance: "227.9 million km",
    diameter: "6,779 km",
    moons: "2",
    day: "24.6 hours",
    year: "687 Earth days",
    atmosphere: "Thin carbon dioxide atmosphere",
    temperature: "Average about -63°C",
    facts: ["Mars is known as the Red Planet.", "Olympus Mons is the largest volcano in the solar system.", "Robotic missions have found evidence of ancient water."],
    color: "#dd5b3d",
    glow: "rgba(221,91,61,0.82)",
    video: "https://www.youtube.com/embed?listType=search&list=NASA%20Mars%20planet"
  },
  jupiter: {
    name: "Jupiter",
    image: "images/jupiter.jpg",
    distance: "778.5 million km",
    diameter: "139,820 km",
    moons: "95 confirmed moons",
    day: "9.9 hours",
    year: "11.86 Earth years",
    atmosphere: "Hydrogen, helium, ammonia and methane",
    temperature: "Cloud tops about -110°C",
    facts: ["Jupiter is the largest planet.", "The Great Red Spot is a giant storm.", "Its moon Europa may have a hidden ocean."],
    color: "#d7a86e",
    glow: "rgba(215,168,110,0.8)",
    video: "https://www.youtube.com/embed?listType=search&list=NASA%20Jupiter%20planet"
  },
  saturn: {
    name: "Saturn",
    image: "images/saturn.jpg",
    distance: "1.43 billion km",
    diameter: "116,460 km",
    moons: "146 confirmed moons",
    day: "10.7 hours",
    year: "29.45 Earth years",
    atmosphere: "Hydrogen and helium",
    temperature: "Cloud tops about -140°C",
    facts: ["Saturn is famous for its ring system.", "Its moon Titan has a thick atmosphere.", "Saturn is less dense than water."],
    color: "#e8c878",
    glow: "rgba(232,200,120,0.78)",
    video: "https://www.youtube.com/embed?listType=search&list=NASA%20Saturn%20planet"
  },
  uranus: {
    name: "Uranus",
    image: "images/uranus.jpg",
    distance: "2.87 billion km",
    diameter: "50,724 km",
    moons: "27",
    day: "17.2 hours",
    year: "84 Earth years",
    atmosphere: "Hydrogen, helium and methane",
    temperature: "About -195°C",
    facts: ["Uranus rotates on its side.", "Methane gives it a blue-green color.", "It has faint rings."],
    color: "#76e1e8",
    glow: "rgba(118,225,232,0.78)",
    video: "https://www.youtube.com/embed?listType=search&list=NASA%20Uranus%20planet"
  },
  neptune: {
    name: "Neptune",
    image: "images/neptune.jpg",
    distance: "4.5 billion km",
    diameter: "49,244 km",
    moons: "14",
    day: "16.1 hours",
    year: "164.8 Earth years",
    atmosphere: "Hydrogen, helium and methane",
    temperature: "About -200°C",
    facts: ["Neptune has the strongest winds measured in the solar system.", "Its moon Triton orbits backward.", "It was predicted mathematically before being observed."],
    color: "#3768ff",
    glow: "rgba(55,104,255,0.85)",
    video: "https://www.youtube.com/embed?listType=search&list=NASA%20Neptune%20planet"
  }
};

const videos = [
  { title: "Earth From Space", youtube: "https://www.youtube.com/embed?listType=search&list=NASA%20Earth%20from%20space", thumb: "images/earth.jpg", description: "A peaceful view of our home planet from orbit." },
  { title: "Our Solar System", youtube: "https://www.youtube.com/embed?listType=search&list=NASA%20solar%20system%20planets", thumb: "images/solar-system.jpg", description: "A tour across the planets, orbits and major objects in the solar system." },
  { title: "Solar System Exploration", youtube: "https://www.youtube.com/embed?listType=search&list=NASA%20solar%20system%20exploration", thumb: "images/mars.jpg", description: "Robots, spacecraft and scientific missions that help us understand space." },
  { title: "Space Exploration", youtube: "https://www.youtube.com/embed?listType=search&list=NASA%20space%20exploration", thumb: "images/sun.jpg", description: "Human curiosity, rockets and technology pushing beyond Earth." }
];

const galleryItems = [
  ["Sun", "https://commons.wikimedia.org/wiki/Special:FilePath/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg", "The star at the center of our solar system."],
  ["Mercury", "https://commons.wikimedia.org/wiki/Special:FilePath/Mercury_in_true_color.jpg", "A small cratered planet closest to the Sun."],
  ["Venus", "https://commons.wikimedia.org/wiki/Special:FilePath/Venus-real_color.jpg", "A bright world hidden under thick clouds."],
  ["Earth", "https://commons.wikimedia.org/wiki/Special:FilePath/The_Earth_seen_from_Apollo_17.jpg", "Our ocean planet, rich with life and weather."],
  ["Mars", "https://commons.wikimedia.org/wiki/Special:FilePath/OSIRIS_Mars_true_color.jpg", "The red planet with dust, volcanoes and ancient riverbeds."],
  ["Jupiter", "https://commons.wikimedia.org/wiki/Special:FilePath/Jupiter_and_its_shrunken_Great_Red_Spot.jpg", "A giant planet with bands, storms and many moons."],
  ["Saturn", "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia21/pia21047/PIA21047.jpg", "The ringed gas giant and one of the most beautiful planets."],
  ["Uranus", "https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg", "An ice giant tilted dramatically on its side."],
  ["Neptune", "https://commons.wikimedia.org/wiki/Special:FilePath/Neptune_Full.jpg", "A distant blue ice giant with powerful winds."],
  ["Astronauts", "https://commons.wikimedia.org/wiki/Special:FilePath/STS-134_EVA_3_Drew_feeds_helmet_camera_video_to_Michael_Fincke.jpg", "Human explorers trained to work beyond Earth."],
  ["Rocket", "https://commons.wikimedia.org/wiki/Special:FilePath/Artemis_I_Launch.jpg", "A launch vehicle that carries missions into space."],
  ["Galaxy", "https://commons.wikimedia.org/wiki/Special:FilePath/Andromeda_Galaxy_560mm_FL.jpg", "A huge system of stars, dust, gas and dark matter."]
].map(([title, image, description]) => ({ title, image, description }));

const quizQuestions = [
  { q: "Which planet is known as the Red Planet?", a: ["Earth", "Mars", "Venus", "Jupiter"], correct: 1 },
  { q: "Which planet is closest to the Sun?", a: ["Mercury", "Venus", "Mars", "Earth"], correct: 0 },
  { q: "Which planet has the most famous ring system?", a: ["Mars", "Saturn", "Neptune", "Mercury"], correct: 1 },
  { q: "What is the largest planet in our solar system?", a: ["Earth", "Uranus", "Jupiter", "Venus"], correct: 2 },
  { q: "How many moons does Earth have?", a: ["0", "1", "2", "4"], correct: 1 },
  { q: "Which planet is the hottest?", a: ["Mercury", "Venus", "Mars", "Neptune"], correct: 1 },
  { q: "Which planet rotates on its side?", a: ["Uranus", "Earth", "Jupiter", "Saturn"], correct: 0 },
  { q: "What object keeps planets in orbit through gravity?", a: ["The Moon", "The Sun", "Asteroids", "Comets"], correct: 1 },
  { q: "Which planet is farthest from the Sun?", a: ["Saturn", "Uranus", "Neptune", "Jupiter"], correct: 2 },
  { q: "What is the main gas in Earth's atmosphere?", a: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], correct: 1 }
];

let soundEnabled = false;
let audioVolume = Number(localStorage.getItem("spaceExplorerVolume") || 55) / 100;
let audioContext;
let currentPlanetKey = "earth";
const bgAudio = new Audio("audio/space-ambience.mp3");
const soundFiles = {
  click: "audio/rocket-launch.mp3",
  select: "audio/space-ambience.mp3",
  correct: "audio/background.mp3",
  wrong: "audio/background.mp3",
  complete: "audio/rocket-launch.mp3",
  rocket: "audio/rocket-launch.mp3"
};
let galleryIndex = 0;
let quizIndex = 0;
let quizScore = 0;
let answerLocked = false;
const explored = new Set(JSON.parse(localStorage.getItem("spaceExplorerMission") || "[]"));

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupAudioControls();
  setupGlobalButtons();
  setupImageFallbacks(document);
  initPlanetsPage();
  initVideosPage();
  initGalleryPage();
  initQuizPage();
});

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function setupGlobalButtons() {
  document.querySelectorAll(".btn, .feature-card, .media-card button, .gallery-card button").forEach((el) => {
    el.addEventListener("click", () => playSound("click"));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAllModals();
  });
  document.querySelectorAll(".modal-close, .modal-back").forEach((button) => {
    button.addEventListener("click", closeAllModals);
  });
  document.getElementById("planetSound")?.addEventListener("click", () => playSound("select"));
  document.getElementById("planetVideo")?.addEventListener("click", () => openQuickPlanetVideo(planets[currentPlanetKey]));
}

function setupAudioControls() {
  bgAudio.loop = true;
  bgAudio.volume = audioVolume;
  const sliders = document.querySelectorAll(".volume-slider");
  const toggles = document.querySelectorAll(".sound-toggle");
  sliders.forEach((slider) => {
    slider.value = String(Math.round(audioVolume * 100));
    slider.addEventListener("input", () => {
      audioVolume = Number(slider.value) / 100;
      bgAudio.volume = audioVolume;
      localStorage.setItem("spaceExplorerVolume", String(slider.value));
      sliders.forEach((other) => { other.value = slider.value; });
    });
  });
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => toggleSound());
  });
  updateSoundButtons();
}

function ensureAudioContext() {
  if (!audioContext) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) audioContext = new Ctx();
  }
  if (audioContext && audioContext.state === "suspended") audioContext.resume();
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  ensureAudioContext();
  updateSoundButtons();
  if (soundEnabled) {
    bgAudio.volume = audioVolume;
    bgAudio.play().catch(() => playTone("ambience"));
  } else {
    bgAudio.pause();
  }
}

function updateSoundButtons() {
  document.querySelectorAll(".sound-toggle").forEach((button) => {
    button.setAttribute("aria-pressed", String(soundEnabled));
    button.innerHTML = soundEnabled ? "&#128266; Sound ON" : "&#128263; Sound OFF";
  });
}

function playSound(type = "click") {
  if (!soundEnabled) return;
  const file = soundFiles[type];
  if (file) {
    const audio = new Audio(file);
    audio.volume = audioVolume;
    audio.play().catch(() => playTone(type));
    return;
  }
  playTone(type);
}

function playTone(type = "click") {
  ensureAudioContext();
  if (!audioContext) return;
  const patterns = {
    click: [520, 0.04],
    select: [740, 0.09],
    correct: [880, 0.13],
    wrong: [170, 0.16],
    complete: [660, 0.22],
    rocket: [120, 0.45],
    ambience: [240, 0.28]
  };
  const [freq, duration] = patterns[type] || patterns.click;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = type === "rocket" ? "sawtooth" : "sine";
  osc.frequency.setValueAtTime(freq, audioContext.currentTime);
  if (type === "rocket") osc.frequency.exponentialRampToValueAtTime(420, audioContext.currentTime + duration);
  gain.gain.setValueAtTime(0.001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.01, audioVolume * 0.18), audioContext.currentTime + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  osc.connect(gain).connect(audioContext.destination);
  osc.start();
  osc.stop(audioContext.currentTime + duration + 0.03);
}

function placeholderDataUri(title, color = "#55e6ff") {
  const safe = title.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 650"><defs><radialGradient id="g" cx="42%" cy="35%"><stop offset="0" stop-color="#fff"/><stop offset=".34" stop-color="${color}"/><stop offset="1" stop-color="#08122e"/></radialGradient></defs><rect width="900" height="650" fill="#050713"/><circle cx="450" cy="320" r="190" fill="url(#g)"/><g fill="#fff" opacity=".72"><circle cx="92" cy="88" r="3"/><circle cx="790" cy="126" r="2"/><circle cx="720" cy="520" r="3"/><circle cx="160" cy="500" r="2"/><circle cx="284" cy="146" r="2"/></g><text x="450" y="594" text-anchor="middle" fill="#f3f7ff" font-family="Arial" font-size="42" font-weight="700">${safe}</text><text x="450" y="632" text-anchor="middle" fill="#b7c4e8" font-family="Arial" font-size="22">Local image placeholder</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function setupImageFallbacks(root) {
  root.querySelectorAll("img[data-title], img").forEach((img) => {
    if (img.dataset.fallbackReady) return;
    img.dataset.fallbackReady = "true";
    img.addEventListener("error", () => {
      const title = img.dataset.title || img.alt || "Space Image";
      const color = img.dataset.color || "#55e6ff";
      img.src = placeholderDataUri(title, color);
    });
  });
}

function initPlanetsPage() {
  const solarSystem = document.getElementById("solarSystem");
  if (!solarSystem) return;
  buildSolarSystem(solarSystem);
  renderMission();
  if (location.hash === "#mission") {
    setTimeout(() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" }), 120);
  }
}

function buildSolarSystem(container) {
  container.innerHTML = `<button class="sun-core" type="button" data-planet="sun" aria-label="Open Sun information">Sun</button>`;
  const planetKeys = Object.keys(planets).filter((key) => key !== "sun");
  const sizes = [30, 39, 42, 36, 66, 62, 50, 48];
  planetKeys.forEach((key, index) => {
    const width = 170 + index * 68;
    const ring = document.createElement("div");
    ring.className = "orbit-ring";
    ring.style.width = `${width}px`;
    ring.style.height = `${width}px`;
    ring.style.setProperty("--speed", `${15 + index * 5}s`);
    const button = document.createElement("button");
    button.className = "planet-btn";
    button.type = "button";
    button.dataset.planet = key;
    button.setAttribute("aria-label", `Open ${planets[key].name} information`);
    button.innerHTML = `<span class="planet-sphere"></span><small>${planets[key].name}</small>`;
    button.style.setProperty("--size", `${sizes[index]}px`);
    button.style.setProperty("--planet", planets[key].color);
    button.style.setProperty("--glow", planets[key].glow);
    ring.appendChild(button);
    container.appendChild(ring);
  });
  container.querySelectorAll("[data-planet]").forEach((button) => {
    button.addEventListener("click", () => openPlanetModal(button.dataset.planet));
  });
}

function openPlanetModal(key) {
  const planet = planets[key];
  if (!planet) return;
  currentPlanetKey = key;
  playSound(key === "sun" ? "rocket" : "select");
  if (key !== "sun") {
    explored.add(key);
    localStorage.setItem("spaceExplorerMission", JSON.stringify([...explored]));
    renderMission();
  }
  document.getElementById("planetTitle").textContent = planet.name;
  const image = document.getElementById("planetImage");
  image.src = planet.image;
  image.alt = `${planet.name} image`;
  image.dataset.title = planet.name;
  image.dataset.color = planet.color;
  document.getElementById("planetStats").innerHTML = [
    ["Distance from Sun", planet.distance],
    ["Diameter", planet.diameter],
    ["Moons", planet.moons],
    ["Day", planet.day],
    ["Year", planet.year],
    ["Atmosphere", planet.atmosphere],
    ["Temperature", planet.temperature]
  ].map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");
  document.getElementById("planetFacts").innerHTML = planet.facts.map((fact) => `<li>${fact}</li>`).join("");
  setupImageFallbacks(document.getElementById("planetModal"));
  openModal("planetModal");
}

function openQuickPlanetVideo(planet) {
  const player = document.getElementById("quickPlanetVideo");
  player.src = planet.video;
  openModal("quickVideoModal");
}

function renderMission() {
  const list = document.getElementById("missionList");
  if (!list) return;
  const keys = Object.keys(planets).filter((key) => key !== "sun");
  list.innerHTML = keys.map((key) => {
    const done = explored.has(key);
    return `<div class="mission-item ${done ? "done" : ""}"><span>${planets[key].name}</span><strong>${done ? "✓" : "Locked"}</strong></div>`;
  }).join("");
  const count = Math.min(explored.size, 5);
  document.getElementById("missionCount").textContent = String(count);
  document.getElementById("missionBar").style.width = `${count * 20}%`;
  const complete = document.getElementById("missionComplete");
  if (explored.size >= 5 && complete.hidden) {
    complete.hidden = false;
    playSound("complete");
    playSound("rocket");
  } else if (explored.size < 5) {
    complete.hidden = true;
  }
  document.querySelector(".continue-mission")?.addEventListener("click", () => {
    closeAllModals();
    document.querySelector(".solar-system")?.scrollIntoView({ behavior: "smooth" });
  }, { once: true });
}

function initVideosPage() {
  const grid = document.getElementById("videoGrid");
  if (!grid) return;
  grid.innerHTML = videos.map((video, index) => `
    <article class="media-card">
      <div class="media-thumb" style="--placeholder:url('${placeholderDataUri(video.title)}')" role="img" aria-label="${video.title} thumbnail">${video.title}</div>
      <h3>${video.title}</h3>
      <p>${video.description}</p>
      <button class="btn btn-primary" type="button" data-video="${index}">▶ Watch</button>
    </article>
  `).join("");
  grid.querySelectorAll("[data-video]").forEach((button) => {
    button.addEventListener("click", () => openVideo(Number(button.dataset.video)));
  });
}

function openVideo(index) {
  const video = videos[index];
  const player = document.getElementById("videoPlayer");
  document.getElementById("videoTitle").textContent = video.title;
  document.getElementById("videoDescription").textContent = `${video.description} YouTube playback requires an internet connection.`;
  player.src = video.youtube;
  openModal("videoModal");
}

function initGalleryPage() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = galleryItems.map((item, index) => `
    <button class="gallery-card" type="button" data-gallery="${index}">
      <img src="${item.image}" alt="${item.title}" data-title="${item.title}" loading="lazy">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </button>
  `).join("");
  setupImageFallbacks(grid);
  grid.querySelectorAll("[data-gallery]").forEach((button) => {
    button.addEventListener("click", () => openGallery(Number(button.dataset.gallery)));
  });
  document.getElementById("prevImage")?.addEventListener("click", previousImage);
  document.getElementById("nextImage")?.addEventListener("click", nextImage);
}

function openGallery(index) {
  galleryIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[galleryIndex];
  const img = document.getElementById("galleryImage");
  img.src = item.image;
  img.alt = item.title;
  img.dataset.title = item.title;
  document.getElementById("galleryTitle").textContent = item.title;
  document.getElementById("galleryDescription").textContent = item.description;
  setupImageFallbacks(document.getElementById("galleryModal"));
  openModal("galleryModal");
}

function nextImage() {
  playSound("click");
  openGallery(galleryIndex + 1);
}

function previousImage() {
  playSound("click");
  openGallery(galleryIndex - 1);
}

function initQuizPage() {
  if (!document.getElementById("quizCard")) return;
  startQuiz();
  document.getElementById("nextQuestion").addEventListener("click", nextQuestion);
  document.getElementById("tryAgain").addEventListener("click", startQuiz);
}

function startQuiz() {
  quizIndex = 0;
  quizScore = 0;
  answerLocked = false;
  document.getElementById("quizCard").hidden = false;
  document.getElementById("resultCard").hidden = true;
  loadQuestion();
}

function loadQuestion() {
  const item = quizQuestions[quizIndex];
  answerLocked = false;
  document.getElementById("questionNumber").textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
  document.getElementById("quizScore").textContent = `Score: ${quizScore}`;
  document.getElementById("quizProgress").style.width = `${(quizIndex / quizQuestions.length) * 100}%`;
  document.getElementById("questionText").textContent = item.q;
  document.getElementById("feedback").hidden = true;
  document.getElementById("nextQuestion").hidden = true;
  document.getElementById("answerList").innerHTML = item.a.map((answer, index) => `<button class="answer-btn" type="button" data-answer="${index}">${String.fromCharCode(65 + index)}. ${answer}</button>`).join("");
  document.querySelectorAll(".answer-btn").forEach((button) => {
    button.addEventListener("click", () => checkAnswer(Number(button.dataset.answer)));
  });
}

function checkAnswer(index) {
  if (answerLocked) return;
  answerLocked = true;
  const item = quizQuestions[quizIndex];
  const correct = index === item.correct;
  if (correct) quizScore += 1;
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === item.correct) button.classList.add("correct");
    if (buttonIndex === index && !correct) button.classList.add("incorrect");
  });
  const feedback = document.getElementById("feedback");
  feedback.hidden = false;
  feedback.innerHTML = correct
    ? `<strong>Correct!</strong> Excellent choice.`
    : `<strong>Incorrect.</strong> Correct answer: ${item.a[item.correct]}.`;
  document.getElementById("quizScore").textContent = `Score: ${quizScore}`;
  document.getElementById("nextQuestion").hidden = false;
  playSound(correct ? "correct" : "wrong");
}

function nextQuestion() {
  quizIndex += 1;
  if (quizIndex >= quizQuestions.length) {
    calculateScore();
  } else {
    loadQuestion();
  }
}

function calculateScore() {
  localStorage.setItem("spaceExplorerQuizScore", String(quizScore));
  document.getElementById("quizProgress").style.width = "100%";
  document.getElementById("quizCard").hidden = true;
  document.getElementById("resultCard").hidden = false;
  document.getElementById("finalScore").textContent = `${quizScore} / ${quizQuestions.length}`;
  let message = "Keep learning and try again!";
  if (quizScore >= 9) message = "Excellent Space Explorer!";
  else if (quizScore >= 7) message = "Great job!";
  else if (quizScore >= 5) message = "Good attempt! Keep exploring!";
  document.getElementById("scoreMessage").textContent = message;
  playSound("complete");
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.hidden = false;
  const firstButton = modal.querySelector("button, video, a, input");
  firstButton?.focus();
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.hidden = true;
    modal.querySelectorAll("video").forEach((video) => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    });
    modal.querySelectorAll("iframe").forEach((frame) => frame.removeAttribute("src"));
  });
}

function closePlanetModal() { closeAllModals(); }
function loadPlanet(key) { openPlanetModal(key); }
function closeVideo() { closeAllModals(); }
function updateMissionProgress() { renderMission(); }
function completeMission() { renderMission(); }
