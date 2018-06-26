import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import { CSSTransitionGroup } from 'react-transition-group'
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
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
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

    setContainerRef = ref => {
        this.container = ref;
    };

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;

        return (
            <section>
                <p>{article.text}</p>
                <CommentList comments={article.comments} />
            </section>
        )
    }
}

export default Article
