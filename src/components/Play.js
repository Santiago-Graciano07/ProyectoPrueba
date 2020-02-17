import React from 'react'
import Menu from "../pages/Menu";

/**
 * clase con la función de resivir url de la cancion
 * renderisa funcionalidad para mostrar y reproducir cancion
 */

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        url: ""
    };
  }

  componentDidMount() {
      const urlCancion = this.props.location.pathname;
      const newurl = urlCancion.split('/play/cancion/')
      this.setState({ url: newurl[1]})
      console.log(newurl[1]);
  }

  render() {
      const {url} = this.state
    return (
      <>
        <div className="container">
          <Menu></Menu>
          <section className="play-container">
            <audio controls>
              <source
                src={url}
                type="audio/mpeg"
                playing
              />
            </audio>
          </section>
        </div>
      </>
    );
  }
};

export default Play