(() => {

  const avenger = {

    nombre: 'Steve',
    clave: 'Capitan america',
    poder: 'Droga'
  }

  console.log(avenger.nombre)
  console.log(avenger.clave)
  console.log(avenger.poder)

  //desestructuracion del objeto
  const { nombre, clave, poder } = avenger

  console.log(nombre)
  console.log(clave)
  console.log(poder)

  //desestructuracion en la llamada de la funcion
  const extraer = ({nombre, clave, poder}: any) => {

    console.log(nombre)
    console.log(clave)
    console.log(poder)
  }

  extraer(avenger)

  const avengers: string[] = ['Thor','Ironman','Spiderman']

  console.log(avengers[0])
  console.log(avengers[1])
  console.log(avengers[2])

  const [thor, ironman, spiderman] = avengers

  console.log(thor)
  console.log(ironman)
  console.log(spiderman)

  const [, , spider] = avengers

  console.log(spider)


  const extraerArr = (avengers: string[]) => {

    console.log(avengers[0])
    console.log(avengers[1])
    console.log(avengers[2])
  }

  const extraerArrDes = ([thor, ironman, spiderman]: string[]) => {

    console.log(avengers[0])
    console.log(avengers[1])
    console.log(avengers[2])
  }

})();
