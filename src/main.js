import data from './data/ghibli/ghibli.js';
import * as all from './data.js';

// FUNCIÓN QUE CREA LA ESTRUCTURA DE LA SECCIÓN DE PELIS, CON SU POSTER E INFORMACIÓN //////////
const root = document.getElementById('root');

const functionMoviesSection = (arrayData) => {
    root.innerHTML = '';
    arrayData.forEach((info) => {
        const movieInfo = document.createElement('div');
        movieInfo.className = 'movie-info'
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
           <p class="moreinfo" id="${info.title}">Ver más</p>
        </div>
       </div>
      `
        root.appendChild(movieInfo);
    });
}
functionMoviesSection(data.films);


// EVENTO PARA MOSTRAR CONTENEDORES CON LA INFORMACION DE LAS PELICULAS //////////
const posters = document.querySelectorAll('.poster');

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

// EVENTO PARA CERRAR CONTENEDOR CON LA INFORMACION AL HACER CLICK EN X //////////
const movieCross = document.querySelectorAll('.movie-cross');

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

// FUNCIÓN QUE CREA LA ESTRUCTURA DE LA SECCIÓN DE PERSONAJES //////////
const people = document.getElementById('people')

const functionPeopleSection = (arrayData) => {
    people.innerHTML = '';
    arrayData.forEach((info) => {
        const peopleInfo = document.createElement('div');
        peopleInfo.className = 'people-info';
        peopleInfo.innerHTML = `
      <div>
      <!--contenedor del personaje y características-->
        <div class="div_people-container">
          <input type="text" hidden value="${info.id}"/>
          <figure class="people">
            <span class="name"> ${info.name}</span>
            <i style="background-image: url(${info.img})"></i>
          </figure>

          <div class="container-info">
            <p><strong>Gender:</strong> ${info.gender}</p>
            <p><strong>Age:</strong> ${info.age}</p>
            <p><strong>Eye color:</strong> ${info.eye_color}</p>
            <p><strong>Hair color:</strong> ${info.hair_color}</p>
            <p><strong>Specie:</strong> ${info.specie}</p> 
          </div>
        </div>
        `
        people.appendChild(peopleInfo);
    });

}
functionPeopleSection(data.films)

// FUNCIÓN QUE CREA LA ESTRUCTURA DE LA SECCIÓN DE PERSONAJES //////////
const location = document.getElementById('location')

const functionLocationSection = (arrayData) => {
    location.innerHTML = '';
    arrayData.forEach((info) => {
        const locationInfo = document.createElement('div');
        locationInfo.className = 'location-info';
        locationInfo.innerHTML = `
      <div>
      <!--contenedor del lugar y características-->
        <div class="div_people-container">
          <input type="text" hidden value="${info.id}"/>
          <figure class="people">
            <span class="name"> ${info.name}</span>
            <i style="background-image: url(${info.img})"></i>
          </figure>

          <div class="container-info">
            <p><strong>Climate:</strong> ${info.climate}</p>
            <p><strong>Terrain:</strong> ${info.terrain}</p>
            <p><strong>Surface water:</strong> ${info.surface_water}</p>
            <p><strong>Hair color:</strong> ${info.hair_color}</p>
            <p><strong>Residents:</strong> ${info.residents}</p> 
          </div>
        </div>
        `
        location.appendChild(locationInfo);
    });

}
functionLocationSection(data.films)


// EVENTO PARA "VER MAS" //////////
const moreInfo = document.querySelectorAll('.moreinfo');
const sectionMovieInfo = document.getElementById('section_movie-info');
const sectionSelectOption = document.getElementById('section_select-option');
const sectionPeople = document.getElementById('section-people');
const sectionLocation = document.getElementById('section-location');

const functionShowMoreInfo = (info) => {
    info.forEach(info => {
        info.addEventListener('click', (e) => {

            // Ocultar seccion películas y contenedor de info
            sectionMovieInfo.style.display = 'none';
            sectionSelectOption.style.display = 'none';

            // Mostrar personajes, locaciones
            sectionPeople.style.display = 'block';
            sectionLocation.style.display = 'block';

            // Mostrar personajes
            sectionPeople.style.display = 'block';

            // Titulo de pelicul seleccionada
            let moviesTitle = e.currentTarget.id;

            // Personajes de la peli seleccionada
            let moviePerson = movieSelected[0].people;
            console.log(moviePerson);

            // Locacion de peli seleccionada
            let movieLocation = movieSelected[0].locations;
            console.log(movieLocation);

            // Si no hay lugares para mostrar, ocultar seccion
            if (movieLocation === '') {
                sectionLocation.style.display = 'none';
            }

            // Imprimir seccion de personajes, locaciones y vehículos
            functionPeopleSection(moviePerson);
            functionLocationSection(movieLocation);
        });

        // Llamar funcion para los personajes de la peli seleccionada
        functionPeopleSection(moviePerson);
    });

};
functionShowMoreInfo(moreInfo);

// EVENTO EN ETIQUETA SELECT PARA ORDENAR DATA //////////
const sortItems = document.querySelector('.sort-items');

sortItems.addEventListener('change', (e) => {
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
    functionPeopleSection(newMoreInfo);
    functionLocationSection(newMoreInfo);
});

// EVENTO EN ETIQUETA SELECT PARA FILTRAR DATA //////////
const filterItems = document.querySelector('.filter-items');

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
    functionPeopleSection(newMoreInfo);
    functionLocationSection(newMoreInfo);
});

// FUNCTION PARA REGRESAR A SECCION DE PELICULAS
const backToMoviesBtn = document.getElementById('all-movies-btn')

backToMoviesBtn.addEventListener('click', () => {

    // Ocultar personajes
    sectionPeople.style.display = 'none';
    sectionLocation.style.display = 'none';

    // Mostrar seccion películas
    sectionMovieInfo.style.display = 'block';
    sectionSelectOption.style.display = 'block';
    // location.reload(); => chequear otra forma para que aparezca las peliculas desde el comienzo

});