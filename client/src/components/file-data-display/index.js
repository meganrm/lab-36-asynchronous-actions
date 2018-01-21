import React from 'react';
import PropTypes from 'prop-types';

import { FileDataType } from '../../state/file-data/types';

const FileDataDisplay = (props) => {
  const { toDisplay } = props;
  return (
    <ul>
      {toDisplay.map(item =>
        <li key={item._id}>{item.name}</li>)}
    </ul>
  );
};

FileDataDisplay.propTypes = {
  toDisplay: PropTypes.arrayOf(PropTypes.shape(FileDataType)).isRequired,
};

export default FileDataDisplay;
