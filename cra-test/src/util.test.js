import { addNumber } from './util.js';

it('add two numbers', () => {
    const result = addNumber(1, 2);
    expect(result).toBe(3);
});