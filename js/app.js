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
    alert_success.classList.add = ('d-none');
    alert_name.classList.add = ('d-none');
    alert_email.classList.add = ('d-none');

    
    const valor_name = campo_name.value;
    const valor_email = campo_email.value;

    const errores = []


if (!regUserName.test( valor_name) || !valor_name.trim()) { 
    campo_name.classList.remove('is-valid');
    campo_name.classList.add('is-invalid');
        console.log('error en el nombre');
        errores.push({
            tipo:alert_name,
            msg:'te has equivocado, solo letras',
        })
} else {
    campo_name.classList.add('is-valid');
    campo_name.classList.remove('is-invalid');
}
        
if (!regUserEmail.test( valor_email) || !valor_email.trim()) { 
    campo_email.classList.remove('is-valid');
    campo_email.classList.add('is-invalid');
        errores.push({
        tipo:alert_email,
        msg:'te has equivocado, ingrese mail valido',
    })
} else {
    campo_email.classList.add('is-valid');
    campo_name.classList.remove('is-invalid');
}

if (errores.length !== 0) {
    mostrarMensajeError(errores) 
    return;
}
 
mostrarFormEnviado();
});

const mostrarFormEnviado = () => {
    alert_success.classList.remove('d-none');
    alert_success.textContent = 'enviado con éxito';
}

const mostrarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove('d-none');
        item.tipo.textContent = (item.msg)
    });; 
}