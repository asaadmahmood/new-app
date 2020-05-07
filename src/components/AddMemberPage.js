import React from 'react';
import { connect } from 'react-redux';
import MemberForm from './MemberForm';
import { startAddMember } from '../actions/members';

export class AddMemberPage extends React.Component {

  onSubmit = (member) => {
    this.props.startAddMember(member);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Member</h1>

          </div>
        </div>


        <MemberForm
           onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddMember: (member) => dispatch(startAddMember(member))
});

export default connect(undefined, mapDispatchToProps)(AddMemberPage);
