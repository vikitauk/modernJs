import React, {Component} from 'react';
import PostsList from './posts/PostsList';

class Container extends Component {
    render(){
        return (
            <div className="container">
                <div class="row">
                    <PostsList posts={this.props.posts}/>
                </div>
            </div>
        );
    }
}

export default Container;