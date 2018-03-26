import React, {Component} from 'react'
import logo from './logo.svg';

class Header extends Component {
    constructor(){
        super();
        this.state = { title: "Welcome to React"};
    }
    render(){
        setTimeout(()=> {
            this.setState({title: "Welcome to React Hello World APP"});
        }, 3000)
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{this.state.title}</h1>
            </header>
        );
    }
}

export default Header;