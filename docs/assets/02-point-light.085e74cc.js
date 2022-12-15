import{G as U,C as L,c as N,f as g,D as $,d as f,B as J,e as E,a as K,m as Q,n as X,S as Y,P as Z,W as ee,A as te,b as ne,O as oe,V as ae}from"./OrbitControls.863a14c5.js";import{d as ie,g as H,h as se,c as re,f as j,o as de}from"./index.6b0d4b2d.js";const ce={class:"viewCon"},Se=ie({__name:"02-point-light",setup(le){const{random:pe,PI:x,floor:he,ceil:we,min:me,max:ue,sin:k,cos:z,sqrt:ge}=Math,_=H(),C=H();let l=window.innerWidth,p=window.innerHeight,S,u,o,h,d,r,c,w,M,i,G;se(()=>{B(),T(),A(),D(),P()});const s={ambientLightColor:16777215,disableSpotlight:!1,rotateSpeed:.02,jumpSpeed:.04},m={color:623843,intensity:2,distance:200,decay:1};function B(){var a;let n=new U({autoPlace:!1,width:300});n.domElement.style.cssText="position: fixed; top: 0; right: 0;",(a=C.value)==null||a.appendChild(n.domElement),n.addColor(s,"ambientLightColor").onChange(e=>{M.color=new L(e)}),n.add(s,"rotateSpeed",0,1,.01),n.add(s,"jumpSpeed",0,1,.01);const t=n.addFolder("pointLight");t.open(),t.addColor(m,"color").onChange(e=>{i.color=new L(e)}),t.add(m,"intensity",0,4,.1).onChange(e=>{i.intensity=e}),t.add(m,"distance",0,400,1).onChange(e=>{i.distance=e}),t.add(m,"decay",0,2,.1).onChange(e=>{i.decay=e})}function W(n=30){let t=0;return function(){t+=s.rotateSpeed,t>=2*x&&(t=0);let a=k(t),e=z(t),y=n*a/(1+e*e),v=n*a*e/(1+e*e);return{x:y,y:v}}}function A(){const n=new N(60,40,1,1),t=new g({color:6516338,side:$}),a=new f(n,t);a.rotation.x=-.5*x,a.receiveShadow=!0,o.add(a);const e=new J(4,4,4),y=new g({color:16711680,wireframe:!1});r=new f(e,y),r.position.set(-14,2,0),r.castShadow=!0,o.add(r);const v=new E(4),q=new g({color:7829503,wireframe:!1});c=new f(v,q),c.position.set(4,4,0),c.castShadow=!0,o.add(c);const F=new E(1),O=new g({color:16632686});w=new f(F,O),w.position.set(3,0,3),o.add(w)}function D(){M=new K(s.ambientLightColor),o.add(M);const{color:n,intensity:t,distance:a,decay:e}=m;i=new Q(n,t,a,e),i.castShadow=!0,G=new X(i,4),o.add(i),o.add(G)}let b=0,I=W();function R(){r.rotation.x+=s.rotateSpeed,r.rotation.y+=s.rotateSpeed,r.rotation.z+=s.rotateSpeed,b+=s.jumpSpeed,c.position.x=5+10*Math.cos(b),c.position.y=2+6*Math.abs(Math.sin(b));let{x:n,y:t}=I();w.position.set(n,4,t),i.position.copy(w.position)}function P(){requestAnimationFrame(P),S.update(),R(),d.render(o,h)}function T(){o=new Y,o.background=new L(4473924),h=new Z(75,l/p,1,1e3),d=new ee({canvas:_.value,antialias:!0}),d.setSize(l,p),d.shadowMap.enabled=!0,window.addEventListener("resize",V),o.add(new te(1e3)),S=ne(),C.value.append(S.dom),u=new oe(h,d.domElement),u.target=new ae(0,0,0),u.object.position.set(-30,20,20),u.update()}function V(){l=window.innerWidth,p=window.innerHeight,h.aspect=l/p,h.updateProjectionMatrix(),d.setSize(l,p)}return(n,t)=>(de(),re("div",ce,[j("div",{class:"canvasCon",ref_key:"canvasCon",ref:C},[j("canvas",{class:"canvas",ref_key:"canvasDom",ref:_},null,512)],512)]))}});export{Se as default};
