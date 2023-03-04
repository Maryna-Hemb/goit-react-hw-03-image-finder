import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout.styled';

import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './imageGallery/ImageGallery';

// IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',

export class App extends Component {
  state = {
    queryName: '',
  };

  changeQueryName = queryName => {
    this.setState(queryName);
  };

  render() {
    const { queryName } = this.state;
    return (
      <Layout>
        <Searchbar onAddnewQueryName={this.changeQueryName}></Searchbar>
        <ImageGallery queryName={queryName} />
        <GlobalStyle />
      </Layout>
    );
  }
}
