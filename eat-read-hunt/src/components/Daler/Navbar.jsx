import React from 'react'
// import '../../styles/Daler/Navbar.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import homeBtn from '../../assets/Daler/homeBtn.png';


import AllJobs from './AllJobs';
import MySavedJobs from './MySavedJobs';
import Logo from './Logo';
import TechNews from './TechNews';

// import UserName from './UserName';
// import SearchForm from './SearchForm';
import HomePage from '../Homepage/HomePage';

class Navbar extends React.Component {
    // function to Refresh the page upon Home button click
    refreshPage = () => {
        window.location.reload(false);
    }

    render() {
        return (
            <Router>

                {/* <nav>
                    <ul className="nav-links">
                        <li onClick={this.refreshPage}>
                            <Link className="link" to="/"><img src={homeBtn} id='nav-img' alt="home-button" /></Link>
                        </li>
                        <li>
                            <Link className="link" to="/alljobs/#alljobs" target="_top">All jobs</Link>
                        </li>
                        <li>
                            <Link className="link" to="/mysavedjobs/#mysavedjobs" target="_top">My Saved jobs</Link>
                        </li>
                        <li>
                            <Link className="link" to="/technews/#technews" target="_top">Tech News</Link>
                        </li>
                        <li>
                            User Name
                        </li>
                    </ul>
                </nav>  */}

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/searchjobs" component={Logo} />
                    <Route exact path='/alljobs' component={AllJobs} />
                    <Route exact path='/mysavedjobs' component={MySavedJobs} />
                    <Route exact path="/technews" component={TechNews} />
                </Switch>
            </Router>
        );
    }
}

export default Navbar;


