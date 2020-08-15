import React, { Component } from 'react';
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import "../chat.css";

export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: auth().currentUser,
            chats: [],
            content: '',
            readError: null,
            writeError: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        this.setState({ readError: null });
        try {
            db.ref("chats").on("value", snapshot => {
                let chats = [];
                snapshot.forEach((snap) => {
                    chats.push(snap.val());
                });
                this.setState({ chats });
            });
        } catch (error) {
            this.setState({ readError: error.message });
        }
    }

    handleChange(event) {
        this.setState({
            content: event.target.value
        });
    }

    async handleSubmit(event){
        event.preventDefault();
        this.setState({ writeError: null });
        try {
            await db.ref("chats").push({
                content: this.state.content,
                timestamp: Date.now(),
                uid: this.state.user.uid,
                email: this.state.user.email
            });
            this.setState({ content: '' });
        } catch (error) {
            this.setState({ writeError: error.message });
        }
    }

    

    render() {
        return (
            <div>
      <div className="chats">
        {this.state.chats.map(chat => {
          return ( <div> <strong className="user">{chat.email}</strong> <p className="message" key={chat.timestamp}>{chat.content}</p> </div>)
        })}
      </div>
      <form onSubmit={this.handleSubmit}>
        <input className="input" onChange={this.handleChange} value={this.state.content}></input>
        {this.state.error ? <p>{this.state.writeError}</p> : null}
        <button className="submit" type="submit">Send</button>
      </form>
      <div className="userinfo">
        Login in as: <strong>{this.state.user.email}</strong>
      </div>
    </div>
        )
    }
}
