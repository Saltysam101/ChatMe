import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Chat from "../pages/Chat";
import {
    logOut,
    signup
} from '../helpers/auth';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
          error: null,
          email: '',
          password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: '' });
        try {
          await signup(this.state.email, this.state.password);
        } catch (error) {
          this.setState({ error: error.message });
        }
      }
    
    
      render() {
        return(
            <div>
                <h1>Welcome to ChatMe</h1>
                <h3>A place where people can chat</h3>
                <form
          className="mt-5 py-5 px-5"
          autoComplete="off"
          onSubmit={this.handleSubmit}>
            < Chat />
          <p>Want to log out?</p>
          <button onClick={logOut}><Link to="/">Log out</Link></button>
        </form> 
            </div>
        )
    };
        

    }

    

