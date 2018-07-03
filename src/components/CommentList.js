import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import {loadArticleComments} from '../AC'
import {connect} from 'react-redux'
import Loader from './Loader';

class CommentList extends Component {
    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string
    };

    static defaultProps = {
        comments: []
    };

    static propTypes = {
        article: PropTypes.object.isRequired,
        // from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    componentWillReceiveProps({isOpen, article, loadArticleComments}) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <div>
                <h3>User: {this.context.user}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Hide comments' : 'Show comments'}
                </button>
                {this.getBody({article, isOpen})}
            </div>
        )
    }

    getBody({article: {comments = [], id, commentsLoading, commentsLoaded}, isOpen}) {
        if (!isOpen) return null;
        if (commentsLoading) return <Loader/> ;
        if (!commentsLoaded) return null;
        
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

export default connect(null, {loadArticleComments}, null, {pure: false})(toggleOpen(CommentList))
