import React, {Component} from 'react';
import PostsList from './posts/PostsList';


class Container extends Component {
    render(){
        return (
             <PostsList posts={this.props.posts}/>
        );
    }
}

export default Container;