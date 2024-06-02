const html = document.querySelector("html");
const code = "привет";
let str = "";
html.addEventListener("keydown", (e) => {
    str += e.key;
    if (str === code) 
        alert("правильный код!");
});