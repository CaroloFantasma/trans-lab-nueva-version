//Menú lateral
function toggleMenu() {
  if (sideMenu.className.indexOf("menu_closed") >= 0) {
    openMenu();
  } else {
    closeMenu();
  }
}

function openMenu() {
  sideMenu.classList.remove('menu_closed');
  sideMenu.classList.add('menu_open');
}

function closeMenu() {
  sideMenu.classList.add('menu_closed');
  sideMenu.classList.remove('menu_open');
}

//Cambio de pantallas
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
