let initialState = {
    categories: [
      { name: 'electronics', displayName: 'Elecronics' },
      { name: 'food', displayName: 'Food' },
      { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
      { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 , url: 'https://cdn.mos.cms.futurecdn.net/78kzT5oZeDve55LifhMHZ3.jpg' },
      { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, url: 'https://thumbs.dreamstime.com/b/old-radio-20059485.jpg' },
      { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, url: 'https://images.nintendolife.com/aed042e5d372e/polo-pokemon-shirts.original.jpg' },
      { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, url: 'https://img.grouponcdn.com/deal/2ov79y9xCdwxRstJm7PTKoz6p5it/2o-2048x1229/v1/c700x420.jpg' },
      { name: 'Apples', category: 'food', price: .99, inStock: 500, url: 'https://cdn.vox-cdn.com/thumbor/1lkbiwsmSbovu-HAyjWeZTcGQo8=/0x0:1920x1280/1200x800/filters:focal(807x487:1113x793)/cdn.vox-cdn.com/uploads/chorus_image/image/57340051/apples_2811968_1920.0.jpg' },
      { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, url: 'https://www.thesilverlife.com/wp-content/uploads/2019/05/bowl-full-of-eggs.jpg' },
      { name: 'Bread', category: 'food', price: 2.39, inStock: 90, url: 'https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/master/pass/milk-bread.jpg' },
    ],
    productsTo: [
  
    ],
    activeCategory: '',
  };
  
  // reducer : switch case
  export default (state = initialState, action) => {
    let {type, payload} = action; // destructuring
    // let type = action.type
    // let payload = action.payload
      
    switch(type) {
    case 'activate':
      // let products = state.products.map(product=> {
      //   if (product.category === payload) {
      //     return { name: product.name, category: product.category, price: product.price, inStock: product.inStock };
      //   }
      //   return product;
      // });
      let activeCategory = payload;
      let products = [...state.products]
      let productsTo =[... state.products.filter(product =>{ return product.category === payload })];
      console.log(productsTo,'productsproductsproductsproducts');
      //let productsTo= products;
      let  categories = state.categories;  
      return {categories,products,productsTo, activeCategory};
  
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
  
  export const reset = () => {
    return {
      type: 'RESET',
    };
  };