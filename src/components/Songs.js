import React from 'react'
import { Link } from "react-router-dom";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

class Songs extends React.Component {

    render() {
        const { id, name, spotify_url, preview_url, duration_ms } = this.props;
        return (
          <li className="list-group-item color-div">
            <div className="row color-div">
              <div className="col-1 color-div div-image">
                        <MDBIcon icon="music" />
                    </div>
              <div className="col-9 color-div">
                <Link to="/play" className="link">{name}</Link>
                <p>Duración:{duration_ms}</p>
                <audio>
                  <source
                    src="https://nubecolectiva.com/blog/tutos/demos/renderizando_elementos_multimedia_react/mp3/cancion.mp3"
                    type="audio/mpeg"
                  />
                </audio>
                <hr></hr>
              </div>
            </div>
          </li>
        );
    }

}

export default Songs