//extract a property value from a given object
let getProductInfo = (obj, id, propertyName) => {
    let propertyValue = null;

    obj.forEach((item) => {
        if (item.id === id) {
            propertyValue = item[propertyName];
        }
    });

    return propertyValue;
};

export default {
    getProductInfo
}