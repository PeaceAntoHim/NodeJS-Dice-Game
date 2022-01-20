const printPlayerList = async table => {
  console.log(table)
}

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const getSomePlayerDices = totalDices => {
  let personalDices = []
  for (let i = 0; i < totalDices; i++) {
    const number = getRandomNumber(1, 7)
    personalDices.push(number)
  }
  
  return personalDices
}

module.exports = {
  printPlayerList,
  getRandomNumber,
  getSomePlayerDices
}