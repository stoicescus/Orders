import React, { Component } from 'react';
import Api from '../../api';
import EditOrder from '../../components/EditOrder/EditOrder';

class Order extends Component {

    state = {
        orderData: [],
        productsData: null
    };

    componentDidMount() {
        const orderUrl = Api.apiUrls.ordersUrl + '/' + this.props.match.params.id;
        let productsUrl = '';
        let productIds = '';

        //make ajax call for getting the orders for a single customer
        Api.getData(orderUrl).then((data) => {
            this.setState({
                orderData: data
            });
            
            if(data.items) {
                data.items.forEach((order) => {
                    productIds += order['product-id'] + ',';
                });
            }

            //removes the last coma
            productIds = productIds.replace(/,\s*$/, "");

            //compose products rest api url for getting the relevant product info only for products in the order
            productsUrl = Api.apiUrls.productsUrl + '/' + productIds;

            //make ajax call for getting additional info about products in the order
            Api.getData(productsUrl).then((products) => {
                this.setState({
                    productsData: products
                });
            });
        });
    }

    render() {
        //console.log(JSON.stringify(this.state.orderData));
        //console.log(JSON.stringify(this.state.productsData));
        if(this.state.orderData.length !== 0 && this.state.productsData !== null) {
            return (
                <EditOrder orderInfo={this.state.orderData} productsInfo={this.state.productsData} />
            );
        }

        return null;
    }
}

export default Order;