import sneakers from '../../assets/sneakers.mp4'
import makeup from '../../assets/makeup.mp4'
import clothes from '../../assets/clothes.mp4'
function CartItems({data, deleteOneFromCart, deleteAllFromCart}) {
    const {name, price, img, quantity, category} = data; 

    return ( 
       

        <article className="box box-cart">
            <div style={{borderBottom:'thin soild gray', padding:'1rem'}}>
                <h4>{name} x {quantity}</h4>
                <h4>$ {price} x {quantity} = {(price*quantity).toFixed(2)} </h4>
                {category === 'sneakers' && <video src={sneakers} alt={img.alt} width="100%" height="auto" autoPlay loop muted/>}
                {category === 'makeup' && <video src={makeup} alt={img.alt} width="100%" height="auto" autoPlay loop muted/>}
                {category === 'clothes' && <video src={clothes} alt={img.alt} width="100%" height="auto" autoPlay loop muted/>}

                <button onClick={deleteOneFromCart}>Delete one </button>              
                <button onClick={deleteAllFromCart}>Delete all</button>
                <hr/>
            </div>
        </article>
        
     );
}
export default CartItems;