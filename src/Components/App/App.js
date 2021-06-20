import React from 'react';
import './App.css';
import PlayList from '../PlayList/Playlist'
import SearchResults from '../SearchResults/SearchResults';
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
  }
  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    this.state.playListTracks.push(track);
  }
  removeTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      removeItem(track,this.state.props)
    }
    
  }
  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mming</span></h1>
          <div className="App">
            {/*Add a SearchBar component */}
            <div className="App-playlist">
              <SearchResults searchResults ={this.state.searchResults} onAdd={this.state.addTrack}></SearchResults>
              <PlayList playlistName={this.state.playlistName} playListTracks={this.state.playListTracks} onRemove ={this.state.removeTrack}></PlayList>
            </div>
          </div>
      </div>
    );
  }
}
export default App;
