import React, {Component} from 'react'
import PostItem from './PostItem';
import {Grid, Row, Col} from 'react-bootstrap'

class PostsList extends  Component {
    render(){
        const posts = this.props.posts.map(
            post => <Col md={3}>
                        <PostItem key={post.id} title={post.title} content={post.content} author={post.author}/>
                    </Col>
            );
        return (
            <Grid>
                <Row className="show-grid">
                    {posts}
                </Row>
            </Grid>
        );
    }
}

export default PostsList