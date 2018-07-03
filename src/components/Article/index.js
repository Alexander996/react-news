import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentList from '../CommentList'
import { CSSTransitionGroup } from 'react-transition-group'
import {deleteArticle, loadArticle} from '../../AC';
import Loader from '../Loader'
import './style.css'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        //from connect
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        })
    };

    componentDidMount() {
        const {loadArticle, article, id} = this.props;
        if (!article || (!article.text && !article.loading)) loadArticle(id)
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        if (!article) return null;

        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}</h3>
                <p>{new Date(article.date).toDateString()}</p>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                <button onClick={this.handleDelete}>Delete</button>
                <CSSTransitionGroup
                    transitionName='article'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id)
    };

    setContainerRef = ref => {
        // this.container = ref;
    };

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;

        if (article.loading) return <Loader/>;

        return (
            <section>
                <p>{article.text}</p>
                <CommentList article={article} />
            </section>
        )
    }
}

export default connect((state, ownProps) => ({
    article: state.articles.entities.get(ownProps.id)
}), {deleteArticle, loadArticle},
    null,
    {pure: false}
)(Article)
