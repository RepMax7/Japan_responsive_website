const btn = document.getElementById("menu-btn");
console.log("btn");

const navList = document.getElementById("navigation_list");
console.log("navList");

if (btn) {
  console.log("btn exists");
  btn.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
} else {
  console.log("btn doesnt exist yet");
}
// btn.addEventListener("click", () => {
// });
