import * as types from "./actionTypes"



const initialState = {
  isAuth: false,
  token: "",
  data: {},
  isLoading: false,
  isError: false,

};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        data: payload.user,
        isError: false

      };
    case types.LOGIN_FAILURE:
      return {
        isAuth: false,
        isLoading: false,
        isError: true,
        token: "",
        data: {}
      }
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false
      }
    case types.GET_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: {},
        isError: true
      }
    case types.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false
      }
    case types.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: {},
        isError: true
      }
    case types.UPDATE_P_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.UPDATE_P_SUCCESS:
      return {
        ...state,
        isLoading: false,

        isError: false
      }
    case types.UPDATE_P_FAILURE:
      return {
        ...state,
        isLoading: false,

        isError: true
      }

      case types.LOGOUT_SUCCESS:
        return {
          ...state,
          isAuth: false,
        isLoading: false,
        isError: false,
        token: "",
        data: {}
        }
    default: return state;
  }
  

};

export { reducer };
