const Calculadora = require('../lib/calculadora');
const c = new Calculadora();

describe('Calculadora', () => {
    test('inicio menor que zero', () => {
        expect(c.calcularMedia([], -1, 10))
            .toBe(-1);
    });

    test('inicio maior que fim', () => {
        expect(c.calcularMedia([], 10, 5))
            .toBe(-1);
    });

    test('vetor com numeros no intervalo', () => {
        expect(c.calcularMedia([1, 5, 10, 3], 4, 11))
            .toBeCloseTo(7.5);
    });   

    test('vetor com anos de nascimento', () => {
        expect(c.calcularIdade([1980, 1995, 2000]))
            .toEqual(expect.arrayContaining([41, 26, 21]));
    });

    test('vetor com anos de nascimento', () => {
        expect(c.calcularIdade([]))
            .toEqual(expect.arrayContaining([]));
    });

    test('vetor de raio de um circulo', () => {
        expect(c.calcularCirculo([10, 50, 70]))
            .toEqual(expect.arrayContaining([62.83185307179586, 314.1592653589793, 439.822971502571]));
    });

    test('vetor de raio de um circulo', () => {
        expect(c.calcularCirculo([]))
            .toEqual(expect.arrayContaining([]));
    });
}); 