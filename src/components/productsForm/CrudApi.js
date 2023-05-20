import { useDispatch, useSelector} from 'react-redux';
import React, { useState, useEffect} from 'react';
import { HelpHttp } from '../../helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from '../Loader';
import Message from '../Message';
import { noAction, readAction, createAction, updateAction, deleteAction } from '../../actions/crudActions';


function CrudApi() {
  const state = useSelector(state => state)  
  const {db} = state.crud 
  const dispatch = useDispatch()

  const [dataToEdict, setDataToEdict] = useState(null); //FLAG: null to create and true to update
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const URL = process.env.REACT_APP_API_PRODUCTS_URL

    let {get, post, put, del} = HelpHttp()
    
    useEffect(() => {
      setLoading(true)
      get(URL) //!GET ALL
      .then(resJson => {
        if(!resJson.err){
          dispatch(readAction(resJson))
        }else{
          setError(resJson)
          dispatch(noAction())
        } 
        setLoading(false)
 
        })
    }, []);

    

    const createData = (data) =>{
      //data.id = Date.now()
      let options = {
        body:data
      }
      post(URL, options)
      .then(resJson =>{
        if(!resJson.err) {
          //!Deberia actualizar la VAR DE EDO con el ID real q la BBDD me da, esperar esa respuesta del servidor.
          dispatch(createAction(resJson))
        }
        else error(resJson)
      }) 
    }
    
    
    const updaData = (data) =>{
      let endpoint = `${URL}/${data.id}`
      let options = {
        body:data,
      }
      
      put(endpoint, options)
      .then(resJson =>{
        if(!resJson.err){
          //!Es con lo qe viene del <Form que debo actualizar no con la respuesta exitosa del servidor. Ya tengo el ID
          //let newData = db.map(e => e.id === data.id ? data : e) 
          dispatch(updateAction(resJson))
        }else setError(resJson)
      })
    }

    const deleteData = (id) =>{
      let endpoint = `${URL}/${id}`
        del(endpoint).then(resJson =>{
          if(!resJson.err){
            //let newData = db.filter((e) => e.id !== id) 
            dispatch(deleteAction(id))
          }else setError(resJson)
        })
    }

    return ( 
      <div className='grid-1-2'> 
        <section>
            <br/>
            <h2>CRUD PRODUCTS</h2>
            <article className="box grid-responsive">
              <CrudForm 
              createData={createData}
              updaData={updaData}
              dataToEdict={dataToEdict} 
              setDataToEdict={setDataToEdict}/>
             </article>
        </section>
        <section>
            {loading && <Loader/>}
            {error && <Message msj={ `Error ${error.status}: ${error.statusText}`}  bgColor="#dc3545" />}
            {db && <CrudTable data={db} setDataToEdict={setDataToEdict} deleteData={deleteData} />}
        </section>
           
      </div>
      
     );
}

export default CrudApi;