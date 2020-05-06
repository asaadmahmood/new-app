export default (members) => {

    return members
    .map((members) => members.packege)
    .reduce((sum, value) => sum + value, 0);
};