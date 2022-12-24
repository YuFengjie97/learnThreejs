import{aA as AA,aB as gA,m as v,K as P,a_ as IA,V as R,ay as X,n as CA,G as eA,C as k,ap as tA,B as nA,aa as V,g as W,H as oA,o as sA,S as iA,P as rA,W as aA,A as cA,a as lA,b as wA}from"./stats.module.c456474f.js";import{O as dA}from"./OrbitControls.ff4b382f.js";import{d as MA,g as H,h as uA,c as pA,f as F,o as mA,_ as DA}from"./index.b9f501be.js";class TA extends AA{constructor(a){super(a)}load(a,o,m,w){const s=this,u=new gA(s.manager);u.setPath(s.path),u.setRequestHeader(s.requestHeader),u.setWithCredentials(s.withCredentials),u.load(a,function(c){try{o(s.parse(c))}catch(e){w?w(e):console.error(e),s.manager.itemError(a)}},m,w)}parse(a){function o(A){return A.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function m(A){return A.charAt(0).toUpperCase()+A.slice(1).toLowerCase()}function w(A,g){return"s"+Math.min(A,g)+"e"+Math.max(A,g)}function s(A,g,I,C){const n=parseInt(d[C].slice(A,A+g));if(n){const M=w(I,n);D[M]===void 0&&(p.push([I-1,n-1,1]),D[M]=p.length-1)}}function u(){const A={geometryAtoms:new v,geometryBonds:new v,json:{atoms:e}},g=A.geometryAtoms,I=A.geometryBonds,C=[],n=[],M=[];for(let l=0,h=e.length;l<h;l++){const t=e[l],T=t[0],j=t[1],E=t[2];C.push(T,j,E);const f=t[3][0]/255,i=t[3][1]/255,S=t[3][2]/255;n.push(f,i,S)}for(let l=0,h=p.length;l<h;l++){const t=p[l],T=t[0],j=t[1],E=L[T],f=L[j];let i=E[0],S=E[1],y=E[2];M.push(i,S,y),i=f[0],S=f[1],y=f[2],M.push(i,S,y)}return g.setAttribute("position",new P(C,3)),g.setAttribute("color",new P(n,3)),I.setAttribute("position",new P(M,3)),A}const c={h:[255,255,255],he:[217,255,255],li:[204,128,255],be:[194,255,0],b:[255,181,181],c:[144,144,144],n:[48,80,248],o:[255,13,13],f:[144,224,80],ne:[179,227,245],na:[171,92,242],mg:[138,255,0],al:[191,166,166],si:[240,200,160],p:[255,128,0],s:[255,255,48],cl:[31,240,31],ar:[128,209,227],k:[143,64,212],ca:[61,255,0],sc:[230,230,230],ti:[191,194,199],v:[166,166,171],cr:[138,153,199],mn:[156,122,199],fe:[224,102,51],co:[240,144,160],ni:[80,208,80],cu:[200,128,51],zn:[125,128,176],ga:[194,143,143],ge:[102,143,143],as:[189,128,227],se:[255,161,0],br:[166,41,41],kr:[92,184,209],rb:[112,46,176],sr:[0,255,0],y:[148,255,255],zr:[148,224,224],nb:[115,194,201],mo:[84,181,181],tc:[59,158,158],ru:[36,143,143],rh:[10,125,140],pd:[0,105,133],ag:[192,192,192],cd:[255,217,143],in:[166,117,115],sn:[102,128,128],sb:[158,99,181],te:[212,122,0],i:[148,0,148],xe:[66,158,176],cs:[87,23,143],ba:[0,201,0],la:[112,212,255],ce:[255,255,199],pr:[217,255,199],nd:[199,255,199],pm:[163,255,199],sm:[143,255,199],eu:[97,255,199],gd:[69,255,199],tb:[48,255,199],dy:[31,255,199],ho:[0,255,156],er:[0,230,117],tm:[0,212,82],yb:[0,191,56],lu:[0,171,36],hf:[77,194,255],ta:[77,166,255],w:[33,148,214],re:[38,125,171],os:[38,102,150],ir:[23,84,135],pt:[208,208,224],au:[255,209,35],hg:[184,184,208],tl:[166,84,77],pb:[87,89,97],bi:[158,79,181],po:[171,92,0],at:[117,79,69],rn:[66,130,150],fr:[66,0,102],ra:[0,125,0],ac:[112,171,250],th:[0,186,255],pa:[0,161,255],u:[0,143,255],np:[0,128,255],pu:[0,107,255],am:[84,92,242],cm:[120,92,227],bk:[138,79,227],cf:[161,54,212],es:[179,31,212],fm:[179,31,186],md:[179,13,166],no:[189,13,135],lr:[199,0,102],rf:[204,0,89],db:[209,0,79],sg:[217,0,69],bh:[224,0,56],hs:[230,0,46],mt:[235,0,38],ds:[235,0,38],rg:[235,0,38],cn:[235,0,38],uut:[235,0,38],uuq:[235,0,38],uup:[235,0,38],uuh:[235,0,38],uus:[235,0,38],uuo:[235,0,38]},e=[],p=[],D={},L={},d=a.split(`
`);for(let A=0,g=d.length;A<g;A++)if(d[A].slice(0,4)==="ATOM"||d[A].slice(0,6)==="HETATM"){const I=parseFloat(d[A].slice(30,37)),C=parseFloat(d[A].slice(38,45)),n=parseFloat(d[A].slice(46,53)),M=parseInt(d[A].slice(6,11))-1;let l=o(d[A].slice(76,78)).toLowerCase();l===""&&(l=o(d[A].slice(12,14)).toLowerCase());const h=[I,C,n,c[l],m(l)];e.push(h),L[M]=h}else if(d[A].slice(0,6)==="CONECT"){const I=parseInt(d[A].slice(6,11));s(11,5,I,A),s(16,5,I,A),s(21,5,I,A),s(26,5,I,A)}return u()}}class LA extends IA{constructor(a=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=a,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(o){o.element instanceof Element&&o.element.parentNode!==null&&o.element.parentNode.removeChild(o.element)})})}copy(a,o){return super.copy(a,o),this.element=a.element.cloneNode(!0),this}}const K=new R,Y=new X,G=new X,q=new R,Z=new R;class SA{constructor(a={}){const o=this;let m,w,s,u;const c={objects:new WeakMap},e=a.element!==void 0?a.element:document.createElement("div");e.style.overflow="hidden",this.domElement=e,this.getSize=function(){return{width:m,height:w}},this.render=function(A,g){A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Y.copy(g.matrixWorldInverse),G.multiplyMatrices(g.projectionMatrix,Y),p(A,A,g),d(A)},this.setSize=function(A,g){m=A,w=g,s=m/2,u=w/2,e.style.width=A+"px",e.style.height=g+"px"};function p(A,g,I){if(A.isCSS2DObject){K.setFromMatrixPosition(A.matrixWorld),K.applyMatrix4(G);const C=A.visible===!0&&K.z>=-1&&K.z<=1&&A.layers.test(I.layers)===!0;if(A.element.style.display=C===!0?"":"none",C===!0){A.onBeforeRender(o,g,I);const M=A.element;M.style.transform="translate(-50%,-50%) translate("+(K.x*s+s)+"px,"+(-K.y*u+u)+"px)",M.parentNode!==e&&e.appendChild(M),A.onAfterRender(o,g,I)}const n={distanceToCameraSquared:D(I,A)};c.objects.set(A,n)}for(let C=0,n=A.children.length;C<n;C++)p(A.children[C],g,I)}function D(A,g){return q.setFromMatrixPosition(A.matrixWorld),Z.setFromMatrixPosition(g.matrixWorld),q.distanceToSquared(Z)}function L(A){const g=[];return A.traverse(function(I){I.isCSS2DObject&&g.push(I)}),g}function d(A){const g=L(A).sort(function(C,n){if(C.renderOrder!==n.renderOrder)return n.renderOrder-C.renderOrder;const M=c.objects.get(C).distanceToCameraSquared,l=c.objects.get(n).distanceToCameraSquared;return M-l}),I=g.length;for(let C=0,n=g.length;C<n;C++)g[C].element.style.zIndex=I-C}}}const hA="data:application/octet-stream;base64,SEVBREVSICAgIE5PTkFNRSAyMi1BcHItMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgIDEKVElUTEUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgIDIKQVVUSE9SICAgIENoZW1pY2FsIFN0cnVjdHVyZSBTZXJ2aWNlcyBhdCBodHRwOi8vY2FjdHVzLm5jaS5uaWguZ292ICAgICAgTk9ORSAgIDMKUkVWREFUICAgMSAgMjItQXByLTEwICAgICAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgIDQKQVRPTSAgICAgIDEgIEMgICAgICAgICAgIDAgICAgICAtMi41NjEgICAxLjI1MSAgLTAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBDKzAKQVRPTSAgICAgIDIgIEMgICAgICAgICAgIDAgICAgICAtMy4yNjEgIC0xLjE2MSAgLTAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBDKzAKQVRPTSAgICAgIDMgIEMgICAgICAgICAgIDAgICAgICAgMS41MzQgICAyLjYyOSAgIDAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBDKzAKQVRPTSAgICAgIDQgIEMgICAgICAgICAgIDAgICAgICAgMi4yNDcgIC0yLjE3NiAgLTAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBDKzAKQVRPTSAgICAgIDUgIE8gICAgICAgICAgIDAgICAgICAtMC40MzggIC0yLjQyOCAgIDAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBPKzAKQVRPTSAgICAgIDYgIE8gICAgICAgICAgIDAgICAgICAgMi45OTQgICAwLjM4NCAgIDAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBPKzAKQVRPTSAgICAgIDcgIEMgICAgICAgICAgIDAgICAgICAtMC4wMTYgIC0xLjI4NSAgLTAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBDKzAKQVRPTSAgICAgIDggIEMgICAgICAgICAgIDAgICAgICAgMS43OTEgICAwLjIwOCAgIDAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBDKzAKQVRPTSAgICAgIDkgIEMgICAgICAgICAgIDAgICAgICAtMC45MTEgIC0wLjE5NCAgLTAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBDKzAKQVRPTSAgICAgMTAgIEMgICAgICAgICAgIDAgICAgICAtMC40MDMgICAxLjA5OSAgLTAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBDKzAKQVRPTSAgICAgMTEgIE4gICAgICAgICAgIDAgICAgICAtMS40NDUgICAxLjkzNCAgLTAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBOKzAKQVRPTSAgICAgMTIgIE4gICAgICAgICAgIDAgICAgICAgMC45NzEgICAxLjI3NyAgLTAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBOKzAKQVRPTSAgICAgMTMgIE4gICAgICAgICAgIDAgICAgICAgMS4zMTIgIC0xLjA0OCAgLTAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBOKzAKQVRPTSAgICAgMTQgIE4gICAgICAgICAgIDAgICAgICAtMi4yODYgIC0wLjA2OCAgIDAuMDAwICAwLjAwICAwLjAwICAgICAgICAgICBOKzAKQVRPTSAgICAgMTUgIEggICAgICAgICAgIDAgICAgICAtMy41NTIgICAxLjY4MCAgIDAuMDA0ICAwLjAwICAwLjAwICAgICAgICAgICBIKzAKQVRPTSAgICAgMTYgIEggICAgICAgICAgIDAgICAgICAtMy41MDMgIC0xLjQzMyAgIDEuMDI4ICAwLjAwICAwLjAwICAgICAgICAgICBIKzAKQVRPTSAgICAgMTcgIEggICAgICAgICAgIDAgICAgICAtNC4xNjggIC0wLjg0MCAgLTAuNTE0ICAwLjAwICAwLjAwICAgICAgICAgICBIKzAKQVRPTSAgICAgMTggIEggICAgICAgICAgIDAgICAgICAtMi44MzkgIC0yLjAyNSAgLTAuNTE0ICAwLjAwICAwLjAwICAgICAgICAgICBIKzAKQVRPTSAgICAgMTkgIEggICAgICAgICAgIDAgICAgICAgMS42NzMgICAyLjk2NSAgIDEuMDI4ICAwLjAwICAwLjAwICAgICAgICAgICBIKzAKQVRPTSAgICAgMjAgIEggICAgICAgICAgIDAgICAgICAgMi40OTUgICAyLjYyMyAgLTAuNTE0ICAwLjAwICAwLjAwICAgICAgICAgICBIKzAKQVRPTSAgICAgMjEgIEggICAgICAgICAgIDAgICAgICAgMC44NTEgICAzLjMwNyAgLTAuNTE0ICAwLjAwICAwLjAwICAgICAgICAgICBIKzAKQVRPTSAgICAgMjIgIEggICAgICAgICAgIDAgICAgICAgMi40NzggIC0yLjQ1NiAgLTEuMDI4ICAwLjAwICAwLjAwICAgICAgICAgICBIKzAKQVRPTSAgICAgMjMgIEggICAgICAgICAgIDAgICAgICAgMy4xNjQgIC0xLjg4OCAgIDAuNTEzICAwLjAwICAwLjAwICAgICAgICAgICBIKzAKQVRPTSAgICAgMjQgIEggICAgICAgICAgIDAgICAgICAgMS43OTMgIC0zLjAyNCAgIDAuNTE0ICAwLjAwICAwLjAwICAgICAgICAgICBIKzAKQ09ORUNUICAgIDEgICAxNCAgIDExICAgMTUgICAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgMjkKQ09ORUNUICAgIDIgICAxNCAgIDE2ICAgMTcgICAxOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgMzAKQ09ORUNUICAgIDMgICAxMiAgIDE5ICAgMjAgICAyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgMzEKQ09ORUNUICAgIDQgICAxMyAgIDIyICAgMjMgICAyNCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgMzIKQ09ORUNUICAgIDUgICAgNyAgICAwICAgIDAgICAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgMzMKQ09ORUNUICAgIDYgICAgOCAgICAwICAgIDAgICAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgMzQKQ09ORUNUICAgIDcgICAgOSAgIDEzICAgIDUgICAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgMzUKQ09ORUNUICAgIDggICAxMiAgICA2ICAgMTMgICAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgMzYKQ09ORUNUICAgIDkgICAxMCAgICA3ICAgMTQgICAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgMzcKQ09ORUNUICAgMTAgICAgOSAgIDEyICAgMTEgICAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgMzgKQ09ORUNUICAgMTEgICAxMCAgICAxICAgIDAgICAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgMzkKQ09ORUNUICAgMTIgICAxMCAgICA4ICAgIDMgICAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgNDAKQ09ORUNUICAgMTMgICAgNyAgICA0ICAgIDggICAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgNDEKQ09ORUNUICAgMTQgICAgOSAgICAxICAgIDIgICAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgNDIKRU5EICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9ORSAgNDMKCg==",yA={class:"viewCon"},jA=MA({__name:"12-load-pdb",setup(U){const a=H(),o=H();let m=window.innerWidth,w=window.innerHeight,s,u,c,e,p,D,L=new CA;uA(async()=>{d(),M(),n(),await C(),l()});function d(){var T;let t=new eA({autoPlace:!1,width:300});t.domElement.style.cssText="position: fixed; top: 0; right: 0;",(T=o.value)==null||T.appendChild(t.domElement)}function A(){L.rotation.y+=.01}const g=new TA;function I(t){return new Promise((T,j)=>{g.load(t,T)})}async function C(){c.add(L);const{geometryAtoms:j,geometryBonds:E,json:f}=await I(hA);let i=j.getAttribute("position");const S=j.getAttribute("color"),y=new R,Q=new k,$=new tA(1,3),J=new nA(1,1,1);for(let r=0;r<i.count;r++){y.x=i.getX(r),y.y=i.getY(r),y.z=i.getZ(r),Q.r=S.getX(r),Q.g=S.getY(r),Q.b=S.getZ(r);const z=new V({color:Q}),N=new W($,z);N.position.copy(y),N.position.multiplyScalar(50),N.scale.multiplyScalar(10),L.add(N);const b=f.atoms[r],B=document.createElement("div");B.style.cssText=`
      color: rgb(${b[3][0]},${b[3][1]},${b[3][2]});
      text-shadow: -1px 1px 1px rgb(0,0,0);
      margin-left: 25px;
      font-size: 20px;`,B.textContent=b[4];const _=new LA(B);_.position.copy(N.position),L.add(_)}i=E.getAttribute("position");const O=new R,x=new R;for(let r=0;r<i.count;r+=2){O.x=i.getX(r),O.y=i.getY(r),O.z=i.getZ(r),x.x=i.getX(r+1),x.y=i.getY(r+1),x.z=i.getZ(r+1),O.multiplyScalar(50),x.multiplyScalar(50);const z=new W(J,new V({color:16777215}));z.position.copy(O),z.position.lerp(x,.5),z.scale.set(5,5,O.distanceTo(x)),z.lookAt(x),L.add(z)}}function n(){const t=new oA(16777215,0,1);c.add(t);const T=new sA(16711680,2);T.position.set(50,50,50),c.add(T)}function M(){var t;c=new iA,c.background=new k(4473924),e=new rA(75,m/w,1,1e3),p=new aA({canvas:a.value,antialias:!0}),p.setSize(m,w),p.shadowMap.enabled=!0,p.setPixelRatio(window.devicePixelRatio),D=new SA,D.setSize(window.innerWidth,window.innerHeight),D.domElement.style.position="absolute",D.domElement.style.top="0px",D.domElement.style.pointerEvents="none",(t=o.value)==null||t.append(D.domElement),c.add(new cA(1e3)),c.add(new lA(4210752)),s=wA(),o.value.append(s.dom),u=new dA(e,p.domElement),u.target=new R(0,0,0),u.object.position.set(0,0,400),u.update()}function l(){requestAnimationFrame(l),s.update(),A(),p.render(c,e),D.render(c,e)}window.addEventListener("resize",h);function h(){m=window.innerWidth,w=window.innerHeight,e.aspect=m/w,e.updateProjectionMatrix(),p.setSize(m,w),D.setSize(m,w)}return(t,T)=>(mA(),pA("div",yA,[F("div",{class:"canvasCon",ref_key:"canvasCon",ref:o},[F("canvas",{class:"canvas",ref_key:"canvasDom",ref:a},null,512)],512)]))}});const zA=DA(jA,[["__scopeId","data-v-890baa03"]]);export{zA as default};
