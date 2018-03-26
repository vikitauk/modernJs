import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';

class Layout extends Component {
    constructor(){
        super();
        this.state = {title: "Welcome to React Hello World APP"};
    }

    changeTitle(title){
        this.setState({title});
    };
    render() {
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <Content />
            </div>
        );
    }
}


export default Layout;
