const baseData = {
  TYPE: ['attack', 'defense', 'others'],
  CARD_TYPE: [
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
  ],
  MENU_LIST: [
    {
      name: 'setout',
      title: '准备'
    },
    {
      name: 'start',
      title: '开始'
    },
    {
      name: 'center',
      title: '个人中心'
    },
    {
      name: 'about',
      title: '关于'
    },
    {
      name: 'test',
      title: 'test'
    },
    {
      name: 'cards',
      title: '卡牌图鉴'
    },
    {
      name: 'eventCards',
      title: '事件卡牌图鉴'
    },
    {
      name: 'sponsorship',
      title: '赞助'
    }
  ]
}

export default baseData
