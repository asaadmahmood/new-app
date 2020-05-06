import React from 'react';
import AddMemberPage from './AddMemberPage';
import MemberList  from './MemberList';
import  MemberListFilters from './MemeberListFilters';
import MembersSummary from './MembersSummary';
const DashboardPage = () => (
  <div>
<MembersSummary />
<MemberListFilters />
<MemberList />
    Dashboard page content
  </div>
);

export default DashboardPage;
