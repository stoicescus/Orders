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
                            <div className="product-photo">
                                <i className="fa fa-product-hunt"></i>
                            </div>
                            <div className="product-info">
                                <div className="product-id">{item['product-id']}</div>
                                <div className="product-description">{Utils.getProductInfo(props.productsInfo, item['product-id'], 'description')}</div>
                            </div>
                            <div className="product-price">Price: {item['unit-price']}</div>
                            <div className="product-quantity">
                                Quantity: <input    type="text" 
                                                    maxLength="4" 
                                                    size="1" 
                                                    defaultValue={item.quantity} 
                                                    placeholder="Enter quantity ..." 
                                                    onChange={(e) => props.changeQuantityAction(item['product-id'], e.target.value, item['unit-price'])} />
                            </div>
                            <div className="product-total">Total: <b>{item.total}</b></div>
                            <div className="remove-product" onClick={() => props.deleteProductAction(item['product-id'])}>
                                <i className="fa fa-trash"></i>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default editOrder;