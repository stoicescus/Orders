import React, { Component } from 'react';
import './EditOrder.css';
import Api from '../../api';

class editOrder extends Component {

    state = {
        orderData: []
    };

    componentDidMount() {
        const orderUrl = Api.apiUrls.ordersUrl + '/' + this.props.match.params.id;

        Api.getData(orderUrl).then((data) => {
            this.setState({
                orderData: data
            });
        });
    }

    render() {
        console.log(JSON.stringify(this.state.orderData));
        return (
            <div>Edit Order ...</div>
        );
    }
}

export default editOrder;