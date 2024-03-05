const formulario = document.querySelector('#formulario');
const campo_name = document.querySelector('#user-name');
const campo_email = document.querySelector('#user-email');
const alert_name = document.querySelector('#alert-name');
const alert_email = document.querySelector('#alert-email');
const alert_success = document.querySelector('#alert-success');

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

formulario.addEventListener('submit', (e) =>  {
    e.preventDefault();
    const valor_name = campo_name.value
    const valor_email = campo_email.value

if (!regUserName.test(valor_name) || !regUserEmail.test(valor_email)) { 
        console.log('error');
        return;
        }   
 
 console.log ('form enviado');
});
