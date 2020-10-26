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
    switch(type) {
    case 'activate':
    // let products = state.products.map(product=> {
    //   if (product.category === payload) {
    //     return { name: product.name, category: product.category, price: product.price, inStock: product.inStock };
    //   }
    //   return product;
    // });
    products = [...state.products];
    productsTo =[...state.products.filter(product =>{ return product.category === payload; })];
    console.log(productsTo,'productsproductsproductsproducts');
    //let productsTo= products;
    return {products,productsTo};
    case 'count':
    products = state.products.map(product=> {
      if (product.name === payload) {
        return { name: product.name,category: product.category,price: product.price, inStock: product.inStock-1,description:product.description, url: product.url};
      }
      return product;
    });
    products = [...products];
    productsTo =[...products.filter(product =>{ return product.category === payload2; })];
    console.log(productsTo,'productsproductsproductsproducts');
    return {products,productsTo};
    default:
      return state;
    }
  };
  
  // Actions function
  export const showCategory = (name) => {
    return {
      type: 'activate',
      payload: name,
    };
  };
  
  export const changeCount = (name,activeCategory) => {
    return {
      type: 'count',
      payload: name,
      payload2: activeCategory,
    };
  };
  
    