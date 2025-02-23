import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist(props) {
    const handleNameChange = (event) => {
        props.onNameChange(event.target.value);
    };

    return (
        <div className="Playlist">
            <input 
                defaultValue="New Playlist" 
                onChange={handleNameChange} 
            />
            <TrackList 
                tracks={props.playlistTracks} 
                onRemove={props.onRemove} 
                isRemoval={props.onRemove} 
            />
            <button 
                className="Playlist-save" 
                onClick={props.onSave}
            >
                SAVE TO SPOTIFY
            </button>
        </div>
    );
}

export default Playlist;