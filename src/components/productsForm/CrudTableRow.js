import ModalDeleteProduct from "./ModalDeleteProduct";
import React, { useState} from 'react';
import sneakers from '../../assets/sneakers.mp4'
import makeup from '../../assets/makeup.mp4'
import clothes from '../../assets/clothes.mp4'
function CrudTableRow({register, setDataToEdict, deleteData}) {
    const {name, category, description, price, img, id} = register;
    const [openModalPortal, setOpenModalPortal] = useState(false);
    const scrollSmootf = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    const handleUpdate = (e) => {
        setDataToEdict(register);
        scrollSmootf()
    }

    const handleDeletePortal = (e) => setOpenModalPortal(true)
    const handleNoDelete = (e) => setOpenModalPortal(false)
    const handleDeleteDef = (e) => {
        deleteData(id);
        setOpenModalPortal(false)
        scrollSmootf()
    }

    return ( 
            <>
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{description}</td>
                <td> $ {price}</td>
                <td> 
                    {category === 'sneakers' && <video src={sneakers} alt={img.alt} width="100" height="70" autoPlay loop muted/>}
                    {category === 'makeup' && <video src={makeup} alt={img.alt} width="100" height="70" autoPlay loop muted/>}
                    {category === 'clothes' && <video src={clothes} alt={img.alt} width="100" height="70" autoPlay loop muted/>}
                </td>
                <td>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleDeletePortal}> Delete </button>
                </td>
            </tr>
            <ModalDeleteProduct openModalPortal={openModalPortal} setOpenModalPortal={setOpenModalPortal}>
                <div style={{border:'thin solid gray', padding:'1rem' }}>
                    <h4>{name}</h4>
                    <h4>{category}</h4>
                    <h4>{description}</h4>
                    <h5>$ {price}</h5>
                    <div >
                        {category === 'sneakers' && <video  src={sneakers} alt={img.alt} width="400" height="400" autoPlay loop muted/>}
                        {category === 'makeup' && <video  src={makeup} alt={img.alt} width="400" height="400" autoPlay loop muted/>}
                        {category === 'clothes' && <video src={clothes} alt={img.alt} width="400" height="400" autoPlay loop muted/>}
                    </div>  
                   
                    <h3>Are you sure you want to delete the product id={id}?</h3>
                    <button onClick={handleDeleteDef}> Delete </button>
                    <button onClick={handleNoDelete}> Back </button>
                  
                </div>
            </ModalDeleteProduct>
            </>
    
        
     );
}

export default CrudTableRow;