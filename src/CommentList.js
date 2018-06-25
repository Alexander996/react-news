import React, {Component} from 'react'
import Comment from './Comment'

export default class ComponentList extends Component {
    static defaultProps = {
        comments: []
    };

    state = {
        isOpen: false
    };

    render() {
        return (
            <div>
                <button onClick={this.toggleOpen}>
                    {this.state.isOpen ? 'Hide comments' : 'Show comments'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getBody() {
        if (!this.state.isOpen) return null;

        const {comments} = this.props;
        if (!comments.length) return <p>No comments yet</p>;

        const commentElements = comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>);
        return (
            <ul>
                {commentElements}
            </ul>
        )
    }
}

