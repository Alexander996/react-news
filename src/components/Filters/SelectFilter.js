import React from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {changeSelection} from '../../AC'
import {mapToArr} from '../../helpers';

class SelectFilter extends React.Component {
    render() {
        const {articles, selected} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div>
                <Select options={options} value={selected} onChange={this.handleChange} isMulti/>
            </div>
        )
    }

    handleChange = selected => {
        this.props.changeSelection(selected.map(option => option.value))
    }
}

export default connect(state => ({
    articles: mapToArr(state.articles.entities)
}), {changeSelection})(SelectFilter)
