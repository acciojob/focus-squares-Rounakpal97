// Select all three squares
const squares = document.querySelectorAll(".square");

// For each square, attach event listeners
squares.forEach((square) => {
  // When hovered
  square.addEventListener("mouseover", () => {
    squares.forEach((s) => {
      if (s === square) {
        // hovered one remains Lavender
        s.style.backgroundColor = "#E6E6FA";
      } else {
        // others become Coffee
        s.style.backgroundColor = "#6F4E37";
      }
    });
  });

  // When mouse leaves any square
  square.addEventListener("mouseout", () => {
    squares.forEach((s) => {
      // Reset all to Lavender
      s.style.backgroundColor = "#E6E6FA";
    });
  });
});
