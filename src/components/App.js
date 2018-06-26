import React, {Component} from 'react'
import ArticleList from './ArticleList'

export default class App extends Component {
    render() {
        return (
            <div>
                <ArticleList articles={this.props.articles}/>
            </div>
        )
    }
}
