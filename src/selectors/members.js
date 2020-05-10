
import moment from 'moment';
export default (members, {  sortBy, startDate, endDate }) => {
  return members.filter((member) => {
    const createdAtMoment = moment (member.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
    const nameMatch = member.name.toLowerCase().includes(name.toLowerCase());

    return startDateMatch && endDateMatch && nameMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'packege') {
      return a.packege < b.packege ? 1 : -1;
    }
  });
};