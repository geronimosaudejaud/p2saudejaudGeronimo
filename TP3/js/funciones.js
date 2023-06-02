const usuario=document.getElementById("userid")
function GetP(){fetch("https://randomuser.me/api/"+usuario.value)

  .then(function(response){return response.json()
  })
  .then(function Prandom(data){  
  console.log(data)
  
  let elementos=document.getElementById("resultados")
  elementos.innerHTML=`
  <img src=${data.results[0].picture.large}>
  <h2><label>Nombre: ${data.results[0].name.first} </label></h2> 
  <h2><label>Sexo: ${data.results[0].gender} </label></h2> 
  <h2><label>Apellido: ${data.results[0].name.last} </label></h2> 
  <h2><label>Fecha de nacimiento: ${data.results[0].dob.date} </label></h2> 
  <h2><label>Localidad: ${data.results[0].location.city} </label></h2> 
  <h2><label>Latitud: ${data.results[0].location.coordinates.latitude} </label></h2>
  <h2><label>Longitud: ${data.results[0].location.coordinates.longitude} </label></h2>

  `;
})
.catch(function (error) {
    console.error("Error", error)
})
}