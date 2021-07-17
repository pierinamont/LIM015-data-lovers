//import { example, anotherExample } from '../src/data.js';
import * as all from '../src/data.js';

describe('sortfunction', () => {
    it('is a function', () => {
        expect(typeof all.sortfunction).toBe('function');
    });

});

describe('filterfunction', () => {
    it('is a function', () => {
        expect(typeof all.filterfunction).toBe('function');
    });

    // it('returns `anotherExample`', () => {
    //   expect(anotherExample()).toBe('OMG');
    // });
});