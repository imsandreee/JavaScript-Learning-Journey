let products = [
  { id: 1, name: "Rice", price: 50, stock: 10 },
  { id: 2, name: "Egg", price: 10, stock: 30 },
  { id: 3, name: "Milk", price: 60, stock: 20 }
];

let cart = [];
let sales = [];
    let salesid = 0

function getProducts() {

    if (products.length === 0) {
        'No products available'
    }
    return products;
}



function findProduct(id) {
    let findproduct = products.find(p => p.id == id)

    return findproduct
}



function addToCart(productId, quantity) {
    
    let product = products.find(p => p.id == productId)

    if (!product) {
        return 'no product exist'
    }
    

    if (product.stock === 0) {
        return 'no stock available'
    }

    
    let ifAlreadyInCart = cart.find( item => item.productId === productId)

    if (ifAlreadyInCart) {
        ifAlreadyInCart.quantity += quantity
    } else  {
         let newCartItem = {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        }

        cart.push(newCartItem)
    }

    return cart

}





function removeFromCart(productId) {



    cart = cart.filter(item => item.productId !== productId)

    return cart;
}



function getCart() {
    return cart;
}



function getTotal() {
   return cart.reduce((price, item)=> {
        return price + (item.price * item.quantity)
    }, 0)
}





function checkout() {
    


    let newsales = {
        id: salesid,
        items: [...cart],
        total: getTotal(),
        date: new Date()
    }

    sales.push(newsales);
    salesid++;

    cart = []

    return newsales;
}

addToCart(1, 2); // Rice
addToCart(2, 5); // Egg
addToCart(3, 1); // Milk

console.log(getCart());

console.log(getTotal());

checkout();
