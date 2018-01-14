import React from 'react';
import { connect } from 'react-redux';

import * as fileDataActions from '../../state/file-data/actions';

import FileDataForm from '../../components/file-data-form';
import FileDataDisplay from '../../components/file-data-display';

class FileData extends React.Component {
  componentWillMount() {
    const { fileDataInitialize } = this.props;
    fileDataInitialize();
  }

  render() {
    const { fileDataCreate, fileDataArray } = this.props;

    return (
      <div>
        <FileDataForm createHandler={fileDataCreate} />
        <FileDataDisplay toDisplay={fileDataArray} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  fileDataArray: state.fileData,
});

const mapDispatchToProps = dispatch => ({
  fileDataCreate: fileData => dispatch(fileDataActions.create(fileData)),
  fileDataInitialize: () => dispatch(fileDataActions.initialize()),

});

export default connect(mapStateToProps, mapDispatchToProps)(FileData);
