var login = true;
var formLogin = document.querySelector('#login');
var formRegister = document.querySelector('#cadastro');


document.querySelector('#create').addEventListener('click', () => {
    handleChange();
})

document.querySelector('#own').addEventListener('click', () => {
    handleChange();
})

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