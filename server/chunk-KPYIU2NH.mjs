import './polyfills.server.mjs';
import{$ as Ne,A as it,B as ve,C as we,D as st,E as ot,F as Te,G as hn,H as at,I as rt,J as lt,K as ct,L as Se,M as De,N as Ce,O as Ee,P as Me,Q as dt,R as ut,S as ht,T as Oe,U as ft,V as pt,W as fn,X as pn,Y as _n,Z as _t,_ as gt,a as sn,aa as mt,b as R,c as on,ca as gn,d as qe,e as Ke,f as P,g as an,h as de,ha as Re,i as rn,ia as Ae,j as ye,k as Ze,ka as mn,l as ln,la as bn,m as cn,ma as bt,n as S,na as yn,o as dn,oa as vn,p as Xe,q as F,r as _,ra as wn,s as un,t as v,u as M,v as g,va as Tn,w as et,x as tt,y as nt,ya as yt,z as ne}from"./chunk-JVLCHNHH.mjs";import{a as d,b as y}from"./chunk-5XUXGTUW.mjs";var xe=class e{val="";constructor(){let n=v(st);bt(n)&&(localStorage.setItem("name","Nheeraj"),this.val=localStorage.getItem("name")||"")}ngOnInit(){throw new Error("Method not implemented.")}static \u0275fac=function(t){return new(t||e)};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})};var Ki=e=>({active:e});function Zi(e,n){if(e&1){let t=ut();Ee(0,"button",1),ht("click",function(){let s=tt(t).index,o=Oe();return nt(o.changeColor(s))}),_t(1),Me()}if(e&2){let t=n.index,i=Oe();Se("ngClass",mt(2,Ki,i.selectedIndex===t)),ot(),gt("Button ",t+1,"")}}var ke=class e{constructor(n){this.testService=n}items=[];name="";ngOnInit(){this.items.push({name:"dheeraj",rollno:"iec2022018",college:"IIITA"},{name:"anurag",rollno:"iec2022019",college:"MMMUT"},{name:"anurag",rollno:"iec2022019",college:"MMMUT"},{name:"anurag",rollno:"iec2022019",college:"MMMUT"},{name:"anurag",rollno:"iec2022019",college:"MMMUT"})}selectedIndex=null;changeColor(n){this.selectedIndex=n}static \u0275fac=function(t){return new(t||e)(Te(xe))};static \u0275cmp=M({type:e,selectors:[["app-login"]],decls:1,vars:1,consts:[[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"click","ngClass"]],template:function(t,i){t&1&&at(0,Zi,2,4,"button",0),t&2&&Se("ngForOf",i.items)},dependencies:[mn,bn],styles:[".active[_ngcontent-%COMP%]{background-color:#00f;color:#fff}"]})};var Ie=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-forgot-password"]],decls:0,vars:0,template:function(t,i){},styles:[".form-gap[_ngcontent-%COMP%]{padding-top:70px}"]})};var Pe=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-no-found"]],decls:0,vars:0,template:function(t,i){},styles:["body[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==)}.error-template[_ngcontent-%COMP%]{padding:40px 15px;text-align:center}.error-actions[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px}.error-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-right:10px}"]})};var Xi=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",component:ke},{path:"forgot-password",component:Ie},{path:"**",component:Pe}],Fe=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=g({type:e});static \u0275inj=_({imports:[yt.forRoot(Xi),yt]})};var ie=class e{title="test";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){t&1&&dt(0,"router-outlet")},dependencies:[Tn]})};var Sn=()=>{},jt={},Jn={},Yn=null,Qn={mark:Sn,measure:Sn};try{typeof window<"u"&&(jt=window),typeof document<"u"&&(Jn=document),typeof MutationObserver<"u"&&(Yn=MutationObserver),typeof performance<"u"&&(Qn=performance)}catch{}var{userAgent:Dn=""}=jt.navigator||{},U=jt,m=Jn,Cn=Yn,Be=Qn,Pa=!!U.document,G=!!m.documentElement&&!!m.head&&typeof m.addEventListener=="function"&&typeof m.createElement=="function",qn=~Dn.indexOf("MSIE")||~Dn.indexOf("Trident/"),b="classic",Kn="duotone",D="sharp",C="sharp-duotone",es=[b,Kn,D,C],ts={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},En={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ns=["kit"],is=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,ss=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,os={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},as={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},rs={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},ls={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},cs={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},ds={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Zn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},us=["solid","regular","light","thin","duotone","brands"],Xn=[1,2,3,4,5,6,7,8,9,10],hs=Xn.concat([11,12,13,14,15,16,17,18,19,20]),ue={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fs=[...Object.keys(ls),...us,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ue.GROUP,ue.SWAP_OPACITY,ue.PRIMARY,ue.SECONDARY].concat(Xn.map(e=>"".concat(e,"x"))).concat(hs.map(e=>"w-".concat(e))),ps={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_s={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},gs={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Mn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},L="___FONT_AWESOME___",Et=16,ei="fa",ti="svg-inline--fa",K="data-fa-i2svg",Mt="data-fa-pseudo-element",ms="data-fa-pseudo-element-pending",Vt="data-prefix",$t="data-icon",On="fontawesome-i2svg",bs="async",ys=["HTML","HEAD","STYLE","SCRIPT"],ni=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),ii=[b,D,C];function me(e){return new Proxy(e,{get(n,t){return t in n?n[t]:n[b]}})}var si=d({},Zn);si[b]=d(d(d({},Zn[b]),En.kit),En["kit-duotone"]);var Q=me(si),Ot=d({},ds);Ot[b]=d(d(d({},Ot[b]),Mn.kit),Mn["kit-duotone"]);var _e=me(Ot),Nt=d({},cs);Nt[b]=d(d({},Nt[b]),gs.kit);var q=me(Nt),Rt=d({},rs);Rt[b]=d(d({},Rt[b]),_s.kit);var vs=me(Rt),ws=is,oi="fa-layers-text",Ts=ss,Ss=d({},ts),Fa=me(Ss),Ds=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wt=ue,ae=new Set;Object.keys(_e[b]).map(ae.add.bind(ae));Object.keys(_e[D]).map(ae.add.bind(ae));Object.keys(_e[C]).map(ae.add.bind(ae));var Cs=[...ns,...fs],fe=U.FontAwesomeConfig||{};function Es(e){var n=m.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function Ms(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}m&&typeof m.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[t,i]=n,s=Ms(Es(t));s!=null&&(fe[i]=s)});var ai={styleDefault:"solid",familyDefault:"classic",cssPrefix:ei,replacementClass:ti,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fe.familyPrefix&&(fe.cssPrefix=fe.familyPrefix);var re=d(d({},ai),fe);re.autoReplaceSvg||(re.observeMutations=!1);var u={};Object.keys(ai).forEach(e=>{Object.defineProperty(u,e,{enumerable:!0,set:function(n){re[e]=n,pe.forEach(t=>t(u))},get:function(){return re[e]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(e){re.cssPrefix=e,pe.forEach(n=>n(u))},get:function(){return re.cssPrefix}});U.FontAwesomeConfig=u;var pe=[];function Os(e){return pe.push(e),()=>{pe.splice(pe.indexOf(e),1)}}var V=Et,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ns(e){if(!e||!G)return;let n=m.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;let t=m.head.childNodes,i=null;for(let s=t.length-1;s>-1;s--){let o=t[s],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=o)}return m.head.insertBefore(n,i),e}var Rs="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ge(){let e=12,n="";for(;e-- >0;)n+=Rs[Math.random()*62|0];return n}function le(e){let n=[];for(let t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function Ut(e){return e.classList?le(e.classList):(e.getAttribute("class")||"").split(" ").filter(n=>n)}function ri(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function As(e){return Object.keys(e||{}).reduce((n,t)=>n+"".concat(t,'="').concat(ri(e[t]),'" '),"").trim()}function Ve(e){return Object.keys(e||{}).reduce((n,t)=>n+"".concat(t,": ").concat(e[t].trim(),";"),"")}function zt(e){return e.size!==A.size||e.x!==A.x||e.y!==A.y||e.rotate!==A.rotate||e.flipX||e.flipY}function xs(e){let{transform:n,containerWidth:t,iconWidth:i}=e,s={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),a="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),r="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(r)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:l,path:c}}function ks(e){let{transform:n,width:t=Et,height:i=Et,startCentered:s=!1}=e,o="";return s&&qn?o+="translate(".concat(n.x/V-t/2,"em, ").concat(n.y/V-i/2,"em) "):s?o+="translate(calc(-50% + ".concat(n.x/V,"em), calc(-50% + ").concat(n.y/V,"em)) "):o+="translate(".concat(n.x/V,"em, ").concat(n.y/V,"em) "),o+="scale(".concat(n.size/V*(n.flipX?-1:1),", ").concat(n.size/V*(n.flipY?-1:1),") "),o+="rotate(".concat(n.rotate,"deg) "),o}var Is=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function li(){let e=ei,n=ti,t=u.cssPrefix,i=u.replacementClass,s=Is;if(t!==e||i!==n){let o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),r=new RegExp("\\.".concat(n),"g");s=s.replace(o,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(r,".".concat(i))}return s}var Nn=!1;function Tt(){u.autoAddCss&&!Nn&&(Ns(li()),Nn=!0)}var Ps={mixout(){return{dom:{css:li,insertCss:Tt}}},hooks(){return{beforeDOMElementCreation(){Tt()},beforeI2svg(){Tt()}}}},H=U||{};H[L]||(H[L]={});H[L].styles||(H[L].styles={});H[L].hooks||(H[L].hooks={});H[L].shims||(H[L].shims=[]);var x=H[L],ci=[],di=function(){m.removeEventListener("DOMContentLoaded",di),Ge=1,ci.map(e=>e())},Ge=!1;G&&(Ge=(m.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(m.readyState),Ge||m.addEventListener("DOMContentLoaded",di));function Fs(e){G&&(Ge?setTimeout(e,0):ci.push(e))}function be(e){let{tag:n,attributes:t={},children:i=[]}=e;return typeof e=="string"?ri(e):"<".concat(n," ").concat(As(t),">").concat(i.map(be).join(""),"</").concat(n,">")}function Rn(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var Bs=function(n,t){return function(i,s,o,a){return n.call(t,i,s,o,a)}},St=function(n,t,i,s){var o=Object.keys(n),a=o.length,r=s!==void 0?Bs(t,s):t,l,c,h;for(i===void 0?(l=1,h=n[o[0]]):(l=0,h=i);l<a;l++)c=o[l],h=r(h,n[c],c,n);return h};function Ls(e){let n=[],t=0,i=e.length;for(;t<i;){let s=e.charCodeAt(t++);if(s>=55296&&s<=56319&&t<i){let o=e.charCodeAt(t++);(o&64512)==56320?n.push(((s&1023)<<10)+(o&1023)+65536):(n.push(s),t--)}else n.push(s)}return n}function At(e){let n=Ls(e);return n.length===1?n[0].toString(16):null}function Hs(e,n){let t=e.length,i=e.charCodeAt(n),s;return i>=55296&&i<=56319&&t>n+1&&(s=e.charCodeAt(n+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function An(e){return Object.keys(e).reduce((n,t)=>{let i=e[t];return!!i.icon?n[i.iconName]=i.icon:n[t]=i,n},{})}function xt(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:i=!1}=t,s=An(n);typeof x.hooks.addPack=="function"&&!i?x.hooks.addPack(e,An(n)):x.styles[e]=d(d({},x.styles[e]||{}),s),e==="fas"&&xt("fa",n)}var{styles:Y,shims:Gs}=x,js={[b]:Object.values(q[b]),[D]:Object.values(q[D]),[C]:Object.values(q[C])},Wt=null,ui={},hi={},fi={},pi={},_i={},Vs={[b]:Object.keys(Q[b]),[D]:Object.keys(Q[D]),[C]:Object.keys(Q[C])};function $s(e){return~Cs.indexOf(e)}function Us(e,n){let t=n.split("-"),i=t[0],s=t.slice(1).join("-");return i===e&&s!==""&&!$s(s)?s:null}var gi=()=>{let e=i=>St(Y,(s,o,a)=>(s[a]=St(o,i,{}),s),{});ui=e((i,s,o)=>(s[3]&&(i[s[3]]=o),s[2]&&s[2].filter(r=>typeof r=="number").forEach(r=>{i[r.toString(16)]=o}),i)),hi=e((i,s,o)=>(i[o]=o,s[2]&&s[2].filter(r=>typeof r=="string").forEach(r=>{i[r]=o}),i)),_i=e((i,s,o)=>{let a=s[2];return i[o]=o,a.forEach(r=>{i[r]=o}),i});let n="far"in Y||u.autoFetchSvg,t=St(Gs,(i,s)=>{let o=s[0],a=s[1],r=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:r}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:r}),i},{names:{},unicodes:{}});fi=t.names,pi=t.unicodes,Wt=$e(u.styleDefault,{family:u.familyDefault})};Os(e=>{Wt=$e(e.styleDefault,{family:u.familyDefault})});gi();function Jt(e,n){return(ui[e]||{})[n]}function zs(e,n){return(hi[e]||{})[n]}function $(e,n){return(_i[e]||{})[n]}function mi(e){return fi[e]||{prefix:null,iconName:null}}function Ws(e){let n=pi[e],t=Jt("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function z(){return Wt}var Yt=()=>({prefix:null,iconName:null,rest:[]});function $e(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:t=b}=n,i=Q[t][e],s=_e[t][e]||_e[t][i],o=e in x.styles?e:null;return s||o||null}var Js={[b]:Object.keys(q[b]),[D]:Object.keys(q[D]),[C]:Object.keys(q[C])};function Ue(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:t=!1}=n,i={[b]:"".concat(u.cssPrefix,"-").concat(b),[D]:"".concat(u.cssPrefix,"-").concat(D),[C]:"".concat(u.cssPrefix,"-").concat(C)},s=null,o=b,a=es.filter(l=>l!==Kn);a.forEach(l=>{(e.includes(i[l])||e.some(c=>Js[l].includes(c)))&&(o=l)});let r=e.reduce((l,c)=>{let h=Us(u.cssPrefix,c);if(Y[c]?(c=js[o].includes(c)?vs[o][c]:c,s=c,l.prefix=c):Vs[o].indexOf(c)>-1?(s=c,l.prefix=$e(c,{family:o})):h?l.iconName=h:c!==u.replacementClass&&!a.some(p=>c===i[p])&&l.rest.push(c),!t&&l.prefix&&l.iconName){let p=s==="fa"?mi(l.iconName):{},f=$(l.prefix,l.iconName);p.prefix&&(s=null),l.iconName=p.iconName||f||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!Y.far&&Y.fas&&!u.autoFetchSvg&&(l.prefix="fas")}return l},Yt());return(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(r.prefix="fad"),!r.prefix&&o===D&&(Y.fass||u.autoFetchSvg)&&(r.prefix="fass",r.iconName=$(r.prefix,r.iconName)||r.iconName),!r.prefix&&o===C&&(Y.fasds||u.autoFetchSvg)&&(r.prefix="fasds",r.iconName=$(r.prefix,r.iconName)||r.iconName),(r.prefix==="fa"||s==="fa")&&(r.prefix=z()||"fas"),r}var kt=class{constructor(){this.definitions={}}add(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];let s=t.reduce(this._pullDefinitions,{});Object.keys(s).forEach(o=>{this.definitions[o]=d(d({},this.definitions[o]||{}),s[o]),xt(o,s[o]);let a=q[b][o];a&&xt(a,s[o]),gi()})}reset(){this.definitions={}}_pullDefinitions(n,t){let i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(s=>{let{prefix:o,iconName:a,icon:r}=i[s],l=r[2];n[o]||(n[o]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(n[o][c]=r)}),n[o][a]=r}),n}},xn=[],se={},oe={},Ys=Object.keys(oe);function Qs(e,n){let{mixoutsTo:t}=n;return xn=e,se={},Object.keys(oe).forEach(i=>{Ys.indexOf(i)===-1&&delete oe[i]}),xn.forEach(i=>{let s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(o=>{typeof s[o]=="function"&&(t[o]=s[o]),typeof s[o]=="object"&&Object.keys(s[o]).forEach(a=>{t[o]||(t[o]={}),t[o][a]=s[o][a]})}),i.hooks){let o=i.hooks();Object.keys(o).forEach(a=>{se[a]||(se[a]=[]),se[a].push(o[a])})}i.provides&&i.provides(oe)}),t}function It(e,n){for(var t=arguments.length,i=new Array(t>2?t-2:0),s=2;s<t;s++)i[s-2]=arguments[s];return(se[e]||[]).forEach(a=>{n=a.apply(null,[n,...i])}),n}function Z(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];(se[e]||[]).forEach(o=>{o.apply(null,t)})}function W(){let e=arguments[0],n=Array.prototype.slice.call(arguments,1);return oe[e]?oe[e].apply(null,n):void 0}function Pt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:n}=e,t=e.prefix||z();if(n)return n=$(t,n)||n,Rn(bi.definitions,t,n)||Rn(x.styles,t,n)}var bi=new kt,qs=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,Z("noAuto")},Ks={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return G?(Z("beforeI2svg",e),W("pseudoElements2svg",e),W("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n}=e;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,Fs(()=>{Xs({autoReplaceSvgRoot:n}),Z("watch",e)})}},Zs={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:$(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],t=$e(e[0]);return{prefix:t,iconName:$(t,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(u.cssPrefix,"-"))>-1||e.match(ws))){let n=Ue(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||z(),iconName:$(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){let n=z();return{prefix:n,iconName:$(n,e)||e}}}},E={noAuto:qs,config:u,dom:Ks,parse:Zs,library:bi,findIconDefinition:Pt,toHtml:be},Xs=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n=m}=e;(Object.keys(x.styles).length>0||u.autoFetchSvg)&&G&&u.autoReplaceSvg&&E.dom.i2svg({node:n})};function ze(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(t=>be(t))}}),Object.defineProperty(e,"node",{get:function(){if(!G)return;let t=m.createElement("div");return t.innerHTML=e.html,t.children}}),e}function eo(e){let{children:n,main:t,mask:i,attributes:s,styles:o,transform:a}=e;if(zt(a)&&t.found&&!i.found){let{width:r,height:l}=t,c={x:r/l/2,y:.5};s.style=Ve(y(d({},o),{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:s,children:n}]}function to(e){let{prefix:n,iconName:t,children:i,attributes:s,symbol:o}=e,a=o===!0?"".concat(n,"-").concat(u.cssPrefix,"-").concat(t):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:y(d({},s),{id:a}),children:i}]}]}function Qt(e){let{icons:{main:n,mask:t},prefix:i,iconName:s,transform:o,symbol:a,title:r,maskId:l,titleId:c,extra:h,watchable:p=!1}=e,{width:f,height:w}=t.found?t:n,j=i==="fak",J=[u.replacementClass,s?"".concat(u.cssPrefix,"-").concat(s):""].filter(te=>h.classes.indexOf(te)===-1).filter(te=>te!==""||!!te).concat(h.classes).join(" "),O={children:[],attributes:y(d({},h.attributes),{"data-prefix":i,"data-icon":s,class:J,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(w)})},I=j&&!~h.classes.indexOf("fa-fw")?{width:"".concat(f/w*16*.0625,"em")}:{};p&&(O.attributes[K]=""),r&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||ge())},children:[r]}),delete O.attributes.title);let T=y(d({},O),{prefix:i,iconName:s,main:n,mask:t,maskId:l,transform:o,symbol:a,styles:d(d({},I),h.styles)}),{children:N,attributes:ee}=t.found&&n.found?W("generateAbstractMask",T)||{children:[],attributes:{}}:W("generateAbstractIcon",T)||{children:[],attributes:{}};return T.children=N,T.attributes=ee,a?to(T):eo(T)}function kn(e){let{content:n,width:t,height:i,transform:s,title:o,extra:a,watchable:r=!1}=e,l=y(d(d({},a.attributes),o?{title:o}:{}),{class:a.classes.join(" ")});r&&(l[K]="");let c=d({},a.styles);zt(s)&&(c.transform=ks({transform:s,startCentered:!0,width:t,height:i}),c["-webkit-transform"]=c.transform);let h=Ve(c);h.length>0&&(l.style=h);let p=[];return p.push({tag:"span",attributes:l,children:[n]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function no(e){let{content:n,title:t,extra:i}=e,s=y(d(d({},i.attributes),t?{title:t}:{}),{class:i.classes.join(" ")}),o=Ve(i.styles);o.length>0&&(s.style=o);let a=[];return a.push({tag:"span",attributes:s,children:[n]}),t&&a.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),a}var{styles:Dt}=x;function Ft(e){let n=e[0],t=e[1],[i]=e.slice(4),s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(wt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(wt.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:s}}var io={found:!1,width:512,height:512};function so(e,n){!ni&&!u.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function Bt(e,n){let t=n;return n==="fa"&&u.styleDefault!==null&&(n=z()),new Promise((i,s)=>{if(t==="fa"){let o=mi(e)||{};e=o.iconName||e,n=o.prefix||n}if(e&&n&&Dt[n]&&Dt[n][e]){let o=Dt[n][e];return i(Ft(o))}so(e,n),i(y(d({},io),{icon:u.showMissingIcons&&e?W("missingIconAbstract")||{}:{}}))})}var In=()=>{},Lt=u.measurePerformance&&Be&&Be.mark&&Be.measure?Be:{mark:In,measure:In},he='FA "6.6.0"',oo=e=>(Lt.mark("".concat(he," ").concat(e," begins")),()=>yi(e)),yi=e=>{Lt.mark("".concat(he," ").concat(e," ends")),Lt.measure("".concat(he," ").concat(e),"".concat(he," ").concat(e," begins"),"".concat(he," ").concat(e," ends"))},qt={begin:oo,end:yi},Le=()=>{};function Pn(e){return typeof(e.getAttribute?e.getAttribute(K):null)=="string"}function ao(e){let n=e.getAttribute?e.getAttribute(Vt):null,t=e.getAttribute?e.getAttribute($t):null;return n&&t}function ro(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(u.replacementClass)}function lo(){return u.autoReplaceSvg===!0?He.replace:He[u.autoReplaceSvg]||He.replace}function co(e){return m.createElementNS("http://www.w3.org/2000/svg",e)}function uo(e){return m.createElement(e)}function vi(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:t=e.tag==="svg"?co:uo}=n;if(typeof e=="string")return m.createTextNode(e);let i=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){i.appendChild(vi(o,{ceFn:t}))}),i}function ho(e){let n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var He={replace:function(e){let n=e[0];if(n.parentNode)if(e[1].forEach(t=>{n.parentNode.insertBefore(vi(t),n)}),n.getAttribute(K)===null&&u.keepOriginalSource){let t=m.createComment(ho(n));n.parentNode.replaceChild(t,n)}else n.remove()},nest:function(e){let n=e[0],t=e[1];if(~Ut(n).indexOf(u.replacementClass))return He.replace(e);let i=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){let o=t[0].attributes.class.split(" ").reduce((a,r)=>(r===u.replacementClass||r.match(i)?a.toSvg.push(r):a.toNode.push(r),a),{toNode:[],toSvg:[]});t[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}let s=t.map(o=>be(o)).join(`
`);n.setAttribute(K,""),n.innerHTML=s}};function Fn(e){e()}function wi(e,n){let t=typeof n=="function"?n:Le;if(e.length===0)t();else{let i=Fn;u.mutateApproach===bs&&(i=U.requestAnimationFrame||Fn),i(()=>{let s=lo(),o=qt.begin("mutate");e.map(s),o(),t()})}}var Kt=!1;function Ti(){Kt=!0}function Ht(){Kt=!1}var je=null;function Bn(e){if(!Cn||!u.observeMutations)return;let{treeCallback:n=Le,nodeCallback:t=Le,pseudoElementsCallback:i=Le,observeMutationsRoot:s=m}=e;je=new Cn(o=>{if(Kt)return;let a=z();le(o).forEach(r=>{if(r.type==="childList"&&r.addedNodes.length>0&&!Pn(r.addedNodes[0])&&(u.searchPseudoElements&&i(r.target),n(r.target)),r.type==="attributes"&&r.target.parentNode&&u.searchPseudoElements&&i(r.target.parentNode),r.type==="attributes"&&Pn(r.target)&&~Ds.indexOf(r.attributeName))if(r.attributeName==="class"&&ao(r.target)){let{prefix:l,iconName:c}=Ue(Ut(r.target));r.target.setAttribute(Vt,l||a),c&&r.target.setAttribute($t,c)}else ro(r.target)&&t(r.target)})}),G&&je.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function fo(){je&&je.disconnect()}function po(e){let n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce((i,s)=>{let o=s.split(":"),a=o[0],r=o.slice(1);return a&&r.length>0&&(i[a]=r.join(":").trim()),i},{})),t}function _o(e){let n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"",s=Ue(Ut(e));return s.prefix||(s.prefix=z()),n&&t&&(s.prefix=n,s.iconName=t),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=zs(s.prefix,e.innerText)||Jt(s.prefix,At(e.innerText))),!s.iconName&&u.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function go(e){let n=le(e.attributes).reduce((s,o)=>(s.name!=="class"&&s.name!=="style"&&(s[o.name]=o.value),s),{}),t=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return u.autoA11y&&(t?n["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(i||ge()):(n["aria-hidden"]="true",n.focusable="false")),n}function mo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ln(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:t,prefix:i,rest:s}=_o(e),o=go(e),a=It("parseNodeAttributes",{},e),r=n.styleParser?po(e):[];return d({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:r,attributes:o}},a)}var{styles:bo}=x;function Si(e){let n=u.autoReplaceSvg==="nest"?Ln(e,{styleParser:!1}):Ln(e);return~n.extra.classes.indexOf(oi)?W("generateLayersText",e,n):W("generateSvgReplacementMutation",e,n)}var k=new Set;ii.map(e=>{k.add("fa-".concat(e))});Object.keys(Q[b]).map(k.add.bind(k));Object.keys(Q[D]).map(k.add.bind(k));Object.keys(Q[C]).map(k.add.bind(k));k=[...k];function Hn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G)return Promise.resolve();let t=m.documentElement.classList,i=h=>t.add("".concat(On,"-").concat(h)),s=h=>t.remove("".concat(On,"-").concat(h)),o=u.autoFetchSvg?k:ii.map(h=>"fa-".concat(h)).concat(Object.keys(bo));o.includes("fa")||o.push("fa");let a=[".".concat(oi,":not([").concat(K,"])")].concat(o.map(h=>".".concat(h,":not([").concat(K,"])"))).join(", ");if(a.length===0)return Promise.resolve();let r=[];try{r=le(e.querySelectorAll(a))}catch{}if(r.length>0)i("pending"),s("complete");else return Promise.resolve();let l=qt.begin("onTree"),c=r.reduce((h,p)=>{try{let f=Si(p);f&&h.push(f)}catch(f){ni||f.name==="MissingIcon"&&console.error(f)}return h},[]);return new Promise((h,p)=>{Promise.all(c).then(f=>{wi(f,()=>{i("active"),i("complete"),s("pending"),typeof n=="function"&&n(),l(),h()})}).catch(f=>{l(),p(f)})})}function yo(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Si(e).then(t=>{t&&wi([t],n)})}function vo(e){return function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(n||{}).icon?n:Pt(n||{}),{mask:s}=t;return s&&(s=(s||{}).icon?s:Pt(s||{})),e(i,y(d({},t),{mask:s}))}}var wo=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=A,symbol:i=!1,mask:s=null,maskId:o=null,title:a=null,titleId:r=null,classes:l=[],attributes:c={},styles:h={}}=n;if(!e)return;let{prefix:p,iconName:f,icon:w}=e;return ze(d({type:"icon"},e),()=>(Z("beforeDOMElementCreation",{iconDefinition:e,params:n}),u.autoA11y&&(a?c["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(r||ge()):(c["aria-hidden"]="true",c.focusable="false")),Qt({icons:{main:Ft(w),mask:s?Ft(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:f,transform:d(d({},A),t),symbol:i,title:a,maskId:o,titleId:r,extra:{attributes:c,styles:h,classes:l}})))},To={mixout(){return{icon:vo(wo)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Hn,e.nodeCallback=yo,e}}},provides(e){e.i2svg=function(n){let{node:t=m,callback:i=()=>{}}=n;return Hn(t,i)},e.generateSvgReplacementMutation=function(n,t){let{iconName:i,title:s,titleId:o,prefix:a,transform:r,symbol:l,mask:c,maskId:h,extra:p}=t;return new Promise((f,w)=>{Promise.all([Bt(i,a),c.iconName?Bt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(j=>{let[J,O]=j;f([n,Qt({icons:{main:J,mask:O},prefix:a,iconName:i,transform:r,symbol:l,maskId:h,title:s,titleId:o,extra:p,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(n){let{children:t,attributes:i,main:s,transform:o,styles:a}=n,r=Ve(a);r.length>0&&(i.style=r);let l;return zt(o)&&(l=W("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),t.push(l||s.icon),{children:t,attributes:i}}}},So={mixout(){return{layer(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:t=[]}=n;return ze({type:"layer"},()=>{Z("beforeDOMElementCreation",{assembler:e,params:n});let i=[];return e(s=>{Array.isArray(s)?s.map(o=>{i=i.concat(o.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},Do={mixout(){return{counter(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:t=null,classes:i=[],attributes:s={},styles:o={}}=n;return ze({type:"counter",content:e},()=>(Z("beforeDOMElementCreation",{content:e,params:n}),no({content:e.toString(),title:t,extra:{attributes:s,styles:o,classes:["".concat(u.cssPrefix,"-layers-counter"),...i]}})))}}}},Co={mixout(){return{text(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=A,title:i=null,classes:s=[],attributes:o={},styles:a={}}=n;return ze({type:"text",content:e},()=>(Z("beforeDOMElementCreation",{content:e,params:n}),kn({content:e,transform:d(d({},A),t),title:i,extra:{attributes:o,styles:a,classes:["".concat(u.cssPrefix,"-layers-text"),...s]}})))}}},provides(e){e.generateLayersText=function(n,t){let{title:i,transform:s,extra:o}=t,a=null,r=null;if(qn){let l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/l,r=c.height/l}return u.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,kn({content:n.innerHTML,width:a,height:r,transform:s,title:i,extra:o,watchable:!0})])}}},Eo=new RegExp('"',"ug"),Gn=[1105920,1112319],jn=d(d(d({FontAwesome:{normal:"fas",400:"fas"}},as),os),ps),Gt=Object.keys(jn).reduce((e,n)=>(e[n.toLowerCase()]=jn[n],e),{}),Mo=Object.keys(Gt).reduce((e,n)=>{let t=Gt[n];return e[n]=t[900]||[...Object.entries(t)][0][1],e},{});function Oo(e){let n=e.replace(Eo,""),t=Hs(n,0),i=t>=Gn[0]&&t<=Gn[1],s=n.length===2?n[0]===n[1]:!1;return{value:At(s?n[0]:n),isSecondary:i||s}}function No(e,n){let t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(n),s=isNaN(i)?"normal":i;return(Gt[t]||{})[s]||Mo[t]}function Vn(e,n){let t="".concat(ms).concat(n.replace(":","-"));return new Promise((i,s)=>{if(e.getAttribute(t)!==null)return i();let a=le(e.children).filter(f=>f.getAttribute(Mt)===n)[0],r=U.getComputedStyle(e,n),l=r.getPropertyValue("font-family"),c=l.match(Ts),h=r.getPropertyValue("font-weight"),p=r.getPropertyValue("content");if(a&&!c)return e.removeChild(a),i();if(c&&p!=="none"&&p!==""){let f=r.getPropertyValue("content"),w=No(l,h),{value:j,isSecondary:J}=Oo(f),O=c[0].startsWith("FontAwesome"),I=Jt(w,j),T=I;if(O){let N=Ws(j);N.iconName&&N.prefix&&(I=N.iconName,w=N.prefix)}if(I&&!J&&(!a||a.getAttribute(Vt)!==w||a.getAttribute($t)!==T)){e.setAttribute(t,T),a&&e.removeChild(a);let N=mo(),{extra:ee}=N;ee.attributes[Mt]=n,Bt(I,w).then(te=>{let Yi=Qt(y(d({},N),{icons:{main:te,mask:Yt()},prefix:w,iconName:T,extra:ee,watchable:!0})),Qe=m.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(Qe,e.firstChild):e.appendChild(Qe),Qe.outerHTML=Yi.map(Qi=>be(Qi)).join(`
`),e.removeAttribute(t),i()}).catch(s)}else i()}else i()})}function Ro(e){return Promise.all([Vn(e,"::before"),Vn(e,"::after")])}function Ao(e){return e.parentNode!==document.head&&!~ys.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function $n(e){if(G)return new Promise((n,t)=>{let i=le(e.querySelectorAll("*")).filter(Ao).map(Ro),s=qt.begin("searchPseudoElements");Ti(),Promise.all(i).then(()=>{s(),Ht(),n()}).catch(()=>{s(),Ht(),t()})})}var xo={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=$n,e}}},provides(e){e.pseudoElements2svg=function(n){let{node:t=m}=n;u.searchPseudoElements&&$n(t)}}},Un=!1,ko={mixout(){return{dom:{unwatch(){Ti(),Un=!0}}}},hooks(){return{bootstrap(){Bn(It("mutationObserverCallbacks",{}))},noAuto(){fo()},watch(e){let{observeMutationsRoot:n}=e;Un?Ht():Bn(It("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},zn=e=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((t,i)=>{let s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return t.flipX=!0,t;if(o&&a==="v")return t.flipY=!0,t;if(a=parseFloat(a),isNaN(a))return t;switch(o){case"grow":t.size=t.size+a;break;case"shrink":t.size=t.size-a;break;case"left":t.x=t.x-a;break;case"right":t.x=t.x+a;break;case"up":t.y=t.y-a;break;case"down":t.y=t.y+a;break;case"rotate":t.rotate=t.rotate+a;break}return t},n)},Io={mixout(){return{parse:{transform:e=>zn(e)}}},hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-transform");return t&&(e.transform=zn(t)),e}}},provides(e){e.generateAbstractTransformGrouping=function(n){let{main:t,transform:i,containerWidth:s,iconWidth:o}=n,a={transform:"translate(".concat(s/2," 256)")},r="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(r," ").concat(l," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},f={outer:a,inner:h,path:p};return{tag:"g",attributes:d({},f.outer),children:[{tag:"g",attributes:d({},f.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:d(d({},t.icon.attributes),f.path)}]}]}}}},Ct={x:0,y:0,width:"100%",height:"100%"};function Wn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function Po(e){return e.tag==="g"?e.children:[e]}var Fo={hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-mask"),i=t?Ue(t.split(" ").map(s=>s.trim())):Yt();return i.prefix||(i.prefix=z()),e.mask=i,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(n){let{children:t,attributes:i,main:s,mask:o,maskId:a,transform:r}=n,{width:l,icon:c}=s,{width:h,icon:p}=o,f=xs({transform:r,containerWidth:h,iconWidth:l}),w={tag:"rect",attributes:y(d({},Ct),{fill:"white"})},j=c.children?{children:c.children.map(Wn)}:{},J={tag:"g",attributes:d({},f.inner),children:[Wn(d({tag:c.tag,attributes:d(d({},c.attributes),f.path)},j))]},O={tag:"g",attributes:d({},f.outer),children:[J]},I="mask-".concat(a||ge()),T="clip-".concat(a||ge()),N={tag:"mask",attributes:y(d({},Ct),{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,O]},ee={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:Po(p)},N]};return t.push(ee,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(I,")")},Ct)}),{children:t,attributes:i}}}},Bo={provides(e){let n=!1;U.matchMedia&&(n=U.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let t=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:y(d({},i),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let o=y(d({},s),{attributeName:"opacity"}),a={tag:"circle",attributes:y(d({},i),{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:y(d({},s),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:y(d({},o),{values:"1;0;1;1;0;1;"})}),t.push(a),t.push({tag:"path",attributes:y(d({},i),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:y(d({},o),{values:"1;0;0;0;0;1;"})}]}),n||t.push({tag:"path",attributes:y(d({},i),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:y(d({},o),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},Lo={hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return e.symbol=i,e}}}},Ho=[Ps,To,So,Do,Co,xo,ko,Io,Fo,Bo,Lo];Qs(Ho,{mixoutsTo:E});var Ba=E.noAuto,Go=E.config,La=E.library,jo=E.dom,Vo=E.parse,Ha=E.findIconDefinition,Ga=E.toHtml,$o=E.icon,ja=E.layer,Uo=E.text,zo=E.counter;var Di=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var Zo=["*"];var Xo=["dialog"];var Ci={animation:!0,transitionTimerDelayMs:5},ea=(()=>{class e{constructor(){this.animation=Ci.animation}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function ta(e){let{transitionDelay:n,transitionDuration:t}=window.getComputedStyle(e),i=parseFloat(n),s=parseFloat(t);return(i+s)*1e3}function Ei(e){return typeof e=="string"}function Zt(e){return e!=null}function na(e){return e&&e.then}function Mi(e){return(e||document.body).getBoundingClientRect()}function ia(e){return n=>new sn(t=>{let i=a=>e.run(()=>t.next(a)),s=a=>e.run(()=>t.error(a)),o=()=>e.run(()=>t.complete());return n.subscribe({next:i,error:s,complete:o})})}var sa=()=>{},{transitionTimerDelayMs:oa}=Ci,We=new Map,X=(e,n,t,i)=>{let s=i.context||{},o=We.get(n);if(o)switch(i.runningTransition){case"continue":return on;case"stop":e.run(()=>o.transition$.complete()),s=Object.assign(o.context,s),We.delete(n)}let a=t(n,i.animation,s)||sa;if(!i.animation||window.getComputedStyle(n).transitionProperty==="none")return e.run(()=>a()),qe(void 0).pipe(ia(e));let r=new R,l=new R,c=r.pipe(ln(!0));We.set(n,{transition$:r,complete:()=>{l.next(),l.complete()},context:s});let h=ta(n);return e.runOutsideAngular(()=>{let p=P(n,"transitionend").pipe(S(c),de(({target:w})=>w===n)),f=an(h+oa).pipe(S(c));rn(f,p,l).pipe(S(c)).subscribe(()=>{We.delete(n),e.run(()=>{a(),r.next(),r.complete()})})}),r.asObservable()};var Oi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var Ni=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var Ri=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})(),Ai=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var Zr=(()=>{let e=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,n=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(e()||n()):!1})();var aa=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function xi(e){let n=Array.from(e.querySelectorAll(aa)).filter(t=>t.tabIndex!==-1);return[n[0],n[n.length-1]]}var ra=(e,n,t,i=!1)=>{e.runOutsideAngular(()=>{let s=P(n,"focusin").pipe(S(t),Ke(o=>o.target));P(n,"keydown").pipe(S(t),de(o=>o.key==="Tab"),Xe(s)).subscribe(([o,a])=>{let[r,l]=xi(n);(a===r||a===n)&&o.shiftKey&&(l.focus(),o.preventDefault()),a===l&&!o.shiftKey&&(r.focus(),o.preventDefault())}),i&&P(n,"click").pipe(S(t),Xe(s),Ke(o=>o[1])).subscribe(o=>o.focus())})};var Xr=new Date(1882,10,12),el=new Date(2174,10,25);var tl=1e3*60*60*24;var tn=1080,la=24*tn,ca=12*tn+793,nl=29*la+ca,il=11*tn+204;var ki=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var Ii=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})(),da=(()=>{class e{constructor(){this._ngbConfig=v(ea),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ce=class{constructor(n,t,i){this.nodes=n,this.viewRef=t,this.componentRef=i}};var ua=(()=>{class e{constructor(){this._document=v(Ae)}hide(){let t=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),i=this._document.body,s=i.style,{overflow:o,paddingRight:a}=s;if(t>0){let r=parseFloat(window.getComputedStyle(i).paddingRight);s.paddingRight=`${r+t}px`}return s.overflow="hidden",()=>{t>0&&(s.paddingRight=a),s.overflow=o}}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ha=(()=>{class e{constructor(){this._nativeElement=v(we).nativeElement,this._zone=v(ve),this._injector=v(ne)}ngOnInit(){lt(()=>X(this._zone,this._nativeElement,(t,i)=>{i&&Mi(t),t.classList.add("show")},{animation:this.animation,runningTransition:"continue"}),{injector:this._injector,phase:rt.MixedReadWrite})}hide(){return X(this._zone,this._nativeElement,({classList:t})=>t.remove("show"),{animation:this.animation,runningTransition:"stop"})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=M({type:e,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(i,s){i&2&&(Ce("modal-backdrop"+(s.backdropClass?" "+s.backdropClass:"")),De("show",!s.animation)("fade",s.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[Ne],decls:0,vars:0,template:function(i,s){},encapsulation:2})}}return e})(),Je=class{update(n){}close(n){}dismiss(n){}},fa=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],pa=["animation","backdropClass"],Xt=class{_applyWindowOptions(n,t){fa.forEach(i=>{Zt(t[i])&&(n[i]=t[i])})}_applyBackdropOptions(n,t){pa.forEach(i=>{Zt(t[i])&&(n[i]=t[i])})}update(n){this._applyWindowOptions(this._windowCmptRef.instance,n),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,n)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(S(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(S(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(n,t,i,s){this._windowCmptRef=n,this._contentRef=t,this._backdropCmptRef=i,this._beforeDismiss=s,this._closed=new R,this._dismissed=new R,this._hidden=new R,n.instance.dismissEvent.subscribe(o=>{this.dismiss(o)}),this.result=new Promise((o,a)=>{this._resolve=o,this._reject=a}),this.result.then(null,()=>{})}close(n){this._windowCmptRef&&(this._closed.next(n),this._resolve(n),this._removeModalElements())}_dismiss(n){this._dismissed.next(n),this._reject(n),this._removeModalElements()}dismiss(n){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(n);else{let t=this._beforeDismiss();na(t)?t.then(i=>{i!==!1&&this._dismiss(n)},()=>{}):t!==!1&&this._dismiss(n)}}_removeModalElements(){let n=this._windowCmptRef.instance.hide(),t=this._backdropCmptRef?this._backdropCmptRef.instance.hide():qe(void 0);n.subscribe(()=>{let{nativeElement:i}=this._windowCmptRef.location;i.parentNode.removeChild(i),this._windowCmptRef.destroy(),this._contentRef?.viewRef?.destroy(),this._windowCmptRef=null,this._contentRef=null}),t.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:i}=this._backdropCmptRef.location;i.parentNode.removeChild(i),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),ye(n,t).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},en=function(e){return e[e.BACKDROP_CLICK=0]="BACKDROP_CLICK",e[e.ESC=1]="ESC",e}(en||{}),_a=(()=>{class e{constructor(){this._document=v(Ae),this._elRef=v(we),this._zone=v(ve),this._injector=v(ne),this._closed$=new R,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new it,this.shown=new R,this.hidden=new R}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":Ei(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(t){this.dismissEvent.emit(t)}ngOnInit(){this._elWithFocus=this._document.activeElement,lt(()=>this._show(),{injector:this._injector,phase:rt.MixedReadWrite})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:t}=this._elRef,i={animation:this.animation,runningTransition:"stop"},s=X(this._zone,t,()=>t.classList.remove("show"),i),o=X(this._zone,this._dialogEl.nativeElement,()=>{},i),a=ye(s,o);return a.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),a}_show(){let t={animation:this.animation,runningTransition:"continue"},i=X(this._zone,this._elRef.nativeElement,(o,a)=>{a&&Mi(o),o.classList.add("show")},t),s=X(this._zone,this._dialogEl.nativeElement,()=>{},t);ye(i,s).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:t}=this._elRef;this._zone.runOutsideAngular(()=>{P(t,"keydown").pipe(S(this._closed$),de(s=>s.key==="Escape")).subscribe(s=>{this.keyboard?requestAnimationFrame(()=>{s.defaultPrevented||this._zone.run(()=>this.dismiss(en.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let i=!1;P(this._dialogEl.nativeElement,"mousedown").pipe(S(this._closed$),dn(()=>i=!1),cn(()=>P(t,"mouseup").pipe(S(this._closed$),Ze(1))),de(({target:s})=>t===s)).subscribe(()=>{i=!0}),P(t,"click").pipe(S(this._closed$)).subscribe(({target:s})=>{t===s&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!i&&this._zone.run(()=>this.dismiss(en.BACKDROP_CLICK))),i=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:t}=this._elRef;if(!t.contains(document.activeElement)){let i=t.querySelector("[ngbAutofocus]"),s=xi(t)[0];(i||s||t).focus()}}_restoreFocus(){let t=this._document.body,i=this._elWithFocus,s;i&&i.focus&&t.contains(i)?s=i:s=t,this._zone.runOutsideAngular(()=>{setTimeout(()=>s.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&X(this._zone,this._elRef.nativeElement,({classList:t})=>(t.add("modal-static"),()=>t.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=M({type:e,selectors:[["ngb-modal-window"]],viewQuery:function(i,s){if(i&1&&fn(Xo,7),i&2){let o;pn(o=_n())&&(s._dialogEl=o.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(i,s){i&2&&(ct("aria-modal",!0)("aria-labelledby",s.ariaLabelledBy)("aria-describedby",s.ariaDescribedBy),Ce("modal d-block"+(s.windowClass?" "+s.windowClass:"")),De("fade",s.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[Ne],ngContentSelectors:Zo,decls:4,vars:2,consts:[["dialog",""],["role","document"],[1,"modal-content"]],template:function(i,s){i&1&&(ft(),Ee(0,"div",1,0)(2,"div",2),pt(3),Me()()),i&2&&Ce("modal-dialog"+(s.size?" modal-"+s.size:"")+(s.centered?" modal-dialog-centered":"")+s.fullscreenClass+(s.scrollable?" modal-dialog-scrollable":"")+(s.modalDialogClass?" "+s.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2})}}return e})(),ga=(()=>{class e{constructor(){this._applicationRef=v(gn),this._injector=v(ne),this._environmentInjector=v(et),this._document=v(Ae),this._scrollBar=v(ua),this._activeWindowCmptHasChanged=new R,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new it;let t=v(ve);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let i=this._windowCmpts[this._windowCmpts.length-1];ra(t,i.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(i.location.nativeElement)}})}_restoreScrollBar(){let t=this._scrollBarRestoreFn;t&&(this._scrollBarRestoreFn=null,t())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(t,i,s){let o=s.container instanceof HTMLElement?s.container:Zt(s.container)?this._document.querySelector(s.container):this._document.body;if(!o)throw new Error(`The specified modal container "${s.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let a=new Je;t=s.injector||t;let r=t.get(et,null)||this._environmentInjector,l=this._getContentRef(t,r,i,a,s),c=s.backdrop!==!1?this._attachBackdrop(o):void 0,h=this._attachWindowComponent(o,l.nodes),p=new Xt(h,l,c,s.beforeDismiss);return this._registerModalRef(p),this._registerWindowCmpt(h),p.hidden.pipe(Ze(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),a.close=f=>{p.close(f)},a.dismiss=f=>{p.dismiss(f)},a.update=f=>{p.update(f)},p.update(s),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),c&&c.instance&&c.changeDetectorRef.detectChanges(),h.changeDetectorRef.detectChanges(),p}get activeInstances(){return this._activeInstances}dismissAll(t){this._modalRefs.forEach(i=>i.dismiss(t))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(t){let i=Re(ha,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(i.hostView),t.appendChild(i.location.nativeElement),i}_attachWindowComponent(t,i){let s=Re(_a,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:i});return this._applicationRef.attachView(s.hostView),t.appendChild(s.location.nativeElement),s}_getContentRef(t,i,s,o,a){return s?s instanceof hn?this._createFromTemplateRef(s,o):Ei(s)?this._createFromString(s):this._createFromComponent(t,i,s,o,a):new ce([])}_createFromTemplateRef(t,i){let s={$implicit:i,close(a){i.close(a)},dismiss(a){i.dismiss(a)}},o=t.createEmbeddedView(s);return this._applicationRef.attachView(o),new ce([o.rootNodes],o)}_createFromString(t){let i=this._document.createTextNode(`${t}`);return new ce([[i]])}_createFromComponent(t,i,s,o,a){let r=ne.create({providers:[{provide:Je,useValue:o}],parent:t}),l=Re(s,{environmentInjector:i,elementInjector:r}),c=l.location.nativeElement;return a.scrollable&&c.classList.add("component-host-scrollable"),this._applicationRef.attachView(l.hostView),new ce([[c]],l.hostView,l)}_setAriaHidden(t){let i=t.parentElement;i&&t!==this._document.body&&(Array.from(i.children).forEach(s=>{s!==t&&s.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}),this._setAriaHidden(i))}_revertAriaHidden(){this._ariaHiddenValues.forEach((t,i)=>{t?i.setAttribute("aria-hidden",t):i.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(t){let i=()=>{let s=this._modalRefs.indexOf(t);s>-1&&(this._modalRefs.splice(s,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(t),this._activeInstances.emit(this._modalRefs),t.result.then(i,i)}_registerWindowCmpt(t){this._windowCmpts.push(t),this._activeWindowCmptHasChanged.next(),t.onDestroy(()=>{let i=this._windowCmpts.indexOf(t);i>-1&&(this._windowCmpts.splice(i,1),this._activeWindowCmptHasChanged.next())})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ma=(()=>{class e{constructor(){this._injector=v(ne),this._modalStack=v(ga),this._config=v(da)}open(t,i={}){let s=d(y(d({},this._config),{animation:this._config.animation}),i);return this._modalStack.open(this._injector,t,s)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(t){this._modalStack.dismissAll(t)}hasOpenModals(){return this._modalStack.hasOpenModals()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Pi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({providers:[ma]})}}return e})();var Fi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var Bi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var Li=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var Hi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var Gi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var ji=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var Vi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var $i=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var Ui=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var sl=new un("live announcer delay",{providedIn:"root",factory:()=>100});var zi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})();var Wi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({})}}return e})(),ba=[Oi,Ni,Ri,Ai,ki,Ii,Pi,Fi,Wi,Bi,Li,Hi,Gi,ji,Vi,$i,Ui,zi],Ji=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=_({imports:[ba,Oi,Ni,Ri,Ai,ki,Ii,Pi,Fi,Wi,Bi,Li,Hi,Gi,ji,Vi,$i,Ui,zi]})}}return e})();var Ye=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=g({type:e,bootstrap:[ie]});static \u0275inj=_({providers:[vn()],imports:[yn,Fe,Di,Ji]})};var nn=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=g({type:e,bootstrap:[ie]});static \u0275inj=_({imports:[Ye,wn]})};export{nn as a};
