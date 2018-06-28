import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentList from '../CommentList'
import { CSSTransitionGroup } from 'react-transition-group'
import {deleteArticle} from "../../AC";
import './style.css'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    render() {
        const {article, isOpen, toggleOpen} = this.props;

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

        return (
            <section>
                <p>{article.text}</p>
                <CommentList article={article} />
            </section>
        )
    }
}

export default connect(null, {deleteArticle})(Article)
