const type = ['attack', 'defense', 'others']

const cardType = [
  {
    type: 'attack',
    color: '#d62626',
    name: 'A',
    points: 0,
    consumeBlue: 0,
    consumeYellow: 1,
    content: '攻击点数'
  },
  {
    type: 'defense',
    color: '#4169E1',
    name: 'D',
    points: 0,
    consumeBlue: 1,
    consumeYellow: 1,
    content: '防御加成'
  },
  {
    type: 'others',
    color: '#e68013',
    name: 'O',
    points: '#',
    consumeBlue: 0,
    consumeYellow: 0,
    content: ''
  }
]

export default { type, cardType }
