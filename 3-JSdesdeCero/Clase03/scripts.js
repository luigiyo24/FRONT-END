if('a'==='a'){
    console.log('Son iguales');
}

if(4>3){
    console.log('Paso la condicion 1')
    if(5>2){
        console.log('Paso la condicion 1.1  ');
    }
}
else if(3>2){
    console.log('Paso la condicion 2');
}
else if(10>2){
    console.log('Paso la condicion 3');
}

console.log('Siempre me voy a ejecutar');

if(2>3 || 5>2){
    console.log('Se cumple alguna condicion');
}

if(10>2 && 5>2){
    console.log('Se cumplen ambas condiciones ');
}

let age = parseInt(prompt('Dime tu edad'),10);

if(age){
    if(age>=18){
        alert('Eres mayor de edad');
    }
    else{
        alert('Te faltan años');
    }
}
else{
    age = parseInt(prompt('Tu edad debe ser un numero'),10);
}

for(let i=0;i<=10;i++ ){
    console.log(i);
}


let password = 'EDTeam';
let pass;
do{
    pass = prompt('Ingree la contraseña');
}
while(pass !== password)