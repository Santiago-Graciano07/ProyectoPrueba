import React from 'react'
import ReactDom from 'react-dom'
import ArtistasContainer from './components/ArtistasContainer'
import './components/styles/index.css'
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



import App from './components/App'



const container = document.getElementById('root')

ReactDom.render(<App/>, container);