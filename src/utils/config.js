const APIV1 = '/api/v1'
const APIV2 = '/api/v2'
const PROXYAPI = 'proxyapi'

module.exports = {
  name: 'microwater',
  proxyApiName: '/MWater',
  prefix: 'antdAdmin',
  footerText: 'MICROWATER  © 2017 fishman',
  logo: '/logo.png',
  logoicon: 'favicon.ico',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login', '/logout'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userSignout: `${APIV1}/user/signout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    smsDashboard: `${APIV1}/sms-dashboard`,
    smsDashboardTableFilter: `${APIV1}/sms-dashboard-tablefilter`,
    smsDashboardNewAutograph: `${APIV1}/sms-dashboard-newAutograph`,
    smsDashboardAutograph: `${APIV1}/sms-dashboard-autograph`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
    testapi: `${PROXYAPI}/mock/59004d56739ac1685205e4e8/microwater/proxy`,
    mockapi: `${PROXYAPI}/mock/59004d56739ac1685205e4e8/microwater/mock`,
  },
}
