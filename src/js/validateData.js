window.validateCard = (bip) => {
  console.log(bip);
  if (bip.toString().length <= 8) {
    if (isNaN(bip) == false) {
        return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
