import{G as A,C as M,c as I,f as b,d as S,B as R,e as V,a as D,g as O,h as T,S as U,P as q,W as F,A as N,b as $,O as J,V as K}from"./OrbitControls.863a14c5.js";import{d as Q,g as L,h as X,c as Y,f as _,o as Z}from"./index.6b0d4b2d.js";const ee={class:"viewCon"},pe=Q({__name:"01-ambient-light",setup(te){const{random:ae,PI:x,floor:ne,ceil:oe,min:se,max:ie,sin:re,cos:de}=Math,v=L(),w=L();let d=window.innerWidth,c=window.innerHeight,m,h,e,l,s,o,i,u,r,f;X(()=>{G(),P(),y(),E(),C()});const t={ambientLightColor:16777215,disableSpotlight:!1,rotateSpeed:.02,jumpSpeed:.04};function G(){var p;let a=new A({autoPlace:!1,width:300});a.domElement.style.cssText="position: fixed; top: 0; right: 0;",(p=w.value)==null||p.appendChild(a.domElement),a.addColor(t,"ambientLightColor").onChange(n=>{u.color=new M(n)}),a.add(t,"disableSpotlight").onChange(n=>{r.visible=!n,f.visible=!n}),a.add(t,"rotateSpeed",0,1,.01),a.add(t,"jumpSpeed",0,1,.01)}function y(){const a=new I(60,20,1,1),p=new b({color:13421772}),n=new S(a,p);n.rotation.x=-.5*x,n.receiveShadow=!0,e.add(n);const k=new R(4,4,4),z=new b({color:16711680,wireframe:!1});o=new S(k,z),o.position.set(-14,2,0),o.castShadow=!0,e.add(o);const B=new V(4),W=new b({color:7829503,wireframe:!1});i=new S(B,W),i.position.set(4,4,0),i.castShadow=!0,e.add(i)}function E(){u=new D(t.ambientLightColor),e.add(u),r=new O(16777215),r.position.set(-20,10,0),r.castShadow=!0,f=new T(r),e.add(f),e.add(r)}let g=0;function H(){o.rotation.x+=t.rotateSpeed,o.rotation.y+=t.rotateSpeed,o.rotation.z+=t.rotateSpeed,g+=t.jumpSpeed,i.position.x=5+10*Math.cos(g),i.position.y=2+6*Math.abs(Math.sin(g))}function C(){requestAnimationFrame(C),m.update(),H(),s.render(e,l)}function P(){e=new U,e.background=new M(4473924),l=new q(75,d/c,1,1e3),s=new F({canvas:v.value,antialias:!0}),s.setSize(d,c),s.shadowMap.enabled=!0,window.addEventListener("resize",j),e.add(new N(1e3)),m=$(),w.value.append(m.dom),h=new J(l,s.domElement),h.target=new K(0,0,0),h.object.position.set(0,20,20),h.update()}function j(){d=window.innerWidth,c=window.innerHeight,l.aspect=d/c,l.updateProjectionMatrix(),s.setSize(d,c)}return(a,p)=>(Z(),Y("div",ee,[_("div",{class:"canvasCon",ref_key:"canvasCon",ref:w},[_("canvas",{class:"canvas",ref_key:"canvasDom",ref:v},null,512)],512)]))}});export{pe as default};