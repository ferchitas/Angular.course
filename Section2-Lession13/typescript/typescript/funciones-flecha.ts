(function() {

//funcion clasica
  const miFuncion = function(a: string) {

    return a.toUpperCase();
  }
  //funcion con flecha, ambas son iguales
  //si solo tenemos una linea podemos evitar las llaves
  const miFuncionF = (a: string) => a.toUpperCase();


  console.log(miFuncion)
  console.log(miFuncionF)

  const sumarN = function(a: number, b: number) {

    return a + b
  }

  const sumarF = (a: number, b: number) => a + b;

  console.log(sumarN(3, 4))
  console.log(sumarF(3, 4));

  //otra de las propiedades de las funciones con flecha es que el escope de
  //this no se va, cuando las definimos dentro de un objeto
  const hulk = {

    nombre: 'Hulk',
    smash() {

      setTimeout( () => {

        console.log(`${this.nombre} te reviento!`)
      })
    }
  }

  hulk.smash()
})();
