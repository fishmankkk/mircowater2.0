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
        return `${Mock.Random.region()}申通`
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
      title: '日期',
      dataIndex: 'date',
    }, {
      title: '签名',
      dataIndex: 'signKey',
    },
  ],
  smsAccountTableDataType: [
    {
      title: '帐号',
      dataIndex: 'name',
    }, {
      title: '剩余条数',
      dataIndex: 'status',
    }, {
      title: '日期',
      dataIndex: 'date',
    }, {
      title: '签名',
      dataIndex: 'signKey',
    },
  ],
})

const tableFilter = Mock.mock({
  tableFilterDataVal: {
    username: '测试',
    signName: '中国',
    data: ['2017/09/08', '2017/09/18'],
    signname1: 'hn',
    passageway: ['zhejiang', 'hangzhou'],
  },
  tableFilterData: [
    {
      key: 'username',
      text: '帐号',
      placeholder: '请输入帐号',
      formType: 'input',
    },
    {
      key: 'signName',
      text: '签名',
      placeholder: '请输入要搜索的签名',
      formType: 'input',
    },
    {
      key: 'data',
      text: '日期',
      placeholder: '请输入帐号',
      formType: 'rangePicker',
    },
    {
      key: 'signname1',
      text: '签名',
      placeholder: '请选择的签名',
      formType: 'select',
      styles: { width: 200 },
      option: [{
        label: '华南申通',
        value: 'hn',
      },
      {
        label: '东北申通',
        value: 'db',
      },
      {
        label: '华中申通',
        value: 'hz',
      }],
    },
    {
      key: 'passageway',
      text: '通道/签名',
      placeholder: '请选择的通道/签名',
      formType: 'cascader',
      option: [
        {
          value: 'zhejiang',
          label: '汽车行业',
          children: [
            {
              value: 'hangzhou',
              label: '陆丰汽车',
            },
            {
              value: 'nanjing',
              label: '广汽本田',
            },
          ],
        },
        {
          value: 'jiangsu',
          label: '快递行业',
          children: [
            {
              value: 'sto',
              label: '申通快递',
            },
            {
              value: 'zt',
              label: '中通快递',
            },
          ],
        },
      ],
    },
  ],
})

const smsNewAutograph = Mock.mock({
  tableFilterDataVal: {
  },
  tableFilterData: [
    {
      key: 'passageway',
      text: '通道',
      placeholder: '请输入通道',
      formType: 'input',
    },
    {
      key: 'smsType',
      text: '类型',
      placeholder: '请输入类型',
      formType: 'input',
    },
    {
      key: 'signName',
      text: '签名',
      placeholder: '请输入签名',
      formType: 'input',
    },
    {
      key: 'serveCode',
      text: '服务号',
      placeholder: '请输入签名',
      formType: 'input',
    },
    {
      key: 'signName',
      text: '签名',
      placeholder: '请输入要搜索的签名',
      formType: 'input',
    },
  ],
})

module.exports = {
  [`GET ${apiPrefix}/sms-dashboard`] (req, res) {
    res.json(Dashboard)
  },
  [`GET ${apiPrefix}/sms-dashboard-tablefilter`] (req, res) {
    res.json(tableFilter)
  },
  [`GET ${apiPrefix}/sms-dashboard-newAutograph`] (req, res) {
    res.json(smsNewAutograph)
  },
}
