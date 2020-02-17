import React from 'react'
import { getSongsAlbum } from "../services/songs";
import Menu from "../pages/Menu";
import Songs from './Songs'
/**
 * clase la cual tiene parte de la funcionalidad para mostra el listado de las canciones
 * recorre el array de las canciones y renderisa parte de la pantalla
 * con titulo del album que contine las canciones
 */

class SongsContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            nombreAlbum: ''
        }
    }

    async componentDidMount () {
        const idAlbum = this.props.match.params.idAlbum;
        const nombreAlbum = this.props.match.params.nombreAlbum;
        const responseJson = await getSongsAlbum(idAlbum);

      this.setState({ songs: responseJson[idAlbum - 1].songs, nombreAlbum: nombreAlbum });
    }

    render() {
      const { songs, nombreAlbum} = this.state
        return (
          <>
            <div class="container">
              <Menu></Menu>
              <section className="containes-album">
                <div className="center-text div-album-nombre">
                  <h1 className="nombre-album">{nombreAlbum}</h1>
                </div>
              </section>
              <section className="albums-artist">
                <div className="container div-principal-album">
                  <div className="col-10 div-list-album">
                    <ul className="list-group">
                      <h6 className="title_list">Canciones</h6>
                      {songs.map(song => (
                        <Songs
                          id={song.id}
                          name={song.name}
                          spotify_url={song.spotify_url}
                          preview_url={song.preview_url}
                          duration_ms={song.duration_ms}
                          urlcancion={`/play/cancion/${song.preview_url}`}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </>
        );

    }

}

export default SongsContainer