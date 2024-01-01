const btn = document.getElementById("button_element");
console.log("btn");
const navList = document.getElementById("navigation_list");
console.log("navList");
btn.addEventListener("click", function(){
    navList.classList.toggle('show');
});