import types from './Types';

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    token: {},
    post: {}
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.registerUser:
            return {
                ...state,
                user: action.payload,
                loading: true
            };
        case types.registerSuccess:
            return {
                ...state,
                loading: false
            };
        case types.loginUser:
            return {
                ...state,
                user: action.payload,
                loading: true
            };
        case types.loginSuccess:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            };
        case types.logoutRequest:
            return {
                ...state
            };
        case types.logout:
            return {
                ...state,
                user: {},
                isAuthenticated: false,
                token: {},
                post: {}
            };
        case types.requestWithToken:
            return {
                ...state
            };
        case types.requestWithoutToken:
            return {
                ...state
            };
        case types.messageResp:
            return {
                ...state,
                post: action.payload
            };
        case types.getProfile:
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
};