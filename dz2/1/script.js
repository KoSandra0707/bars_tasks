const link = document.querySelector("a");
let isClick = false;
link.addEventListener("click", () => {
    link.style.color = "grey";
    isClick = true;
})

link.addEventListener("mouseover", () => {
    link.style.color = "green";
    link.style.textDecoration = "underline";
})

link.addEventListener("mouseout", () => {
    link.style.color = isClick ? "grey" : "black";
    link.style.textDecoration = "none";
})

link.addEventListener("mousedown", () => {
    link.style.color = "blue";
    link.style.textDecoration = "none";
})