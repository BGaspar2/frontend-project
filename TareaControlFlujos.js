/*
1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.

El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
if(diaSemana == "Lunes"){
    console.log("Monday");
}
else if(diaSemana == "Martes"){
    console.log("Tuesday");
}
else if(diaSemana == "Miercoles"){
    console.log("Wednesday");
}
else if(diaSemana == "Jueves"){
    console.log("Thursday");
}
else if(diaSemana == "Viernes"){
    console.log("Friday");
}
else if(diaSemana == "Sabado"){
    console.log("Saturday");  
}
else if(diaSemana == "Domingo"){
    console.log("Sunday");   
}
*/
var diaSemana = "Miercoles";

switch (diaSemana) {
  case "Lunes":
    console.log("Monday");
    break;
  case "Martes":
    console.log("Tuesday");
    break;
  case "Miercoles":
    console.log("Wednesday");
    break;
  case "Jueves":
    console.log("Thursday");
    break;
  case "Viernes":
    console.log("Friday");
    break;
  case "Sabado":
    console.log("Saturday");  
    break;
  case "Domingo":
    console.log("Sunday");  
    break;

  default: 
  console.log("Errpr");
    break;
}


/*
2.Escribir un programa que según el total de la compra, se agregue un valor de envio.

Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3

Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5

Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7

Si la compra supera los $50 el gasto de envío será gratuito
*/
var totalCompra = 45;
if(totalCompra <= 10){
    totalCompra +=3;
    console.log("Total compra + envio:" + totalCompra);
}
else if(totalCompra <= 20 && totalCompra>10){
    totalCompra +=5;
    console.log("Total compra + envio:" + totalCompra);
}
else if(totalCompra <= 50 && totalCompra>20){
    totalCompra +=7;
    console.log("Total compra + envio:" + totalCompra);
}
else if(totalCompra > 50){
    console.log("Total compra + envio(gratis):" + totalCompra);
}