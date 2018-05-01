import React, { Component } from 'react';
import axios from 'axios';

class allUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }


 

    allUser() {
        const url = 'http://localhost:1337/users/list';
        return axios.get(url)
            .then((response) => {
                this.setState({ users: response.data });
            })
            .catch((error) => {
            });


    }
    componentDidMount() {
        this.allUser();
    }

    render() {
        
        return (
            <div>

            </div>
        )
    }
}

export default allUsers;