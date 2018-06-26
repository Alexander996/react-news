import React from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class DateRange extends React.Component {
    state = {
        from: null,
        to: null
    };

    render() {
        const {from, to} = this.state;
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
        this.setState(DayPicker.DateUtils.addDayToRange(day, this.state))
    }
}
