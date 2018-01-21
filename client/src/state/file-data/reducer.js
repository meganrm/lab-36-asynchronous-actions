import { filter } from 'lodash';

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'INIT':
      return payload || [];
    case 'CREATE':
      return [...state, payload];
    case 'DELETE':
      return filter(state, { id: payload });
    default:
      return state;
  }
};
