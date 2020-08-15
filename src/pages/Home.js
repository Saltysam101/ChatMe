import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Chat from "../pages/Chat";
import {
    logOut,
    signup
} from '../helpers/auth';
import "../home.css";


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
                <h1>Welcome to <span className="chatme">ChatMe</span></h1>
                <h3>A place where people can chat</h3>
                <form
                      autoComplete="off"
                      onSubmit={this.handleSubmit}>
                  < Chat />
                  <div className="logout-container">
                    <p>Want to log out?</p>
                    <button className="logout-btn" onClick={logOut}><Link className="btn-text" to="/">Log out</Link></button>
                  </div>
                </form> 
            </div>
        )
    };
        

    }

    

