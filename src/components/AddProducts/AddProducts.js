import React from 'react';
import './AddProducts.css';
import Product from './Product/Product';

const addProducts = (props) => {
    return (
        <div className="add-products-modal-overlay">
            <div className="add-products-modal">
                <div className="close-btn" onClick={props.toggleProductsModalAction}>
                    <i className="fa fa-times-circle"></i>
                </div>
                {
                    //filter all products to eliminate products with ids already in order
                    //we do this to not add duplicate products in order when adding new products and to eliminate duplicate key's in order state
                    props.orderInfo.items.forEach((orderProduct) => {
                        props.allproductsData.forEach((product, index) => {
                            if(orderProduct['product-id'] === product.id) {
                                props.allproductsData.splice(index, 1);
                            }
                        });
                    })
                }
                {
                    props.allproductsData.map((product) =>{
                        return (
                            <Product key={product.id} productData={product} addProductAction={props.addProductAction} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default addProducts;