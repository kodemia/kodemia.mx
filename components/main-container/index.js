// Package
import Document, { Main } from 'next/document'

// Ours
import Nav from '../../components/nav'

// js
import Environment from '../../static/js/environment.js'

new Environment.init();

export default () => (
  <div className="main-container">
    <Nav />
    <Main />
  </div>
)
