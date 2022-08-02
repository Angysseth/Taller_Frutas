
const funcionamiento = () => {
    const frutasPares = document.querySelectorAll("li:nth-child(even)");
    const frutasImpares = document.querySelectorAll("li:nth-child(odd)");

    arregloPares = Array.from(frutasPares);
    arregloImpares = Array.from(frutasImpares);
}


const estiloUno = () => {
    arregloPares.forEach(function (elemento) {
        elemento.style.backgroundColor = "#957275";
        elemento.style.color = "#75373C";
        console.log(elemento);
    })

    arregloImpares.forEach(function (elemento) {
        elemento.style.backgroundColor = "#75373C";
        elemento.style.color = "#F5BCC1";
        console.log(elemento);
    })
};

const estiloDos = () => {
    arregloImpares.forEach(function (elemento) {
        elemento.style.backgroundColor = "#F7747F";
        elemento.style.color = "#75373C";
        console.log(elemento);
    })

    arregloPares.forEach(function (elemento) {
        elemento.style.backgroundColor = "#75373C";
        elemento.style.color = "#F5BCC1";
        console.log(elemento);
    })
};


/* var frutas = document.getElementById("frutas");

function frutasPares(){
    for(let i=0; i<FileList.length;i++){
        if frutas[i]%2==0 {

        }
    }
} */
/* 
function frutasPares(){
let frutas = document.querySelector("li");

alert(arr.indexOF("Pera"));
console.log(arr.indexOF("Pera"));
} */


/* for(let key in frutas){
alert(frutas.indexOF[key]);

}
/* 
/* function frutasPares(){
var frutas = document.getElementById("frutas");
Array.from(frutas);
console.log(Array);
} */

/* $('ol li').each(function(indice, elemento){
    console.log('el elemento con el indice'+indice+'contiene'+elemento);
})
 */

/* const frutas = document.querySelectorAll("li:nth-child(even)");
console.log(frutas) */

/* (function(){
$(document).ready(function(){
    $("li").each(function(i, li){
        var $li = $(li);
        if((i+1) % 2 !== 0){
            $li.css("background-color","#c8c");
        }
        else{
            $li.css("background-color","#acf");
        }
        })
})

}); */







