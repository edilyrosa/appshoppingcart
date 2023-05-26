
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HelpHttp } from "../../helpers/helpHttp";
import Loader from "../Loader";
import Message from "../Message";
import { noData, setData } from "../../actions/shoppingActions";
import InputSearch from "../InputSearch"
import sneakers from '../../assets/sneakers.mp4'
import makeup from '../../assets/makeup.mp4';
import clothes from '../../assets/clothes.mp4'
const initialInput = {
  inputSearch:'',
  inputOption:''
}

function CatalogueProducts() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchValue, setSearchValue] = useState(initialInput);

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

        let textInput = searchValue.inputSearch.toLowerCase();
        let textOption = searchValue.inputOption.toLowerCase();
        let searchedProduct = []; //Products searched by user
        if (textInput.length < 1) searchedProduct = products;//If user hasn't writen in the input search
         else searchedProduct = products.filter((el) =>  (el[textOption].toString()).includes(textInput.toString()))//If user has writen in the input search
        
        return ( 
        <div>
            <h2>CATALOGUE OF PRODUCTS</h2>
           <InputSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
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
                ? searchedProduct.map((e,index) => {
                    return (<tr key={index}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.category}</td>
                            <td>{e.description}</td>
                            <td> $ {e.price}</td>
                            <td> 
                                {e.category === 'sneakers' && <video   src={sneakers} alt={e.category} width="80" height="70" autoPlay loop muted/>}
                                {e.category === 'makeup' && <video   src={makeup} alt={e.category} width="80" height="70" autoPlay loop muted/>}
                                {e.category === 'clothes' && <video src={clothes} alt={e.category} width="80" height="70" autoPlay loop muted/>}

                            </td>
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