const input = document.getElementById("textInput");
let text;

document.addEventListener("DOMContentLoaded", () => {
  input.focus();
});
input.addEventListener("input", function (e) {
  e.preventDefault();
  text = e.target.value;
  generateText(text);
});

function generateText(text) {
  // Fetch the ASCII art from the server
  fetch("/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  })
    .then((response) => response.text())
    .then((asciiArt) => {
      document.getElementById("asciiOutput").textContent = asciiArt;
    })
    .catch((error) => console.error("Error generating ASCII art:", error));
}
