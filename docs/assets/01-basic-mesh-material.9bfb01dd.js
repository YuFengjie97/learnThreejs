import{f as M,G as W,a6 as F,Y as z,D as A,e as _,g as b,B as D,h as I,j as R,k as V,S as q,P as O,W as T,A as J,a as N,b as Y,V as $}from"./stats.module.a3b3754b.js";import{O as K}from"./OrbitControls.3858a42c.js";import{d as Q,g as k,h as X,c as Z,f as S,o as ee}from"./index.ea266fd6.js";const ne={class:"viewCon"},we=Q({__name:"01-basic-mesh-material",setup(ae){const{random:te,PI:x,floor:oe,ceil:re,min:ie,max:se,sin:de,cos:ce}=Math,G=k(),C=k();let d=window.innerWidth,c=window.innerHeight,v,u,a,l,p,f,s,m,w,n=new M({color:15221651});X(()=>{B(),j(),H(),U(),y()});const r={selectMesh:"cube",color:15221651,transparent:!1,opacity:1,side:"front",wireframe:!1,wireframeLinewidth:1,wireframeLinejoin:"round",wireframeLinecap:"round"};function B(){var g;let t=new W({autoPlace:!1,width:300});t.domElement.style.cssText="position: fixed; top: 0; right: 0;",(g=C.value)==null||g.appendChild(t.domElement);const o=t.addFolder("Mesh");o.open(),o.add(r,"selectMesh",["cube","sphere","plane"]).onChange(e=>{switch(a.remove(s),a.remove(m),a.remove(w),e){case"cube":{a.add(s);break}case"sphere":{a.add(m);break}case"plane":{a.add(w);break}}}),o.addColor(r,"color").onChange(e=>{n.color.setHex(e)}),o.add(r,"side",["front","back","doublue"]).onChange(e=>{n.side=e==="front"?F:e==="back"?z:A});const h=o.addFolder("transparent");h.open(),h.add(r,"transparent").onChange(e=>{n.transparent=e,n.needsUpdate=!0}),h.add(r,"opacity",0,1,.1).onChange(e=>{n.opacity=e,n.needsUpdate=!0});const i=o.addFolder("wireframe");i.open(),i.add(r,"wireframe").onChange(e=>{n.wireframe=e}),i.add(r,"wireframeLinewidth",0,10,.1).name("lineWidth").onChange(e=>{n.wireframeLinewidth=e,n.needsUpdate=!0}),i.add(r,"wireframeLinejoin",["round","bevel","miter"]).name("lineJoin").onChange(e=>{n.wireframeLinejoin=e,n.needsUpdate=!0}),i.add(r,"wireframeLinecap",["butt","round","square"]).name("lineCap").onChange(e=>{n.wireframeLinecap=e,n.needsUpdate=!0})}let L=.02;function E(){s.rotation.y+=L,m.rotation.y+=L,w.rotation.y+=L}function H(){const t=new _(100,100,4,4),o=new M({color:4473924});f=new b(t,o),f.rotation.x=-.5*x,a.add(f);const h=new D(14,14,14),i=new I(7),g=new _(14,14);s=new b(h,n),m=new b(i,n),w=new b(g,n),s.position.set(0,10,0),m.position.set(0,10,0),w.position.set(0,10,0),a.add(s)}function U(){const t=new R(16777215,1);t.target=f,t.position.set(-50,50,50);const o=new V(t);a.add(t),a.add(o)}function j(){a=new q,l=new O(75,d/c,1,1e3),p=new T({canvas:G.value,antialias:!0}),p.setSize(d,c),window.addEventListener("resize",P),a.add(new J(1e3)),a.add(new N(4210752)),v=Y(),C.value.append(v.dom),u=new K(l,p.domElement),u.target=new $(0,0,0),u.object.position.set(40,40,40),u.update()}function y(){requestAnimationFrame(y),v.update(),E(),p.render(a,l)}function P(){d=window.innerWidth,c=window.innerHeight,l.aspect=d/c,l.updateProjectionMatrix(),p.setSize(d,c)}return(t,o)=>(ee(),Z("div",ne,[S("div",{class:"canvasCon",ref_key:"canvasCon",ref:C},[S("canvas",{class:"canvas",ref_key:"canvasDom",ref:G},null,512)],512)]))}});export{we as default};