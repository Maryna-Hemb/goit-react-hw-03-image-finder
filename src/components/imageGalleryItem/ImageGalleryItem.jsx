import { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from '../modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  // ModalOpen = () => {
  //   this.setState({ showModal: true });
  //   console.log(this.state);
  // };

  ModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <Image
          src={this.props.previewURL}
          alt={this.props.tags}
          onClick={() => {
            this.setState({ showModal: true });
          }}
        />
        {this.state.showModal && (
          <Modal
            onClose={this.ModalClose}
            src={this.props.previewURL}
            alt={this.props.tags}
          ></Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  previewURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
