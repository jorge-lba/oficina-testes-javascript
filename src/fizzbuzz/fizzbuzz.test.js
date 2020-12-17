const fizzBuzz = require('./fizzbuzz')

describe('FizzBuzz', () => {
  it('Caso não seja um array retorne um erro', () => {
    const inputValue = 'ERROR'
    const responseExpected = 'O valor não é um ARRAY'

    const result = fizzBuzz(inputValue)

    expect(result).toBe(responseExpected)
  })

  it('Deve retornar Fizz com a entrada do valor 3', () => {
    const inputValue = [3]
    const responseExpected = ['Fizz']

    const result = fizzBuzz(inputValue)

    expect(result).toEqual(responseExpected)
  })

  it('Deve retornar Buzz com a entrada do valor 5', () => {
    const inputValue = [5]
    const responseExpected = ['Buzz']

    const result = fizzBuzz(inputValue)

    expect(result).toEqual(responseExpected)
  })

  it('Deve retornar o mesmo numero da entrada', () => {
    const inputValue = [2]
    const responseExpected = [2]

    const result = fizzBuzz(inputValue)

    expect(result).toEqual(responseExpected)
  })

  it('Múltiplos valores de entrada', () => {
    const inputValue = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
      11, 12, 13, 14, 15, 16, 17, 18, 
      19, 20, 21, 22, 23, 24, 25, 26, 
      27, 28, 29, 30
    ]

    const responseExpected = [
      1,      2,      'Fizz',
      4,      'Buzz', 'Fizz',
      7,      8,      'Fizz',
      'Buzz', 11,     'Fizz',
      13,     14,     'FizzBuzz',
      16,     17,     'Fizz',
      19,     'Buzz', 'Fizz',
      22,     23,     'Fizz',
      'Buzz', 26,     'Fizz',
      28,     29,     'FizzBuzz'
    ]

    const result = fizzBuzz(inputValue)

    expect(result).toEqual(responseExpected)
  })

})
