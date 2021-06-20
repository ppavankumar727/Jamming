import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'
export default class Playlist extends React.Component {
    render(){
        return(
            <div className="Playlist">
                <input defaultValue={"New Playlist"}/>
                    {/* Add a TrackList component*/}
                    <TrackList tracks={this.props.playListTracks} onRemove={this.props.onRemove} isRemoval = {this.props.onRemove}></TrackList>
                    <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
        
    }
}
