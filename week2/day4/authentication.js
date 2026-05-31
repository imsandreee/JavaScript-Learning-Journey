

    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

   
// Imagine you are getting the above users collection from a MongoDB database. 
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.


const signUp = function(username, email, password) {
    const randomString = Math.random().toString(36).substring(2, 7);
    const timenow = new Date();

    for (const user of users) {
        if (user.username === username) {
           console.log("the user is already created");

           return;
        } 
    }
            users.push({_id: randomString ,
                username: username, 
                email: email,
                password: password ,
                createdAt: timenow , 
                isLoggedIn: false
            })
            console.log("user has been created")
  }

signUp('imsandreee', 'antang.sandree.lebico@gmail.com','1234')
// b. Create a function called signIn which allows user to sign in to the application
function signIn(username, password){
    for(const user of users) {
        if (username === user.username && password === user.password) {
            user.isLoggedIn = true;
            console.log(`Welcome back! ${user.username}`) ;
            return user;
        } 
    }

            console.log('Wrong User or Password')
}

console.log(signIn('Brook','123111'))

 const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  },

    
]

// The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 
// b. Create a function called averageRating which calculate the average rating of a product
// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function rateProduct (username, product, rate) {

    for (const user of users) {
        if (username === user.username) {
            for (const prd of products) {
                if (product === prd.name) {
                    prd.ratings.push({
                        userId: user._id, 
                        rate: rate})
                    console.log(`Successfull rates a product of ${prd.name} `)
                    return prd;
                }
            }
        }
    }

    

    
}

console.log(rateProduct('Brook','TV', 4));


// b. Create a function called averageRating which calculate the average rating of a product


function  averageRating(prd) {
    let total = 0;

    for (const product of products){
        for(const rates of product.ratings) {
            if (prd == product.name) {
             total += rates.rate / product.ratings.length

            }
        }
    }

    return total;
}

console.log(averageRating('TV'))