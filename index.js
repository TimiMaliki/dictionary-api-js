const onBtn = document.querySelector(".on");
const offBtn = document.querySelector(".off");
const box = document.querySelector(".box");
const container = document.querySelector(".container");
const buttons = document.querySelector(".btn");

buttons.addEventListener("click", () => {
  lightMode();
});

function lightMode() {
  container.classList.toggle("dark");
  onBtn.style.color = "#000";
  offBtn.style.color = "#000";
  box.classList.toggle("slide");
  onBtn.classList.toggle("active");
  offBtn.classList.toggle("off");

  if (buttons.classList.toggle("dark")) {
    onBtn.style.color = "#fff";
  }
}
