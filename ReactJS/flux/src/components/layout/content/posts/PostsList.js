import React, {Component} from 'react'
import PostItem from './PostItem';

class PostsList extends  Component {
    render(){
        const posts = this.props.posts.map(
            post => <PostItem title={post.title} content={post.content} author={post.author}/>
        );
        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default PostsList