import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}


export default Layout;
