
const createAction = payload => ({
  type: 'FILEDATA_CREATE',
  payload,
});

export const create = payload => (dispatch) => {
  dispatch(createAction(payload));
};
