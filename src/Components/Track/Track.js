import React from "react";

class Track extends React.Component {
    render(){
        return (
        <div className="Track">
            <div className="Track-information">
                <h3>{/*<!-- track name will go here -->*/}</h3>
                <p>{/* <p>{<!-- track artist will go here--> | <!-- track album will go here -->}</p> */}</p>
            </div>
            <button className="Track-action">{/* <!-- + or - will go here -->*/}</button>
        </div>            
        );
    }
}