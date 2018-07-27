const mockPort = 3001;
const domain = `http://localhost:${mockPort}`

const apiUrls = {
    customersUrl: `${domain}/customers`,
    ordersUrl: `${domain}/order`
};

const getData = (url) => {
    return fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    return json;
                })
                .catch((err) => {
                    console.log(err);
                });
};

export default {
    getData,
    apiUrls
};