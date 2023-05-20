import { ADD_TO_CART, REMOVE_ONE_FROM_CART, REMOVE_ALL_FROM_CART, SET_DATA, POST_DATA, NOT_DATA} from "../types";

export const initialState = {
    products:[],
    cart:[],
} 
export function shoppingReducer({products, cart} = initialState, {type, payload}){

    switch (type) {
        case ADD_TO_CART:{
            let newItem = products.find(e => e.id === payload); 
            
            let itemIsRepeated = cart.find(e => e.id === newItem.id) 
        
            return itemIsRepeated ? {products, cart: cart.map(e => e.id === newItem.id ? {...e, quantity:e.quantity+1} : e )} 
                                  : {products, cart:[...cart, {...newItem, quantity:1}]} 
        }
        
        case REMOVE_ONE_FROM_CART: {
            let newArray = cart.map(e => e.id === payload ? {...e, quantity:e.quantity-1} : e) 
            let filterCart = newArray.filter(e => e.quantity >0 )
            return {products, cart:filterCart} 
        }

        case REMOVE_ALL_FROM_CART: {
            let newArray = cart.filter(e => e.id !== payload)
            return {products, cart:newArray}
        }

        //case CLEAR_CART : return { products:payload, cart:[]};
        
        case SET_DATA: return { products:payload, cart:[]}
    
        case POST_DATA: return {...{products, cart}, products:[...products, payload]};
        
        case NOT_DATA: return {products:payload, cart:[]};

        default: return {products, cart};
    }
}