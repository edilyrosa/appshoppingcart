
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HelpHttp } from "../../helpers/helpHttp";
import Loader from "../Loader";
import Message from "../Message";
import { noData, setData } from "../../actions/shoppingActions";
import InputSearch from "../InputSearch";


function CatalogueProducts() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const state = useSelector(state => state) 
    const dispatch = useDispatch()
    let {products} = state.shopping; 
    
    const URL = process.env.REACT_APP_API_PRODUCTS_URL
    let {get} = HelpHttp();
    let options = {}

    const getAllData = () => {
        setLoading(true)
        get(URL, options)//!GET
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


        return ( 
        <div>
            <h2>CATALOGUE OF PRODUCTS</h2>
           <InputSearch/>
            <br/>
            {loading && <Loader/>}
            {error && <Message msj={ `Error ${error.status}: ${error.statusText}`}  bgColor="#dc3545" />}
                   
            <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>description</th>
                    <th>price</th>
                    <th>img</th>
                   
                </tr>
            </thead>


            <tbody>
                {
                products.length > 0 
                ? products.map((e,index) => {
                    return (<tr key={index}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.category}</td>
                            <td>{e.description}</td>
                            <td> $ {e.price}</td>
                            <td> <img src={e.img.src} alt={e.img.alt} /></td>
                        </tr>)
                    })
                
                :<tr> 
                    <td colSpan='5'> No data </td> 
                </tr> 
                }
            </tbody>

        </table>
           
        </div>
     );
}

export default CatalogueProducts;