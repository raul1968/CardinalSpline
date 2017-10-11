/**
 * @license jCanvas v20.1.2
 * Copyright 2017 Caleb Evans
 * Released under the MIT license
 */
!function(a,b,c){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=function(a,b){return c(a,b)}:c(a,b)}("undefined"!=typeof window?window.jQuery:{},"undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a){var b,c=this;for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&(c[b]=a[b]);return c}function d(){qa(this,d.baseDefaults)}function e(a){return"string"===sa(a)}function f(a){return!isNaN(oa(a))&&!isNaN(pa(a))}function g(a){return a&&a.getContext?a.getContext("2d"):null}function h(a){var b,c;for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&(c=a[b],"string"===sa(c)&&f(c)&&"text"!==b&&(a[b]=pa(c)));void 0!==a.text&&(a.text=String(a.text))}function i(a){return a=qa({},a),a.masks=a.masks.slice(0),a}function j(a,b){var c;a.save(),c=i(b.transforms),b.savedTransforms.push(c)}function k(a,b){0===b.savedTransforms.length?b.transforms=i(Fa):(a.restore(),b.transforms=b.savedTransforms.pop())}function l(a,b,c,d){c[d]&&(ta(c[d])?b[d]=c[d].call(a,c):b[d]=c[d])}function m(a,b,c){l(a,b,c,"fillStyle"),l(a,b,c,"strokeStyle"),b.lineWidth=c.strokeWidth,c.rounded?b.lineCap=b.lineJoin="round":(b.lineCap=c.strokeCap,b.lineJoin=c.strokeJoin,b.miterLimit=c.miterLimit),c.strokeDash||(c.strokeDash=[]),b.setLineDash&&b.setLineDash(c.strokeDash),b.webkitLineDash=c.strokeDash,b.lineDashOffset=b.webkitLineDashOffset=b.mozDashOffset=c.strokeDashOffset,b.shadowOffsetX=c.shadowX,b.shadowOffsetY=c.shadowY,b.shadowBlur=c.shadowBlur,b.shadowColor=c.shadowColor,b.globalAlpha=c.opacity,b.globalCompositeOperation=c.compositing,c.imageSmoothing&&(b.imageSmoothingEnabled=c.imageSmoothingEnabled)}function n(a,b,c){c.mask&&(c.autosave&&j(a,b),a.clip(),b.transforms.masks.push(c._args))}function o(a,b){b._transformed&&a.restore()}function p(a,b,c){var d;c.closed&&b.closePath(),c.shadowStroke&&0!==c.strokeWidth?(b.stroke(),b.fill(),b.shadowColor="transparent",b.shadowBlur=0,b.stroke()):(b.fill(),"transparent"!==c.fillStyle&&(b.shadowColor="transparent"),0!==c.strokeWidth&&b.stroke()),c.closed||b.closePath(),o(b,c),c.mask&&(d=r(a),n(b,d,c))}function q(a,b,c,d,e){c._toRad=c.inDegrees?va/180:1,c._transformed=!0,b.save(),c.fromCenter||c._centered||void 0===d||(void 0===e&&(e=d),c.x+=d/2,c.y+=e/2,c._centered=!0),c.rotate&&R(b,c,null),1===c.scale&&1===c.scaleX&&1===c.scaleY||S(b,c,null),(c.translate||c.translateX||c.translateY)&&T(b,c,null)}function r(b){var c,d=Ea.dataCache;return d._canvas===b&&d._data?c=d._data:(c=a.data(b,"jCanvas"),c||(c={canvas:b,layers:[],layer:{names:{},groups:{}},eventHooks:{},intersecting:[],lastIntersected:null,cursor:a(b).css("cursor"),drag:{layer:null,dragging:!1},event:{type:null,x:null,y:null},events:{},transforms:i(Fa),savedTransforms:[],animating:!1,animated:null,pixelRatio:1,scaled:!1,redrawOnMousemove:!1},a.data(b,"jCanvas",c)),d._canvas=b,d._data=c),c}function s(a,b,c){var d;for(d in Ia.events)Object.prototype.hasOwnProperty.call(Ia.events,d)&&(c[d]||c.cursors&&c.cursors[d])&&u(a,b,c,d);b.events.mouseout||(a.bind("mouseout.jCanvas",function(){var c,d=b.drag.layer;for(d&&(b.drag={},F(a,b,d,"dragcancel")),c=0;c<b.layers.length;c+=1)d=b.layers[c],d._hovered&&a.triggerLayerEvent(b.layers[c],"mouseout");a.drawLayers()}),b.events.mouseout=!0)}function t(a,b,c,d){Ia.events[d](a,b),c._event=!0}function u(a,b,c,d){t(a,b,c,d),"mouseover"!==d&&"mouseout"!==d&&"mousemove"!==d||(b.redrawOnMousemove=!0)}function v(a,b,c){var d,e,f;if(c.draggable||c.cursors){for(d=["mousedown","mousemove","mouseup"],f=0;f<d.length;f+=1)e=d[f],t(a,b,c,e);c._event=!0}}function w(a,b,c,d){var f=b.layer.names;d?void 0!==d.name&&e(c.name)&&c.name!==d.name&&delete f[c.name]:d=c,e(d.name)&&(f[d.name]=c)}function x(a,b,c,d){var e,f,g,h,i,j=b.layer.groups;if(d){if(void 0!==d.groups&&null!==c.groups)for(g=0;g<c.groups.length;g+=1)if(f=c.groups[g],e=j[f]){for(i=0;i<e.length;i+=1)if(e[i]===c){h=i,e.splice(i,1);break}0===e.length&&delete j[f]}}else d=c;if(void 0!==d.groups&&null!==d.groups)for(g=0;g<d.groups.length;g+=1)f=d.groups[g],e=j[f],e||(e=j[f]=[],e.name=f),void 0===h&&(h=e.length),e.splice(h,0,c)}function y(a){var b,c,d,e;for(b=null,c=a.intersecting.length-1;c>=0;c-=1)if(b=a.intersecting[c],b._masks){for(e=b._masks.length-1;e>=0;e-=1)if(d=b._masks[e],!d.intersects){b.intersects=!1;break}if(b.intersects&&!b.intangible)break}return b&&b.intangible&&(b=null),b}function z(a,b,c,d){c&&c.visible&&c._method&&(c._next=d||null,c._method&&c._method.call(a,c))}function A(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(g=b.drag,e=g.layer,h=e&&e.dragGroups||[],d=b.layers,"mousemove"===c||"touchmove"===c){if(g.dragging||(g.dragging=!0,e.dragging=!0,e.bringToFront&&(d.splice(e.index,1),e.index=d.push(e)),e._startX=e.x,e._startY=e.y,e._endX=e._eventX,e._endY=e._eventY,F(a,b,e,"dragstart")),g.dragging)for(l=e._eventX-(e._endX-e._startX),m=e._eventY-(e._endY-e._startY),e.updateDragX&&(l=e.updateDragX.call(a[0],e,l)),e.updateDragY&&(m=e.updateDragY.call(a[0],e,m)),e.dx=l-e.x,e.dy=m-e.y,"y"!==e.restrictDragToAxis&&(e.x=l),"x"!==e.restrictDragToAxis&&(e.y=m),F(a,b,e,"drag"),k=0;k<h.length;k+=1)if(j=h[k],i=b.layer.groups[j],e.groups&&i)for(f=0;f<i.length;f+=1)i[f]!==e&&("y"!==e.restrictDragToAxis&&"y"!==i[f].restrictDragToAxis&&(i[f].x+=e.dx),"x"!==e.restrictDragToAxis&&"x"!==i[f].restrictDragToAxis&&(i[f].y+=e.dy))}else"mouseup"!==c&&"touchend"!==c||(g.dragging&&(e.dragging=!1,g.dragging=!1,b.redrawOnMousemove=b.originalRedrawOnMousemove,F(a,b,e,"dragstop")),b.drag={})}function B(b,c,d){var e;c.cursors&&(e=c.cursors[d]),-1!==a.inArray(e,Ga.cursors)&&(e=Ga.prefix+e),e&&b.css({cursor:e})}function C(a,b){a.css({cursor:b.cursor})}function D(a,b,c,d,e){d[c]&&b._running&&!b._running[c]&&(b._running[c]=!0,d[c].call(a[0],b,e),b._running[c]=!1)}function E(b,c){return!(b.disableEvents||b.intangible&&-1!==a.inArray(c,Ha))}function F(a,b,c,d,e){E(c,d)&&("mouseout"!==d&&B(a,c,d),D(a,c,d,c,e),D(a,c,d,b.eventHooks,e),D(a,c,d,Ia.eventHooks,e))}function G(b,d,f,g){var i,j,k,l=d._layer?f:d;return d._args=f,(d.draggable||d.dragGroups)&&(d.layer=!0,d.draggable=!0),d._method||(g?d._method=g:d.method?d._method=a.fn[d.method]:d.type&&(d._method=a.fn[Da.drawings[d.type]])),d.layer&&!d._layer?(i=a(b),j=r(b),k=j.layers,(null===l.name||e(l.name)&&void 0===j.layer.names[l.name])&&(h(d),l=new c(d),l.canvas=b,l.layer=!0,l._layer=!0,l._running={},null!==l.data?l.data=qa({},l.data):l.data={},null!==l.groups?l.groups=l.groups.slice(0):l.groups=[],w(i,j,l),x(i,j,l),s(i,j,l),v(i,j,l),d._event=l._event,l._method===a.fn.drawText&&i.measureText(l),null===l.index&&(l.index=k.length),k.splice(l.index,0,l),d._args=l,F(i,j,l,"add"))):d.layer||h(d),l}function H(a){var b,c;for(c=0;c<Ga.props.length;c+=1)b=Ga.props[c],a[b]=a["_"+b]}function I(a,b){var c,d;for(d=0;d<Ga.props.length;d+=1)c=Ga.props[d],void 0!==a[c]&&(a["_"+c]=a[c],Ga.propsObj[c]=!0,b&&delete a[c])}function J(a,b,c){var d,e,f,g;for(d in c)if(Object.prototype.hasOwnProperty.call(c,d)&&(e=c[d],ta(e)&&(c[d]=e.call(a,b,d)),"object"===sa(e)&&ua(e))){for(f in e)Object.prototype.hasOwnProperty.call(e,f)&&(g=e[f],void 0!==b[d]&&(b[d+"."+f]=b[d][f],c[d+"."+f]=g));delete c[d]}return c}function K(a){var b;for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&-1!==b.indexOf(".")&&delete a[b]}function L(b){var c,d,e=[],f=1;return"transparent"===b?b="rgba(0, 0, 0, 0)":b.match(/^([a-z]+|#[0-9a-f]+)$/gi)&&(d=ja.head,c=d.style.color,d.style.color=b,b=a.css(d,"color"),d.style.color=c),b.match(/^rgb/gi)&&(e=b.match(/(\d+(\.\d+)?)/gi),b.match(/%/gi)&&(f=2.55),e[0]*=f,e[1]*=f,e[2]*=f,void 0!==e[3]?e[3]=pa(e[3]):e[3]=1),e}function M(a){var b,c=3;for("array"!==sa(a.start)&&(a.start=L(a.start),a.end=L(a.end)),a.now=[],1===a.start[3]&&1===a.end[3]||(c=4),b=0;b<c;b+=1)a.now[b]=a.start[b]+(a.end[b]-a.start[b])*a.pos,b<3&&(a.now[b]=wa(a.now[b]));1!==a.start[3]||1!==a.end[3]?a.now="rgba("+a.now.join(",")+")":(a.now.slice(0,3),a.now="rgb("+a.now.join(",")+")"),a.elem.nodeName?a.elem.style[a.prop]=a.now:a.elem[a.prop]=a.now}function N(a){return Da.touchEvents[a]&&(a=Da.touchEvents[a]),a}function O(a){return Da.mouseEvents[a]&&(a=Da.mouseEvents[a]),a}function P(a){Ia.events[a]=function(b,c){function d(a){g.x=a.offsetX,g.y=a.offsetY,g.type=e,g.event=a,("mousemove"!==a.type||c.redrawOnMousemove||c.drag.dragging)&&b.drawLayers({resetFire:!0}),a.preventDefault()}var e,f,g;g=c.event,e="mouseover"===a||"mouseout"===a?"mousemove":a,f=N(e),c.events[e]||(f!==e?b.bind(e+".jCanvas "+f+".jCanvas",d):b.bind(e+".jCanvas",d),c.events[e]=!0)}}function Q(a,b,c){var d,e,f,g,h,i,j,k;(d=c._args)&&(e=r(a),f=e.event,null!==f.x&&null!==f.y&&(i=f.x*e.pixelRatio,j=f.y*e.pixelRatio,g=b.isPointInPath(i,j)||b.isPointInStroke&&b.isPointInStroke(i,j)),h=e.transforms,d.eventX=f.x,d.eventY=f.y,d.event=f.event,k=e.transforms.rotate,i=d.eventX,j=d.eventY,0!==k?(d._eventX=i*za(-k)-j*ya(-k),d._eventY=j*za(-k)+i*ya(-k)):(d._eventX=i,d._eventY=j),d._eventX/=h.scaleX,d._eventY/=h.scaleY,g&&e.intersecting.push(d),d.intersects=Boolean(g))}function R(a,b,c){b._toRad=b.inDegrees?va/180:1,a.translate(b.x,b.y),a.rotate(b.rotate*b._toRad),a.translate(-b.x,-b.y),c&&(c.rotate+=b.rotate*b._toRad)}function S(a,b,c){1!==b.scale&&(b.scaleX=b.scaleY=b.scale),a.translate(b.x,b.y),a.scale(b.scaleX,b.scaleY),a.translate(-b.x,-b.y),c&&(c.scaleX*=b.scaleX,c.scaleY*=b.scaleY)}function T(a,b,c){b.translate&&(b.translateX=b.translateY=b.translate),a.translate(b.translateX,b.translateY),c&&(c.translateX+=b.translateX,c.translateY+=b.translateY)}function U(a){for(;a<0;)a+=2*va;return a}function V(a,b){return a.x+a.radius*za(b)}function W(a,b){return a.y+a.radius*ya(b)}function X(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;c===d?(m=0,n=0):(m=c.x,n=c.y),d.inDegrees||360!==d.end||(d.end=2*va),d.start*=c._toRad,d.end*=c._toRad,d.start-=va/2,d.end-=va/2,o=va/180,d.ccw&&(o*=-1),e=V(d,d.start+o),f=W(d,d.start+o),g=V(d,d.start),h=W(d,d.start),Z(a,b,c,d,e,f,g,h),b.arc(d.x+m,d.y+n,d.radius,d.start,d.end,d.ccw),i=V(d,d.end+o),j=W(d,d.end+o),k=V(d,d.end),l=W(d,d.end),$(a,b,c,d,k,l,i,j)}function Y(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;d.arrowRadius&&!c.closed&&(o=Aa(h-f,g-e),o-=va,m=c.strokeWidth*za(o),n=c.strokeWidth*ya(o),i=g+d.arrowRadius*za(o+d.arrowAngle/2),j=h+d.arrowRadius*ya(o+d.arrowAngle/2),k=g+d.arrowRadius*za(o-d.arrowAngle/2),l=h+d.arrowRadius*ya(o-d.arrowAngle/2),b.moveTo(i-m,j-n),b.lineTo(g-m,h-n),b.lineTo(k-m,l-n),b.moveTo(g-m,h-n),b.lineTo(g+m,h+n),b.moveTo(g,h))}function Z(a,b,c,d,e,f,g,h){d._arrowAngleConverted||(d.arrowAngle*=c._toRad,d._arrowAngleConverted=!0),d.startArrow&&Y(a,b,c,d,e,f,g,h)}function $(a,b,c,d,e,f,g,h){d._arrowAngleConverted||(d.arrowAngle*=c._toRad,d._arrowAngleConverted=!0),d.endArrow&&Y(a,b,c,d,e,f,g,h)}function _(a,b,c,d){var e,f,g;for(e=2,Z(a,b,c,d,d.x2+c.x,d.y2+c.y,d.x1+c.x,d.y1+c.y),void 0!==d.x1&&void 0!==d.y1&&b.moveTo(d.x1+c.x,d.y1+c.y);;){if(f=d["x"+e],g=d["y"+e],void 0===f||void 0===g)break;b.lineTo(f+c.x,g+c.y),e+=1}e-=1,$(a,b,c,d,d["x"+(e-1)]+c.x,d["y"+(e-1)]+c.y,d["x"+e]+c.x,d["y"+e]+c.y)}function aa(a,b,c,d){var e,f,g,h,i;for(e=2,Z(a,b,c,d,d.cx1+c.x,d.cy1+c.y,d.x1+c.x,d.y1+c.y),void 0!==d.x1&&void 0!==d.y1&&b.moveTo(d.x1+c.x,d.y1+c.y);;){if(f=d["x"+e],g=d["y"+e],h=d["cx"+(e-1)],i=d["cy"+(e-1)],void 0===f||void 0===g||void 0===h||void 0===i)break;b.quadraticCurveTo(h+c.x,i+c.y,f+c.x,g+c.y),e+=1}e-=1,$(a,b,c,d,d["cx"+(e-1)]+c.x,d["cy"+(e-1)]+c.y,d["x"+e]+c.x,d["y"+e]+c.y)}function ba(a,b,c,d){var e,f,g,h,i,j,k,l;for(e=2,f=1,Z(a,b,c,d,d.cx1+c.x,d.cy1+c.y,d.x1+c.x,d.y1+c.y),void 0!==d.x1&&void 0!==d.y1&&b.moveTo(d.x1+c.x,d.y1+c.y);;){if(g=d["x"+e],h=d["y"+e],i=d["cx"+f],j=d["cy"+f],k=d["cx"+(f+1)],l=d["cy"+(f+1)],void 0===g||void 0===h||void 0===i||void 0===j||void 0===k||void 0===l)break;b.bezierCurveTo(i+c.x,j+c.y,k+c.x,l+c.y,g+c.x,h+c.y),e+=1,f+=2}e-=1,f-=2,$(a,b,c,d,d["cx"+(f+1)]+c.x,d["cy"+(f+1)]+c.y,d["x"+e]+c.x,d["y"+e]+c.y)}function ca(a,b,c){return b*=a._toRad,b-=va/2,c*za(b)}function da(a,b,c){return b*=a._toRad,b-=va/2,c*ya(b)}function ea(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;for(c===d?(h=0,i=0):(h=c.x,i=c.y),e=1,j=l=n=d.x+h,k=m=o=d.y+i,Z(a,b,c,d,j+ca(c,d.a1,d.l1),k+da(c,d.a1,d.l1),j,k),void 0!==d.x&&void 0!==d.y&&b.moveTo(j,k);;){if(f=d["a"+e],g=d["l"+e],void 0===f||void 0===g)break;l=n,m=o,n+=ca(c,f,g),o+=da(c,f,g),b.lineTo(n,o),e+=1}$(a,b,c,d,l,m,n,o)}function fa(a,b,c){isNaN(oa(c.fontSize))||(c.fontSize+="px"),b.font=c.fontStyle+" "+c.fontSize+" "+c.fontFamily}function ga(b,c,d,e){var f,g,h,i=Ea.propCache;if(i.text===d.text&&i.fontStyle===d.fontStyle&&i.fontSize===d.fontSize&&i.fontFamily===d.fontFamily&&i.maxWidth===d.maxWidth&&i.lineHeight===d.lineHeight)d.width=i.width,d.height=i.height;else{for(d.width=c.measureText(e[0]).width,h=1;h<e.length;h+=1)(g=c.measureText(e[h]).width)>d.width&&(d.width=g);f=b.style.fontSize,b.style.fontSize=d.fontSize,d.height=pa(a.css(b,"fontSize"))*e.length*d.lineHeight,b.style.fontSize=f}}function ha(a,b){var c,d,e,f,g,h,i=String(b.text),j=b.maxWidth,k=i.split("\n"),l=[];for(e=0;e<k.length;e+=1){if(f=k[e],g=f.split(" "),c=[],d="",1===g.length||a.measureText(f).width<j)c=[f];else{for(h=0;h<g.length;h+=1)a.measureText(d+g[h]).width>j&&(""!==d&&c.push(d),d=""),d+=g[h],h!==g.length-1&&(d+=" ");c.push(d)}l=l.concat(c.join("\n").replace(/((\n))|($)/gi,"$2").split("\n"))}return l}var ia,ja=b.document,ka=b.Image,la=b.Array,ma=b.getComputedStyle,na=b.Math,oa=b.Number,pa=b.parseFloat,qa=a.extend,ra=a.inArray,sa=function(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()},ta=a.isFunction,ua=a.isPlainObject,va=na.PI,wa=na.round,xa=na.abs,ya=na.sin,za=na.cos,Aa=na.atan2,Ba=la.prototype.slice,Ca=a.event.fix,Da={},Ea={dataCache:{},propCache:{},imageCache:{}},Fa={rotate:0,scaleX:1,scaleY:1,translateX:0,translateY:0,masks:[]},Ga={},Ha=["mousedown","mousemove","mouseup","mouseover","mouseout","touchstart","touchmove","touchend"],Ia={events:{},eventHooks:{},future:{}};d.baseDefaults={align:"center",arrowAngle:90,arrowRadius:0,autosave:!0,baseline:"middle",bringToFront:!1,ccw:!1,closed:!1,compositing:"source-over",concavity:0,cornerRadius:0,count:1,cropFromCenter:!0,crossOrigin:null,cursors:null,disableEvents:!1,draggable:!1,dragGroups:null,groups:null,data:null,dx:null,dy:null,end:360,eventX:null,eventY:null,fillStyle:"transparent",fontStyle:"normal",fontSize:"12pt",fontFamily:"sans-serif",fromCenter:!0,height:null,imageSmoothing:!0,inDegrees:!0,intangible:!1,index:null,letterSpacing:null,lineHeight:1,layer:!1,mask:!1,maxWidth:null,miterLimit:10,name:null,opacity:1,r1:null,r2:null,radius:0,repeat:"repeat",respectAlign:!1,restrictDragToAxis:null,rotate:0,rounded:!1,scale:1,scaleX:1,scaleY:1,shadowBlur:0,shadowColor:"transparent",shadowStroke:!1,shadowX:0,shadowY:0,sHeight:null,sides:0,source:"",spread:0,start:0,strokeCap:"butt",strokeDash:null,strokeDashOffset:0,strokeJoin:"miter",strokeStyle:"transparent",strokeWidth:1,sWidth:null,sx:null,sy:null,text:"",translate:0,translateX:0,translateY:0,type:null,visible:!0,width:null,x:0,y:0},ia=new d,c.prototype=ia,Ia.extend=function(b){return b.name&&(b.props&&qa(ia,b.props),a.fn[b.name]=function a(d){var e,f,h,i,j=this;for(f=0;f<j.length;f+=1)e=j[f],(h=g(e))&&(i=new c(d),G(e,i,d,a),m(e,h,i),b.fn.call(e,h,i));return j},b.type&&(Da.drawings[b.type]=b.name)),a.fn[b.name]},a.fn.getEventHooks=function(){var a,b,c=this,d={};return 0!==c.length&&(a=c[0],b=r(a),d=b.eventHooks),d},a.fn.setEventHooks=function(a){var b,c,d=this;for(b=0;b<d.length;b+=1)c=r(d[b]),qa(c.eventHooks,a);return d},a.fn.getLayers=function(a){var b,c,d,e,f,g=this,h=[];if(0!==g.length)if(b=g[0],c=r(b),d=c.layers,ta(a))for(f=0;f<d.length;f+=1)e=d[f],a.call(b,e)&&h.push(e);else h=d;return h},a.fn.getLayer=function(a){var b,c,d,f,g,h,i=this;if(0!==i.length)if(b=i[0],c=r(b),d=c.layers,h=sa(a),a&&a.layer)f=a;else if("number"===h)a<0&&(a=d.length+a),f=d[a];else if("regexp"===h){for(g=0;g<d.length;g+=1)if(e(d[g].name)&&d[g].name.match(a)){f=d[g];break}}else f=c.layer.names[a];return f},a.fn.getLayerGroup=function(a){var b,c,d,e,f,g=this,h=sa(a);if(0!==g.length)if(b=g[0],"array"===h)f=a;else if("regexp"===h){c=r(b),d=c.layer.groups;for(e in d)if(e.match(a)){f=d[e];break}}else c=r(b),f=c.layer.groups[a];return f},a.fn.getLayerIndex=function(a){var b=this,c=b.getLayers(),d=b.getLayer(a);return ra(d,c)},a.fn.setLayer=function(b,c){var d,e,g,i,j,k,l,m=this;for(e=0;e<m.length;e+=1)if(d=a(m[e]),g=r(m[e]),i=a(m[e]).getLayer(b)){w(d,g,i,c),x(d,g,i,c),h(c);for(j in c)Object.prototype.hasOwnProperty.call(c,j)&&(k=c[j],l=sa(k),"object"===l&&ua(k)?(i[j]=qa({},k),h(i[j])):"array"===l?i[j]=k.slice(0):"string"===l?0===k.indexOf("+=")?i[j]+=pa(k.substr(2)):0===k.indexOf("-=")?i[j]-=pa(k.substr(2)):!isNaN(k)&&f(k)&&"text"!==j?i[j]=pa(k):i[j]=k:i[j]=k);s(d,g,i),v(d,g,i),!1===a.isEmptyObject(c)&&F(d,g,i,"change",c)}return m},a.fn.setLayers=function(b,c){var d,e,f,g,h=this;for(e=0;e<h.length;e+=1)for(d=a(h[e]),f=d.getLayers(c),g=0;g<f.length;g+=1)d.setLayer(f[g],b);return h},a.fn.setLayerGroup=function(b,c){var d,e,f,g,h=this;for(e=0;e<h.length;e+=1)if(d=a(h[e]),f=d.getLayerGroup(b))for(g=0;g<f.length;g+=1)d.setLayer(f[g],c);return h},a.fn.moveLayer=function(b,c){var d,e,f,g,h,i=this;for(e=0;e<i.length;e+=1)d=a(i[e]),f=r(i[e]),g=f.layers,(h=d.getLayer(b))&&(h.index=ra(h,g),g.splice(h.index,1),g.splice(c,0,h),c<0&&(c=g.length+c),h.index=c,F(d,f,h,"move"));return i},a.fn.removeLayer=function(b){var c,d,e,f,g,h=this;for(d=0;d<h.length;d+=1)c=a(h[d]),e=r(h[d]),f=c.getLayers(),(g=c.getLayer(b))&&(g.index=ra(g,f),f.splice(g.index,1),delete g._layer,w(c,e,g,{name:null}),x(c,e,g,{groups:null}),F(c,e,g,"remove"));return h},a.fn.removeLayers=function(b){var c,d,e,f,g,h,i=this;for(d=0;d<i.length;d+=1){for(c=a(i[d]),e=r(i[d]),f=c.getLayers(b),h=0;h<f.length;h+=1)g=f[h],c.removeLayer(g),h-=1;e.layer.names={},e.layer.groups={}}return i},a.fn.removeLayerGroup=function(b){var c,d,e,f,g=this;if(void 0!==b)for(d=0;d<g.length;d+=1)if(c=a(g[d]),e=c.getLayerGroup(b))for(e=e.slice(0),f=0;f<e.length;f+=1)c.removeLayer(e[f]);return g},a.fn.addLayerToGroup=function(b,c){var d,e,f,g=this,h=[c];for(e=0;e<g.length;e+=1)d=a(g[e]),f=d.getLayer(b),f.groups&&(h=f.groups.slice(0),-1===ra(c,f.groups)&&h.push(c)),d.setLayer(f,{groups:h});return g},a.fn.removeLayerFromGroup=function(b,c){var d,e,f,g,h=this,i=[];for(e=0;e<h.length;e+=1)d=a(h[e]),f=d.getLayer(b),f.groups&&-1!==(g=ra(c,f.groups))&&(i=f.groups.slice(0),i.splice(g,1),d.setLayer(f,{groups:i}));return h},Ga.cursors=["grab","grabbing","zoom-in","zoom-out"],Ga.prefix=function(){var a=ma(ja.documentElement,"");return"-"+(Ba.call(a).join("").match(/-(moz|webkit|ms)-/)||""===a.OLink&&["","o"])[1]+"-"}(),a.fn.triggerLayerEvent=function(b,c){var d,e,f,g=this;for(e=0;e<g.length;e+=1)d=a(g[e]),f=r(g[e]),(b=d.getLayer(b))&&F(d,f,b,c);return g},a.fn.drawLayer=function(b){var c,d,e,f,h=this;for(c=0;c<h.length;c+=1)e=a(h[c]),(d=g(h[c]))&&(f=e.getLayer(b),z(e,d,f));return h},a.fn.drawLayers=function(b){var c,d,e,f,h,j,k,l,m,n,o,p,q,s=this,t=b||{};for(l=t.index,l||(l=0),d=0;d<s.length;d+=1)if(c=a(s[d]),e=g(s[d])){for(n=r(s[d]),!1!==t.clear&&c.clearCanvas(),f=n.layers,k=l;k<f.length;k+=1)if(h=f[k],h.index=k,t.resetFire&&(h._fired=!1),z(c,e,h,k+1),h._masks=n.transforms.masks.slice(0),h._method===a.fn.drawImage&&h.visible){q=!0;break}if(q)break;m=k,h=y(n),o=n.event,p=o.type,n.drag.layer&&A(c,n,p),j=n.lastIntersected,null===j||h===j||!j._hovered||j._fired||n.drag.dragging||(n.lastIntersected=null,j._fired=!0,j._hovered=!1,F(c,n,j,"mouseout"),C(c,n)),h&&(h[p]||(p=O(p)),h._event&&h.intersects&&(n.lastIntersected=h,(h.mouseover||h.mouseout||h.cursors)&&!n.drag.dragging&&(h._hovered||h._fired||(h._fired=!0,h._hovered=!0,F(c,n,h,"mouseover"))),h._fired||(h._fired=!0,o.type=null,F(c,n,h,p)),!h.draggable||h.disableEvents||"mousedown"!==p&&"touchstart"!==p||(n.drag.layer=h,n.originalRedrawOnMousemove=n.redrawOnMousemove,n.redrawOnMousemove=!0))),null!==h||n.drag.dragging||C(c,n),m===f.length&&(n.intersecting.length=0,n.transforms=i(Fa),n.savedTransforms.length=0)}return s},a.fn.addLayer=function(a){var b,d,e=this;for(b=0;b<e.length;b+=1)g(e[b])&&(d=new c(a),d.layer=!0,G(e[b],d,a));return e},Ga.props=["width","height","opacity","lineHeight"],Ga.propsObj={},a.fn.animateLayer=function(){var b,c,d,e,f,h=this,i=Ba.call(arguments,0);for("object"===sa(i[2])?(i.splice(2,0,i[2].duration||null),i.splice(3,0,i[3].easing||null),i.splice(4,0,i[4].complete||null),i.splice(5,0,i[5].step||null)):(void 0===i[2]?(i.splice(2,0,null),i.splice(3,0,null),i.splice(4,0,null)):ta(i[2])&&(i.splice(2,0,null),i.splice(3,0,null)),void 0===i[3]?(i[3]=null,i.splice(4,0,null)):ta(i[3])&&i.splice(3,0,null)),c=0;c<h.length;c+=1)b=a(h[c]),g(h[c])&&(d=r(h[c]),(e=b.getLayer(i[0]))&&e._method!==a.fn.redraw&&(f=qa({},i[1]),f=J(h[c],e,f),I(f,!0),I(e),e.style=Ga.propsObj,a(e).animate(f,{duration:i[2],easing:a.easing[i[3]]?i[3]:null,complete:function(a, b, c){return function(){H(c),K(c),b.animating&&b.animated!==c||a.drawLayers(),c._animating=!1,b.animating=!1,b.animated=null,i[4]&&i[4].call(a[0],c),F(a,b,c,"animateend")}}(b,d,e),step:function(a, b, c){return function(d, e){var f,g,h,j=!1;"_"===e.prop[0]&&(j=!0,e.prop=e.prop.replace("_",""),c[e.prop]=c["_"+e.prop]),-1!==e.prop.indexOf(".")&&(f=e.prop.split("."),g=f[0],h=f[1],c[g]&&(c[g][h]=e.now)),c._pos!==e.pos&&(c._pos=e.pos,c._animating||b.animating||(c._animating=!0,b.animating=!0,b.animated=c),b.animating&&b.animated!==c||a.drawLayers()),i[5]&&i[5].call(a[0],d,e,c),F(a,b,c,"animate",e),j&&(e.prop="_"+e.prop)}}(b,d,e)}),F(b,d,e,"animatestart")));return h},a.fn.animateLayerGroup=function(b){var c,d,e,f,g=this,h=Ba.call(arguments,0);for(d=0;d<g.length;d+=1)if(c=a(g[d]),e=c.getLayerGroup(b))for(f=0;f<e.length;f+=1)h[0]=e[f],c.animateLayer.apply(c,h);return g},a.fn.delayLayer=function(b,c){var d,e,f,g,h=this;for(c=c||0,e=0;e<h.length;e+=1)d=a(h[e]),f=r(h[e]),(g=d.getLayer(b))&&(a(g).delay(c),F(d,f,g,"delay"));return h},a.fn.delayLayerGroup=function(b,c){var d,e,f,g,h,i=this;for(c=c||0,e=0;e<i.length;e+=1)if(d=a(i[e]),f=d.getLayerGroup(b))for(h=0;h<f.length;h+=1)g=f[h],d.delayLayer(g,c);return i},a.fn.stopLayer=function(b,c){var d,e,f,g,h=this;for(e=0;e<h.length;e+=1)d=a(h[e]),f=r(h[e]),(g=d.getLayer(b))&&(a(g).stop(c),F(d,f,g,"stop"));return h},a.fn.stopLayerGroup=function(b,c){var d,e,f,g,h,i=this;for(e=0;e<i.length;e+=1)if(d=a(i[e]),f=d.getLayerGroup(b))for(h=0;h<f.length;h+=1)g=f[h],d.stopLayer(g,c);return i},function(b){var c;for(c=0;c<b.length;c+=1)a.fx.step[b[c]]=M}(["color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","fillStyle","outlineColor","strokeStyle","shadowColor"]),Da.touchEvents={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"},Da.mouseEvents={touchstart:"mousedown",touchend:"mouseup",touchmove:"mousemove"},function(a){var b;for(b=0;b<a.length;b+=1)P(a[b])}(["click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","touchstart","touchmove","touchend","pointerdown","pointermove","pointerup","contextmenu"]),a.event.fix=function(b){var c,d,e;if(b=Ca.call(a.event,b),d=b.originalEvent)if(e=d.changedTouches,void 0!==b.pageX&&void 0===b.offsetX)try{c=a(b.currentTarget).offset(),c&&(b.offsetX=b.pageX-c.left,b.offsetY=b.pageY-c.top)}catch(a){}else if(e)try{c=a(b.currentTarget).offset(),c&&(b.offsetX=e[0].pageX-c.left,b.offsetY=e[0].pageY-c.top)}catch(a){}return b},Da.drawings={arc:"drawArc",bezier:"drawBezier",ellipse:"drawEllipse",function:"drawShape",image:"drawImage",line:"drawLine",path:"drawPath",polygon:"drawPolygon",slice:"drawSlice",quadratic:"drawQuadratic",rectangle:"drawRect",text:"drawText",vector:"drawVector",save:"saveCanvas",restore:"restoreCanvas",rotate:"rotateCanvas",scale:"scaleCanvas",translate:"translateCanvas"},a.fn.draw=function a(b){var d,e,f=this,h=new c(b);if(Da.drawings[h.type]&&"function"!==h.type)f[Da.drawings[h.type]](b);else for(d=0; d<f.length; d+=1)(e=g(f[d]))&&(h=new c(b),G(f[d],h,b,a),h.visible&&h.fn&&h.fn.call(f[d],e,h));return f},a.fn.clearCanvas=function a(b){var d,e,f=this,h=new c(b);for(d=0;d<f.length;d+=1)(e=g(f[d]))&&(null===h.width||null===h.height?(e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,f[d].width,f[d].height),e.restore()):(G(f[d],h,b,a),q(f[d],e,h,h.width,h.height),e.clearRect(h.x-h.width/2,h.y-h.height/2,h.width,h.height),o(e,h)));return f},a.fn.saveCanvas=function a(b){var d,e,f,h,i,k=this;for(d=0;d<k.length;d+=1)if(e=g(k[d]))for(h=r(k[d]),f=new c(b),G(k[d],f,b,a),i=0;i<f.count;i+=1)j(e,h);return k},a.fn.restoreCanvas=function a(b){var d,e,f,h,i,j=this;for(d=0;d<j.length;d+=1)if(e=g(j[d]))for(h=r(j[d]),f=new c(b),G(j[d],f,b,a),i=0;i<f.count;i+=1)k(e,h);return j},a.fn.rotateCanvas=function a(b){var d,e,f,h,i=this;for(d=0;d<i.length;d+=1)(e=g(i[d]))&&(h=r(i[d]),f=new c(b),G(i[d],f,b,a),f.autosave&&j(e,h),R(e,f,h.transforms));return i},a.fn.scaleCanvas=function a(b){var d,e,f,h,i=this;for(d=0;d<i.length;d+=1)(e=g(i[d]))&&(h=r(i[d]),f=new c(b),G(i[d],f,b,a),f.autosave&&j(e,h),S(e,f,h.transforms));return i},a.fn.translateCanvas=function a(b){var d,e,f,h,i=this;for(d=0;d<i.length;d+=1)(e=g(i[d]))&&(h=r(i[d]),f=new c(b),G(i[d],f,b,a),f.autosave&&j(e,h),T(e,f,h.transforms));return i},a.fn.drawRect=function a(b){var d,e,f,h,i,j,k,l,n,o=this;for(d=0;d<o.length;d+=1)(e=g(o[d]))&&(f=new c(b),G(o[d],f,b,a),f.visible&&(q(o[d],e,f,f.width,f.height),m(o[d],e,f),e.beginPath(),f.width&&f.height&&(h=f.x-f.width/2,i=f.y-f.height/2,l=xa(f.cornerRadius),l?(j=f.x+f.width/2,k=f.y+f.height/2,f.width<0&&(n=h,h=j,j=n),f.height<0&&(n=i,i=k,k=n),j-h-2*l<0&&(l=(j-h)/2),k-i-2*l<0&&(l=(k-i)/2),e.moveTo(h+l,i),e.lineTo(j-l,i),e.arc(j-l,i+l,l,3*va/2,2*va,!1),e.lineTo(j,k-l),e.arc(j-l,k-l,l,0,va/2,!1),e.lineTo(h+l,k),e.arc(h+l,k-l,l,va/2,va,!1),e.lineTo(h,i+l),e.arc(h+l,i+l,l,va,3*va/2,!1),f.closed=!0):e.rect(h,i,f.width,f.height)),Q(o[d],e,f),p(o[d],e,f)));return o},a.fn.drawArc=function a(b){var d,e,f,h=this;for(d=0;d<h.length;d+=1)(e=g(h[d]))&&(f=new c(b),G(h[d],f,b,a),f.visible&&(q(h[d],e,f,2*f.radius),m(h[d],e,f),e.beginPath(),X(h[d],e,f,f),Q(h[d],e,f),p(h[d],e,f)));return h},a.fn.drawEllipse=function a(b){var d,e,f,h,i,j=this;for(d=0;d<j.length;d+=1)(e=g(j[d]))&&(f=new c(b),G(j[d],f,b,a),f.visible&&(q(j[d],e,f,f.width,f.height),m(j[d],e,f),h=f.width*(4/3),i=f.height,e.beginPath(),e.moveTo(f.x,f.y-i/2),e.bezierCurveTo(f.x-h/2,f.y-i/2,f.x-h/2,f.y+i/2,f.x,f.y+i/2),e.bezierCurveTo(f.x+h/2,f.y+i/2,f.x+h/2,f.y-i/2,f.x,f.y-i/2),Q(j[d],e,f),f.closed=!0,p(j[d],e,f)));return j},a.fn.drawPolygon=function a(b){var d,e,f,h,i,j,k,l,n,o,r=this;for(d=0;d<r.length;d+=1)if((e=g(r[d]))&&(f=new c(b),G(r[d],f,b,a),f.visible)){for(q(r[d],e,f,2*f.radius),m(r[d],e,f),i=2*va/f.sides,j=i/2,h=j+va/2,k=f.radius*za(j),e.beginPath(),o=0;o<f.sides;o+=1)l=f.x+f.radius*za(h),n=f.y+f.radius*ya(h),e.lineTo(l,n),f.concavity&&(l=f.x+(k+-k*f.concavity)*za(h+j),n=f.y+(k+-k*f.concavity)*ya(h+j),e.lineTo(l,n)),h+=i;Q(r[d],e,f),f.closed=!0,p(r[d],e,f)}return r},a.fn.drawSlice=function a(b){var d,e,f,h,i,j,k=this;for(d=0;d<k.length;d+=1)(e=g(k[d]))&&(f=new c(b),G(k[d],f,b,a),f.visible&&(q(k[d],e,f,2*f.radius),m(k[d],e,f),f.start*=f._toRad,f.end*=f._toRad,f.start-=va/2,f.end-=va/2,f.start=U(f.start),f.end=U(f.end),f.end<f.start&&(f.end+=2*va),h=(f.start+f.end)/2,i=f.radius*f.spread*za(h),j=f.radius*f.spread*ya(h),f.x+=i,f.y+=j,e.beginPath(),e.arc(f.x,f.y,f.radius,f.start,f.end,f.ccw),e.lineTo(f.x,f.y),Q(k[d],e,f),f.closed=!0,p(k[d],e,f)));return k},a.fn.drawLine=function a(b){var d,e,f,h=this;for(d=0;d<h.length;d+=1)(e=g(h[d]))&&(f=new c(b),G(h[d],f,b,a),f.visible&&(q(h[d],e,f),m(h[d],e,f),e.beginPath(),_(h[d],e,f,f),Q(h[d],e,f),p(h[d],e,f)));return h},a.fn.drawQuadratic=function a(b){var d,e,f,h=this;for(d=0;d<h.length;d+=1)(e=g(h[d]))&&(f=new c(b),G(h[d],f,b,a),f.visible&&(q(h[d],e,f),m(h[d],e,f),e.beginPath(),aa(h[d],e,f,f),Q(h[d],e,f),p(h[d],e,f)));return h},a.fn.drawBezier=function a(b){var d,e,f,h=this;for(d=0;d<h.length;d+=1)(e=g(h[d]))&&(f=new c(b),G(h[d],f,b,a),f.visible&&(q(h[d],e,f),m(h[d],e,f),e.beginPath(),ba(h[d],e,f,f),Q(h[d],e,f),p(h[d],e,f)));return h},a.fn.drawVector=function a(b){var d,e,f,h=this;for(d=0;d<h.length;d+=1)(e=g(h[d]))&&(f=new c(b),G(h[d],f,b,a),f.visible&&(q(h[d],e,f),m(h[d],e,f),e.beginPath(),ea(h[d],e,f,f),Q(h[d],e,f),p(h[d],e,f)));return h},a.fn.drawPath=function a(b){var d,e,f,h,i,j=this;for(d=0;d<j.length;d+=1)if((e=g(j[d]))&&(f=new c(b),G(j[d],f,b,a),f.visible)){for(q(j[d],e,f),m(j[d],e,f),e.beginPath(),h=1;;){if(void 0===(i=f["p"+h]))break;i=new c(i),"line"===i.type?_(j[d],e,f,i):"quadratic"===i.type?aa(j[d],e,f,i):"bezier"===i.type?ba(j[d],e,f,i):"vector"===i.type?ea(j[d],e,f,i):"arc"===i.type&&X(j[d],e,f,i),h+=1}Q(j[d],e,f),p(j[d],e,f)}return j},a.fn.drawText=function a(b){var d,e,f,h,i,j,k,l,n,p,r,s,t,u,v=this;for(d=0;d<v.length;d+=1)if((e=g(v[d]))&&(f=new c(b),G(v[d],f,b,a),f.visible)){if(e.textBaseline=f.baseline,e.textAlign=f.align,fa(v[d],e,f),i=null!==f.maxWidth?ha(e,f):f.text.toString().split("\n"),ga(v[d],e,f,i),h&&(h.width=f.width,h.height=f.height),q(v[d],e,f,f.width,f.height),m(v[d],e,f),t=f.x,"left"===f.align?f.respectAlign?f.x+=f.width/2:t-=f.width/2:"right"===f.align&&(f.respectAlign?f.x-=f.width/2:t+=f.width/2),f.radius)for(l=pa(f.fontSize),null===f.letterSpacing&&(f.letterSpacing=l/500),k=0;k<i.length;k+=1){for(e.save(),e.translate(f.x,f.y),j=i[k],f.flipArcText&&(p=j.split(""),p.reverse(),j=p.join("")),n=j.length,e.rotate(-va*f.letterSpacing*(n-1)/2),s=0;s<n;s+=1)r=j[s],0!==s&&e.rotate(va*f.letterSpacing),e.save(),e.translate(0,-f.radius),f.flipArcText&&e.scale(-1,-1),e.fillText(r,0,0),"transparent"!==f.fillStyle&&(e.shadowColor="transparent"),0!==f.strokeWidth&&e.strokeText(r,0,0),e.restore();f.radius-=l,f.letterSpacing+=l/(1e3*va),e.restore()}else for(k=0;k<i.length;k+=1)j=i[k],u=f.y+k*f.height/i.length-(i.length-1)*f.height/i.length/2,e.shadowColor=f.shadowColor,e.fillText(j,t,u),"transparent"!==f.fillStyle&&(e.shadowColor="transparent"),0!==f.strokeWidth&&e.strokeText(j,t,u);u=0,"top"===f.baseline?u+=f.height/2:"bottom"===f.baseline&&(u-=f.height/2),f._event&&(e.beginPath(),e.rect(f.x-f.width/2,f.y-f.height/2+u,f.width,f.height),Q(v[d],e,f),e.closePath()),o(e,f)}return Ea.propCache=f,v},a.fn.measureText=function(a){var b,d,e,f=this;return d=f.getLayer(a),(!d||d&&!d._layer)&&(d=new c(a)),b=g(f[0]),b&&(fa(f[0],b,d),e=ha(b,d),ga(f[0],b,d,e)),d},a.fn.drawImage=function b(d){function e(a,b,c,d,e){null===d.width&&null===d.sWidth&&(d.width=d.sWidth=s.width),null===d.height&&null===d.sHeight&&(d.height=d.sHeight=s.height),e&&(e.width=d.width,e.height=d.height),null!==d.sWidth&&null!==d.sHeight&&null!==d.sx&&null!==d.sy?(null===d.width&&(d.width=d.sWidth),null===d.height&&(d.height=d.sHeight),d.cropFromCenter&&(d.sx+=d.sWidth/2,d.sy+=d.sHeight/2),d.sy-d.sHeight/2<0&&(d.sy=d.sHeight/2),d.sy+d.sHeight/2>s.height&&(d.sy=s.height-d.sHeight/2),d.sx-d.sWidth/2<0&&(d.sx=d.sWidth/2),d.sx+d.sWidth/2>s.width&&(d.sx=s.width-d.sWidth/2),q(a,b,d,d.width,d.height),m(a,b,d),b.drawImage(s,d.sx-d.sWidth/2,d.sy-d.sHeight/2,d.sWidth,d.sHeight,d.x-d.width/2,d.y-d.height/2,d.width,d.height)):(q(a,b,d,d.width,d.height),m(a,b,d),b.drawImage(s,d.x-d.width/2,d.y-d.height/2,d.width,d.height)),b.beginPath(),b.rect(d.x-d.width/2,d.y-d.height/2,d.width,d.height),Q(a,b,d),b.closePath(),o(b,d),n(b,c,d)}function f(b,c,d,f,g){return function(){var h=a(b);e(b,c,d,f,g),f.layer?F(h,d,g,"load"):f.load&&f.load.call(h[0],g),f.layer&&(g._masks=d.transforms.masks.slice(0),f._next&&h.drawLayers({clear:!1,resetFire:!0,index:f._next}))}}var h,i,j,k,l,p,s,t,u,v=this,w=Ea.imageCache;for(i=0;i<v.length;i+=1)h=v[i],(j=g(v[i]))&&(k=r(v[i]),l=new c(d),p=G(v[i],l,d,b),l.visible&&(u=l.source,t=u.getContext,u.src||t?s=u:u&&(w[u]&&w[u].complete?s=w[u]:(s=new ka,u.match(/^data:/i)||(s.crossOrigin=l.crossOrigin),s.src=u,w[u]=s)),s&&(s.complete||t?f(h,j,k,l,p)():(s.onload=f(h,j,k,l,p),s.src=s.src))));return v},a.fn.createPattern=function(b){function d(){j=e.createPattern(h,f.repeat),f.load&&f.load.call(l[0],j)}var e,f,h,i,j,k,l=this;return e=g(l[0]),e?(f=new c(b),k=f.source,ta(k)?(h=a("<canvas_spline />")[0],h.width=f.width,h.height=f.height,i=g(h),
k.call(h,i),d()):(i=k.getContext,k.src||i?h=k:(h=new ka,k.match(/^data:/i)||(h.crossOrigin=f.crossOrigin),h.src=k),h.complete||i?d():(h.onload=d,h.src=h.src))):j=null,j},a.fn.createGradient=function(a){var b,d,e,f,h,i,j,k,l,m,n=this,o=[];if(d=new c(a),b=g(n[0])){for(d.x1=d.x1||0,d.y1=d.y1||0,d.x2=d.x2||0,d.y2=d.y2||0,e=null!==d.r1&&null!==d.r2?b.createRadialGradient(d.x1,d.y1,d.r1,d.x2,d.y2,d.r2):b.createLinearGradient(d.x1,d.y1,d.x2,d.y2),j=1;void 0!==d["c"+j];j+=1)void 0!==d["s"+j]?o.push(d["s"+j]):o.push(null);for(f=o.length,null===o[0]&&(o[0]=0),null===o[f-1]&&(o[f-1]=1),j=0;j<f;j+=1){if(null!==o[j]){for(l=1,m=0,h=o[j],k=j+1;k<f;k+=1){if(null!==o[k]){i=o[k];break}l+=1}h>i&&(o[k]=o[j])}else null===o[j]&&(m+=1,o[j]=h+m*((i-h)/l));e.addColorStop(o[j],d["c"+(j+1)])}}else e=null;return e},a.fn.setPixels=function a(b){var d,e,f,h,i,j,k,l,m,n,o=this;for(e=0;e<o.length;e+=1)if(d=o[e],f=g(d),h=r(o[e]),f&&(i=new c(b),G(d,i,b,a),q(o[e],f,i,i.width,i.height),null!==i.width&&null!==i.height||(i.width=d.width,i.height=d.height,i.x=i.width/2,i.y=i.height/2),0!==i.width&&0!==i.height)){if(k=f.getImageData((i.x-i.width/2)*h.pixelRatio,(i.y-i.height/2)*h.pixelRatio,i.width*h.pixelRatio,i.height*h.pixelRatio),l=k.data,n=l.length,i.each)for(m=0;m<n;m+=4)j={r:l[m],g:l[m+1],b:l[m+2],a:l[m+3]},i.each.call(d,j,i),l[m]=j.r,l[m+1]=j.g,l[m+2]=j.b,l[m+3]=j.a;f.putImageData(k,(i.x-i.width/2)*h.pixelRatio,(i.y-i.height/2)*h.pixelRatio),f.restore()}return o},a.fn.getCanvasImage=function(a,b){var c,d=this,e=null;return 0!==d.length&&(c=d[0],c.toDataURL&&(void 0===b&&(b=1),e=c.toDataURL("image/"+a,b))),e},a.fn.detectPixelRatio=function(a){var c,d,e,f,h,i,j,k,l,m=this;for(d=0;d<m.length;d+=1)c=m[d],e=g(c),l=r(m[d]),l.scaled||(f=b.devicePixelRatio||1,h=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1,i=f/h,1!==i&&(j=c.width,k=c.height,c.width=j*i,c.height=k*i,c.style.width=j+"px",c.style.height=k+"px",e.scale(i,i)),l.pixelRatio=i,l.scaled=!0,a&&a.call(c,i));return m},Ia.clearCache=function(){var a;for(a in Ea)Object.prototype.hasOwnProperty.call(Ea,a)&&(Ea[a]={})},a.support.canvas=void 0!==a("<canvas_spline />")[0].getContext,qa(Ia,{defaults:ia,setGlobalProps:m,transformShape:q,detectEvents:Q,closePath:p,setCanvasFont:fa,measureText:ga}),a.jCanvas=Ia,a.jCanvasObject=c});