// const add = document.querySelector(".add");
// const sub = document.querySelector(".subtract");
// const resetCount = document.querySelector(".reset");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    resetColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    resetColor();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    resetColor();
  }
});

function resetColor() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "#fff";
  }
}

// add.addEventListener("click", () => {
//   count.innerHTML++;
// });
// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });
// sub.addEventListener("click", () => {
//   count.innerHTML--;
// })
