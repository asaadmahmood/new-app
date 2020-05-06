import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, sortByDate, sortByPackege, setStartDate, setEndDate} from '../actions/filters';

import {DateRangePicker} from 'react-dates';

export class MemberListFilters extends React.Component {
    state = {
        calanderFocused: null 
    };
    onDateChange = ({stratDate, endDate}) =>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange= (calenderFocused) => {
        this.setState(()=>({calanderFocused}));
    };
    onTextChange = (e) => {
       props.settextFilter(e.target.value);
    };
    onSortChange =(e) =>{
        if(e,target.value ==='date'){
        this.props.sortBydate();
        }else if(e.target.value === 'packege'){
            this.props.sortByPackege();
        }
    }
render(){
    console.log(this.props);
    return(
        <div className="content-container">
      <div className="input-group" > 
        <div className="input-group__item">
        <input type="text" 
        className="text-input"
        placeholder="Search member"
      value={this.props.filters.text}
       onChange={this.onTextChange}/> 
        </div>
        <div className="input-group__item">
        <select  
        className="select"
      value={this.props.filters.sortBy} 
      onChange={this.onSortChange}>
        <option value='date'>Date</option>
        <option value='packege'>Packege</option>
      </select>
        </div>
         <div className="input-group__item">
         <DateRangePicker
      startDate={this.props.filters.startDate}
      endDate={this.props.filters.endDate}
      onDatesChange={this.onDatesChange}
      focusedInput= {this.state.calendarFocused}
      onFocusChange= {this.onFocusChange}
      showClearDates= {true}
      numberOfMonths={1}
      isOutsideRange= {()=> false}
    />
         </div>
      </div>
      </div>
    );
}    

} 
const mapStateToProps = (state) => {
    return {
      filters: state.filters
    };
  };
  const mapDiapatchToProps= (dispatch) =>({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByPackege: () => dispatch (sortByPackege()),
  setStartDate: (startDate)=> dispatch(setStartDate(startDate)),
  setEndDate: (endDate)=> dispatch(setEndDate(endDate))
  
  })
  export default connect(mapStateToProps, mapDiapatchToProps)(MemberListFilters);



