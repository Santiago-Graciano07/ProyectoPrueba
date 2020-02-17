import React from "react";
import { Link } from 'react-router-dom'

/**
 * encargada de renderisar funcionalidad para mostrar cada artista
 */


class Artistas extends React.Component {

  render(){
    const { name, imageUrl, id} = this.props
    return (
      <div className="single-artist">
        <Link to={id} image-url={imageUrl}>
          <img src={imageUrl}></img>
        </Link>
        <div className="name_artist text-center">
        <Link to={id} className="link">
            <strong>{name}</strong>
        </Link>
        </div>
      </div>
    );
  }

}

export default Artistas
