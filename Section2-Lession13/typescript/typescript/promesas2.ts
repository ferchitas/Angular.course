(() => {

  const retirarDinero = (cantidad: number): Promise<number> => {

    let dineroActual = 1000;
    return new Promise((resolve, reject) => {

      if(cantidad > dineroActual) {

        reject('No hay suficiente dinero.');
      }
      else {

        dineroActual -= cantidad;
        resolve(dineroActual);
      }
    });
  }
  retirarDinero(500)
    .then(cantidad => console.log(`Me quedan ${cantidad}`))
    .catch(err => console.warn(err));

})();
