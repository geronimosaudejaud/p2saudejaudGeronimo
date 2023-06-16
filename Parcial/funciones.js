function Nommuni(){
    let muniid = document.getElementById("ID-muni").value
    let resultado = document.getElementById("resultados");
    let provid = document.getElementById("ID-prov").value

fetch("Api.json").then(function(respose){
return respose.json().then(function(data){

console.log(data);



    let cantidad=[localidades-censales].length

    console.log("ID de municipio:", muniid);

    console.log(cantidad);

   for(let contador=0; contador < cantidad; contador++){

        if (data[localidades-censales][contador].municipio.id == muniid){
        console.log("funciona")
        resultado.innerHTML = 
        `<h2><label>Nombre provincia: ${data[localidaes-censales][contador].provincia.nombre}</h2></label>
        <h2><label>Municipo: ${data[localidades-censales][contador].provincia.id}</h2></label>
        <h2><label>Latitud: ${data[localidades-censales][contador].centroide.lat}.</h2></label>
        <h2><label>Longitud: ${data[localidades-censales][contador].centroide.lon}</h2></label>
        `
            
        }

            if((data[localidades-censales][contador].municipio.id !==muniid)&(data[localidades-censales][contador].provincia.id==provid)){
                console.log("funciona")
                resultado.innerHTML=`
                <h2><label>Nombre provincia: ${data[localidaes-censales][contador].provincia.nombre}</h2></label>
                `

            }
    }
         

    
});



})}



