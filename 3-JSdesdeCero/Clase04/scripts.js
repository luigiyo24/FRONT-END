function saludar(persona){
    return 'Bienvenido a EDTeam, ' + persona    ;
}

console.log(saludar('Beto'));

const saludo = (persona) => {
    return 'Bienvenido ' + persona;
}
console.log(saludo('Luigi'));

const sumarTodos = (...numeros) => {
    let resultado = 0;
    for(let i= 0; i<numeros.length;i++){
        resultado += numeros[i];
        // console.log(numeros[i]);
    }
    return resultado;
}

console.log(sumarTodos(1,2,3,4,5,6));