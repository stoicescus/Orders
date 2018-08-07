/* extract a property value from a given object */
const getProductInfo = (obj, id, propertyName) => {
    let propertyValue = null;

    obj.forEach((item) => {
        if (item.id === id) {
            propertyValue = item[propertyName];
        }
    });

    return propertyValue;
};

/* eliminate items from collection2 based on collection 1 */
const filterCollection = (collection1, collection2, id) => {
    collection1.forEach((itemCollection1) => {
        collection2.forEach((itemCollection2, index) => {
            if(itemCollection1[id] === itemCollection2.id) {
                collection2.splice(index, 1);
            }
        });
    });

    return collection2;
};

export default {
    getProductInfo,
    filterCollection
}