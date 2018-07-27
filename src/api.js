const mockPort = 3001;

const apiUrls = {
    customersUrl: `http://localhost:${mockPort}/customers`
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