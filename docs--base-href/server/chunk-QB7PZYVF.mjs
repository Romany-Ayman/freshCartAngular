import './polyfills.server.mjs';
import{a as o}from"./chunk-RX66ZHJB.mjs";import{Lc as c,R as n,W as s}from"./chunk-7VOAPGUD.mjs";var u=(()=>{let t=class t{constructor(r){this._HttpClient=r}checkOut(r,e){return this._HttpClient.post(`${o.baseUrl}/api/v1/orders/checkout-session/${r}?url=${window.location.origin}`,{shippingAddress:e})}getUserOrders(r){return this._HttpClient.get(`${o.baseUrl}/api/v1/orders/user/${r}`)}};t.\u0275fac=function(e){return new(e||t)(s(c))},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{u as a};
