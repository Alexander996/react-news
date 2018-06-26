import React from 'react'
import Select from 'react-select'

export default class SelectFilter extends React.Component {
    state = {
        selection: null
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div>
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} multi/>
            </div>
        )
    }

    changeSelection = selection => this.setState({selection})
}
