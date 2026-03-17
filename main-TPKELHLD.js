import{a as Ut,b as Qt}from"./chunk-HHPDQRZG.js";import{a as D}from"./chunk-V3AFAZLI.js";import{b as qt,c as Yt,e as Q}from"./chunk-YCE3EDRJ.js";import{a as S,b as zt}from"./chunk-MW5KUNWW.js";import{$ as U,V as it,X as x,Z as $t,a as Ht,da as jt,ea as P,ga as Gt,ha as st,ia as L}from"./chunk-C6AP3VVZ.js";import{a as Rt,d as Zt}from"./chunk-AZOJJFWR.js";import{a as A}from"./chunk-AX5G55HJ.js";import{a as Dt,d as Pt,e as Lt,h as Nt}from"./chunk-TLH5ZPHN.js";import{$a as Ct,Ab as vt,Ac as Ot,Cb as H,Cc as St,Db as $,Ea as r,Gc as nt,I as R,J as ct,Jb as yt,Kb as m,L as pt,Lb as et,Mb as Tt,N as d,Na as gt,Nb as xt,Oc as Bt,Pc as Ft,Qc as Vt,S as h,Sa as u,T as C,Ta as ft,U as p,Ub as F,Wa as ht,Wb as It,Xa as _,Xb as wt,Ya as B,Z as K,_ as dt,ba as mt,ca as I,cb as l,da as ut,db as M,dc as Et,eb as k,gc as ot,ha as T,hc as j,i as rt,jb as s,jc as At,kb as w,lb as E,mb as g,mc as G,nb as b,nc as V,ob as v,pb as y,qb as _t,rb as bt,sb as tt,t as lt,tb as Z,ub as O,vb as z,xb as a,yc as Mt,zc as kt}from"./chunk-Q3JZCB6R.js";import{a as J}from"./chunk-7CGTOI24.js";var Wt=[{path:"",redirectTo:A.AUTH.ROOT,pathMatch:"full"},{path:A.AUTH.ROOT,loadComponent:()=>import("./chunk-NLCRGRDF.js").then(e=>e.AuthWrapperComponent),loadChildren:()=>import("./chunk-SDH57HWJ.js").then(e=>e.authRoutes)},{path:A.LANDING.ROOT,loadComponent:()=>import("./chunk-MVHRR34U.js").then(e=>e.LandingWrapperComponent),loadChildren:()=>import("./chunk-SQDSHY66.js").then(e=>e.landingRoutes)}];var q=class e{http=d(Bt);projectName=I("angular-c4-team3");getTranslation(i){let t=`/assets/i18n/${i}.json`,n=window.location.href.indexOf(this.projectName())>-1?`/${this.projectName()}/${t}`:t;return this.http.get(n)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})};var Xt=(e,i)=>{let t=localStorage.getItem(S.token)??"";if(t){let n=e.clone({setHeaders:{Authorization:`Bearer ${t}`,token:t}});return i(n)}return i(e)};var Jt=(e,i)=>{let t=d(Lt);return i(e).pipe(lt(n=>{let o="An unexpected error occurred";if(n.error instanceof ErrorEvent)o=`Client Error: ${n.error.message}`,console.error("Client-side error:",n.error.message);else switch(n.status){case 400:o=n.error?.message||"Bad Request",console.error("Bad Request (400):",o);break;case 401:o="Unauthorized. Please log in again.",console.error("Unauthorized (401):",o),localStorage.removeItem(S.token),t.navigate([`/${A.AUTH.ROOT}/${A.AUTH.LOGIN}`]);break;case 403:o="Forbidden. You do not have permission to access this resource.",console.error("Forbidden (403):",o);break;case 404:o=n.error?.message||"Resource not found",console.error("Not Found (404):",o);break;case 500:o="Internal Server Error. Please try again later.",console.error("Internal Server Error (500):",n.error);break;case 503:o="Service Unavailable. Please try again later.",console.error("Service Unavailable (503):",n.error);break;default:o=n.error?.message||`Error: ${n.status} - ${n.statusText}`,console.error(`HTTP Error (${n.status}):`,n.error);break}return rt(()=>({status:n.status,message:o,originalError:n,apiErrorMessage:n.error?.message??""}))}))};function ae(e){return function(){let i=localStorage.getItem(S.language)??zt;return e.setActiveLang(i),document.documentElement.dir=i==="ar"?"rtl":"ltr",e.load(i)}}var Kt={providers:[mt(),Nt(Wt),Ft(Vt([Xt,Jt])),Zt({config:{availableLangs:["en","ar"],defaultLang:"en",fallbackLang:"en",reRenderOnLangChange:!0,prodMode:!At()},loader:q}),Ct(()=>ae(d(Rt))())]};var re=["data-p-icon","exclamation-triangle"],te=(()=>{class e extends D{pathId;onInit(){this.pathId="url(#"+x()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=T(e)))(o||e)}})();static \u0275cmp=u({type:e,selectors:[["","data-p-icon","exclamation-triangle"]],features:[_],attrs:re,decls:7,vars:2,consts:[["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(p(),b(0,"g"),y(1,"path",0)(2,"path",1)(3,"path",2),v(),b(4,"defs")(5,"clipPath",3),y(6,"rect",4),v()()),n&2&&(l("clip-path",o.pathId),r(5),O("id",o.pathId))},encapsulation:2})}return e})();var le=["data-p-icon","info-circle"],ee=(()=>{class e extends D{pathId;onInit(){this.pathId="url(#"+x()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=T(e)))(o||e)}})();static \u0275cmp=u({type:e,selectors:[["","data-p-icon","info-circle"]],features:[_],attrs:le,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(p(),b(0,"g"),y(1,"path",0),v(),b(2,"defs")(3,"clipPath",1),y(4,"rect",2),v()()),n&2&&(l("clip-path",o.pathId),r(3),O("id",o.pathId))},encapsulation:2})}return e})();var ce=["data-p-icon","times-circle"],oe=(()=>{class e extends D{pathId;onInit(){this.pathId="url(#"+x()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=T(e)))(o||e)}})();static \u0275cmp=u({type:e,selectors:[["","data-p-icon","times-circle"]],features:[_],attrs:ce,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(p(),b(0,"g"),y(1,"path",0),v(),b(2,"defs")(3,"clipPath",1),y(4,"rect",2),v()()),n&2&&(l("clip-path",o.pathId),r(3),O("id",o.pathId))},encapsulation:2})}return e})();var ne=`
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        margin: 0 0 1rem 0;
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: -25% 0 0 0;
        right: -25%;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        margin: -25% 0 0 auto;
        left: -25%;
        right: auto;
    }

    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-message-enter-active {
        animation: p-animate-toast-enter 300ms ease-out;
    }

    .p-toast-message-leave-active {
        animation: p-animate-toast-leave 250ms ease-in;
    }

    .p-toast-message-leave-to .p-toast-message-content {
        padding-top: 0;
        padding-bottom: 0;
    }

    @keyframes p-animate-toast-enter {
        from {
            opacity: 0;
            transform: scale(0.6);
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

     @keyframes p-animate-toast-leave {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            margin-bottom: 0;
            grid-template-rows: 0fr;
            transform: translateY(-100%) scale(0.6);
        }
    }
`;var pe=(e,i)=>({$implicit:e,closeFn:i}),de=e=>({$implicit:e});function me(e,i){e&1&&tt(0)}function ue(e,i){if(e&1&&B(0,me,1,0,"ng-container",3),e&2){let t=a();s("ngTemplateOutlet",t.headlessTemplate)("ngTemplateOutletContext",wt(2,pe,t.message,t.onCloseIconClick))}}function ge(e,i){if(e&1&&g(0,"span",4),e&2){let t=a(3);m(t.cn(t.cx("messageIcon"),t.message==null?null:t.message.icon)),s("pBind",t.ptm("messageIcon"))}}function fe(e,i){if(e&1&&(p(),g(0,"svg",11)),e&2){let t=a(4);m(t.cx("messageIcon")),s("pBind",t.ptm("messageIcon")),l("aria-hidden",!0)}}function he(e,i){if(e&1&&(p(),g(0,"svg",12)),e&2){let t=a(4);m(t.cx("messageIcon")),s("pBind",t.ptm("messageIcon")),l("aria-hidden",!0)}}function Ce(e,i){if(e&1&&(p(),g(0,"svg",13)),e&2){let t=a(4);m(t.cx("messageIcon")),s("pBind",t.ptm("messageIcon")),l("aria-hidden",!0)}}function _e(e,i){if(e&1&&(p(),g(0,"svg",14)),e&2){let t=a(4);m(t.cx("messageIcon")),s("pBind",t.ptm("messageIcon")),l("aria-hidden",!0)}}function be(e,i){if(e&1&&(p(),g(0,"svg",12)),e&2){let t=a(4);m(t.cx("messageIcon")),s("pBind",t.ptm("messageIcon")),l("aria-hidden",!0)}}function ve(e,i){if(e&1&&M(0,fe,1,4,":svg:svg",7)(1,he,1,4,":svg:svg",8)(2,Ce,1,4,":svg:svg",9)(3,_e,1,4,":svg:svg",10)(4,be,1,4,":svg:svg",8),e&2){let t,n=a(3);k((t=n.message.severity)==="success"?0:t==="info"?1:t==="error"?2:t==="warn"?3:4)}}function ye(e,i){if(e&1&&(_t(0),M(1,ge,1,3,"span",2)(2,ve,5,1),w(3,"div",6)(4,"div",6),et(5),E(),w(6,"div",6),et(7),E()(),bt()),e&2){let t=a(2);r(),k(t.message.icon?1:2),r(2),s("pBind",t.ptm("messageText"))("ngClass",t.cx("messageText")),l("data-p",t.dataP),r(),s("pBind",t.ptm("summary"))("ngClass",t.cx("summary")),l("data-p",t.dataP),r(),xt(" ",t.message.summary," "),r(),s("pBind",t.ptm("detail"))("ngClass",t.cx("detail")),l("data-p",t.dataP),r(),Tt(t.message.detail)}}function Te(e,i){e&1&&tt(0)}function xe(e,i){if(e&1&&g(0,"span",4),e&2){let t=a(4);m(t.cn(t.cx("closeIcon"),t.message==null?null:t.message.closeIcon)),s("pBind",t.ptm("closeIcon"))}}function Ie(e,i){if(e&1&&B(0,xe,1,3,"span",17),e&2){let t=a(3);s("ngIf",t.message.closeIcon)}}function we(e,i){if(e&1&&(p(),g(0,"svg",18)),e&2){let t=a(3);m(t.cx("closeIcon")),s("pBind",t.ptm("closeIcon")),l("aria-hidden",!0)}}function Ee(e,i){if(e&1){let t=Z();w(0,"div")(1,"button",15),z("click",function(o){h(t);let c=a(2);return C(c.onCloseIconClick(o))})("keydown.enter",function(o){h(t);let c=a(2);return C(c.onCloseIconClick(o))}),M(2,Ie,1,1,"span",2)(3,we,1,4,":svg:svg",16),E()()}if(e&2){let t=a(2);r(),s("pBind",t.ptm("closeButton")),l("class",t.cx("closeButton"))("aria-label",t.closeAriaLabel)("data-p",t.dataP),r(),k(t.message.closeIcon?2:3)}}function Ae(e,i){if(e&1&&(w(0,"div",4),B(1,ye,8,12,"ng-container",5)(2,Te,1,0,"ng-container",3),M(3,Ee,4,5,"div"),E()),e&2){let t=a();m(t.cn(t.cx("messageContent"),t.message==null?null:t.message.contentStyleClass)),s("pBind",t.ptm("messageContent")),r(),s("ngIf",!t.template),r(),s("ngTemplateOutlet",t.template)("ngTemplateOutletContext",It(7,de,t.message)),r(),k((t.message==null?null:t.message.closable)!==!1?3:-1)}}var Me=["message"],ke=["headless"];function Oe(e,i){if(e&1){let t=Z();w(0,"p-toastItem",1),z("onClose",function(o){h(t);let c=a();return C(c.onMessageClose(o))})("onAnimationEnd",function(){h(t);let o=a();return C(o.onAnimationEnd())})("onAnimationStart",function(){h(t);let o=a();return C(o.onAnimationStart())}),E()}if(e&2){let t=i.$implicit,n=i.index,o=a();s("message",t)("index",n)("life",o.life)("clearAll",o.clearAllTrigger())("template",o.template||o._template)("headlessTemplate",o.headlessTemplate||o._headlessTemplate)("pt",o.pt)("unstyled",o.unstyled())("motionOptions",o.computedMotionOptions())}}var Se={root:({instance:e})=>{let{_position:i}=e;return{position:"fixed",top:i==="top-right"||i==="top-left"||i==="top-center"?"20px":i==="center"?"50%":null,right:(i==="top-right"||i==="bottom-right")&&"20px",bottom:(i==="bottom-left"||i==="bottom-right"||i==="bottom-center")&&"20px",left:i==="top-left"||i==="bottom-left"?"20px":i==="center"||i==="top-center"||i==="bottom-center"?"50%":null}}},De={root:({instance:e})=>["p-toast p-component",`p-toast-${e._position}`],message:({instance:e})=>({"p-toast-message":!0,"p-toast-message-info":e.message.severity==="info"||e.message.severity===void 0,"p-toast-message-warn":e.message.severity==="warn","p-toast-message-error":e.message.severity==="error","p-toast-message-success":e.message.severity==="success","p-toast-message-secondary":e.message.severity==="secondary","p-toast-message-contrast":e.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:e})=>({"p-toast-message-icon":!0,[`pi ${e.message.icon}`]:!!e.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:e})=>({"p-toast-close-icon":!0,[`pi ${e.message.closeIcon}`]:!!e.message.closeIcon})},Y=(()=>{class e extends $t{name="toast";style=ne;classes=De;inlineStyles=Se;static \u0275fac=(()=>{let t;return function(o){return(t||(t=T(e)))(o||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})();var ie=new pt("TOAST_INSTANCE"),Be=(()=>{class e extends st{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;motionOptions=j();clearAll=j(null);onAnimationStart=ot();onAnimationEnd=ot();onBeforeEnter(t){this.onAnimationStart.emit(t.element)}onAfterLeave(t){!this.visible()&&!this.isDestroyed&&(this.onClose.emit({index:this.index,message:this.message}),this.isDestroyed||this.onAnimationEnd.emit(t.element))}onClose=new K;_componentStyle=d(Y);timeout;visible=I(void 0);isDestroyed=!1;isClosing=!1;constructor(t){super(),this.zone=t,ut(()=>{this.clearAll()&&this.visible.set(!1)})}onAfterViewInit(){this.message?.sticky&&this.visible.set(!0),this.initTimeout()}initTimeout(){this.message?.sticky||(this.clearTimeout(),this.zone.runOutsideAngular(()=>{this.visible.set(!0),this.timeout=setTimeout(()=>{this.visible.set(!1)},this.message?.life||this.life||3e3)}))}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.isClosing||this.initTimeout()}onCloseIconClick=t=>{this.isClosing=!0,this.clearTimeout(),this.visible.set(!1),t.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onDestroy(){this.isDestroyed=!0,this.clearTimeout(),this.visible.set(!1)}get dataP(){return this.cn({[this.message?.severity]:this.message?.severity})}static \u0275fac=function(n){return new(n||e)(gt(dt))};static \u0275cmp=u({type:e,selectors:[["p-toastItem"]],inputs:{message:"message",index:[2,"index","index",V],life:[2,"life","life",V],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],clearAll:[1,"clearAll"]},outputs:{onAnimationStart:"onAnimationStart",onAnimationEnd:"onAnimationEnd",onClose:"onClose"},features:[F([Y]),_],decls:4,vars:10,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","mouseenter","mouseleave","pMotion","pMotionAppear","pMotionName","pMotionOptions","pBind"],[3,"pBind","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","check",3,"pBind","class"],["data-p-icon","info-circle",3,"pBind","class"],["data-p-icon","times-circle",3,"pBind","class"],["data-p-icon","exclamation-triangle",3,"pBind","class"],["data-p-icon","check",3,"pBind"],["data-p-icon","info-circle",3,"pBind"],["data-p-icon","times-circle",3,"pBind"],["data-p-icon","exclamation-triangle",3,"pBind"],["type","button","autofocus","",3,"click","keydown.enter","pBind"],["data-p-icon","times",3,"pBind","class"],[3,"pBind","class",4,"ngIf"],["data-p-icon","times",3,"pBind"]],template:function(n,o){if(n&1){let c=Z();w(0,"div",1,0),z("pMotionOnBeforeEnter",function(X){return h(c),C(o.onBeforeEnter(X))})("pMotionOnAfterLeave",function(X){return h(c),C(o.onAfterLeave(X))})("mouseenter",function(){return h(c),C(o.onMouseEnter())})("mouseleave",function(){return h(c),C(o.onMouseLeave())}),M(2,ue,1,5,"ng-container")(3,Ae,4,9,"div",2),E()}n&2&&(m(o.cn(o.cx("message"),o.message==null?null:o.message.styleClass)),s("pMotion",o.visible())("pMotionAppear",!0)("pMotionName","p-toast-message")("pMotionOptions",o.motionOptions())("pBind",o.ptm("message")),l("id",o.message==null?null:o.message.id)("data-p",o.dataP),r(2),k(o.headlessTemplate?2:3))},dependencies:[nt,Mt,Ot,St,Ut,te,ee,Qt,oe,P,L,Yt,qt],encapsulation:2,changeDetection:0})}return e})(),at=(()=>{class e extends st{componentName="Toast";$pcToast=d(ie,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}key;autoZIndex=!0;baseZIndex=0;life=3e3;styleClass;get position(){return this._position}set position(t){this._position=t,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";motionOptions=j(void 0);computedMotionOptions=Et(()=>J(J({},this.ptm("motion")),this.motionOptions()));breakpoints;onClose=new K;template;headlessTemplate;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=d(U);_componentStyle=d(Y);styleElement;id=x("pn_id_");templates;clearAllTrigger=I(null);constructor(){super()}onInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(t=>{if(t)if(Array.isArray(t)){let n=t.filter(o=>this.canAdd(o));this.add(n)}else this.canAdd(t)&&this.add([t])}),this.clearSubscription=this.messageService.clearObserver.subscribe(t=>{t?this.key===t&&this.clearAll():this.clearAll(),this.cd.markForCheck()})}clearAll(){this.clearAllTrigger.set({})}_template;_headlessTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"message":this._template=t.template;break;case"headless":this._headlessTemplate=t.template;break;default:this._template=t.template;break}})}onAfterViewInit(){this.breakpoints&&this.createStyle()}add(t){this.messages=this.messages?[...this.messages,...t]:[...t],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...t]:[...t]),this.cd.markForCheck()}canAdd(t){let n=this.key===t.key;return n&&this.preventOpenDuplicates&&(n=!this.containsMessage(this.messages,t)),n&&this.preventDuplicates&&(n=!this.containsMessage(this.messagesArchieve,t)),n}containsMessage(t,n){return t?t.find(o=>o.summary===n.summary&&o.detail==n.detail&&o.severity===n.severity)!=null:!1}onMessageClose(t){this.messages?.splice(t.index,1),this.onClose.emit({message:t.message}),this.onAnimationEnd(),this.cd.detectChanges()}onAnimationStart(){this.renderer.setAttribute(this.el?.nativeElement,this.id,""),this.autoZIndex&&this.el?.nativeElement.style.zIndex===""&&Q.set("modal",this.el?.nativeElement,this.baseZIndex||this.config.zIndex.modal)}onAnimationEnd(){this.autoZIndex&&Ht(this.messages)&&Q.clear(this.el?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",it(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let t="";for(let n in this.breakpoints){let o="";for(let c in this.breakpoints[n])o+=c+":"+this.breakpoints[n][c]+" !important;";t+=`
                    @media screen and (max-width: ${n}) {
                        .p-toast[${this.id}] {
                           ${o}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",t),it(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.el&&this.autoZIndex&&Q.clear(this.el.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}get dataP(){return this.cn({[this.position]:this.position})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=u({type:e,selectors:[["p-toast"]],contentQueries:function(n,o,c){if(n&1&&vt(c,Me,5)(c,ke,5)(c,jt,4),n&2){let f;H(f=$())&&(o.template=f.first),H(f=$())&&(o.headlessTemplate=f.first),H(f=$())&&(o.templates=f)}},hostVars:5,hostBindings:function(n,o){n&2&&(l("data-p",o.dataP),yt(o.sx("root")),m(o.cn(o.cx("root"),o.styleClass)))},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",G],baseZIndex:[2,"baseZIndex","baseZIndex",V],life:[2,"life","life",V],styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",G],preventDuplicates:[2,"preventDuplicates","preventDuplicates",G],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[F([Y,{provide:ie,useExisting:e},{provide:Gt,useExisting:e}]),ht([L]),_],decls:1,vars:1,consts:[[3,"message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions","onClose","onAnimationEnd","onAnimationStart",4,"ngFor","ngForOf"],[3,"onClose","onAnimationEnd","onAnimationStart","message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions"]],template:function(n,o){n&1&&B(0,Oe,1,9,"p-toastItem",0),n&2&&s("ngForOf",o.messages)},dependencies:[nt,kt,Be,P],encapsulation:2,changeDetection:0})}return e})(),se=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=ft({type:e});static \u0275inj=ct({imports:[at,P,P]})}return e})();var W=class e{toastPt=I({message:{class:"bg-red-50! min-w-80! rounded-lg! border-1! border-red-200! outline-0! text-maroon-600! p-2"},messageContent:{class:"flex! items-center! gap-2!"},summary:{class:"font-semibold! text-base!"},detail:{class:"text-sm!"},closeButton:{class:"pe-2!"}});static \u0275fac=function(t){return new(t||e)};static \u0275cmp=u({type:e,selectors:[["app-root"]],features:[F([U])],decls:2,vars:1,consts:[[3,"pt"]],template:function(t,n){t&1&&g(0,"p-toast",0)(1,"router-outlet"),t&2&&s("pt",n.toastPt())},dependencies:[Pt,se,at],encapsulation:2})};Dt(W,Kt).catch(e=>console.error(e));
