(()=>{"use strict";let o=["Lucas","Maxi","Ignacio"];for(let e=0;e<o.length;e++)console.log(o[e]);o.forEach((function(o){console.log(o)}));for(const e of o)console.log(e);console.log("======================== Use of filter ========================"),[-2,-1,0,1,2,3,4].filter((function(o){return o>0}));let e=o.filter((function(o){return"Ignacio"!==o}));console.log(e);let l=o.filter((o=>"Ignacio"!==o));function n(o){return 2*o}console.log(l),console.log(o),console.log("======================== Use of map ========================");let c=[1,2,3,4,5],t=c.map(n);console.log(t);let r=[];for(const o of c)r.push(n(o));console.log(r);let s=o.map((o=>"Hello "+o));function f(o,e){return o>e?o:e}console.log(s),console.log("======================== Use of reduce ========================");let g=c.reduce((function(o,e){return o+e}));console.log(g);let u=c.reduce(f);console.log(u);let i=-1/0;for(let o=0;o<c.length;o++)i=f(i,c[o]);console.log("currentMax",i)})();