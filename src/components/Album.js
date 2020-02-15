import React from 'react'
import { Link } from "react-router-dom";

class Album extends React.Component {

    render() {
        const { id, name, albImage, total_canc, urlSongs } = this.props;
        return (
          <li className="list-group-item color-div">
                <div className="row color-div">
                <div className="col-1 color-div div-image">
                    <img src={albImage} className="image-album"></img>
                </div>
                <div className="col-11 color-div">
                        <Link to={urlSongs} >{name}</Link>
                        <p>Canciones:{total_canc}</p>
                            <hr></hr>
                </div>
            </div>
          </li>
        );
    }

}

export default Album

