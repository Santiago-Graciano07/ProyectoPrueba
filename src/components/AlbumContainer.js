import React, { Component } from 'react'
import { getArtistAlbum } from "../services/albumes";
import { getArtistas } from "../services/artistas";
import Album from './Album'
import Menu from "../pages/Menu";

class AlbumContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            albunes: [],
            isFetch: true,
            idArtista: this.props.match.params.idArtist,
            imgArtista: ''
        }
    }

   async componentDidMount () {
       const idArt = this.props.match.params.idArtist
       const responseJson = await getArtistAlbum(idArt)
       const responseJsonArt = await getArtistas()
      this.setState({ albunes: responseJson[idArt - 1].albums, imgArtista: responseJsonArt[idArt - 1].image, isFetch: false });

    }


    render() {
      const { albunes, isFetch, imgArtista} = this.state

        if (isFetch){
            return 'Loading'
        }
        return (
          <>
          <div className="container">
              <Menu></Menu>
              <section className="containes-album center">
                <img src={imgArtista} className="img_principal_album"></img>
                <h4>nombre</h4>
                <i class="fas fa-cloud"></i>
              </section>
              <section className="albums-artist">
                <div className="container div-principal-album">
                  <ul className="list-group">
                    <h6 className="title_list">Albumes</h6>
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
          </div>
          
          </>
        );
    }
}

export default AlbumContainer;