import React from 'react'
import Artistas from './Artistas'
import { getArtistas } from "../services/artistas";
import Menu from '../pages/Menu'
import Footer from '../pages/Footer'

class ArtistasContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            artistas: [],
            isFetch: true,
        }
    }

    async componentDidMount () {
        const responseJson = await getArtistas()
        this.setState({ artistas: responseJson, isFetch: false });

    }

    render () {
        const { artistas, isFetch} = this.state

        if(isFetch) {
            return 'Loading'
        }

        return(
            <React.Fragment>
                <Menu></Menu>
                <section className="artistas-container">
                    {
                        artistas.map((artista) => <Artistas
                            name={artista.name}
                            imageUrl={artista.image}
                            id={`/album/${artista.id}`}
                        />
                        )

                    }
                </section>
                <Footer></Footer>
            </React.Fragment>
        )

    }
}

export default ArtistasContainer