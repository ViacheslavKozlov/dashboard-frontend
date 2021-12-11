export const authSelector = (state) => state.auth;

export const userSelector = (state) => state.auth.user;
// export const errorSelector = (state) => state.auth.error;
// export const loaderSelector = (state) => state.auth.isLoading;

export const isAuthSelector = (state) => state.auth.token;
