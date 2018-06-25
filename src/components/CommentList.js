import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    render() {
        return (
            <div>
                <button onClick={this.props.toggleOpen}>
                    {this.props.isOpen ? 'Hide comments' : 'Show comments'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props;
        if (!isOpen) return null;
        if (!comments.length) return <p>No comments yet</p>;

        const commentElements = comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>);
        return (
            <ul>
                {commentElements}
            </ul>
        )
    }
}

export default toggleOpen(CommentList)
