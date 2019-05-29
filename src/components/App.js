import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const ACCESS_KEY = "2b41fc64e677aec6b6c06f35372134d2421ed97751c525760e7a6a6e35ec0ce0";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ' + ACCESS_KEY
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>);
  }
}

export default App;
