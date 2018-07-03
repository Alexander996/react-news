import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Articles from './routes/Articles'
import NotFound from './routes/NotFound'
import CommentsPage from './routes/CommentsPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import {Switch, Route, NavLink} from 'react-router-dom'
import {ConnectedRouter as Router} from 'react-router-redux'
import history from '../history'

export default class App extends Component {
    static childContextTypes = {
        user: PropTypes.string
    };

    state = {
        username: ''
    };

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle={{color: 'red'}} to='/counter'>Counter</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} to='/filters'>Filters</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} to='/articles'>Articles</NavLink></div>
                    </div>
                    <UserForm value={this.state.username} onChange={this.handleUserChange}/>
                    <Switch>
                        <Route path='/counter' component={Counter}/>
                        <Route path='/filters' component={Filters}/>
                        <Route path='/articles' component={Articles}/>
                        <Route path='/comments' component={CommentsPage}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }

    handleUserChange = (username) => this.setState({username})
}
