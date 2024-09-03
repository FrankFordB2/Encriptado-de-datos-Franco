


let pregunta =  prompt ('ingrese su contrasena.');


if (pregunta === 'hola') {
            alert ('correcto disfruta del encriptador');

            }   else {window.location.href = pregunta;
            alert('error');
            
    }
// VARIABLES

const cajaMaster = document.getElementsByClassName('caja_master');
const textArea = document.getElementById("tex_encriptar");
const mensaje = document.getElementById("desencritarTexto");
let copiar = document.getElementById('botoncopiar');
let parrafo = document.getElementById ('TextoParrafo');
let titulo = document.getElementById ('textoTitulo');
let mensajecopiar = document.getElementById ('mensajecopiado');
const modalVent = document.getElementById ("modalventana");
const listaDeAyuda = document.getElementById('lista_ayuda1');
const botonayuda = document.getElementById('boton_ayuda_id');

// const noHayTexto = document.getElementById ('noHayTexto');
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


// STYLOS INICIO

copiar.style.display = 'none';
mensajecopiar.style.display = 'none';
textArea.focus();
modalVent.style.display = 'none';
listaDeAyuda.style.display = 'none';


// FUNCION AYUDA

function boton_ayuda () {
    if (listaDeAyuda.style.display === 'none' || listaDeAyuda.style.display === '')
    {listaDeAyuda.style.display = 'block';
    } else {
        listaDeAyuda.style.display = 'none'
    }
}
//  FUNCION CERRAR MODAL CON CLICK Y ESCAPE ERROR

modalVent.onclick = function() {
    modalVent.style.display = "none";
    
}
listaDeAyuda.onclick = function() {
    listaDeAyuda.style.display = 'none';
    
}

document.onkeydown = function(event) {
    if (event.key === "Escape") {
        modalVent.style.display = "none";
        listaDeAyuda.style.display = 'none';
    }
}
window.onclick = function(info) {
    if (info.target == modalVent) {
        modalVent.style.display = "none";
        listaDeAyuda.style.display = 'none';
    }
}

// FUNCION CERRAR MODAL

function cerrarmodal() {
    textArea.focus();
    modalVent.style.display = 'none';
    }
    
// window.onclick = function(event) {
//     if (event.target !== listaDeAyuda) {
//         listaDeAyuda.style.display = 'none';
//     }
// }
// FUNCION BOTONES
function reset() {
    const textArea = document.getElementById("tex_encriptar");
    textArea.value = '';
    textArea.focus();
    const mensaje = document.getElementById("desencritarTexto");
    mensaje.value = '';
    mensaje.style.backgroundImage = '';
    parrafo.style.display = '';
    titulo.style.display = '';
    copiar.style.display = 'none';
    listaDeAyuda.style.display = 'none';}
    
    
// ENCRIPTAR

function btnEncriptar() {
    
    if  (textArea.value === ''){
    modalVent.style.display = '';
    
    }
    else {
    
    const textoEncriptado = encriptar(textArea.value)
    
    mensaje.value = textoEncriptado;
    textArea.value = '';
    mensaje.style.backgroundImage = 'none';
    copiar.style.display = '';
    parrafo.style.display = 'none';
    titulo.style.display = 'none';
    copiar.focus();
    listaDeAyuda.style.display = 'none';
    }
    
}
// DESENCRIPTAR

function btndesencriptar() {
    if  (textArea.value === ''){
        modalVent.style.display = '';
        // cerrarmodal.style.display = 'block';    
        // noHayTexto.style.display = 'block'    
        }
        else {
    const textoEncriptado = desencriptar(textArea.value)
    
    mensaje.value = textoEncriptado;
    textArea.value = '';
    copiar.style.display = '';
    parrafo.style.display = 'none';
    titulo.style.display = 'none';
    mensaje.style.backgroundImage = 'none';
    copiar.focus();
    listaDeAyuda.style.display = 'none';
}

}

// FUNCION COPIAR

function btncopiar() {
    listaDeAyuda.style.display = 'none';
    const texto = document.getElementById('desencritarTexto');

    
    texto.select();
    texto.setSelectionRange(0, 99999);
    
    try {
        
        document.execCommand('copy');
        
        document.getElementById('mensajecopiado').textContent = 'Texto copiado';
        mensajecopiar.style.display = '';
        } catch (err) {
    document.getElementById('mensajecopiado').textContent = 'Error al copiar el texto';
    }
    
}

// FUNCION PEGAR 

async function btnpegar() {
    listaDeAyuda.style.display = 'none';
    try {
        
        const texto = await navigator.clipboard.readText();
        mensajecopiar.style.display = 'none';
        
        document.getElementById('tex_encriptar').value = texto;
        
        document.getElementById('mensaje').textContent = 'Texto pegado desde el portapapeles';
    } catch (err) {
                
        ;
    }
}

// ENCRIPTAR Y DESENCRIPTAR FUNCIONES


function encriptar (stringEncriptada){
let matrizCodigo = [["e", "b23"], ["i","f1e"], ["a", "i87"], ["o","31r"], ["u","42"]];
stringEncriptada = stringEncriptada.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}
return stringEncriptada
}

function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e", "b23"], ["i","f1e"], ["a", "i87"], ["o","31r"], ["u","42"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
    }


