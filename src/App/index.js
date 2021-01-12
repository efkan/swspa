import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import Home from '../Home'
import People from '../People'
import Starships from '../Starships'
import './styles.css';

const Navbar = () => {
  return (
    <Router>
      <div className="container">
        <div className="logo-container">
          <Link to="/">
            <i className="logo swg swg-starwars" />
          </Link>
        </div>
        <div className="menu-container">
          <div className='menu-item'>
            <i className="menu-icon swg swg-trooper-o" />
            <Link to="/people" className='menu-text'>PEOPLE</Link>
          </div>
          <div className='menu-item'>
            <i className="menu-icon swg swg-tie-3" />
            <Link to="/starships" className='menu-text'>STARSHIPS</Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/starships">
          <Starships />
        </Route>
        <Route path="*">
          <div>{'Invalid path - Status 404'}</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default Navbar;