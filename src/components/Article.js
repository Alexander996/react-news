import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };

    componentWillReceiveProps(nextProps) {
        console.log('receiving props:', nextProps)
    }

    componentWillMount() {
        console.log('mounting')
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    setContainerRef = ref => {
        this.container = ref;
        console.log('REF:', ref)
    };

    componentDidMount() {
        console.log('mounted')
    }

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

export default toggleOpen(Article)
