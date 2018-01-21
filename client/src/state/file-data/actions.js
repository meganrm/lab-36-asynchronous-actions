/* globals __API_URL__ */
import superagent from 'superagent';

const API = `${__API_URL__}/visual_files`;

const initAction = payload => ({
  type: 'INIT',
  payload,
});

const createAction = payload => ({
  type: 'CREATE',
  payload,
});

const updateAction = payload => ({
  type: 'UPDATE',
  payload,
});

const deleteAction = todo => ({
  type: 'DELETE',
  payload: todo,
});

export const init = () => (dispatch) => {
  superagent.get(API)
    .then(res => dispatch(initAction(res.body)))
    .catch(console.error);
};

export const create = payload => (dispatch) => {
  superagent.post(API)
    .send(payload)
    .then(res => dispatch(createAction(res.body)))
    .catch(console.error);
};

export const update = payload => (dispatch) => {
  const url = `${API}/${payload}._id}`;
  superagent.put(url)
    .send(payload)
    .then(res => dispatch(updateAction(res.body)))
    .catch(console.error);
};

export const del = payload => (dispatch) => {
  const url = `${API}/${payload}._id}`;
  superagent.delete(url)
    .send(payload)
    .then(res => dispatch(deleteAction(res.body)))
    .catch(console.error);
};
