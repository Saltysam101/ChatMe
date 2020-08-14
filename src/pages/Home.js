import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    signInWithGoogle, 
    signInWithGitHub,
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
        this.googleSignIn = this.googleSignIn.bind(this);
        this.githubSignIn = this.githubSignIn.bind(this);
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
    
      async googleSignIn() {
        try {
          await signInWithGoogle();
        } catch (error) {
          this.setState({ error: error.message });
        }
      }
    
      async githubSignIn() {
        try {
          await signInWithGitHub();
        } catch (error) {
          console.log(error)
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
          onSubmit={this.handleSubmit}
        >
          <h1>
            Login to
            <Link className="title ml-2" to="/login">
              ChatMe
            </Link>
          </h1>
          <p>Wanna log out?</p>
          <button onClick={logOut}>logout</button>
        </form> 
            </div>
        )
    };
        

    }

    

