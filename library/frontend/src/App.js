import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import UserList from './components/Users.js'
import MenuItem from "./components/Menu.js";
import FooterItem from "./components/Footer.js";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8013/api/users/')
            .then(response => {
                const users = response.data
                    this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))
    }
    render () {
        return (
            <div>
                <MenuItem/>
                <UserList users={this.state.users} />
                <FooterItem/>
            </div>
        )
    }
}


export default App;
