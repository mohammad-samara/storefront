let initialState = {
    cartProducts: [
    ],
  };
      
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initialState, action) => {
    let {type, payload} = action; // destructuring
    
    //   let cartProducts;  
    let cartProducts;
    switch(type) {
    case 'addToCart':
      cartProducts = state.cartProducts.push(payload);
      cartProducts = [...state.cartProducts];
      
      return {cartProducts};
        case 'removeFromCart':
          cartProducts = state.cartProducts.filter((product)=>{
            return product.name !== payload;
          });
          cartProducts = [...cartProducts];
          // productsTo =[... state.cartProducts.filter(product =>{ return product.category === payload; })];
          console.log(cartProducts);
          return {cartProducts};
    default:
      return state;
    }
  };
      
  // Actions function
  export const addToCart = (name) => {
    return {
      type: 'addToCart',
      payload: name,
    };
  };
  export const removeFromCart = (name) => {
    return {
      type: 'removeFromCart',
      payload: name,
    };
  };
  
      