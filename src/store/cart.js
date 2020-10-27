
import superagent from 'superagent';

let initialState = {
  cartProducts: [
  ],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let { type, payload } = action; // destructuring

  //   let cartProducts;  
  let cartProducts;
  switch (type) {
    case 'addToCart':
      cartProducts = state.cartProducts.push(payload);
      cartProducts = [...state.cartProducts];

      return { cartProducts };

    case 'GetCart':
      state.cartProducts = payload;
      cartProducts = [...state.cartProducts];
      return { cartProducts };
    case 'removeFromCart':
      cartProducts = state.cartProducts.filter((product) => {
        return product.name !== payload;
      });
      cartProducts = [...cartProducts];
      // productsTo =[... state.cartProducts.filter(product =>{ return product.category === payload; })];
      console.log(cartProducts);
      return { cartProducts };
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
////////
let api = 'https://lab-38.herokuapp.com/cart'; 
export const getCartData =() => dispatch => {
  // call my data 
  let cartProducts;
  return superagent.get(api)
    .then(data => {
      // dispatch the action getAction
      console.log('Cart',data.body);
      dispatch(getCartAction(data.body));
      return {cartProducts};

    });
};

export const postRemoteData = (data) => async dispatch => {
  console.log('datadatadata',data);
  data._id = null;
  await superagent.post(`${api}`).set('Content-Type', 'application/json').send(data)
    .then((response)=>{
      console.log('responseresponseresponse',response);
    });
  // dispatch action for the update
  dispatch(addToCart(data));
  // console.log(response)
};

export const deleteFromCart =(_id,products,item) =>async dispatch => {
  // call my data 
  console.log('item',item);
  console.log('_id',_id);
  console.log('item',item);
  await superagent.delete(`${api}`).set('Content-Type', 'application/json').send({_id})
.then(async (data) => {
      // dispatch the action getAction
      console.log('afterdelete',data.body);
      // data.body.forEach((ele,i) => {
      //   initialState.cartProducts.push(ele);
      // });
      await dispatch(getCartData(data.body)).then((data1)=>{
        dispatch(putInStock(data.body,products));});
    });
};


export const putInStock = (data,products) => async dispatch => {
  let pepo = products.filter(product=> { return (product.name === data.name);});
  pepo[0].inStock=pepo[0].inStock+1;
  await superagent.patch(`${api}`).set('Content-Type', 'application/json').send(pepo[0])
    .then((response)=>{
      console.log('responseresponseresponse',response);
    });

};

export const getCartAction = payload => {
  return {
    type: 'GetCart',
    payload: payload,
  };
}; 
