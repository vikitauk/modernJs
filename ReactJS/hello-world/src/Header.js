import React, {Component} from 'react'
import logo from './logo.svg';

class Header extends Component {
    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render(){

        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">{this.props.title}</h1>
                </header>
                <input onChange={this.handleChange.bind(this)} />
            </div>

        );
    }
}

export default Header;