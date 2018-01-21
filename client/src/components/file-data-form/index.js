import React from 'react';
import PropTypes from 'prop-types';

import { FileDataType } from '../../state/file-data/types';

const FileDataDefault = {
  name: '',
  date: '',
  user_name: '',
  path: '',
  description: '',
};

class FileDataForm extends React.Component {
  constructor(props) {
    super(props);
    const { fileData } = this.props;

    this.state = fileData;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { createHandler } = this.props;
    e.preventDefault();
    createHandler(Object.assign({}, this.state));
    this.setState({ ...FileDataDefault });
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>

        <input
          name="name"
          type="text"
          value={this.state.name}
          placeholder="File name"
          onChange={this.handleChange}
        />
        <input
          name="user_name"
          type="text"
          value={this.state.user_name}
          placeholder="Your name"
          onChange={this.handleChange}
        />
        <input
          name="description"
          type="text"
          value={this.state.description}
          placeholder="Enter a description"
          onChange={this.handleChange}
        />
        <input
          name="path"
          type="text"
          value={this.state.path}
          placeholder="Enter the filepath"
          onChange={this.handleChange}
        />

        <button type="submit">Save Item</button>

      </form>
    );
  }
}


FileDataForm.propTypes = {
  createHandler: PropTypes.func.isRequired,
  fileData: PropTypes.shape(FileDataType),
};

FileDataForm.defaultProps = {
  fileData: FileDataDefault,
};

export default FileDataForm;
