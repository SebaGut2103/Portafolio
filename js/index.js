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
const y = 150; // Adjusted to make the sprite smaller and centered
const speed = 3; // Slower speed for smoother animation

function updateFrame() {
    currentFrame = ++currentFrame % cols;
    const srcX = currentFrame * width;
    const srcY = 0; // Assuming the first row for right movement
    return { srcX, srcY };
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const { srcX, srcY } = updateFrame();
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width / 2, height / 2); // Scaled down
    x += speed;
    if (x > canvas.width) x = -width / 2; // Reset position
}

character.onload = function () {
    setInterval(draw, 100);
};