import { testapi1, mockapi1 } from 'services/testapi'

export default {
  namespace: 'testapi',
  state: {
    loginLoading: false,
  },
  subscriptions: {

    setup ({ dispatch }) {
      dispatch({ type: 'mockfirst' })
    },

  },
  effects: {
    * login ({
      payload = {},
    }, { call }) {
      console.log('ds')
      yield call(testapi1, payload)
    },
    * mockfirst ({
      payload = {},
    }, { call }) {
      yield call(mockapi1, payload)
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
