import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    static propTypes = {
        comments: PropTypes.array.isRequired,
        // from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
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
            <div>
                <ul>
                    {commentElements}
                </ul>
                <CommentForm/>
            </div>
        )
    }
}

export default toggleOpen(CommentList)
