import{G as B,e as D,i as x,D as F,g as b,B as H,j as R,k as W,S as T,P as j,W as A,A as I,b as V,V as O}from"./stats.module.a3b3754b.js";import{O as U}from"./OrbitControls.3858a42c.js";import{d as q,g as _,h as N,c as $,f as M,o as J}from"./index.ea266fd6.js";const K={class:"viewCon"},ce=q({__name:"06-mesh-properties",setup(Q){const{random:ee,PI:S,floor:te,ceil:ne,min:oe,max:ae,sin:se,cos:ie}=Math,g=_(),m=_();let c=window.innerWidth,p=window.innerHeight,f,u,d,h,r,w,t;N(()=>{z(),Y(),Z(),X(),v()});const n={scaleX:1,scaleY:1,scaleZ:1,positionX:0,positionY:4,positionZ:0,rotationX:0,rotationY:0,rotationZ:0,translateX:0,translateY:0,translateZ:0,handleTranslate:()=>{},visible:!0};function X(){var C;let o=new B({autoPlace:!1,width:300});o.domElement.style.cssText="position: fixed; top: 0; right: 0;",(C=m.value)==null||C.appendChild(o.domElement),o.add(n,"visible").onChange(e=>{t.visible=e});const s=o.addFolder("scale");s.open(),s.add(n,"scaleX",0,5,.1).onChange(e=>{t.scale.x=e}),s.add(n,"scaleY",0,5,.1).onChange(e=>{t.scale.y=e}),s.add(n,"scaleZ",0,5,.1).onChange(e=>{t.scale.z=e});const i=o.addFolder("position");i.open(),i.add(n,"positionX",-10,10,.1).onChange(e=>{t.position.x=e}),i.add(n,"positionY",-10,10,.1).onChange(e=>{t.position.y=e}),i.add(n,"positionZ",-10,10,.1).onChange(e=>{t.position.z=e});const a=o.addFolder("rotate");a.open(),a.add(n,"rotationX",0,5,.1).onChange(e=>{t.rotation.x=e}),a.add(n,"rotationY",0,5,.1).onChange(e=>{t.rotation.y=e}),a.add(n,"rotationZ",0,5,.1).onChange(e=>{t.rotation.z=e});const l=o.addFolder("translate");l.open(),l.add(n,"translateX",-10,10,.1),l.add(n,"translateY",-10,10,.1),l.add(n,"translateZ",-10,10,.1),l.add(n,"handleTranslate").onChange(e=>{const{translateX:G,translateY:L,translateZ:P}=n;t.translateX(G),t.translateY(L),t.translateZ(P),n.positionX=t.position.x,n.positionY=t.position.y,n.positionZ=t.position.z,i.__controllers.forEach(k=>k.updateDisplay())})}function Y(){const o=new D(60,40,1,1),s=new x({color:16777215,side:F});w=new b(o,s),w.receiveShadow=!0,w.rotation.x=-.5*S,w.position.set(0,0,0),d.add(w);const i=new H(5,8,3),a=new x({color:623843});t=new b(i,a),t.position.set(0,4,0),d.add(t)}function Z(){y(-20,20,-0)}function y(o,s,i){const a=new R(16777215);a.position.set(o,s,i),a.castShadow=!0;const l=new W(a);d.add(l),d.add(a)}function v(){requestAnimationFrame(v),f.update(),r.render(d,h)}function z(){d=new T,h=new j(45,c/p,1,1e3),r=new A({canvas:g.value,antialias:!0}),r.setClearColor(4473924,1),r.setSize(c,p),r.shadowMap.enabled=!0,r.setPixelRatio(window.devicePixelRatio),window.addEventListener("resize",E),d.add(new I(1e3)),f=V(),m.value.append(f.dom),u=new U(h,r.domElement),u.target=new O(0,0,0),u.object.position.set(-50,20,20),u.update()}function E(){c=window.innerWidth,p=window.innerHeight,h.aspect=c/p,h.updateProjectionMatrix(),r.setSize(c,p)}return(o,s)=>(J(),$("div",K,[M("div",{class:"canvasCon",ref_key:"canvasCon",ref:m},[M("canvas",{class:"canvas",ref_key:"canvasDom",ref:g},null,512)],512)]))}});export{ce as default};
