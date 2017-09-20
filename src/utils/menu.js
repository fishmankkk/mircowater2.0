let menuLists = [
  {
    text: '工作台',
    icon: 'laptop',
    key: 'dashboard',
    route: '/dashboard',
  },
  {
    text: '短信管理',
    icon: 'mail',
    key: 'sms',
    children: [
      {
        text: '短信工作台',
        icon: 'laptop',
        key: 'sms-dashboard',
        route: '/sms/sms-dashboard',
      },
      {
        text: '签名管理',
        icon: 'edit',
        key: 'sms-signature',
        route: '/sms/sms-signature',
      },
      {
        text: '帐号管理',
        icon: 'contacts',
        key: 'sms-account',
        route: '/sms/sms-account',
      },
    ],
  },
  {
    text: '组件库',
    icon: 'shop',
    key: 'component-lib',
    children: [
      {
        text: '基础',
        icon: 'heart-o',
        key: 'component-base',
        route: '/component/base',
      },
      {
        text: '表单',
        icon: 'solution',
        key: 'component-form',
        route: '/component/form',
      },
      {
        text: '扩展组件',
        icon: 'paper-clip',
        key: 'component-base-expand',
        route: '/component/base-expand',
      },
      {
        text: '表格1',
        icon: 'copy',
        key: 'component-table1',
        route: '/component/table1',
      },
      {
        text: '表格2',
        icon: 'copy',
        key: 'component-table2',
        route: '/component/table2',
      },
    ],
  },
  {
    text: '代码规范',
    icon: 'code-o',
    key: 'codeRules',
    children: [
      {
        text: 'CSS规范',
        icon: 'meh-o',
        key: 'codeRules-codeCss',
        route: '/codeRules/codeCss',
      },
    ],
  }, {
    text: '关于我',
    icon: 'shopping-cart',
    key: 'about-me',
    route: '/post',
  }, {
    text: '请求',
    icon: 'api',
    key: 'request',
    route: '/request',
  }, {
    text: 'UI库',
    icon: 'camera-o',
    key: 'UIElement',
    children: [
      {
        text: '图标',
        icon: 'heart-o',
        key: 'UIElement-iconfont',
        route: '/UIElement/iconfont',
      },
      {
        text: '表格',
        icon: 'database',
        key: 'UIElement-dataTable',
        route: '/UIElement/dataTable',
      },
      {
        text: '下拉框',
        icon: 'bars',
        key: 'UIElement-dropOption',
        route: '/UIElement/dropOption',
      },
      {
        text: '搜索',
        icon: 'search',
        key: 'UIElement-search',
        route: '/UIElement/search',
      },
      {
        text: '编辑器',
        icon: 'edit',
        key: 'UIElement-editor',
        route: '/UIElement/editor',
      },
      {
        text: '弹框 (Function)',
        icon: 'credit-card',
        key: 'UIElement-layer',
        route: '/UIElement/layer',
      },
    ],
  }, {
    text: '图表',
    icon: 'code-o',
    key: 'chart',
    children: [
      {
        text: '线图',
        icon: 'line-chart',
        key: 'chart-lineChart',
        route: '/chart/lineChart',
      },
      {
        text: '柱状图',
        icon: 'bar-chart',
        key: 'chart-barChart',
        route: '/chart/barChart',
      },
      {
        text: 'AreaChart',
        icon: 'area-chart',
        key: 'chart-areaChart',
        route: '/chart/areaChart',
      },
    ],
  },
]
let reBuildMenuFunc = function () {
  let dataMap = []
  for (let i = 0; i < menuLists.length; i++) {
    let idNum = (i + 1).toString()
    if (menuLists[i].route !== undefined) {
      dataMap.push({
        id: idNum,
        name: menuLists[i].text,
        icon: menuLists[i].icon,
        key: menuLists[i].key,
        route: menuLists[i].route,
      })
    } else {
      dataMap.push({
        id: idNum,
        bpid: '1',
        name: menuLists[i].text,
        key: menuLists[i].key,
        icon: menuLists[i].icon,
      })
      let len = menuLists[i].children.length
      for (let j = 0; j < len; j++) {
        let childNum = (j + 1).toString()
        dataMap.push({
          id: idNum + childNum,
          bpid: idNum,
          mpid: idNum,
          name: menuLists[i].children[j].text,
          icon: menuLists[i].children[j].icon,
          key: menuLists[i].children[j].key,
          route: menuLists[i].children[j].route,
        })
      }
    }
  }
  return dataMap
}
let database = reBuildMenuFunc()
// let database = [
//   {
//     id: '1',
//     icon: 'laptop',
//     name: '工作台',
//     route: '/dashboard',
//   },
//   // {
//   //   id: '2',
//   //   bpid: '1',
//   //   name: '短信管理',
//   //   icon: 'user',
//   //   route: '/user',
//   // },
//   {
//     id: '2',
//     bpid: '1',
//     name: '短信管理',
//     icon: 'mail',
//   },
//   {
//     id: '21',
//     bpid: '2',
//     mpid: '2',
//     name: '签名管理',
//     icon: 'edit',
//     route: '/sms/sms-signature',
//   },
//   {
//     id: '22',
//     bpid: '2',
//     mpid: '2',
//     name: '帐号管理',
//     icon: 'contacts',
//     route: '/sms/sms-account',
//   },
//   {
//     id: '10',
//     bpid: '1',
//     name: '接口测试',
//     icon: 'api',
//     route: '/testapi',
//   },
//   {
//     id: '3',
//     bpid: '1',
//     name: '组件库',
//     icon: 'shop',
//   },
//   {
//     id: '31',
//     bpid: '3',
//     mpid: '3',
//     name: '基础',
//     icon: 'heart-o',
//     route: '/component/base',
//   },
//   {
//     id: '32',
//     bpid: '3',
//     mpid: '3',
//     name: '表单',
//     icon: 'solution',
//     route: '/component/form',
//   },
//   {
//     id: '33',
//     bpid: '3',
//     mpid: '3',
//     name: '扩展组件',
//     icon: 'paper-clip',
//     route: '/component/base-expand',
//   },
//   {
//     id: '34',
//     bpid: '3',
//     mpid: '3',
//     name: '扩展组件2',
//     icon: 'paper-clip',
//     route: '/component/base-expand2',
//   },
//   {
//     id: '35',
//     bpid: '3',
//     mpid: '3',
//     name: '表格1',
//     icon: 'copy',
//     route: '/component/table1',
//   },
//   {
//     id: '36',
//     bpid: '3',
//     mpid: '3',
//     name: '表格2',
//     icon: 'copy',
//     route: '/component/table2',
//   },
//   {
//     id: '4',
//     bpid: '1',
//     name: '代码规范',
//     icon: 'code-o',
//   },
//   {
//     id: '41',
//     bpid: '4',
//     mpid: '4',
//     name: 'CSS规范',
//     icon: 'meh-o',
//     route: '/codeRules/codeCss',
//   },
//   {
//     id: '7',
//     bpid: '1',
//     name: '关于我',
//     icon: 'shopping-cart',
//     route: '/post',
//   },
//   {
//     id: '21',
//     mpid: '-1',
//     bpid: '2',
//     name: 'User Detail',
//     route: '/user/:id',
//   },
//   {
//     id: '8',
//     bpid: '1',
//     name: '请求',
//     icon: 'api',
//     route: '/request',
//   },
//   {
//     id: '9',
//     bpid: '1',
//     name: 'UI库',
//     icon: 'camera-o',
//   },
//   {
//     id: '91',
//     bpid: '9',
//     mpid: '9',
//     name: '图标',
//     icon: 'heart-o',
//     route: '/UIElement/iconfont',
//   },
//   {
//     id: '92',
//     bpid: '9',
//     mpid: '9',
//     name: '表格',
//     icon: 'database',
//     route: '/UIElement/dataTable',
//   },
//   {
//     id: '93',
//     bpid: '9',
//     mpid: '9',
//     name: '下拉框',
//     icon: 'bars',
//     route: '/UIElement/dropOption',
//   },
//   {
//     id: '94',
//     bpid: '9',
//     mpid: '9',
//     name: '搜索',
//     icon: 'search',
//     route: '/UIElement/search',
//   },
//   {
//     id: '95',
//     bpid: '9',
//     mpid: '9',
//     name: '编辑器',
//     icon: 'edit',
//     route: '/UIElement/editor',
//   },
//   {
//     id: '96',
//     bpid: '9',
//     mpid: '9',
//     name: '弹框 (Function)',
//     icon: 'credit-card',
//     route: '/UIElement/layer',
//   },
//   {
//     id: '5',
//     bpid: '1',
//     name: '图标',
//     icon: 'code-o',
//   },
//   {
//     id: '51',
//     bpid: '5',
//     mpid: '5',
//     name: '线图',
//     icon: 'line-chart',
//     route: '/chart/lineChart',
//   },
//   {
//     id: '52',
//     bpid: '5',
//     mpid: '5',
//     name: '柱状图',
//     icon: 'bar-chart',
//     route: '/chart/barChart',
//   },
//   {
//     id: '53',
//     bpid: '5',
//     mpid: '5',
//     name: 'AreaChart',
//     icon: 'area-chart',
//     route: '/chart/areaChart',
//   },
//   {
//     id: '6',
//     bpid: '1',
//     name: '测试',
//     icon: 'setting',
//   },
//   {
//     id: '61',
//     bpid: '6',
//     mpid: '6',
//     name: '测试1',
//     route: '/navigation/navigation1',
//   },
//   {
//     id: '62',
//     bpid: '6',
//     mpid: '6',
//     name: '测试2',
//     route: '/navigation/navigation2',
//   },
//   {
//     id: '621',
//     bpid: '62',
//     mpid: '62',
//     name: '测试21',
//     route: '/navigation/navigation2/navigation1',
//   },
//   {
//     id: '622',
//     bpid: '62',
//     mpid: '62',
//     name: '测试22',
//     route: '/navigation/navigation2/navigation2',
//   },
// ]

module.exports = { database }
