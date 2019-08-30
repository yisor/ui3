
import { routerRedux } from 'dva/router';

export default {

  namespace: 'app',

  state: {
    tab: 'checkin',
    name: '默认值',
  },

  reducers: {
    changeTab(state, action) {
      return {...state, tab: action.payload};
    },
  },

  effects: {
    *login({ payload }, { call, put }) {
      yield put({ type: 'save', payload });
      yield put(routerRedux.push('/user'));
    },
    *logout({ payload }, { call, put }) {
      yield put({ type: 'save', payload: null });
      yield put(routerRedux.push('/'));
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        console.log('pathname:' + pathname);
        switch (pathname) {
          case '/':
            break;
          default: break;
        }
      });
    },
  },

};
