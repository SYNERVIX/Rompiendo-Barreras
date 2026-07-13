// ==========================================
// INICIO DE AVENTURA
// ==========================================


const btnInicio = document.getElementById("btnInicio");


if(btnInicio){

btnInicio.addEventListener("click",()=>{


document
.getElementById("aprende")
.scrollIntoView({

behavior:"smooth"

});


});

}






// ==========================================
// TARJETAS EDUCATIVAS
// ==========================================


const botonesInfo =
document.querySelectorAll(".btn-info");



const mensajes=[


"Ejemplo: Pensar que una persona no puede lograr algo solo por su apariencia o procedencia.",


"Ejemplo: Creer que todos los integrantes de un grupo son iguales sin conocerlos.",


"Ejemplo: Excluir o tratar mal a alguien por sus características personales."

];



botonesInfo.forEach((boton,index)=>{


boton.addEventListener("click",()=>{


let caja =
boton.parentElement.querySelector(".mensaje-info");


caja.innerHTML = mensajes[index];


});

});








// ==========================================
// HISTORIAS INTERACTIVAS
// ==========================================


const opciones =
document.querySelectorAll(".opcion");



opciones.forEach(opcion=>{


opcion.addEventListener("click",()=>{


let resultado =
opcion.parentElement.querySelector(".resultado");



if(opcion.classList.contains("correcta")){


resultado.innerHTML =
"✅ Excelente decisión. Demuestras empatía, respeto e inclusión.";


resultado.style.color="#00b894";


}

else{


resultado.innerHTML =
"❌ Esta acción puede generar exclusión. Reflexiona sobre cómo afecta a los demás.";


resultado.style.color="#ff4757";


}



});

});







// ==========================================
// QUIZ
// ==========================================


let puntaje=0;


let preguntasRespondidas=0;



const respuestas =
document.querySelectorAll(".respuesta");



respuestas.forEach(respuesta=>{


respuesta.addEventListener("click",()=>{


if(respuesta.disabled){

return;

}



let grupo =
respuesta.parentElement;



grupo
.querySelectorAll("button")
.forEach(btn=>{

btn.disabled=true;

});



preguntasRespondidas++;



if(respuesta.classList.contains("correctaQuiz")){


puntaje +=25;


respuesta.style.background="#00b894";


}

else{


respuesta.style.background="#ff4757";


}



document
.getElementById("resultadoQuiz")
.innerHTML=
"Puntaje: "+puntaje;



});

});







// ==========================================
// PUPILETRAS
// ==========================================



const palabrasJuego=[


"RESPETO",

"EMPATIA",

"IGUALDAD",

"INCLUSION",

"EQUIDAD",

"DIVERSIDAD",

"TOLERANCIA",

"SOLIDARIDAD",

"AMISTAD",

"PREJUICIO",

"RACISMO",

"BURLA",

"EXCLUSION",

"ODIO",

"VIOLENCIA"


];



let palabrasEncontradas=[];



const letras =
document.querySelectorAll("#pupiletras td");



let seleccion="";



letras.forEach(letra=>{


letra.addEventListener("click",()=>{


letra.classList.toggle("letra-activa");



seleccion="";



document
.querySelectorAll(".letra-activa")
.forEach(l=>{


seleccion += l.textContent;


});



buscarPalabra();


});

});





function buscarPalabra(){



palabrasJuego.forEach(palabra=>{


if(

seleccion.includes(palabra)

&&

!palabrasEncontradas.includes(palabra)

){


palabrasEncontradas.push(palabra);



document
.getElementById("contadorPalabras")
.innerHTML =

palabrasEncontradas.length+
" / 15 palabras encontradas";



let avance =

(palabrasEncontradas.length/15)*100;



document
.getElementById("avanceJuego")
.style.width=
avance+"%";





document
.getElementById("mensajeJuego")
.innerHTML=

"🎉 Encontraste: "+palabra;



}



});





if(palabrasEncontradas.length===15){


document
.getElementById("mensajeJuego")
.innerHTML=

"🏆 ¡Excelente! Completaste la misión de igualdad.";


}



}









// ==========================================
// FORMULARIO
// ==========================================


const formulario =
document.getElementById("formOpinion");



const mensajeEnvio =
document.getElementById("mensajeEnvio");



if(formulario){


formulario.addEventListener("submit",()=>{


if(mensajeEnvio){


mensajeEnvio.style.display="block";


mensajeEnvio.innerHTML=

"✅ Gracias por compartir tu reflexión. Tu opinión ayuda a construir una sociedad más inclusiva.";


}



});


}







// ==========================================
// MENSAJE FINAL
// ==========================================



const btnFinal =
document.getElementById("btnMensajeFinal");



if(btnFinal){


btnFinal.addEventListener("click",()=>{


document
.getElementById("textoFinal")
.innerHTML=

"🌎 Recuerda: cada acción de respeto puede cambiar la vida de otra persona.";



});

}








// ==========================================
// ANIMACIONES SCROLL
// ==========================================



const elementos =

document.querySelectorAll(

".tarjeta, .historia, .video-card, .pupiletras-container, .participacion"

);



const observador =

new IntersectionObserver((entradas)=>{


entradas.forEach(entrada=>{


if(entrada.isIntersecting){


entrada.target.style.opacity="1";


entrada.target.style.transform=
"translateY(0)";


}


});


});



elementos.forEach(elemento=>{


elemento.style.opacity="0";


elemento.style.transform=
"translateY(40px)";


elemento.style.transition=
"0.8s";


observador.observe(elemento);


});
