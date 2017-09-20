const Mock = require('mockjs')
const config = require('../utils/config')

const { apiPrefix } = config

const Dashboard = Mock.mock({
  'smsAccountTableData|12': [
    {
      'id|+1': 1,
      name: '@last',
      'status|1000-4000': 1,
      date () {
        return `${Mock.Random.integer(2015, 2016)}-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
      },
      signKey () {
        return `${Mock.Random.region()}` + `${'申通'}`
      },
    },
  ],
  smsAccountTableCol: [
    {
      title: '帐号',
      dataIndex: 'name',
    }, {
      title: '剩余条数',
      dataIndex: 'status',
    }, {
      title: 'DATE',
      dataIndex: 'date',
    }, {
      title: '签名',
      dataIndex: 'signKey',
    },
  ],
})

module.exports = {
  [`GET ${apiPrefix}/sms-dashboard`] (req, res) {
    res.json(Dashboard)
  },
}
