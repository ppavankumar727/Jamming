import React from "react";
import './Track.css';

class Track extends React.Component {
    constructor(props){
        super(props)
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack= this.removeTrack.bind(this);
    }
    addTrack(){
        this.props.onAdd(this.props.track);
    }
    removeTrack(){
        this.props.removeTrack(this.props.track);
    }
    render(){
        return (
        <div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist}</p>
                <p>{this.props.track.album}</p>
            </div>
            <button className="Track-action">+</button>
            <button className="Track-action">-</button>
        </div>            
        );
    }
}
export default Track;