import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query, queryTableFilter, newAutograph } from 'services/sms-dashboard'
import { model } from 'models/common'

export default modelExtend(model, {
  namespace: 'smsDashboard',
  state: {
    smsAccountTableData: [],
    smsAccountTableCol: [],
    tableFilterDataVal: {},
    tableFilterData: [],
    modelViewFlag: false,
    smsPopTitle: '新增签名',
    smsPopupBody: [],
    smsNewAutograph: [{
      key: 'username',
      text: '通道',
      placeholder: '请输入通道',
      formType: 'input',
      rules: [{ required: true, message: '请填写通道' }],
    },
    {
      key: 'username1',
      text: '类型',
      placeholder: '请填写类型',
      formType: 'input',
      rules: [{ required: true, message: '请填写类型' }],
    },
    {
      key: 'signName',
      text: '签名',
      placeholder: '请填写签名',
      formType: 'input',
      rules: [{ required: true, message: '请填写签名' }],
    },
    {
      key: 'signName1',
      text: '服务号',
      placeholder: '请填写服务号',
      formType: 'input',
      rules: [{ required: true, message: '请填写服务号' }],
    }],
    smsBindAccount: [{
      key: 'username',
      text: '帐号',
      placeholder: '请输入帐号',
      formType: 'input',
      rules: [{ required: true, message: '请填写帐号' }],
    },
    {
      key: 'username1',
      text: '租户',
      placeholder: '请填写租户',
      formType: 'input',
      rules: [{ required: true, message: '请填写租户' }],
    },
    {
      key: 'signName',
      text: '组织',
      placeholder: '请填写组织',
      formType: 'input',
      rules: [{ required: true, message: '请填写组织' }],
    },
    {
      key: 'signName1',
      text: '服务号',
      placeholder: '请填写服务号',
      formType: 'input',
      rules: [{ required: true, message: '请填写服务号' }],
    }],
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
      const tableFilterData = yield call(queryTableFilter, parse(payload))
      yield put({
        type: 'updateState',
        payload: tableFilterData,
      })
    },
    * newAutograph ({
      payload,
    }, { put }) {
      try {
        yield put({ type: 'changePopupTitle', payload })
        yield put({ type: 'changePopupBodyAutograph' })
        yield put({ type: 'showModelView' })
      } catch (e) {
        console.log(e.message)
      }
    },
    * bindAccount ({
      payload,
    }, { put }) {
      try {
        yield put({ type: 'changePopupTitle', payload })
        yield put({ type: 'changePopupBodyAccount' })
        yield put({ type: 'showModelView' })
      } catch (e) {
        console.log(e.message)
      }
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
    changePopupTitle (state, { payload }) {
      const { smsPopTitle } = payload
      return {
        ...state,
        smsPopTitle,
      }
    },
    changePopupBodyAccount (state) {
      return {
        ...state,
        smsPopupBody: state.smsBindAccount,
      }
    },
    changePopupBodyAutograph (state) {
      return {
        ...state,
        smsPopupBody: state.smsNewAutograph,
      }
    },
  },
})
