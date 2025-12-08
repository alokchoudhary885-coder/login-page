const authWrapper = document.querySelector('.auth-wrapper');
const loginTrigger = document.querySelector('.login-trigger');
const registerTrigger = document.querySelector('.register-trigger');

registerTrigger.onclick = (e) => {
    e.preventDefault();
    authWrapper.classList.add('toggled');
};

loginTrigger.onclick = (e) => {
    e.preventDefault();
    authWrapper.classList.remove('toggled');
};
