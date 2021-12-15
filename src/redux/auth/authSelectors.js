export const authSelector = state => state.auth;
export const regSuccessSelector = state => state.auth.user;
export const userSelector = state => state.auth.user.userName;
export const isAuthSelector = state => state.auth.token;
export const isLogged = state => state.auth.user.isLoggedIn;
