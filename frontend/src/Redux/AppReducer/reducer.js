

import * as types from "./actionType"


const initialState = {
   data:[],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
   case types.GET_POST_REQUEST:
    return {
    ...state,
    isLoading:true
   }
   case types.GET_POST_SUCCESS:
    return {
      ...state,
      isLoading:false,
      data:payload,
      isError:false
    }
    case types.GET_POST_FAILURE:
      return {
        isLoading:false,
        data:[],
        isError:true
      }
   
    case types.ADD_PROFILEPIC_REQUEST:
        return {
        ...state,
        isLoading:true
       }
       case types.ADD_PROFILEPIC_SUCCESS:
        return {
          ...state,
          isLoading:false,
          data:[],
          isError:false
        }
        case types.ADD_PROFILEPIC_FAILURE:
          return {
            isLoading:false,
            data:[],
            isError:true
          }
        case types.PATCH_POST_REQUEST:
          return {
            ...state,
            isLoading:true
           }
           case types.PATCH_POST_SUCCESS:
            return {
              ...state,
              isLoading:false,
             
              isError:false
            }
            case types.PATCH_POST_FAILURE:
              return {
                isLoading:false,
               
                isError:true
              }




    default: return state;
  }

};


export { reducer }