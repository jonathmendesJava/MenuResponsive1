const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword')

togglePassword.addEventListener('click', () => {
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        togglePassword.innerHTML = '<i class="far fa-eye"></i>';
    }else{
        passwordInput.type = 'password' 
        togglePassword.innerHTML = '<i class="far fa-eye-slash"></i>';
    }
});

