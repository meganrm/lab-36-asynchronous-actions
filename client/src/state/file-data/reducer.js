export default (state = [], { type, payload }) => {
  switch (type) {
    case 'INIT':
      return payload || [];
    case 'FILEDATA_CREATE':
      return [...state, payload];
    default:
      return state;
  }
};
