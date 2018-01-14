import superagent from 'superagent';

const API = '$(___API_URL___)/visual_files';

const createAction = payload => ({
  type: 'FILEDATA_CREATE',
  payload,
});

const initAction = payload => ({
  type: 'INIT',
  payload,
});

export const create = payload => (dispatch) => {
  dispatch(createAction(payload));
};

export const initialize = (dispatch) => {
  superagent.get(API)
    .then(res => dispatch(initAction(res.body)))
    .catch(console.log);
};
