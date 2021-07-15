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
            <i class="score">${info.rt_score}%</i>
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
           <p class="moreinfo" id="moreinfo_${info.title}">Ver más</p>
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
const functionShowInfo = (info) => {
    let numeroDeClick = 0; 
    info.forEach(poster => {
        poster.addEventListener('click', (e) => {
            //console.log(e.currentTarget);
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
functionShowInfo(posters);


// EVENTO PARA CERRAR CONTENEDOR CON LA INFORMACION AL HACER CLICK EN X
const functionCloseInfo = (close) => {
    close.forEach(cross => {
        cross.addEventListener('click', (e) => {
            let valor = e.currentTarget.childNodes[5].value;
            let infoContainer = document.getElementById('div_info-container_' + valor);
            infoContainer.style.display = 'none';
        });
    });
}
functionCloseInfo(movieCross);


const people = document.getElementById('people')

// FUNCIÓN QUE CREA LA ESTRUCTURA DE LA SECCIÓN DE PEOPLE
const functionPeopleSection = (arrayData) => {
  //people.innerHTML = '';
  arrayData.forEach((info) => {
    const peopleInfo = document.createElement('div');
    peopleInfo.className = 'people-info';
    people.innerHTML = `
      <div>
      <!--contenedor del personaje y características-->
        <div class="div_people-container">
          <input type="text" hidden value="${info.people.id}" id="${info.people.id}"/>
          <figure class="people">
            <span class="name"> ${info.people.name}</span>
            <img src=" ${info.people.img}"></img>
          </figure>

          <div class="container-info">
            <p><strong>Gender:</strong> ${info.director}</p>
            <p><strong>Age:</strong> ${info.people.age}</p>
            <p><strong>Eye color:</strong> ${info.people.eye_color}</p>
            <p><strong>Hair color:</strong> ${info.people.hair_color}</p>
            <p><strong>Specie:</strong> ${info.people.specie}</p> 
          </div>
        </div>
        `
        people.appendChild(peopleInfo);
  });
};
functionPeopleSection(data.films);


const moreInfo = document.querySelectorAll('.moreinfo');
const sectionMovieInfo = document.getElementById('section_movie-info');
const sectionSelectOption = document.getElementById('section_select-option')
const sectionPeople = document.getElementById('section-people');

// SECCIÓN PERSONAJES 
const functionShowMoreInfo = (info) => {
  info.forEach(info => {
    info.addEventListener('click', (e) => {
      console.log(e.currentTarget.id)
      // Ocultar seccion películas
      sectionMovieInfo.style.display = 'none';
      sectionSelectOption.style.display = 'none';

      // Mostrar personajes
      let id = e.currentTarget.id
      let infoContainer = document.getElementById('moreinfo_' + id);
      console.log(infoContainer);
      sectionPeople.style.display = 'inline';

      //functionPeopleSection(e);
      // console.table(functionPeopleSection);
    });

  });
}
functionShowMoreInfo(moreInfo);

// EVENTO EN ETIQUETA SELECT PARA ORDENAR DATA
sortItems.addEventListener('change', (e) => {4
  // obtener valor de etiqueta select
  const sortItemsValue = e.currentTarget.value;
  console.log(sortItemsValue);
    
  // Llama función 'sortfunction' 
  const sortData = all.sortfunction(sortItemsValue);
  functionMoviesSection(sortData);

  // Funcion para mostrar y ocultar info
  const newPosters = document.querySelectorAll('.poster')
  const newMovieCross = document.querySelectorAll('.movie-cross');
  const newMoreInfo = document.querySelectorAll('.moreinfo');

  functionShowInfo(newPosters);
  functionCloseInfo(newMovieCross);
  functionShowMoreInfo(newMoreInfo);
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
  const newPosters = document.querySelectorAll('.poster')
  const newMovieCross = document.querySelectorAll('.movie-cross');
  const newMoreInfo = document.querySelectorAll('.moreinfo');

  functionShowInfo(newPosters);
  functionCloseInfo(newMovieCross);
  functionShowMoreInfo(newMoreInfo);
});
