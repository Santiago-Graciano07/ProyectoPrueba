import React, { Component } from 'react'
import { getArtistAlbum } from "../services/albumes";
import { getArtistas } from "../services/artistas";
import Album from './Album'
import Menu from "../pages/Menu";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

class AlbumContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            albunes: [],
            isFetch: true,
            idArtista: this.props.match.params.idArtist,
            imgArtista: '',
            nombreArtista: ''
        }
    }

   async componentDidMount () {
       const idArt = this.props.match.params.idArtist
       const responseJson = await getArtistAlbum(idArt)
       const responseJsonArt = await getArtistas()
     this.setState({ albunes: responseJson[idArt - 1].albums, imgArtista: responseJsonArt[idArt - 1].image, nombreArtista: responseJsonArt[idArt - 1].name, isFetch: false });

    }


    render() {
      const { albunes, isFetch, imgArtista, nombreArtista} = this.state

        if (isFetch){
            return 'Loading'
        }
        return (
          <>
            <div className="container">
              <Menu></Menu>
              <section className="containes-album center">
                <img src={imgArtista} className="img_principal_album"></img>
                <h4>
                  {nombreArtista}
                  <MDBIcon icon="star" className="icon" />
                  <span>22.2</span>
                </h4>
              </section>
              <section className="albums-artist">
                <div className="container div-principal-album">
                  <div className="col-10 div-list-album">
                    <ul className="list-group">
                      <h6 className="title_list">Albumes</h6>
                      {albunes.map(albms => (
                        <Album
                          id={albms.id}
                          name={albms.name}
                          albImage={albms.image}
                          total_canc={albms.total_tracks}
                          urlSongs={`/songs/${albms.id}/${albms.name}`}
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

export default AlbumContainer;