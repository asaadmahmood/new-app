import React from 'react';
import MemberList from './MemberList';
import MemberListFilters from './MemeberListFilters';
import MembersSummary from './MembersSummary';
const DashboardPage = () => (
  <div>
    <MembersSummary />
    <MemberListFilters />
    <MemberList />
  </div>
);

export default DashboardPage;
