import React from 'react'
import DayPicker from 'react-day-picker'
import {connect} from 'react-redux'
import 'react-day-picker/lib/style.css'
import {changeDateRange} from "../../AC";

class DateRange extends React.Component {
    render() {
        const {from, to} = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;

        return (
            <div className={'date-range'}>
                <DayPicker
                    ref='daypicker'
                    selectedDays={day => DayPicker.DateUtils.isDayInRange(day, {from, to})}
                    onDayClick={this.handleDayClick}
                />
                {selectedRange}
            </div>
        )
    }

    handleDayClick = (day) => {
        const {changeDateRange, range} = this.props;
        changeDateRange(DayPicker.DateUtils.addDayToRange(day, range));
    }
}

export default connect(state => ({
    range: state.filters.dateRange
}), {changeDateRange})(DateRange)
