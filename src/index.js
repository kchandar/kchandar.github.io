import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import './css/index.css';
import Portfolio from './PortfolioPage';
import About from './AboutPage';
import Contact from './ContactPage';
import LandingPage from './LandingPage';

// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingPage}/>
                <Route path="page-1" component={Portfolio}/>
                <Route path="page-2" component={About}/>
                <Route path="page-3" component={Contact}/>
            </Route>
        </Router>,
  document.getElementById('root')
);
