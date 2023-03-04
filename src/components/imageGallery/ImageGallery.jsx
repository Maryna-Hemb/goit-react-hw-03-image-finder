import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import { List, ListItem } from './ImageGallery.styled';
import { FeatchImages } from '../../servises/ApiRequest';
import { Button } from '../button/Button';

export class ImageGallery extends Component {
  state = {
    searchImages: [],
    page: 1,
    per_page: 20,
    status: 'idle',
    showLoadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, per_page } = this.state;

    const prevName = prevProps.queryName;
    const nextName = this.props.queryName;

    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      console.log(per_page);
      this.setState({ page: 1 });
      try {
        const galleryMake = await FeatchImages(nextName, page, per_page);
        this.setState(
          { searchImages: galleryMake.hits },
          console.log(this.state)
        );
        console.log(per_page);
        if (Math.ceil(galleryMake.totalHits / per_page) > page) {
          this.setState({
            status: 'resolved',
            showLoadMore: true,
          });
        } else {
          this.setState({
            showLoadMore: false,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (prevPage !== newPage) {
      this.setState({ status: 'pending' });
      try {
        const galleryMake = await FeatchImages(nextName, page, per_page);
        this.setState(prevState => ({
          searchImages: [...prevState.searchImages, ...galleryMake.hits],
        }));
        if (Math.ceil(galleryMake.totalHits / per_page) > page) {
          this.setState({
            status: 'resolved',
            showLoadMore: true,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <List className="gallery">
          {this.state.searchImages.map(({ id, pageURL, previewURL, tags }) => (
            <ListItem key={id}>
              <ImageGalleryItem
                previewURL={previewURL}
                fullImg={pageURL}
                tags={tags}
              />
            </ListItem>
          ))}
        </List>
        {this.state.showLoadMore && <Button onClick={this.loadMore} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  queryName: PropTypes.string.isRequired,
};
