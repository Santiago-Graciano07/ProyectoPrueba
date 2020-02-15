import React from 'react'
import { Link } from "react-router-dom";

class Songs extends React.Component {

    render() {
        const { id, name, spotify_url, preview_url, duration_ms } = this.props;
        return (
          <li className="list-group-item color-div">
            <div className="row color-div">
              {/* <div className="col-1 color-div div-image">
                        <img src={albImage} className="image-album"></img>
                    </div> */}
              <div className="col-11 color-div">
                <Link to={preview_url}>{name}</Link>
                <p>Duración:{duration_ms}</p>
                <hr></hr>
              </div>
            </div>
          </li>
        );
    }

}

export default Songs