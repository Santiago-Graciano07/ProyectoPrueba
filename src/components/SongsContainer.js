import React from 'react'
import { getSongsAlbum } from "../services/songs";
import { getArtistAlbum } from "../services/albumes";
import Menu from "../pages/Menu";
import Songs from './Songs'
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
                <h1 className="img_principal_album nombre-album">{nombreAlbum}</h1>
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