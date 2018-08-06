function toggleMenu() { // añadir función onclick="toggleMenu()" al botón del nav bar y al botón cerrar.
  if (sideMenu.className.indexOf("menu_closed") >= 0) { // primero revisamos si la clase d-none esta
    openMenu();  // si esta la clase quiere decir que el menú esta cerrado, asi que llamamos la funcion para abrirlo
  } else {
    closeMenu(); //si no esta la clase, le indicamos que cierre el menu
  }
}

function openMenu() {
  sideMenu.classList.remove('menu_closed'); // quitando clase display-none
  sideMenu.classList.add('menu_open');
}

function closeMenu() {
  sideMenu.classList.add('menu_closed'); // añadimos la clase display-none
  sideMenu.classList.remove('menu_open');
}

function showBalance() {
  document.getElementById('screenOne').style.display = 'none';
  document.getElementById('screenTwo').style.display = 'none';
  document.getElementById('screenThree').style.display = 'none';
  document.getElementById('screenFour').style.display = 'none';
  document.getElementById('screenFive').style.display = 'none';
  document.getElementById('screenSix').style.display = 'block';
  document.getElementById('menuNav').style.display = 'block';
};

function showPrice() {
  document.getElementById('screenOne').style.display = 'none';
  document.getElementById('screenTwo').style.display = 'none';
  document.getElementById('screenThree').style.display = 'none';
  document.getElementById('screenFour').style.display = 'none';
  document.getElementById('screenSix').style.display = 'none';
  document.getElementById('screenFive').style.display = 'block';
  document.getElementById('menuNav').style.display = 'block';
};

function showProfile() {
  document.getElementById('screenOne').style.display = 'none';
  document.getElementById('screenTwo').style.display = 'none';
  document.getElementById('screenFour').style.display = 'none';
  document.getElementById('screenFive').style.display = 'none';
  document.getElementById('screenSix').style.display = 'none';
  document.getElementById('screenThree').style.display = 'block';
  document.getElementById('menuNav').style.display = 'block';
};

function showQuestions() {
  document.getElementById('screenOne').style.display = 'none';
  document.getElementById('screenTwo').style.display = 'none';
  document.getElementById('screenThree').style.display = 'none';
  document.getElementById('screenFive').style.display = 'none';
  document.getElementById('screenSix').style.display = 'none';
  document.getElementById('screenFour').style.display = 'block'
  document.getElementById('menuNav').style.display = 'block';
};

function showHome() {
  document.getElementById('screenOne').style.display = 'none';
  document.getElementById('screenThree').style.display = 'none';
  document.getElementById('screenFour').style.display = 'none';
  document.getElementById('screenFive').style.display = 'none';
  document.getElementById('screenSix').style.display = 'none';
  document.getElementById('screenTwo').style.display = 'block';
  document.getElementById('menuNav').style.display = 'block';
};
