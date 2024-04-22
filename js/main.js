//ej1
let psw = String
function contrasenaValida(psw){
    if(psw === "2Fj(jjbFsuj" || psw === "eoZiugBf&g9"){
        return true;
    }
    else{
        return false;
    }
}

//ej2
let edad = Number;
let ingresos = Number;
function calcularImpuestos(edad,ingresos){
    if(edad >= 18 && ingresos >= 1000){
        return (ingresos*0.4);
    }
    else{
        return 0;
    }
}

//ej3
let peso = Number;
let altura = Number;
function bmi(peso,altura){
    imc = peso/(altura*altura);
    switch (true){
        case (imc < 18.5):
            return "Bajo de peso";

        case (18.5 < imc && imc < 24.9):
            return "Normal";

        case (25 < imc && imc < 29.9):
            return "Sobrepeso";

        case (imc > 30):
            return "Obeso";
    }
}

//ej4
let arr = Array();
function imprimirArreglo(st1,st2,st3,st4){
    arr.push(st1,st2,st3,st4);
    arr.forEach((item) => console.log(item))
}

//ej5
let n1 = Number
let n2 = Number
function contarRango(n1,n2){
    let counter = 0;
    for (n1,n2; n1<n2; n1++){
        counter = counter +1;
    }
    counter -= 1
    return counter;
}

//ej6
let n = Number

function likes(n){
    let ns = `${n}`
    switch (true){
        case (n < 1000):
            return n;
        case (n > 1000 && n > 10000):
            let digits = ns.substring(0 , ns.length - 3)
            return n
    }
}
let op = parseInt(prompt('Seleccione que ejercicio quiere ver (1-17) o 0 para salir'))

switch(op){
    case 1:
        console.log(contrasenaValida("2Fj(jjbFsuj"));
        console.log(contrasenaValida("eoZiugBf&g9"));
        console.log(contrasenaValida("hola"));
        console.log(contrasenaValida(""));
        break;
    case 2:
        console.log(calcularImpuestos(18, 1000)); // 400
        console.log(calcularImpuestos(40, 10000)); // 4000
        console.log(calcularImpuestos(17, 5000)); // 0
        console.log(calcularImpuestos(30, 500)); // 0
        break;
    case 3:
        console.log(bmi(65, 1.8)) // "Normal"
        console.log(bmi(72, 1.6)) // "Sobrepeso"
        console.log(bmi(52, 1.75)) // "Bajo de peso"
        console.log(bmi(135, 1.7)) // "Obeso"
        break;
    case 4:
        imprimirArreglo(1, "Hola", 2, "Mundo");
        break;
    case 5:
        console.log(contarRango(1, 9)) // 7
        console.log(contarRango(1332, 8743)) // 7410
        console.log(contarRango(5, 6)) // 0
        break;
    case 6:
        console.log(likes(1900)) // "1K"
        break;

}





