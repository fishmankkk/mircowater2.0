const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'laptop',
    name: '工作台',
    route: '/dashboard',
  },
  {
    id: '2',
    bpid: '1',
    name: '短信管理',
    icon: 'user',
    route: '/user',
  },
  {
    id: '7',
    bpid: '1',
    name: '关于我',
    icon: 'shopping-cart',
    route: '/post',
  },
  {
    id: '21',
    mpid: '-1',
    bpid: '2',
    name: 'User Detail',
    route: '/user/:id',
  },
  {
    id: '3',
    bpid: '1',
    name: '请求',
    icon: 'api',
    route: '/request',
  },
  {
    id: '4',
    bpid: '1',
    name: 'UI库',
    icon: 'camera-o',
  },
  {
    id: '41',
    bpid: '4',
    mpid: '4',
    name: '图标',
    icon: 'heart-o',
    route: '/UIElement/iconfont',
  },
  {
    id: '42',
    bpid: '4',
    mpid: '4',
    name: '表格',
    icon: 'database',
    route: '/UIElement/dataTable',
  },
  {
    id: '43',
    bpid: '4',
    mpid: '4',
    name: '下拉框',
    icon: 'bars',
    route: '/UIElement/dropOption',
  },
  {
    id: '44',
    bpid: '4',
    mpid: '4',
    name: '搜索',
    icon: 'search',
    route: '/UIElement/search',
  },
  {
    id: '45',
    bpid: '4',
    mpid: '4',
    name: '编辑器',
    icon: 'edit',
    route: '/UIElement/editor',
  },
  {
    id: '46',
    bpid: '4',
    mpid: '4',
    name: '弹框 (Function)',
    icon: 'credit-card',
    route: '/UIElement/layer',
  },
  {
    id: '5',
    bpid: '1',
    name: '图标',
    icon: 'code-o',
  },
  {
    id: '51',
    bpid: '5',
    mpid: '5',
    name: '线图',
    icon: 'line-chart',
    route: '/chart/lineChart',
  },
  {
    id: '52',
    bpid: '5',
    mpid: '5',
    name: '柱状图',
    icon: 'bar-chart',
    route: '/chart/barChart',
  },
  {
    id: '53',
    bpid: '5',
    mpid: '5',
    name: 'AreaChart',
    icon: 'area-chart',
    route: '/chart/areaChart',
  },
  {
    id: '6',
    bpid: '1',
    name: '测试',
    icon: 'setting',
  },
  {
    id: '61',
    bpid: '6',
    mpid: '6',
    name: '测试1',
    route: '/navigation/navigation1',
  },
  {
    id: '62',
    bpid: '6',
    mpid: '6',
    name: '测试2',
    route: '/navigation/navigation2',
  },
  {
    id: '621',
    bpid: '62',
    mpid: '62',
    name: '测试21',
    route: '/navigation/navigation2/navigation1',
  },
  {
    id: '622',
    bpid: '62',
    mpid: '62',
    name: '测试22',
    route: '/navigation/navigation2/navigation2',
  },
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
