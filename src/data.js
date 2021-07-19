import data from './data/ghibli/ghibli.js';

// EXPORTAR FUNCIÓN PARA ORDENAR DATA

export const sortfunction = (sortItemsValue, data) => {
    switch (sortItemsValue) {
        case 'score':
            {
                //ordenar score de forma descendente (mayor a menor)
                const score = data.sort((a, b) => b.rt_score - a.rt_score)
                //console.table(score);
                return score;
            }
        case 'year-of-release':
            {
                //ordenar según año de esteno (menor a mayor)
                const yearOfRelease = data.sort((a, b) => a.release_date - b.release_date);
                //console.table(yearOfRelease);
                return yearOfRelease;
            }
        case 'latest-animations':
            {
                //ordenar score de forma descendente (mayor a menor)
                const latestAnimations = data.sort((a, b) => b.release_date - a.release_date)
                //console.table(latestAnimations);
                return latestAnimations;
            }

        case 'a-to-z':
            {
                const aToz = data.sort((a, b) => a.title.localeCompare(b.title));
                //console.table(aToz);
                return aToz;
            }
        case 'z-to-a':
            {
                const zToa = data.sort((a, b) => b.title.localeCompare(a.title));
                //console.table(zToa);
                return zToa;
            }
        default:
            {
                break;
            }
    }
}

// EXPORTAR FUNCIÓN PARA FILTRAR DATA
export const filterfunction = (filterItemsValue, data) => {
    switch (filterItemsValue) {
        case 'top5':
            {
                // Filtrar por top 5
                const top5 = data.filter(top => top.rt_score >= 96)
                    //Ordenar top 5
                const orderTop5 = top5.sort((a, b) => b.rt_score - a.rt_score)
                //console.table(orderTop5);
                return orderTop5;
            }
        case 'directed-by-hayao':
            {
                // Solo pelis dirigidas por Hayao
                const directorOne = data.filter(hayao => hayao.director == 'Hayao Miyazaki')
                //console.table(directorOne);
                return directorOne;
            }
        case 'directed-by-isao':
            {
                // Solo pelis dirigidas por isao
                const directorTwo = data.filter(isao => isao.director == 'Isao Takahata')
                //console.table(directorTwo);
                return directorTwo;
            }
        case 'produced-by-toshio':
            {
                // Solo pelis producidas por toshio
                const producer = data.filter(toshio => toshio.producer == 'Toshio Suzuki')
                //console.table(producer);
                return producer;
            }
        default:
            {
                break;
            }
    }
};

// PELICULA SELECCIONADA
export const selectedData = (moviesTitle) => {
    //console.log(moviesTitle);
    const select = data.films.filter(movies => movies.title === moviesTitle);
    //console.log(select);
    return select;
}

// BUSCADOR DE PELICULA SELECCIONADA
// input = buscador
// selector = cada poster
// data = data.films
// export const searchFilters = (input, selector)=> {
//     document.addEventListener("keyup", (e) => {
//         if(e.target.matches(input)) {
//             if (e.key === "Escape") e.target.value = "";
//            //console.log(e.key);
//            //console.log(e.target.value);
//            document.querySelectorAll(selector).forEach((el)=> 
           
//             el.textContent.toLowerCase().includes(e.target.value)
//             ? el.classList.remove("filter") // display "block"
//             :el.classList.add("filter") //display none
            
//             );
//         }
//     });
// }

// CONTADOR DE PERSONAJES

export const numOfCharacters =(arrayData) => {
let num = 0;
  for(let i = 0; i < arrayData.length; i++) {
     num = i + 1;
  }
  console.log(num);
  return num;
}

console.log(numOfCharacters)