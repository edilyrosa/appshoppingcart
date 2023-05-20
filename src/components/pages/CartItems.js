function CartItems({data, deleteOneFromCart, deleteAllFromCart}) {
    const {name, price, img, quantity} = data; 

    return ( 
            <div style={{borderBottom:'thin soild gray'}}>
                <h4>{name} x {quantity}</h4>
                <h4>$ {price} x {quantity} = {(price*quantity).toFixed(2)} </h4>
                <img src={img.src} alt={img.alt} />
                <button onClick={deleteOneFromCart}>Delete one </button>              
                <button onClick={deleteAllFromCart}>Delete all</button>
                <hr/>
            </div>
     );
}
export default CartItems;