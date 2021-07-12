import data from './data/ghibli/ghibli.js';

// EXPORTAR FUNCIÓN QUE CREA LA ESTRUCTURA DE LA SECCIÓN DE PELIS, CON SU POSTER E INFORMACIÓN
export const functionMoviesSection = () => {
    data.films.forEach((info) => {
        const movieInfo = document.createElement('div');
        movieInfo.className = 'movie-info'
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
        const root = document.getElementById('root');
        root.appendChild(movieInfo);


    });
}

// EXPORTAR FUNCIÓN PARA ORDENAR DATA
export const sortfunction = (sortItemsValue) => {
    switch (sortItemsValue) {
        case 'score':
            {
                //ordenar score de forma descendente (mayor a menor)
                const score = data.films.sort((a, b) => b.rt_score - a.rt_score)
                console.table(score);
                break;
            }
        case 'year-of-release':
            {
                //ordenar según año de esteno (menor a mayor)
                const yearOfRelease = data.films.sort((a, b) => a.release_date - b.release_date);
                console.table(yearOfRelease);
                break;
            }
        case 'latest-animations':
            {
                //ordenar score de forma descendente (mayor a menor)
                const latestAnimations = data.films.sort((a, b) => b.release_date - a.release_date)
                console.table(latestAnimations);
                break;
            }
        default:
            {
                break;
            }
    }
}

// EXPORTAR FUNCIÓN PARA FILTRAR DATA
export const filterfunction = (filterItemsValue) => {
    switch (filterItemsValue) {
        case 'top5':
            {
                // Filtrar por top 5
                const top5 = data.films.filter(top => top.rt_score >= 96)
                    // console.table(top5);
                    //Ordenar top 5
                const orderTop5 = top5.sort((a, b) => b.rt_score - a.rt_score)
                console.table(orderTop5);
                break;
            }
        case 'directed-by-hayao':
            {
                // Solo pelis dirigidas por Hayao
                const directorOne = data.films.filter(hayao => hayao.director === 'Hayao Miyazaki')
                console.table(directorOne);
                break;
            }
        case 'directed-by-isao':
            {
                // Solo pelis dirigidas por isao
                const directorTwo = data.films.filter(isao => isao.director === 'Isao Takahata')
                console.table(directorTwo);
                break;
            }
        case 'produced-by-toshio':
            {
                // Solo pelis dirigidas por toshio
                const producer = data.films.filter(toshio => toshio.producer === 'Toshio Suzuki')
                console.table(producer);
                break;
            }
        default:
            {
                break;
            }
    }
};