import React from 'react'
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

/**
 * clase encargada de mostrar todo el listado de los albunes
 * de forma ordenada, se coloca un etiqueta <li></li>
 * tiene constantes:
 * id: id del album
 * name: nombre del album
 * :albImage: url imagen del album
 * total_canc: canciones que contiene el album
 */

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
                  <MDBIcon icon="play" className="icon-play" />
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

