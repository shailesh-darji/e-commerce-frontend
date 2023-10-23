import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILED, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_HISTORY_FAILED, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS } from "./ActionType"

const initialState = {
    orders:[],
    order:null,
    error:null,
    loading:false
}

export const orderReducer =(state = initialState,action) =>{
    switch(action.type){

        case CREATE_ORDER_REQUEST:
            return {
                ...state,loading:true
            };
        case CREATE_ORDER_SUCCESS:
            return {
              ...state,loading:false,order:action.payload
            } 
        case CREATE_ORDER_FAILURE:
           return {
            ...state,
            loading:false,
            error:action.payload
           }
        case GET_ORDER_BY_ID_REQUEST:
            return {
              ...state,
              loading:true,
              error:null
            }
        case GET_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                loading:false,
                order:action.payload
            } 
            
        case GET_ORDER_BY_ID_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case GET_ORDER_HISTORY_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            } 
        case GET_ORDER_HISTORY_SUCCESS:
            return{
                ...state,
                loading:false,
                orders:action.payload
            } 
        
            case GET_ORDER_HISTORY_FAILED:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
        default :
          return state;        
    }
}