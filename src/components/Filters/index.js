import React from 'react'
import SelectFilter from './SelectFilter'
import DateRange from './DateRange'
import 'react-day-picker/lib/style.css'

export default class Filters extends React.Component {
    render() {
        return (
            <div>
                <SelectFilter articles={this.props.articles}/>
                <DateRange/>
            </div>
        )
    }
}
