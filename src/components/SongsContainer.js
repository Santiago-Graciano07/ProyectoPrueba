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
        }
    }

    async componentDidMount () {
        const idAlbum = this.props.match.params.idAlbum;
        const responseJson = await getSongsAlbum(idAlbum);
        this.setState({ songs: responseJson[idAlbum - 1].songs });
    }

    render() {
        const {songs} = this.state
        return (
          <>
          <div class="container">
              <Menu></Menu>
              <section className="containes-album">
                <h1>Foto de album</h1>
              </section>
              <section className="albums-artist">
                <div className="container div-principal-album">
                  <div className="list-group">
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
                  </div>
                </div>
              </section>
          </div>
          </>
        );

    }

}

export default SongsContainer