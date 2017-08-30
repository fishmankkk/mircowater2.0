import { color } from '../utils/theme'

const Mock = require('mockjs')
const config = require('../utils/config')

const { apiPrefix } = config

const Dashboard = Mock.mock({
  'sales|8': [
    {
      'name|+1': 2008,
      '普通用户|200-500': 1,
      'VIP用户|180-400': 1,
      'VVIP用户|300-550': 1,
    },
  ],
  cpu: {
    '已用|50-600': 1,
    space: 825,
    'cpu|40-90': 1,
    'data|20': [
      {
        'cpu|20-80': 1,
      },
    ],
  },
  browser: [
    {
      name: '现有客户活跃度',
      percent: 43.3,
      status: 1,
    },
    {
      name: '冰用户比例',
      percent: 33.4,
      status: 2,
    },
    {
      name: '有交易用户比例',
      percent: 34.6,
      status: 3,
    },
    {
      name: 'VIP用户比例',
      percent: 12.3,
      status: 4,
    },
    {
      name: '日均下降用户比例',
      percent: 3.3,
      status: 1,
    },
    {
      name: '日增用户比例',
      percent: 2.53,
      status: 1,
    },
  ],
  user: {
    name: '黄晓铿',
    email: '609745278@.qq.com',
    sales: 3241,
    sold: 3556,
    avatar: '//hbimg.b0.upaiyun.com/97f48b014ab58165efeaca7493b802b6aad7358b48174-HRuAri_fw236',
  },
  'completed|12': [
    {
      'name|+1': 2008,
      'VIP用户|200-1000': 1,
      '普通用户|200-1000': 1,
    },
  ],
  'comments|5': [
    {
      name: '@last',
      'status|1-3': 1,
      content: '@sentence',
      avatar () {
        return Mock.Random.image('48x48', Mock.Random.color(), '#757575', 'png', this.name.substr(0, 1))
      },
      date () {
        return `2016-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
      },
    },
  ],
  'recentSales|36': [
    {
      'id|+1': 1,
      name: '@last',
      'status|1-4': 1,
      date () {
        return `${Mock.Random.integer(2015, 2016)}-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
      },
      'price|10-200.1-2': 1,
    },
  ],
  quote: {
    name: 'fishman',
    title: 'micro water',
    content: '花瓣网, 设计师寻找灵感的天堂!图片素材领导者,帮你采集,发现网络上你喜欢的事物.你可以用它收集灵感,保存有用的素材,计划旅行,晒晒自己想要的东西',
    avatar: '//hbimg.b0.upaiyun.com/72f19a235b072a8d790baf05e5bc61da896734061bafb-k6sxcn_sq320',
  },
  numbers: [
    {
      icon: 'pay-circle-o',
      color: color.green,
      title: '剩余金额',
      number: 2781,
    }, {
      icon: 'team',
      color: color.blue,
      title: '发送人数',
      number: 241,
    }, {
      icon: 'message',
      color: color.purple,
      title: '发送条数',
      number: 3253,
    }, {
      icon: 'shopping-cart',
      color: color.red,
      title: '购物车',
      number: 4324,
    },
  ],
})

module.exports = {
  [`GET ${apiPrefix}/dashboard`] (req, res) {
    res.json(Dashboard)
  },
}
