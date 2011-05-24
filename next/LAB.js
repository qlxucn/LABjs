/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0b (c) Kyle Simpson
    MIT License
*/
(function(p){var N=p.$LAB,n="UseLocalXHR",A="AlwaysPreserveOrder",v="AllowDuplicates",B="CacheBust",C="BasePath",D=/^[^?#]*\//.exec(location.href)[0],E=/^\w+\:\/\/\/?[^\/]+/.exec(D)[0],h=document.head||document.getElementsByTagName("head"),w=!(XMLHttpRequest||ActiveXObject),O=(p.opera&&Object.prototype.toString.call(p.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),r=document.createElement("script"),s=r.async===true,F=typeof r.preload=="boolean",G=F||(r.readyState&&r.readyState=="uninitialized");function H(a){return Object.prototype.toString.call(a)=="[object Function]"}function I(a){return Object.prototype.toString.call(a)=="[object Array]"}function J(a,c){var b=/^\/\/[^\/]/,d=/^\w+\:\/\//;if(b.test(a)){a=location.protocol+a}else if(!d.test(a)){if(c!=null){c=(d.test(c))?c:J(c,c[0]=="/"?E:D);a=c+a}}return a}function t(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function P(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function u(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function K(a,c,b){b.ready=b.finished=true;for(var d=0;d<b.finished_listeners.length;d++){setTimeout(b.finished_listeners[d],0)}b.ready_listeners=[];b.finished_listeners=[]}function Q(d,e,f,i,g){setTimeout(function(){if("item"in h){if(!h[0]){setTimeout(arguments.callee,25);return}h=h[0]}var a=document.createElement("script"),c=e.real_src;if(e.type)a.type=e.type;if(e.charset)a.charset=e.charset;if(!f.preload&&!s){if(s)a.async=false;u(a,i,"finished",g);a.src=c;h.insertBefore(a,h.firstChild)}else if(G){i.elem=a;if(F){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g();a.onreadystatechange=null}}a.src=c}else if(s){a.async=false;u(a,i,"finished",g);a.src=c;h.insertBefore(a,h.firstChild)}else if(c.indexOf(E)==0&&d[n]){var b=XMLHttpRequest?new XMLHttpRequest():(ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null);b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};i.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";u(a,i,"ready",function(){h.removeChild(a);g()});a.src=c;h.insertBefore(a,h.firstChild)}},0)}function L(){var j={},R=!s&&(G||!O),o=[],q={},l;j[n]=!w;j[A]=false;j[v]=false;j[B]=false;j[C]="";function S(a,c,b,d){function e(){K(c,b,d);f=null}if(q[c.src].finished)return;if(!a[v])q[c.src].finished=true;var f=d.elem||document.createElement("script");if(c.type)f.type=c.type;if(c.charset)f.charset=c.charset;u(f,d,"finished",e);if(d.elem){d.elem=null}else if(d.text){f.onload=f.onreadystatechange=null;f.text=d.text}else{f.src=c.real_src}h.insertBefore(f,h.firstChild);if(d.text){e()}}function T(c,b,d){var e,f,i=function(){b.ready_cb(b,d,function(){S(c,b,d,e)})},g=function(){b.finished_cb(b,d)};b.src=J(b.src,c[C]);b.real_src=b.src+(c[B]?(/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"=":"");if(!q[b.src])q[b.src]={items:[],finished:false};f=q[b.src].items;if(c[v]||f.length==0){e=f[f.length]={ready:false,finished:false,ready_listeners:[i],finished_listeners:[g]};Q(c,b,d,e,(d.preload)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){setTimeout(e.ready_listeners[a],0)}e.ready_listeners=[]}:function(){K(b,d,e)})}else{e=f[0];if(e.finished){setTimeout(g,0)}else{e.finished_listeners.push(g)}}}function x(){var f,i=t(j,{}),g=[],m=0,y=false,k;function U(a,c,b){a.ready=true;a.exec_trigger=b;z()}function V(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;z()}function z(){while(m<g.length){if(H(g[m])){try{g[m]()}catch(err){}}else if(!g[m].finished){if(P(g[m]))continue;break}m++}if(m==g.length){y=false;k=false}}function M(){if(!k||!k.scripts){g.push(k={scripts:[],finished:true,preload:R&&y})}}f={script:function(){M();y=true;for(var e=0;e<arguments.length;e++){(function(a,c){if(!I(a)){c=[a]}for(var b=0;b<c.length;b++){M();a=c[b];if(H(a))a=a();if(!a)continue;if(I(a)){var d=[].slice.call(a);d.push(b,1);c.splice.call(c,d);b--;continue}if(typeof a=="string")a={src:a};a=t(a,{ready:false,ready_cb:U,finished:false,finished_cb:V});k.finished=false;k.scripts.push(a);T(i,a,k);if(i[A])f.wait()}})(arguments[e],arguments[e])}return f},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){g.push(arguments[a])}k=g[g.length-1]}else k=false;z();return f}};return{script:f.script,wait:f.wait,setOptions:function(a){t(a,i);i[n]=i[n]&&!w;return f}}}l={setGlobalDefaults:function(a){t(a,j);j[n]=j[n]&&!w;return l},setOptions:function(){return x().setOptions.apply(null,arguments)},script:function(){return x().script.apply(null,arguments)},wait:function(){return x().wait.apply(null,arguments)},queueScript:function(){o[o.length]={type:"script",args:[].slice.call(arguments)};return l},queueWait:function(){o[o.length]={type:"wait",args:[].slice.call(arguments)};return l},runQueue:function(){var a=l,c=o.length,b=c,d;for(;--b>=0;){d=o.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){p.$LAB=N;return l},sandbox:function(){return L()}};return l}p.$LAB=L();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);