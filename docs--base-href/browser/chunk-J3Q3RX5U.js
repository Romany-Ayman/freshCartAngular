import{a as I,b as A,c as F,d as k}from"./chunk-JC44I5KY.js";import{l as O}from"./chunk-4GGWONN3.js";import{f as E}from"./chunk-JNFFE4DN.js";import{a as w}from"./chunk-H6J4EKJ7.js";import"./chunk-D5JVNGYT.js";import{Cb as s,Db as m,Jb as P,Ka as u,Kb as y,Oa as r,Pb as T,Rb as b,_ as c,ba as S,cb as v,eb as p,ib as C,jb as f,kb as g,lb as _,mb as t,nb as a,ob as d,tb as h,tc as D,ub as x}from"./chunk-FB4JHNKM.js";var B=()=>[1,2,3,4,5];function M(i,n){i&1&&(t(0,"span"),d(1,"i",18),a())}function j(i,n){i&1&&d(0,"i",12)}function R(i,n){if(i&1&&(t(0,"div"),d(1,"img",19),a()),i&2){let z=x().$implicit;r(),p("src",z,u)}}function U(i,n){i&1&&v(0,R,2,1,"ng-template",17)}var X=(()=>{let n=class n{constructor(){this._ActivatedRoute=c(E),this._ProductsService=c(I),this._CartService=c(w),this._ToastrService=c(O),this.customOptionspru={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,autoplay:!0,autoplayTimeout:1500,autoplayHoverPause:!0,dots:!1,navSpeed:700,navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:4},940:{items:6}},nav:!1},this.detailsProducat={}}addCart(l){this._CartService.addProductTOcart(l).subscribe({next:o=>{console.log(o),this._ToastrService.success(o.message,"Fresh Cart"),this._CartService.CartNumber.next(o.numOfCartItems)}})}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:l=>{console.log(l.get("id"));let o=l.get("id");this._ProductsService.getSpecificProducts(o).subscribe({next:e=>{console.log(e.data),this.detailsProducat=e.data},error:e=>{console.log(e)}})},error:l=>{console.log(l)}})}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=S({type:n,selectors:[["app-details"]],standalone:!0,features:[P],decls:31,vars:12,consts:[[1,"container","p-3","my-2"],[1,"text-capitalize","text-main"],[1,"row","align-items-center"],[1,"col-md-3"],[1,"img"],[1,"w-100",3,"src","alt"],[1,"col-md-9"],[1,"p-4"],[1,"h6","text-capitalize"],[1,"text-muted"],[1,"d-flex","justify-content-between","align-items-center"],[1,"justify-content-between","align-items-center","small"],[1,"fa-regular","fa-star-half-stroke","rating-color"],[1,"btn-main","w-100","rounded-4",3,"click"],[1,"my-2","w-75","mx-auto"],[1,"text-main"],[3,"options"],["carouselSlide",""],[1,"fa-solid","fa-star","rating-color"],["height","250px",1,"w-100",3,"src","alt"]],template:function(o,e){o&1&&(t(0,"section",0)(1,"h1",1),s(2,"details"),a(),t(3,"div",2)(4,"div",3)(5,"div",4),d(6,"img",5),a()(),t(7,"div",6)(8,"div",7)(9,"h3",8),s(10),a(),t(11,"p",9),s(12),a(),t(13,"div",10)(14,"span"),s(15),T(16,"currency"),a(),t(17,"div",11),g(18,M,2,0,"span",null,f),v(20,j,1,0,"i",12),t(21,"span",9),s(22),a()()()(),t(23,"button",13),h("click",function(){return e.addCart(e.detailsProducat._id)}),s(24," Add cart "),a(),t(25,"div",14)(26,"h2",15),s(27,"popular"),a(),t(28,"owl-carousel-o",16),g(29,U,1,0,null,17,f),a()()()()()),o&2&&(r(6),p("src",e.detailsProducat.imageCover,u)("alt",e.detailsProducat.title),r(4),m(e.detailsProducat.title),r(2),m(e.detailsProducat.description),r(3),m(b(16,8,e.detailsProducat.price,"GBP")),r(3),_(y(11,B).slice(0,e.detailsProducat.ratingsAverage)),r(2),C(20,e.detailsProducat.ratingsAverage%1!==0?20:-1),r(2),m(e.detailsProducat.ratingsAverage),r(6),p("options",e.customOptionspru),r(),_(e.detailsProducat.images))},dependencies:[k,F,A,D]});let i=n;return i})();export{X as DetailsComponent};
