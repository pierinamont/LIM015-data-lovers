//import data from './data/ghibli/ghibli.js';

// * as all => Nos permite traer todas las funciones de data.js, sin necesidad de escribirlas una por una
import * as all from './data.js';

// llamar función que crea la estructura de la seccion de pelis (permite mostrar posters con toda su info)
all.functionMoviesSection();


//Llamar el elemento del html en donde irá nuestro nuevo elemento
//const root = document.getElementById('root');
// llamar contenedores figure => class='poster'
const posters = document.querySelectorAll('.poster');

// llamar contenedores span => class='movie-cross'
const movieCross = document.querySelectorAll('.movie-cross');

// llamar etiqueta selector para ordenar data => class='sort-items'
const sortItems = document.querySelector('.sort-items');

// llamar etiqueta selector para filtrar data => class='filter-items'
const filterItems = document.querySelector('.filter-items');

// llamar div creado que contiene la seccion de pelis data => class='movie-info'
//const movieInfo = document.querySelector('.movie-info');


// EVENTO PARA MOSTRAR CONTENEDORES CON LA INFORMACION DE LAS PELICULAS
let numeroDeClick = 0;
posters.forEach(poster => {
    poster.addEventListener('click', (e) => {
        numeroDeClick++
        if (numeroDeClick != 1) {
            let id_anterior = localStorage.getItem('id_actual');
            document.getElementById(id_anterior).style.display = 'none';
        }
        let valor = e.currentTarget.childNodes[1].value;
        let infoContainer = document.getElementById('div_info-container_' + valor);
        infoContainer.style.display = 'inline';

        localStorage.setItem('id_actual', 'div_info-container_' + valor);
    });
});

// EVENTO PARA CERRAR CONTENEDOR CON LA INFORMACION AL HACER CLICK EN X
movieCross.forEach(cross => {
    cross.addEventListener('click', (e) => {
        let valor = e.currentTarget.childNodes[5].value;
        let infoContainer = document.getElementById('div_info-container_' + valor);
        infoContainer.style.display = 'none';
    });
});

// EVENTO EN ETIQUETA SELECT PARA ORDENAR DATA
sortItems.addEventListener('change', (e) => {
    const sortItemsValue = e.currentTarget.value;
    console.log(sortItemsValue);
    // Llama función 'sortfunction' de data.js 
    all.sortfunction(sortItemsValue);

    // if(sortItemsValue === 'score') {
    //   movieInfo.innerHTML = sortfunction(sortItemsValue).join('');
    // }
});

// EVENTO EN ETIQUETA SELECT PARA FILTRAR DATA
filterItems.addEventListener('change', (e) => {
    // obtener valor de etiqueta select
    let filterItemsValue = e.currentTarget.value;
    console.log(filterItemsValue);

    // Llama función 'filterfunction' de data.js 
    all.filterfunction(filterItemsValue);
});