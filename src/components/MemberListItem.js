import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const MemberListItem =({id, name, age, sex, packege, createdAt}) => (

    <Link className="list-item" to={`/edit/${id}`}>
<div>
    <h3 className="list-item__title">{name}</h3>
    <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do YYYY')}</span>
    <span className="list-item__sub-title">{sex}</span> 
        <span className="list-item__sub-title">{numeral(age)}</span>
</div>
<h3 className="list-item__data">{numeral(packege).format('$0,0.00')}</h3>
    </Link>
);
export default MemberListItem;