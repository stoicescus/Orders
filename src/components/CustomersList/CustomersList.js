import React from 'react';
import './CustomersList.css';
import CustomerItem from './CustomerItem/CustomerItem';

const customersList = (props) => {
    return (
        <ul className="customersList">
            {
                props.customersData.map((customer, index) => {
                    return <CustomerItem 
                        name={customer.name} 
                        since={customer.since} 
                        revenue={customer.revenue} 
                        customerId={customer.id} 
                        key={customer.id} />
                })
            }
        </ul>
    );
};

export default customersList;