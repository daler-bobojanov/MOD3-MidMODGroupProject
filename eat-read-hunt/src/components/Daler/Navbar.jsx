import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Daler's App imports
// import '../../styles/Daler/Navbar.css';
// import homeBtn from '../../assets/Daler/homeBtn.png';
// import UserName from './UserName';
// import SearchForm from './SearchForm';
import AllJobs from './AllJobs';
import MySavedJobs from './MySavedJobs';
import Logo from './Logo';
import TechNews from './TechNews';
import HomePage from '../Homepage/HomePage';
// ================================================================
// Aleh's App imports
import Top from '../Aleh/Top';
import Motivation from '../Aleh/Motivation';
import App from '../Aleh/App';
// ================================================================
// Aparna's App imports
import Books from '../Aparna/Books';
import Savebooks from '../Aparna/Savebooks';
import Search from '../Aparna/Search';


class Navbar extends React.Component {
    // function to Refresh the page upon Home button click
    refreshPage = () => {
        window.location.reload(false);
    }

    render() {
        return (
            <Router>
                <Switch>
                    {/* Job Search section */}
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/searchjobs" component={Logo} />
                    <Route exact path='/alljobs' component={AllJobs} />
                    <Route exact path='/mysavedjobs' component={MySavedJobs} />
                    <Route exact path="/technews" component={TechNews} />
                    {/* Recipes section */}
                    <Route exact path="/searchrecipe" component={App} />
                    <Route exact path="/top" component={Top} />
                    <Route exact path="/motivation" component={Motivation} />
                    {/* Book Store section */}
                    <Route exact path="/books" component={Books} />
                    <Route exact path="/savebooks" component={Savebooks} />
                    <Route exact path="/search" component={Search} />
                </Switch>
            </Router>
        );
    }
}

export default Navbar;


