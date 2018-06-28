import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../../AC';
import './style.css'

class CommentForm extends React.Component {
    state = {
        user: '',
        text: ''
    };

    limits = {
        user: {
            min: 5,
            max: 15
        },
        text: {
            min: 20,
            max: 50
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p><b>Add comment:</b></p>
                <p>User: <input value={this.state.user}
                                onChange={this.handleChange('user')}
                                className={this.getClassName('user')}/></p>
                <p>Text: <input value={this.state.text}
                                onChange={this.handleChange('text')}
                                className={this.getClassName('text')}/></p>
                <input type='submit' value='Submit'/>
            </form>
        )
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.addComment(this.state);
        this.setState({
            user: '',
            text: ''
        })
    };

    getClassName(type) {
        const field = this.state[type];
        const isValid = field.length && (field.length < this.limits[type].min || field.length > this.limits[type].max);
        return isValid ? 'form-input__error' : '';
    }

    handleChange = type => ev => {
        const {value} = ev.target;
        this.setState({
            [type]: value
        })
    };
}

export default connect(null, (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentForm)
