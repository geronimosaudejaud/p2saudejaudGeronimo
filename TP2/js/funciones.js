function getcharacter(){
    const personajeid = document.getElementById('personaje-id').value;
    const personajeid2 = document.getElementById('personaje-id2').value;

fetch("https://rickandmortyapi.com/api/character/"+personajeid+","+personajeid2).then(function(response){
    return response.json().then(function(data){

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML =`
    <h2><label>Nombre:${data[0].name}</label></h2>
    <h2><label>Estado:${data[0].status}</label></h2>
    <h2><label>Especie:${data[0].species}</label></h2>
    <h2><label>Ciudad:${data[0].location.name}</label></h2>
    <img src=${data[0].image}>
        
    <h2><label>Nombre:${data[1].name}</label></h2>
    <h2><label>Estado:${data[1].status}</label></h2>
    <h2><label>Especie:${data[1].species}</label></h2>
    <h2><label>Ciudad:${data[1].location.name}</label></h2>
    <img src=${data[1].image}>
    `
    console.log(data)
    
    
})
.catch(function (error) {
    console.error("Error", error)
})
})}
