window.validateCard = (bipNumber) => {
  console.log(bipNumber);
  if (bipNumber.toString().length <= 8) {
    if (isNaN(bipNumber) == false) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

window.calculate = (result) => {
  console.log(result);
  const balance = 800;
  const price = 760;
  if (balance - price === 40) {
    return true;
  } else {
    return false;
  }

}