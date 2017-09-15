import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = { albums: [] };

//when program boots up, load the data from api
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //http req to axios returns a promise
    //making http req is inherently asyn
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
       <AlbumDetail key={album.title} album={album} />
     );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
