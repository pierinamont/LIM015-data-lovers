import data from './data/ghibli/ghibli.js';
import * as all from './data.js';

// llamar función que crea la estructura de la seccion de pelis 
all.functionMoviesSection(data.films);

const root = document.getElementById('root');
const posters = document.querySelectorAll('.poster');
const movieCross = document.querySelectorAll('.movie-cross');
const sortItems = document.querySelector('.sort-items');
const filterItems = document.querySelector('.filter-items');

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
  const sortData = all.sortfunction(sortItemsValue);
  all.functionMoviesSection(sortData);
});

// EVENTO EN ETIQUETA SELECT PARA FILTRAR DATA
filterItems.addEventListener('change', (e) => {
  // obtener valor de etiqueta select
  let filterItemsValue = e.currentTarget.value;
  console.log(filterItemsValue);
  
  // Llama función 'filterfunction' de data.js 
  all.filterfunction(filterItemsValue);
});
