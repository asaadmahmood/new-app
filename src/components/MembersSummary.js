import React from 'react';
import { connect } from 'react-redux';
import numeral from  'numeral';
import { Link } from 'react-router-dom';
import selectMembers from '../selectors/members';
import selectMembersTotal from '../selectors/members-total';


export const MembersSummary = ({memberCount, membersTotal}) => {
const memberWord = memberCount === 1 ? 'member' : 'members';
const formattedMembersTotal = numeral(membersTotal / 100).format('$0.00');

return (
    <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{memberCount} {memberWord}</span> totalling <span>{formattedMembersTotal}</span></h1>
    <div className="page-header__actions">
        <Link className="_button" to="/create">Add Member</Link>
    </div>
    </div>
    </div>
);
};

const mapStateToProps = (state) => {
    const visibleMembers = selectMembers(state.members, state.filters);

    return {
        memberCount: visibleMembers.length,
        membersTotal: selectMembersTotal(visibleMembers)
    };
};
export default connect (mapStateToProps)(MembersSummary);