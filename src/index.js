import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import JavaScript from './components/JavaScript';
import Csharp from './components/Csharp';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import registerServiceWorker from './registerServiceWorker';

const Root = () =>
<Router>
    <div>

        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">CODE NEWS</Link>
                </Navbar.Brand>

                <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
            <Nav>
                <NavItem>
                  <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/javascript" activeClassName="active">JavaScript</NavLink>
                </NavItem>
                  <NavItem>
                  <NavLink to="/csharp" activeClassName="active">Csharp</NavLink>
                </NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={ App } />
        <Route exact path="/javascript" component={ JavaScript } />
        <Route exact path="/csharp" component={ Csharp } />
    </div>
</Router>

const About = () =>
<div>
  <h1>This is about page...</h1>
</div>

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
