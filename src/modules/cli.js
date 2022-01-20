const readline = require('readline')

const {
  questionColor,
  errorColor
} = require('./colors')

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

const createQuestion = (reference, question) => {
  const questionPromise = () => new Promise((resolve, reject) => {
    rlInterface.question(questionColor(`> ${question} -> `), answer => {
      if (reference === 'Player' || reference === 'Dice') {
        const answerToInt = parseInt(answer)
        !answer || isNaN(answerToInt) ? reject() : resolve(answer)
      }
      if (reference === 'Player Name') !answer ? reject() : resolve(answer)
      if (reference === 'Action') !answer ? reject() : resolve(answer)
      reject('Dont have any reference.')
    })
  })

  return questionPromise()
    .then(result => result)
    .catch(err => {
      console.log(errorColor(`(!) Answer of ${reference} not found: ${err}`))
      console.log(errorColor(`    Please fill with number and not alphabet`))
    })
}

const close = () => {
  rlInterface.close()
}

const cli = {
  createQuestion,
  close
}

module.exports = cli