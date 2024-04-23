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
    let digits = String
    switch (true){
        case (n < 1000):
            return ns;
        case (n > 1000 && n < 1000000):
            digits = ns.substring(0 , ns.length - 3);
            return (digits+"K");
        case (n > 1000000):
            digits = ns.substring(0 , ns.length - 6);
            return (digits+"M");
    }
}

//ej7
function sumarRango(n1,n2){
    let sum = 0
    let aux = Number
    if (n1 === n2){
        return sum;
    }
    else{
        for (n1,n2; n1<=n2; n1++){
            sum += n1;
        }
        return sum;
    }
}

//ej8
let st = String;
let ch = String;
function numeroDeAes(st){
    let counter = 0
    for(let i = 0; i < st.length; i++)
        if (st[i] === "a"){
            counter += 1;
        }
    return counter;
}
function numeroDeCaracteres(st,ch){
    let counter = 0
    for(let i = 0; i < st.length; i++)
        if (st[i] === ch){
            counter += 1;
        }
    return counter;
}

//10


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
        console.log(likes(983)); // "983"
        console.log(likes(1900)); // "1K"
        console.log(likes(54000)); // "54K"
        console.log(likes(120800)); // "120K"
        console.log(likes(25222444)); // "25M"
        break;
    case 7:
        console.log(sumarRango(0, 10)); // 55
        console.log(sumarRango(12, 14)); // 39
        console.log(sumarRango(5, 5)); // 0
        break;
    case 8:
        console.log(numeroDeAes("abracadabra")); // 5
        console.log(numeroDeAes("etinol")); // 0
        console.log(numeroDeAes("")); // 0
        console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
        console.log(numeroDeCaracteres("MMMMM", "m")); // 0
        console.log(numeroDeCaracteres("eeee", "e")); // 4
        break;
}





