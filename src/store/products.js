import superagent from 'superagent';
let initialState = {
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 ,description:'best fabric', url: 'https://cdn.mos.cms.futurecdn.net/78kzT5oZeDve55LifhMHZ3.jpg' },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15,description:'best fabric', url: 'https://thumbs.dreamstime.com/b/old-radio-20059485.jpg' },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25,description:'best fabric', url: 'https://images.nintendolife.com/aed042e5d372e/polo-pokemon-shirts.original.jpg' },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10,description:'best fabric', url: 'https://cdn.shopify.com/s/files/1/0052/7237/1293/products/1024x1024-Socks-White-LB1_1024x1024.jpg?v=1561393817' },
    { name: 'Apples', category: 'food', price: .99, inStock: 500,description:'best fabric', url: 'https://cdn.vox-cdn.com/thumbor/1lkbiwsmSbovu-HAyjWeZTcGQo8=/0x0:1920x1280/1200x800/filters:focal(807x487:1113x793)/cdn.vox-cdn.com/uploads/chorus_image/image/57340051/apples_2811968_1920.0.jpg' },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12,description:'best fabric', url: 'https://www.thesilverlife.com/wp-content/uploads/2019/05/bowl-full-of-eggs.jpg' },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90,description:'best fabric', url: 'https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/master/pass/milk-bread.jpg' },
  ],
  productsTo: [

  ],
  };
  

  // reducer : switch case
  export default (state = initialState, action) => {
    let {type, payload,payload2} = action; // destructuring
    console.log(payload,payload2)
    // let type = action.type
    // let payload = action.payload
    let products;   
    let productsTo;
    let pepo;
    switch(type) {
    case 'activate':
    products = [...state.products];
    productsTo =[...state.products.filter(product =>{ return product.category === payload; })];
    console.log(productsTo,'productsproductsproductsproducts');
    //let productsTo= products;
    return {products,productsTo};
    case 'count':
    products = state.products.map(product=> {
      if (product.name === payload) {
        return {_id:product._id, name: product.name,category: product.category,price: product.price, inStock: product.inStock-1,description:product.description, url: product.url};
        // putRemoteDat(product);
      }
      return product;
    });
    products = [...products];
    productsTo =[...products.filter(product =>{ return product.category === payload2; })];
    console.log(productsTo,'productsproductsproductsproducts');
    return {products,productsTo};
    case 'GET':
    console.log(payload,'payloadpayloadpayloadpayload');
    payload.forEach((ele,i) => {
      console.log(ele,'payloadpayloadpayloadpayload');
      state.products.push(ele);
    });
    products = [...state.products];
    productsTo =[...products.filter(product =>{ return product.category === payload2; })];
    return {products,productsTo};  
  // case 'InStock':
  //   return {products,productsTo}; 
    default:
      return state;
    }
  };
  let api = 'https://lab-38.herokuapp.com/product'; 
export const getRemoteData =() => dispatch => {
  // call my data 
  return superagent.get(api)
    .then(data => {
      dispatch(getAction(data.body));
    });
};

export const putRemoteData = (data,product) => async dispatch => {
  console.log(data,data);
  // dispatch(decreseInStock(data))
  product.inStock=product.inStock-1;
  console.log('useData',product);
  await superagent.patch(`${api}`).set('Content-Type', 'application/json').send(product)
    .then((response)=>{
      console.log('responseresponseresponse',response);
    });
  // dispatch action for the update
  // console.log(response)
};


  // Actions function
  export const showCategory = (name) => {
    return {
      type: 'activate',
      payload: name,
    };
  };
  // export const getProduct = 

  export const changeCount = (name,activeCategory) => {
    return {
      type: 'count',
      payload: name,
      payload2: activeCategory,
    };
  };




  export const getAction = payload => {
    return {
      type: 'GET',
      payload: payload,
    };
  };  
  
  // export const decreseInStock = payload => {
  //   return {
  //     type: 'InStock',
  //     payload: payload,
  //   };
  // };  
  
  // {_id: '5f0f86a1aa9b4900170a6e1c', name: 'botato', category: 'food', price: 141, inStock: 152,url: 'https://thumbs.dreamstime.com/b/old-radio-20059485.jpg',description: 'King-Of-Noobs'} 