import{s as N,aD as T,a1 as C,d as w,G,h as L,a9 as k,g as H,aE as P,S as W,C as I,P as V,W as D,A as R,a as j,b as O,V as U,aG as q,aH as F,aI as J,a8 as $,aJ as K}from"./stats.module.a3b3754b.js";import{O as Q}from"./OrbitControls.3858a42c.js";import{s as X}from"./sprite-sheet.e38bf736.js";import{d as Y,g as b,h as Z,c as ee,f as x,o as ne}from"./index.ea266fd6.js";const te={class:"viewCon"},le=Y({__name:"08-sprites",setup(ae){const h=b(),m=b();let d=window.innerWidth,r=window.innerHeight,u,g,a,l,p;const y=new N().load(X);let i;const s=new T({color:16777215,map:y,transparent:!0,opacity:.5,depthTest:!1,blending:C});s.map.offset=new w(.2*0,0),s.map.repeat=new w(1/5,1);let c;Z(()=>{_(),A(),z(),B()});const o={size:10,type:0,depthTest:!1,blending:"AdditiveBlending"},M={NoBlending:q,NormalBlending:F,AdditiveBlending:C,SubtractiveBlending:J,MultiplyBlending:$,CustomBlending:K};function _(){var n;let e=new G({autoPlace:!1,width:300});e.domElement.style.cssText="position: fixed; top: 0; right: 0;",(n=m.value)==null||n.appendChild(e.domElement),e.add(o,"size",1,15,1).onChange(t=>{i.scale.set(t,t,1)}),e.add(o,"type",[0,1,2,3,4]).onChange(t=>{s.map.offset=new w(.2*t,0)}),e.add(o,"depthTest").onChange(t=>{s.depthTest=t}),e.add(o,"blending",["NoBlending","NormalBlending","AdditiveBlending","SubtractiveBlending","MultiplyBlending","CustomBlending"]).onChange(t=>{s.blending=M[t]})}let f=.2,v=.5;function S(){c.position.y+=f;let e=20;(c.position.y>=e||c.position.y<=-e)&&(f*=-1),i.position.x+=v;let n=30;(i.position.x>=n||i.position.x<=-n)&&(v*=-1)}function z(){const e=new L(10),n=new k;c=new H(e,n),a.add(c),i=new P(s),i.scale.set(o.size,o.size,1),a.add(i)}function A(){a=new W,a.background=new I(4473924),l=new V(75,d/r,1,1e3),p=new D({canvas:h.value,antialias:!0}),p.setSize(d,r),window.addEventListener("resize",E),a.add(new R(1e3)),a.add(new j(4210752)),u=O(),m.value.append(u.dom),g=new Q(l,p.domElement),g.target=new U(0,0,0),g.object.position.set(0,0,30),g.update()}function B(){requestAnimationFrame(B),u.update(),S(),p.render(a,l)}function E(){d=window.innerWidth,r=window.innerHeight,l.aspect=d/r,l.updateProjectionMatrix(),p.setSize(d,r)}return(e,n)=>(ne(),ee("div",te,[x("div",{class:"canvasCon",ref_key:"canvasCon",ref:m},[x("canvas",{class:"canvas",ref_key:"canvasDom",ref:h},null,512)],512)]))}});export{le as default};
