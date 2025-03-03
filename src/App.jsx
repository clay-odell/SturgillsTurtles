
import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

import NavBar from './NavBar';
import SiteRouter from './SiteRouter';

function App() {
  
  return (
    <>
      <Router>
        <NavBar />
        <SiteRouter />
      </Router>
    </>
  )
}

export default App
