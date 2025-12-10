const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let snowflakes = [];

function Snowflake() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.radius = Math.random() * 3 + 1;
  this.speed = Math.random() * 1 + 0.5;

  this.update = () => {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  };

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  };
}

function createSnow() {
  for (let i = 0; i < 200; i++) snowflakes.push(new Snowflake());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach(flake => {
    flake.update();
    flake.draw();
  });
  requestAnimationFrame(animate);
}

createSnow();
animate();
