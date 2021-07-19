//import { example, anotherExample } from '../src/data.js';
import * as all from '../src/data.js';

// TEST PARA SORT
describe('sortfunction', () => {
    it('is a function', () => {
        expect(typeof all.sortfunction).toBe('function');
    });

    it("Ordenar las peliculas por Score", () => {
        const dataTest = [{ rt_score: "41", title: "Tales from Earthsea" }, { rt_score: "100", title: "Only Yesterday" }];
        expect(all.sortfunction(`score`, dataTest)).toEqual([
            { rt_score: "100", title: "Only Yesterday" }, { rt_score: "41", title: "Tales from Earthsea" }
        ]);
    });

    it("Ordenar las peliculas por el año de forma ascendente (menor a mayor)", () => {
        const dataTest = [{ release_date: "2001", title: "Spirited Away" }, { release_date: "1988", title: "My Neighbor Totoro" }];
        expect(all.sortfunction(`year-of-release`, dataTest)).toEqual([
            { release_date: "1988", title: "My Neighbor Totoro" }, { release_date: "2001", title: "Spirited Away" }
        ]);
    });

    it("Ordenar las películas por el año de forma descendente (mayor a menor)", () => {
        const dataTest = [{ release_date: "1988", title: "My Neighbor Totoro" }, { release_date: "2001", title: "Spirited Away" }];
        expect(all.sortfunction(`latest-animations`, dataTest)).toEqual([
             { release_date: "2001", title: "Spirited Away" }, { release_date: "1988", title: "My Neighbor Totoro" }
        ]);
    });

    it("ordenar de la A a la Z", () => {
        const dataTest = [{ title: "Castle in the Sky" }, { title: "Spirited Away" }];
        expect(all.sortfunction(`a-to-z`, dataTest)).toEqual([{ title: "Castle in the Sky" }, { title: "Spirited Away" }]);
    });

    it("ordenar de la Z a la A", () => {
        const dataTest = [{ title: "Spirited Away" }, {title: "Castle in the Sky" } ];
        expect(all.sortfunction(`z-to-a`, dataTest)).toEqual([{ title: "Spirited Away" }, { title: "Castle in the Sky" }]);
    });

});

// TEST PARA FILTER
describe('filterfunction', () => {
    it('is a function', () => {
        expect(typeof all.filterfunction).toBe('function');
    });

    it("Top 5 de las películas de mayor puntaje", () => {
        const dataTest = [{ rt_score: "97", title: "Spirited Away" }, { rt_score: "100", title: "The Tale of the Princess Kaguya"}, { rt_score: "96", title: "Kiki's Delivery Service"}, { rt_score: "97", title: "Grave of the Fireflies"}, { rt_score: "100", title: "Only Yesterday"}, { rt_score: "75", title: "My Neighbors the Yamadas"}];
        expect(all.filterfunction(`top5`, dataTest)).toEqual([
            { rt_score: "100", title: "The Tale of the Princess Kaguya"}, { rt_score: "100", title: "Only Yesterday" }, { rt_score: "97", title: "Spirited Away" }, { rt_score: "97", title: "Grave of the Fireflies"}, { rt_score: "96", title: "Kiki's Delivery Service"}
        ]);
    });

    it("Películas dirigidas por `Hayao Miyazaki`", () => {
        const dataTest = [{ director: "Hayao Miyazaki", title: "Spirited Away" }, { director: "Yoshifumi Kondō", title: "Whisper of the Heart"}];
        expect(all.filterfunction(`directed-by-hayao`, dataTest)).toEqual([
            { director: "Hayao Miyazaki", title: "Spirited Away" },
        ]);
    });
    
    it("Películas dirigidas por `Isao Takahata`", () => {
        const dataTest = [{ director: "Isao Takahata", title: "Grave of the Fireflies"}, { director: "Hayao Miyazaki", title: "Spirited Away" },];
        expect(all.filterfunction(`directed-by-isao`, dataTest)).toEqual([
            { director: "Isao Takahata", title: "Grave of the Fireflies"},
        ]);
    });

    it("Películas dirigidas por `Toshio Suzuki`", () => {
        const dataTest = [{ producer: "Toshio Suzuki", title: "Pom Poko"}, { producer: "Yoshiaki Nishimura", title: "The Tale of the Princess Kaguya" },];
        expect(all.filterfunction(`produced-by-toshio`, dataTest)).toEqual([
            { producer: "Toshio Suzuki", title: "Pom Poko"},
        ]);
    });

});

// PELICULA SELECCIONADA
describe('selectedData', () => {
    it('is a function', () => {
        expect(typeof all.selectedData).toBe('function');
    });

    it("Retorna un objeto", () => {
        const dataTest = [{ producer: "Toshio Suzuki", title: "Pom Poko"}]
        expect(typeof all.selectedData(dataTest)).toBe('object');
    });

    it("Retorna el mismo titulo", () => {
        const dataTest = [{title: "Pom Poko"}]
        expect(all.selectedData(dataTest)).toEqual[{title: "Pom Poko"}];
    });

});

// TEST PARA CONTADOR DE PERSONAJES
describe('numOfCharacters', () => {
    it('is a function', () => {
        expect(typeof all.numOfCharacters).toBe('function');
    });

    it("Retorna cantidad de personajes", () => {
        const dataTest = [{ name: "kiki"}, { name: "Jiji"}, {name: "Ursula" }, {name: "Tombo" }, {people: "Osono" }, {people: "Fukuo" }];
        expect(all.numOfCharacters(dataTest)).toEqual(6);
    });
})

// //TEST PARA BUSCADOR
// describe('searchFilters', () => {
//     it('is a function', () => {
//         expect(typeof all.searchFilters).toBe('function');
//     });

//     // it("Se muestran peliculas por lo que esta en el buscador", () => {
//     //     const dataTest = [{ title: "The Tale of the Princess Kaguya"}];
//     //     expect(all.searchFilters(dataTest)).toEqual([
//     //         { title: "The Tale of the Princess Kaguya"},
//     //     ]);
//     // });
// });

