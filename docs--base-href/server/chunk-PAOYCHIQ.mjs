import './polyfills.server.mjs';
import{a as r}from"./chunk-RX66ZHJB.mjs";import{Lc as a,R as o,W as n}from"./chunk-7VOAPGUD.mjs";var l=(()=>{let t=class t{constructor(e){this._HttpClient=e}getCategori(){return this._HttpClient.get(`${r.baseUrl}/api/v1/categories`)}getSpecificCategori(e){return this._HttpClient.get(`${r.baseUrl}/api/v1/categories/${e}/subcategories`)}};t.\u0275fac=function(s){return new(s||t)(n(a))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{l as a};
