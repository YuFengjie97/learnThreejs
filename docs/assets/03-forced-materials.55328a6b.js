import{g as u,B as E,i as w,G as L,e as H,j as W,k,S as B,P as R,W as A,A as I,b as V,V as D}from"./stats.module.a3b3754b.js";import{O as T}from"./OrbitControls.3858a42c.js";import{d as U,g as C,h as q,c as F,f as S,o as N}from"./index.ea266fd6.js";const $={class:"viewCon"},oe=U({__name:"03-forced-materials",setup(J){const{random:r,PI:O,floor:x,ceil:K,min:Q,max:X,sin:Y,cos:Z}=Math,f=C(),h=C();let c=window.innerWidth,d=window.innerHeight,m,p,t,l,a,i;q(()=>{G(),_(),j(),o.numberOfObjects=t.children.length,M(),b()});const o={rotationSpeed:.02,numberOfObjects:0,removeCube(){const e=t.children,n=e[e.length-1];n instanceof u&&(t.remove(n),this.numberOfObjects--)},addCube(){const e=r()*3,n=new E(e,e,e),z=new w({color:r()*16777215}),s=new u(n,z);s.castShadow=!0,s.name="cube-"+t.children.length;const{width:v,height:g}=i.geometry.parameters;s.position.x=-v/2+r()*v,s.position.y=x(r()*3)+3,s.position.z=-g/2+r()*g,t.add(s),this.numberOfObjects++},outputObjects(){console.log(t.children)}};function M(){var n;let e=new L({autoPlace:!1,width:300});e.domElement.style.cssText="position: fixed; top: 0; right: 0;",(n=h.value)==null||n.appendChild(e.domElement),e.add(o,"rotationSpeed",0,.5),e.add(o,"addCube"),e.add(o,"removeCube"),e.add(o,"outputObjects"),e.add(o,"numberOfObjects").listen()}function _(){const e=new H(60,20,1,1),n=new w({color:16777215});i=new u(e,n),i.receiveShadow=!0,i.rotation.x=-.5*O,i.position.set(0,0,0),t.add(i)}function j(){const e=new W(16777215);e.position.set(-20,20,0),e.castShadow=!0;const n=new k(e);t.add(n),t.add(e)}function y(){t.traverse(function(e){e instanceof u&&e!==i&&(e.rotation.x+=o.rotationSpeed,e.rotation.y+=o.rotationSpeed,e.rotation.z+=o.rotationSpeed)})}function b(){requestAnimationFrame(b),m.update(),y(),a.render(t,l)}function G(){t=new B,t.overrideMaterial=new w({color:16777215}),l=new R(45,c/d,1,1e3),a=new A({canvas:f.value,antialias:!0}),a.setClearColor(4473924,1),a.setSize(c,d),a.shadowMap.enabled=!0,a.setPixelRatio(window.devicePixelRatio),window.addEventListener("resize",P),t.add(new I(1e3)),m=V(),h.value.append(m.dom),p=new T(l,a.domElement),p.target=new D(0,0,0),p.object.position.set(-50,20,20),p.update()}function P(){c=window.innerWidth,d=window.innerHeight,l.aspect=c/d,l.updateProjectionMatrix(),a.setSize(c,d)}return(e,n)=>(N(),F("div",$,[S("div",{class:"canvasCon",ref_key:"canvasCon",ref:h},[S("canvas",{class:"canvas",ref_key:"canvasDom",ref:f},null,512)],512)]))}});export{oe as default};
