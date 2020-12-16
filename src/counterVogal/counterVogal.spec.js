const counterVogal = require('./index')

describe("Counter Vogal", () => {

  it("Deve retornar um erro casos o valor não seja uma string", () => {
    const inputValue = 123
    const responseExpected = "O valor não é uma string"

    const result = counterVogal(inputValue)

    expect(result).toBe(responseExpected)
  })

  it("Deve contar quantas vogais contem a palavra - Macarrão",() => {
    const inputValue = "Macarrão"
    const responseExpected = 4

    const result = counterVogal(inputValue)

    expect(result).toBe(responseExpected)
  })

  it("Deve contar quantas vogais contem - A-E-I-O-U a-e-i-o-u",() => {
    const inputValue = "A-E-I-O-U a-e-i-o-u"
    const responseExpected = 10

    const result = counterVogal(inputValue)

    expect(result).toBe(responseExpected)
  })

  it("Deve contar quantas vogais contem uma frase com 109 caracteres", () => {
    const inputValue = "Você pode encarar um erro como uma besteira a ser esquecida ou como um resultado que aponta uma nova direção."
    const responseExpected = 47

    const result = counterVogal(inputValue)

    expect(result).toBe(responseExpected)
  })

})
