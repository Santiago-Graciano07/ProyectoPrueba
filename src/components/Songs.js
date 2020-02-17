import React from 'react'
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

/**
 * Encargada de renderisar de forma ordenada el listado
 * de las canciones, se importa en SongsContainer para utilizar y poder
 * organizar las canciones
 */

class Songs extends React.Component {


  render() {
    const { id, name, spotify_url, preview_url, duration_ms, urlcancion } = this.props;
    return (
      <>
        <li className="list-group-item color-div" key={id}>
          <div className="row color-div">
            <div className="col-1 color-div div-image">
              <MDBIcon icon="music" />
            </div>
            <div className="col-9 color-div">
              <Link className="link" to={urlcancion}>
                {name}
                <MDBIcon icon="play" className="icon-play" />
              </Link>
              <p>Duración:{duration_ms}</p>
              <hr></hr>
            </div>
          </div>
        </li>
      </>
    );
  }
}

export default Songs