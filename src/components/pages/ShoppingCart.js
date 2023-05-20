import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import CartItems from "./CartItems";
import Loader from "../Loader";
import { HelpHttp } from "../../helpers/helpHttp";
import Message from '../Message'
import { addToCart,  deleteFromCart, noData, setData } from "../../actions/shoppingActions";


function ShoppingCart() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const state = useSelector(state => state) 
    const dispatch = useDispatch()
    let {products, cart} = state.shopping; 
    
    const URL = process.env.REACT_APP_API_PRODUCTS_URL
    let {get} = HelpHttp();

    const getAllData = () => {
        setLoading(true)
        get(URL, {})//!GET
        .then(resJson => {
            if(!resJson.err){
                dispatch(setData(resJson));
            }else{
                setError(resJson)
                dispatch(noData())
                console.log(resJson)
            } 
            setLoading(false)
        })
    }
    
    useEffect(() => { //A la Carga inicial del form & tabla
        getAllData()
    }, []);

    let total =0;
    
    let totalPay = () => {
        cart.forEach(e => {
            total += parseFloat(e.price) * parseInt(e.quantity)
        })
        return total.toFixed(2);;
    }

    let totalToPay = totalPay();

    return ( 
        <div className="grid-1-2">
            <section>
                <br/>
                <h2>Our Products</h2>
                <article className="box grid-responsive">
                    
                    {loading && <Loader/>}
                    {error && <Message msj={ `Error ${error.status}: ${error.statusText}`}  bgColor="#dc3545" />}
                    {products.map(e => <ProductItems key={e.id} data={e} addToCart={() => dispatch(addToCart(e.id))} />)}
                    
                </article>
            </section>
                
            <section>
                <br/>
                <h2>Your ShoppingCart</h2>
                <article className="box">
                   { !(Object.keys(cart).length === 0)  && <button onClick={getAllData}>Clear Cart</button>}
                   { cart.map((e, index) => <CartItems key={index} data={e} deleteOneFromCart={() => dispatch(deleteFromCart(e.id))} deleteAllFromCart={() => dispatch(deleteFromCart(e.id, true))}/>) }
                   { totalToPay > 0 && <><h3>Total to pay: $ {totalToPay}</h3> <button>Pay <i className="fa-solid fa-credit-card fa-beat fa-2xl"  style={{color:'#ee2bb0'}}></i> </button></> }
                   {(Object.keys(cart).length === 0)  && <> <h3>Add Products to the cart</h3> <i className="fa-sharp fa-solid fa-cart-plus fa-beat fa-2xl" style={{color:'#ee2bb0'}}></i> </> }
                   
                </article>
            </section>
        </div>
     );
}

export default ShoppingCart;