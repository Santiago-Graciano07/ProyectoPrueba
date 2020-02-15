import React from 'react'
import { Link } from "react-router-dom";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

class Album extends React.Component {

    render() {
        const { id, name, albImage, total_canc, urlSongs } = this.props;
        return (
          <li className="list-group-item color-div">
            <div className="row color-div">
              <div className="col-2 color-div div-image">
                <img src={albImage} className="image-album"></img>
              </div>
              <div className="col-9 color-div">
                <Link to={urlSongs} className="link">
                  {name}
                  {/* <MDBIcon icon="play" className="" /> */}
                </Link>
                <p>Canciones:{total_canc}</p>
                <hr></hr>
              </div>
            </div>
          </li>
        );
    }

}

export default Album

