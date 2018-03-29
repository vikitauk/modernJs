import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/layout/header/Header'
import Container from './components/layout/content/Container';

class App extends Component {
    constructor(){
        super();
        this.state =  { posts: [
                {
                    title: "blog Post #1",
                    author: "Martin M.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    id: 0
                },
                {
                    title: "blog Post #2",
                    author: "Martin M.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    id: 1
                },
                {
                    title: "blog Post #3",
                    author: "Martin M.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    id: 2
                },
                {
                    title: "blog Post #4",
                    author: "Martin M.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    id: 3
                },
                {
                    title: "blog Post #5",
                    author: "Martin M.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    id: 4
                }
            ]
        };
    }

  render() {
    return (
      <div className="App">
        <Header/>
        <Container posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
