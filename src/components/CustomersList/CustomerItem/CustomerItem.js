import React from 'react';
import './CustomerItem.css';
import Button from '../../Button/Button';

const customerItem = (props) => {

    let showOrder = () => {
        console.log('order is shown ...');
    }

    return (
        <li className="customerItem">
            <div className="customerName">
                {props.name}
                <Button label="Show Order" handleClick={showOrder.bind(this)} />
            </div>
            <div className="customerInfo">
                <div>since: {props.since}</div>
                <div>revenue: {props.revenue}</div>
            </div>
        </li>
    );
};

export default customerItem;