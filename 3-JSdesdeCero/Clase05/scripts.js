//CREAR ARRAY
let arr = [1,2,3,4];
//AGREGAR VALOR A UN ARRAY
arr.push(5);
//QUITAR ELEMENTO DE UN ARRAY
arr.pop();
//AGREGAR VALOR AL INICIO DE UN ARRAY
arr.unshift('Nuevo');
//QUITAR EL PRIMER VALOR DE UN ARRAY
arr.shift();
//AGREGAR ARRAY EN CUALQUIER POSICION
let arrayp = ['PERU','COLOMBIA','BOLIVIA','MEXICO'];
//AGREGA UN ELEMENTO Y PERMITE ELIMINAR UN ELEMENTO
arrayp.splice(2,0,'CHILE','ECUADOR')

'Hola mama'.split('');

'Hola mama'.split('').reverse();

const reverseText = string => string.split('').reverse().join('');

reverseText('Luigi');


let abc = ['B','D','A','C'];
abc.sort();
abc.sort().reverse();

let numbers = [2,10,20,35,45,100,300,1000];

numbers.sort((a,b) => a - b);