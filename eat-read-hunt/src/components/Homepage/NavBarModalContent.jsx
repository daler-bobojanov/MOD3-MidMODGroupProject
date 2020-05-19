import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import recipe from '../../assets/Homepage/chorizo-mozarella-gnocchi-bake-cropped.png';
import book from '../../assets/Homepage/book.png';
import findJob from '../../assets/Daler/findjob.png';
import jobSearch from '../../assets/Homepage/jobSearch.png';
import techNews from '../../assets/Daler/technews.png';
import '../../styles/Homepage/NavBarModalContent.scss';

import Navbar from '../../components/Daler/Navbar';

const NavBarMondalContent = () => {
    {/*
    const hideBlock = (e) => {
        e.preventDefault();
        const dalersBlock = document.getElementById('daler-block');
        const alehsBlock = document.getElementById('aleh-block');
        const aparnasBlock = document.getElementById('aparna-block');
        if (dalersBlock.style.display === 'none' && alehsBlock.style.display === 'none' && aparnasBlock.style.display === 'none' && document.getElementById("db-li").innerHTML === 'DALER') {
            // alehsBlock.style.display = 'flex';
            dalersBlock.style.display = 'flex';
            // aparnasBlock.style.display = 'none';
        } else if (dalersBlock.style.display === 'none' && alehsBlock.style.display === 'none' && aparnasBlock.style.display === 'none' && document.getElementById("ak-li").innerHTML === 'ALEH') {
            // dalersBlock.style.display = 'none';
            // aparnasBlock.style.display = 'flex';
            alehsBlock.style.display = 'flex';
        } else if (dalersBlock.style.display === 'none' && alehsBlock.style.display === 'none' && aparnasBlock.style.display === 'none' && document.getElementById("ap-li").innerHTML === 'APARNA') {
            // dalersBlock.style.display = 'none';
            // alehsBlock.style.display = 'none';
            aparnasBlock.style.display = 'flex';
        } else {
            window.alert("error")
            // dalersBlock.style.display = 'flex';
            // alehsBlock.style.display = 'flex';
            // aparnasBlock.style.display = 'flex';
        }
    }
*/}
    const [dalerBlockActive, setDalerBlockActive] = useState(false);
    const [alehBlockActive, setAlehBlockActive] = useState(false);
    const [aparnaBlockActive, setAparnaBlockActive] = useState(false);

    function hideDalerAndAparnaBlocks() {
        document.getElementById('daler-block').style.display = 'none';
        document.getElementById('aparna-block').style.display = 'none';
    }
    function hideAlehAndAparnaBlocks() {
        document.getElementById('aleh-block').style.display = 'none';
        document.getElementById('aparna-block').style.display = 'none';
    }
    function hideDalerAndAlehBlocks() {
        document.getElementById('daler-block').style.display = 'none';
        document.getElementById('aleh-block').style.display = 'none';
    }
    return (
        <Router>
            <div className="mainContainer">
                <div className="leftContainer">
                    {/* <div id="chapter-text"><span>PAGE NAVIGATION</span></div> */}
                    {/* onMouseOver={() => setDalerBlockActive(!dalerBlockActive)} */}
                    <ul id="modal-chapter-titles">
                        <li id="db-li" className="chapter-highlighted" onMouseOver={() => document.getElementById('daler-block').style.display = 'grid'} onMouseLeave={() => hideAlehAndAparnaBlocks()}>DALER</li>

                        <li id="ak-li" className="chapter-highlighted" onMouseOver={() => document.getElementById('aleh-block').style.display = 'grid'} onMouseLeave={() => hideDalerAndAparnaBlocks()}>ALEH</li>

                        <li id="ap-li" className="chapter-highlighted" onMouseOver={() => document.getElementById('aparna-block').style.display = 'grid'} onMouseLeave={() => hideDalerAndAlehBlocks()}>APARNA</li>
                    </ul>
                </div>

                <div className="container1">
                    {/* Daler's Block of Links */}
                    {/* {dalerBlockActive ? */}
                    <div className="rightContainer" id="daler-block" style={{ display: 'none' }}>
                        <div className="infos">
                            <img src={findJob} alt="no image" width='120px' height='120px' />
                            <article className="info">
                                <Link className="link" to="/searchjobs/#jobs" target="_top">
                                    <p> Take the Stress Out Of Your Job Search With Great Opportunities At Innovative Companies. Your Dream Job Is Waiting To Apply To Interview You.</p>
                                    <p>Search jobs</p>
                                </Link>
                            </article>
                        </div>


                        <div className="infos">
                            <img src={jobSearch} alt="no image" width='120px' height='120px' />
                            <article className="info">
                                <Link className="link" to="/alljobs/#alljobs" target="_top">
                                    <p>List All Available Jobs</p>
                                </Link>
                            </article>
                        </div>


                        <div className="infos">
                            <img src={techNews} alt="no image" width='120px' height='120px' />
                            <article className="info">
                                <Link className="link" to="/technews/#technews" target="_top">
                                    <p>The latest in technology and company news</p>
                                </Link>
                            </article>
                        </div>
                    </div>
                    {/* : !dalerBlockActive
                    } */}

                    {/* Aleh's Block of Links */}
                    {/* {alehBlockActive ? */}
                    <div className="rightContainer" id="aleh-block" style={{ display: 'none' }}>
                        <div className="infos">
                            <img src={findJob} alt="no image" width='120px' height='120px' />
                            <article className="info">
                                <Link className="link" to="/searchjobs/#jobs" target="_top">
                                    <p> Take the Stress Out Of Your Job Search With Great Opportunities At Innovative Companies. Your Dream Job Is Waiting To Apply To Interview You.</p>
                                    <p>ALeh Block 1</p>
                                </Link>
                            </article>
                        </div>

                        <div className="infos">
                            <img src={jobSearch} alt="no image" width='120px' height='120px' />
                            <article className="info">
                                <Link className="link" to="/alljobs/#alljobs" target="_top">
                                    <p>ALeh Block 2</p>
                                </Link>
                            </article>
                        </div>

                        <div className="infos">
                            <img src={techNews} alt="no image" width='120px' height='120px' />
                            <article className="info">
                                <Link className="link" to="/technews/#technews" target="_top">
                                    <p>ALeh Block 3</p>
                                </Link>
                            </article>
                        </div>
                    </div>
                    {/* : !alehBlockActive
                    } */}

                    {/* Aparna's Block of Links */}
                    {/* {aparnaBlockActive ? */}
                    <div className="rightContainer" id="aparna-block" style={{ display: 'none' }}>
                        <div className="infos">
                            <img src={findJob} alt="no image" width='120px' height='120px' />
                            <article className="info">
                                <Link className="link" to="/searchjobs/#jobs" target="_top">
                                    <p> Take the Stress Out Of Your Job Search With Great Opportunities At Innovative Companies. Your Dream Job Is Waiting To Apply To Interview You.</p>
                                    <p>Aparna Block 1</p>
                                </Link>
                            </article>
                        </div>

                        <div className="infos">
                            <img src={jobSearch} alt="no image" width='120px' height='120px' />
                            <article className="info">
                                <Link className="link" to="/alljobs/#alljobs" target="_top">
                                    <p>Aparna Block 2</p>
                                </Link>
                            </article>
                        </div>

                        <div className="infos">
                            <img src={techNews} alt="no image" width='120px' height='120px' />
                            <article className="info">
                                <Link className="link" to="/technews/#technews" target="_top">
                                    <p>Aparna Block 3</p>
                                </Link>
                            </article>
                        </div>
                    </div>
                    {/* : !aparnaBlockActive
                    } */}
                </div>
            </div>
        </Router>
    );
}

export default NavBarMondalContent;

