import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/layout/header/Header'
import Container from './components/layout/content/Container';

import * as PostActions from './components/layout/content/posts/PostAction'
import PostStore from './components/layout/content/posts/PostStore.js'

class App extends Component {
    constructor(){
        super();
        this.state =  {
            posts: PostStore.getAllPosts()
        };
    }
    componentWillMount(){
        PostStore.on("change", () => {
            this.setState({posts: PostStore.getAllPosts()})
        });
    }
    createPost(){
        PostActions.createPost({title: Date.now(), author: "Me", content: "some text"});
    }
    render() {
      return (
        <div className="App">
          <Header/>
            <button onClick={this.createPost.bind(this)}> Create POST</button>
          <Container posts={this.state.posts} />
        </div>
      );
    }
}

export default App;
