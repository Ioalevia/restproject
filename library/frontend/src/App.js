import './App.css';
import React from 'react';
import UserList from './components/Users.js';
import MenuItem from "./components/Menu.js";
import FooterItem from "./components/Footer.js";
import axios from 'axios';
import ProjectList from "./components/Project.js";
import TodoList from "./components/Todo.js";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import NotFound404 from "./components/NotFound404.js";
import ProjectDetail from "./components/ProjectDetail.js";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(responce => {
                const users = responce.data
                this.setState(
                    {
                        'users': users,
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(responce => {
                const projects = responce.data

                this.setState(
                    {
                        'projects': projects,
                    }
                )

            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todos/')
            .then(responce => {
                const todos = responce.data

                this.setState(
                    {
                        'todos': todos,
                    }
                )

            }).catch(error => console.log(error))
    }

    render() {
        return (

            <div className="App">
                <MenuItem/>
                <BrowserRouter>
                    <nav>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/todos'>Todos</Link>
                        </li>
                    </nav>

                    <Routes>

                        <Route exact path='/' element={<Navigate to='/projects' />} />
                        <Route path='/projects'>
                            <Route index element={<ProjectList projects={this.state.projects}/>}/>
                            <Route path=':projectId' element={<ProjectDetail projects={this.state.projects}/>}/>

                        </Route>

                        <Route exact path='/users' element={<UserList users={this.state.users}/>}/>
                        {/*<Route exact path='/projects' element={<ProjectList projects={this.state.projects}/>}/>*/}
                        <Route exact path='/todos' element={<TodoList todos={this.state.todos}/>}/>
                        <Route path='*' element={<NotFound404 />} />


                    </Routes>
                </BrowserRouter>
                <FooterItem/>
            </div>

        )
    }
}

export default App;