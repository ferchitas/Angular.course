(function() {

  function activar(
    //por convencion, los parametros de las funciones se ponen ordenados de
    // esta forma: obligatorios, inicializados, opcionales
    //parametro obligatorio
    quien: string,
    //parametro opcional
    momento?: string,
    //parametro con incializacion por defecto
    objeto: string = 'batiseñal'
    ) {

      if (momento) {

        console.log(`${quien} activo la ${objeto} en la ${momento}`)
      }
    console.log(`${quien} activo la ${objeto}`)
  }

  activar('Gordon', 'casa')
  activar('Gordon', 'casa', 'tarde')

})();
