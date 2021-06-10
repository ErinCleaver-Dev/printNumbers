const printNumbers = require('./printNumbers');

test('Print Numbers: 12345"', () => {
    expect(printNumbers(5)).toBe("12345")
});

test('Print Numbers Not within a given range', () => {
    expect(printNumbers(151)).toBe("Not within a given range")
});

test('Print Numbers Not within a given range', () => {
    expect(printNumbers(-1)).toBe("Not within a given range")
});

test('Print Numbers test for a value is not a number.', () => {
    expect(printNumbers("Im not a number")).toBe("The value must be a number")
});