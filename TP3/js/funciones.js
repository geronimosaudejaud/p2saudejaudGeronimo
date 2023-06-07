var gender1;
var gender2;
function GetCh() {
    let min = 1;
    let max = 826;
    let numCh = Math.floor(Math.random() * (max - min + 1)) + min
    fetch("https://rickandmortyapi.com/api/character/" + numCh)
        .then(function (response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
            let element = document.getElementById("resultados1")
            element.innerHTML = `
            <img src=${data.image}>
            <h2><label>Nombre: ${data.name}</label></h2>
            <h2><label>Estado: ${data.status}</label></h2>
            <h2><label>Genero: ${data.gender}</label></h2>
            <h2><label>Especie: ${data.species}</label></h2>
            <h2><label>Localidad: ${data.location.name}</label></h2> 
        `
        return (gender1 = data.gender)
})

fetch("https://randomuser.me/api/")
.then(function(response){return response.json()
  })
  .then(function(data){  
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

  `
  return (gender2 = data.results[0].gender)

})
.then(function(){
  let gender2pq = gender2[0].toUpperCase();
  console.log(gender2pq)

  let sigch = gender2.slice(1);
  console.log(sigch)

  let gendercp = gender2pq + sigch;
  console.log(gendercp)

  
  console.log(gender1)
  
  if (gendercp===gender1) {
    let match = document.getElementById("verificacion")
    match.innerHTML = `
<h2>Resultado:</h2>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ndx69YIa--Ik5wY8_omQ-duyI0UzPv5x2A8UZgbXOitAX1RrpeV17bHcuWR262Nzp00&usqp=CAU" height=200>
<h2>Los generos son iguales</h2>
`
}
else {
    let match = document.getElementById("verificacion")
    match.innerHTML = `
    <h2>Resultado:</h2>
    <img src='https://img.freepik.com/vector-premium/icono-signo-incorrecto_188544-4739.jpg' height=200 >
    <h2>Los generos NO son iguales</h2>
    `
  }
})}

