import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from 'services/sms-dashboard'
import { model } from 'models/common'

export default modelExtend(model, {
  namespace: 'smsDashboard',
  state: {
    smsAccountTableData: [],
    smsAccountTableCol: [],
    modelViewFlag: false,
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/sms/sms-dashboard' || pathname === '/') {
          dispatch({ type: 'query' })
          dispatch({ type: 'queryWeather' })
        }
      })
    },
  },
  effects: {
    * query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, parse(payload))
      yield put({
        type: 'updateState',
        payload: data,
      })
    },
    // * changeModelView ({
    //   payload,
    // }, { put }) {
    //   const data = payload
    //   yield put({
    //     type: 'updateState',
    //     payload: data,
    //   })
    // },
    * showModelView ({ put }) {
      try {
        yield put({ type: 'showModelView' })
      } catch (e) {
        console.log(e.message)
      }
    },
    * hideModelView ({ put }) {
      try {
        yield put({ type: 'hideModelView' })
      } catch (e) {
        console.log(e.message)
      }
    },
  },
  reducers: {
    showModelView (state) {
      return {
        ...state,
        modelViewFlag: true,
      }
    },
    hideModelView (state) {
      return {
        ...state,
        modelViewFlag: false,
      }
    },
  },
})
