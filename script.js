// ✨ InfinityEra JS ✨

// Animated tagline rotation
const tagline = document.getElementById("tagline");
const lines = [
  "We build bots",
  "We design the feature",
  "We build your dream",
  "We create ideas"
];
let index = 0;

setInterval(() => {
  tagline.textContent = lines[index];
  index = (index + 1) % lines.length;
}, 2500);

// Scroll fade animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn");
    }
  });
});

document.querySelectorAll(".team-member").forEach(member => {
  observer.observe(member);
});
