import React, { useState } from 'react';
import Modal from 'react-modal';
import HomePage from './HomePage';
import NavBarModalContent from './NavBarModalContent';
import Navbar from '../Daler/Navbar';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AllJobs from '../Daler/AllJobs';
import MySavedJobs from '../Daler/MySavedJobs';
import Logo from '../Daler/Logo';
import TechNews from '../Daler/TechNews';

import '../../styles/Homepage/NavbarModal.css';


Modal.setAppElement('#root')

const NavbarModal = (props) => {
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return (
        <React.Fragment>
            <div id="">
                <ul id='navigation' onClick={() => setmodalIsOpen(true)}>
                    {/* <label htmlFor="navBar" style={{ float: 'right', paddingRight: '1100px', paddingTop: '6px' }}>Navigation</label> */}
                    {/* <label htmlFor="navBar">Navigation</label> */}
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                </ul>
            </div>

            <Modal
                closeTimeoutMS={2000}
                className='homepage-modal'
                overlayClassName='homepage-modal-overlay'
                bodyOpenClassName='homepage-modal-open'
                isOpen={modalIsOpen}
                // onRequestClose={() => setmodalIsOpen(false)}
                style={
                    {
                        // overlay: {
                        //     position: 'fixed',
                        //     top: 0,
                        //     left: 0,
                        //     right: 0,
                        //     bottom: 0,
                        //     backgroundColor: 'rgba(0, 0, 0, 0.91)',


                        // },
                        // content: {
                        //     position: 'absolute',
                        //     top: '40px',
                        //     left: '300px',
                        //     right: '300px',
                        //     bottom: '40px',
                        //     border: '2px solid #ccc',
                        //     background: '#fff',
                        //     overflow: 'auto',
                        //     WebkitOverflowScrolling: 'touch',
                        //     borderRadius: '4px',
                        //     outline: 'none',
                        //     padding: '20px'
                        // }
                    }
                }
            >
                <Router>

                    <div id="homepage-modal-header">
                        <div id="closebtn" onClick={() => setmodalIsOpen(false)}>X</div>
                        <div id="chapter-text"><span>SITE NAVIGATION</span></div>
                        <Link className="link" to="/" target="_top">
                            <div id="homebtn"> Home</div>
                        </Link>
                    </div>





                </Router>
                <NavBarModalContent />
                {/* <Router>
                    <nav>
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
                    </nav>
                    <Router /> */}

            </Modal >
        </React.Fragment >
    );
}

export default NavbarModal;
