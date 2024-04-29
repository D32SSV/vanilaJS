let hexBtn = document.querySelector(".hex-btn");
let rgbBtn = document.querySelector(".rgb-btn");
let hexCopyBtn = document.querySelector(".hex-copy-color");
let rgbCopyBtn = document.querySelector(".rgb-copy-color");

let data = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function generateRandom(val) {
  return Math.floor(Math.random() * val);
}

function generateHexColor() {
  let code = "#";
  let i = 0;
  while (i < 6) {
    let f = generateRandom(data.length);
    code += data[f];
    i++;
  }
  return code;
}

function generateRGBColor() {
  let r = document.getElementById("red").value;
  let g = document.getElementById("green").value;
  let b = document.getElementById("blue").value;
  // console.log(`rgb(${r},${g},${b})`);
  return `rgb(${r},${g},${b})`;
}

// console.log(generateHexColor());
hexBtn.addEventListener("click", () => {
  let colorCode = generateHexColor();
  document.querySelector(".hex-color-value").textContent = colorCode;
  document.querySelector(".hex-color-container").style.backgroundColor =
    colorCode;
});

rgbBtn.addEventListener("click", () => {
  let colorCode = generateRGBColor();
  document.querySelector(".rgb-color-value").textContent = colorCode;
  document.querySelector(".rgb-color-container").style.backgroundColor =
    colorCode;
});

// -------------COPYING FX
function copyToClipboard(value) {
  navigator.clipboard.writeText(value);
}
hexCopyBtn.addEventListener("click", () => {
  let colorCode = document.querySelector(".hex-color-value").textContent;
  copyToClipboard(colorCode);
  alert('Color Copied');
});

rgbCopyBtn.addEventListener("click", () => {
  let colorCode = document.querySelector(".rgb-color-value").textContent;
  copyToClipboard(colorCode);
  alert('Color Copied');
});
