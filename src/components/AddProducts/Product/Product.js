import React from 'react';
import './Product.css';
import Button from '../../Button/Button';

const product = (props) => {
    return (
        <div className="product-row">
            <div className="add-product-photo">
                <i className="fa fa-product-hunt"></i>
            </div>
            <div className="add-product-info">
                <div className="add-product-id">{props.productData.id}</div>
                <div className="add-product-description">{props.productData.description}</div>
            </div>
            <div className="add-product-price">Price: {props.productData.price}</div>
            <Button label="Add Product" handleClickAction={props.addProductAction.bind(this, props.productData)} />
        </div>
    );
};

export default product;
