import React from 'react';
import './CustomerItem.css';
import { Link } from 'react-router-dom';

const customerItem = (props) => {
    return (
        <li className="customerItem">
            <div className="customerName">
                {props.name}
                <Link to={"/edit/" + props.customerId} >Edit order</Link>
            </div>
            <div className="customerInfo">
                <div>since: {props.since}</div>
                <div>revenue: {props.revenue}</div>
            </div>
        </li>
    );
};

export default customerItem;