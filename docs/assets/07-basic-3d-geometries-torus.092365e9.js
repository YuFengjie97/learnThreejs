import{G as P,ai as W,a9 as z,f as H,S as j,C as A,P as I,W as N,A as O,b as R,V as T}from"./stats.module.a3b3754b.js";import{O as V}from"./OrbitControls.3858a42c.js";import{c as D}from"./SceneUtils.e707d788.js";import{d as L,g,h as U,c as q,f as v,o as F}from"./index.ea266fd6.js";const $={class:"viewCon"},re=L({__name:"07-basic-3d-geometries-torus",setup(J){const{random:K,PI:w,floor:Q,ceil:X,min:Y,max:Z,sin:ee,cos:ae}=Math,f=g(),m=g();let n=window.innerWidth,s=window.innerHeight,u,d,a,o,r,l;U(()=>{S(),p(),C(),h()});const t={radius:10,tube:10,radiusSegments:8,tubularSegments:6,arc:w*2};function C(){var c;let e=new P({autoPlace:!1,width:300});e.domElement.style.cssText="position: fixed; top: 0; right: 0;",(c=m.value)==null||c.appendChild(e.domElement),e.add(t,"radius",0,40,1).onChange(()=>i()),e.add(t,"tube",0,40,1).onChange(()=>i()),e.add(t,"radiusSegments",0,40,1).onChange(()=>i()),e.add(t,"tubularSegments",0,40,1).onChange(()=>i()),e.add(t,"arc",0,w*2,.01).onChange(()=>i())}let b=0;function _(){l.rotation.y=b+=.01}function p(){const{radius:e,tube:c,radiusSegments:x,tubularSegments:E,arc:k}=t,y=new W(e,c,x,E,k),B=new z,G=new H({wireframe:!0});l=D(y,[B,G]),a.add(l)}function i(){a.remove(l),p()}function S(){a=new j,a.background=new A(16777215),o=new I(75,n/s,1,1e3),r=new N({canvas:f.value,antialias:!0}),r.setSize(n,s),window.addEventListener("resize",M),a.add(new O(1e3)),u=R(),m.value.append(u.dom),d=new V(o,r.domElement),d.target=new T(0,0,0),d.object.position.set(0,30,50),d.update()}function h(){requestAnimationFrame(h),u.update(),_(),r.render(a,o)}function M(){n=window.innerWidth,s=window.innerHeight,o.aspect=n/s,o.updateProjectionMatrix(),r.setSize(n,s)}return(e,c)=>(F(),q("div",$,[v("div",{class:"canvasCon",ref_key:"canvasCon",ref:m},[v("canvas",{class:"canvas",ref_key:"canvasDom",ref:f},null,512)],512)]))}});export{re as default};
