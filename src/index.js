import React from 'react'
import ReactDom from 'react-dom'
import ArtistasContainer from './components/ArtistasContainer'
import './components/styles/index.css'
import "bootstrap/dist/css/bootstrap.css";



import App from './components/App'



const container = document.getElementById('root')

ReactDom.render(<App/>, container);