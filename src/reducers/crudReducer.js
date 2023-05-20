import { CREATE_DATA, DELETE_DATA, NO_DATA, READ_ALL_DATA, UPDATE_DATA } from "../types";


export const inicialSate = {
    db:[]
}
export function crudReducer(state = inicialSate, {type, payload}){ //son funciones reductoras, aca no podemos hacer programacion async ni llamar useEffect()
    
    switch (type) {
        case READ_ALL_DATA: return { ...state, db:payload.map(e => e) };
        
        case CREATE_DATA: return { ...state, db:[...state.db, payload] }
    
        case UPDATE_DATA: {
            let newData = state.db.map(e => e.id === payload.id ? payload : e); 
            return {...state, db:newData}
        }
        
        case DELETE_DATA: {            //let newData = db.filter((e) => e.id !== id) 
            let newData = state.db.filter((e) => e.id !== payload);
            return {...state, db:newData}
        }
        
        case NO_DATA: return inicialSate;
        
        //case READ_ONE_DATA:{}
        
        default:return state;
    }

}