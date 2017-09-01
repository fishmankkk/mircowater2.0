import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'dva/router'
import App from 'view/app'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('models/dashboard'))
          cb(null, { component: require('view/dashboard/') })
        }, 'dashboard')
      },
      childRoutes: [
        {
          path: 'dashboard',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/dashboard'))
              cb(null, require('view/dashboard/'))
            }, 'dashboard')
          },
        }, {
          path: 'user',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/user'))
              cb(null, require('view/user/'))
            }, 'user')
          },
        }, {
          path: 'user/:id',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/user/detail'))
              cb(null, require('view/user/detail/'))
            }, 'user-detail')
          },
        }, {
          path: 'component/button',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('view/component/button/'))
            }, 'component-button')
          },
        }, {
          path: 'login1',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('view/login1/model/index'))
              cb(null, require('view/login1/'))
            }, 'login')
          },
        }, {
          path: 'login',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/login'))
              cb(null, require('view/login/'))
            }, 'login1')
          },
        }, {
          path: 'request',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('view/request/'))
            }, 'request')
          },
        }, {
          path: 'UIElement/iconfont',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('view/UIElement/iconfont/'))
            }, 'UIElement-iconfont')
          },
        }, {
          path: 'UIElement/search',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('view/UIElement/search/'))
            }, 'UIElement-search')
          },
        }, {
          path: 'UIElement/dropOption',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('view/UIElement/dropOption/'))
            }, 'UIElement-dropOption')
          },
        }, {
          path: 'UIElement/layer',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('view/UIElement/layer/'))
            }, 'UIElement-layer')
          },
        }, {
          path: 'UIElement/dataTable',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('view/UIElement/dataTable/'))
            }, 'UIElement-dataTable')
          },
        }, {
          path: 'UIElement/editor',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('view/UIElement/editor/'))
            }, 'UIElement-editor')
          },
        }, {
          path: 'chart/lineChart',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('view/chart/lineChart/'))
            }, 'chart-lineChart')
          },
        }, {
          path: 'chart/barChart',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('view/chart/barChart/'))
            }, 'chart-barChart')
          },
        }, {
          path: 'chart/areaChart',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('view/chart/areaChart/'))
            }, 'chart-areaChart')
          },
        }, {
          path: 'post',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/post'))
              cb(null, require('view/post/'))
            }, 'post')
          },
        }, {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('view/error/'))
            }, 'error')
          },
        },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
