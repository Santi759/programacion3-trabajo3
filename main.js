
let a = 10;
let b = 29;
let c = a+b;

console.log("La suma de " +a+ "+" +b+"="+c );

let nombreUsuario = prompt("Cual es tu nombre?")

console.log("Hola, " +nombreUsuario+"!")

let numA = 15;
let numB = 47;
let numC;

if(numA > numB){
  numC = numA
  console.log(numC+ " Es el número mayor")
}else if(numA<numB){
  numC = numB
  console.log(numC+ " Es el número mayor")
}else{
  console.log("Ambos números son iguales")
}

let numeroIngresado = prompt("Ingrese un número");

if(numeroIngresado % 2==0){
  console.log(numeroIngresado+ " es par");
}else{
  console.log(numeroIngresado+ " es impar");
}

let num = 10;

while(num >= 0 ){
  console.log(num);
  num--;
}

let numMayorCien;

do{
  numMayorCien = prompt("Ingrese un número mayor que 100");
  numMayorCien = Number(numMayorCien);
}while(numMayorCien <= 100 || isNaN(numMayorCien));

console.log(numMayorCien+", es mayor que 100");




const esPar = (numEntero)=>{
  if(numEntero % 2==0){
    console.log("El número "+numEntero+" es par:" +true);
  }else{
    console.log("El número "+numEntero+" es par:" +false);
  }
}

esPar(7);


const convertirCelciusaFarenheit =(celcius)=>{
  let farenheit = celcius * 1.8 + 32;
  console.log(celcius+"°C son "+farenheit+"°F ")
}

let gradosCelcius = prompt("Ingresar grados Celcius")
convertirCelciusaFarenheit(gradosCelcius);

let persona ={
  nombre: "Lionel",
  edad: 37,
  ciudad: "Miami",

  cambiarCiudad: function(){
    this.ciudad = prompt("Ingrese su ciudad:")
  },
};

console.log(persona);
persona.cambiarCiudad();
console.log(persona);


let libro = {
  titulo: "Harry Potter y la Piedra Filosofal",
  autor: "J.K. Rowling",
  año: 1997,

  antiguedadLibro: function(){
    let años = 2024 - this.año;
    if(años>= 10){
      console.log("El libro "+this.titulo+" es antiguo:"+true)
    }else{
      console.log("El libro "+this.titulo+" es antiguo:"+false)
    };
  }
}

console.log(libro);
libro.antiguedadLibro();


let numerosOriginales = [1,2,3,4,5,6,7,8,9,10];
let numerosMultiplicados = [];

for(let i=0; i<numerosOriginales.length;i++){
  let numMultiplicado = numerosOriginales[i]*2;
  numerosMultiplicados.push(numMultiplicado);
}
               
console.log("Números originales: "+numerosOriginales);
console.log("Números multiplicados por 2: "+numerosMultiplicados);

let pares =[];

for (let i=1; i<21; i++){
  if(i % 2==0){
    pares.push(i);
  }
};

console.log("Números pares: "+pares);

const parrafo = document.querySelectorAll("p");
const button = document.getElementById("boton");

const handleStylep = ()=>{
  parrafo.forEach(p =>{
    if(p.classList.contains("blue")){
      p.classList.remove('blue')
    }else{
      p.classList.add('blue')
    }
  })
}

button.addEventListener("click",()=>{
  handleStylep();
})

const boton = document.getElementById("botonText");
const inputTexto = document.getElementById("texto");

boton.addEventListener("click",()=>{
  const valorIngresado = inputTexto.value;
  alert("Has ingresado: "+valorIngresado);
});


const lista = document.getElementById("listaElementos");

lista.querySelectorAll("li").forEach((item)=>{
  item.addEventListener("click",(evento)=>{
    console.log(item.textContent);
  });
});

const campoTexto = document.getElementById("text");
const botonDeshabilitar = document.getElementById("botonDeshabilitar");
const botonHabilitar = document.getElementById("botonHabilitar");

botonDeshabilitar.addEventListener("click",()=>{
  campoTexto.disabled = true;
  console.log("Campo deshabilitado")
});

botonHabilitar.addEventListener("click",()=>{
  campoTexto.disabled = false;
  console.log("Campo Habilitado");
});


const emailInput = document.getElementById("email");
const botonCorreo = document.getElementById("botonCorreo");
const botonEliminar = document.getElementById("eliminarCorreo");
const correoGuardadoDisplay = document.getElementById("correoGuardado");

function guardarCorreo(){
  const email = emailInput.value;
  if(email){
    localStorage.setItem("correo",email);
    mostrarCorreo();
  }else{
    alert("Ingrese un correo valido")
  }
}

function mostrarCorreo(){
  const correoGuardado = localStorage.getItem("correo");
  if(correoGuardado){
    correoGuardadoDisplay.textContent = 'Correo Guardado: ' +correoGuardado;
  }
}

function eliminarCorreo(){
  localStorage.removeItem("correo");
  correoGuardadoDisplay.textContent = "";
}

botonCorreo.addEventListener("click", (event)=>{
  event.preventDefault();
  guardarCorreo();
});

botonEliminar.addEventListener("click",(event)=>{
  event.preventDefault();
  eliminarCorreo();
});

document.addEventListener("DOMContentLoaded",mostrarCorreo);




























