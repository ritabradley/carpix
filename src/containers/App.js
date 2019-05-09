import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';

class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async searchTerm => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: searchTerm,
      },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '15px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
