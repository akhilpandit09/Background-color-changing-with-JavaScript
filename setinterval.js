const body =document.body;
const buttonId = document.querySelector("button");
const intervalId = setInterval(() => {
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = rgb;
}, 1000);

buttonId.addEventListener("click", ()=>{
    clearInterval(intervalId);
    buttonId.textContent= body.style.background;
});