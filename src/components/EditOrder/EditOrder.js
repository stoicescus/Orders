import React from 'react';
import './EditOrder.css';
import Utils from '../../utils/utils';

const editOrder = (props) => {
    return (
        <div className="orderContainer">
            {
                props.orderInfo.items.map((item) =>{
                    return (
                        <div className="product" key={item['product-id']}>
                            <div className="product-id">Product id: {item['product-id']}</div>
                            <div className="product-description">Description: {Utils.getProductInfo(props.productsInfo, item['product-id'], 'description')}</div>
                            <div className="product-price">Unit price: {item['unit-price']}</div>
                            <div className="product-quantity">Quantity: {item.quantity}</div>
                            <div className="product-total">Total: {item.total}</div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default editOrder;