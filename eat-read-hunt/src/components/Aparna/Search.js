import React, { Component } from 'react';
// import ReactDom from 'react-dom'
import axios from 'axios';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import '../../styles/Aparna/App.css';

const API_URL = 'https://bookauthority.org/api/site/get-topic-data?topicId=rest_api&viewId=best&formatId=print&featureId=null&skip=5&limit=10&getAdditionalBooks=false&getInfo=false&pageviewId=56023790858211ea9e710d1d42024a5c';

class Search extends Component {
    state = {
        searchString: " ",
        books: []
    }
    constructor(props) {
        //alert('a')
        super(props);

        this.getData = this.getData.bind(this);
        this.setSearchVal = this.setSearchVal.bind(this);
    }

    setSearchVal(searchbox) {
        console.log(searchbox.target.value);
        this.setState({ searchString: searchbox.target.value });
    }

    getData() {
        alert(this.state.searchString);
        const url = `${'https://cors-anywhere.herokuapp.com/'}${API_URL}/users/`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ books: data.books })
            })
    }

    render() {
        return (
            <div className="div_first">
                <h1><label className="label"> Search</label></h1>
                <input type="text" className="form-control" onChange={this.setSearchVal} name="Search" placeholder="bookname" />
                <div className="div_second">
                    <button onClick={this.getData} className="btn btn-primary">submit</button>
                </div>
                {this.state.books.map((book) => (
                    <div className="results-container" key={book.id}>
                        {book._id}
                        <br></br>
                        <img id={book._id} src={book.images.front.l.url} alt="No value" />
                    </div>
                ))}
                <ScrollUpButton />
            </div>
        )
    }
}
export default Search;

