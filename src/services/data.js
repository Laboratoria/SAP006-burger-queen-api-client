export const getProducts = (products) => {
    return fetch('https://lab-api-bq.herokuapp.com/products', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': products.name,
            'price': products.price,
            'image': products.image,
        })
    });
};