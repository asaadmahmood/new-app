import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


// const MemberListItem = ({id, name, age, sex, packege, address, createdAt})
 
// export const MemberListItem = ({id, name, age, sex, packege, address, createdAt}).toString(()=>{
export const MemberListItem = ({id, name, age, sex, packege, address, createdAt}) => (
// return Array.toString(()=>{

    <Link className="list-item" to={`/edit/${id}`}>
<div>
    <h3 className="list-item__title">{name}</h3>
    <sppan className="list-item__sub-title">{moment(createdAt).format('MMMM Do YYYY')}</sppan>
    <sppan className="list-item__sub-title">{sex}</sppan> 
    <sppan className="list-item__sub-title">{address}</sppan> 
        <sppan className="list-item__sub-title">{numeral(age)}</sppan>
</div>
<h3 className="list-item__data">{numeral(packege).format('$0,0.00')}</h3>
      </Link>
// })


         
// });

);


// export default MemberListItem;