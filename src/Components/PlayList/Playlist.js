import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'
export default class Playlist extends React.Component {
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(event){
        this.props.onNameChange(event.target.name);
    }
    render(){
        return(
            <div className="Playlist">
                <input defaultValue={"New Playlist"}/>
                    <TrackList tracks={this.props.playListTracks} onRemove={this.props.onRemove} onChange={this.handleNameChange} isRemoval = {this.props.onRemove}></TrackList>
                    <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        );
        
    }
}
