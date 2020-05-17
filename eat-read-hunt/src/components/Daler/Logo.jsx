import React from 'react';
import axios from 'axios';
import '../../styles/Daler/AllJobs.css';
import SearchForm from './SearchForm';
import JobDescriptionModal from './JobDescriptionModal';
// Page scroll up button. Source code from - https://www.npmjs.com/
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
// import * as ReactBootStrap from 'react-bootstrap';

// const BASE_URL = "https://jobs.github.com/positions.json?markdown=false&page=&location=&description=";
// https://jobs.github.com/positions.json?markdown=false&page=&location=${location}&description=${description}

class Logo extends React.Component {
    state = {
        data: [],
        error: undefined,
        loading: undefined
    }


    searchJobs = async (e) => {
        e.preventDefault();
        // grabbing value from SearchForm inputs
        const location = e.target.elements.location.value;
        const description = e.target.elements.jobDescription.value;

        try {
            const api_call = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://jobs.github.com/positions.json?markdown=false&page=&location=${location}&description=${description}`);
            // console.log(api_call.data, "TEST");
            api_call.data.length !== 0 ? (this.setState({ data: api_call.data, error: null, loading: true })) : (this.setState({ data: [], loading: true, error: "There are no results that match your search. Please modify your search parameters and try again.." }));
            return api_call;
        } catch (e) {
            window.alert(e);
            console.error(e);
        }
    }

    render() {
        const postJobs = this.state.data.map(post => (
            <div className="container-all-jobs" key={post.id}>
                <JobDescriptionModal value={post} />
                <p>Company: <a id="container-company-url" href={post.company_url} target="_blank" rel="noopener noreferrer">{post.company}</a></p>
                <p>Location: {post.location}</p>
                <p>Type: {post.type}</p>
                <p>Posted on: {post.created_at}</p>
            </div>
        ))
        return (
            <div>
                <SearchForm searchJobs={this.searchJobs} />
                <br />
                <br />

                {/* {this.state.loading === undefined ? (postJobs) : (<ReactBootStrap.Spinner animation="border" variant="primary" />)} */}

                {this.state.data.length !== 0 ? (postJobs) : (
                    <div className="container">
                        <h3 className="text-muted font-italic">{this.state.error}</h3>
                    </div>
                )}
                {/* {postJobs} */}

                <ScrollUpButton />
            </div>
        );
    }
};

export default Logo;

