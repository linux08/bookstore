import React, { Component } from 'react';
import axios from 'axios';

class allUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }


   /* profile(e) {
        let bookName = this.state.name;
        let permission = this.state.permission;

        axios.post('http://localhost:1337/user/profile', {
            email: this.state.email
        })
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            }
            )

    } */

    allUser() {
        const url = 'http://localhost:1337/users/list';
        return axios.get(url)
            .then((response) => {
                this.setState({ users: response.data });
                 console.log("setting respose.data");

            })
            .catch((error) => {
                console.log(error);
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