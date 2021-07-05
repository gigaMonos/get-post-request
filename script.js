const shopingList = [
    {
        name: 'bread',
        amount: 1,
        value: 'bought',
    },
    {
        name: 'orange',
        amount: 5,
        value: 'not bought',
    },
    {
        name: 'cockies',
        amount: 10,
        value: 'not bought',
    },
    {
        name: 'potatoes',
        amount: 15,
        value: 'bought',
    },
    {
        name: 'tomatoes',
        amount: 4,
        value: 'bought',
    }
]

function addProduct(name, amount, value) {
    shopingList.push({ name, amount, value });
}

function buyProduct(name, count) {
    const currentProduct = shopingList.find((product) => product.name === name);

    count ? currentProduct.amount = currentProduct.amount + count : currentProduct.amount = ++currentProduct.amount;
}

buyProduct('tomatoes', 4);
console.log(shopingList);

addProduct('carrot', 5, 'bought');



