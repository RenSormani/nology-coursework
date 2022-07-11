import { Triangle } from './triangle.js';

describe('Tests to determine whether or not a shape entered is a triangle', () => {

    describe('equilateral triangle', () => {
        test('all sides should be equal', () => {
            const triangle = new Triangle(2, 2, 2);
            expect(triangle.isEquilateral).toBe(true);
        });

        test('no sides are equal', () => {
            const triangle = new Triangle(5, 4, 6);
            expect(triangle.isEquilateral).toBe(false);
        })
    })
    describe('isoceles triangle', () => {
        test('last two sides should be equal', () => {
            const triangle = new Triangle(3, 4, 4);
            expect(triangle.isIsosceles).toBe(true);
        });
    })

    describe('scalene triangle', () => {
        test('no sides shoud be equal', () => {
            const triangle = new Triangle(6, 5, 4);
            expect(triangle.isScalene).toBe(true);
        });

        test('no sides shoud be equal', () => {
            const triangle = new Triangle(0.6, 0.5, 0.4);
            expect(triangle.isScalene).toBe(true);
        });
    })
})