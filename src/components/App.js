import React from 'react'
import ArtistasContainer from "./ArtistasContainer";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from '../pages/NotFound'
import AlbumContainer from "./AlbumContainer";
import SongsContainer from './SongsContainer';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ArtistasContainer}></Route>
      <Route exact path= "/album/:idArtist" component={AlbumContainer}></Route>
      <Route exact path="/songs/:idAlbum" component={SongsContainer}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);



export default App