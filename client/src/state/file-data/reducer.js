export default (state = [], { type, payload }) => {
  switch (type) {
    case 'FILEDATA_CREATE':
      return [...state, payload];
    default:
      return state;
  }
};
