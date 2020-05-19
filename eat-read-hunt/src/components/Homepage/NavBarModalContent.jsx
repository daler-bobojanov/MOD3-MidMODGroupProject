import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import findJob from '../../assets/Daler/findjob.png';
import jobSearch from '../../assets/Homepage/jobSearch.png';
import techNews from '../../assets/Daler/technews.png';
import '../../styles/Homepage/NavBarModalContent.scss';

import findRecipes from '../../assets/Aleh/q&eRecipes.png';
import top5Recipes from '../../assets/Aleh/top5recipes.png';
import letsCook from '../../assets/Aleh/letscook.png';

import book from '../../assets/Aparna/book.png';
import bookCollection from '../../assets/Aparna/bookcollection.png';
import favorites from '../../assets/Aparna/favorites.png';

const NavBarMondalContent = () => {
    // const [dalerBlockActive, setDalerBlockActive] = useState(false);
    // const [alehBlockActive, setAlehBlockActive] = useState(false);
    // const [aparnaBlockActive, setAparnaBlockActive] = useState(false);

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
                        <li id="db-li" className="chapter-highlighted" onMouseOver={() => document.getElementById('daler-block').style.display = 'grid'} onMouseLeave={() => hideAlehAndAparnaBlocks()}>JOB SEARCH</li>

                        <li id="ak-li" className="chapter-highlighted" onMouseOver={() => document.getElementById('aleh-block').style.display = 'grid'} onMouseLeave={() => hideDalerAndAparnaBlocks()}>RECIPES</li>

                        <li id="ap-li" className="chapter-highlighted" onMouseOver={() => document.getElementById('aparna-block').style.display = 'grid'} onMouseLeave={() => hideDalerAndAlehBlocks()}>BOOK STORE</li>
                    </ul>
                </div>

                <div className="container1">
                    {/* Daler's Block of Links */}
                    {/* {dalerBlockActive ? */}
                    <div className="rightContainer" id="daler-block" style={{ display: 'none' }}>
                        <div className="infos">
                            <img src={findJob} alt="find-job" width='135px' height='135px' />
                            <article className="info">
                                <Link className="link" to="/searchjobs/#jobs" target="_top">
                                    <p>Take the Stress Out Of Your Job Search With Great Opportunities At Innovative Companies.</p>
                                    <p>Your Dream Job Is Waiting To Apply To Interview You.</p>
                                    {/* <p>Search jobs</p> */}
                                </Link>
                            </article>
                        </div>


                        <div className="infos">
                            <img src={jobSearch} alt="career-challenge" width='135px' height='135px' />
                            <article className="info">
                                <Link className="link" to="/alljobs/#alljobs" target="_top">
                                    <p>List All Available Jobs</p>
                                </Link>
                            </article>
                        </div>


                        <div className="infos">
                            <img src={techNews} alt="tech-news" width='135px' height='135px' />
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
                            <img src={findRecipes} alt="no image" width='135px' height='135px' />
                            <article className="info">
                                <Link className="link" to="/searchrecipe" target="_top">
                                    <p>Looking to develop your own cooking and food? Look no further!</p>
                                    <p>Click for more!</p>
                                    {/* <p>ALeh Block 1</p> */}
                                </Link>
                            </article>
                        </div>

                        <div className="infos">
                            <img src={top5Recipes} alt="no image" width='135px' height='135px' />
                            <article className="info">
                                <Link className="link" to="/top" target="_top">
                                    <p>Each recipe has a brief description, directions, a list of tips, and nutritional information.</p>
                                    {/* <p>ALeh Block 2</p> */}
                                </Link>
                            </article>
                        </div>

                        <div className="infos">
                            <img src={letsCook} alt="no image" width='135px' height='135px' />
                            <article className="info">
                                <Link className="link" to="/motivation" target="_top">
                                    <p>Why home cooking?</p>
                                    <p>You asked, We answered!</p>
                                    {/* <p>ALeh Block 3</p> */}
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
                            <img src={book} alt="no image" width='135px' height='135px' />
                            <article className="info">
                                <Link className="link" to="/search" target="_top">
                                    <p>Search your favorite book..</p>
                                    {/* <p>Aparna Block 1</p> */}
                                </Link>
                            </article>
                        </div>

                        <div className="infos">
                            <img src={bookCollection} alt="no image" width='135px' height='135px' />
                            <article className="info">
                                <Link className="link" to="/books" target="_top">
                                    <p>Books Collection..</p>
                                </Link>
                            </article>
                        </div>

                        <div className="infos">
                            <img src={favorites} alt="no image" width='135px' height='135px' />
                            <article className="info">
                                <Link className="link" to="/savebooks" target="_top">
                                    <p>Save your books from "Books Collection" and access them here..</p>
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

