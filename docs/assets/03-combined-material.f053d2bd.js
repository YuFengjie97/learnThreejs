import{a7 as P,f as E,a8 as y,G as B,S as z,P as G,W as j,C as H,A as W,b as k,V as A,B as D}from"./stats.module.a3b3754b.js";import{O as I}from"./OrbitControls.3858a42c.js";import{c as O}from"./SceneUtils.e707d788.js";import{d as R,g as b,h as V,c as L,f as v,o as T}from"./index.ea266fd6.js";const U={class:"viewCon"},ae=R({__name:"03-combined-material",setup(q){const{random:c,PI:F,floor:N,ceil:$,min:J,max:K,sin:Q,cos:X}=Math,f=b(),p=b();let s=window.innerWidth,i=window.innerHeight,u,l,d,a,o,M=new P,w=new E({color:623843,transparent:!0,blending:y}),m=[];V(()=>{_(),x(),C()});const n={color:16777215,rotateSpeed:.01,addCube:function(){const e=c()*3+3,t=new D(e,e,e),r=O(t,[M,w]);r.castShadow=!0,r.position.x=20-c()*40,r.position.y=20-c()*40,r.position.z=100-c()*100,m.push(r),d.add(r)},removeCube:function(){const e=m.pop();e&&d.remove(e)}},h={near:1,far:130};function x(){let e=new B({autoPlace:!1,width:300});e.domElement.style.cssText="position: fixed; top: 0; right: 0;",p.value.appendChild(e.domElement);for(let t=0;t<10;t++)n.addCube();e.addColor(n,"color").onChange(t=>{w.color.setHex(t)}),e.add(n,"rotateSpeed",0,1,.01),e.add(n,"addCube").listen(),e.add(n,"removeCube").listen(),e.add(h,"near",0,50,1).onChange(t=>{a.near=t,a.updateProjectionMatrix()}),e.add(h,"far",50,200,1).onChange(t=>{a.far=t,a.updateProjectionMatrix()})}function g(){m.forEach(e=>{e.rotation.x+=n.rotateSpeed,e.rotation.y+=n.rotateSpeed,e.rotation.z+=n.rotateSpeed})}function _(){d=new z,a=new G(75,s/i,10,130),o=new j({canvas:f.value,antialias:!0}),o.setClearColor(new H(0)),o.setSize(s,i),window.addEventListener("resize",S),d.add(new W(1e3)),u=k(),p.value.append(u.dom),l=new I(a,o.domElement),l.target=new A(0,0,0),l.object.position.set(0,3,100),l.update()}function C(){requestAnimationFrame(C),u.update(),g(),o.render(d,a)}function S(){s=window.innerWidth,i=window.innerHeight,a.aspect=s/i,a.updateProjectionMatrix(),o.setSize(s,i)}return(e,t)=>(T(),L("div",U,[v("div",{class:"canvasCon",ref_key:"canvasCon",ref:p},[v("canvas",{class:"canvas",ref_key:"canvasDom",ref:f},null,512)],512)]))}});export{ae as default};
