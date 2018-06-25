import React, {Component} from 'react'

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const {article} = this.props;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>Open</button>
                <section>{article.text}</section>
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
