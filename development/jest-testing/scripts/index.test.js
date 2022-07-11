import {getName} from "./index.js";

it("Should return the string 'Renato, 43 years old.'", () => {
    const output = getName('Renato', 43);
    expect(output).toBe('Renato, 43 years old.');
})

it('should return the name, followed by the age', () => {
    const output = getName('Thad', 41);
    expect(output).toBe('Thad, 41 years old.');
});