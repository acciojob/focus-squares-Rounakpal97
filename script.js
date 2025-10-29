//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    squares.forEach((s) => {
      if (s !== square) {
        s.style.backgroundColor = "#6F4E37"; // Coffee color
      } else {
        s.style.backgroundColor = "#E6E6FA"; // Lavender (hovered one)
      }
    });
  });

  square.addEventListener("mouseleave", () => {
    squares.forEach((s) => {
      s.style.backgroundColor = "#E6E6FA"; // Reset all to Lavender
    });
  });
});
