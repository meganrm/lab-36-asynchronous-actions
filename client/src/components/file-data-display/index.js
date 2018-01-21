import React from 'react';
import PropTypes from 'prop-types';

import { FileDataType } from '../../state/file-data/types';

class FileDataDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    const { fileDataDelete } = this.props;
    fileDataDelete(event.target.id);
  }

  render() {
    const { toDisplay } = this.props;
    return (
      <ul>
        {toDisplay.map(item =>
          (
            <li key={item._id}>{item.name}
              <span id={item._id} onClick={this.handleDelete}>x</span>
            </li>))}
      </ul>
    );
  }
}

FileDataDisplay.propTypes = {
  toDisplay: PropTypes.arrayOf(PropTypes.shape(FileDataType)).isRequired,
};

export default FileDataDisplay;
