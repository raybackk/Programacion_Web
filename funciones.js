var result;
power(base=5, exponent=5);//Funcion que recibe dos parametros y eleva el primero al eponende con valor del segundo
console.log("El numero "+base+" elevado al exponente "+exponent+" es: "+result)

getLargeInt(num1=20, num2=3)//Funcion que busca el mayor entre dos numeros
console.log("El numero mayor entre "+ num1+ " y "+ num2+" es: "+mayor)

serieFib=fibonacciSequence(limit=10)
console.log("La serie fibonacci con limite "+limit+" es la siguiente: "+serieFib)

const numbers=[1,2,3,4,5]
calculateAverage(numbers)
console.log("El promedio de la suma de 1+2+3+4+5 es igual a: "+promedio)


//Funciones
function power(base, exponent) {
    return result=Math.pow(base, exponent);
}

function getLargeInt(num1, num2) {
    mayor=0;
    if (num1>num2) {
        return mayor=num1;
    }else if (num2>num1) {
        return mayor=num2;
    }
    else{
        console.log("Los numeros son iguales")
    }
}

function fibonacciSequence(limit) {
    const arrayAux=[0,1]
    for (let i = 2; i <= limit; i++) {
        arrayAux.push(arrayAux[i-1]+arrayAux[i-2])
    }
    return arrayAux;
}

function calculateAverage(numbers) {
    let suma=0
    for (let i=0; i<5; i++) {
        suma=suma+numbers[i]
    }
    promedio=suma/5
    return promedio
}