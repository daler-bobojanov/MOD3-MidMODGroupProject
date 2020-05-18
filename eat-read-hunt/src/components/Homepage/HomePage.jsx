import React from 'react';
import recipe from '../../assets/Homepage/chorizo-mozarella-gnocchi-bake-cropped.png';
import book from '../../assets/Homepage/book.png';
import jobSearch from '../../assets/Homepage/jobSearch.png';
import '../../styles/Homepage/HomePage.scss';

import AllJobs from '../Daler/AllJobs';

export default function HomePage() {
    return (
        <React.Fragment>
            <div className="mainContainer2">

                {/* <div className="container1">
                <div className="leftContainer">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis dignissimos veniam itaque laboriosam officia apiente dolorum voluptatum iste!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis dignissimos veniam itaque laboriosam officia apiente dolorum voluptatum iste! >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis dignissimos veniam itaque laboriosam officia apiente dolorum voluptatum iste!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis dignissimos veniam itaque laboriosam officia apiente dolorum voluptatum iste!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis dignissimos veniam itaque laboriosam officia apiente dolorum voluptatum iste!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis dignissimos veniam itaque laboriosam officia apiente dolorum voluptatum iste!</p>
                </div>
                <div className="rightContainer">
                    <div className="infos">
                        <img src={jobSearch} alt="no image" width='150px' height='150px' />
                        <article className="info">
                            <p>Take the Stress Out Of Your Job Search With Great Opportunities At Innovative Companies.</p>
                            <p> Your Dream Job Is Waiting To Apply To Interview You.</p>
                        </article>
                    </div>

                    <div className="infos">
                        <img src={book} alt="no image" width='150px' height='150px' />
                        <article className="info">
                            <p>Choose what you’d like to learn from our extensive library.</p>
                            <p>Learn from industry experts who are passionate about teaching.</p>
                        </article>
                    </div>

                    <div className="infos">
                        <img src={recipe} alt="no image" width='150px' height='150px' />
                        <article className="info">
                            <p>Looking to develop your own cooking and food. Click for more! View Products.</p>
                            <p>Each recipe has a brief description, directions, a list of tips, and nutritional information.</p>
                        </article>
                    </div>
                </div>
            </div> */}

            </div>
            <div id="main-footer">

                <footer>
                    <h6>MidMOD-3 Group Project - "Eat-Read-Hunt".</h6>
                    <h6>Participants: Daler, Aleh, Aparna.</h6>
                    <h6>&copy; 2020</h6>

                </footer>
            </div>
        </React.Fragment>
    )
}
