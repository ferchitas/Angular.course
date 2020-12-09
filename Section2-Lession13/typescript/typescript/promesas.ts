(() => {

  //para que funcione tenemos que poner en el tsconfig la ecma6
  console.log('inicio');

  const prom1 = new Promise((resolve, reject) => {

    setTimeout(() => {

      resolve('Se termino el timeout');
    }, 1000)
  });

  prom1
    .then(mensaje => console.log(mensaje))
    .catch(err => console.warn(err));

  console.log('fin');

})();
