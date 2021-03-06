//Login de usuario
window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //Si estamos logueados
      document.getElementById('screenOne').style.display = 'none';
      document.getElementById('screenTwo').style.display = 'block';
      document.getElementById('menuNav').style.display = 'block';
      console.log("User > " + JSON.stringify(user));
      let uid = user.uid;
      let email = firebase.auth().currentUser.email;
      console.log(email);
      showEmail.innerHTML = email;
    } else {
      //No estamos logueados
      document.getElementById('screenOne').style.display = 'block';
      document.getElementById('screenTwo').style.display = 'none';
      document.getElementById('screenThree').style.display = 'none';
      document.getElementById('screenFour').style.display = 'none';
      document.getElementById('screenFive').style.display = 'none';
      document.getElementById('screenSix').style.display = 'none';
      document.getElementById('menuNav').style.display = 'none';
    }
  });
};

function signUp() {
  const userEmail = document.getElementById('userEmail').value;
  const userPassword = document.getElementById('inputPassword').value;
  if (userPassword.length <= 8) {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        console.log("Usuario registrado");
      })
      .catch((error) => {
        console.log("Error de firebase > " + error.code);
        console.log("Error de firebase, mensaje > " + error.message);
      });
  } else {
    alert('Excede los 8 números permitidos');
  }
}

function logIn() {
  const userEmail = document.getElementById('userEmail').value;
  const userPassword = document.getElementById('inputPassword').value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .then(() => {
      console.log("Usuario con login exitoso");
    })
    .catch((error) => {
      console.log("Error de firebase > " + error.code);
      console.log("Error de firebase, mensaje > " + error.message);
    });
}

function logOut() {
  firebase.auth().signOut()
    .then(() => {
      console.log("Ha cerrado sesión");
    })
    .catch();
}

