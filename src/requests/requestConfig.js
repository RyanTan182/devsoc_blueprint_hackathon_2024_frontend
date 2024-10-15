export const REQUEST_URL = "http://localhost:5000/api/v1";
export const LOGIN_API = `${REQUEST_URL}/auth/login`;
export const LOGOUT_API = `${REQUEST_URL}/auth/logout`;

export const CREATE_ACCOUNT_API = `${REQUEST_URL}/accounts/create`;
export const GET_ACCOUNT_API = `${REQUEST_URL}/accounts/info`;

export const CREATE_PRODUCT_API = `${REQUEST_URL}/products/create`;
export const GET_ALL_PRODUCTS_API = `${REQUEST_URL}/products`;
export const GET_PRODUCT_DETAIL_API = `${REQUEST_URL}/products/<ID>`;
export const PURCHASE_PRODUCT_API = `${REQUEST_URL}/products/purchase`;

export const GET_ALL_ORDERS_API = `${REQUEST_URL}/orders`;
export const GET_ORDER_DETAIL_API = `${REQUEST_URL}/orders/<ID>`;