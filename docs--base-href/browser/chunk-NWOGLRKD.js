import{a as O}from"./chunk-CYG3IAAX.js";import{a as A}from"./chunk-G5KA7DMQ.js";import{i as w}from"./chunk-JNFFE4DN.js";import"./chunk-D5JVNGYT.js";import{Cb as i,Db as c,Eb as h,Jb as v,Oa as o,Pb as m,Qb as g,Rb as y,_ as p,ba as u,kb as f,lb as x,mb as t,nb as a,ob as l,sc as S,tc as b}from"./chunk-FB4JHNKM.js";var C=(r,e)=>e.id;function E(r,e){if(r&1&&(t(0,"div",2)(1,"div",5)(2,"h3",6),i(3," Payment was made through"),l(4,"i",7),t(5,"span",8),i(6),a()(),t(7,"p",9),i(8," totalOrderPrice "),t(9,"span",10),i(10),m(11,"currency"),a()(),t(12,"h4",11),i(13," Purchase date: "),t(14,"span",12),i(15),m(16,"date"),a()()(),l(17,"div",13),a()),r&2){let s=e.$implicit;o(6),c(s.paymentMethodType),o(4),c(y(11,3,s.totalOrderPrice,"GBP")),o(5),h(" ",g(16,6,s.paidAt),"")}}var B=(()=>{let e=class e{constructor(){this._AddressService=p(O),this.cartAllorders=[]}ngOnInit(){let d=`${localStorage.getItem("userName")}`;this.idUser=A(d),console.log(this.idUser.id),this.cleanUesrOrders=this._AddressService.getUserOrders(this.idUser.id).subscribe({next:n=>{console.log("allOrders",n),this.cartAllorders=n}})}ngOnDestroy(){this.cleanUesrOrders?.unsubscribe()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-allorders"]],standalone:!0,features:[v],decls:9,vars:0,consts:[[1,"p-3","shadow","my-2","rounded-4","w-75","mx-auto"],[1,"text-center","text-success"],[1,"row"],[1,"text-center"],["routerLink","/home",1,"btn-main","mt-3"],[1,"justify-content-between","d-flex","border-bottom","align-items-center","py-3"],[1,"text-main","p-3","h6"],[1,"fa-solid","fa-arrow-right","fa-beat-fade",2,"color","#b197fc"],[1,"text-primary"],[1,"text-success"],[1,"text-warning"],[1,"small","text-main","p-3"],[1,"text-danger"],[1,"img"]],template:function(n,P){n&1&&(t(0,"section",0)(1,"div")(2,"h2",1),i(3," The payment was completed successfullys "),a()(),f(4,E,18,8,"div",2,C),t(6,"div",3)(7,"button",4),i(8,"Closs And Go Home"),a()()()),n&2&&(o(4),x(P.cartAllorders))},dependencies:[b,w,S]});let r=e;return r})();export{B as AllordersComponent};
