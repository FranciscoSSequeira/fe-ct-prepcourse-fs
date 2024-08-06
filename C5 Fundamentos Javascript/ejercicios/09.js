function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
  if (valor === null)
    {
    return true;
    }
  if(valor === undefined )
      {
        return true;
      }
  if(valor != null||undefined)
    {
      return false;
    }
}

esNuloOIndefinido(null);
esNuloOIndefinido(undefined);
esNuloOIndefinido(22);
esNuloOIndefinido("texto");

module.exports = esNuloOIndefinido;