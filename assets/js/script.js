// function getData(){
//     let promise = fetch("https://swapi.dev/api/people/1")

//     console.log(promise)

//     promise.then(response=>response.json())
//     .then(json=>{
//         console.log(json)
//     })
//     .catch(error=>{
//         console.log(error)
//     })

//     console.log("aca abajo de la promesa");
// }


// con función async await

let contadorImportante=1

document.getElementById("divgrande").addEventListener('mouseover',importantes)
document.getElementById("divmediano").addEventListener('mouseover',medioImportantes)
document.getElementById("divpequeño").addEventListener('mouseover',pocoImportantes)

function importantes(){

const revision=document.getElementById("character-infoImportante").innerHTML; //el guardia

        if(contadorImportante>=1 && contadorImportante<=5){

            getData2(contadorImportante,"character-infoImportante"); //
            contadorImportante++
            // alert(contadorImportante)
        }}

// if (revision!="")return //no olvidar poner return 
// for (let i = 1; i <= 5; i++) {
//   } 

let contadormedioImportante=6
function medioImportantes(){

const revision=document.getElementById("character-infoMedioImportantes").innerHTML;
    
        if(contadormedioImportante>=6 && contadormedioImportante<=11){

            getData2(contadormedioImportante,"character-infoMedioImportantes");
            contadormedioImportante++
        }}

// if (revision!="")return
//     for (let i = 6; i <= 11; i++) {
// }

let contadorpocoImportante=12
function pocoImportantes(){

const revision=document.getElementById("character-infoPocoImportantes").innerHTML;

    if(contadorpocoImportante>=12 && contadorpocoImportante<=17){

        getData2(contadorpocoImportante,"character-infoPocoImportantes");
        contadorpocoImportante++
    }}

// if (revision!="")return
// for (let i = 12; i <= 17; i++) {
// }

async function getData2(id,idElement){

    try{
    let promise = await fetch (`https://swapi.dev/api/people/${id}`)
    let resultado = await promise.json();
    console.log(resultado)
    injectInfo(resultado,idElement);
    }
    catch(error){
        console.log(error)
    }
}


function injectInfo(character,idElement){

    const {name,height,mass,}=character //destructurar
    if (name==undefined) return //ahorro de bloque return, si cumple escapamos de la función
    var infoHTML=`
    <div class=item2>
        <h4>Nombre: ${name}</h4>
        <p>Peso: ${height}</p>
        <p>Masa: ${mass}</p>
    </div>    
    `
    document.getElementById(idElement).innerHTML+=infoHTML;

}
