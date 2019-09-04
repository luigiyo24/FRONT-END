function HolaMundo(){
    alert("Hola Mundo");
}

const title = document.getElementById("title");
//title.addEventListener('eventName',eventHandler)
title.addEventListener('click',() =>{
    alert('Hola Mundo');
})
 
const h2 = document.getElementById("h2");
const h2m = () => alert("H2");
h2.addEventListener('click',h2m);


const hola = e => alert(e.target.textContent);
document.querySelector('button').addEventListener('click', e => {
    hola(e);
});
