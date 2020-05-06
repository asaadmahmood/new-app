import React from 'react';
import {connect} from 'react-redux';
import MemberListItem from './MemberListItem';
import selectMembers from '../selectors/members';

export const MemberList =(props) => (
    <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Members</div>
      <div className="show-for-desktop">Members</div>
     <div className="show-for-desktop">Packege</div>
    </div>
    <div className="list-body">
    {
      props.members.length === 0 ? (
<div className="list-item list-item--message">       
  <span>No member</span>
</div>
) : (
    props.members.map((member) => {
      return <MemberListItem key={member.id} {...member} />;
    })
  )
}
</div>
</div>
    );

    const mapStateToProps = (state) => {
        return {
          members: selectMembers(state.members, state.filters)
        };
      };
      
      export default connect(mapStateToProps)(MemberList);