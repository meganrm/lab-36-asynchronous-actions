import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as fileDataActions from '../../state/file-data/actions';

import FileDataForm from '../../components/file-data-form';
import FileDataDisplay from '../../components/file-data-display';

import { FileDataType } from '../../state/file-data/types';

class FileData extends React.Component {
  componentWillMount() {
    const { fileDataInitialize } = this.props;
    fileDataInitialize();
  }

  render() {
    const {
      fileDataCreate,
      fileDataArray,
      fileDataDelete,
    } = this.props;

    return (
      <div>
        <FileDataForm createHandler={fileDataCreate} />
        <FileDataDisplay toDisplay={fileDataArray} fileDataDelete={fileDataDelete} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  fileDataArray: state.fileData,
});

const mapDispatchToProps = dispatch => ({
  fileDataCreate: fileData => dispatch(fileDataActions.create(fileData)),
  fileDataDelete: id => dispatch(fileDataActions.remove(id)),
  fileDataInitialize: () => dispatch(fileDataActions.init()),
});

FileData.propTypes = {
  fileDataInitialize: PropTypes.func.isRequired,
  fileDataArray: PropTypes.arrayOf(PropTypes.shape(FileDataType)).isRequired,
  fileDataCreate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FileData);
