const getRandomInt = (max) => Math.floor(Math.random() * max);

const button = document.querySelector("button");
button.addEventListener("click", () => document.querySelector("body").style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`);