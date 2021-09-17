//DESAFIO 1

/* let numero1 = prompt("Ingresá un número");
let numero2 = prompt("Ingresá otro número");

let suma = parseInt(numero1) + parseInt(numero2);
let resta = parseInt(numero1) - parseInt(numero2);
let multiplicacion = parseInt(numero1) * parseInt(numero2);
let division = parseInt(numero1) / parseInt(numero2);
let resto = parseInt(numero1) % parseInt(numero2);

alert("El resultado de la suma es " + suma);
alert("El resultado de la resta es " + resta);
alert("El resultado de la multiplicacion es " + multiplicacion);
alert("El resultado de la division es " + division);
alert("El resultado del resto es " + resto);

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(resto); */


//===================================================================//

//DESAFIO 2

alert("El nombre de usuario es: coder");
alert("La contraseña es javascript2021");

let user = prompt("Por favor ingrese su nombre de ususario");

if (user == "CODER" || user == "coder") {
    let pass = prompt("Por favor ingrese su contraseña");
    if (pass === "javascript2021") {
        alert("Bienvenido");
    } else if (pass == "") {
        alert("No ingreso ninguna contraseña");
    } else {
        alert("Contraseña incorrecta");
    }
} else if (user == "") {
    alert("No ingreso ningun nombre de usuario");
} else {
    alert("Usuario incorrecto");
}