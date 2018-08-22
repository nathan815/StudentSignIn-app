import { LOGIN, LOGOUT } from 'auth-types';

const initialState = {
    isAuthenticated: false,
    isLoginPending: false,
    isLogoutPending: false,
    accessToken: null,
    user: {}
};

export const authReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case LOGIN.PENDING: {

        }
    }
};