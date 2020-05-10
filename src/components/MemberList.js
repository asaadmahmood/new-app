import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import MemberListItem   from './MemberListItem';
import selectMembers from '../selectors/members';

// export class MemberList extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//   }
export const MemberList = (props) => (



  // render() {
  //   return (
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Members</div>
          <div className="show-for-desktop">Members</div>
          <div className="show-for-desktop">Packege</div>
        </div>
        <div className="list-body">
          {/* {props.toString()} */}
          {
            props.members.length === 0 ? (
              <div className="list-item list-item--message">
                <span>No member</span>
              </div>
            ) : (
                props.members.toString(()=>{
                  props.members.map((member) => { 
                    return <MemberListItem key={member.id} {...member} />;
                  });
                })
                )  
              }
        </div>
      </div>
    );
// }
// }

const mapStateToProps = (state) => {
  return {
    members: selectMembers(state.members, state.filters),
    // members: state.members
  };
};

export default connect(mapStateToProps)(MemberList);