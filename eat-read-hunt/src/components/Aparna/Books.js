import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

const API_URL = 'https://bookauthority.org/api/site/get-topic-data?topicId=rest_api&viewId=best&formatId=print&featureId=null&skip=5&limit=10&getAdditionalBooks=false&getInfo=false&pageviewId=56023790858211ea9e710d1d42024a5c';

class Books extends Component {
    state = {
        books: [],
        favBooks: []
    }
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    saveBook(bookId, url, title) {
        alert('save book title' + title);
        this.state.favBooks.push({
            '_id': bookId,
            'url': url,
            'title': title
        })
        alert(" fav books added ", this.state.favBooks.length);
        localStorage.setItem('data', JSON.stringify(this.state.favBooks));
        return;
    }
    getData() {
        const url = `${'https://cors-anywhere.herokuapp.com/'}${API_URL}/users/`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ books: data.books })
            })
    }
    render() {

        return (
            <div className="div_class">
                {this.state.books.map((book) => (
                    <div className="results-container" key={book.id}>
                        <table className="table table-dark">
                            <thead>
                                <th scope="col">Book</th>
                                <th scope="col">Title</th>
                            </thead>
                            <tr scope="row">
                                <td>{<img id={book._id} src={book.images.front.l.url} alt="No value" />}</td>
                                <td className="text-white-50 align-text-bottom" >{book.title}<br>
                                </br>${book.price}
                                    <button onClick={this.saveBook.bind(this, book._id, book.images.front.l.url, book.title)}>Save</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                ))}
                <ScrollUpButton />
            </div>

        )
    }

}

export default Books;