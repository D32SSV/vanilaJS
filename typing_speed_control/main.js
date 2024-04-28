let i = 0;
let text = document.getElementById("text").textContent;
let l = text.length;
let speed = 1;
console.log(text);
document.getElementById("text").textContent = "";
function controlText() {
  //   document.getElementById("text").innerText = "";
  if (i < l) {
    if (text.charAt(i) === " ") {
      // Add a non-breaking space to preserve spacing
      document.getElementById("text").innerHTML += "&nbsp;";
    } else {
      document.getElementById("text").innerText += text.charAt(i);
    }
    i++;
    setTimeout(() => {
      controlText();
    }, 100 / speed);
  }
}

document.getElementById("speed").addEventListener("input", () => {
  speed = document.getElementById("speed").value;
  document.getElementById("text").innerText = "";
  i = 0;
  controlText();
});

controlText();
