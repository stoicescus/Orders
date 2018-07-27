import React, { Component } from 'react';
import Api from '../../api';
import CustomersList from '../../components/CustomersList/CustomersList';

class Customers extends Component {

    state = {
        customersData: []
    };

    componentDidMount() {
        const customersUrl = Api.apiUrls.customersUrl;

        Api.getData(customersUrl).then((data) => {
            this.setState({
                customersData: data
            });
        });
    }

    render() {
        return (
            <CustomersList customersData={this.state.customersData} />
        );
    }
}

export default Customers;
