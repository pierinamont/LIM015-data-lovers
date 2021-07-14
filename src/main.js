import data from './data/ghibli/ghibli.js';
import * as all from './data.js';

// Elementos del html
const root = document.getElementById('root');
const sortItems = document.querySelector('.sort-items');
const filterItems = document.querySelector('.filter-items');

// FUNCIÓN QUE CREA LA ESTRUCTURA DE LA SECCIÓN DE PELIS, CON SU POSTER E INFORMACIÓN
const functionMoviesSection = (arrayData) => {
    root.innerHTML = '';
    arrayData.forEach((info) => {
        const movieInfo = document.createElement('div');
        movieInfo.className ='movie-info'
        movieInfo.innerHTML = `
      <div>
      <!--contenedor del poster y su año-->
        <div class="div_poster-container">
          <figure class="poster">
            <input type="text" hidden value="${info.id}" id="${info.id}"/>
            <span class="year">${info.release_date}</span>
            <img src="${info.poster}"></img>
          </figure>
        </div>
  
        <!--contenedor de datos de la película-->
        <div id="div_info-container_${info.id}" class="div_info-container" style="display:none">
           <span class="movie-cross">
              <h2>${info.title}</h2>
              <img id="cross" src="https://i.postimg.cc/x8dGZhqx/remove.png">
              <input type="text" hidden value="${info.id}"/>
              </img>
           </span>
           <span class="score-year">
             <p class="score">Score: ${info.rt_score}</p>
             <p>${info.release_date}</p>
           </span>
           <p class="description">${info.description}</p>
           <p class="director">Director: ${info.director}</p>
           <p class="producer">Producer: ${info.producer}</p>
           <p class="moreinfo">Ver más</p>
        </div>
       </div>
      `
          root.appendChild(movieInfo);
    });
}
functionMoviesSection(data.films);

// Elementos del innerHTML
const posters = document.querySelectorAll('.poster');
const movieCross = document.querySelectorAll('.movie-cross');

// EVENTO PARA MOSTRAR CONTENEDORES CON LA INFORMACION DE LAS PELICULAS
const functionShowInfo = () => {
    let numeroDeClick = 0; 
    posters.forEach(poster => {
        poster.addEventListener('click', (e) => {
            console.log(e.currentTarget);
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
}
functionShowInfo();

// EVENTO PARA CERRAR CONTENEDOR CON LA INFORMACION AL HACER CLICK EN X
const functionCloseInfo = () => {
    movieCross.forEach(cross => {
        cross.addEventListener('click', (e) => {
            let valor = e.currentTarget.childNodes[5].value;
            let infoContainer = document.getElementById('div_info-container_' + valor);
            infoContainer.style.display = 'none';
        });
    });
}
functionCloseInfo();

// EVENTO EN ETIQUETA SELECT PARA ORDENAR DATA
sortItems.addEventListener('change', (e) => {4
  // obtener valor de etiqueta select
  const sortItemsValue = e.currentTarget.value;
  console.log(sortItemsValue);

  // Llama función 'sortfunction' 
  const sortData = all.sortfunction(sortItemsValue);
  functionMoviesSection(sortData);

  // Funcion para mostrar y ocultar info
  functionShowInfo();
  functionCloseInfo();
});

// EVENTO EN ETIQUETA SELECT PARA FILTRAR DATA
filterItems.addEventListener('change', (e) => {
  // obtener valor de etiqueta select
  const filterItemsValue = e.currentTarget.value;
  console.log(filterItemsValue);

  // Llama función 'filterfunction'
  const filterData = all.filterfunction(filterItemsValue);
  functionMoviesSection(filterData);

  // Funcion para mostrar y ocultar info
  functionShowInfo();
  functionCloseInfo();
});



const people = document.getElementById('people')

// FUNCIÓN QUE CREA LA ESTRUCTURA DE LA SECCIÓN DE PEOPLE
const functionPeopleSection = (arrayData) => {
  arrayData.forEach((p) => {
    const peopleInfo = document.createElement('div');
    peopleInfo.className = 'people-info';
    people.innerHTML = `
      <div>
      <!--contenedor del poster y su año-->
        <div class="div_poster-container">
          <figure class="poster">
            <input type="text" hidden value="${p.id}" id="${p.id}"/>
            <span class="year">${p.name}</span>
            <img src="${p.img}"></img>
          </figure>
        </div>`

        people.appendChild(peopleInfo);
  });
}
functionPeopleSection(data.films);




const moreInfo = document.querySelectorAll('.moreinfo');
const sectionMovieInfo = document.getElementById('section_movie-info');
const sectionSelectOption = document.getElementById('section_select-option')
const sectionPeople = document.getElementById('section-people');

// SECCIÓN PERSONAJES 
const functionShowMoreInfo = () => {

  moreInfo.forEach(info => {
    info.addEventListener('click', () => {
      
      // Ocultar seccion películas
      sectionMovieInfo.style.display = 'none';
      sectionSelectOption.style.display = 'none';

      // Mostrar personajes
      sectionPeople.style.display = 'inline';

    });

  });
}
functionShowMoreInfo();

