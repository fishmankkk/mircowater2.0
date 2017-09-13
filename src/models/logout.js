import { routerRedux } from 'dva/router'
import { queryURL } from 'utils'
import { login } from 'services/logout'

export default {
  namespace: 'logout',
  state: {
    loginLoading: false,
    confirmDirty: false,
  },

  effects: {
    * logout ({
      payload,
    }, { put, call }) {
      yield put({ type: 'showLoginLoading' })
      const data = yield call(login, payload)
      yield put({ type: 'hideLoginLoading' })
      if (data.success) {
        const from = queryURL('from')
        yield put({ type: 'app/query' })
        if (from) {
          yield put(routerRedux.push(from))
        } else {
          yield put(routerRedux.push('/dashboard'))
        }
      } else {
        throw new Error('注册失败')
      }
    },

    * goLogin ({
      payload,
    }, { call }) {
      console.log(payload)
      yield call(routerRedux.push('/'))
    },
  },
  reducers: {
    showLoginLoading (state) {
      return {
        ...state,
        loginLoading: true,
      }
    },
    hideLoginLoading (state) {
      return {
        ...state,
        loginLoading: false,
      }
    },
  },
}
