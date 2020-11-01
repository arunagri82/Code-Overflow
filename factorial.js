const factorial = () => {
  if (value <0 ) {
    return 'Valor deve ser maior ou igual a zero';
  } else if ( (value == 0) || (value == 1) ) {
    return 1;

  } else {
    let acumula = 1;
    for(x = valor; x > 1; x--) {
      acumula = acumula * x;
    }
    return acumula;
  } 
}
