import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment me</button>
            </div>
        )
    }

    handleIncrement = () => {
        const {increment} = this.props;
        increment()
    }
}

export default connect((state) => ({
    counter: state.count
}), {increment})(Counter)
