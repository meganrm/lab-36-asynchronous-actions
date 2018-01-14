import React from 'react';
import * as fileDataActions from '../state/fileData/ctions';

import FileDataForm from '../components/file-data-form';
import FileDataDisplay from '../components/file-data-display';

class FileData extends React.Component {
  componentWillMount() {
    { fileDataInitialize } = this.props;
    fileDataInitialize()
  }
  render() {
    const { fileDataCreate, fileDataArray } = this.props;

    return (
      <div>
        <FileDataForm createHanlder={fileDataCreate}/>
        <FileDataDisplay toDisplay={fileDataArray}/>

      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    fileDataArray: state.fileData
  }
}
const mapDispatchToProps = (dispatch, getState) => {
  return {
    fileDataCreate: fileData => dispatch(fileDataActions.create(fileData))
    fileDataInitialize: () => dispatch(fileDataActions.initialize())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileData)
