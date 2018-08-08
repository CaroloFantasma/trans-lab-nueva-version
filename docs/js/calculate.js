//Imprime la tarifa en pantalla
selectionPrice.addEventListener('click', () => {
  let selectedPrice = document.getElementById('selectionPrice');
  let priceValue = selectedPrice[selectedPrice.selectedIndex].value;
  let lastPrice = price.innerHTML = `<P class="finalResult">Costo pasaje</p>` + '$' + priceValue;
});

//Fetch
btnCalculate.addEventListener('click', () => {
  let bipNun = cardNumber.value;
  let selectedChoice = selectCard.value;
  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipNun || selectedChoice}`)
    .then(response => response.json())
    .then(bipData => {
      dataBipCard = bipData;
      console.log(dataBipCard);

      //Cálculo de saldo y tarifa
      const regex = /(\d+)/g;
      const bipBalance = dataBipCard.saldoTarjeta.match(regex)
      const finalBipBalance = parseInt(bipBalance[0] + bipBalance[1]);
      const selectedPrice = document.getElementById('selectionPrice').value;
      const finalTotal = finalBipBalance - selectedPrice;
      console.log(finalTotal);
      totalResult.innerHTML = `<P class="finalResult">Saldo final</p>` + '$' + finalTotal;
    })
    .catch(error => {
      console.error("No fue posible completar la solicitud.");
    });
});