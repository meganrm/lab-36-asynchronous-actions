import React from 'react';

class FileDataDisplay extends React.Component {
  render() {
    const { toDisplay } = this.props;
    return (
      <ul>
        {
        toDisplay.map(item =>
          <li key={item.id}>{item.name}</li>)}
      </ul>
    );
  }
}

export default FileDataDisplay;
