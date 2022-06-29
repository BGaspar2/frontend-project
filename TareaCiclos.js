//Ejercicios Ciclos

/*1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.

Pista: anidamiento.*/
for (let x = 1; x <= 12; x++) {
    console.log("Tabla del: " + x);
    console.log("----------------");
    for (let y = 1; y <= 10; y++) {
        var mult = x * y;
        console.log(x + " x " + y + " = " + mult);
    }
    console.log("----------------");
    
}

/*2.Realice el equivalente con la declaración while y do-while*/