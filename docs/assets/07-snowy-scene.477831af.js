import{m as y,s as O,G as L,l as b,at as z,C as V,a1 as H,au as Q,S as K,P as j,W as Z,A as W,a as q,b as J}from"./stats.module.a3b3754b.js";import{d as _,g as R,h as $,c as AA,f as S,o as eA}from"./index.ea266fd6.js";const vA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABcVBMVEUAAAD////+/v4BAQHIyMghISECAgJ0dHR6enre3t4EBAQDAwPX19fi4uKmpqaAgIDQ0NA7OzsGBgYRERG1tbWVlZXV1dVzc3OCgoJmZmb39/cWFhZlZWU/Pz+xsbGFhYWOjo6KiopsbGx7e3uYmJhgYGCNjY0PDw8tLS0oKChbW1txcXEXFxfExMTS0tL9/f3s7OyoqKirq6va2tpNTU3t7e1/f38FBQWtra1MTExFRUWjo6MjIyNUVFTMzMzJycltbW3h4eEeHh5CQkLKysp+fn53d3cyMjLl5eX5+fm+vr4vLy/R0dELCwvY2NgJCQlfX19paWk5OTkAAAD///8BAQECAgIMDAwmJib+/v7f399qampXV1cODg79/f3Nzc3AwMBra2u6urqwsLAGBgb09PSKiooWFhYZGRnExMQ3NzfX19eampqQkJBkZGSOjo7o6OhoaGgjIyOcnJwEBAT6+vp5eXni4uJmZmYDAwNdXV0Lv2DMAAAAU3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/kc3SeAAAAFISURBVHhetZPFkuswFET72g4zDDMzMzPje5KDMMzM8PXj8caJ7UxWOVp0laoXqqN7URimkj/B1FaeLEJBBmRdQXuU/Jv1DUwhoj0yG5sN8PYANRUwx1JahepyYKTTxIPoUuLugZX4WPLt1OhBRus50CYxyZ+iLuCyDBGdh+BxLVB3VklcAtY+miDrClY26m70cBJ4GM3+NEQTDy1EcaIMkdvoIdreEbt4fuRcEOKcH6Rjlu5ojoclcoR7iQQFoj4i6qcBZCGqMag01DM0rF7meHBaGbtKJDhRhvMX9uoc+9LPw/f4BCa5QHxq2jNj/E2L9AlgltMcn0dw4clQWAwxK7wlhwKOlgGcrEA2eli1I7UOthFyQQ6YzMP1DWO3m2D3yZyh1bBvAds+YGd3Dxo6F459AP/+Q0M3cu+Bv/dCLP5eGLPw8hbkB8nyeaUUhyruAAAAAElFTkSuQmCC",tA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACW1BMVEUAAAD///8CAgIPDw8BAQF1dXVsbGwLCwujo6NeXl43NzesrKzPz8+EhIQSEhIDAwNpaWnFxcXo6OhbW1vf398VFRU/Pz+YmJiXl5e7u7uUlJTi4uI2Njbn5+ccHBzQ0NApKSkwMDBSUlKDg4MeHh65ubmlpaVQUFB/f3+dnZ04ODgFBQUICAgtLS1XV1eqqqpRUVHd3d2Li4tOTk6GhobZ2dn8/Pz9/f14eHhaWlq3t7cHBweoqKgMDAzX19c7OztfX19FRUW+vr7s7OwvLy8KCgohISF5eXnU1NR6enqRkZF2dnbAwMB9fX1jY2Ourq6Ojo7g4OAQEBD09PSwsLANDQ0ZGRnIyMjS0tK4uLhdXV1KSkrl5eVnZ2fW1tZvb29NTU2FhYXw8PBUVFQUFBRAQEAuLi49PT3z8/PHx8cRERGnp6fExMTY2Nj39/cjIyNGRkbMzMxcXFyBgYGenp68vLyQkJC0tLQrKysJCQkbGxsODg5gYGCampp7e3s6Ojr5+fnOzs6/v78XFxdPT0/GxsampqbT09MgICAGBga2trYlJSU5OTm1tbWkpKQyMjKgoKDKyspwcHAkJCQYGBiSkpIAAAABAQERERE4ODhZWVkbGxtycnJlZWVTU1MUFBRISEiAgIBEREShoaEzMzNqamqXl5cmJibBwcHFxcWOjo5NTU0WFhYJCQkxMTGWlpYtLS2ZmZkvLy80NDSHh4fd3d1oaGgCAgILCwtUVFSUlJTDw8NiYmJYWFjGxsY7OzvExMRKSkoTExOKioqQkJCwsLC1tbU9PT3m5uZ5kJL/AAAAlnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v6TC5kUAAAB5klEQVR4XqWTU5MkURSE81ZV0zbGto21bdu2bfP0GEvbNn7WRk/09lRXd0w/7PeQFRmnHu7NmwcACGEIkPrIl/okjk8MESikFFIQST3EcBgIxXA1FDwHKIYCECCC+jRvhJaaZgH6ss8w5ogG9O/UzebWgut56NS2VDNd+BYiJQUyfg27W4THqa8b0idRMDJCWGVjk15ukm/JzVK9HaQqyYEgzWHIGH9jXYYDKeWDK4qVPGKZnW3xsSqoKxdp5dKgOHr29KbRd2v0nfvUMeU20NL27kl0UGkjR3lcQGaqTGkDxrnSx6f1h0Gon0aECRNvQGauuAryTi588DApeWrkNRdMn2Ga6QiwL845c0vmzb9XzEwLNR7r4sgPS+xLS5ctX7Hy0Srl6jVr5S/WmauK1m+Q+8V96P5YtlFNcDOWBdpcbpP0QUC+M9sOzqhJ2boN4LfXuHdE9yFIRLa695Xf6fefzPadu7p6rxEX3Yfde/aqAmwf9rMD1oM8wBkgRkD1ofzDJnYEyqPWY8fdQEwfTpysdz4/ZYHrtOyV13Mmpg9BMjh0b8724NyH85+SS71x+nDhouGr5hsu/cBPXchL+8AX2tFq4cBfRlvNFYQHImp5ILdWEADoC/SIC/efixOfxMubcP3/Anriqm2DBhxnAAAAAElFTkSuQmCC",nA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAChVBMVEUAAAD///8BAQECAgIDAwPExMS+vr4ZGRmxsbHLy8uampoSEhLIyMhnZ2eXl5dOTk7e3t4mJiY1NTVMTEwwMDCwsLAfHx9WVlYMDAzo6Oinp6cgICBmZmbPz8+EhISCgoKfn58LCwshISFCQkLf399VVVW4uLgkJCTFxcVFRUUJCQlNTU2pqakjIyMUFBTw8PCYmJiFhYWUlJRqampISEg4ODgPDw91dXU0NDSdnZ0RERGzs7OKiopERERubm7y8vKMjIzHx8fQ0NAODg6mpqY3NzeDg4OIiIjz8/Ovr6/V1dVYWFjg4OAuLi6Pj4+Li4vk5OQyMjJ/f3+srKyZmZlkZGTn5+dHR0eWlpZsbGwHBwcTExNJSUnGxsZKSkopKSnp6ekGBgYvLy/t7e3a2trJycksLCwtLS29vb1fX1+1tbWrq6scHBxTU1N6enphYWHc3Ny8vLwoKCiSkpJXV1fj4+P9/f1vb29BQUFoaGjx8fG6uroQEBDs7OwNDQ2BgYGTk5M6OjqOjo5lZWV9fX3b29srKyt7e3s8PDz6+vo9PT2qqqoEBAS/v79dXV0+Pj7R0dEWFhZ4eHgFBQUiIiKgoKAqKiptbW3v7+/Dw8N2dnZAQEBwcHAKCgoAAABDQ0Ojo6MODg4KCgoBAQFdXV03NzdISEgJCQlaWlq4uLgMDAxRUVE1NTXb29vDw8OJiYlFRUXJyckbGxtSUlIfHx97e3s4ODhoaGiNjY0aGhpYWFiFhYUSEhLOzs4oKCgUFBQVFRVAQEC7u7vv7+/y8vLMzMwDAwOenp6SkpIICAhXV1cjIyP6+vo6Ojqnp6dycnLq6uocHBxsbGw5OTm+vr6dnZ0CAgJ4QJ/JAAAAnnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/hQHg5sAAAH/SURBVHherZPTzyVBFMSru+can23b1tq2bdu2bZ7PXtu2/fdsOneSmdn7sA+7v3Q/VKWS6pOcxn+DyFt7G1wKoWpjXD1jfRyAZcJdVWsBmeEgBE+qgsPZ7xZA9dI24hfCMSsAPYPKFY44Q4Gnorq1rbnbEkRdJ6KYGuLS1wK1dXjU+rjZ1B+2Jnr1uuNnLeChx3o3hmYgplPWqK5jcreVqzNpj2x7mrqjsXPfhBFdStDhDkDtDuimqAdR6U3KquzN2HxkVte6Xl48rC9Quj8gLE0d59drRR/bsFOJ4QPu1xk6MPBhTW4UY2zQYAxhLAh4/801DzqU4QtGZo9mOaVAsC/LQ8F4uz0QHAYmxjI3JkOZkjh12vQZxjGUmf6z58wNMDuFNIsYy4ktW1isT1gXLY4UiGYhUixbXrjSZ5XZFAqN+CcErF7D1gJIYsnrUr4TT9sAHTfubczbtNnXumVrxXbGnPkvGoz7YPnxs+QC7XTBxiLhf+kyrlxNMOxD6DUCmqzYtTusyL2H7Ba6vbdYC6gDmZL27T9QmXHwUETBESDu6B/7cOzZc2o8jhMnqeXN27B35PF1gdMfWuijGYFl1PCJznz5qgY0IrIhKpIRnYn8cIiUdOgggOQ9a4rHuUKktavaa+3Pp0MAAvRLtXRIxeURAlxI/fev969w2SaA33EEtXR/l4bfAAAAAElFTkSuQmCC",oA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA51BMVEUAAAD////+/v4CAgIDAwMHBwc8PDzn5+ddXV1eXl7d3d1QUFBOTk79/f27u7vIyMiGhobu7u4BAQH6+vr5+fnl5eWNjY07OzuVlZUFBQWRkZH///8CAgIAAAABAQH+/v78/Pz9/f0EBAT4+PgGBgb5+fn6+vqqqqoFBQX7+/sDAwMKCgrLy8uJiYlLS0vi4uIHBwdUVFQyMjIhISHh4eF6enpnZ2eTk5P09PRjY2OOjo7m5uZHR0fr6+sgICANDQ3p6eksLCyFhYXT09PMzMwZGRmSkpIYGBjc3Nz19fVzc3OVlZWZmZkfCldNAAAAG3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7Q4gSTAAABRUlEQVR4Xo1Th3KsMAyUufTe20o2XC3pvfee9/7/ewIaLh4Dk8tio5G17KyNRSSUzhQaNIo+uqJRcoJ4CP28iwqaBgolhMsSRBnp19inZQ+Wu9ZKPfQQ2js+uT4TFo9AwfblCsBNqBBk2xdI0Am/9iZrRONmNjJzNMo0QHAOY/uubRCZifwcCoTJKSB2GfC2N22tP2qdVlZdCwokAE7FeoNEGWEGDnAuHS7uNT5Ku6jTDhQODgl2PSH30KV5LevAghzYogfSekaIcShc+t1Hi5FWYaKGkaXyNrG8oiYRmQTn1PTbzAmXxvTaTm30WlgTKSj0ZX3jNlNwEQCYO/EKHvcPCWJ0Hp+eX14lh784RJvyDoMtTTmdVbcanxAWZq681RkBX2QH7CqFf/+bHHZHSOiKsP2tcSzXuKpxfCylw1vvD909BN+Y2FBm4NfNwQAAAABJRU5ErkJggg==",sA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABWVBMVEUAAAD///8BAQECAgIDAwP9/f0FBQUGBgb8/Pzx8fEEBAT6+vp3d3cICAj39/cHBwcUFBRAQECHh4eysrLb29u3t7cJCQkNDQ3p6elYWFidnZ3+/v5ra2vX19eurq4tLS1ycnIoKCgsLCzJycny8vLc3NwKCgovLy9vb29ZWVl8fHyXl5eLi4sTExMhISG/v799fX3v7+9CQkJGRkYrKyv4+PjPz8/5+flqamoZGRkgICAbGxtmZmbU1NSoqKjLy8vHx8fr6+tdXV1/f3/e3t6hoaE2NjakpKTR0dGvr6+WlpY1NTVzc3Pm5uY3Nzft7e0fHx++vr5kZGRSUlLw8PA9PT3o6OgaGhqQkJAXFxdXV1cAAAD///8CAgIBAQEcHBwLCwv7+/u5ubnX19d8fHz29vYICAjh4eEkJCSXl5cDAwO2trZhYWEFBQUqKioEBAT39/dBQUEPDw8QXwTDAAAAW3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+yyiEIQAAAXhJREFUeF6tkwWP4zAUhGdsB8tdZsZjZmZmfE6X6RD+P5ySNlI3aVWddJ8URSPZmYnePAASP+krp3sjh29IVuOf0OiKKOyfGodpnlpeEQVpzyDSkB87nEkyRJPck5j2DLGY4ACMMnhHXpXsLwogs4X5KpSHo7w7FCFrIfJTHnATu7L0i08kylkoCJ6Sq5gqc7ppiRxF+pwLuLCIDMrEwkOdjk8yOIYYUzJpBqOPfzvStzVKx9LaMXviZO336TPrgNdoGZ0NznH4fIF0SPICEwJehEoDXlq7XJIrtT7rjPn+Bq9d37hx0966jQiH53/HOgU6diDVoWRGVSede+R9uBXPdd1Qq/Y+REDZPhR5ZB9Dd+qDQb/Dalga5LOhzl14zhcvYTRe8TVUhz6sDXMUIRTe8O3gl9ywIvlqOdLs5Htu5/ugcVAutr48wv58H7T6/gEVDUBpFD9K1iJBmcSiYZDtQ3b+SqW6J/9r9dweyxapT5//dFl/7f0FEbdYPB/yQuAAAAAASUVORK5CYII=",aA={class:"viewCon"},EA=_({__name:"07-snowy-scene",setup(iA){const{random:a,PI:rA,floor:cA,ceil:dA,min:lA,max:gA,sin:BA,cos:uA}=Math,C=R(),u=R();let i=window.innerWidth,r=window.innerHeight,w,o,v,l;const E=1e4,h=new y,s=[],B=new Float32Array(E*3),c=1e3,g=new O,U=g.load(vA),P=g.load(tA),G=g.load(nA),k=g.load(oA),M=g.load(sA),d=[[[1,.2,.5],P,20],[[.95,.1,.5],G,15],[[.9,.05,.5],U,10],[[.85,0,.5],M,8],[[.8,0,.5],k,5]];let f=window.innerWidth/2,p=window.innerHeight/2;$(()=>{x(),Y(),F(),m()});const T={texture:!0};function x(){var e;let A=new L({autoPlace:!1,width:300});A.domElement.style.cssText="position: fixed; top: 0; right: 0;",(e=u.value)==null||e.appendChild(A.domElement),A.add(T,"texture").onChange(t=>{for(let n=0;n<s.length;n++)s[n].map=t?d[n][1]:null,s[n].needsUpdate=!0})}function I(){const A=Date.now()*5e-5;v.position.x+=(f-v.position.x)*.05,v.position.y+=(-p-v.position.y)*.05,v.lookAt(o.position);for(let e=0;e<o.children.length;e++){let t=o.children[e];t instanceof Q&&(t.rotation.y=A*(e<4?e+1:-(e+1)))}for(let e=0;e<s.length;e++){const t=d[e][0],n=360*(t[0]+A)%360/360;s[e].color.setHSL(n,t[1],t[2])}}function X(A){!A.isPrimary||(f=A.clientX-i/2,p=A.clientY-r/2)}function F(){for(let A=0;A<E;A++)B[A*3]=a()*(2*c)-c,B[A*3+1]=a()*(2*c)-c,B[A*3+2]=a()*(2*c)-c;h.setAttribute("position",new b(B,3));for(let A=0;A<d.length;A++){const e=d[A][0],t=d[A][1],n=d[A][2];s[A]=new z({color:new V().setHSL(e[0],e[1],e[2]),size:n,map:t,blending:H,depthTest:!1,transparent:!0});const D=new Q(h,s[A]);D.rotation.set(a()*6,a()*6,a()*6),o.add(D)}}function Y(){o=new K,v=new j(75,i/r,1,2e3),v.position.z=1e3,l=new Z({canvas:C.value,antialias:!0}),l.setSize(i,r),l.setPixelRatio(window.devicePixelRatio),window.addEventListener("resize",N),o.add(new W(1e3)),o.add(new q(4210752)),w=J(),u.value.append(w.dom)}function m(){requestAnimationFrame(m),w.update(),I(),l.render(o,v)}function N(){i=window.innerWidth,r=window.innerHeight,v.aspect=i/r,v.updateProjectionMatrix(),l.setSize(i,r)}return(A,e)=>(eA(),AA("div",aA,[S("div",{class:"canvasCon",ref_key:"canvasCon",ref:u,onPointermove:X},[S("canvas",{class:"canvas",ref_key:"canvasDom",ref:C},null,512)],544)]))}});export{EA as default};