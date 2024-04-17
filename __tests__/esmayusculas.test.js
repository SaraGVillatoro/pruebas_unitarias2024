const isUpperCase = require('../utils/esmayusculas');
test("comprobar mayuscula en palabra amor", () => {
    expect(isUpperCase("AMOR")).toBe(true);
})

test("comprobar mayuscula en palabra amor", () => {
    expect(isUpperCase("amor")).toBe(false);
})