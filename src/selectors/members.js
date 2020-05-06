
import moment from 'moment';
export default (members, { text, sortBy, startDate, endDate }) => {
  return members.filter((member) => {
    const createdAtMoment = moment (member.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
    const textMatch = member.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'packege') {
      return a.packege < b.packege ? 1 : -1;
    }
  });
};
