import React from 'react';
import './EditOrder.css';
import Utils from '../../utils/utils';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import AddProducts from '../AddProducts/AddProducts';

const editOrder = (props) => {

    const calculateTotal = () => {
        let orderTotal = 0;

        props.orderInfo.items.forEach((product) => {
            orderTotal += parseFloat(product.total);
        });

        if (isNaN(orderTotal)) {
            return 0;
        }

        return orderTotal.toFixed(2);
    };

    const placeOrder = () => {
        console.log('Order was placed ...');
    };

    const isProductPresent = () => {
        if(props.orderInfo.items.length !== 0){
            return true;
        }
        return false;
    }

    const Total = (props) => {
        let show = props.show;

        if(show){
            return <div>Total: <b>{calculateTotal()}</b></div>;
        }
        return null;
    };

    const PlaceOrder = (props) => {
        let show = props.show;
        
        if(show){
            return <Button label="Place Order" handleClickAction={placeOrder}></Button>;
        }
        return null;
    };

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

            <div className="total-order">
                <Total show={isProductPresent()} />
                <div className="bottom-order-wrapper">
                    <Link to={"/"} >Back to customers</Link>
                    <div>
                        <Button label="Add Products" handleClickAction={() => props.toggleProductsModalAction()} />
                        <PlaceOrder show={isProductPresent()} />
                    </div>
                </div>
            </div>

            {
                props.showAddProductsModal ? <AddProducts 
                                                allproductsData={props.allProductsInfo} 
                                                toggleProductsModalAction={props.toggleProductsModalAction} 
                                                addProductAction={props.addProductAction}
                                                orderInfo={props.orderInfo} /> : null
            }
        </div>
    );
};

export default editOrder;