//Fetch, muestra info de tarjeta bip ingresada en el input de ver saldo

btnBalance.addEventListener('click', () => {
  let bipNumber = cardNumberBip.value;
  let dataBip = dataBipContainer.value;
fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipNumber || dataBip}`)
  .then(response => response.json())
  .then(data => {
    infoBip = data;
    balanceInfoBip = data.saldoTarjeta;  
    dataContainer.innerHTML = `
    <p class="totalBalance">Saldo total: ${data['saldoTarjeta']}</p>
    <p class="totalBalance">Fecha saldo: ${data['fechaSaldo']}</p>
    `;
  })
  .catch(error => {
    console.error("No fue posible completar la solicitud.");
  });
  });

  selectionPrice.addEventListener('click', () => {
  let selectedPrice = document.getElementById('selectionPrice');
  let priceValue = selectedPrice[selectedPrice.selectedIndex].value;
  let lastPrice = price.innerHTML = '$' + priceValue;
  
});

btnCalculate.addEventListener('click', () => {
  let bipNun = cardNumber.value;
  let selectedChoice = selectCard.value;

  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipNun || selectedChoice}`)
  .then(response => response.json())
  .then(data => {
    dataBipCard = data;;
  })
  .catch(error => {
    console.error("No fue posible completar la solicitud.");
  });
});

let bipCardTotal = (data) => {
  for (let i in data) {
    let regex = /(\d+)/g;
    const bipBalance = data.saldoTarjeta.match(regex)
    const finalBipBalance = parseInt(bipBalance[0] + bipBalance[1]);
    const selectedPrice = document.getElementById('selectionPrice');
    let valueChoice = selectedPrice[selectedPrice.selectedIndex].value;
    const finalTotal = finalBipBalance - valueChoice;
    console.log(finalTotal);
    
    total.innerHTML = '$' + finalTotal;
  }
}





