import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';

class Layout extends Component {
    render() {
        const title = "Welcome to React Hello World APP";
        return (
            <div>
                <Header title={title}/>
                <Content />
            </div>
        );
    }
}


export default Layout;
