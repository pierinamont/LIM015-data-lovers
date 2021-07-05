import data from './data/ghibli/ghibli.js';

/*POSTER DE PELÍCULA Y CONTENEDOR DE INFORMACIÓN ✌*/

//Llamar el elemento del html en donde irá nuestro nuevo elemento
const root = document.getElementById('root');

//Crear nuevo elemento
data.films.forEach((info) => {
    const movieInfo = document.createElement('div');
    movieInfo.className = "movie-info"

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
       <a href="#">People</a>
       <a href="#">Vehicles</a>
       <a href="#">Locations</a>
    </div>
   </div>
  `
    root.appendChild(movieInfo);

});

const posters = document.querySelectorAll('.poster');
const movieCross = document.querySelectorAll('.movie-cross');

posters.forEach(poster => {
    poster.addEventListener('click', (e) => {
        // console.log(e.currentTarget);
        // console.log(e.currentTarget.childNodes[1]); //todo input
        // console.log(e.currentTarget.childNodes[1].value); // solo valor del input
        let valor = e.currentTarget.childNodes[1].value;
        let infoContainer = document.getElementById('div_info-container_' + valor);
        infoContainer.style.display = 'inline';
    });
});


movieCross.forEach(cross => {
    cross.addEventListener('click', (e) => {
        // console.log(e.currentTarget);
        // console.log(e.currentTarget.childNodes);
        // console.log(e.currentTarget.childNodes[5]);
        // console.log(e.currentTarget.childNodes[5].value);
        let valor = e.currentTarget.childNodes[5].value;
        let infoContainer = document.getElementById('div_info-container_' + valor);
        infoContainer.style.display = 'none';
    });
});

/*
poster.addEventListener('click', () => {
    let valor_id = poster.childNodes[0];
    console.log('id:' + valor_id);
    let infoContainer = document.getElementById('div_info-container_' + valor_id);
    infoContainer.style.display = 'inline';
});
*/