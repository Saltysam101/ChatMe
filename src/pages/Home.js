import React, { Component } from 'react'
import {
    signInWithGoogle, 
    signInWithGitHub,
    logOut,
    signin,
    signup
} from '../helpers/auth';
import { render } from '@testing-library/react';

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
                <h1>Home Page</h1>
            </div>
        )
    };
        

    }

    

