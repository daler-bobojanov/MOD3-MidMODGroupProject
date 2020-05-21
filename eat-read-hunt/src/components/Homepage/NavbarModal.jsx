import React, { useState } from 'react';
import Modal from 'react-modal';
import NavBarModalContent from './NavBarModalContent';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../styles/Homepage/NavbarModal.css';

Modal.setAppElement('#root')

const NavbarModal = (props) => {
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return (
        <React.Fragment>
            {/* Hamburger Menu */}
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
            </Modal >
        </React.Fragment >
    );
}

export default NavbarModal;
