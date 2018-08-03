const logIn = document.getElementById('btn'); // iniciar sesión
const createAccount = document.getElementById('register'); // enlace "registrar" en pantalla de registro
  
logIn.addEventListener('click', () => {
  document.getElementById('screenOne').style.display = 'none';
  document.getElementById('screenTwo').style.display = 'block';
});
