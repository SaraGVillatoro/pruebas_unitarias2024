const palindromo = require('../utils/palindromo');
test("comprobar palindromo amor", () => {
expect (palindromo("amor")).toBe("roma")
})

test("comprobar palindromo amor", () => {
    expect (palindromo("amor")).toBe("rome")
    })