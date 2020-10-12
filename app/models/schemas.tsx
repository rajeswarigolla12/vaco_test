import schemaApi from '../api/schemas';

export default {
  namespace: 'schema',
  state: {
    CURRENT: null,
  },
  effects: {
    eGetEnterpriseSchemas: [
      function* ({ payload }: any, { call, put }: any) {
        const response = yield call(schemaApi.getEnterpriseSchemas, payload);
        yield put({
          type: 'rGetEnterpriseSchemas',
          payload: response || [],
        });
        return response;
      },
      { type: 'takeEvery' },
    ],
    eGetMySchemas: [
      function* ({ payload }: any, { call, put }: any) {
        const response = yield call(schemaApi.getMySchemas, payload);
        yield put({
          type: 'rGetMySchemas',
          payload: response || [],
        });
        return response;
      },
      { type: 'takeEvery' },
    ],
    eCopyEnterpriseSchemas: [
      function* ({ payload }: any, { call, put }: any) {
        const response = yield call(schemaApi.getEnterpriseSchemas, payload);
         const data = response.filter((value)=>value.id === payload.id);
         data.forEach(value => {value.action = "Copy";});
        yield put({
          type: 'rCopyEnterpriseSchemas',
          payload: data || [],
        });
        return response;
      },
      { type: 'takeEvery' },
    ],
    eCopyMySchemas: [
      function* ({ payload }: any, { call, put }: any) {
        const response = yield call(schemaApi.getMySchemas, payload);
        const data = response.filter((value)=>value.id === payload.id);
        data.forEach(value => {value.action = "Copy";});
        yield put({
          type: 'rCopyMySchemas',
          payload: data || [],
        });
        return response;
      },
      { type: 'takeEvery' },
    ],
    eUpdateMySchemas: [
      function* ({ payload }: any, { call, put }: any) {
        const response = yield call(schemaApi.getMySchemas, payload);
        const data = response.filter((value)=>value.id === payload.id);
        data.forEach(value => {value.action = "Edit";});
        yield put({
          type: 'rUpdateMySchemas',
          payload: data || [],
        });
        return response;
      },
      { type: 'takeEvery' },
    ],
  },
  reducers: {
    rGetEnterpriseSchemas(state: any, response: any) {
      return {
        ...state,
        EnterpriseSchemas: response.payload,
      };
    },
    rGetMySchemas(state: any, response: any) {
      return {
        ...state,
        MySchemas: response.payload,
      };
    },
    rCopyEnterpriseSchemas(state: any, response: any) {
      return {
        ...state,
        EnterpriseSchemas: response.payload,
      };
    },
    rCopyMySchemas(state: any, response: any) {
      return {
        ...state,
        MySchemas: response.payload,
      };
    },
    rUpdateMySchemas(state: any, response: any) {
      return {
        ...state,
        MySchemas: response.payload,
      };
    },
  },
};
