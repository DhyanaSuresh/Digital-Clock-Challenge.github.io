const numbers = {
  0: ["A","B","C","D","E","F"],
  1: ["B","C"],
  2: ["A","B","G","E","D"],
  3: ["A","B","C","D","G"],
  4: ["F","G","B","C"],
  5: ["A","F","G","C","D"],
  6: ["A","F","E","D","C","G"],
  7: ["A","B","C"],
  8: ["A","B","C","D","E","F","G"],
  9: ["A","B","C","D","F","G"]
};

// create segments
const digits = document.querySelectorAll(".digit");

digits.forEach(digit => {
  ["A","B","C","D","E","F","G"].forEach(letter => {
    const seg = document.createElement("div");
    seg.className = "segment " + letter + " off";
    digit.appendChild(seg);
  });
});

// show number
function displayDigit(digit, num) {
  const segments = digit.querySelectorAll(".segment");

  segments.forEach(seg => seg.classList.add("off"));

  numbers[num].forEach(letter => {
    digit.querySelector("." + letter).classList.remove("off");
  });
}

// update clock
function updateClock() {
  const now = new Date();

  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  const time = h + m + s;

  digits.forEach((digit, i) => {
    displayDigit(digit, time[i]);
  });
}

setInterval(updateClock, 1000);
updateClock();
