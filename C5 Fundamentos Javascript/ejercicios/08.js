function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:

  // tipoDeNumero = typeof(numero);
  // console.log(tipoDeNumero);
  if (Number.isInteger(numero) === true)
    {
    return true;
    }
    else(Number.isInteger(numero) === false)
    {
    return false;
    };
};

esNumeroEntero(1);
esNumeroEntero(-1212);
esNumeroEntero(121.12);
module.exports = esNumeroEntero;