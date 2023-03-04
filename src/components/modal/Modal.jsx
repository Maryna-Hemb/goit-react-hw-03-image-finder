import { Component } from 'react';
// import { createPortal } from 'react-dom';
import { Overlay, ModalStyle } from '../modal/Modal.styled';

// const modalRoot = document.querySelector('#modalRoot');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      return this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      return this.props.onModalClick();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalStyle>
          <img src={this.props.previewURL} alt={this.props.tags} />
        </ModalStyle>
      </Overlay>
      // modalRoot
    );
  }
}
