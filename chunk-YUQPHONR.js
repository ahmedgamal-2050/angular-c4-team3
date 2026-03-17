import{b as pe}from"./chunk-ZQJTXLGJ.js";import{$ as re,Z as oe,ea as S,ga as ae,ha as se,ia as _}from"./chunk-C6AP3VVZ.js";import{C as ee,D as te,K as ie,L as ne,h as Y,l as Z}from"./chunk-NIMAXMIZ.js";import{b as K}from"./chunk-AZOJJFWR.js";import{a as X}from"./chunk-AX5G55HJ.js";import{f as J}from"./chunk-TLH5ZPHN.js";import{Ca as O,Ea as o,Ec as Q,Gc as $,Hb as V,I as M,J as z,Kb as y,L as A,Lb as m,N as c,Nb as f,Sa as g,Ta as F,U as R,Ub as H,Wa as j,Xa as q,Yb as w,Zb as h,_b as x,a as L,ac as I,ca as B,cb as T,db as l,dc as b,eb as u,fb as G,gc as k,ha as D,hb as U,hc as v,ib as W,jb as p,kb as a,lb as s,mb as d,vb as E,xb as C}from"./chunk-Q3JZCB6R.js";var de=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var ye={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},ce=(()=>{class e extends oe{name="progressspinner";style=de;classes=ye;static \u0275fac=(()=>{let t;return function(r){return(t||(t=D(e)))(r||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var le=new A("PROGRESSSPINNER_INSTANCE"),N=(()=>{class e extends se{componentName="ProgressSpinner";$pcProgressSpinner=c(le,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(_,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=c(ce);static \u0275fac=(()=>{let t;return function(r){return(t||(t=D(e)))(r||e)}})();static \u0275cmp=g({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(i,r){i&2&&(T("aria-label",r.ariaLabel)("role","progressbar")("aria-busy",!0),y(r.cn(r.cx("root"),r.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[H([ce,{provide:le,useExisting:e},{provide:ae,useExisting:e}]),j([_]),q],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(i,r){i&1&&(R(),a(0,"svg",0),d(1,"circle",1),s()),i&2&&(y(r.cx("spin")),V("animation-duration",r.animationDuration),p("pBind",r.ptm("spin")),o(),y(r.cx("circle")),p("pBind",r.ptm("circle")),T("fill",r.fill)("stroke-width",r.strokeWidth))},dependencies:[$,S,_],encapsulation:2,changeDetection:0})}return e})(),me=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=F({type:e});static \u0275inj=z({imports:[N,S,S]})}return e})();var P=class e{loadingSize=v("size-8!");loadingColor=v("stroke-maroon-600! dark:stroke-soft-pink-300!");loadingPt=b(()=>({root:{class:this.loadingSize()},spin:{class:`${this.loadingColor()} m-0!`},circle:{class:"stroke-4!"}}));static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-loading"]],inputs:{loadingSize:[1,"loadingSize"],loadingColor:[1,"loadingColor"]},decls:1,vars:1,consts:[["ariaLabel","loading",3,"pt"]],template:function(t,i){t&1&&d(0,"p-progress-spinner",0),t&2&&p("pt",i.loadingPt())},dependencies:[me,N],encapsulation:2})};var fe=(e,n,t)=>["/",e,n,t];function _e(e,n){e&1&&(a(0,"span",19),m(1),h(2,"transloco"),s()),e&2&&(o(),f(" ",x(2,1,"new")," "))}function xe(e,n){e&1&&(a(0,"span",20),m(1),h(2,"transloco"),s()),e&2&&(o(),f(" ",x(2,1,"hot")," "))}function be(e,n){if(e&1&&l(0,_e,3,3,"span",19)(1,xe,3,3,"span",20),e&2){let t=C(2);u(t.product().sold<100?0:1)}}function ke(e,n){e&1&&(a(0,"span",18),m(1),h(2,"transloco"),s()),e&2&&(o(),f(" ",x(2,1,"out_of_stock")," "))}function Se(e,n){if(e&1&&(a(0,"div",5),l(1,be,2,1),l(2,ke,3,3,"span",18),s()),e&2){let t=C();o(),u(t.product().sold?1:-1),o(),u(t.product().quantity&&t.product().quantity<1?2:-1)}}function Pe(e,n){if(e&1&&d(0,"lucide-icon",21),e&2){let t=n.$implicit,i=C();y(t?"text-yellow-500 fill-yellow-500 dark:text-yellow-600 dark:fill-yellow-600":"text-yellow-500 dark:text-yellow-600"),p("img",i.Star)("size",16)("strokeWidth",1.5)}}function De(e,n){if(e&1&&(a(0,"span",15),m(1),h(2,"currency"),s()),e&2){let t=C();o(),f(" ",I(2,1,t.product().price,"EGP ","code")," ")}}function Te(e,n){e&1&&d(0,"app-loading",17)}function Ee(e,n){if(e&1&&d(0,"lucide-icon",4),e&2){let t=C();p("img",t.ShoppingCart)("size",18)}}var ge=class e{Star=te;ShoppingCart=ee;HeartPlus=Z;Eye=Y;ROUTES=X;_cartService=c(pe);_messageService=c(re);product=v.required();isCartLoading=B(!1);maxQuantity=b(()=>this._cartService.cartItems().find(t=>t.product._id===this.product()._id)?.quantity||0);addToCart=k();wishlist=k();quickView=k();subscription=new L;get ratingArray(){return Array(5).fill(0).map((n,t)=>t<Math.floor(this.product().rateAvg))}onAddToCart(){this.isCartLoading.set(!0);let n=this._cartService.addToCart(this.product()._id,1).subscribe({next:t=>{this._cartService.cartItems.set(t.cart.cartItems),this._cartService.discountPercentage.set(t.cart.discount||0),this.isCartLoading.set(!1)},error:t=>{this._messageService.add({severity:"error",summary:"Error",detail:t.originalError.error.error}),this.isCartLoading.set(!1)}});this.subscription.add(n)}onWishlist(n){n.stopPropagation(),this.wishlist.emit(this.product())}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-product-card"]],inputs:{product:[1,"product"]},outputs:{addToCart:"addToCart",wishlist:"wishlist",quickView:"quickView"},decls:24,vars:26,consts:[[1,"group","relative","rounded-2xl","cursor-pointer","flex","flex-col","gap-4","h-full"],[1,"relative","aspect-square","overflow-hidden","rounded-xl","bg-zinc-50"],[1,"w-full","h-full","object-cover","transition-transform","duration-500",3,"src","alt"],[1,"absolute","top-3","start-3","size-10","rounded-full","bg-white","text-maroon-600","flex","items-center","justify-center","hover:bg-maroon-600","hover:text-white","transition-colors","shadow-md","z-2",3,"click"],[3,"img","size"],[1,"absolute","top-3","end-3","flex","gap-2"],[1,"absolute","inset-0","bg-soft-pink-600/50","opacity-0","group-hover:opacity-100","transition-opacity","duration-300","flex","items-center","justify-center","gap-3"],[1,"size-7.5","rounded-full","bg-white","text-maroon-600","flex","items-center","justify-center","hover:bg-maroon-600","hover:text-white","transition-colors","shadow-md",3,"routerLink"],[1,"flex","flex-col","grow"],[1,"text-maroon-700","dark:text-soft-pink-200","text-sm","font-semibold","truncate","transition-colors",3,"routerLink"],[1,"flex","items-center","gap-1","mt-3"],[3,"img","size","strokeWidth","class"],[1,"mt-auto","pt-3","flex","items-center","justify-between"],[1,"flex","gap-1"],[1,"text-maroon-700","dark:text-soft-pink-200","font-medium","lg:text-base","text-sm"],[1,"text-zinc-400","dark:text-zinc-500","font-medium","lg:text-base","text-sm","line-through"],["type","button",1,"size-10","rounded-full","bg-maroon-600","dark:bg-maroon-500","text-white","flex","items-center","justify-center","hover:bg-maroon-800","transition-colors","shadow-md","disabled:opacity-50","disabled:cursor-not-allowed!",3,"click","disabled"],["loadingColor","stroke-zinc-50! dark:stroke-zinc-800!","loadingSize","size-6!"],[1,"bg-red-600","text-soft-pink-50","text-xs","font-medium","px-2","py-0.5","rounded-full","uppercase"],[1,"bg-zinc-100","text-zinc-700","text-xs","font-medium","px-2","py-0.5","rounded-full","uppercase"],[1,"bg-maroon-50","text-maroon-600","text-xs","font-medium","px-2","py-0.5","rounded-full","uppercase"],[3,"img","size","strokeWidth"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"div",1),d(2,"img",2),a(3,"button",3),E("click",function(Ce){return i.onWishlist(Ce)}),d(4,"lucide-icon",4),s(),l(5,Se,3,2,"div",5),a(6,"div",6)(7,"a",7),d(8,"lucide-icon",4),s()()(),a(9,"div",8)(10,"a",9),m(11),s(),a(12,"div",10),U(13,Pe,1,5,"lucide-icon",11,G),s(),a(15,"div",12)(16,"div",13)(17,"span",14),m(18),h(19,"currency"),s(),l(20,De,3,5,"span",15),s(),a(21,"button",16),E("click",function(){return i.onAddToCart()}),l(22,Te,1,0,"app-loading",17)(23,Ee,1,2,"lucide-icon",4),s()()()()),t&2&&(o(2),p("src",i.product().imgCover,O)("alt",i.product().title),o(2),p("img",i.HeartPlus)("size",18),o(),u(i.product().sold||i.product().quantity?5:-1),o(2),p("routerLink",w(18,fe,i.ROUTES.LANDING.ROOT,i.ROUTES.LANDING.PRODUCT_DETAILS,i.product()._id)),o(),p("img",i.Eye)("size",20),o(2),p("routerLink",w(22,fe,i.ROUTES.LANDING.ROOT,i.ROUTES.LANDING.PRODUCT_DETAILS,i.product()._id)),o(),f(" ",i.product().title," "),o(2),W(i.ratingArray),o(5),f(" ",I(19,14,i.product().priceAfterDiscount||i.product().price,"EGP ","code")," "),o(2),u(i.product().priceAfterDiscount&&i.product().priceAfterDiscount!==i.product().price?20:-1),o(),p("disabled",!i.product().quantity||i.product().quantity<1||i.maxQuantity()===i.product().quantity||i.isCartLoading()),o(),u(i.isCartLoading()?22:23))},dependencies:[ne,ie,J,P,K,Q],encapsulation:2})};export{N as a,me as b,P as c,ge as d};
