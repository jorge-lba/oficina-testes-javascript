const fizzBuzz = (values) => {
  if(!Array.isArray(values)) return 'O valor não é um ARRAY'

  return values.map(value => {
    let result = ''

    if(value%3 === 0) result += 'Fizz'
    if(value%5 === 0) result += 'Buzz'

    if(!result) result = value
    
    return result
  })
}

module.exports = fizzBuzz