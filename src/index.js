const Table = require('cli-table3')
const cli = require('./modules/cli')
const gameplay = require('./modules/gameplay')

var table = new Table({
  head: ['No.', 'Players Name', 'Dice Number', 'Point']
, colWidths: [5, 20]
});

let totalPlayers
let totalDices
let players = []
let dicesResult = []
let status = 'starter'

const printQuestions = async () => {
  const getPlayers = await cli.createQuestion('Player', 'How many players will be play?')
  const getDices = await cli.createQuestion('Dice', 'How many dices you will play?')
  
  if (!getDices || !getPlayers) {
    console.log('Please answer all question correctly.')
    printQuestions()
  } else {
    totalPlayers = getPlayers
    totalDices = getDices
    console.log('---------------------------------------------')
    console.log(`Total: ${totalPlayers} players & and each players have ${totalDices} dices`)
  }
}

const insertPlayerNameAndPlayTheGame = async () => {
  const playerName = await cli.createQuestion('Player Name', `Please insert players username`)
  players.push(playerName)
  const playerIndexPosition = players.indexOf(playerName)
  table.push([playerIndexPosition + 1, playerName, null, 0])
  players.length < totalPlayers ? insertPlayerNameAndPlayTheGame() : runningGamePlay()
}

const rollTheDices = async () => {
  for (let i = 0; i < totalPlayers; i++) {
    const rolledNumbers = gameplay.getSomePlayerDices(totalDices)
    dicesResult.push(rolledNumbers)
  }

  console.log(dicesResult)
}

const runningGamePlay = async () => {
  let input
  switch (status) {
    case 'starter':
      await gameplay.printPlayerList(table.toString())
      input = await cli.createQuestion('Action', `Type 'roll' to roll the dice`)
      if (input === 'roll') {
        status = 'rolled'
        runningGamePlay()
      } else {
        status = 'typo'
        runningGamePlay()
      }
      break;
    case 'typo':
      input = await cli.createQuestion('Action', `You're typo, please type 'roll' to roll the dice`)
      if (input === 'roll') {
        status = 'rolled'
        runningGamePlay()
      } else {
        status = 'typo'
        runningGamePlay()
      }
      break;
    case 'rolled':
      await rollTheDices()
      await cli.createQuestion('Action', `You have rolled the dice`)
      status = 'rolled'
      runningGamePlay()
      break;
    default:
      break;
  }
}

const dadu_game = async () => {
  await printQuestions()
  await insertPlayerNameAndPlayTheGame()
}

module.exports = dadu_game