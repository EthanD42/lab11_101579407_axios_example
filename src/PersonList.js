
import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
        
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        return (
            <div className="container mt-4">
                <h2>Person List</h2>

                {this.state.persons.map(person => (
                    <div className="card mb-3 p-3" key={person.login.uuid}>
                        <div className="d-flex align-items-center">
                            <img
                                src={person.picture.medium}
                                alt="Profile"
                                className="rounded-circle me-3"
                            />
                            <div>
                                <h5>
                                    {person.name.first} {person.name.last}
                                </h5>
                                <p className="mb-1">{person.email}</p>
                                <p className="mb-0">{person.location.country}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;
