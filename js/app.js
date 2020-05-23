// Variables
const emaile = document.getElementById('email');
const asunto = document.getElementById('asunto');
const menu = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');


//Event Listener

eventListeners();

function eventListeners(){
    //Inicio de la aplicacion y deshabilitar submit

    document.addEventListener('DOMContentLoaded',inicioApp);

    //Campos del Formulario
    email.addEventListener('blur',validarCampo);
    asunto.addEventListener('blur',validarCampo);
    mensaje.addEventListener('blur',validarCampo);

    //Boton de enviar en el submit

    formularioEnviar.addEventListener('submit',enviarEmail);

    //boton de Reset
    resetBtn.addEventListener('click', resetFormulario);
}


//funciones

function inicioApp(){

    //Dehabilitar Envioworkplace


    btnEnviar.disable = true;
}

//Valida que el campo tenga al escrito

function validarCampo(){
    //Se valida la longitud del texto y que no este vacio

    validarLongitud(this);

    
    //Validar unicamente el email
    if(this.type ==='email'){
        validarEmail(this);
    }
    let errores = document.querySelectorAll('.error')
    
    if(email.value !== ' '&& asunto.value !=='' && mensaje.value !== ''){
        
        if(errores.lenght ===0){
            btnEnviar.disabled= false;
        }
        
    }



}
//Resetear formulario

function resetFormulario(e){
    formularioEnviar.reset();
    e.preventDefault();

}

//Cuando se envia el correo
function validarEmail(e){

    //Spiner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display ='block';

    //Gif que envia el email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display='block';

    //Ocultar spinner y mostrar gif de enviado

    setTimeout(function(){
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        },5000);
    },3000);

    

    e.preventDefault();
}

//Verifica la longitud del texto en los campos

function validarLongitud(campo){
    if(campo.value.lenght>0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }
    else{
        campo.style.borderBottomColor = 'red';
        campo.classList.remove('error');

    }

}

function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@')!==-1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }
    else{
        campo.style.borderBottomColor = 'red';
        campo.classList.remove('error');
    }
}