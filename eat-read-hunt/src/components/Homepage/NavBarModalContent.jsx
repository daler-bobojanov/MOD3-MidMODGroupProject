import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import recipe from '../../assets/Homepage/chorizo-mozarella-gnocchi-bake-cropped.png';
import book from '../../assets/Homepage/book.png';
import findJob from '../../assets/Daler/findjob.png';
import jobSearch from '../../assets/Homepage/jobSearch.png';
import techNews from '../../assets/Daler/technews.png';
import '../../styles/Homepage/NavBarModalContent.scss';

import Navbar from '../../components/Daler/Navbar';

const NavBarMondalContent = () => {
    return (
        <Router>
            <div className="mainContainer">
                <div className="container1">
                    <div className="leftContainer">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis dignissimos veniam itaque laboriosam officia apiente dolorum voluptatum iste!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis dignissimos veniam itaque laboriosam officia apiente dolorum voluptatum iste! >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis dignissimos veniam itaque laboriosam officia apiente dolorum voluptatum iste!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis dignissimos veniam itaque laboriosam officia apiente dolorum voluptatum iste!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis dignissimos veniam itaque laboriosam officia apiente dolorum voluptatum iste!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis dignissimos veniam itaque laboriosam officia apiente dolorum voluptatum iste!</p>
                    </div>

                    <div className="rightContainer">
                        <div className="infos">
                            <img src={findJob} alt="no image" width='150px' height='150px' />
                            <article className="info">
                                <Link className="link" to="/searchjobs/#jobs" target="_top">
                                    <p> Take the Stress Out Of Your Job Search With Great Opportunities At Innovative Companies. Your Dream Job Is Waiting To Apply To Interview You.</p>
                                    <p>Search jobs</p>
                                </Link>
                            </article>
                        </div>

                        <div className="infos">
                            <img src={jobSearch} alt="no image" width='150px' height='150px' />
                            <article className="info">
                                <Link className="link" to="/alljobs/#alljobs" target="_top">
                                    <p>List All Available Jobs</p>
                                </Link>
                            </article>
                        </div>

                        <div className="infos">
                            <img src={techNews} alt="no image" width='150px' height='150px' />
                            <article className="info">
                                <Link className="link" to="/technews/#technews" target="_top">
                                    <p>The latest in technology and company news</p>
                                </Link>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default NavBarMondalContent;

