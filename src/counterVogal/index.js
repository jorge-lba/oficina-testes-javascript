const counterVogal = (message) => {
  if(typeof message !== "string") return "O valor não é uma string"

  const vogal = ['a', 'e', 'i', 'o', 'u']

  const messageLetters = message.normalize('NFD').replace(/[^a-zA-Zs]/g, '').split('')
  
  const result = vogal.reduce((acc, letter) => {
    const letters = messageLetters.filter(item => item === letter)
    return acc + letters.length
  } , 0)

  return result
}

module.exports = counterVogal