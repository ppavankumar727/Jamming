import React from 'react';
import './App.css';
import PlayList from '../PlayList/Playlist'
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchResults:[{
      name:'agadu',
      artist:'Thaman',
      album:'agadu',
      id:1
    },
    {
      name:'agadu',
      artist:'Thaman',
      album:'agadu',
      id:2
    }],
    playlistName:'You rock bro',
    playListTracks:[{
      name:'agadu',
      artist:'Thaman',
      album:'agadu',
      id:1
    },
    {
      name:'agadu',
      artist:'Thaman',
      album:'agadu',
      id:2
    }]
  };
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlayerListName = this.updatePlayerListName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);
  }
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  } 
  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }
  updatePlayerListName(name){
    this.setState({playlistName:name});
  }
  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    //Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      //this.setState({
        //playlistName: 'New Playlist',
        //playlistTracks: []
      //});
    //});
  }
  search(term){
    console.log();
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mming</span></h1>
          <div className="App">
            {/*Add a SearchBar component */}
            <SearchBar onSearch = {this.search}></SearchBar>
            <div className="App-playlist">
              <SearchResults searchResults ={this.state.searchResults} onAdd={this.state.addTrack}></SearchResults>
              <PlayList playlistName={this.state.playlistName} playListTracks={this.state.playListTracks} onSave={this.savePlaylist} onNameChange={this.updatePlayerListName} onRemove ={this.state.removeTrack}></PlayList>
            </div>
          </div>
      </div>
    );
  }
}
export default App;
