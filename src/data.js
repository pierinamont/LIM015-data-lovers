import data from './data/ghibli/ghibli.js';

// EXPORTAR FUNCIÓN PARA ORDENAR DATA

export const sortfunction = (sortItemsValue) => {
    switch (sortItemsValue) {
    case 'score': {
      //ordenar score de forma descendente (mayor a menor)
      const score = data.films.sort((a, b) => b.rt_score - a.rt_score)
      console.table(score);
      return score;
    }
    case 'year-of-release': {
      //ordenar según año de esteno (menor a mayor)
      const yearOfRelease = data.films.sort((a, b) => a.release_date - b.release_date);
      console.table(yearOfRelease);
      return yearOfRelease;
    }
    case 'latest-animations': {
      //ordenar score de forma descendente (mayor a menor)
      const latestAnimations = data.films.sort((a, b) => b.release_date - a.release_date)
      console.table(latestAnimations);
      return latestAnimations;
    }
    default: {
      break;
    }
  }
}

// EXPORTAR FUNCIÓN PARA FILTRAR DATA
export const filterfunction = (filterItemsValue) => {
  switch (filterItemsValue) {
  case 'top5': {
    // Filtrar por top 5
    const top5 =  data.films.filter(top => top.rt_score >= 96)
    //Ordenar top 5
    const orderTop5 = top5.sort((a, b) => b.rt_score - a.rt_score)
    console.table(orderTop5);
    return orderTop5;
  }
  case 'directed-by-hayao': {
    // Solo pelis dirigidas por Hayao
    const directorOne =  data.films.filter(hayao => hayao.director === 'Hayao Miyazaki')
    console.table(directorOne);
    return directorOne;
  }
  case 'directed-by-isao': {
    // Solo pelis dirigidas por isao
    const directorTwo =  data.films.filter(isao => isao.director === 'Isao Takahata')
    console.table(directorTwo);
    return directorTwo;
  }
  case 'produced-by-toshio': {
    // Solo pelis producidas por toshio
    const producer =  data.films.filter(toshio => toshio.producer === 'Toshio Suzuki')
    console.table(producer);
    return producer;
  }
  default: {
    break;
  }
  }
};


