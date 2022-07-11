import { findScore } from "./darts.js";

describe('Darts', () => {
    test('missed the target', () => {
        expect(findScore(-9, 9)).toEqual(0);
    });

    test ('Outer circle', () => {
        expect(findScore(0,10)).toEqual(1);
    });

    test ('Middle circle', () => {
        expect(findScore(-5,0)).toEqual(5);
    });

    test ('Inner circle', () => {
        expect(findScore(0,-1)).toEqual(10);
    });

    test ('Centre circle', () => {
        expect(findScore(0,0)).toEqual(10);
    });

    test('Invalid input', () => {
        expect(findScore('a', 0)).toEqual(null);
    })
})