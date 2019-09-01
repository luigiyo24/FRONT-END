/*CSSOM

Para recuperar una propiedad o una variable CSS
getComputedStyle(element).getPropertyValue('--variable')

Para setear una variable CSS

element.style.setProperty('--variable','value')

document.documentElement
*/

const rootStyles = getComputedStyle(document.documentElement);
console.log(rootStyles);