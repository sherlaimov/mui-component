import React from 'react';
import Dialog from '../../components/Dialog@1.0.0';

import './style.css';

export default class Demo extends React.Component {
  state = {
    isDialogOpen: false,
  };
  openDialog = () => {
    this.setState({
      isDialogOpen: true,
    });
  };
  closeDialog = () => {
    this.setState({
      isDialogOpen: false,
    });
  };
  render() {
    const { isDialogOpen } = this.state;
    return (
      <div className="container">
        <button onClick={this.openDialog}>Click me</button>
        <Dialog
          header={<b>Some Header</b>}
          actionButtons={[
            <button onClick={this.closeDialog} key={0}>
              Close
            </button>,
          ]}
          onClose={this.closeDialog}
          open={isDialogOpen}
        >
          <h1>Some Content</h1>
        </Dialog>
      </div>
    );
  }
}
