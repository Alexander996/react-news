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
        article: PropTypes.object.isRequired,
        // from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <div>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Hide comments' : 'Show comments'}
                </button>
                {this.getBody({article, isOpen})}
            </div>
        )
    }

    getBody({article: {comments = [], id}, isOpen}) {
        if (!isOpen) return null;
        if (!comments.length) return (
            <div>
                <p>No comments yet</p>
                <CommentForm articleId={id}/>
            </div>
        );

        const commentElements = comments.map((id) => <li key={id}><Comment id={id}/></li>);
        return (
            <div>
                <ul>
                    {commentElements}
                </ul>
                <CommentForm articleId={id}/>
            </div>
        )
    }
}

export default toggleOpen(CommentList)
