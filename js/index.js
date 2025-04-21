const canvas = document.getElementById("sprite");
const ctx = canvas.getContext("2d");

canvas.width = 650;
canvas.height = 350;

const character = new Image();
character.src = "Sprite/character.png";

const spriteWidth = 864;
const spriteHeight = 280;
const cols = 8;
const rows = 2;
const width = spriteWidth / cols;
const height = spriteHeight / rows;

let currentFrame = 0;
let x = 0;
const y = 125;
let speed = 3;
let direction = 1;

function updateFrame() {
  currentFrame = ++currentFrame % cols;
  const srcX = currentFrame * width;
  const srcY = direction === 1 ? 0 : height;
  return { srcX, srcY };
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const { srcX, srcY } = updateFrame();
  ctx.drawImage(character, srcX, srcY, width, height, x, y, width / 2, height / 2);

  x += speed * direction;

  if (x + width / 2 > canvas.width || x < -width / 2) {
    direction *= -1;
  }
}

character.onload = function () {
  setInterval(draw, 100);
};

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active"); 
    }
  });
}, {
  threshold: 0.1
});

reveals.forEach(reveal => {
  observer.observe(reveal);
});
