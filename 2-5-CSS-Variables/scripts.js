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