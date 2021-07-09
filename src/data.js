//import data from './data/ghibli/ghibli.js';

// estas funciones son de ejemplo

export const example = (dataFilms) => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

// SORT

// let sortItems = document.querySelector('.sort-items');

// sortItems.addEventListener('change', (e) => {

//     // Obtener el valor precionado de la etiqueta select
//     let sortItemsValue = e.currentTarget.value;
//     console.log(sortItemsValue)

//     // Funcion para ordenar
//     switch (sortItemsValue) {
//         case 'score':
//             //ordenar score de forma descendente (mayor a menor)
//             const score = data.films.sort((a, b) => b.rt_score - a.rt_score)
//             console.table(score);
//         break;
//         case 'year-of-release':
//             //ordenar según año de esteno (menor a mayor)
//             const yearOfRelease = data.films.sort((a, b) => a.release_date - b.release_date);
//             console.table(yearOfRelease);
//         break;
//         case 'latest-animations':
//             //ordenar score de forma descendente (mayor a menor)
//             const latestAnimations = data.films.sort((a, b) => b.release_date - a.release_date)
//             console.table(latestAnimations);
//         break;
//         default:
//         break;
//     }
    
// });


//FILTER

// let filterItems = document.querySelector('.filter-items');

// filterItems.addEventListener('change', (e) => {
//     let filterItemsValue = e.currentTarget.value;
//     console.log(filterItemsValue)

//     // Funcion para filtrar
//     switch (filterItemsValue) {
//         case 'top5':
//             // Filtrar por top 5
//             const top5 =  data.films.filter(top => top.rt_score >= 96)
//             // console.table(top5);

//             //Ordenar top 5
//             const orderTop5 = top5.sort((a, b) => b.rt_score - a.rt_score)
//             console.table(orderTop5);
//         break;
//         case 'directed-by-hayao':
//             // Solo pelis dirigidas por Hayao
//             const directorOne =  data.films.filter(hayao => hayao.director === 'Hayao Miyazaki')
//             console.table(directorOne);
//         break;
//         case 'directed-by-isao':
//             // Solo pelis dirigidas por isao
//             const directorTwo =  data.films.filter(isao => isao.director === 'Isao Takahata')
//             console.table(directorTwo);
//         break;
//         case 'produced-by-toshio':
//             // Solo pelis dirigidas por toshio
//             const producer =  data.films.filter(toshio => toshio.producer === 'Toshio Suzuki')
//             console.table(producer);
//         break;
//         default:
//         break;
//     }

// });
