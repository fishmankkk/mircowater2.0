import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query, queryTableFilter, autograph, querySmsAccount } from 'services/sms-dashboard'
import { model } from 'models/common'

export default modelExtend(model, {
  namespace: 'smsDashboard',
  state: {
    smsAutographTableData: [],
    smsAutographTableCol: [],
    smsAccountTableLoading: false,
    smsAccountTableData: [],
    smsAccountTableCol: [],
    tableFilterDataVal: {},
    tableFilterData: [],
    modelViewFlag: false,
    tableViewFlag: false,
    smsPopTitle: '新增签名',
    smsPopupBody: [],
    formDefaultValue: {},
    smsAutographDataType: [{
      key: 'name',
      text: '帐号',
      placeholder: '请输入帐号',
      formType: 'input',
      rules: [{ required: true, message: '请填写帐号' }],
    },
    {
      key: 'status',
      text: '剩余条数',
      placeholder: '请填写条数',
      formType: 'input',
      disabled: true,
      rules: [{ required: true, message: '请填写条数' }],
    },
    {
      key: 'date',
      text: '日期',
      placeholder: '请填写日期',
      formType: 'dateTimePicker',
      rules: [{ required: true, message: '请填写日期' }],
    },
    {
      key: 'signKey',
      text: '签名',
      placeholder: '请填写签名',
      formType: 'input',
      rules: [{ required: true, message: '请填写签名' }],
    }],
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
      disabled: true,
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
          dispatch({ type: 'querySmsAccount' })
        }
      })
    },
  },
  effects: {
    * querySmsAccount ({
      payload,
    }, { call }) {
      yield call(querySmsAccount, parse(payload))
    },
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
    * autograph ({
      payload,
    }, { call, put }) {
      const data = yield call(autograph, parse(payload))
      yield put({ type: 'showTableView' })
      yield put({
        type: 'updateState',
        payload: data,
      })
    },
    * queryAccountGird ({
      payload,
    }, { call, put }) {
      yield put({ type: 'showSmsAccountTableLoading' })
      const data = yield call(query, parse(payload))
      yield put({
        type: 'updateState',
        payload: data,
      })
      yield put({ type: 'hideSmsAccountTableLoading' })
    },
    // 新增签名
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
    // 绑定帐号
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
    // 编辑签名
    * editAutographPopup ({
      payload,
    }, { put }) {
      try {
        yield put({ type: 'changePopupTitle', payload })
        yield put({ type: 'changePopupBodyEditAutograph', payload })
        yield put({ type: 'showModelView' })
      } catch (e) {
        console.log(e.message)
      }
    },
    // 显示弹窗
    * editAutograph ({ put }) {
      try {
        yield put({ type: 'showEditAutographView' })
      } catch (e) {
        console.log(e.message)
      }
    },
    // 显示表单弹窗
    * showModelView ({ put }) {
      try {
        yield put({ type: 'showModelView' })
      } catch (e) {
        console.log(e.message)
      }
    },
    // 隐藏表单弹窗
    * hideModelView ({ put }) {
      try {
        yield put({ type: 'hideModelView' })
      } catch (e) {
        console.log(e.message)
      }
    },
  },
  reducers: {
    // 卡片表格loading
    showSmsAccountTableLoading (state) {
      return {
        ...state,
        smsAccountTableLoading: true,
      }
    },
    hideSmsAccountTableLoading (state) {
      return {
        ...state,
        smsAccountTableLoading: false,
      }
    },
    // form弹窗
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
    // table弹窗
    showTableView (state) {
      return {
        ...state,
        tableViewFlag: true,
      }
    },
    hideTableView (state) {
      return {
        ...state,
        tableViewFlag: false,
      }
    },
    // form弹窗标题
    changePopupTitle (state, { payload }) {
      const { smsPopTitle } = payload
      return {
        ...state,
        smsPopTitle,
      }
    },
    // form弹窗帐号绑定内容
    changePopupBodyAccount (state) {
      return {
        ...state,
        smsPopupBody: state.smsBindAccount,
        formDefaultValue: {},
      }
    },
    // form弹窗新增签名内容
    changePopupBodyAutograph (state) {
      return {
        ...state,
        smsPopupBody: state.smsNewAutograph,
        formDefaultValue: {},
      }
    },
    // form弹窗编辑签名内容
    changePopupBodyEditAutograph (state, { payload }) {
      const { record } = payload
      return {
        ...state,
        smsPopupBody: state.smsAutographDataType,
        formDefaultValue: record,
      }
    },
  },
})
