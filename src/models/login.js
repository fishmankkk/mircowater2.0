import { routerRedux } from 'dva/router'
import { queryURL } from 'utils'
import { login } from 'services/login'

export default {
  namespace: 'login',
  state: {
    loginLoading: false,
  },

  effects: {
    * login ({
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
        throw new Error('登录失败')
      }
    },

    * goLogout ({
      payload,
    }, { put }) {
      console.log(payload)
      yield put(routerRedux.push('/logout'))
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
