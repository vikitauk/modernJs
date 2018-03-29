import React, {Component} from 'react'


class PostItem extends Component {
    render(){
        return(
            <div>
                <h4>{this.props.title}</h4>
                <p>
                    {this.props.content}
                </p>
                <span>{this.props.author}</span>
            </div>
        );
    }
}

export default PostItem