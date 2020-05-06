import React, { memo } from 'react';
import { connect } from 'react-redux';
import MemberForm from './MemberForm';
import { startEditMember } from '../actions/members';
import { startRemoveMember } from '../actions/members';

export class EditMemberPage extends React.Component {
    onSubmit = (member) => {
        this.props.startEditMember(this.props.member.id, member);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveMember({ id: this.props.member.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Member</h1>
                    </div>
                </div>
                <div className="content-container">
                    <MemberForm
                        member={this.props.member}
                        onSubmit={this.onSubmit}
                    />
                    <button className="_button button--secondary" onClick={this.onRemove}>Remove Member</button>
                </div>
            </div>

        );

    }
};

const mapStateToProps = (state, props) => ({
    member: state.members.find((member) => member.id === props.match.params.id)
});

const mapDispatchToProps = (dispath, props) => ({
    startEditMember: (id, member) => dispatch(startEditMember(id, member)),
    startRemoveMember: (data) => dispatch(startRemoveMember(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMemberPage);

