/*CSSOM

Para recuperar una propiedad o una variable CSS
getComputedStyle(element).getPropertyValue('--variable')

Para setear una variable CSS

element.style.setProperty('--variable','value')

document.documentElement
*/

const rootStyles = getComputedStyle(document.documentElement);
// console.log(rootStyles);

const h1 = document.documentElement.scrollHeight;
console.log(h1);
const h2 = document.documentElement.clientHeight;
console.log(h2);
console.log(h1-h2);

const scrollUnit = (h1 - h2)/100;
const rootStyle = document.documentElement.style;

addEventListener('scroll', () => {
    const sc = Math.round(scrollY / scrollUnit);
    rootStyle.setProperty('--width',sc);
    console.log(sc);
})


/* FONDO RGB*/

const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const rootStyless = document.documentElement.style;

const changeColorRed = e =>{
    rootStyless.setProperty('--red', e.target.value)   
}

const changeColorGreen = e =>{
    rootStyless.setProperty('--green', e.target.value)   
}

const changeColorBlue = e =>{
    rootStyless.setProperty('--blue', e.target.value)   
}

red.addEventListener('change', e => {
    changeColorRed(e)
})

red.addEventListener('mousemove', e => {
    changeColorRed(e)
})

green.addEventListener('change', e => {
    changeColorGreen(e)
})

green.addEventListener('mousemove', e => {
    changeColorGreen(e)
})

blue.addEventListener('change', e => {
    changeColorBlue(e)
})

blue.addEventListener('mousemove', e => {
    changeColorBlue(e)
})