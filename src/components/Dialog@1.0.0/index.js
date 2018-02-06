import React from 'react';
import './style.css';

export default class Dialog extends React.Component {
  static defaultProps = {
    open: false,
  };

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

  render() {
    const { header, children, actionButtons } = this.props;
    return (
      <dialog className="dialog" onClick={this.backDropClick} ref={this.dialogRef}>
        <div className="dialog-inside">
          <section className="dialog-header">{header}</section>
          <section className="dialog-content">{children}</section>
          <section className="dialog-actions">{actionButtons}</section>
        </div>
      </dialog>
    );
  }
}
