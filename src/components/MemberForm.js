import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();
console.log(now.format('MM Do, YYYY'));

export default class MemberForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.member ? props.member.name : '',
            age: props.member ? (props.member.age).toString() : '',
            sex: '',
            packege: props.member ? (props.member.packege).toString() : '',
            address: props.member ? props.member.address : '',
            createdAt: props.member ? moment(props.member.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    };
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onAgeChange = (e) => {
        const age = e.target.value;
        if (!age || age.match(/^[0-9]{1,2}[:.,-]?$/)) {
            this.setState(() => ({ age }));
        }
    };
    onSexChange = (e) => {
        console.log(e.target.value);
        const sex = e.target.value;
        this.setState(() => ({ sex }));
    };
    onPackegeChange = (e) => {
        const packege = e.target.value;
        if (!packege || packege.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ packege }));
        }
    };
    onAddressChange = (e) => {
        const address = e.target.value;
        this.setState(() => ({ address }));
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        };
        
    };
    onFocusChange = (focused) => {
        this.setState(() => ({ calenderFocused: focused }));
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name) {
            this.setState(() => ({ error: 'Please provide name ' }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name,
                age: parseFloat(this.state.age, 10),
                sex: this.state.sex,
                packege: parseFloat(this.state.packege, 10) * 100,
                address: this.state.address,
                createdAt: this.state.createdAt.valueOf()
                
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form_error">{this.state.error}</p>}
            <input
            type="text"
            placeholder="Member Name"
            autoFocus
            className="text-input"
            value={this.state.name}
            onChange={this.onNameChange}
            />
            <input
            type="number"
            placeholder="age"
            autoFocus
            className="text-input"
            value={this.state.age}
            onChange={this.onAgeChange}
            />
            <div>Gernder<br/>
            <label>
            <input type="radio"
            placeholder="sex"
            autoFocus
            name="sex"
            className="text-input"
            checked={this.state.sex === 'male'? true : false}
            value= {'male'}
            onChange={this.onSexChange}
            />{'male'}
            </label>
            <label>
            <input type="radio"
            placeholder="sex"
            name="sex"
            autoFocus
            className="text-input"
            checked={this.state.sex === 'female'? true : false}
            value= {'female'}
            onChange={this.onSexChange}
            />{'female'}
            </label>
            </div>
            
            
            
            
            <input
            type="text"
            placeholder="packege"
            autoFocus
            className="text-input"
            value={this.state.packege}
            onChange={this.onPackegeChange}
            />
            <textarea
            type="text"
            placeholder="Add address"
            autoFocus
            className="textareat"
            value={this.state.address}
            onChange={this.onAddressChange}
            />
            
            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            />
            <div>
            <button className="_button">Save Member</button>
            </div>
            
            </form>
            )
        }
        
    }
    