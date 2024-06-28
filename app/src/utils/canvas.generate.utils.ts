// utils/canvas.generate.js
const { createCanvas, registerFont } = require("canvas");

const generateCoreCaptcha = (text: string) => {
  const canvas = createCanvas(200, 100);
  const ctx = canvas.getContext("2d");

  // Set background color
  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set text properties
  ctx.font = "30px Arial";
  ctx.fillStyle = "#000";

  // Rotate and draw each character individually
  const xStart = 20;
  const yStart = 50;
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    ctx.save();
    const x = xStart + i * 30;
    const y = yStart + (Math.random() * 10 - 5);
    ctx.translate(x, y);
    ctx.rotate(Math.random() * 0.4 - 0.2); // Rotate between -0.2 and 0.2 radians
    ctx.fillText(char, 0, 0);
    ctx.restore();
  }

  // Add noise lines
  for (let i = 0; i < 8; i++) {
    ctx.strokeStyle = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.stroke();
  }

  // Add random dots
  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      1,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  return canvas;
};

export const generateCaptcha = (text: string, convert?: string) => {
  if (convert === "base64") return generateCoreCaptcha(text).toDataURL();

  return generateCoreCaptcha(text);
};
