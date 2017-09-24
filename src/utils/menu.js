let menuLists = [
  {
    text: '短信工作台',
    icon: 'laptop',
    key: 'sms-dashboard',
    route: '/sms/sms-dashboard',
  },
  // {
  //   text: '工作台',
  //   icon: 'laptop',
  //   key: 'dashboard',
  //   route: '/dashboard',
  // },
  // {
  //   text: '短信管理',
  //   icon: 'mail',
  //   key: 'sms',
  //   children: [
  //     {
  //       text: '短信工作台',
  //       icon: 'laptop',
  //       key: 'sms-dashboard',
  //       route: '/sms/sms-dashboard',
  //     },
  //     {
  //       text: '签名管理',
  //       icon: 'edit',
  //       key: 'sms-signature',
  //       route: '/sms/sms-signature',
  //     },
  //     {
  //       text: '帐号管理',
  //       icon: 'contacts',
  //       key: 'sms-account',
  //       route: '/sms/sms-account',
  //     },
  //   ],
  // },
  // {
  //   text: '组件库',
  //   icon: 'shop',
  //   key: 'component-lib',
  //   children: [
  //     {
  //       text: '基础',
  //       icon: 'heart-o',
  //       key: 'component-base',
  //       route: '/component/base',
  //     },
  //     {
  //       text: '表单',
  //       icon: 'solution',
  //       key: 'component-form',
  //       route: '/component/form',
  //     },
  //     {
  //       text: '扩展组件',
  //       icon: 'paper-clip',
  //       key: 'component-base-expand',
  //       route: '/component/base-expand',
  //     },
  //     {
  //       text: '表格1',
  //       icon: 'copy',
  //       key: 'component-table1',
  //       route: '/component/table1',
  //     },
  //     {
  //       text: '表格2',
  //       icon: 'copy',
  //       key: 'component-table2',
  //       route: '/component/table2',
  //     },
  //   ],
  // },
  // {
  //   text: '代码规范',
  //   icon: 'code-o',
  //   key: 'codeRules',
  //   children: [
  //     {
  //       text: 'CSS规范',
  //       icon: 'meh-o',
  //       key: 'codeRules-codeCss',
  //       route: '/codeRules/codeCss',
  //     },
  //   ],
  // }, {
  //   text: '关于我',
  //   icon: 'shopping-cart',
  //   key: 'about-me',
  //   route: '/post',
  // }, {
  //   text: '请求',
  //   icon: 'api',
  //   key: 'request',
  //   route: '/request',
  // }, {
  //   text: 'UI库',
  //   icon: 'camera-o',
  //   key: 'UIElement',
  //   children: [
  //     {
  //       text: '图标',
  //       icon: 'heart-o',
  //       key: 'UIElement-iconfont',
  //       route: '/UIElement/iconfont',
  //     },
  //     {
  //       text: '表格',
  //       icon: 'database',
  //       key: 'UIElement-dataTable',
  //       route: '/UIElement/dataTable',
  //     },
  //     {
  //       text: '下拉框',
  //       icon: 'bars',
  //       key: 'UIElement-dropOption',
  //       route: '/UIElement/dropOption',
  //     },
  //     {
  //       text: '搜索',
  //       icon: 'search',
  //       key: 'UIElement-search',
  //       route: '/UIElement/search',
  //     },
  //     {
  //       text: '编辑器',
  //       icon: 'edit',
  //       key: 'UIElement-editor',
  //       route: '/UIElement/editor',
  //     },
  //     {
  //       text: '弹框 (Function)',
  //       icon: 'credit-card',
  //       key: 'UIElement-layer',
  //       route: '/UIElement/layer',
  //     },
  //   ],
  // }, {
  //   text: '图表',
  //   icon: 'code-o',
  //   key: 'chart',
  //   children: [
  //     {
  //       text: '线图',
  //       icon: 'line-chart',
  //       key: 'chart-lineChart',
  //       route: '/chart/lineChart',
  //     },
  //     {
  //       text: '柱状图',
  //       icon: 'bar-chart',
  //       key: 'chart-barChart',
  //       route: '/chart/barChart',
  //     },
  //     {
  //       text: 'AreaChart',
  //       icon: 'area-chart',
  //       key: 'chart-areaChart',
  //       route: '/chart/areaChart',
  //     },
  //   ],
  // },
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

module.exports = { database }
