import { setCurrentUser } from '../utils/user';
import userApi from '../api/user';

export default {
  namespace: 'user',
  state: {
    CURRENT: null,
  },
  effects: {
    login: [
      function* ({ payload }: any, { call, put }: any) {
        const response = yield call(userApi.login, payload);
        yield put({
          type: 'userLogin',
          payload: response.data || [],
        });
      },
      { type: 'takeEvery' },
    ],
    getCurrentDetails: [
      function* ({ payload }: any, { put, call, select }: any) {
        const currentSelector = state => state.user.CURRENT;
        const currentUser = yield select(currentSelector);

        if (!currentUser) {
          const currentDetails = yield call(userApi.getCurrentDetails, payload);
          yield put({
            type: 'setCurrent',
            payload: currentDetails,
          });
        }
      },
      { type: 'takeEvery' },
    ],
  },
  reducers: {
    setCurrent(_: any, { payload }: any) {
      setCurrentUser(payload);
      return {
        CURRENT: payload,
      };
    },
    userLogin(state: any, payload: any) {
      return {
        ...state,
        userLogin: payload,
      };
    },
  },
};
