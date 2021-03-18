const safeadd = require('../lib/safeadd');

describe('safeadd', () => {
    test('no error', () => {
        expect(safeadd(10, 20)).toBe(30);
    });

    test('overflow', () => {
        expect(() => {
            safeadd(20, Number.MAX_SAFE_INTEGER);
        }).toThrow('Overflow');
    });

    test('underflow', () => {
        expect(() => {
            safeadd(-20, Number.MIN_SAFE_INTEGER);
        }).toThrow('Underflow');
    });

    test('no error 2', () => {
        expect(safeadd(20, -10)).toBe(10);
    });

});