const arr = [...Array(9).keys()]

const attacks = arr.map(item => {
  return {
    type: 'attack',
    color: '#d62626',
    name: 'A',
    points: item + 1,
    consumeBlue: 0,
    consumeYellow: 0,
    content: '攻击点数'
  }
})

const defenses = arr.map(item => {
  return {
    type: 'defense',
    color: '#4169E1',
    name: 'D',
    points: item + 1,
    consumeBlue: 0,
    consumeYellow: 0,
    content: '防御加成'
  }
})

const others = arr.map(item => {
  return {
    type: 'others',
    color: '#e68013',
    name: 'O',
    points: item + 1,
    consumeBlue: 0,
    consumeYellow: 0,
    content: '功能描述'
  }
})

const cardGroups = {
  attacks,
  defenses,
  others
}

export default cardGroups
