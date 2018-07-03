import React, {Component} from 'react'

export default class UserForm extends Component {
    render() {
        return (
            <div>
                Name: <input type='text' value={this.props.value} onChange={this.handleUserChange}/>
            </div>
        )
    }

    handleUserChange = (ev) => {
        if (ev.target.value.length > 5) return;

        this.props.onChange(ev.target.value);
    }
}
