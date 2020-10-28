var login = true;
var formLogin = document.querySelector('#login');
var formRegister = document.querySelector('#cadastro');

document.querySelector('#create').addEventListener('click', () => {
    handleChange();
})

document.querySelector('#own').addEventListener('click', () => {
    handleChange();
})

document.querySelector('#button-login').addEventListener('click', () => {
    handleLogin();
})

const handleLogin = () => {
    let inputLoginEmail = document.getElementById('login-email').value;
    let inputLoginPassword = document.getElementById('login-password').value;

    if (inputLoginEmail === 'admin@admin.com' && inputLoginPassword === 'admin') {
        window.location.href = './index.html';
    } else {
        alert('E-mail ou senha incorretos, tente novamente.')
    }

}

const handleChange = () => {
    login = !login;

    if (login === false) {
        formLogin.style.display = 'none';
        formRegister.style.display = 'flex';
    } else {
        formLogin.style.display = 'flex';
        formRegister.style.display = 'none';
    }
}