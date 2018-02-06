import React from 'react';

import './style.css';

// import { DialogContent, DialogHeader, DialogActions } from './index';
import DialogActions from './DialogActions';
import DialogContent from './DialogContent';
import DialogHeader from './DialogHeader';

export default class Dialog extends React.Component {
  static defaultProps = {
    open: false,
  };

  static resolvedComponentNames = [DialogContent.name, DialogHeader.name, DialogActions.name];

  dialogRef = $dialog => {
    this.$dialog = $dialog;
  };
  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      this.$dialog.showModal();
    }
    if (prevProps.open && !this.props.open) {
      this.close();
    }
  }

  close = () => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
    this.$dialog.close();
  };

  backDropClick = ({ clientX, clientY }) => {
    const { top, bottom, left, right } = this.$dialog.getBoundingClientRect();
    const isIndialog = clientY >= top && clientY <= bottom && clientX >= left && clientX <= right;
    if (!isIndialog) {
      this.close();
    }
  };

  getComponentChildren() {
    return React.Children.toArray(this.props.children).reduce((result, element) => {
      if (Dialog.resolvedComponentNames.includes(element.type.name)) {
        result[element.type.name] = element;
      }
      return result;
    }, {});
  }

  render() {
    console.log({DialogContent});
    const compChildren = this.getComponentChildren();
    console.log({compChildren});
    console.log(DialogHeader.name);
    console.log('this.props.children', this.props.children);
    const {
      [DialogHeader.name]: dialogHeader,
      [DialogContent.name]: dialogContent,
      [DialogActions.name]: dialogActions,
    } = this.getComponentChildren();

    return (
      <dialog className="dialog" onClick={this.backDropClick} ref={this.dialogRef}>
        {dialogHeader}
        {dialogContent}
        {DialogActions}
      </dialog>
    );
  }
}
