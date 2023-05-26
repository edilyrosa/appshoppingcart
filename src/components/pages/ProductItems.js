import sneakers from '../../assets/sneakers.mp4'
import makeup from '../../assets/makeup.mp4'
import clothes from '../../assets/clothes.mp4'

function ProductItems({data, addToCart}) {
    const {id, name, category, description,  price, img} =  data;
    return ( 
            <div style={{border:'thin solid gray', padding:'1rem' }}>
                <h4>{name}</h4>
                <h4>{category}</h4>
                <h4>{description}</h4>
                <h5>$ {price}</h5>
                {category === 'sneakers'  && <video src={sneakers} alt={img.alt} width="200" height="200" autoPlay loop muted/>}
                {category === 'makeup' && <video src={makeup} alt={img.alt} width="200" height="200" autoPlay loop muted/>}
                {category === 'clothes' && <video src={clothes} alt={img.alt} width="200" height="200" autoPlay loop muted/>}
                <button onClick={() => addToCart(id)}> add <i className="fa-sharp fa-solid fa-cart-plus fa-beat fa-xl" style={{color:'#ee2bb0'}}></i></button>
            </div>
     );
}

export default ProductItems;