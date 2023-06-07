import sneakers from '../../assets/sneakers.mp4'
import makeup from '../../assets/makeup.mp4'
import clothes from '../../assets/clothes.mp4'
import '../cardProduct.css'
function ProductItems({data, addToCart}) {
    const {id, name, category, description,  price, img} =  data;
    return ( 
            // <div className='card' style={{border:'thin solid gray', padding:'1rem' }}>
            //     <h4 className='product-name'>{name}</h4>
            //     <h4 className='product-category'>{category}</h4>
            //     <p>{description}</p>
            //     <h5 className='product-price'>$ {price}</h5>
            //     {category === 'sneakers'  && <video src={sneakers} alt={img.alt} width="100%" height="auto" autoPlay loop muted/>}
            //     {category === 'makeup' && <video src={makeup} alt={img.alt} width="100%" height="auto" autoPlay loop muted/>}
            //     {category === 'clothes' && <video src={clothes} alt={img.alt} width="100%" height="auto" autoPlay loop muted/>}
            //     <button onClick={() => addToCart(id)}> add <i className="fa-sharp fa-solid fa-cart-plus fa-beat fa-xl" style={{color:'#ee2bb0'}}></i></button>
            // </div>

            <div className='container' style={{border:'thin solid gray', padding:'1rem' }}>
                <div className='wrapper'>
                    <p>{category}</p>
                    {category === 'sneakers'  && <video src={sneakers} alt={img.alt} width="100%" height="auto" className='banner-image' autoPlay loop muted/>}
                    {category === 'makeup' && <video src={makeup} alt={img.alt} width="100%" height="auto" autoPlay loop muted/>}
                    {category === 'clothes' && <video src={clothes} alt={img.alt} width="100%" height="auto" autoPlay loop muted/>}
                    <div>⭐⭐⭐⭐</div>
                    <span>{name}</span>
                    <h3>{description}</h3>
                    <h4 className='price'>$ {price}</h4>
                </div>
                <div className="button-wrapper">
                 <button onClick={() => addToCart(id)}> add <i className="fa-sharp fa-solid fa-cart-plus fa-beat fa-xl" style={{color:'#ee2bb0'}}></i></button>
                </div>
                
               
               
            </div>
     );
}

export default ProductItems;