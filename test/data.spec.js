//import { example, anotherExample } from '../src/data.js';
import * as all from '../src/data.js';

describe('functionMoviesSection', () => {
    it('is a function', () => {
        expect(typeof all.functionMoviesSection).toBe('function');
    });

    // it('returns `example`', () => {
    //   expect(example()).toBe('example');
    // });
});


describe('sortfunction', () => {
    it('is a function', () => {
        expect(typeof all.sortfunction).toBe('function');
    });

    // it('returns `anotherExample`', () => {
    //   expect(anotherExample()).toBe('OMG');
    // });
});

describe('filterfunction', () => {
    it('is a function', () => {
        expect(typeof all.filterfunction).toBe('function');
    });

    // it('returns `anotherExample`', () => {
    //   expect(anotherExample()).toBe('OMG');
    // });
});