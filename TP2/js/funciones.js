function getCharacter() {
  var personajeId = document.getElementById('personaje-id').value;
  var apiUrl = 'https://rickandmortyapi.com/api/character/' + personajeId;

  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      
    // Obtener los datos que necesitas
      
        let name = data.name;
      let status = data.status;
      let species = data.species;
      let location = data.location.name;
      let image=
      `<img src=${data.image}>`
     
    //asignar las variables con un Id para mostrarlas con un "DIV"
     
      let printCh = document.getElementById("nameCh")
      printCh.innerHTML = name

      let printSt = document.getElementById("statusCh")
      printSt.innerHTML = status

      let printSp = document.getElementById("speciesCh")
      printSp.innerHTML = species

      let printLo = document.getElementById("locationCh")
      printLo.innerHTML = location

      let printIm = document.getElementById("imageCh")
      printIm.innerHTML = image
    })
    .catch(function(error) {
      console.error('Error al obtener datos de la API: ' + error);
    });
}
