import React, { Component } from 'react'
import { getArtistAlbum } from "../services/albumes";
import Album from './Album'
import Menu from "../pages/Menu";

class AlbumContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            albunes: [],
            isFetch: true,
            idArtista: this.props.match.params.idArtist
        }
    }

   async componentDidMount () {
       const idArt = this.props.match.params.idArtist
       const responseJson = await getArtistAlbum(idArt)
       this.setState({ albunes: responseJson[idArt-1].albums, isFetch: false });
    }


    render() {
        const {albunes, isFetch} = this.state

        if (isFetch){
            return 'Loading'
        }
        return (
          <>
            <Menu></Menu>
            <section className="containes-album">
              <h1>Foto Artista</h1>
            </section>
            <section className="albums-artist">
              <div className="container div-principal-album">
                <ul className="list-group">
                  <h4>Albumes</h4>
                  {albunes.map(albms => (
                    <Album
                      id={albms.id}
                      name={albms.name}
                      albImage={albms.image}
                      total_canc={albms.total_tracks}
                      urlSongs={`/songs/${albms.id}`}
                    />
                  ))}
                </ul>
              </div>
            </section>
          </>
        );
    }
}

export default AlbumContainer;