// Shorthand property
const userName = 'Bhavik';
const age = 22;

const user = {
    userName,
    age: age,
    country: 'India'
}

console.log(user);


// Object destructing
const product = {
    label: 'ABC001',
    price: 25,
    quantity: 50,
    MRP: 30
}

const { label, quantity: productQuantity } = product
console.log(label);
console.log(productQuantity);


const productDetails = (type, { label }) => {
    console.log(`${type} : ${label}`);
}

productDetails('Order', product)