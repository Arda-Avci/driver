(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Tl="186",_f=0,pc=1,Mf=2,Ns=1,Sf=2,Cs=3,yi=0,Xe=1,De=2,En=0,Us=1,li=2,mc=3,gc=4,yf=5,$i=100,bf=101,wf=102,Tf=103,Ef=104,Af=200,Rf=201,Cf=202,Pf=203,Kh=204,Jh=205,Lf=206,Df=207,If=208,Nf=209,Uf=210,Ff=211,Of=212,Bf=213,zf=214,To=0,Eo=1,Ao=2,Xs=3,Ro=4,Co=5,Po=6,Lo=7,Qh=0,kf=1,Gf=2,An=0,El=1,Al=2,Rl=3,ga=4,Cl=5,Pl=6,Ll=7,jh=300,bi=301,rs=302,Da=303,Ia=304,xa=306,as=1e3,dn=1001,Do=1002,Ie=1003,Vf=1004,or=1005,Ee=1006,Na=1007,Gn=1008,je=1009,tu=1010,eu=1011,qs=1012,Dl=1013,Cn=1014,pn=1015,qe=1016,Il=1017,Nl=1018,Ys=1020,nu=35902,iu=35899,su=1021,ru=1022,mn=1023,Xn=1026,_i=1027,Ul=1028,Fl=1029,wi=1030,Ol=1031,Bl=1033,Xr=33776,qr=33777,Yr=33778,$r=33779,Io=35840,No=35841,Uo=35842,Fo=35843,Oo=36196,Bo=37492,zo=37496,ko=37488,Go=37489,na=37490,Vo=37491,Ho=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,$o=37813,Zo=37814,Ko=37815,Jo=37816,Qo=37817,jo=37818,tl=37819,el=37820,nl=37821,il=36492,sl=36494,rl=36495,al=36283,ol=36284,ia=36285,ll=36286,Hf=3200,cl=0,Wf=1,kn="",Be="srgb",sa="srgb-linear",ra="linear",le="srgb",Ua=7680,Xf=519,qf=512,Yf=513,$f=514,zl=515,Zf=516,Kf=517,kl=518,Jf=519,Qf=35044,jf=35048,xc="300 es",Tn=2e3,$s=2001;function td(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ed(){const i=aa("canvas");return i.style.display="block",i}const vc={};function _c(...i){const t="THREE."+i.shift();console.log(t,...i)}function au(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $t(...i){i=au(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function re(...i){i=au(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ts(...i){const t=i.join(" ");t in vc||(vc[t]=!0,$t(...i))}function nd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const id={[To]:Eo,[Ao]:Po,[Ro]:Lo,[Xs]:Co,[Eo]:To,[Po]:Ao,[Lo]:Ro,[Co]:Xs};class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mc=1234567;const Fs=Math.PI/180,os=180/Math.PI;function Ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function Gl(i,t){return(i%t+t)%t}function sd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function rd(i,t,e){return i!==t?(e-i)/(t-i):0}function Os(i,t,e){return(1-e)*i+e*t}function ad(i,t,e,n){return Os(i,t,1-Math.exp(-e*n))}function od(i,t=1){return t-Math.abs(Gl(i,t*2)-t)}function ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ud(i,t){return i+Math.random()*(t-i)}function fd(i){return i*(.5-Math.random())}function dd(i){i!==void 0&&(Mc=i);let t=Mc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pd(i){return i*Fs}function md(i){return i*os}function gd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _d(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const hl={DEG2RAD:Fs,RAD2DEG:os,generateUUID:Ai,clamp:ee,euclideanModulo:Gl,mapLinear:sd,inverseLerp:rd,lerp:Os,damp:ad,pingpong:od,smoothstep:ld,smootherstep:cd,randInt:hd,randFloat:ud,randFloatSpread:fd,seededRandom:dd,degToRad:pd,radToDeg:md,isPowerOfTwo:gd,ceilPowerOfTwo:xd,floorPowerOfTwo:vd,setQuaternionFromProperEuler:_d,normalize:He,denormalize:Zi};class rt{static{rt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*x;p<0&&(u=-u,d=-d,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){const y=Math.acos(p),E=Math.sin(y);m=Math.sin(m*y)/E,o=Math.sin(o*y)/E,l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+x*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+x*o;const y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new P,Sc=new fs;class Kt{static{Kt.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],x=s[0],p=s[3],m=s[6],y=s[1],E=s[4],S=s[7],b=s[2],M=s[5],A=s[8];return r[0]=a*x+o*y+l*b,r[3]=a*p+o*E+l*M,r[6]=a*m+o*S+l*A,r[1]=c*x+h*y+f*b,r[4]=c*p+h*E+f*M,r[7]=c*m+h*S+f*A,r[2]=u*x+d*y+g*b,r[5]=u*p+d*E+g*M,r[8]=u*m+d*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new Kt,yc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Md(){const i={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?ra:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sa]:{primaries:t,whitePoint:n,transfer:ra,toXYZ:yc,fromXYZ:bc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:le,toXYZ:yc,fromXYZ:bc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}const ie=Md();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Li;class Sd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Li===void 0&&(Li=aa("canvas")),Li.width=t.width,Li.height=t.height;const s=Li.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Li}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yd=0;class Vl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ba(s[a].image)):r.push(Ba(s[a]))}else r=Ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let bd=0;const za=new P;class ke extends Ei{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=dn,s=dn,r=Ee,a=Gn,o=mn,l=je,c=ke.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Ai(),this.name="",this.source=new Vl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(za).x}get height(){return this.source.getSize(za).y}get depth(){return this.source.getSize(za).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case as:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case Do:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case as:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case Do:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=jh;ke.DEFAULT_ANISOTROPY=1;class xe{static{xe.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,S=(d+1)/2,b=(m+1)/2,M=(h+u)/4,A=(f+x)/4,v=(g+p)/4;return E>S&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=M/n,r=A/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=M/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wd extends Ei{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new ke(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ee,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Vl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ge extends wd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ou extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Td extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class he{static{he.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,x,p)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,g=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,g=o*h,x=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-x*f}else if(t.order==="XZY"){const u=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ed,t,Ad)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Kn.crossVectors(n,Ke),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Kn.crossVectors(n,Ke)),Kn.normalize(),lr.crossVectors(Ke,Kn),s[0]=Kn.x,s[4]=lr.x,s[8]=Ke.x,s[1]=Kn.y,s[5]=lr.y,s[9]=Ke.y,s[2]=Kn.z,s[6]=lr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],y=n[3],E=n[7],S=n[11],b=n[15],M=s[0],A=s[4],v=s[8],T=s[12],C=s[1],D=s[5],U=s[9],O=s[13],I=s[2],N=s[6],V=s[10],z=s[14],Z=s[3],q=s[7],K=s[11],J=s[15];return r[0]=a*M+o*C+l*I+c*Z,r[4]=a*A+o*D+l*N+c*q,r[8]=a*v+o*U+l*V+c*K,r[12]=a*T+o*O+l*z+c*J,r[1]=h*M+f*C+u*I+d*Z,r[5]=h*A+f*D+u*N+d*q,r[9]=h*v+f*U+u*V+d*K,r[13]=h*T+f*O+u*z+d*J,r[2]=g*M+x*C+p*I+m*Z,r[6]=g*A+x*D+p*N+m*q,r[10]=g*v+x*U+p*V+m*K,r[14]=g*T+x*O+p*z+m*J,r[3]=y*M+E*C+S*I+b*Z,r[7]=y*A+E*D+S*N+b*q,r[11]=y*v+E*U+S*V+b*K,r[15]=y*T+E*O+S*z+b*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15],y=l*d-c*u,E=o*d-c*f,S=o*u-l*f,b=a*d-c*h,M=a*u-l*h,A=a*f-o*h;return e*(x*y-p*E+m*S)-n*(g*y-p*b+m*M)+s*(g*E-x*b+m*A)-r*(g*S-x*M+p*A)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=e*o-n*a,E=e*l-s*a,S=e*c-r*a,b=n*l-s*o,M=n*c-r*o,A=s*c-r*l,v=h*x-f*g,T=h*p-u*g,C=h*m-d*g,D=f*p-u*x,U=f*m-d*x,O=u*m-d*p,I=y*O-E*U+S*D+b*C-M*T+A*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return t[0]=(o*O-l*U+c*D)*N,t[1]=(s*U-n*O-r*D)*N,t[2]=(x*A-p*M+m*b)*N,t[3]=(u*M-f*A-d*b)*N,t[4]=(l*C-a*O-c*T)*N,t[5]=(e*O-s*C+r*T)*N,t[6]=(p*S-g*A-m*E)*N,t[7]=(h*A-u*S+d*E)*N,t[8]=(a*U-o*C+c*v)*N,t[9]=(n*C-e*U-r*v)*N,t[10]=(g*M-x*S+m*y)*N,t[11]=(f*S-h*M-d*y)*N,t[12]=(o*T-a*D-l*v)*N,t[13]=(e*D-n*T+s*v)*N,t[14]=(x*E-g*b-p*y)*N,t[15]=(h*b-f*E+u*y)*N,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,x=a*h,p=a*f,m=o*f,y=l*c,E=l*h,S=l*f,b=n.x,M=n.y,A=n.z;return s[0]=(1-(x+m))*b,s[1]=(d+S)*b,s[2]=(g-E)*b,s[3]=0,s[4]=(d-S)*M,s[5]=(1-(u+m))*M,s[6]=(p+y)*M,s[7]=0,s[8]=(g+E)*A,s[9]=(p-y)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Di.set(s[0],s[1],s[2]).length();const o=Di.set(s[4],s[5],s[6]).length(),l=Di.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ln.copy(this);const c=1/a,h=1/o,f=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=f,ln.elements[9]*=f,ln.elements[10]*=f,e.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Tn,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Tn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===$s)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Tn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Tn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===$s)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new P,ln=new he,Ed=new P(0,0,0),Ad=new P(1,1,1),Kn=new P,lr=new P,Ke=new P,wc=new he,Tc=new fs;class ci{constructor(t=0,e=0,n=0,s=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class lu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rd=0;const Ec=new P,Ii=new fs,Dn=new he,cr=new P,xs=new P,Cd=new P,Pd=new fs,Ac=new P(1,0,0),Rc=new P(0,1,0),Cc=new P(0,0,1),Pc={type:"added"},Ld={type:"removed"},Ni={type:"childadded",child:null},ka={type:"childremoved",child:null};class Te extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new P,e=new ci,n=new fs,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Ac,t)}rotateY(t){return this.rotateOnAxis(Rc,t)}rotateZ(t){return this.rotateOnAxis(Cc,t)}translateOnAxis(t,e){return Ec.copy(t).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ac,t)}translateY(t){return this.translateOnAxis(Rc,t)}translateZ(t){return this.translateOnAxis(Cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(xs,cr,this.up):Dn.lookAt(cr,xs,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ld),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Te.DEFAULT_UP=new P(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gn extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dd={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Va(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Gl(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Va(a,r,t+1/3),this.g=Va(a,r,t),this.b=Va(a,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ie.workingToColorSpace(Oe.copy(this),t),Math.round(ee(Oe.r*255,0,255))*65536+Math.round(ee(Oe.g*255,0,255))*256+Math.round(ee(Oe.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Be){ie.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(hr);const n=Os(Jn.h,hr.h,e),s=Os(Jn.s,hr.s,e),r=Os(Jn.l,hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Dt;Dt.NAMES=cu;class Hl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Dt(t),this.density=e}clone(){return new Hl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hu extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const cn=new P,In=new P,Ha=new P,Nn=new P,Ui=new P,Fi=new P,Lc=new P,Wa=new P,Xa=new P,qa=new P,Ya=new xe,$a=new xe,Za=new xe;class fn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),In.subVectors(n,e),Ha.subVectors(t,e);const a=cn.dot(cn),o=cn.dot(In),l=cn.dot(Ha),c=In.dot(In),h=In.dot(Ha),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ya.setScalar(0),$a.setScalar(0),Za.setScalar(0),Ya.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,n),Za.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ya,r.x),a.addScaledVector($a,r.y),a.addScaledVector(Za,r.z),a}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),In.subVectors(t,e),cn.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),cn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ui.subVectors(s,n),Fi.subVectors(r,n),Wa.subVectors(t,n);const l=Ui.dot(Wa),c=Fi.dot(Wa);if(l<=0&&c<=0)return e.copy(n);Xa.subVectors(t,s);const h=Ui.dot(Xa),f=Fi.dot(Xa);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ui,a);qa.subVectors(t,r);const d=Ui.dot(qa),g=Fi.dot(qa);if(g>=0&&d<=g)return e.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Fi,o);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return Lc.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Lc,o);const m=1/(p+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(Ui,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ri{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),fr.subVectors(this.max,vs),Oi.subVectors(t.a,vs),Bi.subVectors(t.b,vs),zi.subVectors(t.c,vs),Qn.subVectors(Bi,Oi),jn.subVectors(zi,Bi),fi.subVectors(Oi,zi);let e=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-fi.z,fi.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,fi.z,0,-fi.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-fi.y,fi.x,0];return!Ka(e,Oi,Bi,zi,fr)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,Oi,Bi,zi,fr))?!1:(dr.crossVectors(Qn,jn),e=[dr.x,dr.y,dr.z],Ka(e,Oi,Bi,zi,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Un=[new P,new P,new P,new P,new P,new P,new P,new P],hn=new P,ur=new Ri,Oi=new P,Bi=new P,zi=new P,Qn=new P,jn=new P,fi=new P,vs=new P,fr=new P,dr=new P,di=new P;function Ka(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);const o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const be=new P,pr=new rt;let Id=0;class xn extends Ei{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Id++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qf,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class uu extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fu extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wt extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Nd=new Ri,_s=new P,Ja=new P;class ds{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Ja)),this.expandByPoint(_s.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ud=0;const sn=new he,Qa=new Te,ki=new P,Je=new Ri,Ms=new Ri,Pe=new P;class de extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(td(t)?fu:uu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Je.min,Ms.min),Je.expandByPoint(Pe),Pe.addVectors(Je.max,Ms.max),Je.expandByPoint(Pe)):(Je.expandByPoint(Ms.min),Je.expandByPoint(Ms.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(t,c),Pe.add(ki)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new P,l[v]=new P;const c=new P,h=new P,f=new P,u=new rt,d=new rt,g=new rt,x=new P,p=new P;function m(v,T,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,C),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),o[v].add(x),o[T].add(x),o[C].add(x),l[v].add(p),l[T].add(p),l[C].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,T=y.length;v<T;++v){const C=y[v],D=C.start,U=C.count;for(let O=D,I=D+U;O<I;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const E=new P,S=new P,b=new P,M=new P;function A(v){b.fromBufferAttribute(s,v),M.copy(b);const T=o[v];E.copy(T),E.sub(b.multiplyScalar(b.dot(T))).normalize(),S.crossVectors(M,T);const D=S.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,D)}for(let v=0,T=y.length;v<T;++v){const C=y[v],D=C.start,U=C.count;for(let O=D,I=D+U;O<I;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new xn(u,h,f)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new P,Fd=new P,Od=new Kt;class ni{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ja.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(ja),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Od.getNormalMatrix(t),s=this.coplanarPoint(ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Bd=0;class ps extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Us,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=Jh,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Fn=new P,to=new P,mr=new P,gr=new P;class du{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){to.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),gr.copy(this.origin).sub(to);const r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=gr.dot(this.direction),l=-gr.dot(mr),c=gr.lengthSq(),h=Math.abs(1-a*a);let f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(to).addScaledVector(mr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,x=e.y-a.y,p=e.z-a.z,m=n.x-a.x,y=n.y-a.y,E=n.z-a.z,S=Math.abs(l),b=Math.abs(c),M=Math.abs(h);let A,v,T,C,D,U,O,I,N,V,z,Z;if(S>=b&&S>=M?(T=l,U=f,N=g,Z=m,l>=0?(A=c,v=h,C=u,D=d,O=x,I=p,V=y,z=E):(A=h,v=c,C=d,D=u,O=p,I=x,V=E,z=y)):b>=M?(T=c,U=u,N=x,Z=y,c>=0?(A=h,v=l,C=d,D=f,O=p,I=g,V=E,z=m):(A=l,v=h,C=f,D=d,O=g,I=p,V=m,z=E)):(T=h,U=d,N=p,Z=E,h>=0?(A=l,v=c,C=f,D=u,O=g,I=x,V=m,z=y):(A=c,v=l,C=u,D=f,O=x,I=g,V=y,z=m)),T===0)return null;const q=A/T,K=v/T,J=1/T,Mt=C-q*U,mt=D-K*U,Zt=O-q*N,Tt=I-K*N,ut=V-q*Z,G=z-K*Z,Y=ut*Tt-G*Zt,at=Mt*G-mt*ut,At=Zt*mt-Tt*Mt;if(s){if(Y<0||at<0||At<0)return null}else if((Y<0||at<0||At<0)&&(Y>0||at>0||At>0))return null;const ft=Y+at+At;if(ft===0)return null;const Rt=J*(Y*U+at*N+At*Z);return(ft>0?Rt<0:Rt>0)?null:this.at(Rt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn extends ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Dc=new he,pi=new du,xr=new ds,Ic=new P,vr=new P,_r=new P,Mr=new P,eo=new P,Sr=new P,Nc=new P,yr=new P;class Lt extends Te{constructor(t=new de,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(eo.fromBufferAttribute(f,t),a?Sr.addScaledVector(eo,h):Sr.addScaledVector(eo.sub(e),h))}e.add(Sr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(xr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(xr,Ic)===null||pi.origin.distanceToSquared(Ic)>(t.far-t.near)**2))&&(Dc.copy(r).invert(),pi.copy(t.ray).applyMatrix4(Dc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,b=E;S<b;S+=3){const M=o.getX(S),A=o.getX(S+1),v=o.getX(S+2);s=br(this,m,t,n,c,h,f,M,A,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const y=o.getX(p),E=o.getX(p+1),S=o.getX(p+2);s=br(this,a,t,n,c,h,f,y,E,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,b=E;S<b;S+=3){const M=S,A=S+1,v=S+2;s=br(this,m,t,n,c,h,f,M,A,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const y=p,E=p+1,S=p+2;s=br(this,a,t,n,c,h,f,y,E,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function zd(i,t,e,n,s,r,a,o){let l;if(t.side===Xe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===yi,o),l===null)return null;yr.copy(o),yr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(yr);return c<e.near||c>e.far?null:{distance:c,point:yr.clone(),object:i}}function br(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,vr),i.getVertexPosition(l,_r),i.getVertexPosition(c,Mr);const h=zd(i,t,e,n,vr,_r,Mr,Nc);if(h){const f=new P;fn.getBarycoord(Nc,vr,_r,Mr,f),s&&(h.uv=fn.getInterpolatedAttribute(s,o,l,c,f,new rt)),r&&(h.uv1=fn.getInterpolatedAttribute(r,o,l,c,f,new rt)),a&&(h.normal=fn.getInterpolatedAttribute(a,o,l,c,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};fn.getNormal(vr,_r,Mr,u.normal),h.face=u,h.barycoord=f}return h}class va extends ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ie,h=Ie,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji extends xn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Gi=new he,Uc=new he,wr=[],Fc=new Ri,kd=new he,Ss=new Lt,ys=new ds;class Tr extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),Fc.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(Fc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ds),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),ys.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),t.ray.intersectsSphere(ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),Uc.multiplyMatrices(n,Gi),Ss.matrixWorld=Uc,Ss.raycast(t,wr);for(let a=0,o=wr.length;a<o;a++){const l=wr[a];l.instanceId=r,l.object=this,e.push(l)}wr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new va(new Float32Array(s*this.count),s,this.count,Ul,pn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mi=new ds,Gd=new rt(.5,.5),Er=new P;class Wl{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,a=new ni){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],x=r[9],p=r[10],m=r[11],y=r[12],E=r[13],S=r[14],b=r[15];if(s[0].setComponents(c-a,d-h,m-g,b-y).normalize(),s[1].setComponents(c+a,d+h,m+g,b+y).normalize(),s[2].setComponents(c+o,d+f,m+x,b+E).normalize(),s[3].setComponents(c-o,d-f,m-x,b-E).normalize(),n)s[4].setComponents(l,u,p,S).normalize(),s[5].setComponents(c-l,d-u,m-p,b-S).normalize();else if(s[4].setComponents(c-l,d-u,m-p,b-S).normalize(),e===Tn)s[5].setComponents(c+l,d+u,m+p,b+S).normalize();else if(e===$s)s[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);const e=Gd.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vd extends ps{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oa=new P,la=new P,Oc=new he,bs=new du,Ar=new ds,no=new P,Bc=new P;class Hd extends Te{constructor(t=new de,e=new Vd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)oa.fromBufferAttribute(e,s-1),la.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=oa.distanceTo(la);t.setAttribute("lineDistance",new Wt(n,1))}else $t("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=r,t.ray.intersectsSphere(Ar)===!1)return;Oc.copy(s).invert(),bs.copy(t.ray).applyMatrix4(Oc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,p=g-1;x<p;x+=c){const m=h.getX(x),y=h.getX(x+1),E=Rr(this,t,bs,l,m,y,x);E&&e.push(E)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(d),m=Rr(this,t,bs,l,x,p,g-1);m&&e.push(m)}}else{const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=d,p=g-1;x<p;x+=c){const m=Rr(this,t,bs,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){const x=Rr(this,t,bs,l,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(oa.fromBufferAttribute(o,s),la.fromBufferAttribute(o,r),e.distanceSqToSegment(oa,la,no,Bc)>n)return;no.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(no);if(!(c<t.near||c>t.far))return{distance:c,point:Bc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const zc=new P,kc=new P;class Wd extends Hd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)zc.fromBufferAttribute(e,s),kc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zc.distanceTo(kc);t.setAttribute("lineDistance",new Wt(n,1))}else $t("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pu extends ke{constructor(t=[],e=bi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zr extends ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zs extends ke{constructor(t,e,n=Cn,s,r,a,o=Ie,l=Ie,c,h=Xn,f=1){if(h!==Xn&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Xd extends Zs{constructor(t,e=Cn,n=bi,s,r,a=Ie,o=Ie,l,c=Xn){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class mu extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class we extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2));function g(x,p,m,y,E,S,b,M,A,v,T){const C=S/A,D=b/v,U=S/2,O=b/2,I=M/2,N=A+1,V=v+1;let z=0,Z=0;const q=new P;for(let K=0;K<V;K++){const J=K*D-O;for(let Mt=0;Mt<N;Mt++){const mt=Mt*C-U;q[x]=mt*y,q[p]=J*E,q[m]=I,c.push(q.x,q.y,q.z),q[x]=0,q[p]=0,q[m]=M>0?1:-1,h.push(q.x,q.y,q.z),f.push(Mt/A),f.push(1-K/v),z+=1}}for(let K=0;K<v;K++)for(let J=0;J<A;J++){const Mt=u+J+N*K,mt=u+J+N*(K+1),Zt=u+(J+1)+N*(K+1),Tt=u+(J+1)+N*K;l.push(Mt,mt,Tt),l.push(mt,Zt,Tt),Z+=6}o.addGroup(d,Z,T),d+=Z,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ks extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(o,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wn extends de{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const x=[],p=n/2;let m=0;y(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(d,2));function y(){const S=new P,b=new P;let M=0;const A=(e-t)/n;for(let v=0;v<=r;v++){const T=[],C=v/r,D=C*(e-t)+t;for(let U=0;U<=s;U++){const O=U/s,I=O*l+o,N=Math.sin(I),V=Math.cos(I);b.x=D*N,b.y=-C*n+p,b.z=D*V,f.push(b.x,b.y,b.z),S.set(N,A,V).normalize(),u.push(S.x,S.y,S.z),d.push(O,1-C),T.push(g++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){const C=x[T][v],D=x[T+1][v],U=x[T+1][v+1],O=x[T][v+1];(t>0||T!==0)&&(h.push(C,D,O),M+=3),(e>0||T!==r-1)&&(h.push(D,U,O),M+=3)}c.addGroup(m,M,0),m+=M}function E(S){const b=g,M=new rt,A=new P;let v=0;const T=S===!0?t:e,C=S===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,p*C,0),u.push(0,C,0),d.push(.5,.5),g++;const D=g;for(let U=0;U<=s;U++){const I=U/s*l+o,N=Math.cos(I),V=Math.sin(I);A.x=T*V,A.y=p*C,A.z=T*N,f.push(A.x,A.y,A.z),u.push(0,C,0),M.x=N*.5+.5,M.y=V*.5*C+.5,d.push(M.x,M.y),g++}for(let U=0;U<s;U++){const O=b+U,I=D+U;S===!0?h.push(I,I+1,O):h.push(I+1,I,O),v+=3}c.addGroup(m,v,S===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new he;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ee(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ee(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xl extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qd extends Xl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ql(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Gc=new P,Vc=new P,io=new ql,so=new ql,ro=new ql;class gu extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Vc.subVectors(s[0],s[1]).add(s[0]),c=Vc);const f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Gc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Gc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),io.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,p),so.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,p),ro.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(io.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),so.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ro.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(io.calc(l),so.calc(l),ro.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Yd(i,t){const e=1-i;return e*e*t}function $d(i,t){return 2*(1-i)*i*t}function Zd(i,t){return i*i*t}function Bs(i,t,e,n){return Yd(i,t)+$d(i,e)+Zd(i,n)}function Kd(i,t){const e=1-i;return e*e*e*t}function Jd(i,t){const e=1-i;return 3*e*e*i*t}function Qd(i,t){return 3*(1-i)*i*i*t}function jd(i,t){return i*i*i*t}function zs(i,t,e,n,s){return Kd(i,t)+Jd(i,e)+Qd(i,n)+jd(i,s)}class xu extends Ln{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(t,s.x,r.x,a.x,o.x),zs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tp extends Ln{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(t,s.x,r.x,a.x,o.x),zs(t,s.y,r.y,a.y,o.y),zs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vu extends Ln{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ep extends Ln{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _u extends Ln{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(t,s.x,r.x,a.x),Bs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class np extends Ln{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(t,s.x,r.x,a.x),Bs(t,s.y,r.y,a.y),Bs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mu extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Hc(o,l.x,c.x,h.x,f.x),Hc(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var ul=Object.freeze({__proto__:null,ArcCurve:qd,CatmullRomCurve3:gu,CubicBezierCurve:xu,CubicBezierCurve3:tp,EllipseCurve:Xl,LineCurve:vu,LineCurve3:ep,QuadraticBezierCurve:_u,QuadraticBezierCurve3:np,SplineCurve:Mu});class ip extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ul[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ul[s.type]().fromJSON(s))}return this}}class Wc extends ip{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vu(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new _u(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new xu(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Xl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Yl extends Wc{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Wc().fromJSON(s))}return this}}function sp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Su(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=cp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){const d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Js(r,a,e,o,l,c,0),a}function Su(i,t,e,n,s){let r;if(s===Mp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Xc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Xc(a/n|0,i[a],i[a+1],r);return r&&ls(r,r.next)&&(js(r),r=r.next),r}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ls(e,e.next)||ve(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Js(i,t,e,n,s,r,a){if(!i)return;!a&&r&&pp(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?ap(i,n,s,r):rp(i)){t.push(l.i,i.i,c.i),js(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=op(Ti(i),t),Js(i,t,e,n,s,r,2)):a===2&&lp(i,t,e,n,s,r):Js(Ti(i),t,e,n,s,r,1);break}}}function rp(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Ps(s,o,r,l,a,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ap(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ve(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),x=Math.max(o,l,c),p=Math.max(h,f,u),m=fl(d,g,t,e,n),y=fl(x,p,t,e,n);let E=i.prevZ,S=i.nextZ;for(;E&&E.z>=m&&S&&S.z<=y;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&Ps(o,h,l,f,c,u,E.x,E.y)&&ve(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=d&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&Ps(o,h,l,f,c,u,S.x,S.y)&&ve(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&Ps(o,h,l,f,c,u,E.x,E.y)&&ve(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=y;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&Ps(o,h,l,f,c,u,S.x,S.y)&&ve(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function op(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ls(n,s)&&bu(n,e,e.next,s)&&Qs(n,s)&&Qs(s,n)&&(t.push(n.i,e.i,s.i),js(e),js(e.next),e=i=s),e=e.next}while(e!==i);return Ti(e)}function lp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xp(a,o)){let l=wu(a,o);a=Ti(a,a.next),l=Ti(l,l.next),Js(a,t,e,n,s,r,0),Js(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function cp(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Su(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(gp(c))}s.sort(hp);for(let r=0;r<s.length;r++)e=up(s[r],e);return e}function hp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function up(i,t){const e=fp(i,t);if(!e)return t;const n=wu(e,i);return Ti(n,n.next),Ti(e,e.next)}function fp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(ls(i,e))return e;do{if(ls(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&yu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Qs(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&dp(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function dp(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function pp(i,t,e,n){let s=i;do s.z===0&&(s.z=fl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mp(s)}function mp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function fl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function gp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function yu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ps(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&yu(i,t,e,n,s,r,a,o)}function xp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!vp(i,t)&&(Qs(i,t)&&Qs(t,i)&&_p(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||ls(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ls(i,t){return i.x===t.x&&i.y===t.y}function bu(i,t,e,n){const s=Pr(ve(i,t,e)),r=Pr(ve(i,t,n)),a=Pr(ve(e,n,i)),o=Pr(ve(e,n,t));return!!(s!==r&&a!==o||s===0&&Cr(i,e,t)||r===0&&Cr(i,n,t)||a===0&&Cr(e,i,n)||o===0&&Cr(e,t,n))}function Cr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pr(i){return i>0?1:i<0?-1:0}function vp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qs(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function _p(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wu(i,t){const e=dl(i.i,i.x,i.y),n=dl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Xc(i,t,e,n){const s=dl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Sp{static triangulate(t,e,n=2){return sp(t,e,n)}}class Qi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Qi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];qc(t),Yc(n,t);let a=t.length;e.forEach(qc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Yc(n,e[l]);const o=Sp.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function qc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Yc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class _a extends de{constructor(t=new Yl([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Wt(s,3)),this.setAttribute("uv",new Wt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:yp;let E,S=!1,b,M,A,v;if(m){E=m.getSpacedPoints(h),S=!0,u=!1;const tt=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,tt),M=new P,A=new P,v=new P}u||(p=0,d=0,g=0,x=0);const T=o.extractPoints(c);let C=T.shape;const D=T.holes;if(!Qi.isClockWise(C)){C=C.reverse();for(let tt=0,et=D.length;tt<et;tt++){const ot=D[tt];Qi.isClockWise(ot)&&(D[tt]=ot.reverse())}}function O(tt){const ot=10000000000000001e-36;let lt=tt[0];for(let dt=1;dt<=tt.length;dt++){const Ot=dt%tt.length,Gt=tt[Ot],Yt=Gt.x-lt.x,Bt=Gt.y-lt.y,L=Yt*Yt+Bt*Bt,Xt=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(lt.x),Math.abs(lt.y)),Vt=ot*Xt*Xt;if(L<=Vt){tt.splice(Ot,1),dt--;continue}lt=Gt}}O(C),D.forEach(O);const I=D.length,N=C;for(let tt=0;tt<I;tt++){const et=D[tt];C=C.concat(et)}function V(tt,et,ot){return et||re("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(et,ot)}const z=C.length;function Z(tt,et,ot){let lt,dt,Ot;const Gt=tt.x-et.x,Yt=tt.y-et.y,Bt=ot.x-tt.x,L=ot.y-tt.y,Xt=Gt*Gt+Yt*Yt,Vt=Gt*L-Yt*Bt;if(Math.abs(Vt)>Number.EPSILON){const R=Math.sqrt(Xt),_=Math.sqrt(Bt*Bt+L*L),k=et.x-Yt/R,H=et.y+Gt/R,Q=ot.x-L/_,ct=ot.y+Bt/_,pt=((Q-k)*L-(ct-H)*Bt)/(Gt*L-Yt*Bt);lt=k+Gt*pt-tt.x,dt=H+Yt*pt-tt.y;const j=lt*lt+dt*dt;if(j<=2)return new rt(lt,dt);Ot=Math.sqrt(j/2)}else{let R=!1;Gt>Number.EPSILON?Bt>Number.EPSILON&&(R=!0):Gt<-Number.EPSILON?Bt<-Number.EPSILON&&(R=!0):Math.sign(Yt)===Math.sign(L)&&(R=!0),R?(lt=-Yt,dt=Gt,Ot=Math.sqrt(Xt)):(lt=Gt,dt=Yt,Ot=Math.sqrt(Xt/2))}return new rt(lt/Ot,dt/Ot)}const q=[];for(let tt=0,et=N.length,ot=et-1,lt=tt+1;tt<et;tt++,ot++,lt++)ot===et&&(ot=0),lt===et&&(lt=0),q[tt]=Z(N[tt],N[ot],N[lt]);const K=[];let J,Mt=q.concat();for(let tt=0,et=I;tt<et;tt++){const ot=D[tt];J=[];for(let lt=0,dt=ot.length,Ot=dt-1,Gt=lt+1;lt<dt;lt++,Ot++,Gt++)Ot===dt&&(Ot=0),Gt===dt&&(Gt=0),J[lt]=Z(ot[lt],ot[Ot],ot[Gt]);K.push(J),Mt=Mt.concat(J)}let mt;if(p===0)mt=Qi.triangulateShape(N,D);else{const tt=[],et=[];for(let ot=0;ot<p;ot++){const lt=ot/p,dt=d*Math.cos(lt*Math.PI/2),Ot=g*Math.sin(lt*Math.PI/2)+x;for(let Gt=0,Yt=N.length;Gt<Yt;Gt++){const Bt=V(N[Gt],q[Gt],Ot);at(Bt.x,Bt.y,-dt),lt===0&&tt.push(Bt)}for(let Gt=0,Yt=I;Gt<Yt;Gt++){const Bt=D[Gt];J=K[Gt];const L=[];for(let Xt=0,Vt=Bt.length;Xt<Vt;Xt++){const R=V(Bt[Xt],J[Xt],Ot);at(R.x,R.y,-dt),lt===0&&L.push(R)}lt===0&&et.push(L)}}mt=Qi.triangulateShape(tt,et)}const Zt=mt.length,Tt=g+x;for(let tt=0;tt<z;tt++){const et=u?V(C[tt],Mt[tt],Tt):C[tt];S?(A.copy(b.normals[0]).multiplyScalar(et.x),M.copy(b.binormals[0]).multiplyScalar(et.y),v.copy(E[0]).add(A).add(M),at(v.x,v.y,v.z)):at(et.x,et.y,0)}for(let tt=1;tt<=h;tt++)for(let et=0;et<z;et++){const ot=u?V(C[et],Mt[et],Tt):C[et];S?(A.copy(b.normals[tt]).multiplyScalar(ot.x),M.copy(b.binormals[tt]).multiplyScalar(ot.y),v.copy(E[tt]).add(A).add(M),at(v.x,v.y,v.z)):at(ot.x,ot.y,f/h*tt)}for(let tt=p-1;tt>=0;tt--){const et=tt/p,ot=d*Math.cos(et*Math.PI/2),lt=g*Math.sin(et*Math.PI/2)+x;for(let dt=0,Ot=N.length;dt<Ot;dt++){const Gt=V(N[dt],q[dt],lt);at(Gt.x,Gt.y,f+ot)}for(let dt=0,Ot=D.length;dt<Ot;dt++){const Gt=D[dt];J=K[dt];for(let Yt=0,Bt=Gt.length;Yt<Bt;Yt++){const L=V(Gt[Yt],J[Yt],lt);S?at(L.x,L.y+E[h-1].y,E[h-1].x+ot):at(L.x,L.y,f+ot)}}}ut(),G();function ut(){const tt=s.length/3;if(u){let et=0,ot=z*et;for(let lt=0;lt<Zt;lt++){const dt=mt[lt];At(dt[2]+ot,dt[1]+ot,dt[0]+ot)}et=h+p*2,ot=z*et;for(let lt=0;lt<Zt;lt++){const dt=mt[lt];At(dt[0]+ot,dt[1]+ot,dt[2]+ot)}}else{for(let et=0;et<Zt;et++){const ot=mt[et];At(ot[2],ot[1],ot[0])}for(let et=0;et<Zt;et++){const ot=mt[et];At(ot[0]+z*h,ot[1]+z*h,ot[2]+z*h)}}n.addGroup(tt,s.length/3-tt,0)}function G(){const tt=s.length/3;let et=0;Y(N,et),et+=N.length;for(let ot=0,lt=D.length;ot<lt;ot++){const dt=D[ot];Y(dt,et),et+=dt.length}n.addGroup(tt,s.length/3-tt,1)}function Y(tt,et){let ot=tt.length;for(;--ot>=0;){const lt=ot;let dt=ot-1;dt<0&&(dt=tt.length-1);for(let Ot=0,Gt=h+p*2;Ot<Gt;Ot++){const Yt=z*Ot,Bt=z*(Ot+1),L=et+lt+Yt,Xt=et+dt+Yt,Vt=et+dt+Bt,R=et+lt+Bt;ft(L,Xt,Vt,R)}}}function at(tt,et,ot){l.push(tt),l.push(et),l.push(ot)}function At(tt,et,ot){Rt(tt),Rt(et),Rt(ot);const lt=s.length/3,dt=y.generateTopUV(n,s,lt-3,lt-2,lt-1);Qt(dt[0]),Qt(dt[1]),Qt(dt[2])}function ft(tt,et,ot,lt){Rt(tt),Rt(et),Rt(lt),Rt(et),Rt(ot),Rt(lt);const dt=s.length/3,Ot=y.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);Qt(Ot[0]),Qt(Ot[1]),Qt(Ot[3]),Qt(Ot[1]),Qt(Ot[2]),Qt(Ot[3])}function Rt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function Qt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bp(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ul[s.type]().fromJSON(s)),new _a(n,t.options)}}const yp={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,a),new rt(o,l),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-f),new rt(u,1-g),new rt(x,1-m)]:[new rt(o,1-l),new rt(h,1-f),new rt(d,1-g),new rt(p,1-m)]}};function bp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class $l extends de{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ee(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,f=new P,u=new rt,d=new P,g=new P,x=new P;let p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){const E=n+y*h*s,S=Math.sin(E),b=Math.cos(E);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*S,f.y=t[M].y,f.z=t[M].x*b,a.push(f.x,f.y,f.z),u.x=y/e,u.y=M/(t.length-1),o.push(u.x,u.y);const A=l[3*M+0]*S,v=l[3*M+1],T=l[3*M+0]*b;c.push(A,v,T)}}for(let y=0;y<e;y++)for(let E=0;E<t.length-1;E++){const S=E+y*t.length,b=S,M=S+t.length,A=S+t.length+1,v=S+1;r.push(b,M,v),r.push(A,v,M)}this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("uv",new Wt(o,2)),this.setAttribute("normal",new Wt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $l(t.points,t.segments,t.phiStart,t.phiLength)}}class Pn extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const y=m*u-a;for(let E=0;E<c;E++){const S=E*f-r;g.push(S,-y,0),x.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const E=y+c*m,S=y+c*(m+1),b=y+1+c*(m+1),M=y+1+c*m;d.push(E,S,M),d.push(S,b,M)}this.setIndex(d),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zl extends de{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let f=t;const u=(e-t)/s,d=new P,g=new rt;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){const m=r+p/n*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let x=0;x<s;x++){const p=x*(n+1);for(let m=0;m<n;m++){const y=m+p,E=y,S=y+n+1,b=y+n+2,M=y+1;o.push(E,S,M),o.push(S,b,M)}}this.setIndex(o),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class tr extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new P,u=new P,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const y=[],E=m/n,S=a+E*o,b=t*Math.cos(S),M=Math.sqrt(t*t-b*b);let A=0;m===0&&a===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){const T=v/e,C=s+T*r;f.x=-M*Math.cos(C),f.y=b,f.z=M*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),p.push(T+A,1-E),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const E=h[m][y+1],S=h[m][y],b=h[m+1][y],M=h[m+1][y+1];(m!==0||a>0)&&d.push(E,S,M),(m!==n-1||l<Math.PI)&&d.push(S,b,M)}this.setIndex(d),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ma extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],f=[],u=new P,d=new P,g=new P;for(let x=0;x<=n;x++){const p=a+x/n*o;for(let m=0;m<=s;m++){const y=m/s*r;d.x=(t+e*Math.cos(p))*Math.cos(y),d.y=(t+e*Math.cos(p))*Math.sin(y),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(m/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){const m=(s+1)*x+p-1,y=(s+1)*(x-1)+p-1,E=(s+1)*(x-1)+p,S=(s+1)*x+p;l.push(m,y,S),l.push(y,E,S)}this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function cs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if($c(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if($c(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=cs(i[e]);for(const s in n)t[s]=n[s]}return t}function $c(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const hs={clone:cs,merge:We};var Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ae extends ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new he().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Eu extends Ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Me extends ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ao extends Me{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ap extends ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rp extends ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Sa extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Cp extends Sa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const oo=new he,Zc=new P,Kc=new P;class Kl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Zc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zc),Kc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(oo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===$s||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lr=new P,Dr=new fs,yn=new P;class Au extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lr,Dr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Dr,yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Lr,Dr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Dr,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ti=new P,Jc=new rt,Qc=new rt;class $e extends Au{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Jc,Qc),e.subVectors(Qc,Jc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Pp extends Kl{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=os*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Lp extends Sa{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Dp extends Kl{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}}class Ip extends Sa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ya extends Au{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Np extends Kl{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Up extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Np}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Fp extends de{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const Vi=-90,Hi=1;class Op extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(Vi,Hi,t,e);s.layers=this.layers,this.add(s);const r=new $e(Vi,Hi,t,e);r.layers=this.layers,this.add(r);const a=new $e(Vi,Hi,t,e);a.layers=this.layers,this.add(a);const o=new $e(Vi,Hi,t,e);o.layers=this.layers,this.add(o);const l=new $e(Vi,Hi,t,e);l.layers=this.layers,this.add(l);const c=new $e(Vi,Hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bp extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ru{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=zp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function zp(){this._document.hidden===!1&&this.reset()}class Cu{static{Cu.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}}function jc(i,t,e,n){const s=kp(n);switch(e){case su:return i*t;case Ul:return i*t/s.components*s.byteLength;case Fl:return i*t/s.components*s.byteLength;case wi:return i*t*2/s.components*s.byteLength;case Ol:return i*t*2/s.components*s.byteLength;case ru:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case Bl:return i*t*4/s.components*s.byteLength;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:case Fo:return Math.max(i,16)*Math.max(t,8)/4;case Io:case Uo:return Math.max(i,8)*Math.max(t,8)/2;case Oo:case Bo:case ko:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zo:case na:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case il:case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case al:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ia:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kp(i){switch(i){case je:case tu:return{byteLength:1,components:1};case qs:case eu:case qe:return{byteLength:2,components:1};case Il:case Nl:return{byteLength:2,components:4};case Cn:case Dl:case pn:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);function Pu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gp(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,em=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,um=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,km=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,K0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,og=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Vp,alphahash_pars_fragment:Hp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:Yp,aomap_fragment:$p,aomap_pars_fragment:Zp,batching_pars_vertex:Kp,batching_vertex:Jp,begin_vertex:Qp,beginnormal_vertex:jp,bsdfs:tm,iridescence_fragment:em,bumpmap_pars_fragment:nm,clipping_planes_fragment:im,clipping_planes_pars_fragment:sm,clipping_planes_pars_vertex:rm,clipping_planes_vertex:am,color_fragment:om,color_pars_fragment:lm,color_pars_vertex:cm,color_vertex:hm,common:um,cube_uv_reflection_fragment:fm,defaultnormal_vertex:dm,displacementmap_pars_vertex:pm,displacementmap_vertex:mm,emissivemap_fragment:gm,emissivemap_pars_fragment:xm,colorspace_fragment:vm,colorspace_pars_fragment:_m,envmap_fragment:Mm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:ym,envmap_pars_vertex:bm,envmap_physical_pars_fragment:Nm,envmap_vertex:wm,fog_vertex:Tm,fog_pars_vertex:Em,fog_fragment:Am,fog_pars_fragment:Rm,gradientmap_pars_fragment:Cm,lightmap_pars_fragment:Pm,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Im,lights_toon_fragment:Um,lights_toon_pars_fragment:Fm,lights_phong_fragment:Om,lights_phong_pars_fragment:Bm,lights_physical_fragment:zm,lights_physical_pars_fragment:km,lights_fragment_begin:Gm,lights_fragment_maps:Vm,lights_fragment_end:Hm,lightprobes_pars_fragment:Wm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:$m,map_fragment:Zm,map_pars_fragment:Km,map_particle_fragment:Jm,map_particle_pars_fragment:Qm,metalnessmap_fragment:jm,metalnessmap_pars_fragment:t0,morphinstance_vertex:e0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:x0,premultiplied_alpha_fragment:v0,project_vertex:_0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:T0,shadowmap_vertex:E0,shadowmask_pars_fragment:A0,skinbase_vertex:R0,skinning_pars_vertex:C0,skinning_vertex:P0,skinnormal_vertex:L0,specularmap_fragment:D0,specularmap_pars_fragment:I0,tonemapping_fragment:N0,tonemapping_pars_fragment:U0,transmission_fragment:F0,transmission_pars_fragment:O0,uv_pars_fragment:B0,uv_pars_vertex:z0,uv_vertex:k0,worldpos_vertex:G0,background_vert:V0,background_frag:H0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:q0,cube_frag:Y0,depth_vert:$0,depth_frag:Z0,distance_vert:K0,distance_frag:J0,equirect_vert:Q0,equirect_frag:j0,linedashed_vert:tg,linedashed_frag:eg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:ag,meshmatcap_frag:og,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:fg,meshphysical_frag:dg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:xg,shadow_vert:vg,shadow_frag:_g,sprite_vert:Mg,sprite_frag:Sg},St={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},wn={basic:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:We([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:We([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Dt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:We([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:We([St.points,St.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:We([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:We([St.common,St.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:We([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:We([St.sprite,St.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:We([St.common,St.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:We([St.lights,St.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};wn.physical={uniforms:We([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Ir={r:0,b:0,g:0},yg=new he,Lu=new Kt;Lu.set(-1,0,0,0,1,0,0,0,1);function bg(i,t,e,n,s,r){const a=new Dt(0);let o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){const S=y.backgroundBlurriness>0;E=t.get(E,S)}return E}function g(y){let E=!1;const S=d(y);S===null?p(a,o):S&&S.isColor&&(p(S,1),E=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,E){const S=d(E);S&&(S.isCubeTexture||S.mapping===xa)?(c===void 0&&(c=new Lt(new we(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:cs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lu),c.material.toneMapped=ie.getTransfer(S.colorSpace)!==le,(h!==S||f!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Lt(new Pn(2,2),new Ae({name:"BackgroundMaterial",uniforms:cs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ie.getTransfer(S.colorSpace)!==le,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,E){y.getRGB(Ir,Tu(i)),e.buffers.color.setClear(Ir.r,Ir.g,Ir.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:g,addToRenderList:x,dispose:m}}function wg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(D,U,O,I,N){let V=!1;const z=f(D,I,O,U);r!==z&&(r=z,c(r.object)),V=d(D,I,O,N),V&&g(D,I,O,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(D,U,O,I),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function f(D,U,O,I){const N=I.wireframe===!0;let V=n[U.id];V===void 0&&(V={},n[U.id]=V);const z=D.isInstancedMesh===!0?D.id:0;let Z=V[z];Z===void 0&&(Z={},V[z]=Z);let q=Z[O.id];q===void 0&&(q={},Z[O.id]=q);let K=q[N];return K===void 0&&(K=u(l()),q[N]=K),K}function u(D){const U=[],O=[],I=[];for(let N=0;N<e;N++)U[N]=0,O[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:I,object:D,attributes:{},index:null}}function d(D,U,O,I){const N=r.attributes,V=U.attributes;let z=0;const Z=O.getAttributes();for(const q in Z)if(Z[q].location>=0){const J=N[q];let Mt=V[q];if(Mt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor)),J===void 0||J.attribute!==Mt||Mt&&J.data!==Mt.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function g(D,U,O,I){const N={},V=U.attributes;let z=0;const Z=O.getAttributes();for(const q in Z)if(Z[q].location>=0){let J=V[q];J===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));const Mt={};Mt.attribute=J,J&&J.data&&(Mt.data=J.data),N[q]=Mt,z++}r.attributes=N,r.attributesNum=z,r.index=I}function x(){const D=r.newAttributes;for(let U=0,O=D.length;U<O;U++)D[U]=0}function p(D){m(D,0)}function m(D,U){const O=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;O[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),N[D]!==U&&(i.vertexAttribDivisor(D,U),N[D]=U)}function y(){const D=r.newAttributes,U=r.enabledAttributes;for(let O=0,I=U.length;O<I;O++)U[O]!==D[O]&&(i.disableVertexAttribArray(O),U[O]=0)}function E(D,U,O,I,N,V,z){z===!0?i.vertexAttribIPointer(D,U,O,N,V):i.vertexAttribPointer(D,U,O,I,N,V)}function S(D,U,O,I){x();const N=I.attributes,V=O.getAttributes(),z=U.defaultAttributeValues;for(const Z in V){const q=V[Z];if(q.location>=0){let K=N[Z];if(K===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const J=K.normalized,Mt=K.itemSize,mt=t.get(K);if(mt===void 0)continue;const Zt=mt.buffer,Tt=mt.type,ut=mt.bytesPerElement,G=Tt===i.INT||Tt===i.UNSIGNED_INT||K.gpuType===Dl;if(K.isInterleavedBufferAttribute){const Y=K.data,at=Y.stride,At=K.offset;if(Y.isInstancedInterleavedBuffer){for(let ft=0;ft<q.locationSize;ft++)m(q.location+ft,Y.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ft=0;ft<q.locationSize;ft++)p(q.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ft=0;ft<q.locationSize;ft++)E(q.location+ft,Mt/q.locationSize,Tt,J,at*ut,(At+Mt/q.locationSize*ft)*ut,G)}else{if(K.isInstancedBufferAttribute){for(let Y=0;Y<q.locationSize;Y++)m(q.location+Y,K.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Y=0;Y<q.locationSize;Y++)p(q.location+Y);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Y=0;Y<q.locationSize;Y++)E(q.location+Y,Mt/q.locationSize,Tt,J,Mt*ut,Mt/q.locationSize*Y*ut,G)}}else if(z!==void 0){const J=z[Z];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(q.location,J);break;case 3:i.vertexAttrib3fv(q.location,J);break;case 4:i.vertexAttrib4fv(q.location,J);break;default:i.vertexAttrib1fv(q.location,J)}}}}y()}function b(){T();for(const D in n){const U=n[D];for(const O in U){const I=U[O];for(const N in I){const V=I[N];for(const z in V)h(V[z].object),delete V[z];delete I[N]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;const U=n[D.id];for(const O in U){const I=U[O];for(const N in I){const V=I[N];for(const z in V)h(V[z].object),delete V[z];delete I[N]}}delete n[D.id]}function A(D){for(const U in n){const O=n[U];for(const I in O){const N=O[I];if(N[D.id]===void 0)continue;const V=N[D.id];for(const z in V)h(V[z].object),delete V[z];delete N[D.id]}}}function v(D){for(const U in n){const O=n[U],I=D.isInstancedMesh===!0?D.id:0,N=O[I];if(N!==void 0){for(const V in N){const z=N[V];for(const Z in z)h(z[Z].object),delete z[Z];delete N[V]}delete O[I],Object.keys(O).length===0&&delete n[U]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function Tg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==mn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==je&&A!==pn&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:S,maxSamples:b,samples:M}}function Ag(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ni,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,E=y*4;let S=m.clippingState||null;l.value=S,S=h(g,u,E,d);for(let b=0;b!==E;++b)S[b]=e[b];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=d+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,S=d;E!==x;++E,S+=4)a.copy(f[E]).applyMatrix4(y,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}const ji=4,Rg=6,Cg=20,Pg=256,ws=new ya,th=new Dt;let lo=null,co=0,ho=0,uo=!1;const Lg=new P,gi=new P;class pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Lg}=r;lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lo,co,ho),this._renderer.xr.enabled=uo,t.scissorTest=!1,Wi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:qe,format:mn,colorSpace:sa,depthBuffer:!1},s=eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dg(r)),this._blurMaterial=Ng(r,t,e),this._ggxMaterial=Ig(r,t,e)}return s}_compileMaterial(t){const e=new Lt(new de,t);this._renderer.compile(e,ws)}_sceneToCubeUV(t,e,n,s,r){const l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(th),f.toneMapping=An,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new we,new rn({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let m=!1;const y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,m=!0):(p.color.copy(th),m=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const b=this._cubeSize;Wi(s,S*b,E>2?b:0,b,b),f.setRenderTarget(s),m&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===bi||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Wi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ws)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-ji?n-g+ji:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Wi(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(o,ws),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Wi(t,p,m,3*x,2*x),s.setRenderTarget(t),s.render(o,ws)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-ji?s-this._lodMax+ji:0),u=4*(this._cubeSize-h);Wi(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ws)}}function Dg(i){const t=[],e=[];let n=i;const s=i-ji+1+Rg;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let m=0;m<f;m++){const y=m%3*2/3-1,E=m>2?0:-1,S=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];g.set(S,d*u*m);for(let b=0;b<u;b++){const M=h[b*2]*2-1,A=h[b*2+1]*2-1;m===0?gi.set(1,A,M):m===1?gi.set(-M,1,-A):m===2?gi.set(-M,A,1):m===3?gi.set(-1,A,-M):m===4?gi.set(-M,-1,A):gi.set(M,A,-1),gi.toArray(x,(m*u+b)*d)}}const p=new de;p.setAttribute("position",new xn(g,d)),p.setAttribute("outputDirection",new xn(x,d)),e.push(new Lt(p,null)),n>ji&&n--}return{lodMeshes:e,sizeLods:t}}function eh(i,t,e){const n=new Ge(i,t,e);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ig(i,t,e){return new Ae({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ba(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ng(i,t,e){return new Ae({name:"SphericalGaussianBlur",defines:{SAMPLES:Cg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ba(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function nh(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function ih(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function ba(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Du extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new we(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:En});r.uniforms.tEquirect.value=e;const a=new Lt(s,r),o=e.minFilter;return e.minFilter===Gn&&(e.minFilter=Ee),new Op(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function Ug(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Da||d===Ia)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new Du(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,g=d===Da||d===Ia,x=d===bi||d===rs;if(g||x){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new pl(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const y=u.image;return g&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new pl(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===Da?u.mapping=bi:d===Ia&&(u.mapping=rs),u}function l(u){let d=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&d++;return d===g}function c(u){const d=u.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Fg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ts("WebGLRenderer: "+n+" extension not supported."),s}}}function Og(i,t,e,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(d!==null){const y=d.array;x=d.version;for(let E=0,S=y.length;E<S;E+=3){const b=y[E+0],M=y[E+1],A=y[E+2];u.push(b,M,M,A,A,b)}}else{const y=g.array;x=g.version;for(let E=0,S=y.length/3-1;E<S;E+=3){const b=E+0,M=E+1,A=E+2;u.push(b,M,M,A,A,b)}}const p=new(g.count>=65535?fu:uu)(u,1);p.version=x;const m=r.get(f);m&&t.remove(m),r.set(f,p)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Bg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let p=0;p<d;p++)x+=u[p];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:re("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kg(i,t,e){const n=new WeakMap,s=new xe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let C=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var d=C;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let b=o.attributes.position.count*S,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*M*4*f),v=new ou(A,b,M,f);v.type=pn,v.needsUpdate=!0;const T=S*4;for(let D=0;D<f;D++){const U=m[D],O=y[D],I=E[D],N=b*M*4*D;for(let V=0;V<U.count;V++){const z=V*T;g===!0&&(s.fromBufferAttribute(U,V),A[N+z+0]=s.x,A[N+z+1]=s.y,A[N+z+2]=s.z,A[N+z+3]=0),x===!0&&(s.fromBufferAttribute(O,V),A[N+z+4]=s.x,A[N+z+5]=s.y,A[N+z+6]=s.z,A[N+z+7]=0),p===!0&&(s.fromBufferAttribute(I,V),A[N+z+8]=s.x,A[N+z+9]=s.y,A[N+z+10]=s.z,A[N+z+11]=I.itemSize===4?s.w:1)}}u={count:f,texture:v,size:new rt(b,M)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Gg(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Vg={[El]:"LINEAR_TONE_MAPPING",[Al]:"REINHARD_TONE_MAPPING",[Rl]:"CINEON_TONE_MAPPING",[ga]:"ACES_FILMIC_TONE_MAPPING",[Pl]:"AGX_TONE_MAPPING",[Ll]:"NEUTRAL_TONE_MAPPING",[Cl]:"CUSTOM_TONE_MAPPING"};function Hg(i,t,e,n,s,r){const a=new Ge(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new de;c.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const h=new Eu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Lt(c,h),u=new ya(-1,1,1,-1,0,1);let d=null,g=null,x=!1,p,m=null,y=[],E=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),l!==null&&l.setSize(S,b);for(let M=0;M<y.length;M++){const A=y[M];A.setSize&&A.setSize(S,b)}},this.setEffects=function(S){y=S,E=y.length>0&&y[0].isRenderPass===!0;const b=a.width,M=a.height;y.length>0&&o===null&&(o=new Ge(b,M,{type:qe,depthBuffer:!1,stencilBuffer:!1}),l=new Ge(b,M,{type:qe,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){const v=y[A];v.setSize&&v.setSize(b,M)}},this.begin=function(S,b){if(x||S.toneMapping===An&&y.length===0)return!1;if(m=b,b!==null){const M=b.width,A=b.height;(a.width!==M||a.height!==A)&&this.setSize(M,A)}return E===!1&&S.setRenderTarget(a),p=S.toneMapping,S.toneMapping=An,!0},this.hasRenderPass=function(){return E},this.end=function(S,b){S.toneMapping=p,x=!0;let M=a,A=o;for(let v=0;v<y.length;v++){const T=y[v];T.enabled!==!1&&(T.render(S,A,M,b),T.needsSwap!==!1&&(M=A,A=A===o?l:o))}if(d!==S.outputColorSpace||g!==S.toneMapping){d=S.outputColorSpace,g=S.toneMapping,h.defines={},ie.getTransfer(d)===le&&(h.defines.SRGB_TRANSFER="");const v=Vg[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(m),S.render(f,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Iu=new ke,ml=new Zs(1,1),Nu=new ou,Uu=new Td,Fu=new pu,sh=[],rh=[],ah=new Float32Array(16),oh=new Float32Array(9),lh=new Float32Array(4);function ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=sh[s];if(r===void 0&&(r=new Float32Array(s),sh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wa(i,t){let e=rh[t];e===void 0&&(e=new Int32Array(t),rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function $g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;lh.set(n),i.uniformMatrix2fv(this.addr,!1,lh),Ce(e,n)}}function Zg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;oh.set(n),i.uniformMatrix3fv(this.addr,!1,oh),Ce(e,n)}}function Kg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;ah.set(n),i.uniformMatrix4fv(this.addr,!1,ah),Ce(e,n)}}function Jg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function ex(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function ix(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function rx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ml.compareFunction=e.isReversedDepthBuffer()?kl:zl,r=ml):r=Iu,e.setTexture2D(t||r,s)}function ax(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uu,s)}function ox(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fu,s)}function lx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nu,s)}function cx(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return $g;case 35675:return Zg;case 35676:return Kg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return jg;case 35669:case 35673:return tx;case 5125:return ex;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return lx}}function hx(i,t){i.uniform1fv(this.addr,t)}function ux(i,t){const e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function fx(i,t){const e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function dx(i,t){const e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function px(i,t){const e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mx(i,t){const e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gx(i,t){const e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xx(i,t){i.uniform1iv(this.addr,t)}function vx(i,t){i.uniform2iv(this.addr,t)}function _x(i,t){i.uniform3iv(this.addr,t)}function Mx(i,t){i.uniform4iv(this.addr,t)}function Sx(i,t){i.uniform1uiv(this.addr,t)}function yx(i,t){i.uniform2uiv(this.addr,t)}function bx(i,t){i.uniform3uiv(this.addr,t)}function wx(i,t){i.uniform4uiv(this.addr,t)}function Tx(i,t,e){const n=this.cache,s=t.length,r=wa(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ml:a=Iu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ex(i,t,e){const n=this.cache,s=t.length,r=wa(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Uu,r[a])}function Ax(i,t,e){const n=this.cache,s=t.length,r=wa(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Fu,r[a])}function Rx(i,t,e){const n=this.cache,s=t.length,r=wa(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Nu,r[a])}function Cx(i){switch(i){case 5126:return hx;case 35664:return ux;case 35665:return fx;case 35666:return dx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return xx;case 35667:case 35671:return vx;case 35668:case 35672:return _x;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return yx;case 36295:return bx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}class Px{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cx(e.type)}}class Lx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cx(e.type)}}class Dx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function ch(i,t){i.seq.push(t),i.map[t.id]=t}function Ix(i,t,e){const n=i.name,s=n.length;for(fo.lastIndex=0;;){const r=fo.exec(n),a=fo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ch(e,c===void 0?new Px(o,i,t):new Lx(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Dx(o),ch(e,f)),e=f}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ix(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function hh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Nx=37297;let Ux=0;function Fx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const uh=new Kt;function Ox(i){ie._getMatrix(uh,ie.workingColorSpace,i);const t=`mat3( ${uh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case ra:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Fx(i.getShaderSource(t),o)}else return r}function Bx(i,t){const e=Ox(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const zx={[El]:"Linear",[Al]:"Reinhard",[Rl]:"Cineon",[ga]:"ACESFilmic",[Pl]:"AgX",[Ll]:"Neutral",[Cl]:"Custom"};function kx(i,t){const e=zx[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nr=new P;function Gx(){ie.getLuminanceCoefficients(Nr);const i=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function Hx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ls(i){return i!==""}function dh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(Xx,Yx)}const qx=new Map;function Yx(i,t){let e=te[t];if(e===void 0){const n=qx.get(t);if(n!==void 0)e=te[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gl(e)}const $x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(i){return i.replace($x,Zx)}function Zx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Kx={[Ns]:"SHADOWMAP_TYPE_PCF",[Cs]:"SHADOWMAP_TYPE_VSM"};function Jx(i){return Kx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qx={[bi]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE_UV"};function jx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Qx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const tv={[rs]:"ENVMAP_MODE_REFRACTION"};function ev(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nv={[Qh]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[Gf]:"ENVMAP_BLENDING_ADD"};function iv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nv[i.combine]||"ENVMAP_BLENDING_NONE"}function sv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Jx(e),c=jx(e),h=ev(e),f=iv(e),u=sv(e),d=Vx(e),g=Hx(r),x=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ls).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`)):(p=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),m=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?te.tonemapping_pars_fragment:"",e.toneMapping!==An?kx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Bx("linearToOutputTexel",e.outputColorSpace),Gx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),a=gl(a),a=dh(a,e),a=ph(a,e),o=gl(o),o=dh(o,e),o=ph(o,e),a=mh(a),o=mh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=y+p+a,S=y+m+o,b=hh(s,s.VERTEX_SHADER,E),M=hh(s,s.FRAGMENT_SHADER,S);s.attachShader(x,b),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(D){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(b)||"",I=s.getShaderInfoLog(M)||"",N=U.trim(),V=O.trim(),z=I.trim();let Z=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,M);else{const K=fh(s,b,"vertex"),J=fh(s,M,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+K+`
`+J)}else N!==""?$t("WebGLProgram: Program Info Log:",N):(V===""||z==="")&&(q=!1);q&&(D.diagnostics={runnable:Z,programLog:N,vertexShader:{log:V,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(b),s.deleteShader(M),v=new Kr(s,x),T=Wx(s,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,Nx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ux++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=M,this}let av=0;class ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lv(t),e.set(t,n)),n}}class lv{constructor(t){this.id=av++,this.code=t,this.usedTimes=0}}function cv(i){return i===wi||i===na||i===ia}function hv(i,t,e,n,s,r){const a=new lu,o=new ov,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,C,D,U,O){const I=D.fog,N=U.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=t.get(v.envMap||V,z),q=Z&&Z.mapping===xa?Z.image.height:null,K=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&$t("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Mt=J!==void 0?J.length:0;let mt=0;N.morphAttributes.position!==void 0&&(mt=1),N.morphAttributes.normal!==void 0&&(mt=2),N.morphAttributes.color!==void 0&&(mt=3);let Zt,Tt,ut,G;if(K){const pe=wn[K];Zt=pe.vertexShader,Tt=pe.fragmentShader}else{Zt=v.vertexShader,Tt=v.fragmentShader;const pe=o.getVertexShaderStage(v),ae=o.getFragmentShaderStage(v);o.update(v,pe,ae),ut=pe.id,G=ae.id}const Y=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),At=U.isInstancedMesh===!0,ft=U.isBatchedMesh===!0,Rt=!!v.map,Qt=!!v.matcap,tt=!!Z,et=!!v.aoMap,ot=!!v.lightMap,lt=!!v.bumpMap&&v.wireframe===!1,dt=!!v.normalMap,Ot=!!v.displacementMap,Gt=!!v.emissiveMap,Yt=!!v.metalnessMap,Bt=!!v.roughnessMap,L=v.anisotropy>0,Xt=v.clearcoat>0,Vt=v.dispersion>0,R=v.retroreflectivity>0,_=v.iridescence>0,k=v.sheen>0,H=v.transmission>0,Q=L&&!!v.anisotropyMap,ct=Xt&&!!v.clearcoatMap,pt=Xt&&!!v.clearcoatNormalMap,j=Xt&&!!v.clearcoatRoughnessMap,it=_&&!!v.iridescenceMap,gt=_&&!!v.iridescenceThicknessMap,zt=k&&!!v.sheenColorMap,yt=k&&!!v.sheenRoughnessMap,xt=!!v.specularMap,kt=!!v.specularColorMap,qt=!!v.specularIntensityMap,Jt=H&&!!v.transmissionMap,B=H&&!!v.thicknessMap,vt=!!v.gradientMap,nt=!!v.alphaMap,_t=v.alphaTest>0,Et=!!v.alphaHash,st=!!v.extensions;let Ht=An;v.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ht=i.toneMapping);const Ut={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:Zt,fragmentShader:Tt,defines:v.defines,customVertexShaderID:ut,customFragmentShaderID:G,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ft,batchingColor:ft&&U._colorsTexture!==null,instancing:At,instancingColor:At&&U.instanceColor!==null,instancingMorph:At&&U.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Rt,matcap:Qt,envMap:tt,envMapMode:tt&&Z.mapping,envMapCubeUVHeight:q,aoMap:et,lightMap:ot,bumpMap:lt,normalMap:dt,displacementMap:Ot,emissiveMap:Gt,normalMapObjectSpace:dt&&v.normalMapType===Wf,normalMapTangentSpace:dt&&v.normalMapType===cl,packedNormalMap:dt&&v.normalMapType===cl&&cv(v.normalMap.format),metalnessMap:Yt,roughnessMap:Bt,anisotropy:L,anisotropyMap:Q,clearcoat:Xt,clearcoatMap:ct,clearcoatNormalMap:pt,clearcoatRoughnessMap:j,dispersion:Vt,retroreflection:R,iridescence:_,iridescenceMap:it,iridescenceThicknessMap:gt,sheen:k,sheenColorMap:zt,sheenRoughnessMap:yt,specularMap:xt,specularColorMap:kt,specularIntensityMap:qt,transmission:H,transmissionMap:Jt,thicknessMap:B,gradientMap:vt,opaque:v.transparent===!1&&v.blending===Us&&v.alphaToCoverage===!1,alphaMap:nt,alphaTest:_t,alphaHash:Et,combine:v.combine,mapUv:Rt&&g(v.map.channel),aoMapUv:et&&g(v.aoMap.channel),lightMapUv:ot&&g(v.lightMap.channel),bumpMapUv:lt&&g(v.bumpMap.channel),normalMapUv:dt&&g(v.normalMap.channel),displacementMapUv:Ot&&g(v.displacementMap.channel),emissiveMapUv:Gt&&g(v.emissiveMap.channel),metalnessMapUv:Yt&&g(v.metalnessMap.channel),roughnessMapUv:Bt&&g(v.roughnessMap.channel),anisotropyMapUv:Q&&g(v.anisotropyMap.channel),clearcoatMapUv:ct&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(v.sheenRoughnessMap.channel),specularMapUv:xt&&g(v.specularMap.channel),specularColorMapUv:kt&&g(v.specularColorMap.channel),specularIntensityMapUv:qt&&g(v.specularIntensityMap.channel),transmissionMapUv:Jt&&g(v.transmissionMap.channel),thicknessMapUv:B&&g(v.thicknessMap.channel),alphaMapUv:nt&&g(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(dt||L),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(Rt||nt),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&dt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:at,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:mt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Rt&&v.map.isVideoTexture===!0&&ie.getTransfer(v.map.colorSpace)===le,decodeVideoTextureEmissive:Gt&&v.emissiveMap.isVideoTexture===!0&&ie.getTransfer(v.emissiveMap.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===De,flipSided:v.side===Xe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)T.push(C),T.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(T,v),y(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){const T=d[v.type];let C;if(T){const D=wn[T];C=hs.clone(D.uniforms)}else C=v.uniforms;return C}function S(v,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new rv(i,T,v,s),c.push(C),h.set(T,C)),C}function b(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:E,acquireProgram:S,releaseProgram:b,releaseShaderCache:M,programs:c,dispose:A}}function uv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,x,p,m){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},i[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=g,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=p,y.group=m),t++,y}function l(u,d,g,x,p,m,y){y.reversedDepth===!0&&(p=-p);const E=o(u,d,g,x,p,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,d,g,x,p,m){const y=o(u,d,g,x,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,d){e.length>1&&e.sort(u||fv),n.length>1&&n.sort(d||xh),s.length>1&&s.sort(d||xh)}function f(){for(let u=t,d=i.length;u<d;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function dv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new vh,i.set(n,[a])):s>=r.length?(a=new vh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function pv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Dt};break;case"SpotLight":e={position:new P,direction:new P,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function mv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gv=0;function xv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vv(i){const t=new pv,e=mv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new he,a=new he;function o(c){let h=0,f=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,y=0,E=0,S=0,b=0,M=0,A=0,v=0,T=0,C=0;c.sort(xv);for(let U=0,O=c.length;U<O;U++){const I=c[U],N=I.color,V=I.intensity,z=I.distance;let Z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===wi?Z=I.shadow.map.texture:Z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=N.r*V,f+=N.g*V,u+=N.b*V;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],V);C++}else if(I.isSunLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const K=I.shadow,J=e.get(I);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=Z;const Mt=K.getViewportCount();for(let mt=0;mt<Mt;mt++)n.sunShadowMatrix[x+mt]=K.getMatrix(mt),n.sunShadowCascade[x+mt]=K._cascadeData[mt];x+=Mt,g++}n.sun[d]=q,d++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const K=I.shadow,J=e.get(I);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=I.shadow.matrix,b++}n.directional[p]=q,p++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(N).multiplyScalar(V),q.distance=z,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[y]=q;const K=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,K.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[y]=K.matrix,I.castShadow){const J=e.get(I);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=Z,A++}y++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(N).multiplyScalar(V),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=q,E++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const K=I.shadow,J=e.get(I);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=I.shadow.matrix,M++}n.point[m]=q,m++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(V),q.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[S]=q,S++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const D=n.hash;(D.sunLength!==d||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==y||D.rectAreaLength!==E||D.hemiLength!==S||D.numSunShadows!==g||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==A||D.numSpotMaps!==v||D.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=y,n.rectArea.length=E,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.sunLength=d,D.directionalLength=p,D.pointLength=m,D.spotLength=y,D.rectAreaLength=E,D.hemiLength=S,D.numSunShadows=g,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=A,D.numSpotMaps=v,D.numLightProbes=C,n.version=gv++)}function l(c,h){let f=0,u=0,d=0,g=0,x=0,p=0;const m=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){const S=c[y];if(S.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),f++}else if(S.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(S.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const b=n.hemi[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function _h(i){const t=new vv(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function _v(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new _h(i),t.set(s,[o])):r>=a.length?(o=new _h(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],bv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Mh=new he,Ts=new P,po=new P;function wv(i,t,e){let n=new Wl;const s=new rt,r=new rt,a=new xe,o=new Ap,l=new Rp,c={},h=e.maxTextureSize,f={[yi]:Xe,[Xe]:yi,[De]:De},u=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Mv,fragmentShader:Sv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new de;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Lt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ns;let m=this.type;this.render=function(M,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===Sf&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ns);const T=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(En),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=m!==this.type;O&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(N=>N.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,N=M.length;I<N;I++){const V=M[I],z=V.shadow;if(z===void 0){$t("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const Z=z.getFrameExtents();s.multiply(Z),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,z.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Cs){if(V.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ge(s.x,s.y,{format:wi,type:qe,minFilter:Ee,magFilter:Ee,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new Zs(s.x,s.y,pn),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=Xn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ie,z.map.depthTexture.magFilter=Ie}else V.isPointLight?(z.map=new Du(s.x),z.map.depthTexture=new Xd(s.x,Cn)):(z.map=new Ge(s.x,s.y),z.map.depthTexture=new Zs(s.x,s.y,Cn)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=Xn,this.type===Ns?(z.map.depthTexture.compareFunction=q?kl:zl,z.map.depthTexture.minFilter=Ee,z.map.depthTexture.magFilter=Ee):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ie,z.map.depthTexture.magFilter=Ie);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const K=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();V.isPointLight!==!0&&z.updateMatrices(V,v);for(let J=0;J<K;J++){const Mt=z.getCamera(J);if(V.isPointLight){const mt=z.camera,Zt=z.matrix,Tt=V.distance||mt.far;Tt!==mt.far&&(mt.far=Tt,mt.updateProjectionMatrix()),Ts.setFromMatrixPosition(V.matrixWorld),mt.position.copy(Ts),po.copy(mt.position),po.add(yv[J]),mt.up.copy(bv[J]),mt.lookAt(po),mt.updateMatrixWorld(),Zt.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Mh.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Mh,mt.coordinateSystem,mt.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,J),i.clear();else{J===0&&(i.setRenderTarget(z.map),i.clear());const mt=z.getViewport(J);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),U.viewport(a)}n=z.getFrustum(J),S(A,v,Mt,V,this.type)}z.isPointLightShadow!==!0&&this.type===Cs&&y(z,v),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,C,D)};function y(M,A){const v=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Ge(s.x,s.y,{format:wi,type:qe}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,v,u,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,v,d,x,null)}function E(M,A,v,T){let C=null;const D=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=C.uuid,O=A.uuid;let I=c[U];I===void 0&&(I={},c[U]=I);let N=I[O];N===void 0&&(N=C.clone(),I[O]=N,A.addEventListener("dispose",b)),C=N}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Cs?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:f[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=i.properties.get(C);U.light=v}return C}function S(M,A,v,T,C){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===Cs)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);const O=t.update(M),I=M.material;if(Array.isArray(I)){const N=O.groups;for(let V=0,z=N.length;V<z;V++){const Z=N[V],q=I[Z.materialIndex];if(q&&q.visible){const K=E(M,q,T,C);M.onBeforeShadow(i,M,A,v,O,K,Z),i.renderBufferDirect(v,null,O,K,M,Z),M.onAfterShadow(i,M,A,v,O,K,Z)}}}else if(I.visible){const N=E(M,I,T,C);M.onBeforeShadow(i,M,A,v,O,N,null),i.renderBufferDirect(v,null,O,N,M,null),M.onAfterShadow(i,M,A,v,O,N,null)}}const U=M.children;for(let O=0,I=U.length;O<I;O++)S(U[O],A,v,T,C)}function b(M){M.target.removeEventListener("dispose",b);for(const v in c){const T=c[v],C=M.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Tv(i,t){function e(){let B=!1;const vt=new xe;let nt=null;const _t=new xe(0,0,0,0);return{setMask:function(Et){nt!==Et&&!B&&(i.colorMask(Et,Et,Et,Et),nt=Et)},setLocked:function(Et){B=Et},setClear:function(Et,st,Ht,Ut,pe){pe===!0&&(Et*=Ut,st*=Ut,Ht*=Ut),vt.set(Et,st,Ht,Ut),_t.equals(vt)===!1&&(i.clearColor(Et,st,Ht,Ut),_t.copy(vt))},reset:function(){B=!1,nt=null,_t.set(-1,0,0,0)}}}function n(){let B=!1,vt=!1,nt=null,_t=null,Et=null;return{setReversed:function(st){if(vt!==st){const Ht=t.get("EXT_clip_control");st?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),vt=st;const Ut=Et;Et=null,this.setClear(Ut)}},getReversed:function(){return vt},setTest:function(st){st?Y(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(st){nt!==st&&!B&&(i.depthMask(st),nt=st)},setFunc:function(st){if(vt&&(st=id[st]),_t!==st){switch(st){case To:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case Ao:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case Ro:i.depthFunc(i.EQUAL);break;case Co:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case Lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=st}},setLocked:function(st){B=st},setClear:function(st){Et!==st&&(Et=st,vt&&(st=1-st),i.clearDepth(st))},reset:function(){B=!1,nt=null,_t=null,Et=null,vt=!1}}}function s(){let B=!1,vt=null,nt=null,_t=null,Et=null,st=null,Ht=null,Ut=null,pe=null;return{setTest:function(ae){B||(ae?Y(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(ae){vt!==ae&&!B&&(i.stencilMask(ae),vt=ae)},setFunc:function(ae,on,Mn){(nt!==ae||_t!==on||Et!==Mn)&&(i.stencilFunc(ae,on,Mn),nt=ae,_t=on,Et=Mn)},setOp:function(ae,on,Mn){(st!==ae||Ht!==on||Ut!==Mn)&&(i.stencilOp(ae,on,Mn),st=ae,Ht=on,Ut=Mn)},setLocked:function(ae){B=ae},setClear:function(ae){pe!==ae&&(i.clearStencil(ae),pe=ae)},reset:function(){B=!1,vt=null,nt=null,_t=null,Et=null,st=null,Ht=null,Ut=null,pe=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,g=[],x=null,p=!1,m=null,y=null,E=null,S=null,b=null,M=null,A=null,v=new Dt(0,0,0),T=0,C=!1,D=null,U=null,O=null,I=null,N=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=Z>=2);let K=null,J={};const Mt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Zt=new xe().fromArray(Mt),Tt=new xe().fromArray(mt);function ut(B,vt,nt,_t){const Et=new Uint8Array(4),st=i.createTexture();i.bindTexture(B,st),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<nt;Ht++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(vt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return st}const G={};G[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(i.DEPTH_TEST),a.setFunc(Xs),lt(!1),dt(pc),Y(i.CULL_FACE),et(En);function Y(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function at(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function At(B,vt){return u[B]!==vt?(i.bindFramebuffer(B,vt),u[B]=vt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ft(B,vt){let nt=g,_t=!1;if(B){nt=d.get(vt),nt===void 0&&(nt=[],d.set(vt,nt));const Et=B.textures;if(nt.length!==Et.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Ht=Et.length;st<Ht;st++)nt[st]=i.COLOR_ATTACHMENT0+st;nt.length=Et.length,_t=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,_t=!0);_t&&i.drawBuffers(nt)}function Rt(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const Qt={[$i]:i.FUNC_ADD,[bf]:i.FUNC_SUBTRACT,[wf]:i.FUNC_REVERSE_SUBTRACT};Qt[Tf]=i.MIN,Qt[Ef]=i.MAX;const tt={[Af]:i.ZERO,[Rf]:i.ONE,[Cf]:i.SRC_COLOR,[Kh]:i.SRC_ALPHA,[Uf]:i.SRC_ALPHA_SATURATE,[If]:i.DST_COLOR,[Lf]:i.DST_ALPHA,[Pf]:i.ONE_MINUS_SRC_COLOR,[Jh]:i.ONE_MINUS_SRC_ALPHA,[Nf]:i.ONE_MINUS_DST_COLOR,[Df]:i.ONE_MINUS_DST_ALPHA,[Ff]:i.CONSTANT_COLOR,[Of]:i.ONE_MINUS_CONSTANT_COLOR,[Bf]:i.CONSTANT_ALPHA,[zf]:i.ONE_MINUS_CONSTANT_ALPHA};function et(B,vt,nt,_t,Et,st,Ht,Ut,pe,ae){if(B===En){p===!0&&(at(i.BLEND),p=!1);return}if(p===!1&&(Y(i.BLEND),p=!0),B!==yf){if(B!==m||ae!==C){if((y!==$i||b!==$i)&&(i.blendEquation(i.FUNC_ADD),y=$i,b=$i),ae)switch(B){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case li:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:re("WebGLState: Invalid blending: ",B);break}else switch(B){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mc:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gc:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",B);break}E=null,S=null,M=null,A=null,v.set(0,0,0),T=0,m=B,C=ae}return}Et=Et||vt,st=st||nt,Ht=Ht||_t,(vt!==y||Et!==b)&&(i.blendEquationSeparate(Qt[vt],Qt[Et]),y=vt,b=Et),(nt!==E||_t!==S||st!==M||Ht!==A)&&(i.blendFuncSeparate(tt[nt],tt[_t],tt[st],tt[Ht]),E=nt,S=_t,M=st,A=Ht),(Ut.equals(v)===!1||pe!==T)&&(i.blendColor(Ut.r,Ut.g,Ut.b,pe),v.copy(Ut),T=pe),m=B,C=!1}function ot(B,vt){B.side===De?at(i.CULL_FACE):Y(i.CULL_FACE);let nt=B.side===Xe;vt&&(nt=!nt),lt(nt),B.blending===Us&&B.transparent===!1?et(En):et(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const _t=B.stencilWrite;o.setTest(_t),_t&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Gt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){D!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),D=B)}function dt(B){B!==_f?(Y(i.CULL_FACE),B!==U&&(B===pc?i.cullFace(i.BACK):B===Mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),U=B}function Ot(B){B!==O&&(z&&i.lineWidth(B),O=B)}function Gt(B,vt,nt){B?(Y(i.POLYGON_OFFSET_FILL),(I!==vt||N!==nt)&&(I=vt,N=nt,a.getReversed()&&(vt=-vt),i.polygonOffset(vt,nt))):at(i.POLYGON_OFFSET_FILL)}function Yt(B){B?Y(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function Bt(B){B===void 0&&(B=i.TEXTURE0+V-1),K!==B&&(i.activeTexture(B),K=B)}function L(B,vt,nt){nt===void 0&&(K===null?nt=i.TEXTURE0+V-1:nt=K);let _t=J[nt];_t===void 0&&(_t={type:void 0,texture:void 0},J[nt]=_t),(_t.type!==B||_t.texture!==vt)&&(K!==nt&&(i.activeTexture(nt),K=nt),i.bindTexture(B,vt||G[B]),_t.type=B,_t.texture=vt)}function Xt(){const B=J[K];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Vt(){try{i.compressedTexImage2D(...arguments)}catch(B){re("WebGLState:",B)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(B){re("WebGLState:",B)}}function _(){try{i.texSubImage2D(...arguments)}catch(B){re("WebGLState:",B)}}function k(){try{i.texSubImage3D(...arguments)}catch(B){re("WebGLState:",B)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(B){re("WebGLState:",B)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(B){re("WebGLState:",B)}}function ct(){try{i.texStorage2D(...arguments)}catch(B){re("WebGLState:",B)}}function pt(){try{i.texStorage3D(...arguments)}catch(B){re("WebGLState:",B)}}function j(){try{i.texImage2D(...arguments)}catch(B){re("WebGLState:",B)}}function it(){try{i.texImage3D(...arguments)}catch(B){re("WebGLState:",B)}}function gt(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function zt(B,vt){f[B]!==vt&&(i.pixelStorei(B,vt),f[B]=vt)}function yt(B){Zt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Zt.copy(B))}function xt(B){Tt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Tt.copy(B))}function kt(B,vt){let nt=c.get(vt);nt===void 0&&(nt=new WeakMap,c.set(vt,nt));let _t=nt.get(B);_t===void 0&&(_t=i.getUniformBlockIndex(vt,B.name),nt.set(B,_t))}function qt(B,vt){const _t=c.get(vt).get(B);l.get(vt)!==_t&&(i.uniformBlockBinding(vt,_t,B.__bindingPointIndex),l.set(vt,_t))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},K=null,J={},u={},d=new WeakMap,g=[],x=null,p=!1,m=null,y=null,E=null,S=null,b=null,M=null,A=null,v=new Dt(0,0,0),T=0,C=!1,D=null,U=null,O=null,I=null,N=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:at,bindFramebuffer:At,drawBuffers:ft,useProgram:Rt,setBlending:et,setMaterial:ot,setFlipSided:lt,setCullFace:dt,setLineWidth:Ot,setPolygonOffset:Gt,setScissorTest:Yt,activeTexture:Bt,bindTexture:L,unbindTexture:Xt,compressedTexImage2D:Vt,compressedTexImage3D:R,texImage2D:j,texImage3D:it,pixelStorei:zt,getParameter:gt,updateUBOMapping:kt,uniformBlockBinding:qt,texStorage2D:ct,texStorage3D:pt,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:H,compressedTexSubImage3D:Q,scissor:yt,viewport:xt,reset:Jt}}function Ev(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,_){return g?new OffscreenCanvas(R,_):aa("canvas")}function p(R,_,k){let H=1;const Q=Vt(R);if((Q.width>k||Q.height>k)&&(H=k/Math.max(Q.width,Q.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ct=Math.floor(H*Q.width),pt=Math.floor(H*Q.height);u===void 0&&(u=x(ct,pt));const j=_?x(ct,pt):u;return j.width=ct,j.height=pt,j.getContext("2d").drawImage(R,0,0,ct,pt),$t("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ct+"x"+pt+")."),j}else return"data"in R&&$t("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,_,k,H,Q,ct=!1){if(R!==null){if(i[R]!==void 0)return i[R];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pt;H&&(pt=t.get("EXT_texture_norm16"),pt||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===i.RED&&(k===i.FLOAT&&(j=i.R32F),k===i.HALF_FLOAT&&(j=i.R16F),k===i.UNSIGNED_BYTE&&(j=i.R8),k===i.UNSIGNED_SHORT&&pt&&(j=pt.R16_EXT),k===i.SHORT&&pt&&(j=pt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.R8UI),k===i.UNSIGNED_SHORT&&(j=i.R16UI),k===i.UNSIGNED_INT&&(j=i.R32UI),k===i.BYTE&&(j=i.R8I),k===i.SHORT&&(j=i.R16I),k===i.INT&&(j=i.R32I)),_===i.RG&&(k===i.FLOAT&&(j=i.RG32F),k===i.HALF_FLOAT&&(j=i.RG16F),k===i.UNSIGNED_BYTE&&(j=i.RG8),k===i.UNSIGNED_SHORT&&pt&&(j=pt.RG16_EXT),k===i.SHORT&&pt&&(j=pt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RG8UI),k===i.UNSIGNED_SHORT&&(j=i.RG16UI),k===i.UNSIGNED_INT&&(j=i.RG32UI),k===i.BYTE&&(j=i.RG8I),k===i.SHORT&&(j=i.RG16I),k===i.INT&&(j=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGB8UI),k===i.UNSIGNED_SHORT&&(j=i.RGB16UI),k===i.UNSIGNED_INT&&(j=i.RGB32UI),k===i.BYTE&&(j=i.RGB8I),k===i.SHORT&&(j=i.RGB16I),k===i.INT&&(j=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),k===i.UNSIGNED_INT&&(j=i.RGBA32UI),k===i.BYTE&&(j=i.RGBA8I),k===i.SHORT&&(j=i.RGBA16I),k===i.INT&&(j=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&pt&&(j=pt.RGB16_EXT),k===i.SHORT&&pt&&(j=pt.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),_===i.RGBA){const it=ct?ra:ie.getTransfer(Q);k===i.FLOAT&&(j=i.RGBA32F),k===i.HALF_FLOAT&&(j=i.RGBA16F),k===i.UNSIGNED_BYTE&&(j=it===le?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&pt&&(j=pt.RGBA16_EXT),k===i.SHORT&&pt&&(j=pt.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function b(R,_){let k;return R?_===null||_===Cn||_===Ys?k=i.DEPTH24_STENCIL8:_===pn?k=i.DEPTH32F_STENCIL8:_===qs&&(k=i.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Cn||_===Ys?k=i.DEPTH_COMPONENT24:_===pn?k=i.DEPTH_COMPONENT32F:_===qs&&(k=i.DEPTH_COMPONENT16),k}function M(R,_){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ie&&R.minFilter!==Ee?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function A(R){const _=R.target;_.removeEventListener("dispose",A),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function v(R){const _=R.target;_.removeEventListener("dispose",v),D(_)}function T(R){const _=n.get(R);if(_.__webglInit===void 0)return;const k=R.source,H=d.get(k);if(H){const Q=H[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(R),Object.keys(H).length===0&&d.delete(k)}n.remove(R)}function C(R){const _=n.get(R);i.deleteTexture(_.__webglTexture);const k=R.source,H=d.get(k);delete H[_.__cacheKey],a.memory.textures--}function D(R){const _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let Q=0;Q<_.__webglFramebuffer[H].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[H][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=R.textures;for(let H=0,Q=k.length;H<Q;H++){const ct=n.get(k[H]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(k[H])}n.remove(R)}let U=0;function O(){U=0}function I(){return U}function N(R){U=R}function V(){const R=U;return R>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function z(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function Z(R,_){const k=n.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const H=R.image;if(H===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{at(k,R,_);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function q(R,_){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){at(k,R,_);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function K(R,_){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){at(k,R,_);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function J(R,_){const k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){At(k,R,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}const Mt={[as]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[Do]:i.MIRRORED_REPEAT},mt={[Ie]:i.NEAREST,[Vf]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[Ee]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},Zt={[qf]:i.NEVER,[Jf]:i.ALWAYS,[Yf]:i.LESS,[zl]:i.LEQUAL,[$f]:i.EQUAL,[kl]:i.GEQUAL,[Zf]:i.GREATER,[Kf]:i.NOTEQUAL};function Tt(R,_){if(_.type===pn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ee||_.magFilter===Na||_.magFilter===or||_.magFilter===Gn||_.minFilter===Ee||_.minFilter===Na||_.minFilter===or||_.minFilter===Gn)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Mt[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Mt[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Mt[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,mt[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,mt[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Zt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ie||_.minFilter!==or&&_.minFilter!==Gn||_.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ut(R,_){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",A));const H=_.source;let Q=d.get(H);Q===void 0&&(Q={},d.set(H,Q));const ct=z(_);if(ct!==R.__cacheKey){Q[ct]===void 0&&(Q[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[ct].usedTimes++;const pt=Q[R.__cacheKey];pt!==void 0&&(Q[R.__cacheKey].usedTimes--,pt.usedTimes===0&&C(_)),R.__cacheKey=ct,R.__webglTexture=Q[ct].texture}return k}function G(R,_,k){return Math.floor(Math.floor(R/k)/_)}function Y(R,_,k,H){const ct=R.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,H,_.data);else{ct.sort((zt,yt)=>zt.start-yt.start);let pt=0;for(let zt=1;zt<ct.length;zt++){const yt=ct[pt],xt=ct[zt],kt=yt.start+yt.count,qt=G(xt.start,_.width,4),Jt=G(yt.start,_.width,4);xt.start<=kt+1&&qt===Jt&&G(xt.start+xt.count-1,_.width,4)===qt?yt.count=Math.max(yt.count,xt.start+xt.count-yt.start):(++pt,ct[pt]=xt)}ct.length=pt+1;const j=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let zt=0,yt=ct.length;zt<yt;zt++){const xt=ct[zt],kt=Math.floor(xt.start/4),qt=Math.ceil(xt.count/4),Jt=kt%_.width,B=Math.floor(kt/_.width),vt=qt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,Jt,B,vt,nt,k,H,_.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function at(R,_,k){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);const Q=ut(R,_),ct=_.source;e.bindTexture(H,R.__webglTexture,i.TEXTURE0+k);const pt=n.get(ct);if(ct.version!==pt.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const nt=ie.getPrimaries(ie.workingColorSpace),_t=_.colorSpace===kn?null:ie.getPrimaries(_.colorSpace),Et=_.colorSpace===kn||nt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let it=p(_.image,!1,s.maxTextureSize);it=Xt(_,it);const gt=r.convert(_.format,_.colorSpace),zt=r.convert(_.type);let yt=S(_.internalFormat,gt,zt,_.normalized,_.colorSpace,_.isVideoTexture);Tt(H,_);let xt;const kt=_.mipmaps,qt=_.isVideoTexture!==!0,Jt=pt.__version===void 0||Q===!0,B=ct.dataReady,vt=M(_,it);if(_.isDepthTexture)yt=b(_.format===_i,_.type),Jt&&(qt?e.texStorage2D(i.TEXTURE_2D,1,yt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,yt,it.width,it.height,0,gt,zt,null));else if(_.isDataTexture)if(kt.length>0){qt&&Jt&&e.texStorage2D(i.TEXTURE_2D,vt,yt,kt[0].width,kt[0].height);for(let nt=0,_t=kt.length;nt<_t;nt++)xt=kt[nt],qt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,xt.width,xt.height,gt,zt,xt.data):e.texImage2D(i.TEXTURE_2D,nt,yt,xt.width,xt.height,0,gt,zt,xt.data);_.generateMipmaps=!1}else qt?(Jt&&e.texStorage2D(i.TEXTURE_2D,vt,yt,it.width,it.height),B&&Y(_,it,gt,zt)):e.texImage2D(i.TEXTURE_2D,0,yt,it.width,it.height,0,gt,zt,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){qt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,yt,kt[0].width,kt[0].height,it.depth);for(let nt=0,_t=kt.length;nt<_t;nt++)if(xt=kt[nt],_.format!==mn)if(gt!==null)if(qt){if(B)if(_.layerUpdates.size>0){const Et=jc(xt.width,xt.height,_.format,_.type);for(const st of _.layerUpdates){const Ht=xt.data.subarray(st*Et/xt.data.BYTES_PER_ELEMENT,(st+1)*Et/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,st,xt.width,xt.height,1,gt,Ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,it.depth,gt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,yt,xt.width,xt.height,it.depth,0,xt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,it.depth,gt,zt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,yt,xt.width,xt.height,it.depth,0,gt,zt,xt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{qt&&Jt&&e.texStorage2D(i.TEXTURE_2D,vt,yt,kt[0].width,kt[0].height);for(let nt=0,_t=kt.length;nt<_t;nt++)xt=kt[nt],_.format!==mn?gt!==null?qt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,yt,xt.width,xt.height,0,xt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,xt.width,xt.height,gt,zt,xt.data):e.texImage2D(i.TEXTURE_2D,nt,yt,xt.width,xt.height,0,gt,zt,xt.data)}else if(_.isDataArrayTexture)if(qt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,yt,it.width,it.height,it.depth),B)if(_.layerUpdates.size>0){const nt=jc(it.width,it.height,_.format,_.type);for(const _t of _.layerUpdates){const Et=it.data.subarray(_t*nt/it.data.BYTES_PER_ELEMENT,(_t+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,it.width,it.height,1,gt,zt,Et)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,zt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,it.width,it.height,it.depth,0,gt,zt,it.data);else if(_.isData3DTexture)qt?(Jt&&e.texStorage3D(i.TEXTURE_3D,vt,yt,it.width,it.height,it.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,zt,it.data)):e.texImage3D(i.TEXTURE_3D,0,yt,it.width,it.height,it.depth,0,gt,zt,it.data);else if(_.isFramebufferTexture){if(Jt)if(qt)e.texStorage2D(i.TEXTURE_2D,vt,yt,it.width,it.height);else{let nt=it.width,_t=it.height;for(let Et=0;Et<vt;Et++)e.texImage2D(i.TEXTURE_2D,Et,yt,nt,_t,0,gt,zt,null),nt>>=1,_t>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),f.add(_),nt.onpaint=_t=>{const Et=_t.changedElements;for(const st of f)Et.includes(st.image)&&(st.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{const Et=i.RGBA,st=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,st,Ht,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(kt.length>0){if(qt&&Jt){const nt=Vt(kt[0]);e.texStorage2D(i.TEXTURE_2D,vt,yt,nt.width,nt.height)}for(let nt=0,_t=kt.length;nt<_t;nt++)xt=kt[nt],qt?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,gt,zt,xt):e.texImage2D(i.TEXTURE_2D,nt,yt,gt,zt,xt);_.generateMipmaps=!1}else if(qt){if(Jt){const nt=Vt(it);e.texStorage2D(i.TEXTURE_2D,vt,yt,nt.width,nt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,zt,it)}else e.texImage2D(i.TEXTURE_2D,0,yt,gt,zt,it);m(_)&&y(H),pt.__version=ct.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function At(R,_,k){if(_.image.length!==6)return;const H=ut(R,_),Q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);const ct=n.get(Q);if(Q.version!==ct.__version||H===!0){e.activeTexture(i.TEXTURE0+k);const pt=ie.getPrimaries(ie.workingColorSpace),j=_.colorSpace===kn?null:ie.getPrimaries(_.colorSpace),it=_.colorSpace===kn||pt===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const gt=_.isCompressedTexture||_.image[0].isCompressedTexture,zt=_.image[0]&&_.image[0].isDataTexture,yt=[];for(let st=0;st<6;st++)!gt&&!zt?yt[st]=p(_.image[st],!0,s.maxCubemapSize):yt[st]=zt?_.image[st].image:_.image[st],yt[st]=Xt(_,yt[st]);const xt=yt[0],kt=r.convert(_.format,_.colorSpace),qt=r.convert(_.type),Jt=S(_.internalFormat,kt,qt,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,vt=ct.__version===void 0||H===!0,nt=Q.dataReady;let _t=M(_,xt);Tt(i.TEXTURE_CUBE_MAP,_);let Et;if(gt){B&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Jt,xt.width,xt.height);for(let st=0;st<6;st++){Et=yt[st].mipmaps;for(let Ht=0;Ht<Et.length;Ht++){const Ut=Et[Ht];_.format!==mn?kt!==null?B?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ht,0,0,Ut.width,Ut.height,kt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ht,Jt,Ut.width,Ut.height,0,Ut.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ht,0,0,Ut.width,Ut.height,kt,qt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ht,Jt,Ut.width,Ut.height,0,kt,qt,Ut.data)}}}else{if(Et=_.mipmaps,B&&vt){Et.length>0&&_t++;const st=Vt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Jt,st.width,st.height)}for(let st=0;st<6;st++)if(zt){B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,yt[st].width,yt[st].height,kt,qt,yt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Jt,yt[st].width,yt[st].height,0,kt,qt,yt[st].data);for(let Ht=0;Ht<Et.length;Ht++){const pe=Et[Ht].image[st].image;B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ht+1,0,0,pe.width,pe.height,kt,qt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ht+1,Jt,pe.width,pe.height,0,kt,qt,pe.data)}}else{B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,kt,qt,yt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Jt,kt,qt,yt[st]);for(let Ht=0;Ht<Et.length;Ht++){const Ut=Et[Ht];B?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ht+1,0,0,kt,qt,Ut.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ht+1,Jt,kt,qt,Ut.image[st])}}}m(_)&&y(i.TEXTURE_CUBE_MAP),ct.__version=Q.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ft(R,_,k,H,Q,ct){const pt=r.convert(k.format,k.colorSpace),j=r.convert(k.type),it=S(k.internalFormat,pt,j,k.normalized,k.colorSpace),gt=n.get(_),zt=n.get(k);if(zt.__renderTarget=_,!gt.__hasExternalTextures){const yt=Math.max(1,_.width>>ct),xt=Math.max(1,_.height>>ct);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,ct,it,yt,xt,_.depth,0,pt,j,null):e.texImage2D(Q,ct,it,yt,xt,0,pt,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Q,zt.__webglTexture,0,Yt(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Q,zt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(R,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){const H=_.depthTexture,Q=H&&H.isDepthTexture?H.type:null,ct=b(_.stencilBuffer,Q),pt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Bt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(_),ct,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(_),ct,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ct,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,R)}else{const H=_.textures;for(let Q=0;Q<H.length;Q++){const ct=H[Q],pt=r.convert(ct.format,ct.colorSpace),j=r.convert(ct.type),it=S(ct.internalFormat,pt,j,ct.normalized,ct.colorSpace);Bt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(_),it,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(_),it,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,it,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(R,_,k){const H=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,_.depthTexture);const gt=r.convert(_.depthTexture.format),zt=r.convert(_.depthTexture.type);let yt;_.depthTexture.format===Xn?yt=i.DEPTH_COMPONENT24:_.depthTexture.format===_i&&(yt=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,yt,_.width,_.height,0,gt,zt,null)}}else Z(_.depthTexture,0);const ct=Q.__webglTexture,pt=Yt(_),j=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,it=_.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Xn)Bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,j,ct,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,it,j,ct,0);else if(_.depthTexture.format===_i)Bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,j,ct,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,it,j,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(R){const _=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const H=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",Q)};H.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=H}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let H=0;H<6;H++)Qt(_.__webglFramebuffer[H],R,H);else{const H=R.texture.mipmaps;H&&H.length>0?Qt(_.__webglFramebuffer[0],R,0):Qt(_.__webglFramebuffer,R,0)}else if(k){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),Rt(_.__webglDepthbuffer[H],R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ct)}}else{const H=R.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Rt(_.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(R,_,k){const H=n.get(R);_!==void 0&&ft(H.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&tt(R)}function ot(R){const _=R.texture,k=n.get(R),H=n.get(_);R.addEventListener("dispose",v);const Q=R.textures,ct=R.isWebGLCubeRenderTarget===!0,pt=Q.length>1;if(pt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),ct){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let it=0;it<_.mipmaps.length;it++)k.__webglFramebuffer[j][it]=i.createFramebuffer()}else k.__webglFramebuffer[j]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)k.__webglFramebuffer[j]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(pt)for(let j=0,it=Q.length;j<it;j++){const gt=n.get(Q[j]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Bt(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const it=Q[j];k.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[j]);const gt=r.convert(it.format,it.colorSpace),zt=r.convert(it.type),yt=S(it.internalFormat,gt,zt,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),xt=Yt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,k.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)ft(k.__webglFramebuffer[j][it],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,it);else ft(k.__webglFramebuffer[j],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(_)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let j=0,it=Q.length;j<it;j++){const gt=Q[j],zt=n.get(gt);let yt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(yt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,zt.__webglTexture),Tt(yt,gt),ft(k.__webglFramebuffer,R,gt,i.COLOR_ATTACHMENT0+j,yt,0),m(gt)&&y(yt)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,H.__webglTexture),Tt(j,_),_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)ft(k.__webglFramebuffer[it],R,_,i.COLOR_ATTACHMENT0,j,it);else ft(k.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,j,0);m(_)&&y(j),e.unbindTexture()}R.depthBuffer&&tt(R)}function lt(R){const _=R.textures;for(let k=0,H=_.length;k<H;k++){const Q=_[k];if(m(Q)){const ct=E(R),pt=n.get(Q).__webglTexture;e.bindTexture(ct,pt),y(ct),e.unbindTexture()}}}const dt=[],Ot=[];function Gt(R){if(R.samples>0){if(Bt(R)===!1){const _=R.textures,k=R.width,H=R.height;let Q=i.COLOR_BUFFER_BIT;const ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(R),j=_.length>1;if(j)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);const it=R.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);const zt=n.get(_[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,k,H,0,0,k,H,Q,i.NEAREST),l===!0&&(dt.length=0,Ot.length=0,dt.push(i.COLOR_ATTACHMENT0+gt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(dt.push(ct),Ot.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);const zt=n.get(_[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Yt(R){return Math.min(s.maxSamples,R.samples)}function Bt(R){const _=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(R){const _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function Xt(R,_){const k=R.colorSpace,H=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==sa&&k!==kn&&(ie.getTransfer(k)===le?(H!==mn||Q!==je)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",k)),_}function Vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=et,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Av(i,t){function e(n,s=kn){let r;const a=ie.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tu)return i.BYTE;if(n===eu)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===Dl)return i.INT;if(n===Cn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===qe)return i.HALF_FLOAT;if(n===su)return i.ALPHA;if(n===ru)return i.RGB;if(n===mn)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Ul)return i.RED;if(n===Fl)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===Ol)return i.RG_INTEGER;if(n===Bl)return i.RGBA_INTEGER;if(n===Xr||n===qr||n===Yr||n===$r)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===No||n===Uo||n===Fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===Bo||n===zo||n===ko||n===Go||n===na||n===Vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oo||n===Bo)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ko)return r.COMPRESSED_R11_EAC;if(n===Go)return r.COMPRESSED_SIGNED_R11_EAC;if(n===na)return r.COMPRESSED_RG11_EAC;if(n===Vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo||n===Ko||n===Jo||n===Qo||n===jo||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ho)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$o)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ko)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===il)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ol||n===ia||n===ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new mu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ae({vertexShader:Rv,fragmentShader:Cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lv extends Ei{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",p=new Pv,m={},y=e.getContextAttributes();let E=null,S=null;const b=[],M=[],A=new rt;let v=null,T=null;const C=new $e;C.viewport=new xe;const D=new $e;D.viewport=new xe;const U=[C,D],O=new Bp;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=b[G];return Y===void 0&&(Y=new Ga,b[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=b[G];return Y===void 0&&(Y=new Ga,b[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=b[G];return Y===void 0&&(Y=new Ga,b[G]=Y),Y.getHandSpace()};function V(G){const Y=M.indexOf(G.inputSource);if(Y===-1)return;const at=b[Y];at!==void 0&&(at.update(G.inputSource,G.frame,c||a),at.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Z);for(let G=0;G<b.length;G++){const Y=M[G];Y!==null&&(M[G]=null,b[G].disconnect(Y))}I=null,N=null,p.reset();for(const G in m)delete m[G];if(t.setRenderTarget(E),d=null,u=null,f=null,s=null,S=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),T!==null){const G=T.camera;G.fov=T.fov,G.zoom=T.zoom,G.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,At=null,ft=null;y.depth&&(ft=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=y.stencil?_i:Xn,At=y.stencil?Ys:Cn);const Rt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Rt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Ge(u.textureWidth,u.textureHeight,{format:mn,type:je,depthTexture:new Zs(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const at={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Ge(d.framebufferWidth,d.framebufferHeight,{format:mn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Z(G){for(let Y=0;Y<G.removed.length;Y++){const at=G.removed[Y],At=M.indexOf(at);At>=0&&(M[At]=null,b[At].disconnect(at))}for(let Y=0;Y<G.added.length;Y++){const at=G.added[Y];let At=M.indexOf(at);if(At===-1){for(let Rt=0;Rt<b.length;Rt++)if(Rt>=M.length){M.push(at),At=Rt;break}else if(M[Rt]===null){M[Rt]=at,At=Rt;break}if(At===-1)break}const ft=b[At];ft&&ft.connect(at)}}const q=new P,K=new P;function J(G,Y,at){q.setFromMatrixPosition(Y.matrixWorld),K.setFromMatrixPosition(at.matrixWorld);const At=q.distanceTo(K),ft=Y.projectionMatrix.elements,Rt=at.projectionMatrix.elements,Qt=ft[14]/(ft[10]-1),tt=ft[14]/(ft[10]+1),et=(ft[9]+1)/ft[5],ot=(ft[9]-1)/ft[5],lt=(ft[8]-1)/ft[0],dt=(Rt[8]+1)/Rt[0],Ot=Qt*lt,Gt=Qt*dt,Yt=At/(-lt+dt),Bt=Yt*-lt;if(Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Bt),G.translateZ(Yt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ft[10]===-1)G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const L=Qt+Yt,Xt=tt+Yt,Vt=Ot-Bt,R=Gt+(At-Bt),_=et*tt/Xt*L,k=ot*tt/Xt*L;G.projectionMatrix.makePerspective(Vt,R,_,k,L,Xt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Mt(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Y=G.near,at=G.far;p.texture!==null&&(p.depthNear>0&&(Y=p.depthNear),p.depthFar>0&&(at=p.depthFar)),O.near=D.near=C.near=Y,O.far=D.far=C.far=at,(I!==O.near||N!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,N=O.far),O.layers.mask=G.layers.mask|6,C.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;const At=G.parent,ft=O.cameras;Mt(O,At);for(let Rt=0;Rt<ft.length;Rt++)Mt(ft[Rt],At);ft.length===2?J(O,C,D):O.projectionMatrix.copy(C.projectionMatrix),T===null&&G.isPerspectiveCamera&&(T={camera:G,fov:G.fov,zoom:G.zoom}),mt(G,O,At)};function mt(G,Y,at){at===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(at.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=os*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(G){return m[G]};let Zt=null;function Tt(G,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){const at=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let At=!1;at.length!==O.cameras.length&&(O.cameras.length=0,At=!0);for(let tt=0;tt<at.length;tt++){const et=at[tt];let ot=null;if(d!==null)ot=d.getViewport(et);else{const dt=f.getViewSubImage(u,et);ot=dt.viewport,tt===0&&(t.setRenderTargetTextures(S,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(S))}let lt=U[tt];lt===void 0&&(lt=new $e,lt.layers.enable(tt),lt.viewport=new xe,U[tt]=lt),lt.matrix.fromArray(et.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(et.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ot.x,ot.y,ot.width,ot.height),tt===0&&(O.matrix.copy(lt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),At===!0&&O.cameras.push(lt)}const ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const tt=f.getDepthInformation(at[0]);tt&&tt.isValid&&tt.texture&&p.init(tt,s.renderState)}if(ft&&ft.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let tt=0;tt<at.length;tt++){const et=at[tt].camera;if(et){let ot=m[et];ot||(ot=new mu,m[et]=ot);const lt=f.getCameraImage(et);ot.sourceTexture=lt}}}}for(let at=0;at<b.length;at++){const At=M[at],ft=b[at];At!==null&&ft!==void 0&&ft.update(At,Y,c||a)}Zt&&Zt(G,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const ut=new Pu;ut.setAnimationLoop(Tt),this.setAnimationLoop=function(G){Zt=G},this.dispose=function(){}}}const Dv=new he,Ou=new Kt;Ou.set(-1,0,0,0,1,0,0,0,1);function Iv(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Tu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,E,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Xe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Xe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),E=y.envMap,S=y.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ou),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const M=b.program;n.uniformBlockBinding(S,M)}function c(S,b){let M=s[S.id];M===void 0&&(p(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",y));const A=b.program;n.updateUBOMapping(S,A);const v=t.render.frame;r[S.id]!==v&&(u(S),r[S.id]=v)}function h(S){const b=f();S.__bindingPointIndex=b;const M=i.createBuffer(),A=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const b=s[S.id],M=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,T=M.length;v<T;v++){const C=M[v];if(Array.isArray(C))for(let D=0,U=C.length;D<U;D++)d(C[D],v,D,A);else d(C,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,b,M,A){if(x(S,b,M,A)===!0){const v=S.__offset,T=S.value;if(Array.isArray(T)){let C=0;for(let D=0;D<T.length;D++){const U=T[D],O=m(U);g(U,S.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function g(S,b,M){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,M)}function x(S,b,M,A){const v=S.value,T=b+"_"+M;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{const C=A[T];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(S){const b=S.uniforms;let M=0;const A=16;for(let T=0,C=b.length;T<C;T++){const D=Array.isArray(b[T])?b[T]:[b[T]];for(let U=0,O=D.length;U<O;U++){const I=D[U],N=Array.isArray(I.value)?I.value:[I.value];for(let V=0,z=N.length;V<z;V++){const Z=N[V],q=m(Z),K=M%A,J=K%q.boundary,Mt=K+J;M+=J,Mt!==0&&A-Mt<q.storage&&(M+=A-Mt),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=q.storage}}}const v=M%A;return v>0&&(M+=A-v),S.__size=M,S.__cache={},this}function m(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",S),b}function y(S){const b=S.target;b.removeEventListener("dispose",y);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}const Uv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function Fv(){return bn===null&&(bn=new va(Uv,16,16,wi,qe),bn.name="DFG_LUT",bn.minFilter=Ee,bn.magFilter=Ee,bn.wrapS=dn,bn.wrapT=dn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class Ov{constructor(t={}){const{canvas:e=ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=je}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=d,p=new Set([Bl,Ol,Fl]),m=new Set([je,Cn,qs,Ys,Il,Nl]),y=new Uint32Array(4),E=new Int32Array(4),S=new P;let b=null,M=null;const A=[],v=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,U=null,O=null,I=null,N=null;this._outputColorSpace=Be;let V=0,z=0,Z=null,q=-1,K=null;const J=new xe,Mt=new xe;let mt=null;const Zt=new Dt(0);let Tt=0,ut=e.width,G=e.height,Y=1,at=null,At=null;const ft=new xe(0,0,ut,G),Rt=new xe(0,0,ut,G);let Qt=!1;const tt=new Wl;let et=!1,ot=!1;const lt=new he,dt=new P,Ot=new xe,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Bt(){return Z===null?Y:1}let L=n;function Xt(w,F){return e.getContext(w,F)}let Vt,R,_,k,H,Q,ct,pt,j,it,gt,zt,yt,xt,kt,qt,Jt,B,vt,nt,_t,Et,st;try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tl}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",on,!1),L===null){const F="webgl2";if(L=Xt(F,w),L===null)throw Xt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(w){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",on,!1),re("WebGLRenderer: "+w.message),w}function Ht(){Vt=new Fg(L),Vt.init(),_t=new Av(L,Vt),R=new Eg(L,Vt,t,_t),_=new Tv(L,Vt),R.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),O=L.createFramebuffer(),I=L.createFramebuffer(),N=L.createFramebuffer(),k=new zg(L),H=new uv,Q=new Ev(L,Vt,_,H,R,_t,k),ct=new Ug(C),pt=new Gp(L),Et=new wg(L,pt),j=new Og(L,pt,k,Et),it=new Gg(L,j,pt,Et,k),B=new kg(L,R,Q),kt=new Ag(H),gt=new hv(C,ct,Vt,R,Et,kt),zt=new Iv(C,H),yt=new dv,xt=new _v(Vt),Jt=new bg(C,ct,_,it,g,l),qt=new wv(C,it,R),st=new Nv(L,k,R,_),vt=new Tg(L,Vt,k),nt=new Bg(L,Vt,k),k.programs=gt.programs,C.capabilities=R,C.extensions=Vt,C.properties=H,C.renderLists=yt,C.shadowMap=qt,C.state=_,C.info=k}x!==je&&(T=new Hg(x,e.width,e.height,o,s,r));const Ut=new Lv(C,L);this.xr=Ut,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(ut,G,!1))},this.getSize=function(w){return w.set(ut,G)},this.setSize=function(w,F,$=!0){if(Ut.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=w,G=F,e.width=Math.floor(w*Y),e.height=Math.floor(F*Y),$===!0&&(e.style.width=w+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(ut*Y,G*Y).floor()},this.setDrawingBufferSize=function(w,F,$){ut=w,G=F,Y=$,e.width=Math.floor(w*$),e.height=Math.floor(F*$),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(x===je){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(ft)},this.setViewport=function(w,F,$,W){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,F,$,W),_.viewport(J.copy(ft).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Rt)},this.setScissor=function(w,F,$,W){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,F,$,W),_.scissor(Mt.copy(Rt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(w){_.setScissorTest(Qt=w)},this.setOpaqueSort=function(w){at=w},this.setTransparentSort=function(w){At=w},this.getClearColor=function(w){return w.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,$=!0){let W=0;if(w){let X=!1;if(Z!==null){const wt=Z.texture.format;X=p.has(wt)}if(X){const wt=Z.texture.type,Pt=m.has(wt),bt=Jt.getClearColor(),It=Jt.getClearAlpha(),Ft=bt.r,jt=bt.g,ne=bt.b;Pt?(y[0]=Ft,y[1]=jt,y[2]=ne,y[3]=It,L.clearBufferuiv(L.COLOR,0,y)):(E[0]=Ft,E[1]=jt,E[2]=ne,E[3]=It,L.clearBufferiv(L.COLOR,0,E))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",on,!1),Jt.dispose(),yt.dispose(),xt.dispose(),H.dispose(),ct.dispose(),it.dispose(),Et.dispose(),st.dispose(),gt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",rc),Ut.removeEventListener("sessionend",ac),ui.stop()};function pe(w){w.preventDefault(),_c("WebGLRenderer: Context Lost."),D=!0}function ae(){_c("WebGLRenderer: Context Restored."),D=!1;const w=k.autoReset,F=qt.enabled,$=qt.autoUpdate,W=qt.needsUpdate,X=qt.type;Ht(),k.autoReset=w,qt.enabled=F,qt.autoUpdate=$,qt.needsUpdate=W,qt.type=X}function on(w){re("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Mn(w){const F=w.target;F.removeEventListener("dispose",Mn),ff(F)}function ff(w){df(w),H.remove(w)}function df(w){const F=H.get(w).programs;F!==void 0&&(F.forEach(function($){gt.releaseProgram($)}),w.isShaderMaterial&&gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,$,W,X,wt){F===null&&(F=Gt);const Pt=X.isMesh&&X.matrixWorld.determinantAffine()<0,bt=gf(w,F,$,W,X);_.setMaterial(W,Pt);let It=$.index,Ft=1;if(W.wireframe===!0){if(It=j.getWireframeAttribute($),It===void 0)return;Ft=2}const jt=$.drawRange,ne=$.attributes.position;let Nt=jt.start*Ft,oe=(jt.start+jt.count)*Ft;wt!==null&&(Nt=Math.max(Nt,wt.start*Ft),oe=Math.min(oe,(wt.start+wt.count)*Ft)),It!==null?(Nt=Math.max(Nt,0),oe=Math.min(oe,It.count)):ne!=null&&(Nt=Math.max(Nt,0),oe=Math.min(oe,ne.count));const ye=oe-Nt;if(ye<0||ye===1/0)return;Et.setup(X,W,bt,$,It);let ge,fe=vt;if(It!==null&&(ge=pt.get(It),fe=nt,fe.setIndex(ge)),X.isMesh)W.wireframe===!0?(_.setLineWidth(W.wireframeLinewidth*Bt()),fe.setMode(L.LINES)):fe.setMode(L.TRIANGLES);else if(X.isLine){let Ue=W.linewidth;Ue===void 0&&(Ue=1),_.setLineWidth(Ue*Bt()),X.isLineSegments?fe.setMode(L.LINES):X.isLineLoop?fe.setMode(L.LINE_LOOP):fe.setMode(L.LINE_STRIP)}else X.isPoints?fe.setMode(L.POINTS):X.isSprite&&fe.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(Vt.get("WEBGL_multi_draw"))fe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ue=X._multiDrawStarts,Ct=X._multiDrawCounts,Ve=X._multiDrawCount,se=It?pt.get(It).bytesPerElement:1,nn=H.get(W).currentProgram.getUniforms();for(let Sn=0;Sn<Ve;Sn++)nn.setValue(L,"_gl_DrawID",Sn),fe.render(Ue[Sn]/se,Ct[Sn])}else if(X.isInstancedMesh)fe.renderInstances(Nt,ye,X.count);else if($.isInstancedBufferGeometry){const Ue=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ct=Math.min($.instanceCount,Ue);fe.renderInstances(Nt,ye,Ct)}else fe.render(Nt,ye)};function sc(w,F,$,W){U!==null&&w.isNodeMaterial&&U.setObject(W,w),et===!0&&kt.setState(w,$,!1),w.transparent===!0&&w.side===De&&w.forceSinglePass===!1?(w.side=Xe,w.needsUpdate=!0,ar(w,F,W),w.side=yi,w.needsUpdate=!0,ar(w,F,W),w.side=De):ar(w,F,W)}this.compile=function(w,F,$=null){$===null&&($=w),U!==null&&U.renderStart(w,F,$),M=xt.get($),M.init(F),v.push(M),$.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),w!==$&&w.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),M.setupLights(),U!==null&&U.updateLights(M.state.lightsArray),ot=this.localClippingEnabled,et=kt.init(this.clippingPlanes,ot),et===!0&&kt.setGlobalState(this.clippingPlanes,F),U!==null&&qt.render(M.state.shadowsArray,$,F);const W=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const wt=X.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){const bt=wt[Pt];sc(bt,$,F,X),W.add(bt)}else sc(wt,$,F,X),W.add(wt)}),M=v.pop(),U!==null&&U.renderEnd(),W},this.compileAsync=function(w,F,$=null){const W=this.compile(w,F,$);return new Promise(X=>{function wt(){if(W.forEach(function(Pt){const It=H.get(Pt).currentProgram;(It===void 0||It.isReady())&&W.delete(Pt)}),W.size===0){X(w);return}setTimeout(wt,10)}Vt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Pa=null;function pf(w){Pa&&Pa(w)}function rc(){ui.stop()}function ac(){ui.start()}const ui=new Pu;ui.setAnimationLoop(pf),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(w){Pa=w,Ut.setAnimationLoop(w),w===null?ui.stop():ui.start()},Ut.addEventListener("sessionstart",rc),Ut.addEventListener("sessionend",ac),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(w,F);const $=Ut.enabled===!0&&Ut.isPresenting===!0,W=T!==null&&(Z===null||$)&&T.begin(C,Z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(F),F=Ut.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,F,Z),M=xt.get(w,v.length),M.init(F),M.state.textureUnits=Q.getTextureUnits(),v.push(M),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),tt.setFromProjectionMatrix(lt,Tn,F.reversedDepth),ot=this.localClippingEnabled,et=kt.init(this.clippingPlanes,ot),b=yt.get(w,A.length),b.init(),A.push(b),Ut.enabled===!0&&Ut.isPresenting===!0){const Pt=C.xr.getDepthSensingMesh();Pt!==null&&La(Pt,F,-1/0,C.sortObjects)}La(w,F,0,C.sortObjects),b.finish(),U!==null&&U.updateLights(M.state.lightsArray),C.sortObjects===!0&&b.sort(at,At),Yt=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Yt&&Jt.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&kt.beginShadows();const X=M.state.shadowsArray;if(qt.render(X,w,F),et===!0&&kt.endShadows(),(W&&T.hasRenderPass())===!1){const Pt=b.opaque,bt=b.transmissive;if(M.setupLights(),F.isArrayCamera){const It=F.cameras;if(bt.length>0)for(let Ft=0,jt=It.length;Ft<jt;Ft++){const ne=It[Ft];lc(Pt,bt,w,ne)}Yt&&Jt.render(w);for(let Ft=0,jt=It.length;Ft<jt;Ft++){const ne=It[Ft];oc(b,w,ne,ne.viewport)}}else bt.length>0&&lc(Pt,bt,w,F),Yt&&Jt.render(w),oc(b,w,F)}Z!==null&&z===0&&(Q.updateMultisampleRenderTarget(Z),Q.updateRenderTargetMipmap(Z)),W&&T.end(C),w.isScene===!0&&w.onAfterRender(C,w,F),Et.resetDefaultState(),q=-1,K=null,v.pop(),v.length>0?(M=v[v.length-1],Q.setTextureUnits(M.state.textureUnits),et===!0&&kt.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,U!==null&&U.renderEnd()};function La(w,F,$,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(tt)){W&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);const Pt=it.update(w),bt=w.material;bt.visible&&b.push(w,Pt,bt,$,Ot.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(tt))){const Pt=it.update(w),bt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ot.copy(Pt.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(bt)){const It=Pt.groups;for(let Ft=0,jt=It.length;Ft<jt;Ft++){const ne=It[Ft],Nt=bt[ne.materialIndex];Nt&&Nt.visible&&b.push(w,Pt,Nt,$,Ot.z,ne,F)}}else bt.visible&&b.push(w,Pt,bt,$,Ot.z,null,F)}}const wt=w.children;for(let Pt=0,bt=wt.length;Pt<bt;Pt++)La(wt[Pt],F,$,W)}function oc(w,F,$,W){const{opaque:X,transmissive:wt,transparent:Pt}=w;M.setupLightsView($),et===!0&&kt.setGlobalState(C.clippingPlanes,$),W&&_.viewport(J.copy(W)),X.length>0&&rr(X,F,$),wt.length>0&&rr(wt,F,$),Pt.length>0&&rr(Pt,F,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function lc(w,F,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[W.id]===void 0){const Nt=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[W.id]=new Ge(1,1,{generateMipmaps:!0,type:Nt?qe:je,minFilter:Gn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const wt=M.state.transmissionRenderTarget[W.id],Pt=W.viewport||J;wt.setSize(Pt.z*C.transmissionResolutionScale,Pt.w*C.transmissionResolutionScale);const bt=C.getRenderTarget(),It=C.getActiveCubeFace(),Ft=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(Zt),Tt=C.getClearAlpha(),Tt<1&&C.setClearColor(16777215,.5),C.clear(),Yt&&Jt.render($);const jt=C.toneMapping;C.toneMapping=An;const ne=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),M.setupLightsView(W),et===!0&&kt.setGlobalState(C.clippingPlanes,W),rr(w,$,W),Q.updateMultisampleRenderTarget(wt),Q.updateRenderTargetMipmap(wt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let oe=0,ye=F.length;oe<ye;oe++){const ge=F[oe],{object:fe,geometry:Ue,material:Ct,group:Ve}=ge;if(Ct.side===De&&fe.layers.test(W.layers)){const se=Ct.side;Ct.side=Xe,Ct.needsUpdate=!0,cc(fe,$,W,Ue,Ct,Ve),Ct.side=se,Ct.needsUpdate=!0,Nt=!0}}Nt===!0&&(Q.updateMultisampleRenderTarget(wt),Q.updateRenderTargetMipmap(wt))}C.setRenderTarget(bt,It,Ft),C.setClearColor(Zt,Tt),ne!==void 0&&(W.viewport=ne),C.toneMapping=jt}function rr(w,F,$){const W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,wt=w.length;X<wt;X++){const Pt=w[X],{object:bt,geometry:It,group:Ft}=Pt;let jt=Pt.material;jt.allowOverride===!0&&W!==null&&(jt=W),bt.layers.test($.layers)&&cc(bt,F,$,It,jt,Ft)}}function cc(w,F,$,W,X,wt){U!==null&&X.isNodeMaterial&&U.setObject(w,X),w.onBeforeRender(C,F,$,W,X,wt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(C,F,$,W,w,wt),X.transparent===!0&&X.side===De&&X.forceSinglePass===!1?(X.side=Xe,X.needsUpdate=!0,C.renderBufferDirect($,F,W,X,w,wt),X.side=yi,X.needsUpdate=!0,C.renderBufferDirect($,F,W,X,w,wt),X.side=De):C.renderBufferDirect($,F,W,X,w,wt),w.onAfterRender(C,F,$,W,X,wt)}function ar(w,F,$){F.isScene!==!0&&(F=Gt);const W=H.get(w),X=M.state.lights,wt=M.state.shadowsArray,Pt=X.state.version,bt=gt.getParameters(w,X.state,wt,F,$,M.state.lightProbeGridArray),It=gt.getProgramCacheKey(bt);let Ft=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const jt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=ct.get(w.envMap||W.environment,jt),W.envMapRotation=W.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ft===void 0&&(w.addEventListener("dispose",Mn),Ft=new Map,W.programs=Ft);let ne=Ft.get(It);if(ne!==void 0){if(W.currentProgram===ne&&W.lightsStateVersion===Pt)return uc(w,bt),ne}else bt.uniforms=gt.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,$,bt),w.onBeforeCompile(bt,C),ne=gt.acquireProgram(bt,It),Ft.set(It,ne),W.uniforms=bt.uniforms;const Nt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=kt.uniform),uc(w,bt),W.needsLights=vf(w),W.lightsStateVersion=Pt,W.needsLights&&(Nt.ambientLightColor.value=X.state.ambient,Nt.lightProbe.value=X.state.probe,Nt.sunLights.value=X.state.sun,Nt.sunLightShadows.value=X.state.sunShadow,Nt.directionalLights.value=X.state.directional,Nt.directionalLightShadows.value=X.state.directionalShadow,Nt.spotLights.value=X.state.spot,Nt.spotLightShadows.value=X.state.spotShadow,Nt.rectAreaLights.value=X.state.rectArea,Nt.ltc_1.value=X.state.rectAreaLTC1,Nt.ltc_2.value=X.state.rectAreaLTC2,Nt.pointLights.value=X.state.point,Nt.pointLightShadows.value=X.state.pointShadow,Nt.hemisphereLights.value=X.state.hemi,Nt.sunShadowMatrix.value=X.state.sunShadowMatrix,Nt.sunShadowCascade.value=X.state.sunShadowCascade,Nt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Nt.spotLightMatrix.value=X.state.spotLightMatrix,Nt.spotLightMap.value=X.state.spotLightMap,Nt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=M.state.lightProbeGridArray.length>0,W.currentProgram=ne,W.uniformsList=null,ne}function hc(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Kr.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function uc(w,F){const $=H.get(w);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function mf(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let $=0,W=w.length;$<W;$++){const X=w[$];if(X.texture!==null&&X.boundingBox.containsPoint(S))return X}return null}function gf(w,F,$,W,X){F.isScene!==!0&&(F=Gt),Q.resetTextureUnits();const wt=F.fog,Pt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,bt=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ie.workingColorSpace,It=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ft=ct.get(W.envMap||Pt,It),jt=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ne=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Nt=!!$.morphAttributes.position,oe=!!$.morphAttributes.normal,ye=!!$.morphAttributes.color;let ge=An;W.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ge=C.toneMapping);const fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ue=fe!==void 0?fe.length:0,Ct=H.get(W),Ve=M.state.lights;if(et===!0&&(ot===!0||w!==K)){const me=w===K&&W.id===q;kt.setState(W,w,me)}let se=!1;W.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ve.state.version||Ct.outputColorSpace!==bt||X.isBatchedMesh&&Ct.batching===!1||!X.isBatchedMesh&&Ct.batching===!0||X.isBatchedMesh&&Ct.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ct.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ct.instancing===!1||!X.isInstancedMesh&&Ct.instancing===!0||X.isSkinnedMesh&&Ct.skinning===!1||!X.isSkinnedMesh&&Ct.skinning===!0||X.isInstancedMesh&&Ct.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ct.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ct.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ct.instancingMorph===!1&&X.morphTexture!==null||Ct.envMap!==Ft||W.fog===!0&&Ct.fog!==wt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==kt.numPlanes||Ct.numIntersection!==kt.numIntersection)||Ct.vertexAlphas!==jt||Ct.vertexTangents!==ne||Ct.morphTargets!==Nt||Ct.morphNormals!==oe||Ct.morphColors!==ye||Ct.toneMapping!==ge||Ct.morphTargetsCount!==Ue||!!Ct.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,Ct.__version=W.version);let nn=Ct.currentProgram;se===!0&&(nn=ar(W,F,X),U&&W.isNodeMaterial&&U.onUpdateProgram(W,nn,Ct));let Sn=!1,Yn=!1,Ci=!1;const ue=nn.getUniforms(),_e=Ct.uniforms;if(_.useProgram(nn.program)&&(Sn=!0,Yn=!0,Ci=!0),W.id!==q&&(q=W.id,Yn=!0),Ct.needsLights){const me=mf(M.state.lightProbeGridArray,X);Ct.lightProbeGrid!==me&&(Ct.lightProbeGrid=me,Yn=!0)}if(Sn||K!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ue.setValue(L,"projectionMatrix",w.projectionMatrix),ue.setValue(L,"viewMatrix",w.matrixWorldInverse);const Zn=ue.map.cameraPosition;Zn!==void 0&&Zn.setValue(L,dt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&ue.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ue.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),K!==w&&(K=w,Yn=!0,Ci=!0)}if(Ct.needsLights&&(Ve.state.sunShadowMap.length>0&&ue.setValue(L,"sunShadowMap",Ve.state.sunShadowMap,Q),Ve.state.directionalShadowMap.length>0&&ue.setValue(L,"directionalShadowMap",Ve.state.directionalShadowMap,Q),Ve.state.spotShadowMap.length>0&&ue.setValue(L,"spotShadowMap",Ve.state.spotShadowMap,Q),Ve.state.pointShadowMap.length>0&&ue.setValue(L,"pointShadowMap",Ve.state.pointShadowMap,Q)),X.isSkinnedMesh){ue.setOptional(L,X,"bindMatrix"),ue.setOptional(L,X,"bindMatrixInverse");const me=X.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),ue.setValue(L,"boneTexture",me.boneTexture,Q))}X.isBatchedMesh&&(ue.setOptional(L,X,"batchingTexture"),ue.setValue(L,"batchingTexture",X._matricesTexture,Q),ue.setOptional(L,X,"batchingIdTexture"),ue.setValue(L,"batchingIdTexture",X._indirectTexture,Q),ue.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&ue.setValue(L,"batchingColorTexture",X._colorsTexture,Q));const $n=$.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&B.update(X,$,nn),(Yn||Ct.receiveShadow!==X.receiveShadow)&&(Ct.receiveShadow=X.receiveShadow,ue.setValue(L,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(_e.envMapIntensity.value=F.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=Fv()),Yn){if(ue.setValue(L,"toneMappingExposure",C.toneMappingExposure),Ct.needsLights&&xf(_e,Ci),wt&&W.fog===!0&&zt.refreshFogUniforms(_e,wt),zt.refreshMaterialUniforms(_e,W,Y,G,M.state.transmissionRenderTarget[w.id]),Ct.needsLights&&Ct.lightProbeGrid){const me=Ct.lightProbeGrid;_e.probesSH.value=me.texture,_e.probesMin.value.copy(me.boundingBox.min),_e.probesMax.value.copy(me.boundingBox.max),_e.probesResolution.value.copy(me.resolution)}Kr.upload(L,hc(Ct),_e,Q)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Kr.upload(L,hc(Ct),_e,Q),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ue.setValue(L,"center",X.center),ue.setValue(L,"modelViewMatrix",X.modelViewMatrix),ue.setValue(L,"normalMatrix",X.normalMatrix),ue.setValue(L,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const me=W.uniformsGroups;for(let Zn=0,Pi=me.length;Zn<Pi;Zn++){const dc=me[Zn];st.update(dc,nn),st.bind(dc,nn)}}return nn}function xf(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function vf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,F,$){const W=H.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(w.texture).__webglTexture=F,H.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const $=H.get(w);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,$=0){Z=w,V=F,z=$;let W=null,X=!1,wt=!1;if(w){const bt=H.get(w);if(bt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,bt.__webglFramebuffer),J.copy(w.viewport),Mt.copy(w.scissor),mt=w.scissorTest,_.viewport(J),_.scissor(Mt),_.setScissorTest(mt),q=-1;return}else if(bt.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(bt.__hasExternalTextures)Q.rebindTextures(w,H.get(w.texture).__webglTexture,H.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const jt=w.depthTexture;if(bt.__boundDepthTexture!==jt){if(jt!==null&&H.has(jt)&&(w.width!==jt.image.width||w.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(wt=!0);const Ft=H.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[F])?W=Ft[F][$]:W=Ft[F],X=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?W=H.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?W=Ft[$]:W=Ft,J.copy(w.viewport),Mt.copy(w.scissor),mt=w.scissorTest}else J.copy(ft).multiplyScalar(Y).floor(),Mt.copy(Rt).multiplyScalar(Y).floor(),mt=Qt;if($!==0&&(W=O),_.bindFramebuffer(L.FRAMEBUFFER,W)&&_.drawBuffers(w,W),_.viewport(J),_.scissor(Mt),_.setScissorTest(mt),X){const bt=H.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,$)}else if(wt){const bt=F;for(let It=0;It<w.textures.length;It++){const Ft=H.get(w.textures[It]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+It,Ft.__webglTexture,$,bt)}}else if(w!==null&&$!==0){const bt=H.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,$)}q=-1};function fc(w){const F=H.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=R.textureFormatReadable(w.format),F.__typeReadable=R.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,$,W,X,wt,Pt,bt=0){if(!(w&&w.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){_.bindFramebuffer(L.FRAMEBUFFER,It);try{const Ft=w.textures[bt],jt=Ft.format,ne=Ft.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt);const Nt=fc(Ft);if(Nt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&$>=0&&$<=w.height-X&&L.readPixels(F,$,W,X,_t.convert(jt),_t.convert(ne),wt)}finally{const Ft=Z!==null?H.get(Z).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(w,F,$,W,X,wt,Pt,bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It)if(F>=0&&F<=w.width-W&&$>=0&&$<=w.height-X){_.bindFramebuffer(L.FRAMEBUFFER,It);const Ft=w.textures[bt],jt=Ft.format,ne=Ft.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt);const Nt=fc(Ft);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,oe),L.bufferData(L.PIXEL_PACK_BUFFER,wt.byteLength,L.STREAM_READ),L.readPixels(F,$,W,X,_t.convert(jt),_t.convert(ne),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const ye=Z!==null?H.get(Z).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,ye);const ge=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await nd(L,ge,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,oe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,wt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(oe),L.deleteSync(ge),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,$=0){const W=Math.pow(2,-$),X=Math.floor(w.image.width*W),wt=Math.floor(w.image.height*W),Pt=F!==null?F.x:0,bt=F!==null?F.y:0;Q.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,Pt,bt,X,wt),_.unbindTexture()},this.copyTextureToTexture=function(w,F,$=null,W=null,X=0,wt=0){let Pt,bt,It,Ft,jt,ne,Nt,oe,ye;const ge=w.isCompressedTexture?w.mipmaps[wt]:w.image;if($!==null)Pt=$.max.x-$.min.x,bt=$.max.y-$.min.y,It=$.isBox3?$.max.z-$.min.z:1,Ft=$.min.x,jt=$.min.y,ne=$.isBox3?$.min.z:0;else{const _e=Math.pow(2,-X);Pt=Math.floor(ge.width*_e),bt=Math.floor(ge.height*_e),w.isDataArrayTexture?It=ge.depth:w.isData3DTexture?It=Math.floor(ge.depth*_e):It=1,Ft=0,jt=0,ne=0}W!==null?(Nt=W.x,oe=W.y,ye=W.z):(Nt=0,oe=0,ye=0);const fe=_t.convert(F.format),Ue=_t.convert(F.type);let Ct;F.isData3DTexture?(Q.setTexture3D(F,0),Ct=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),Ct=L.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),Ct=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const Ve=_.getParameter(L.UNPACK_ROW_LENGTH),se=_.getParameter(L.UNPACK_IMAGE_HEIGHT),nn=_.getParameter(L.UNPACK_SKIP_PIXELS),Sn=_.getParameter(L.UNPACK_SKIP_ROWS),Yn=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,ge.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ge.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Ft),_.pixelStorei(L.UNPACK_SKIP_ROWS,jt),_.pixelStorei(L.UNPACK_SKIP_IMAGES,ne);const Ci=w.isDataArrayTexture||w.isData3DTexture,ue=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const _e=H.get(w),$n=H.get(F),me=H.get(_e.__renderTarget),Zn=H.get($n.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,me.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Pi=0;Pi<It;Pi++)Ci&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(w).__webglTexture,X,ne+Pi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(F).__webglTexture,wt,ye+Pi)),L.blitFramebuffer(Ft,jt,Pt,bt,Nt,oe,Pt,bt,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||H.has(w)){const _e=H.get(w),$n=H.get(F);_.bindFramebuffer(L.READ_FRAMEBUFFER,I),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,N);for(let me=0;me<It;me++)Ci?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.__webglTexture,X,ne+me):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_e.__webglTexture,X),ue?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$n.__webglTexture,wt,ye+me):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$n.__webglTexture,wt),X!==0?L.blitFramebuffer(Ft,jt,Pt,bt,Nt,oe,Pt,bt,L.COLOR_BUFFER_BIT,L.NEAREST):ue?L.copyTexSubImage3D(Ct,wt,Nt,oe,ye+me,Ft,jt,Pt,bt):L.copyTexSubImage2D(Ct,wt,Nt,oe,Ft,jt,Pt,bt);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ue?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Ct,wt,Nt,oe,ye,Pt,bt,It,fe,Ue,ge.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,wt,Nt,oe,ye,Pt,bt,It,fe,ge.data):L.texSubImage3D(Ct,wt,Nt,oe,ye,Pt,bt,It,fe,Ue,ge):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,wt,Nt,oe,Pt,bt,fe,Ue,ge.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,wt,Nt,oe,ge.width,ge.height,fe,ge.data):L.texSubImage2D(L.TEXTURE_2D,wt,Nt,oe,Pt,bt,fe,Ue,ge);_.pixelStorei(L.UNPACK_ROW_LENGTH,Ve),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),_.pixelStorei(L.UNPACK_SKIP_PIXELS,nn),_.pixelStorei(L.UNPACK_SKIP_ROWS,Sn),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Yn),wt===0&&F.generateMipmaps&&L.generateMipmap(Ct),_.unbindTexture()},this.initRenderTarget=function(w){H.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){V=0,z=0,Z=null,_.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const Ta={day:{name:"day",label:"Day",skyTop:2778312,skyHorizon:12178668,skyGround:6975608,cityGlow:0,sunDir:new P(.45,.78,.35).normalize(),sunColor:16774370,sunDisc:40,sunHalo:1.2,sunLight:3.2,hemiSky:12375807,hemiGround:5918792,hemiIntensity:.9,fogColor:11847900,fogDensity:.0011,exposure:.95,stars:0,clouds:.55,cloudColor:16777215,envIntensity:1,wet:!1,rain:!1,windows:0,lamps:0,neon:.25,bloomStrength:.25,bloomRadius:.4,bloomThreshold:1.6},sunset:{name:"sunset",label:"Sunset",skyTop:1712976,skyHorizon:16742970,skyGround:3810850,cityGlow:4200976,sunDir:new P(-.82,.07,.56).normalize(),sunColor:16754784,sunDisc:30,sunHalo:2.4,sunLight:3,hemiSky:6974120,hemiGround:4860448,hemiIntensity:.6,fogColor:10115658,fogDensity:.0022,exposure:1,stars:.15,clouds:.6,cloudColor:16751216,envIntensity:.9,wet:!1,rain:!1,windows:.7,lamps:.6,neon:.8,bloomStrength:.55,bloomRadius:.55,bloomThreshold:1},night:{name:"night",label:"Night / Rain",skyTop:263436,skyHorizon:1840176,skyGround:460555,cityGlow:4857936,sunDir:new P(.35,.55,-.5).normalize(),sunColor:9348863,sunDisc:0,sunHalo:0,sunLight:.25,hemiSky:2764896,hemiGround:657938,hemiIntensity:.35,fogColor:1183518,fogDensity:.0052,exposure:1.05,stars:0,clouds:1,cloudColor:2759738,envIntensity:1,wet:!0,rain:!0,windows:1.1,lamps:1,neon:1,bloomStrength:.85,bloomRadius:.6,bloomThreshold:.85}},Bv=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww; // pin to the far plane
}`,zv=`
uniform vec3 topColor;
uniform vec3 horizonColor;
uniform vec3 groundColor;
uniform vec3 cityGlow;
uniform vec3 sunDir;
uniform vec3 sunColor;
uniform float sunDisc;
uniform float sunHalo;
uniform float stars;
uniform float clouds;
uniform vec3 cloudColor;
uniform float time;
varying vec3 vDir;

float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash2(i), hash2(i + vec2(1, 0)), f.x), mix(hash2(i + vec2(0, 1)), hash2(i + vec2(1, 1)), f.x), f.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; } return s; }

void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = mix(horizonColor, topColor, pow(clamp(h, 0.0, 1.0), 0.45));
  col = mix(col, groundColor, smoothstep(0.0, -0.12, h));
  col += cityGlow * exp(-abs(h) * 9.0);

  float sd = max(dot(d, sunDir), 0.0);
  col += sunColor * sunHalo * (pow(sd, 8.0) * 0.35 + pow(sd, 64.0) * 0.8);
  col += sunColor * sunDisc * smoothstep(0.99955, 0.99975, sd);

  if (stars > 0.0 && h > 0.0) {
    vec3 p = d * 260.0;
    vec3 c = floor(p);
    vec3 o = vec3(hash(c), hash(c + 7.1), hash(c + 3.3));
    float bright = step(0.985, hash(c + 1.9));
    float dist = length(p - c - o);
    float tw = 0.6 + 0.4 * sin(time * 3.0 + hash(c) * 40.0);
    col += vec3(0.9, 0.95, 1.0) * bright * smoothstep(0.12, 0.0, dist) * stars * tw * 3.0 * smoothstep(0.0, 0.25, h);
  }

  if (clouds > 0.0) {
    vec2 uv = d.xz / (max(h, 0.0) + 0.12);
    float c = fbm(uv * 0.9 + vec2(time * 0.004, 0.0));
    float cover = smoothstep(0.62 - clouds * 0.3, 0.95 - clouds * 0.15, c) * smoothstep(-0.02, 0.18, h);
    float lit = 0.6 + 0.8 * pow(sd, 4.0);
    col = mix(col, cloudColor * lit + cityGlow * 0.35, cover * min(clouds, 1.0) * 0.92);
  }
  gl_FragColor = vec4(col, 1.0);
}`;function kv(){return new Ae({uniforms:{topColor:{value:new Dt},horizonColor:{value:new Dt},groundColor:{value:new Dt},cityGlow:{value:new Dt},sunDir:{value:new P(0,1,0)},sunColor:{value:new Dt},sunDisc:{value:0},sunHalo:{value:0},stars:{value:0},clouds:{value:0},cloudColor:{value:new Dt},time:{value:0}},vertexShader:Bv,fragmentShader:zv,side:Xe,depthWrite:!1,fog:!1})}class Gv{constructor(t,e){this.renderer=t,this.scene=e,this.sky=new Lt(new tr(1500,48,24),kv()),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,e.add(this.sky),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const n=this.sun.shadow.camera;n.left=n.bottom=-25,n.right=n.top=25,n.near=1,n.far=400,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.01,e.add(this.sun,this.sun.target,this.hemi),e.fog=this.fog,this.pmrem=new pl(t)}renderer;scene;sky;sun=new Up(16777215,1);hemi=new Cp(16777215,0,1);fog=new Hl(0,.002);preset=Ta.night;envTarget=null;pmrem;apply(t){this.preset=t;const e=this.sky.material.uniforms;e.topColor.value.setHex(t.skyTop),e.horizonColor.value.setHex(t.skyHorizon),e.groundColor.value.setHex(t.skyGround),e.cityGlow.value.setHex(t.cityGlow),e.sunDir.value.copy(t.sunDir),e.sunColor.value.setHex(t.sunColor),e.sunDisc.value=t.sunDisc,e.sunHalo.value=t.sunHalo,e.stars.value=t.stars,e.clouds.value=t.clouds,e.cloudColor.value.setHex(t.cloudColor),this.sun.color.setHex(t.sunColor),this.sun.intensity=t.sunLight,this.hemi.color.setHex(t.hemiSky),this.hemi.groundColor.setHex(t.hemiGround),this.hemi.intensity=t.hemiIntensity,this.fog.color.setHex(t.fogColor),this.fog.density=t.fogDensity,this.renderer.toneMappingExposure=t.exposure,this.rebuildIbl()}rebuildIbl(){const t=this.preset,e=new hu,n=new Lt(new tr(100,32,16),this.sky.material);if(e.add(n),t.windows>0||t.neon>.5){const r=[16756848,16732104,5826815,16766880,10120191];for(let a=0;a<26;a++){const o=a/26*Math.PI*2+a%3*.07,l=4+a*37%11,c=new rn({color:new Dt(r[a%r.length]).multiplyScalar(.6*Math.max(t.windows,t.neon)),side:De}),h=new Lt(new Pn(6+a%4*3,l),c);h.position.set(Math.cos(o)*60,l*.5-2+a%2*5,Math.sin(o)*60),h.lookAt(0,h.position.y,0),e.add(h)}}const s=new Lt(new Ks(90,32),new rn({color:new Dt(t.skyGround).multiplyScalar(.5)}));s.rotation.x=-Math.PI/2,s.position.y=-3,e.add(s),this.envTarget?.dispose(),this.envTarget=this.pmrem.fromScene(e,.02,.1,400),this.scene.environment=this.envTarget.texture,this.scene.environmentIntensity=t.envIntensity,e.traverse(r=>{r instanceof Lt&&r!==n&&(r.geometry.dispose(),r.material.dispose())}),n.geometry.dispose()}update(t,e,n){this.sky.position.copy(t.position),this.sky.material.uniforms.time.value=n;const s=this.preset.sunDir;this.sun.position.copy(e).addScaledVector(s,150),this.sun.target.position.copy(e),this.sun.target.updateMatrixWorld()}}const Ye=7,Jr=8.2,Vv=.04;function ca(i){return Vv*(1-Math.min(1,Math.abs(i)/Ye))}const Bu=8.75,ks=14,Sh=2,Hv=[[0,0,0],[-6,2,160],[0,4,300],[60,5,410],[190,7,455],[320,8,405],[375,6,290],[305,3,190],[262,2,85],[318,0,-40],[420,-1,-125],[405,0,-262],[285,2,-322],[140,3,-282],[40,1,-190]];class Wv{samples=[];length;group=new gn;materials;constructor(){const t=new gu(Hv.map(([o,l,c])=>new P(o,l,c)),!0,"centripetal"),e=t.getLength(),n=Math.round(e/Sh),s=t.getSpacedPoints(n).slice(0,n),r=new P(0,1,0);let a=0;for(let o=0;o<n;o++){const l=s[(o-1+n)%n],h=s[(o+1)%n].clone().sub(l).normalize(),f=new P().crossVectors(h,r).normalize(),u=new P().crossVectors(f,h).normalize();o>0&&(a+=s[o].distanceTo(s[o-1])),this.samples.push({s:a,pos:s[o].clone(),tangent:h,right:f,up:u,curvature:0})}this.length=a+s[n-1].distanceTo(s[0]);for(let o=0;o<n;o++){const l=this.samples[(o-3+n)%n].tangent,c=this.samples[(o+3)%n].tangent,h=Math.atan2(l.x*c.z-l.z*c.x,l.x*c.x+l.z*c.z);this.samples[o].curvature=-h/(6*Sh)}this.materials={road:new Me({color:16777215}),kerb:new Me({color:16777215,roughness:.6}),gutter:new Me({color:9079434}),barrier:new Me({color:13158596}),sidewalk:new Me({color:11579568}),neon:new rn({color:4253951,fog:!0,side:De})},this.build()}build(){const t=this.materials,e=new Lt(this.loft([{x:-Ye,y:0},{x:-Ye/2,y:.02},{x:0,y:.04},{x:Ye/2,y:.02},{x:Ye,y:0}],1,14,"road"),t.road);e.receiveShadow=!0,this.group.add(e);const n=this.samples.map(s=>Math.abs(s.curvature)>.006);for(const s of[-1,1]){const r=[{x:Ye,y:0},{x:Ye+.6,y:.06},{x:Jr,y:.04}],a=this.loft(r,s,6,"kerb",n),o=this.loft(r,s,4,"kerb",n.map(p=>!p)),l=new Lt(a,t.kerb),c=new Lt(o,t.gutter);l.receiveShadow=c.receiveShadow=!0,this.group.add(l,c);const h=Bu,f=[{x:h-.32,y:0},{x:h-.32,y:.08},{x:h-.14,y:.32},{x:h-.11,y:.95},{x:h+.11,y:.95},{x:h+.14,y:.32},{x:h+.32,y:.08},{x:h+.32,y:0}],u=new Lt(this.loft(f,s,4,"profile"),t.barrier);u.castShadow=u.receiveShadow=!0,this.group.add(u);const d=[{x:h-.122,y:.74},{x:h-.122,y:.775}];this.group.add(new Lt(this.loft(d,s,4,"profile"),t.neon));const g=[{x:Jr,y:.04},{x:h+.32,y:.15},{x:ks,y:.15},{x:ks,y:-.05},{x:ks+.2,y:-.25}],x=new Lt(this.loft(g,s,4,"world"),t.sidewalk);x.receiveShadow=!0,this.group.add(x)}}loft(t,e,n,s,r){const a=this.samples.length,o=[],l=[],c=[],h=e<0?t.map(p=>({x:-p.x,y:p.y})).reverse():t,f=[0];for(let p=1;p<h.length;p++)f.push(f[p-1]+Math.hypot(h[p].x-h[p-1].x,h[p].y-h[p-1].y));const u=h.length-1,d=new P;for(let p=0;p<=a;p++){const m=this.samples[p%a],y=(p===a?this.length:m.s)/n;for(let E=0;E<u;E++)for(const S of[E,E+1]){const b=h[S];d.copy(m.pos).addScaledVector(m.right,b.x).addScaledVector(m.up,b.y),o.push(d.x,d.y,d.z);let M;s==="road"?M=(b.x+Ye)/(2*Ye):s==="kerb"?M=(Math.abs(b.x)-Ye)/(Jr-Ye):s==="profile"?M=f[S]/2:M=Math.abs(b.x)/4,l.push(M,y)}}const g=u*2;for(let p=0;p<a;p++){if(r&&!r[p]&&!r[(p+1)%a])continue;const m=p*g,y=(p+1)*g;for(let E=0;E<u;E++){const S=m+E*2,b=y+E*2;c.push(S,b,S+1,S+1,b,b+1)}}const x=new de;return x.setAttribute("position",new Wt(o,3)),x.setAttribute("uv",new Wt(l,2)),x.setIndex(c),x.computeVertexNormals(),x}frameAt(t,e){const n=this.length,s=(t%n+n)%n,r=this.samples.length;let a=0,o=r-1;for(;a<o;){const u=a+o+1>>1;this.samples[u].s<=s?a=u:o=u-1}const l=this.samples[a],c=this.samples[(a+1)%r],h=(a+1<r?c.s:n)-l.s,f=h>0?(s-l.s)/h:0;return e.s=s,e.pos.lerpVectors(l.pos,c.pos,f),e.tangent.lerpVectors(l.tangent,c.tangent,f).normalize(),e.right.lerpVectors(l.right,c.right,f).normalize(),e.up.lerpVectors(l.up,c.up,f).normalize(),e.curvature=l.curvature+(c.curvature-l.curvature)*f,e}queryTrack(t,e=-1){const n=this.samples.length;let s=0,r=1/0;const a=d=>{const g=this.samples[(d+n)%n],x=(g.pos.x-t.x)**2+(g.pos.z-t.z)**2;x<r&&(r=x,s=(d+n)%n)};if(e>=0)for(let d=e-20;d<=e+20;d++)a(d);else for(let d=0;d<n;d++)a(d);const o=this.samples[s],l=new P(t.x-o.pos.x,0,t.z-o.pos.z),c=l.dot(o.tangent),h=o.s+c,f=l.dot(o.right),u=o.pos.y+o.tangent.y*c;return{index:s,s:(h%this.length+this.length)%this.length,lateral:f,height:u,sample:o}}distanceSq(t,e){let n=1/0;for(const s of this.samples){const r=(s.pos.x-t)**2+(s.pos.z-e)**2;r<n&&(n=r)}return n}}function hi(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function zu(i,t,e=0){let n=i*374761393+t*668265263+e*1442695041|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const yh=i=>i*i*(3-2*i);class Xv{constructor(t,e){this.period=t,this.values=new Float32Array(t*t);for(let n=0;n<this.values.length;n++)this.values[n]=e()}period;values;sample(t,e){const n=this.period,s=Math.floor(t),r=Math.floor(e),a=yh(t-s),o=yh(e-r),l=(s%n+n)%n,c=(r%n+n)%n,h=(l+1)%n,f=(c+1)%n,u=this.values,d=u[c*n+l],g=u[c*n+h],x=u[f*n+l],p=u[f*n+h];return d+(g-d)*a+(x-d)*o+(d-g-x+p)*a*o}}class ii{constructor(t,e,n,s=.5){this.gain=s;for(let r=0;r<e;r++)this.octaves.push(new Xv(t<<r,n))}gain;octaves=[];sample(t,e){let n=0,s=1,r=0;for(const a of this.octaves)n+=a.sample(t*a.period,e*a.period)*s,r+=s,s*=this.gain;return n/r}}const Qr=i=>i<0?0:i>1?1:i,xi=(i,t,e)=>{const n=Qr((e-i)/(t-i));return n*n*(3-2*n)},Bn=(i,t,e)=>i+(t-i)*e;let ku=8;function qv(i){ku=i}function ai(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d",{willReadFrequently:!1});if(!n)throw new Error("2D canvas context unavailable");return[e,n]}function en(i,t,e=as){const n=new Zr(i);return n.colorSpace=t?Be:kn,n.wrapS=n.wrapT=e,n.anisotropy=ku,n.generateMipmaps=!0,n.minFilter=Gn,n.needsUpdate=!0,n}function er(i,t,e,n){const[s,r]=ai(i,i),a=r.createImageData(i,i),o=a.data;for(let l=0,c=0;l<t.length;l++,c+=4)o[c]=Qr(t[l])*255,o[c+1]=Qr(e[l])*255,o[c+2]=Qr(n[l])*255,o[c+3]=255;return r.putImageData(a,0,0),s}function Gu(i,t,e){const n=new Float32Array(i*i),s=new Float32Array(i*i),r=new Float32Array(i*i);for(let a=0;a<i;a++){const o=(a-1+i)%i*i,l=(a+1)%i*i;for(let c=0;c<i;c++){const h=(c-1+i)%i,f=(c+1)%i,u=(t[a*i+f]-t[a*i+h])*e,d=(t[l+c]-t[o+c])*e,g=1/Math.hypot(u,d,1),x=a*i+c;n[x]=-u*g*.5+.5,s[x]=d*g*.5+.5,r[x]=g*.5+.5}}return er(i,n,s,r)}function Yv(i,t=1024){const e=hi(1337),n=new ii(4,6,e,.55),s=new ii(64,3,e,.5),r=new ii(3,5,e,.55),a=new ii(16,4,e,.5),o=new ii(2,3,e,.5),l=t*t,c=new Float32Array(l),h=new Float32Array(l),f=new Float32Array(l),u=new Float32Array(l),d=new Float32Array(l),g=[.125,.375,.625,.875];for(let y=0;y<t;y++){const E=y/t;for(let S=0;S<t;S++){const b=S/t,M=y*t+S,A=n.sample(b,E),v=s.sample(b,E),T=zu(S,y,7),C=T>.94?(T-.94)*9:0;let D=0;for(const Tt of g)D=Math.max(D,Math.exp(-(((b-Tt-.058)/.018)**2)),Math.exp(-(((b-Tt+.058)/.018)**2)));const U=xi(.62,.64,o.sample(b,E))*.6,O=E*2%1<.45?1:0,I=(Tt,ut)=>Math.abs(b-Tt)<ut?1:0,N=Math.max(I(.031,.006),I(.969,.006),O*I(.25,.005),O*I(.75,.005)),V=Math.max(I(.492,.0035),I(.508,.0035)),z=xi(.32,.55,a.sample(b,E)+T*.15),Z=Math.max(N,V)*z;let q=.085+A*.06+v*.03+C*.12-D*.025-U*.03,K=A*.5+v*.35+T*.35+C*.6-D*.15,J=.9-D*.12+v*.06-U*.05,Mt=q,mt=q,Zt=q*1.04;if(Z>0){const Tt=V>0?.78:.82,ut=V>0?.58:.82,G=V>0?.12:.8;Mt=Bn(Mt,Tt,Z),mt=Bn(mt,ut,Z),Zt=Bn(Zt,G,Z),J=Bn(J,.62,Z),K+=Z*.25}if(i){const Tt=Math.max(xi(.06,0,b),xi(.94,1,b)),ut=r.sample(b,E)+D*.2+Tt*.3-A*.1,G=xi(.56,.6,ut),Y=xi(.4,.56,ut),at=Bn(.55,.38,Y);Mt*=at,mt*=at,Zt*=at*1.05,J=Bn(.42+v*.12-D*.12,.2,Y)-Z*.08,J=Bn(J,.03,G),K=Bn(K,.55,G)}c[M]=Mt,h[M]=mt,f[M]=Zt,u[M]=J,d[M]=K}}const x=en(er(t,c,h,f),!0),p=en(er(t,u,u,u),!1),m=en(Gu(t,d,i?1.6:2.6),!1);return{map:x,roughnessMap:p,normalMap:m}}function mo(i,t=1,e=512,n=99){const s=hi(n),r=new ii(4,5,s,.55),a=new ii(48,3,s,.5),o=new ii(3,4,s,.6),l=e*e,c=new Float32Array(l),h=new Float32Array(l),f=new Float32Array(l),u=new Float32Array(l),d=new Float32Array(l);for(let g=0;g<e;g++)for(let x=0;x<e;x++){const p=x/e,m=g/e,y=g*e+x,E=r.sample(p,m),S=a.sample(p,m),b=xi(.55,.75,o.sample(p,m)),M=zu(x,g,3),A=Math.min(Math.abs(p*2%1-.5),Math.abs(m*2%1-.5))>.497?1:0;let v=(.36+E*.12+S*.05+M*.04-b*.1-A*.15)*t,T=.85+S*.1-A*.1;i&&(v*=.6,T=Bn(.35,.12,b)+S*.1),c[y]=v,h[y]=v*.99,f[y]=v*.97,u[y]=T,d[y]=E*.6+S*.3+M*.2-A}return{map:en(er(e,c,h,f),!0),roughnessMap:en(er(e,u,u,u),!1),normalMap:en(Gu(e,d,1.5),!1)}}function $v(){const[i,t]=ai(64,256);t.fillStyle="#c8141c",t.fillRect(0,0,64,128),t.fillStyle="#e8e8e8",t.fillRect(0,128,64,128);const e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(0,0,0,0.0)"),e.addColorStop(.8,"rgba(0,0,0,0.05)"),e.addColorStop(1,"rgba(0,0,0,0.45)"),t.fillStyle=e,t.fillRect(0,0,64,256);const n=hi(5);for(let s=0;s<900;s++)t.fillStyle=`rgba(20,20,20,${n()*.25})`,t.fillRect(n()*64,n()*256,1+n()*2,1+n()*3);return en(i,!0)}function Zv(i=21){const[s,r]=ai(1024,1024),[a,o]=ai(1024,1024),[l,c]=ai(1024,1024),h=hi(i);r.fillStyle="#8a8580",r.fillRect(0,0,1024,1024),o.fillStyle="#000",o.fillRect(0,0,1024,1024),c.fillStyle="#d0d0d0",c.fillRect(0,0,1024,1024);for(let p=0;p<2500;p++){const m=50+h()*40;r.fillStyle=`rgba(${m},${m},${m+4},0.15)`,r.fillRect(h()*1024,h()*1024,2+h()*30,2+h()*60)}const f=1024/16,u=1024/16,d=["#ffd49a","#ffc178","#ffe2b8","#ffb060"],g=["#cfe6ff","#a8d4ff","#e6f2ff"],x=["#ff5ad1","#6af2ff","#b47cff"];for(let p=0;p<16;p++){const m=h()<.55?.6:.18;for(let y=0;y<16;y++){const E=y*f+f*.14,S=p*u+u*.2,b=f*.72,M=u*.58;if(r.fillStyle="#1b2430",r.fillRect(E,S,b,M),r.fillStyle="rgba(160,190,220,0.18)",r.fillRect(E,S,b,M*.35),r.fillStyle="#2b2b2e",r.fillRect(E+b/2-1,S,2,M),c.fillStyle="#141414",c.fillRect(E,S,b,M),h()<m){const A=h(),v=A<.7?d:A<.95?g:x,T=v[Math.floor(h()*v.length)],C=o.createLinearGradient(0,S,0,S+M),D=.55+h()*.45;C.addColorStop(0,T),C.addColorStop(1,Kv(T,.55)),o.globalAlpha=D,o.fillStyle=C,o.fillRect(E,S,b,M),h()<.4&&(o.globalAlpha=1,o.fillStyle="rgba(0,0,0,0.85)",o.fillRect(E,S,b,M*(.2+h()*.5))),o.globalAlpha=1,r.fillStyle="rgba(255,220,170,0.25)",r.fillRect(E,S,b,M)}}}return{map:en(s,!0),emissiveMap:en(a,!0),roughnessMap:en(l,!1)}}function Kv(i,t){const e=parseInt(i.slice(1),16),n=Math.round((e>>16&255)*t),s=Math.round((e>>8&255)*t),r=Math.round((e&255)*t);return`rgb(${n},${s},${r})`}function Jv(i,t,e){const[n,s]=ai(512,160);s.fillStyle="#000",s.fillRect(0,0,512,160),s.font='italic 900 92px "Arial Black", Impact, sans-serif',s.textAlign="center",s.textBaseline="middle";const r=Math.min(1,440/s.measureText(i).width);s.setTransform(r,0,0,1,256*(1-r),0),s.lineJoin="round";for(const[a,o,l]of[[28,10,.55],[14,7,.8],[4,4,1]])s.shadowColor=t,s.shadowBlur=a,s.strokeStyle=t,s.globalAlpha=l,s.lineWidth=o,s.strokeText(i,256,82);return s.shadowBlur=0,s.globalAlpha=1,s.strokeStyle="#fff",s.lineWidth=1.6,s.strokeText(i,256,82),s.setTransform(1,0,0,1,0,0),e&&(s.shadowColor=e,s.shadowBlur=16,s.strokeStyle=e,s.lineWidth=5,s.strokeRect(14,14,484,132)),en(n,!0,dn)}function Vu(i=128,t=2){const[e,n]=ai(i,i),s=n.createImageData(i,i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=(a+.5)/i-.5,l=(r+.5)/i-.5,c=Math.min(1,Math.hypot(o,l)*2),h=Math.pow(1-c,t),f=(r*i+a)*4;s.data[f]=s.data[f+1]=s.data[f+2]=h*255,s.data[f+3]=h*255}return n.putImageData(s,0,0),en(e,!1,dn)}function Qv(){const[i,t]=ai(1024,256),e=hi(77);for(let n=0;n<4;n++){const s=n*256,r=t.createLinearGradient(0,0,0,256);r.addColorStop(0,"#fffaf0"),r.addColorStop(.35,"#d8d0c4"),r.addColorStop(1,"#5a5650"),t.fillStyle=r,t.fillRect(s,0,256,256),t.fillStyle="#ffffff";for(let a=0;a<3;a++)t.fillRect(s+20+a*80,34,50,5);for(let a=0;a<9;a++){const o=Math.floor(40+e()*60);t.fillStyle=`rgba(${o},${o-6},${o-10},0.85)`;const l=18+e()*60,c=30+e()*120;t.fillRect(s+e()*(256-l),256-c-20,l,c)}e()<.6&&(t.fillStyle=["#ff4fa0","#4fd8ff","#ffd040","#9a6bff"][Math.floor(e()*4)],t.fillRect(s+30+e()*140,70+e()*40,40+e()*30,50+e()*30)),t.fillStyle="#1a1a1c",t.fillRect(s,0,10,256),t.fillRect(s,0,256,16),t.fillRect(s,236,256,20),t.fillRect(s+126,16,4,220)}return en(i,!0)}const Hu=2.4,Wu=3.2,jv=16*Hu,bh=16*Wu;class t_{constructor(t,e=24){this.size=e;for(const n of t.samples){const s=this.key(n.pos.x,n.pos.z);let r=this.cells.get(s);r||this.cells.set(s,r=[]),r.push(n.pos)}}size;cells=new Map;key(t,e){return`${Math.floor(t/this.size)},${Math.floor(e/this.size)}`}isClear(t,e,n){const s=Math.floor(t/this.size),r=Math.floor(e/this.size),a=n*n,o=Math.ceil(n/this.size);for(let l=-o;l<=o;l++)for(let c=-o;c<=o;c++){const h=this.cells.get(`${s+l},${r+c}`);if(h){for(const f of h)if((f.x-t)**2+(f.z-e)**2<a)return!1}}return!0}}function wh(i,t,e,n,s,r,a,o){const{center:l,dirX:c,dirZ:h,w:f,d:u,h:d,tint:g}=i,x=Math.floor(t()*16)/16,p=Math.floor(t()*16)/16,m=[1,1,1.5,2][Math.floor(t()*4)],y=(v,T,C)=>new P().copy(l).addScaledVector(c,v*f/2).addScaledVector(h,T*u/2).setY(l.y+C),E=-4,S=[[-1,1,1,1,f],[1,1,1,-1,u],[1,-1,-1,-1,f],[-1,-1,-1,1,u]];for(const[v,T,C,D,U]of S){const O=y(v,T,E),I=y(C,D,E),N=y(v,T,d),V=y(C,D,d),z=O.clone().add(I).multiplyScalar(.5).sub(l).setY(0).normalize(),q=new P().subVectors(I,O).cross(new P().subVectors(N,O)).dot(z)<0,K=e.length/3;for(const Tt of[O,I,N,V])e.push(Tt.x,Tt.y,Tt.z);for(let Tt=0;Tt<4;Tt++)n.push(z.x,z.y,z.z);const J=new P().subVectors(I,O).setY(0).normalize();for(let Tt=0;Tt<4;Tt++)o.push(J.x,J.y,J.z,m);const Mt=U/jv*m,mt=E/bh*m,Zt=d/bh*m;s.push(x,p+mt,x+Mt,p+mt,x,p+Zt,x+Mt,p+Zt);for(let Tt=0;Tt<4;Tt++)r.push(g.r,g.g,g.b);q?a.push(K,K+2,K+1,K+2,K+3,K+1):a.push(K,K+1,K+2,K+2,K+1,K+3)}const b=[y(-1,1,d),y(1,1,d),y(-1,-1,d),y(1,-1,d)],M=e.length/3;for(const v of b)e.push(v.x,v.y,v.z);for(let v=0;v<4;v++)n.push(0,1,0),s.push(.002,.002),o.push(1,0,0,1),r.push(g.r*.6,g.g*.6,g.b*.6);new P().subVectors(b[2],b[0]).cross(new P().subVectors(b[1],b[0])).y>0?a.push(M,M+2,M+1,M+1,M+2,M+3):a.push(M,M+1,M+2,M+2,M+1,M+3)}function Th(i,t,e,n,s,r){const a=new de;return a.setAttribute("facade",new Wt(r,4)),a.setAttribute("position",new Wt(i,3)),a.setAttribute("normal",new Wt(t,3)),a.setAttribute("uv",new Wt(e,2)),a.setAttribute("color",new Wt(n,3)),a.setIndex(s),a.computeBoundingSphere(),a}function e_(i){i.customProgramCacheKey=()=>"facade-interior",i.onBeforeCompile=t=>{t.uniforms.uRoomDepth={value:3.4},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 facade;
        varying vec4 vFacade;
        varying vec3 vFacPos;
        varying vec3 vFacN;
        varying vec2 vFacUv;`).replace("#include <project_vertex>",`#include <project_vertex>
        vFacade = facade;
        vFacPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vFacN = normalize(mat3(modelMatrix) * objectNormal);
        vFacUv = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uRoomDepth;
        varying vec4 vFacade;
        varying vec3 vFacPos;
        varying vec3 vFacN;
        varying vec2 vFacUv;
        float roomHash(vec2 p) { return fract(sin(dot(p, vec2(41.37, 289.13))) * 43758.5453); }
        // Brightness of the room surface seen through the window at p (0..1 across the pane).
        float roomShade(vec2 p, vec2 cell, vec3 dir) {
          dir = mix(dir, vec3(1e-4), step(abs(dir), vec3(1e-4)));
          vec3 o = vec3(p, 0.0);
          vec3 tm = (step(0.0, dir) - o) / dir;
          float t = min(min(tm.x, tm.y), tm.z);
          vec3 h = o + dir * t;
          float r = roomHash(cell);
          float r2 = roomHash(cell + 17.3);
          float s;
          if (t == tm.z) {
            // Back wall, with a piece of furniture or a figure in silhouette.
            s = 0.78 + 0.22 * h.y;
            float x0 = 0.1 + 0.55 * r;
            float sil = step(x0, h.x) * step(h.x, x0 + 0.18 + 0.25 * r2) * step(h.y, 0.22 + 0.4 * r2 * r2);
            s *= 1.0 - 0.75 * sil;
          } else if (t == tm.y) {
            // Ceiling with a lamp near the middle, or the floor.
            vec2 q = vec2(h.x - 0.5, h.z - 0.55);
            s = dir.y > 0.0 ? 0.55 + 1.1 * exp(-dot(q, q) * 14.0) : 0.28 + 0.12 * h.z;
          } else {
            s = 0.5 + 0.25 * h.y - 0.15 * h.z;
          }
          // Rooms read darker toward the back corners.
          return s * (1.0 - 0.25 * h.z);
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          vec2 cuv = vFacUv * 16.0;
          vec2 cell = floor(cuv);
          vec2 f = fract(cuv);
          const vec2 lo = vec2(0.14, 0.22);
          const vec2 hi = vec2(0.86, 0.80);
          if (vFacade.w > 0.0 && abs(vFacN.y) < 0.5 && all(greaterThan(f, lo)) && all(lessThan(f, hi))) {
            vec2 p = (f - lo) / (hi - lo);
            vec3 T = normalize(vFacade.xyz);
            vec3 N = normalize(vFacN);
            vec3 V = normalize(vFacPos - cameraPosition);
            vec2 win = vec2(${Hu.toFixed(2)}, ${Wu.toFixed(2)}) / vFacade.w * (hi - lo);
            vec3 dir = vec3(dot(V, T) / win.x, V.y / win.y, -dot(V, N) / uRoomDepth);
            totalEmissiveRadiance *= roomShade(p, cell + floor(vFacPos.xz * 0.02) * 31.0, dir);
          }
        }`)}}const Eh=[12104876,10133672,9206896,11051152,6976128,8029846,12630184],Es=["#ff3fb4","#3ff0ff","#b46bff","#ff8a2a","#5dff8a","#ff4848"],Ah=["NITRO","HEAT","DINER","MOTEL","24/7","GARAGE","CLUB","TUNE","BAR","ARCADE","NOODLES","HOTEL"];class n_{constructor(t,e){this.track=t,this.reflections=e;const n=Zv();this.facade=new Me({map:n.map,emissiveMap:n.emissiveMap,roughnessMap:n.roughnessMap,emissive:16777215,emissiveIntensity:1,metalness:.1,vertexColors:!0}),this.skylineMat=this.facade.clone(),e_(this.facade),this.skylineMat.fog=!1,this.lensMat=new rn({color:16777215}),this.poolMat=new rn({map:Vu(128,1.6),vertexColors:!0,transparent:!0,depthWrite:!1,blending:li,polygonOffset:!0,polygonOffsetFactor:-2,fog:!1,side:De}),this.storeMat=new rn({map:Qv(),vertexColors:!0,side:De}),this.groundMat=new Me({color:9079434});const s=new t_(t),r=hi(4242);this.buildGround(),this.buildBuildings(s,r),this.buildSkyline(r),this.buildLamps(r)}track;reflections;group=new gn;lampPositions=[];lampLights=[];lampColors=[];facade;skylineMat;lensMat;poolMat;signMats=[];storeMat;groundMat;buildGround(){const n=new Pn(1800,1800,150,150);n.rotateX(-Math.PI/2),n.translate(200,0,70);const s=n.getAttribute("position"),r=n.getAttribute("uv");for(let o=0;o<s.count;o++){const l=s.getX(o),c=s.getZ(o);let h=1/0,f=0;for(const u of this.track.samples){const d=(u.pos.x-l)**2+(u.pos.z-c)**2;d<h&&(h=d,f=u.pos.y)}s.setY(o,f-.25),r.setXY(o,l/6,c/6)}n.computeVertexNormals();const a=new Lt(n,this.groundMat);a.receiveShadow=!0,this.group.add(a)}buildBuildings(t,e){const n=[],s=[],r=[],a=[],o=[],l=[],c={pos:[],uv:[],col:[],idx:[]},h=[],f=this.track.samples.length,u=new Map;for(const x of[-1,1]){let p=Math.floor(e()*10);for(;p<f;){const m=this.track.samples[p],y=14+e()*18,E=Math.max(4,Math.round((y+2+e()*6)/2));for(let S=0;S<3;S++){const b=14+e()*16,M=ks+3+S*34+b/2+e()*4,A=S===0?10+e()*26:18+e()*(S===2?90:55),v=m.pos.clone().addScaledVector(m.right,x*M),T=m.tangent.clone().setY(0).normalize(),C=m.right.clone().setY(0).normalize().multiplyScalar(x),D=Math.hypot(y,b)/2;let U=!0;for(const[I,N]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const V=v.x+T.x*I*y/2+C.x*N*b/2,z=v.z+T.z*I*y/2+C.z*N*b/2;t.isClear(V,z,ks+2)||(U=!1)}if(U)for(const I of h)Math.hypot(I.x-v.x,I.z-v.z)<(I.r+D)*.62&&(U=!1);if(!U)continue;h.push({x:v.x,z:v.z,r:D});const O=new Dt(Eh[Math.floor(e()*Eh.length)]);if(O.multiplyScalar(.75+e()*.35),v.y=m.pos.y,wh({center:v,dirX:T,dirZ:C,w:y,d:b,h:A,tint:O},e,n,s,r,a,o,l),S===0){const I=v.clone().addScaledVector(C,-b/2-.05);if(this.addStorefront(c,I,T,C,y,e),e()<.55){const N=Ah[Math.floor(e()*Ah.length)],V=Es[Math.floor(e()*Es.length)],z=N+V;let Z=u.get(z);Z||u.set(z,Z=Jv(N,V,e()<.5?Es[(Es.indexOf(V)+2)%Es.length]:void 0)),this.addSign(Z,V,I.clone().addScaledVector(C,-.15),C,5+e()*4,Math.min(y*.85,13))}}}p+=E}}const d=new Lt(Th(n,s,r,a,o,l),this.facade);d.castShadow=!0,d.receiveShadow=!0,this.group.add(d);const g=new de;g.setAttribute("position",new Wt(c.pos,3)),g.setAttribute("uv",new Wt(c.uv,2)),g.setAttribute("color",new Wt(c.col,3)),g.setIndex(c.idx),this.group.add(new Lt(g,this.storeMat))}addStorefront(t,e,n,s,r,a){if(a()<.3)return;const o=[16763024,16769200,10148095,16743120,12624127,16777215],l=new Dt(o[Math.floor(a()*o.length)]),c=r*(.5+a()*.4),h=e.y+.4,f=e.y+3.2,u=e.clone().addScaledVector(n,-c/2),d=e.clone().addScaledVector(n,c/2),g=t.pos.length/3;t.pos.push(u.x,h,u.z,d.x,h,d.z,u.x,f,u.z,d.x,f,d.z);const x=Math.floor(a()*4)/4;t.uv.push(x,0,x+c/8,0,x,1,x+c/8,1);const p=l.clone().multiplyScalar(.9),m=l.clone().multiplyScalar(.75);for(const y of[m,m,p,p])t.col.push(y.r,y.g,y.b);t.idx.push(g,g+2,g+1,g+1,g+2,g+3),this.reflect(e,s,l.multiplyScalar(.35),Math.min(c*.25,3),16)}addSign(t,e,n,s,r,a){const o=new rn({map:t,transparent:!0,depthWrite:!1,blending:li,fog:!1,side:De});this.signMats.push(o);const l=new Lt(new Pn(a,a*160/512),o);l.position.copy(n).setY(n.y+r),l.lookAt(l.position.clone().sub(s)),this.group.add(l),this.reflect(n,s,new Dt(e).multiplyScalar(.7),Math.min(a*.12,1.4),18)}reflect(t,e,n,s,r){const a=this.track.queryTrack(t),o=a.sample,l=hl.clamp(a.lateral,-6.8,6.8)*.92,c=o.pos.clone().addScaledVector(o.right,l);this.reflections.addStatic({pos:c,normal:o.up.clone(),color:n.clone(),width:s,length:r})}buildSkyline(t){const e=[],n=[],s=[],r=[],a=[],o=[];for(let l=0;l<170;l++){const c=t()*Math.PI*2,h=620+t()*260,f=new P(200+Math.cos(c)*h,-2,70+Math.sin(c)*h),u=new P(-Math.sin(c),0,Math.cos(c)),d=new P(Math.cos(c),0,Math.sin(c)),x=t()<.2?120+t()*140:40+t()*80,p=new Dt(7370884).multiplyScalar(.35+t()*.2);wh({center:f,dirX:u,dirZ:d,w:30+t()*40,d:30+t()*40,h:x,tint:p},t,e,n,s,r,a,o)}this.group.add(new Lt(Th(e,n,s,r,a,o),this.skylineMat))}buildLamps(t){const e=this.track.samples.length,n=20,s=[],r=[],a=[],o={pos:[],uv:[],col:[],idx:[]},l=new Dt(16757866),c=new Dt(14215423);for(let y=0,E=0;y<e;y+=n,E++){const S=E%2===0?1:-1,b=this.track.samples[y],M=b.pos.clone().addScaledVector(b.right,S*9.6).setY(b.pos.y+.15),A=b.right.clone().multiplyScalar(-S).setY(0).normalize(),v=8.5,T=new he().makeBasis(new P().crossVectors(new P(0,1,0),A),new P(0,1,0),A);s.push(T.clone().setPosition(M.clone().setY(M.y+v/2))),r.push(T.clone().setPosition(M.clone().setY(M.y+v).addScaledVector(A,1.1)));const C=M.clone().setY(M.y+v-.12).addScaledVector(A,2.3);a.push(T.clone().setPosition(C));const D=t()<.72?l:c;this.lampPositions.push(C),this.lampColors.push(D);const U=this.track.queryTrack(C),O=b.pos.clone().addScaledVector(b.right,hl.clamp(U.lateral,-7,7)),I=9,N=o.pos.length/3;for(const[V,z]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const Z=O.clone().addScaledVector(b.right,V*I).addScaledVector(b.tangent,z*I).addScaledVector(b.up,.06);o.pos.push(Z.x,Z.y,Z.z),o.uv.push((V+1)/2,(z+1)/2),o.col.push(D.r*.35,D.g*.35,D.b*.35)}o.idx.push(N,N+2,N+1,N+1,N+2,N+3),this.reflect(C,A,D.clone().multiplyScalar(.85),1.3,24)}const h=new Me({color:2763824,metalness:.8,roughness:.45}),f=new Tr(new Wn(.09,.14,8.5,10),h,s.length),u=new Tr(new we(.1,.1,2.4),h,r.length),d=new Tr(new we(.5,.18,1),h,a.length),g=new we(.38,.03,.82);g.translate(0,-.1,0);const x=new Tr(g,this.lensMat,a.length);s.forEach((y,E)=>f.setMatrixAt(E,y)),r.forEach((y,E)=>u.setMatrixAt(E,y)),a.forEach((y,E)=>{d.setMatrixAt(E,y),x.setMatrixAt(E,y),x.setColorAt(E,this.lampColors[E])}),f.castShadow=u.castShadow=d.castShadow=!0,this.group.add(f,u,d,x);const p=new de;p.setAttribute("position",new Wt(o.pos,3)),p.setAttribute("uv",new Wt(o.uv,2)),p.setAttribute("color",new Wt(o.col,3)),p.setIndex(o.idx);const m=new Lt(p,this.poolMat);m.renderOrder=1,this.group.add(m);for(let y=0;y<6;y++){const E=new Ip(16757866,0,34,1.6);this.lampLights.push(E),this.group.add(E)}}lampStrength=1;applyPreset(t,e){this.facade.emissiveIntensity=t.windows,this.skylineMat.emissiveIntensity=t.windows*.9,this.skylineMat.color.setScalar(t.name==="day"?.75:.35),this.lensMat.color.setScalar(t.lamps>0?6*t.lamps:.3),this.poolMat.opacity=t.lamps*(t.wet?.7:1),this.poolMat.visible=t.lamps>0,this.storeMat.color.setScalar(t.lamps>0?.35+t.lamps*.65:.25);for(const n of this.signMats)n.color.setScalar(2*t.neon);this.lampStrength=t.lamps,this.groundMat.map=e.map,this.groundMat.roughnessMap=e.roughnessMap,this.groundMat.normalMap=e.normalMap,this.groundMat.color.setScalar(.85),this.groundMat.needsUpdate=!0}update(t){const e=this.lampPositions.map((n,s)=>({i:s,d:n.distanceToSquared(t)})).sort((n,s)=>n.d-s.d);this.lampLights.forEach((n,s)=>{const r=e[s];n.position.copy(this.lampPositions[r.i]).setY(this.lampPositions[r.i].y-.4),n.color.copy(this.lampColors[r.i]),n.intensity=160*this.lampStrength})}}const i_=.012,Rh=.3,As=.003,Xu=i=>Math.min(1,Math.max(0,i)),vn=(i,t,e)=>{const n=Xu((e-i)/(t-i));return n*n*(3-2*n)},nr=(i,t,e)=>Math.exp(-(((i-t)/e)**2)),tn=(i,t,e)=>i+(t-i)*e,Ch=(i,t,e,n)=>vn(t-n,t+n,i)*(1-vn(e-n,e+n,i));function Ur(i){const t=i.length,e=i.map(a=>a[0]),n=i.map(a=>a[1]),s=[];for(let a=0;a<t-1;a++)s.push((n[a+1]-n[a])/(e[a+1]-e[a]));const r=new Array(t);r[0]=s[0],r[t-1]=s[t-2];for(let a=1;a<t-1;a++)r[a]=s[a-1]*s[a]<=0?0:(s[a-1]+s[a])/2;for(let a=0;a<t-1;a++){if(s[a]===0){r[a]=r[a+1]=0;continue}const o=r[a]/s[a],l=r[a+1]/s[a],c=o*o+l*l;if(c>9){const h=3/Math.sqrt(c);r[a]=h*o*s[a],r[a+1]=h*l*s[a]}}return a=>{if(a<=e[0])return n[0];if(a>=e[t-1])return n[t-1];let o=0;for(;a>e[o+1];)o++;const l=e[o+1]-e[o],c=(a-e[o])/l,h=c*c,f=h*c;return(2*f-3*h+1)*n[o]+(f-2*h+c)*l*r[o]+(-2*f+3*h)*n[o+1]+(f-h)*l*r[o+1]}}const go=(i,t,e,n)=>Ch(t,i.x0,i.x1,.012)*Ch(e,i.y0,i.y1,.007)*vn(i.z0,i.z1,n);let ht;const s_={name:"wedge",halfLen:2.25,frontAxle:1.38,rearAxle:-1.3,trackHalf:.83,wheelRadius:.36,top:[[-2.25,.86],[-2.12,.93],[-1.9,.97],[-1.3,.975],[-.6,.955],[.3,.935],[.95,.9],[1.45,.8],[1.9,.66],[2.25,.54]],bottom:[[-2.25,.4],[-2.05,.27],[-1.75,.13],[1.75,.12],[2.05,.2],[2.25,.28]],shoulder:[[-2.25,.8],[-1.9,.87],[-1.3,.885],[-.7,.82],[.1,.78],[.8,.78],[1.38,.79],[1.9,.64],[2.25,.51]],width:[[-2.25,.82],[-2.05,.93],[-1.6,.985],[-1.3,.992],[-.8,.95],[0,.925],[.8,.93],[1.38,.968],[1.85,.93],[2.1,.86],[2.25,.77]],fender:[.05,.035],closeFront:.08,closeRear:.1,bulgeFront:.05,bulgeRear:.035,cabin:{zFront:.98,zRear:-1.5,base:.865,roof:1.23,roofFront:.05,roofRear:-.55,frontDrop:.36,rearDrop:.3,rearExp:1.15,wb:.8,wt:.56,rearTaper:.1,windscreenZ:.4,rearGlassZ:-.95,bPillarZ:-.305,quarterZ:-.8},head:[{x0:.4,x1:.77,y0:.455,y1:.535,z0:2.02,z1:2.1}],tail:[{x0:-1,x1:.8,y0:.725,y1:.775,z0:-2.17,z1:-2.22}],intakes:[{x0:-1,x1:.58,y0:.3,y1:.415,z0:2.14,z1:2.2},{x0:.62,x1:.8,y0:.3,y1:.4,z0:2,z1:2.08}],scoop:{z:-.62,y:.56},valanceY:.52,seams:{sideX:.8,doorFront:.95,doorRear:-.38,sillY:.3,doorTop:.86,handleY:.73,hoodZ:2,hoodX:.66,hoodY:.6,deckY:.84,engineZ:-1.56,engineX:.58,fuelZ:-1,fuelY:.74,badgeZ:2.07,badgeY:.5},wing:"gt",exhaust:"twin"},r_={name:"muscle",halfLen:2.4,frontAxle:1.48,rearAxle:-1.32,trackHalf:.85,wheelRadius:.36,top:[[-2.4,.9],[-2.3,.985],[-2.05,1],[-1.4,1],[-.6,.99],[.4,.98],[1.2,.97],[1.9,.94],[2.25,.88],[2.4,.82]],bottom:[[-2.4,.44],[-2.2,.28],[-1.9,.15],[1.9,.14],[2.2,.24],[2.4,.34]],shoulder:[[-2.4,.86],[-2.05,.92],[-1.32,.93],[-.6,.88],[.4,.87],[1.48,.9],[2.1,.86],[2.4,.8]],width:[[-2.4,.88],[-2.2,.96],[-1.32,.99],[-.5,.96],[.5,.955],[1.48,.975],[2.15,.96],[2.4,.9]],fender:[.03,.05],closeFront:.05,closeRear:.07,bulgeFront:.02,bulgeRear:.02,cabin:{zFront:.55,zRear:-1.95,base:.95,roof:1.37,roofFront:-.2,roofRear:-.75,frontDrop:.37,rearDrop:.37,rearExp:.9,wb:.8,wt:.6,rearTaper:.08,windscreenZ:-.05,rearGlassZ:-1,bPillarZ:-.55,quarterZ:-1.05},head:[{x0:.5,x1:.62,y0:.6,y1:.7,z0:2.27,z1:2.34},{x0:.66,x1:.78,y0:.6,y1:.7,z0:2.27,z1:2.34}],tail:[{x0:.3,x1:.43,y0:.73,y1:.82,z0:-2.33,z1:-2.38},{x0:.47,x1:.6,y0:.73,y1:.82,z0:-2.33,z1:-2.38},{x0:.64,x1:.77,y0:.73,y1:.82,z0:-2.33,z1:-2.38}],intakes:[{x0:-1,x1:.44,y0:.58,y1:.72,z0:2.29,z1:2.35},{x0:-1,x1:.6,y0:.43,y1:.51,z0:2.29,z1:2.35}],scoop:null,valanceY:.55,seams:{sideX:.85,doorFront:.62,doorRear:-.62,sillY:.31,doorTop:.9,handleY:.8,hoodZ:2.26,hoodX:.7,hoodY:.8,deckY:.93,engineZ:-1.95,engineX:.7,fuelZ:-1.55,fuelY:.8,badgeZ:2.18,badgeY:.8},wing:"none",exhaust:"quad"},a_={name:"gt",halfLen:2.35,frontAxle:1.45,rearAxle:-1.28,trackHalf:.84,wheelRadius:.36,top:[[-2.35,.84],[-2.22,.93],[-1.95,.95],[-1.3,.95],[-.6,.935],[.3,.925],[1,.9],[1.7,.83],[2.1,.73],[2.35,.6]],bottom:[[-2.35,.38],[-2.15,.25],[-1.85,.13],[1.85,.12],[2.15,.2],[2.35,.3]],shoulder:[[-2.35,.78],[-1.95,.86],[-1.28,.87],[-.5,.8],[.4,.78],[1.45,.8],[2,.7],[2.35,.56]],width:[[-2.35,.8],[-2.15,.92],[-1.28,.98],[-.5,.94],[.4,.93],[1.45,.96],[2,.92],[2.2,.85],[2.35,.75]],fender:[.045,.045],closeFront:.08,closeRear:.1,bulgeFront:.04,bulgeRear:.03,cabin:{zFront:.68,zRear:-1.65,base:.9,roof:1.25,roofFront:-.2,roofRear:-.75,frontDrop:.33,rearDrop:.33,rearExp:1,wb:.79,wt:.55,rearTaper:.1,windscreenZ:.05,rearGlassZ:-1,bPillarZ:-.55,quarterZ:-1},head:[{x0:.42,x1:.78,y0:.49,y1:.56,z0:2.12,z1:2.2}],tail:[{x0:-1,x1:.78,y0:.7,y1:.74,z0:-2.27,z1:-2.32}],intakes:[{x0:-1,x1:.42,y0:.34,y1:.47,z0:2.22,z1:2.28},{x0:.55,x1:.75,y0:.34,y1:.42,z0:2.1,z1:2.18}],scoop:null,valanceY:.5,seams:{sideX:.82,doorFront:.78,doorRear:-.5,sillY:.29,doorTop:.86,handleY:.74,hoodZ:2.1,hoodX:.64,hoodY:.65,deckY:.88,engineZ:-1.7,engineX:.62,fuelZ:-1.15,fuelY:.76,badgeZ:2.16,badgeY:.55},wing:"none",exhaust:"twin"},o_={name:"hatch",halfLen:2,frontAxle:1.27,rearAxle:-1.22,trackHalf:.79,wheelRadius:.33,top:[[-2,.98],[-1.92,1.02],[-1.6,1.03],[-.6,1],[.5,.98],[.95,.95],[1.4,.86],[1.8,.76],[2,.68]],bottom:[[-2,.42],[-1.85,.27],[-1.6,.15],[1.6,.15],[1.85,.22],[2,.3]],shoulder:[[-2,.94],[-1.6,.97],[-.6,.92],[.5,.9],[1.27,.88],[1.75,.78],[2,.66]],width:[[-2,.84],[-1.85,.9],[-1.22,.93],[0,.89],[1.27,.92],[1.75,.88],[2,.8]],fender:[.03,.03],closeFront:.07,closeRear:.05,bulgeFront:.03,bulgeRear:.015,cabin:{zFront:1.12,zRear:-1.93,base:.985,roof:1.45,roofFront:.3,roofRear:-1.6,frontDrop:.44,rearDrop:.14,rearExp:1.6,wb:.78,wt:.62,rearTaper:.03,windscreenZ:.62,rearGlassZ:-1.62,bPillarZ:-.35,quarterZ:-1.25},head:[{x0:.48,x1:.76,y0:.56,y1:.64,z0:1.86,z1:1.95}],tail:[{x0:.6,x1:.8,y0:.66,y1:.86,z0:-1.94,z1:-1.99}],intakes:[{x0:-1,x1:.55,y0:.36,y1:.5,z0:1.92,z1:1.98},{x0:.6,x1:.76,y0:.36,y1:.44,z0:1.85,z1:1.93}],scoop:null,valanceY:.52,seams:{sideX:.8,doorFront:.9,doorRear:-.4,sillY:.31,doorTop:.9,handleY:.82,hoodZ:1.85,hoodX:.62,hoodY:.7,deckY:1.6,engineZ:-1.9,engineX:.5,fuelZ:-1,fuelY:.8,badgeZ:1.88,badgeY:.62},wing:"roof",exhaust:"single"},Jl={wedge:s_,muscle:r_,gt:a_,hatch:o_};function l_(i){return{...i,top:Ur(i.top),bottom:Ur(i.bottom),shoulder:Ur(i.shoulder),width:Ur(i.width),axleY:i.wheelRadius-i_,archR:i.wheelRadius+.03,archX:.58*Math.min(1,i.trackHalf/.83)}}function c_(i){const t=ht.bottom(i),e=ht.top(i),n=Math.min(ht.shoulder(i),e-.012),s=ht.width(i),r=s-.07,a=ht.fender[0]*nr(i,ht.frontAxle,.42)+ht.fender[1]*nr(i,ht.rearAxle,.5),o=t+.15;return[{x:0,y:t,sharp:1,steps:4},{x:r*.85,y:t,sharp:1,steps:6},{x:r,y:t+.045,sharp:1,steps:6},{x:r+.012,y:o,sharp:.35,steps:10},{x:s-.034,y:tn(o,n,.45),sharp:1,steps:12},{x:s,y:n,sharp:.18,steps:10},{x:s-.075,y:n+.55*(e-n)+a,sharp:1,steps:14},{x:s*.5,y:e+.004+a*.15,sharp:1,steps:12},{x:0,y:e,sharp:1,steps:0}]}function h_(i,t){const e=c_(i),n=e.length,s=a=>a===0?[Math.hypot(e[1].x-e[0].x,e[1].y-e[0].y),0]:a===n-1?[-Math.hypot(e[a].x-e[a-1].x,e[a].y-e[a-1].y),0]:[(e[a+1].x-e[a-1].x)/2*e[a].sharp,(e[a+1].y-e[a-1].y)/2*e[a].sharp];let r=0;for(let a=0;a<n-1;a++){const[o,l]=s(a),[c,h]=s(a+1);for(let f=0;f<e[a].steps;f++){const u=f/e[a].steps,d=u*u,g=d*u,x=2*g-3*d+1,p=g-2*d+u,m=-2*g+3*d,y=g-d;t[r++].set(x*e[a].x+p*o+m*e[a+1].x+y*c,x*e[a].y+p*l+m*e[a+1].y+y*h)}}t[r].set(e[n-1].x,e[n-1].y)}const u_=75;function f_(i,t,e){const n=Math.abs(i);let s=1,r=0;const a=Math.max(...ht.head.map(u=>go(u,n,t,e))),o=Math.max(...ht.tail.map(u=>go(u,n,t,e))),l=Math.max(0,...ht.intakes.map(u=>go(u,n,t,e))),c=ht.scoop?nr(e,ht.scoop.z,.2)*nr(t,ht.scoop.y,.07)*vn(.75,.85,n):0,h=vn(-ht.halfLen+.25,-ht.halfLen+.13,e)*(1-vn(ht.valanceY-.02,ht.valanceY+.02,t));r+=.024*a+.016*o+.045*l+.06*c,s=Math.min(s,tn(1,.03,Math.max(a,o))),s=Math.min(s,tn(1,.015,l)),s=Math.min(s,tn(1,.04,c)),s=Math.min(s,tn(1,.05,h));for(const u of[ht.frontAxle,ht.rearAxle])n<ht.archX+.01&&Math.hypot(e-u,t-ht.axleY)<ht.archR+.005&&(s=Math.min(s,.03));const f=ht.cabin;return e>f.zRear+.05&&e<f.zFront-.03&&n<Ql(e)-.03&&t>f.base-.065&&(s=Math.min(s,.035)),t<ht.bottom(e)+.14&&n>.6&&e>ht.rearAxle+.45&&e<ht.frontAxle-.45&&(s=Math.min(s,.06)),e>ht.halfLen-.25&&t<ht.bottom(ht.halfLen-.2)+.015&&(s=Math.min(s,.06)),{shade:s,depth:r,head:a,tail:o}}function d_(){const t=u_,e=t*2-2,n=[],s=[],r=Array.from({length:t},()=>new rt),a=new Float32Array(t),o=M=>ht.halfLen*(2*(M-.35*Math.sin(2*Math.PI*M)/(2*Math.PI))-1),l=(M,A,v)=>{h_(M,r),a[t-1]=0;for(let T=t-2;T>=0;T--)a[T]=a[T+1]+r[T].distanceTo(r[T+1])*A;for(let T=0;T<e;T++){const C=T<t?t-1-T:T-t+1,D=T<t?1:-1;let U=r[C].x*D*A,O=v+(r[C].y-v)*A,I=M;for(const N of[ht.frontAxle,ht.rearAxle]){if(Math.abs(U)<=ht.archX)continue;const V=I-N,z=O-ht.axleY,Z=Math.hypot(V,z);Z>=ht.archR?U*=1+.014*nr(Z,ht.archR+.016,.012):(I=N+V/Math.max(Z,1e-4)*ht.archR,O=ht.axleY+z/Math.max(Z,1e-4)*ht.archR,Z<=ht.archR-.04&&(U=Math.sign(U)*ht.archX))}n.push(U,O,I),s.push(M,a[C])}},c=M=>{const A=M>0?ht.closeFront:ht.closeRear,v=Xu((Math.abs(M)-(ht.halfLen-A))/A);return .8+.2*Math.sqrt(Math.sqrt(1-v*v))},h=M=>(ht.bottom(M)+ht.top(M))/2;for(let M=0;M<=320;M++){const A=o(M/320);l(A,c(A),h(A))}const f=14,u=[];for(let M=0;M<320;M++)for(let A=0;A<e;A++){const v=M*e+A,T=M*e+(A+1)%e,C=(M+1)*e+A,D=(M+1)*e+(A+1)%e;u.push(v,C,T,T,C,D)}for(const M of[320,0]){const A=M===0?-1:1,v=A*ht.halfLen,T=h(v),C=M===0?ht.bulgeRear:ht.bulgeFront,D=n.length/3;for(let N=1;N<f;N++){const V=1-N/f;for(let z=0;z<e;z++){const Z=(M*e+z)*3;n.push(n[Z]*V,T+(n[Z+1]-T)*V,v+A*C*(1-V*V)),s.push(s[(M*e+z)*2],s[(M*e+z)*2+1]*V)}}const U=n.length/3;n.push(0,T,v+A*C),s.push(v,0);const O=N=>N===0?M*e:D+(N-1)*e;for(let N=0;N<f-1;N++)for(let V=0;V<e;V++){const z=O(N)+V,Z=O(N)+(V+1)%e,q=O(N+1)+V,K=O(N+1)+(V+1)%e;A>0?u.push(z,q,Z,Z,q,K):u.push(z,Z,q,Z,K,q)}const I=O(f-1);for(let N=0;N<e;N++){const V=I+N,z=I+(N+1)%e;A>0?u.push(V,U,z):u.push(V,z,U)}}const d=new de;d.setAttribute("position",new Wt(n,3)),d.setAttribute("uv",new Wt(s,2)),d.setIndex(u),qu(d),d.computeVertexNormals();const g=d.getAttribute("position"),x=d.getAttribute("normal"),p=g.count,m=new Float32Array(p*3),y=new Float32Array(p),E=new Float32Array(p);for(let M=0;M<p;M++){const A=f_(g.getX(M),g.getY(M),g.getZ(M));g.setXYZ(M,g.getX(M)-x.getX(M)*A.depth,g.getY(M)-x.getY(M)*A.depth,g.getZ(M)-x.getZ(M)*A.depth),m.fill(A.shade,M*3,M*3+3),y[M]=A.head,E[M]=A.tail}d.setAttribute("color",new xn(m,3)),d.computeVertexNormals();const S=Ph(d,y,.62,.008),b=Ph(d,E,.55,.006);return{body:d,head:S.geometry,tail:b.geometry,headPoints:S.centroids,tailPoints:b.centroids}}function Ph(i,t,e,n){const s=i.getAttribute("position"),r=i.getAttribute("normal"),a=i.getIndex(),o=[],l=[new P,new P],c=[0,0];for(let f=0;f<a.count;f+=3){const u=[a.getX(f),a.getX(f+1),a.getX(f+2)];if(!u.some(d=>t[d]<e))for(const d of u){const g=s.getX(d)+r.getX(d)*n,x=s.getY(d)+r.getY(d)*n,p=s.getZ(d)+r.getZ(d)*n;o.push(g,x,p);const m=g>0?0:1;l[m].add(new P(g,x,p)),c[m]++}}const h=new de;return h.setAttribute("position",new Wt(o,3)),h.computeVertexNormals(),{geometry:h,centroids:l.map((f,u)=>f.divideScalar(Math.max(1,c[u])))}}function qu(i){const t=i.getAttribute("position"),e=i.getIndex();let n=0;const s=new P,r=new P,a=new P;for(let o=0;o<e.count;o+=3)s.fromBufferAttribute(t,e.getX(o)),r.fromBufferAttribute(t,e.getX(o+1)),a.fromBufferAttribute(t,e.getX(o+2)),n+=s.dot(r.clone().cross(a));if(n<0)for(let o=0;o<e.count;o+=3){const l=e.getX(o+1);e.setX(o+1,e.getX(o+2)),e.setX(o+2,l)}}function Ql(i){const t=ht.cabin;return t.wb-t.rearTaper*vn(t.roofRear-.05,t.zRear,i)-.05*vn(t.zFront-.58,t.zFront,i)}function Gs(i){const t=ht.cabin;let e;return i>t.roofFront?e=t.roof-t.frontDrop*Math.pow((i-t.roofFront)/(t.zFront-t.roofFront),1.3):i>t.roofRear?e=t.roof:e=t.roof-t.rearDrop*Math.pow((t.roofRear-i)/(t.roofRear-t.zRear),t.rearExp),Math.max(t.base,e)}const Xi=0,Fr=1,Lh=2;function p_(){const i=ht.cabin,{zFront:t,zRear:e,base:n}=i,s=110,r=48,a=(x,p)=>{const m=Math.abs(Math.cos(p)),y=Math.sin(p);if(y<.1)return Lh;if(m<.5)return x>i.windscreenZ?Xi:x>i.rearGlassZ?Fr:Xi;if(m<.72)return Fr;if(Math.abs(x-i.bPillarZ)<.055)return Lh;if(x<=i.quarterZ)return Fr;const E=tn(t-.08,i.windscreenZ-.05,vn(.1,.75,y));return x<E?Xi:Fr},o=[],l=[];for(let x=0;x<=s;x++){const p=tn(e,t,x/s),m=Gs(p),y=Ql(p),E=i.wt-.06*vn(i.roofRear-.05,e,p);for(let S=0;S<=r;S++){const b=S/r*Math.PI,M=Math.sign(Math.cos(b))*Math.pow(Math.abs(Math.cos(b)),2/3.4),A=Math.pow(Math.sin(b),2/3.4);o.push(M*tn(y,E,A),n+(m-n)*A+.025*(1-M*M)*A,p),l.push(p,b*.6)}}const c=[[],[],[]],h=new Float32Array((s+1)*(r+1)+2);for(let x=0;x<s;x++){const p=tn(e,t,(x+.5)/s);for(let m=0;m<r;m++){const y=x*(r+1)+m,E=y+1,S=y+r+1,b=S+1,M=a(p,(m+.5)/r*Math.PI);if(c[M].push(y,S,E,E,S,b),M===Xi)for(const A of[y,E,S,b])h[A]+=.25}}for(const[x,p]of[[0,-1],[s,1]]){const m=tn(e,t,x/s),y=o.length/3;o.push(0,(n+Gs(m))/2,m),l.push(m,0);for(let E=0;E<r;E++){const S=x*(r+1)+E;p<0?c[Xi].push(S,S+1,y):c[Xi].push(S+1,S,y)}}const f=new de;f.setAttribute("position",new Wt(o,3)),f.setAttribute("uv",new Wt(l,2)),f.setIndex(c.flat()),qu(f),f.computeVertexNormals();const u=f.getAttribute("position"),d=f.getAttribute("normal");for(let x=0;x<u.count;x++){const p=h[x]*.012;u.setXYZ(x,u.getX(x)-d.getX(x)*p,u.getY(x)-d.getY(x)*p,u.getZ(x)-d.getZ(x)*p)}f.computeVertexNormals();let g=0;return c.forEach((x,p)=>{f.addGroup(g,x.length,p),g+=x.length}),f}let Or=null;function m_(){if(Or)return Or;const i=(()=>{let A=2654435769;return()=>{A=A+1831565813|0;let v=Math.imul(A^A>>>15,1|A);return v=v+Math.imul(v^v>>>7,61|v)^v,((v^v>>>14)>>>0)/4294967296}})(),t=256,e=2,n=new Uint8Array(t*t*4),s=Math.ceil(t/e),r=[];for(let A=0;A<s*s;A++){const v=i()*Math.PI*2,T=Math.sqrt(i())*.7;r.push([Math.cos(v)*T,Math.sin(v)*T])}for(let A=0;A<t;A++)for(let v=0;v<t;v++){const[T,C]=r[Math.floor(A/e)*s+Math.floor(v/e)],D=Math.sqrt(Math.max(0,1-T*T-C*C)),U=(A*t+v)*4;n[U]=Math.round((T*.5+.5)*255),n[U+1]=Math.round((C*.5+.5)*255),n[U+2]=Math.round((D*.5+.5)*255),n[U+3]=255}const a=new va(n,t,t);a.wrapS=a.wrapT=as,a.magFilter=Ee,a.minFilter=Gn,a.generateMipmaps=!0,a.anisotropy=4,a.repeat.set(16,16),a.needsUpdate=!0;const o=(A,v)=>{const T=document.createElement("canvas");return T.width=A,T.height=v,[T,T.getContext("2d")]},[l,c]=o(1024,128);c.fillStyle="#2a2a2a",c.fillRect(0,0,1024,128),c.fillStyle="#323232",c.fillRect(0,0,1024,10),c.fillRect(0,118,1024,10),c.fillStyle="#0c0c0c";for(const A of[.34,.5,.66])c.fillRect(0,A*128-2,1024,4);c.strokeStyle="#121212",c.lineWidth=2;for(let A=0;A<1024;A+=11)for(const[v,T]of[[14,40],[88,114]])c.beginPath(),c.moveTo(A,v),c.lineTo(A+5,T),c.stroke();const h=new Zr(l);h.colorSpace=Be,h.wrapS=as,h.anisotropy=4;const f=1024,[u,d]=o(f,f);d.fillStyle="#ffffff",d.font="bold 30px sans-serif",d.textAlign="center",d.textBaseline="middle";const g="DRIVER  RS-R  ·  265/35 ZR19  ·  ",x=g+g,p=Math.PI*2/x.length;for(let A=0;A<x.length;A++)d.save(),d.translate(f/2,f/2),d.rotate(A*p),d.translate(0,-468.1142857142857),d.fillText(x[A],0,0),d.restore();const m=new Zr(u);m.anisotropy=4;const y=256,[E,S]=o(y,y),b=S.createRadialGradient(y/2,y/2,0,y/2,y/2,y/2);b.addColorStop(0,"#2a2a2a"),b.addColorStop(.42,"#2a2a2a"),b.addColorStop(.45,"#9a9a9a"),b.addColorStop(1,"#b4b4b4"),S.fillStyle=b,S.fillRect(0,0,y,y),S.fillStyle="#151515";for(let A=0;A<3;A++){const v=(.58+A*.12)*(y/2);for(let T=0;T<18;T++){const C=T/18*Math.PI*2+A*.12;S.beginPath(),S.arc(y/2+Math.cos(C)*v,y/2+Math.sin(C)*v,3.2,0,Math.PI*2),S.fill()}}const M=new Zr(E);return M.colorSpace=Be,Or={flakes:a,tread:h,sidewall:m,disc:M},Or}const g_=i=>Number.isInteger(i)?i.toFixed(1):String(i);function Dh(i,t,e){const n=ht,s=n.seams,r=g_,a=new Dt(t.color),o=["none","stripes","side","twotone"].indexOf(t.kind);i.customProgramCacheKey=()=>`car-paint-${n.name}-${t.kind}-${t.color}-${e}`,i.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCarPos;
varying vec3 vCarN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCarPos = position;
vCarN = normal;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vCarPos;
        varying vec3 vCarN;
        float seamLine(float d, float w) {
          float aa = fwidth(d) * 1.2 + 1e-5;
          return 1.0 - smoothstep(w, w + aa, abs(d));
        }
        float softBand(float x, float a, float b) {
          float aa = fwidth(x) + 1e-5;
          return smoothstep(a - aa, a + aa, x) * (1.0 - smoothstep(b - aa, b + aa, x));
        }
        float panelGaps(vec3 p, out float badge) {
          const float W = 0.0018;
          float ax = abs(p.x);
          float side = step(${r(s.sideX)}, ax);
          float doorFront = ${r(s.doorFront)} - 0.12 * (p.y - 0.5);
          float doorRear = ${r(s.doorRear)} + 0.18 * (p.y - 0.5);
          float doorY = step(${r(s.sillY-.01)}, p.y) * step(p.y, ${r(s.doorTop)});
          float g = side * doorY * max(seamLine(p.z - doorFront, W), seamLine(p.z - doorRear, W));
          g = max(g, side * step(doorRear, p.z) * step(p.z, doorFront) * seamLine(p.y - ${r(s.sillY)}, W));
          // Door handle slot, just ahead of the rear shut line.
          g = max(g, side * step(abs(p.y - ${r(s.handleY)}), 0.008) * step(doorRear + 0.11, p.z) * step(p.z, doorRear + 0.26));
          // Hood: front shut line and the two long seams inboard of the fenders.
          float top = step(${r(s.hoodY)}, p.y);
          g = max(g, top * step(ax, ${r(s.hoodX)}) * seamLine(p.z - ${r(s.hoodZ)}, W));
          g = max(g, top * step(${r(n.cabin.zFront+.02)}, p.z) * step(p.z, ${r(s.hoodZ)}) * seamLine(ax - ${r(s.hoodX)}, W));
          // Engine cover / boot lid.
          float deck = step(${r(s.deckY)}, p.y);
          g = max(g, deck * step(ax, ${r(s.engineX)}) * seamLine(p.z - ${r(s.engineZ)}, W));
          g = max(g, deck * step(${r(-n.halfLen+.13)}, p.z) * step(p.z, ${r(s.engineZ)}) * seamLine(ax - ${r(s.engineX)}, W));
          // Fuel filler on the right rear flank.
          g = max(g, step(p.x, -${r(s.sideX)}) * seamLine(length(vec2(p.z - ${r(s.fuelZ)}, p.y - ${r(s.fuelY)})) - 0.055, 0.0016));
          // Nose badge.
          vec2 b = vec2(p.x / 0.055, (p.z - ${r(s.badgeZ)}) / 0.03);
          float onNose = step(${r(s.badgeY)}, p.y) * step(${r(s.badgeZ-.12)}, p.z);
          badge = onNose * (1.0 - smoothstep(0.86, 0.94, length(b)));
          g = max(g, onNose * seamLine((length(b) - 1.0) * 0.03, 0.0012));
          return g;
        }
        float liveryMask(vec3 p, vec3 nrm) {
          float ax = abs(p.x);
          ${o===1?"return step(0.45, nrm.y) * softBand(ax, 0.05, 0.17);":o===2?`return step(0.55, abs(nrm.x)) * softBand(p.y, ${r(s.sillY+.09)}, ${r(s.sillY+.15)}) * step(${r(-n.halfLen+.3)}, p.z) * step(p.z, ${r(n.halfLen-.3)});`:o===3?`return 1.0 - smoothstep(${r(s.sillY+.16)}, ${r(s.sillY+.17)}, p.y);`:"return 0.0;"}
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        float carLivery = liveryMask(vCarPos, normalize(vCarN));
        #ifdef USE_COLOR
          carLivery *= step(0.5, vColor.r);
        #endif
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${r(a.r)}, ${r(a.g)}, ${r(a.b)}), carLivery);
        float carBadge = 0.0;
        float carGap = ${e?"panelGaps(vCarPos, carBadge)":"0.0"};
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.85, 0.68, 0.32), carBadge);
        diffuseColor.rgb *= 1.0 - 0.92 * carGap;`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
        #ifdef USE_CLEARCOAT
          material.clearcoat *= 1.0 - carGap;
        #endif`)}}function x_(i,t,e,n,s){const r=new gn,a=new gn;r.add(a);const o=[],l=.25,c=.36,h=.15,f=.045;o.push(new rt(l,-h+.01));for(let b=0;b<=6;b++){const M=-Math.PI/2+b/6*(Math.PI/2);o.push(new rt(c-f+Math.cos(M)*f,-h+f+Math.sin(M)*f))}for(let b=0;b<=6;b++){const M=b/6*(Math.PI/2);o.push(new rt(c-f+Math.cos(M)*f,h-f+Math.sin(M)*f))}o.push(new rt(l,h-.01));const u=new $l(o,64);u.rotateZ(Math.PI/2);const d=new Lt(u,t);d.castShadow=!0,a.add(d);const g=new Lt(new Zl(.262,.315,96,1),s);g.rotation.y=Math.PI/2,g.position.x=h-.008,a.add(g);const x=new Lt(new Wn(.251,.251,.27,32,1,!0),i);x.rotation.z=Math.PI/2,a.add(x);const p=new Lt(new Ma(.247,.012,8,40),i);p.rotation.y=Math.PI/2,p.position.x=.125,a.add(p);const m=new we(.035,.22,.042);m.translate(0,.128,0);for(let b=0;b<10;b++){const M=new Lt(m,i);M.position.x=.1,M.rotation.x=b/10*Math.PI*2+(b%2===0?.09:-.09),M.rotation.y=.12,a.add(M)}const y=new Lt(new Wn(.055,.065,.06,16),i);y.rotation.z=Math.PI/2,y.position.x=.105,a.add(y);const E=new Lt(new Wn(.2,.2,.03,32),e);E.rotation.z=Math.PI/2,E.position.x=.03,r.add(E);const S=new Lt(new we(.06,.13,.09),n);return S.position.set(.06,.14,-.1),S.rotation.x=.5,r.add(S),{root:r,spin:a}}function Ih(i,t){const e=new Yl;e.moveTo(0,0),e.bezierCurveTo(0,.03,t*.25,.05,t*.55,.04),e.bezierCurveTo(t*.8,.032,t*.95,.02,t,.012),e.lineTo(t,.004),e.bezierCurveTo(t*.7,0,t*.3,-.012,.03,-.008),e.quadraticCurveTo(0,-.006,0,0);const n=new _a(e,{depth:i,bevelEnabled:!1,curveSegments:10});return n.rotateY(Math.PI/2),n.translate(-i/2,0,t/2),n}function v_(){const i=new Yl,t=ht.width(ht.halfLen-.3)-.07,e=ht.halfLen-.45;i.moveTo(-t,e);for(let s=0;s<=16;s++){const r=tn(-t,t,s/16);i.lineTo(r,ht.halfLen+.07-.13*(r/t)**4)}i.lineTo(t,e),i.closePath();const n=new _a(i,{depth:.024,bevelEnabled:!1});return n.rotateX(Math.PI/2),n.translate(0,ht.bottom(ht.halfLen-.2)-.03,0),n}function Nh(i,t,e,n,s){const a=Math.round(128*t/i),o=new Uint8Array(128*a*4),l=.5,c=.5*t/i;for(let f=0;f<a;f++)for(let u=0;u<128;u++){const d=Math.abs((u+.5)/128-.5),g=Math.abs(((f+.5)/a-.5)*(t/i)),x=d-(l-n-e),p=g-(c-n-e),m=Math.hypot(Math.max(x,0),Math.max(p,0))+Math.min(Math.max(x,p),0)-e,y=Math.pow(1-vn(-n*.25,n,m),s);o.fill(255,(f*128+u)*4,(f*128+u)*4+3),o[(f*128+u)*4+3]=Math.round(y*255),o[(f*128+u)*4+1]=Math.round(y*255)}const h=new va(o,128,a);return h.needsUpdate=!0,h.magFilter=Ee,h.minFilter=Ee,h}function xo(i){return i.setAttribute("color",new Wt(new Float32Array(i.getAttribute("position").count*3).fill(1),3)),i}class Yu{group=new gn;spec;paintMats;wheels=[];paint;headlightMat;tailMat;underglowMat;headlightPoints;tailPoints;wetShadow;sprungPivot=new gn;sprung=new gn;constructor(t){this.spec=Jl[t.body??"wedge"],ht=l_(this.spec);const e=t.livery??{kind:"none",color:0},n=m_(),s=t.flake??.18;this.paint=new ao({color:t.color,metalness:.75,roughness:.38,normalMap:n.flakes,normalScale:new rt(s,s),clearcoat:1,clearcoatRoughness:.03,vertexColors:!0}),t.pearl&&(this.paint.iridescence=.6,this.paint.iridescenceIOR=1.5,this.paint.iridescenceThicknessRange=[260,480]);const r=this.paint.clone();Dh(r,e,!0);const a=this.paint.clone();Dh(a,e,!1),this.paintMats=[this.paint,r,a];const o=new ao({color:658962,metalness:0,roughness:.03,specularIntensity:1,clearcoat:1,clearcoatRoughness:0,transparent:!0,opacity:.84}),l=new Me({color:1315862,roughness:.75,metalness:.05}),c=new Me({color:723725,roughness:.35,metalness:.3}),h=new Me({color:328966,roughness:.55,metalness:.1}),f=new ao({color:1118484,roughness:.25,metalness:.4,clearcoat:1,clearcoatRoughness:.05}),u=new Me({color:14540253,roughness:.12,metalness:1}),d=new Me({color:t.rim??2829617,roughness:.25,metalness:1}),g=new Me({map:n.tread,roughness:.88,metalness:0}),x=new Me({map:n.disc,roughness:.35,metalness:1}),p=new Me({color:9079434,alphaMap:n.sidewall,transparent:!0,depthWrite:!1,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-1}),m=new Me({color:14161951,roughness:.4,metalness:.2}),y=new Me({color:394758,roughness:.9,side:De});this.headlightMat=new Me({color:0,emissive:14543103,emissiveIntensity:7,side:De}),this.tailMat=new Me({color:1703936,emissive:16715808,emissiveIntensity:4,side:De}),this.sprungPivot.position.y=Rh,this.sprung.position.y=-Rh,this.sprungPivot.add(this.sprung),this.group.add(this.sprungPivot);const E=d_(),S=new Lt(E.body,r);S.castShadow=!0,S.receiveShadow=!0,this.sprung.add(S),this.sprung.add(new Lt(E.head,this.headlightMat),new Lt(E.tail,this.tailMat)),this.headlightPoints=E.headPoints,this.tailPoints=E.tailPoints;const b=new Lt(xo(p_()),[o,a,h]);b.castShadow=!0,this.sprung.add(b);const M=ht.cabin,A=M.bPillarZ-.3;for(const ut of[1,-1]){const G=new Lt(new we(.42,.3,.09),l);G.position.set(ut*.34,M.base+.185,A),G.rotation.x=-.22;const Y=new Lt(new we(.24,.09,.08),l);Y.position.set(ut*.34,M.base+.305,A-.06),Y.rotation.x=-.22,this.sprung.add(G,Y)}const v=new Lt(new Ma(.16,.018,8,28),l);v.position.set(.34,M.base+.175,M.windscreenZ-.28),v.rotation.x=-.35;const T=new Lt(new we(M.wb*2-.2,.06,.32),l);T.position.set(0,M.base+.125,M.windscreenZ+.1),this.sprung.add(v,T);const C=new Lt(new we(.36,.012,.022),this.tailMat);C.position.set(0,Gs(M.rearGlassZ+.02)+.027,M.rearGlassZ+.02),C.rotation.x=-.3,this.sprung.add(C);const D=M.zFront-.12;for(const ut of[1,-1]){const G=new Lt(new we(.5,.01,.014),c);G.position.set(ut*.2-.05,Gs(D)+.024,D),G.rotation.set(-.46,ut*.08,0),this.sprung.add(G)}const U=new Lt(v_(),h);U.castShadow=!0,this.sprung.add(U);const O=ht.intakes[0];for(let ut=0;ut<3;ut++){const G=new Lt(new we(O.x1*1.9,.012,.05),c);G.position.set(0,tn(O.y0,O.y1,(ut+1)/4),O.z1+.03),G.rotation.x=.35,this.sprung.add(G)}const I=-ht.halfLen,N=ht.width(I+.2)-.15,V=new Lt(new we(N*2,.02,.42),h);V.position.set(0,.15,I+.21),V.rotation.x=-.18,this.sprung.add(V);for(let ut=0;ut<6;ut++){const G=new Lt(new we(.018,.2,.4),h);G.position.set(tn(-N*.78,N*.78,ut/5),.25,I+.18),this.sprung.add(G)}const z=ht.exhaust==="quad"?[-.62,-.5,.5,.62]:ht.exhaust==="single"?[.45]:[-.24,.24],Z=ht.exhaust==="single"?.06:.052;for(const ut of z){const G=new Lt(new Wn(Z,Z*.92,.2,20,1,!0),u);G.rotation.x=Math.PI/2,G.position.set(ut,.28,I+.05);const Y=new Lt(new Ks(Z*.85,20),c);Y.position.set(ut,.28,I+.03),Y.rotation.y=Math.PI,this.sprung.add(G,Y)}if(ht.wing==="gt"){const ut=I+.29,G=ht.top(ut)+.22,Y=Math.min(1.76,ht.width(ut)*1.8),at=new Lt(Ih(Y,.34),f);at.position.set(0,G,ut),at.rotation.x=-.1,at.castShadow=!0,this.sprung.add(at);for(const At of[1,-1]){const ft=new Lt(new we(.016,.15,.4),f);ft.position.set(At*(Y/2+.008),G-.02,ut-.01);const Rt=new Lt(new we(.024,.28,.09),f);Rt.position.set(At*.42,G-.12,ut-.04),Rt.rotation.x=.22,this.sprung.add(ft,Rt)}}else if(ht.wing==="roof"){const ut=M.zRear+.06,G=new Lt(Ih(M.wt*2+.12,.24),a);xo(G.geometry),G.position.set(0,Gs(ut)+.004,ut),G.rotation.x=.12,G.castShadow=!0,this.sprung.add(G)}for(const ut of[1,-1]){const G=M.zFront-.34,Y=Ql(G),at=new P(ut*Y,M.base+.025,G-.03),At=new P(ut*(Y+.13),M.base+.095,G+.02),ft=At.clone().sub(at),Rt=new Lt(new Wn(.014,.02,ft.length(),10),c);Rt.position.copy(at).addScaledVector(ft,.5),Rt.quaternion.setFromUnitVectors(new P(0,1,0),ft.normalize());const Qt=xo(new tr(1,20,12)),tt=new Lt(Qt,this.paint);tt.scale.set(.11,.055,.075),tt.position.copy(At).add(new P(ut*.04,.01,0));const et=new Lt(new Ks(1,20),u);et.scale.set(.095,.045,1),et.position.copy(tt.position).add(new P(0,0,-.062)),et.rotation.y=Math.PI,tt.castShadow=!0,this.sprung.add(Rt,tt,et)}const q=ht.wheelRadius/.36;for(const[ut,G]of[[ht.frontAxle,!0],[ht.rearAxle,!1]])for(const Y of[!0,!1]){const at=x_(d,g,x,m,p);at.root.position.set(Y?ht.trackHalf:-ht.trackHalf,ht.axleY,ut),at.root.scale.setScalar(q),Y||(at.root.rotation.y=Math.PI),this.wheels.push({root:at.root,spin:at.spin,front:G,left:Y}),this.group.add(at.root);const At=new Lt(new Wn(ht.archR-.004,ht.archR-.004,.3,32,1,!0,-.3,Math.PI+.6),y);At.rotation.z=Math.PI/2,At.position.set((Y?1:-1)*(ht.archX+.15),ht.axleY,ut),this.sprung.add(At)}const K=Vu(128,1.4),J=(ut,G,Y,at,At,ft=K)=>{const Rt=new Lt(new Pn(ut,G),new rn({color:0,alphaMap:ft,transparent:!0,opacity:Y,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return Rt.rotation.x=-Math.PI/2,Rt.position.y=at,Rt.renderOrder=At,Rt},Mt=Math.max(...this.spec.width.map(ut=>ut[1]))*2+.3,mt=ht.halfLen*2+.25;this.group.add(J(Mt,mt,.95,As,3,Nh(Mt,mt,.12,.14,1.2)));const Zt=Nh(.4,.7,.08,.3,1.6);for(const ut of[ht.frontAxle,ht.rearAxle])for(const G of[1,-1]){const Y=J(.4,.7,1,As,3,Zt);Y.position.set(G*ht.trackHalf,As,ut),this.group.add(Y)}this.wetShadow=J(Mt+.25,mt+1.05,.55,As,3),this.wetShadow.visible=!1,this.group.add(this.wetShadow),this.underglowMat=new rn({color:new Dt(t.underglow??10108159).multiplyScalar(.9),map:K,transparent:!0,depthWrite:!1,blending:li,fog:!1});const Tt=new Lt(new Pn(3,5.6),this.underglowMat);Tt.rotation.x=-Math.PI/2,Tt.position.y=As,Tt.material.polygonOffset=!0,Tt.material.polygonOffsetFactor=-1,Tt.renderOrder=1,this.group.add(Tt)}setWheels(t,e){for(const n of this.wheels)n.spin.rotation.x=n.left?t:-t,n.root.rotation.y=(n.left?0:Math.PI)+(n.front?e:0)}setLights(t,e){this.headlightMat.emissiveIntensity=2+6*t,this.tailMat.emissiveIntensity=(e?9:2.5)*(.5+.5*t),this.underglowMat.visible=t>.5}setRoll(t){this.sprungPivot.rotation.z=t}setPaint(t,e,n=!1){for(const s of this.paintMats){s.color.setHex(t),s.normalScale.setScalar(e);const r=n?.6:0;s.iridescence>0!=r>0&&(s.needsUpdate=!0),s.iridescence=r,n&&(s.iridescenceIOR=1.5,s.iridescenceThicknessRange=[260,480])}}setWet(t){this.wetShadow.visible=t}}const jr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const __=new ya(-1,1,1,-1,0,1);class M_ extends de{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}}const S_=new M_;class jl{constructor(t){this._mesh=new Lt(S_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,__)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class $u extends gs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=hs.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new jl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Uh extends gs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class y_ extends gs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class b_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new rt);this._width=n.width,this._height=n.height,e=new Ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $u(jr),this.copyPass.material.blending=En,this.timer=new Ru}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Uh!==void 0&&(a instanceof Uh?n=!0:a instanceof y_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class w_ extends gs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Dt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const T_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Dt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class us extends gs{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new rt(t.x,t.y):new rt(256,256),this.clearColor=new Dt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ge(r,a,{type:qe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Ge(r,a,{type:qe,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const u=new Ge(r,a,{type:qe,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=T_;this.highPassUniforms=hs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new rt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hs.clone(jr.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader,premultipliedAlpha:!0,blending:li,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Dt,this._oldClearAlpha=1,this._basic=new rn,this._fsQuad=new jl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new rt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=us.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=us.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const s=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ae({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}us.BlurDirectionX=new rt(1,0);us.BlurDirectionY=new rt(0,1);const Br={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class E_ extends gs{constructor(){super(),this.isOutputPass=!0,this.uniforms=hs.clone(Br.uniforms),this.material=new Eu({name:Br.name,uniforms:this.uniforms,vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader}),this._fsQuad=new jl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===El?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Al?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ll?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Cl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const A_={uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uTime:{value:0},uAberration:{value:.0025},uVignette:{value:.55},uGrain:{value:.012}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uSpeed;
    uniform float uTime;
    uniform float uAberration;
    uniform float uVignette;
    uniform float uGrain;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 c = vUv - 0.5;
      float dist = length(c);
      float blur = uSpeed * 0.04 * smoothstep(0.12, 0.75, dist);
      float ca = uAberration * dist + uSpeed * 0.006 * dist * dist;
      vec3 acc = vec3(0.0);
      for (int i = 0; i < 8; i++) {
        float t = float(i) / 7.0;
        vec2 uv = vUv - c * blur * t;
        acc.r += texture2D(tDiffuse, uv - c * ca).r;
        acc.g += texture2D(tDiffuse, uv).g;
        acc.b += texture2D(tDiffuse, uv + c * ca).b;
      }
      vec3 col = acc / 8.0;
      col *= mix(1.0, smoothstep(0.95, 0.2, dist), uVignette);
      col += (hash(vUv * 731.0 + fract(uTime) * 97.0) - 0.5) * uGrain;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`};class R_{composer;bloom;speed;constructor(t,e,n,s){const r=t.getDrawingBufferSize(new rt),a=new Ge(r.x,r.y,{type:qe,samples:s});this.composer=new b_(t,a),this.composer.addPass(new w_(e,n)),this.bloom=new us(new rt(r.x,r.y),.8,.6,.85),this.composer.addPass(this.bloom),this.speed=new $u(A_),this.composer.addPass(this.speed),this.composer.addPass(new E_)}applyPreset(t){this.bloom.strength=t.bloomStrength,this.bloom.radius=t.bloomRadius,this.bloom.threshold=t.bloomThreshold}setSize(t,e,n){this.composer.setPixelRatio(n),this.composer.setSize(t,e)}render(t,e){this.speed.uniforms.uTime.value=t,this.speed.uniforms.uSpeed.value=e,this.composer.render()}}const C_=`
attribute vec3 iPos;
attribute vec3 iNormal;
attribute vec3 iColor;
attribute vec2 iSize;
uniform float uLift;
varying vec2 vUv;
varying vec3 vColor;
varying float vSeed;
#include <fog_pars_vertex>
void main() {
  vec3 toCam = cameraPosition - iPos;
  vec2 d = normalize(toCam.xz + vec2(1e-4));
  vec3 fwd = vec3(d.x, 0.0, d.y);
  vec3 side = vec3(-d.y, 0.0, d.x);
  vec3 offset = side * position.x * iSize.x + fwd * position.y * iSize.y;
  // Follow the road plane: dy = -(n.x dx + n.z dz) / n.y.
  offset.y = -(iNormal.x * offset.x + iNormal.z * offset.z) / max(iNormal.y, 0.2);
  vec3 world = iPos + offset + iNormal * uLift;
  vUv = position.xy;
  vColor = iColor;
  vSeed = fract(iPos.x * 0.137 + iPos.z * 0.311);
  vec4 mvPosition = viewMatrix * vec4(world, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,P_=`
uniform float uIntensity;
uniform float uTime;
varying vec2 vUv;
varying vec3 vColor;
varying float vSeed;
#include <fog_pars_fragment>
void main() {
  // pow() with a negative base is undefined and returns NaN on D3D/ANGLE, which bloom then smears
  // across the whole frame: square explicitly and clamp interpolated UVs before pow().
  float ax = vUv.x * 5.5;
  float across = exp(-ax * ax);
  float along = pow(clamp(1.0 - vUv.y, 0.0, 1.0), 1.7) * smoothstep(0.0, 0.04, vUv.y + 0.02);
  // Ripples break the streak into shimmering bands.
  float ripple = 0.7 + 0.3 * sin(vUv.y * 70.0 + vSeed * 40.0 + uTime * 6.0) * sin(vUv.y * 23.0 - uTime * 2.3);
  vec3 col = vColor * across * along * ripple * uIntensity;
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      col *= exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      col *= 1.0 - smoothstep(fogNear, fogFar, vFogDepth);
    #endif
  #endif
  // Additive: fog fades toward black instead of mixing in the fog colour.
  gl_FragColor = vec4(col, 1.0);
}`;class L_{constructor(t=1024){this.capacity=t;const e=new Pn(1,1,1,1);e.translate(0,.5,0);const n=new Fp;n.index=e.index,n.setAttribute("position",e.getAttribute("position")),this.iPos=new Ji(new Float32Array(t*3),3),this.iNormal=new Ji(new Float32Array(t*3),3),this.iColor=new Ji(new Float32Array(t*3),3),this.iSize=new Ji(new Float32Array(t*2),2);for(const r of[this.iPos,this.iNormal,this.iColor,this.iSize])r.setUsage(jf);n.setAttribute("iPos",this.iPos),n.setAttribute("iNormal",this.iNormal),n.setAttribute("iColor",this.iColor),n.setAttribute("iSize",this.iSize),n.instanceCount=0;const s=new Ae({uniforms:{...hs.clone(St.fog),uIntensity:{value:1},uTime:{value:0},uLift:{value:.035}},vertexShader:C_,fragmentShader:P_,transparent:!0,depthWrite:!1,blending:li,fog:!0});this.mesh=new Lt(n,s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2}capacity;mesh;iPos;iNormal;iColor;iSize;staticCount=0;dynamicCount=0;write(t,e){this.iPos.setXYZ(t,e.pos.x,e.pos.y,e.pos.z),this.iNormal.setXYZ(t,e.normal.x,e.normal.y,e.normal.z),this.iColor.setXYZ(t,e.color.r,e.color.g,e.color.b),this.iSize.setXY(t,e.width,e.length)}addStatic(t){this.staticCount>=this.capacity||(this.write(this.staticCount++,t),this.flush())}setDynamic(t){this.dynamicCount=Math.min(t.length,this.capacity-this.staticCount);for(let e=0;e<this.dynamicCount;e++)this.write(this.staticCount+e,t[e]);this.flush()}flush(){this.mesh.geometry.instanceCount=this.staticCount+this.dynamicCount;for(const t of[this.iPos,this.iNormal,this.iColor,this.iSize])t.needsUpdate=!0}update(t,e){this.mesh.material.uniforms.uTime.value=t,this.mesh.material.uniforms.uIntensity.value=e,this.mesh.visible=e>.001}}const D_=`
attribute vec3 offset;
attribute float aEnd;
uniform float uTime;
uniform vec3 uCenter;
uniform vec3 uBox;
uniform vec3 uVel;
uniform float uLength;
varying float vEnd;
varying float vFade;
void main() {
  vec3 p = offset * uBox + uVel * uTime;
  p = mod(p - uCenter + uBox * 0.5, uBox) - uBox * 0.5 + uCenter;
  p -= normalize(uVel) * uLength * aEnd;
  vEnd = aEnd;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  vFade = smoothstep(1.5, 6.0, -mv.z) * (1.0 - smoothstep(uBox.x * 0.25, uBox.x * 0.5, -mv.z));
  gl_Position = projectionMatrix * mv;
}`,I_=`
uniform vec3 uColor;
uniform float uOpacity;
varying float vEnd;
varying float vFade;
void main() {
  gl_FragColor = vec4(uColor * (1.0 - vEnd) * vFade * uOpacity, 1.0);
}`;class N_{lines;constructor(t=9e3){const e=new Float32Array(t*6),n=new Float32Array(t*2);for(let a=0;a<t;a++){const o=Math.random(),l=Math.random(),c=Math.random();e.set([o,l,c,o,l,c],a*6),n[a*2+1]=1}const s=new de;s.setAttribute("position",new Wt(new Float32Array(t*6),3)),s.setAttribute("offset",new Wt(e,3)),s.setAttribute("aEnd",new Wt(n,1));const r=new Ae({uniforms:{uTime:{value:0},uCenter:{value:new P},uBox:{value:new P(60,30,60)},uVel:{value:new P(1.5,-24,.8)},uLength:{value:.9},uColor:{value:new Dt(.75,.82,1)},uOpacity:{value:.28}},vertexShader:D_,fragmentShader:I_,transparent:!0,depthWrite:!1,blending:li});this.lines=new Wd(s,r),this.lines.frustumCulled=!1,this.lines.renderOrder=5}update(t,e){const n=this.lines.material.uniforms;n.uTime.value=t,n.uCenter.value.copy(e.position)}}const ta=9.81,Rs=1/120,Se=(i,t,e)=>i<t?t:i>e?e:i,ns=(i,t,e)=>i+(t-i)*e,vo=(i,t,e)=>{const n=Se((e-i)/(t-i),0,1);return n*n*(3-2*n)},is=i=>(i=(i+Math.PI)%(Math.PI*2),i<0&&(i+=Math.PI*2),i-Math.PI),si=(i,t,e)=>{let n=(t-i)%e;return n>e/2&&(n-=e),n<-e/2&&(n+=e),n},Vs={mass:1400,inertiaZ:2600,topSpeed:76,accelCurve:[[0,9],[20,8],[40,5],[60,2.2],[80,0]],brakeDecel:12,dragK:.0014,rollK:.25,gripFront:1.32,gripRear:1.42,slipPeakFront:.12,slipPeakRear:.09,driftGripRear:.62,driftSlipPeakRear:.5,maxSteer:.55,steerSpeedRef:35,steerRate:4,handbrakeYawKick:3.5,nitroAccel:5.5,nitroCapacity:2,gearRatios:[3.2,2.1,1.5,1.15,.92,.78],shiftTime:.25},zr=(i,t,e,n)=>i.map(([s,r])=>[s,r*(s<20?t:s<=50?e:n)]);function U_(i,t){const e={...Vs,accelCurve:Vs.accelCurve.map(([n,s])=>[n,s]),gearRatios:[...Vs.gearRatios],cgToFront:i.frontAxle,cgToRear:-i.rearAxle,halfLength:i.halfLen,halfWidth:i.trackHalf+.12,wheelRadius:i.wheelRadius};switch(t){case"wedge":e.topSpeed+=4,e.accelCurve=zr(e.accelCurve,1,1,1.15),e.gripFront+=.05,e.driftGripRear-=.05;break;case"muscle":e.topSpeed-=2,e.accelCurve=zr(e.accelCurve,1.2,1,1),e.gripRear-=.07,e.driftSlipPeakRear=.6,e.handbrakeYawKick=4.5;break;case"gt":e.gripFront+=.03,e.gripRear+=.03,e.steerRate=3.4,e.dragK*=.95,e.accelCurve=zr(e.accelCurve,1,.95,1);break;case"hatch":e.topSpeed-=6,e.accelCurve=zr(e.accelCurve,1.25,1,1),e.maxSteer*=1.15,e.driftGripRear+=.05;break}return e}const Ea=()=>({steer:0,throttle:0,brake:0,handbrake:!1,nitro:!1}),Fh=(i,t,e)=>e*Math.tanh(1.6*i/t);class F_{constructor(t,e){this.params=t,this.track=e}params;track;pos=new rt;vel=new rt;yaw=0;yawRate=0;steer=0;drifting=!1;driftTime=0;nitro=.35;nitroOn=!1;gear=1;rpm01=0;shiftTimer=0;wheelRoll=0;trackIndex=-1;trackS=0;lateral=0;height=0;offRoad=0;contactTimer=99;slipstream=0;applied=Ea();slipRear=0;lastBarrier=null;wallTouch=!1;throttleCut=0;prev={x:0,z:0,yaw:0,wheelRoll:0,steer:0};curr={x:0,z:0,yaw:0,wheelRoll:0,steer:0};kickTimer=0;kickDir=0;powerSlideTime=0;gripTime=0;brakeHold=0;get speed(){return this.vel.length()}get vFwd(){return this.vel.x*Math.sin(this.yaw)+this.vel.y*Math.cos(this.yaw)}place(t,e,n){const s=this.track.frameAt(t,{s:0,pos:new P,tangent:new P,right:new P,up:new P,curvature:0});this.pos.set(s.pos.x+s.right.x*e,s.pos.z+s.right.z*e),this.yaw=Math.atan2(s.tangent.x,s.tangent.z),this.vel.set(Math.sin(this.yaw)*n,Math.cos(this.yaw)*n),this.yawRate=0,this.steer=0,this.drifting=!1,this.trackIndex=-1,this.project(),this.snapshot(),this.snapshot()}snapshot(){Object.assign(this.prev,this.curr),this.curr.x=this.pos.x,this.curr.z=this.pos.y,this.curr.yaw=this.yaw,this.curr.wheelRoll=this.wheelRoll,this.curr.steer=this.steer}q3=new P;project(){const t=this.track.queryTrack(this.q3.set(this.pos.x,0,this.pos.y),this.trackIndex);this.trackIndex=t.index,this.trackS=t.s,this.lateral=t.lateral,this.height=t.height}step(t,e){const n=this.params,s=Math.sin(this.yaw),r=Math.cos(this.yaw),a=s,o=r,l=-r,c=s;let h=this.vel.x*a+this.vel.y*o,f=this.vel.x*l+this.vel.y*c;const u=Math.abs(h),d=n.cgToFront+n.cgToRear;let g=Se(e.throttle,0,1);const x=Se(e.brake,0,1);this.throttleCut>0&&(this.throttleCut-=t,g=0),Object.assign(this.applied,e,{throttle:g});const p=n.maxSteer/(1+(u/n.steerSpeedRef)**2),m=Se(e.steer,-1,1)*p;this.steer+=Se(m-this.steer,-n.steerRate*t,n.steerRate*t);const y=Math.max(u,3),E=Math.atan2(f+this.yawRate*n.cgToRear,y);this.slipRear=E;const S=this.drifting?this.steer+.6*Se(E,-p,p):this.steer,b=Math.atan2(f-this.yawRate*n.cgToFront,y)-S;this.updateDrift(t,e,g,x,h,E);const M=Math.abs(this.lateral),A=M<=Ye?1:M<=Jr?.9:.78;this.offRoad=M<=Ye?0:1;const v=n.gripFront*A;let T=(this.drifting?n.driftGripRear*(1+.25*(1-g)):1)*n.gripRear*A;e.handbrake&&u>2&&(T*=.55);const C=this.drifting?n.driftSlipPeakRear:n.slipPeakRear,D=n.mass*ta*n.cgToRear/d,U=n.mass*ta*n.cgToFront/d,O=-D*Fh(b,n.slipPeakFront,v);let I=-U*Fh(E,C,T);this.updateGearbox(t,g,x,u);const N=h>-.5;let V=0;N&&h<n.topSpeed&&(V=g*Zu(n.accelCurve,u)*this.gearFactor()),this.drifting&&(V*=1.05),this.nitroOn=e.nitro&&g>.5&&N&&(this.nitroOn?this.nitro>0:this.nitro>.15);const z=this.nitroOn?n.nitroAccel:0;this.nitroOn&&(this.nitro=Math.max(0,this.nitro-t/n.nitroCapacity));let Z=0,q=0;x>0&&(h>.5?Z=x*n.brakeDecel:h>-8&&(q=-4*x)),!N&&g>0&&x===0&&(Z=g*n.brakeDecel*.6);const K=e.handbrake&&Math.abs(h)>.5?5:0,J=this.track.samples[Math.max(0,this.trackIndex)].tangent,Mt=Math.sign(a*J.x+o*J.z)||1,mt=-ta*J.y*Mt,Zt=n.dragK*(1-.35*this.slipstream)*(this.drifting?.85:1)*h*h+n.rollK,Tt=Math.sign(h),ut=V+z+q-(Z+K)*Tt-Zt*Tt*(u>.2?1:0)+mt,G=n.mass*ut;if(g>.7||x>.7){const et=G/(U*Math.max(T,.3))/(1+Math.max(0,u-20)/15);I*=Math.sqrt(Math.max(0,1-et*et*.5))}const Y=Math.cos(S),at=Math.sin(S),At=G-O*at,ft=O*Y+I;this.vel.x+=(At*a+ft*l)/n.mass*t,this.vel.y+=(At*o+ft*c)/n.mass*t;let Rt=(-n.cgToFront*O*Y+n.cgToRear*I)/n.inertiaZ;this.kickTimer>0&&(this.kickTimer-=t,Rt+=this.kickDir*n.handbrakeYawKick);const Qt=Math.atan2(f,Math.max(Math.abs(h),.1));u>5&&Math.abs(Qt)>.75&&(Rt-=Math.sign(Qt)*8*(Math.abs(Qt)-.75)),this.yawRate+=Rt*t,this.yawRate*=1-.6*t,h=this.vel.x*a+this.vel.y*o,f=this.vel.x*l+this.vel.y*c;const tt=vo(1,4,Math.abs(h));if(tt<1){const et=-h*Math.tan(this.steer)/d;this.yawRate=ns(et,this.yawRate,tt),f*=ns(.8,1,tt),this.vel.set(a*h+l*f,o*h+c*f)}this.yaw=is(this.yaw+this.yawRate*t),this.pos.x+=this.vel.x*t,this.pos.y+=this.vel.y*t,this.project(),this.collideBarriers(),this.drifting?(this.driftTime+=t,this.nitro=Math.min(1,this.nitro+t*.12*(Math.abs(E)>.3?1.5:1))):this.driftTime=0,this.nitro=Math.min(1,this.nitro+t*.1*this.slipstream),this.wheelRoll+=h*t/n.wheelRadius,this.contactTimer+=t,this.snapshot()}updateDrift(t,e,n,s,r,a){const o=this.params;if(!this.drifting){e.handbrake&&Math.abs(e.steer)>.3&&r>8&&(this.drifting=!0,this.kickTimer=.25,this.kickDir=-Math.sign(e.steer)),this.powerSlideTime=Math.abs(a)>1.5*o.slipPeakRear&&n>.8&&r<25?this.powerSlideTime+t:0,this.powerSlideTime>.15&&(this.drifting=!0),this.drifting&&(this.gripTime=0);return}this.gripTime=Math.abs(a)<.08?this.gripTime+t:0,this.brakeHold=s>.8?this.brakeHold+t:0,(this.gripTime>.3||r<6||this.brakeHold>.4)&&(this.drifting=!1)}updateGearbox(t,e,n,s){const r=this.params,a=r.gearRatios,o=a.length,l=c=>r.topSpeed*a[o-1]/a[c-1]/.97;if(this.rpm01=Se(s/l(this.gear),.12,1.08),this.shiftTimer>0){this.shiftTimer-=t;return}this.rpm01>.93&&e>.2&&this.gear<o?(this.gear++,this.shiftTimer=r.shiftTime):this.gear>1&&(this.rpm01<.42||n>.3&&this.rpm01<.5)&&(this.gear--,this.shiftTimer=r.shiftTime*.6)}gearFactor(){if(this.shiftTimer>0)return 0;const t=this.rpm01;return .75+.3*vo(.25,.8,t)-.4*vo(.95,1.05,t)}collideBarriers(){const t=this.params,e=this.track.samples[this.trackIndex],n=Bu-.32,s=Math.sin(this.yaw),r=Math.cos(this.yaw),a=e.right.x,o=e.right.z;let l=0,c=0;for(const[p,m]of[[1,1],[1,-1],[-1,1],[-1,-1]]){const y=s*t.halfLength*p+-r*t.halfWidth*m,E=r*t.halfLength*p+s*t.halfWidth*m,S=this.lateral+y*a+E*o,b=Math.abs(S)-n;b>l&&(l=b,c=Math.sign(S))}if(this.lastBarrier=null,this.wallTouch=l>0,l<=0)return;this.pos.x-=a*c*l,this.pos.y-=o*c*l,this.lateral-=c*l;const h=(this.vel.x*a+this.vel.y*o)*c,f=e.tangent.x,u=e.tangent.z,d=Math.hypot(f,u)||1,g=Math.min(1,Math.abs(s*u-r*f)/d);h>0&&(this.vel.x-=a*c*h*1.15,this.vel.y-=o*c*h*1.15,h>.5&&(this.vel.multiplyScalar(1-.35*Math.min(1,g)),this.lastBarrier={speed:h,angle:g}));let x=is(this.yaw-Math.atan2(f,u));Math.abs(x)>Math.PI/2&&(x=is(x-Math.PI)),this.yawRate=ns(this.yawRate,-x*3,.15),this.drifting=!1}}function Zu(i,t){if(t<=i[0][0])return i[0][1];for(let e=1;e<i.length;e++)if(t<=i[e][0]){const[n,s]=i[e-1],[r,a]=i[e];return s+(a-s)*(t-n)/(r-n)}return i[i.length-1][1]}class O_{constructor(t,e=1.25,n=10){this.track=t;const s=t.samples,r=Math.floor(s.length/2);this.n=r,this.s=new Float32Array(r),this.e=new Float32Array(r),this.kappa=new Float32Array(r),this.vRef=new Float32Array(r),this.cx=new Float32Array(r),this.cz=new Float32Array(r),this.rx=new Float32Array(r),this.rz=new Float32Array(r);for(let g=0;g<r;g++){const x=s[g*2];this.s[g]=x.s,this.cx[g]=x.pos.x,this.cz[g]=x.pos.z;const p=Math.hypot(x.right.x,x.right.z)||1;this.rx[g]=x.right.x/p,this.rz[g]=x.right.z/p}const a=g=>this.cx[g]+this.rx[g]*this.e[g],o=g=>this.cz[g]+this.rz[g]*this.e[g];for(let g=0;g<400;g++)for(let x=0;x<r;x++){const p=(x-1+r)%r,m=(x+1)%r,y=(a(p)+a(m))/2-a(x),E=(o(p)+o(m))/2-o(x);this.e[x]=Se(this.e[x]+.6*(y*this.rx[x]+E*this.rz[x]),-this.corridor,this.corridor)}const l=new Float32Array(r);for(let g=0;g<r;g++){const x=(g-2+r)%r,p=(g+2)%r,m=a(g)-a(x),y=o(g)-o(x),E=a(p)-a(g),S=o(p)-o(g),b=m*S-y*E,M=Math.hypot(m,y),A=Math.hypot(E,S),v=Math.hypot(a(p)-a(x),o(p)-o(x));l[g]=-2*b/Math.max(M*A*v,1e-6)}for(let g=0;g<r;g++){let x=0;for(let p=-2;p<=2;p++)x+=l[(g+p+r)%r];this.kappa[g]=x/5}const c=Vs.topSpeed;for(let g=0;g<r;g++)this.vRef[g]=Math.min(c,Math.sqrt(e*ta/Math.max(Math.abs(this.kappa[g]),1e-4)));const h=g=>{const x=this.s[(g+1)%r]-this.s[g];return x>0?x:x+t.length};for(let g=0;g<2;g++)for(let x=r-1;x>=0;x--){const p=x,m=(p+1)%r;this.vRef[p]=Math.min(this.vRef[p],Math.sqrt(this.vRef[m]**2+2*n*h(p)))}for(let g=0;g<2;g++)for(let x=0;x<r;x++){const p=(x-1+r)%r,m=this.vRef[p];this.vRef[x]=Math.min(this.vRef[x],Math.sqrt(m*m+2*Zu(Vs.accelCurve,m)*h(p)))}let f=0;for(let g=0;g<r;g++)f+=h(g)/Math.max(1,(this.vRef[g]+this.vRef[(g+1)%r])/2);this.refLapTime=f;const u=g=>Math.abs(this.kappa[g])>1/180;let d=0;for(;d<r&&u(d);)d++;for(let g=0;g<r;g++){const x=(d+g)%r;if(!u(x)||u((x-1+r)%r))continue;let p=x,m=x;for(;u(p%r)&&p-x<r;)Math.abs(this.kappa[p%r])>Math.abs(this.kappa[m%r])&&(m=p),p++;let y=m%r;for(let E=0;E<r/2;E++){const S=(y-1+r)%r;if(this.vRef[S]<=this.vRef[y]+.05)break;y=S}this.corners.push({entry:x,apex:m%r,exit:(p-1)%r,brake:y,radiusMin:1/Math.abs(this.kappa[m%r]),dir:Math.sign(this.kappa[m%r])})}}track;n;s;e;kappa;vRef;corners=[];refLapTime;corridor=Ye-1.2;cx;cz;rx;rz;posAt(t,e,n){const s=(Math.round(t)%this.n+this.n)%this.n;return n.set(this.cx[s]+this.rx[s]*e,this.cz[s]+this.rz[s]*e)}nodeAt(t,e=-1){const n=this.n,s=this.track.length;t=(t%s+s)%s;let r=e>=0?e:Math.floor(t/s*n);const a=o=>{const l=Math.abs(this.s[(o+n)%n]-t);return Math.min(l,s-l)};for(let o=0;o<n;o++){const l=a(r);if(a(r+1)<l)r++;else if(a(r-1)<l)r--;else break}return(r%n+n)%n}span(t,e){const n=this.s[(e%this.n+this.n)%this.n]-this.s[(t%this.n+this.n)%this.n];return n>=0?n:n+this.track.length}}function xl(i,t){const e=()=>1+(t()*2-1)*.04;return{level:i,paceFrac:Math.min(.995,(.8+.19*i)*(1+(t()*2-1)*.008)),brakeFrac:(.82+.16*i)*e(),lineNoise:(1.6-1.3*i)*e(),reaction:(.35-.25*i)*e(),throttleSmooth:(.5-.35*i)*e(),mistakeRate:Math.max(.03,(.22-.17*i)*e()),severity:(.9-.6*i)*e(),nitroIQ:Math.min(1,(.3+.7*i)*e())}}const B_=10;class vl{constructor(t,e,n,s){this.skill=t,this.line=e,this.trackLength=n,this.rng=s,this.noisePhase=s()*100}skill;line;trackLength;rng;mistakes=0;dbg={vT:0,eTrack:0,throttle:0,brake:0};get debug(){const t=this.dbg;return`vT ${t.vT.toFixed(1)} rec ${this.recovering} rev ${this.reversing} eTrack ${t.eTrack.toFixed(2)} thr ${t.throttle.toFixed(2)} brk ${t.brake.toFixed(2)}`}node=-1;ctrl=Ea();noisePhase;latOffset=0;overtakeLat=null;overtakeTimer=0;followTimer=0;mistake=null;rolledLap=new Map;lapCount=0;lastS=0;stuckTimer=0;reverseTimer=0;recovering=!1;recoverTime=0;wantsReset=!1;pinned=0;turnDir=0;wrongWay=0;reversing=!1;nitroCheck=0;nitroHold=!1;tmp=new rt;cruise=0;tan2=new rt;trackTangent(t){const e=this.line.nodeAt(t.trackS,this.node),n=this.line.posAt(e,0,this.tmp),s=n.x,r=n.y,a=this.line.posAt(e+1,0,this.tmp);return this.tan2.set(a.x-s,a.y-r).normalize()}afterReset(){this.wantsReset=!1,this.recovering=!1,this.reversing=!1,this.mistake=null,this.overtakeLat=null,this.latOffset=0,this.wrongWay=0,this.stuckTimer=0}recoveryTurn(t,e){return Math.abs(t)<1.5&&(this.turnDir=0),this.turnDir===0&&(this.turnDir=Math.abs(t)<2.6?Math.sign(t||1):e.lateral>0?1:-1),this.turnDir}update(t,e,n){const s=this.line,r=s.n,a=this.trackLength,o=this.skill,l=e.params,c=Math.max(0,e.vFwd),h=this.node=s.nodeAt(e.trackS,this.node);e.trackS<this.lastS-a/2&&this.lapCount++,this.lastS=e.trackS;const f=!n.some(L=>Math.abs(si(e.trackS,L.trackS,a))<6&&Math.abs(L.lateral-e.lateral)<3);!this.mistake&&this.cruise===0&&s.corners.forEach((L,Xt)=>{const Vt=s.span(h,L.brake);if(Vt>35&&Vt<45&&this.rolledLap.get(Xt)!==this.lapCount&&(this.rolledLap.set(Xt,this.lapCount),f&&this.rng()<o.mistakeRate)){const R=this.rng(),_=R<.35?"late":R<.6?"apex":R<.85?"slide":"exit";this.mistake={kind:_,m:o.severity*(.5+.5*this.rng()),corner:Xt,timer:0,phase:0},this.mistakes++}});const u=this.mistake,d=u?s.corners[u.corner]:null,g=d?s.span(d.brake,h)>s.span(d.brake,d.apex):!1;let x=1,p=1,m=0,y=1,E=!1;if(u&&d){const L=-d.dir,Xt=s.span(d.brake,h)<s.span(d.brake,d.exit)+30;switch(u.kind){case"late":g?(u.phase===0&&(u.phase=1,u.timer=.8),y=.4):(p=1+.35*u.m,x=1+.1*u.m,m=L*1.5*u.m);break;case"apex":m=L*2*u.m;break;case"slide":g&&u.phase===0&&(u.phase=1,u.timer=.25+.3*u.m),u.phase===1&&u.timer>0&&(E=!0);break;case"exit":g&&u.phase===0&&(u.phase=1,u.timer=.6+.8*u.m),u.phase===1&&u.timer>0&&(y=.45);break}u.phase===1&&(u.timer-=t),(u.phase===1&&u.timer<=0||!Xt)&&(this.mistake=null)}const S=this.cruise>0?this.cruise:o.paceFrac*x,b=B_*o.brakeFrac*p;let M=1/0;const A=Math.ceil(70/(a/r));for(let L=0;L<=A;L++){const Xt=(h+L)%r,Vt=s.span(h,Xt);M=Math.min(M,Math.sqrt(s.vRef[Xt]**2+2*b*Vt))}M*=S;let v=s.e[(h+3)%r]+m+Math.sin(this.noisePhase+e.trackS*.013)*o.lineNoise*.5,T=1/0,C=null,D=null;const U=l.halfWidth;for(const L of n){const Xt=si(e.trackS,L.trackS,a),Vt=L.lateral-e.lateral,R=l.halfLength+L.params.halfLength,_=U+L.params.halfWidth+.6;if(Xt>0&&Xt<40&&Math.abs(Vt)<_){const k=Xt-R,H=Math.max(0,L.vFwd),Q=Math.max(H-3,H+(k-4)/.6);Q<T&&(T=Q,C=L)}if(Math.abs(Xt)<R+1&&Math.abs(Vt)<_+.4){const k=-Math.sign(Vt||1),H=L.lateral+k*(_+.4);Math.abs(H)<=s.corridor+.8?D=H:y=Math.min(y,.5)}}const O=s.corners.find(L=>s.span(h,L.brake)<80);if(C&&M>C.vFwd+1.5?this.followTimer+=t:this.followTimer=Math.max(0,this.followTimer-t),C&&this.overtakeLat===null&&this.followTimer>1.5){const L=[C.lateral-3.2,C.lateral+3.2].filter(_=>Math.abs(_)<=s.corridor),Xt=_=>n.every(k=>{const H=si(e.trackS,k.trackS,a);return H<-8||H>25||Math.abs(k.lateral-_)>2.6}),Vt=O?-O.dir:0,R=L.filter(Xt).sort((_,k)=>Vt?Math.sign(k)*Vt-Math.sign(_)*Vt:Math.abs(_)-Math.abs(k))[0];R!==void 0&&(this.overtakeLat=R,this.overtakeTimer=4)}if(this.overtakeLat!==null){this.overtakeTimer-=t;const L=C!==null&&si(e.trackS,C.trackS,a)>l.halfLength,Xt=O!==void 0&&s.span(h,O.brake)<10;(this.overtakeTimer<=0||Xt&&L)&&(this.overtakeLat=null)}if(this.overtakeLat!==null&&(v=this.overtakeLat,C&&Math.abs(C.lateral-e.lateral)>U+C.params.halfWidth+.3&&(T=1/0)),D!==null&&(v=D),e.contactTimer<1){y=Math.min(y,.6);let L=null,Xt=1/0;for(const Vt of n){const R=Math.hypot(Vt.pos.x-e.pos.x,Vt.pos.y-e.pos.y);R<Xt&&(Xt=R,L=Vt)}L&&Xt<6&&(v-=Math.sign(L.lateral-e.lateral||1)*1)}v=Se(v,-s.corridor,s.corridor);const I=s.e[(h+3)%r];this.latOffset+=Se(v-I-this.latOffset,-3*t,3*t);const N=L=>Se(s.e[(L%r+r)%r]+this.latOffset,-s.corridor,s.corridor);M=Math.min(M,T);const V=a/r,z=(h+Math.max(1,Math.round(.15*c/V)))%r,Z=s.posAt(z,N(z),this.tmp),q=Z.x,K=Z.y,J=s.posAt(z+2,N(z+2),this.tmp),Mt=Math.atan2(J.x-q,J.y-K),mt=-Math.cos(Mt),Zt=Math.sin(Mt),Tt=(e.pos.x-q)*mt+(e.pos.y-K)*Zt,ut=e.speed>4?Math.atan2(e.vel.x,e.vel.y):e.yaw,G=is(ut-Mt),Y=l.cgToFront+l.cgToRear,at=s.kappa[(h+Math.round(.35*c/V))%r];let At=-Math.atan(Y*at)+.6*G+Math.atan(-1*Tt/(c+4))+.05*(e.yawRate+c*at);const ft=Math.atan(Y*1.3*9.81/Math.max(c*c,1))+l.slipPeakFront;At=Se(At,-ft,ft);const Rt=l.maxSteer/(1+(c/l.steerSpeedRef)**2);let Qt=Se(At/Rt,-1,1);M=Math.max(0,M);const tt=M-c;let et=Se(tt/4,0,1),ot=tt<-1&&e.vFwd>.5?Se(-tt/6,0,1):0;et=Math.min(et,y);const lt=Math.abs(is(e.yaw-ut));if(e.speed>8&&lt>.12&&(et*=Se(1-(lt-.12)*4,.2,1)),E&&(et=1,Qt=Se(Qt-.25*(d?.dir??0),-1,1)),this.nitroCheck-=t,this.nitroCheck<=0){this.nitroCheck=.5;const L=!O||s.span(h,O.brake)>120,Xt=Math.abs(s.kappa[h])>Math.abs(s.kappa[(h+5)%r])&&et>.9,Vt=this.rng()<.2*(1-o.nitroIQ);this.nitroHold=this.cruise===0&&e.nitro>.3&&((L||Xt)&&this.rng()<o.nitroIQ||Vt)}O&&s.span(h,O.brake)<30&&(this.nitroHold=!1);const dt=this.trackTangent(e),Ot=is(e.yaw-Math.atan2(dt.x,dt.y));if(this.stuckTimer=c<1&&et>.5?this.stuckTimer+t:0,this.wrongWay=Math.abs(Ot)>1.6?this.wrongWay+t:0,!this.recovering&&(Math.abs(Ot)>1.3&&e.speed<12||this.stuckTimer>1.5||this.wrongWay>.5)&&(this.recovering=!0,this.recoverTime=0,this.reverseTimer=0,this.stuckTimer=0,this.turnDir=0),this.recovering)if(this.recoverTime+=t,this.recoverTime>4&&(this.wantsReset=!0),Math.abs(Ot)<.35&&e.vFwd>2)this.recovering=!1;else if(e.vFwd>9)et=0,ot=1,Qt=this.recoveryTurn(Ot,e);else{this.reverseTimer-=t,this.pinned=!this.reversing&&Math.abs(e.vFwd)<.5?this.pinned+t:0,(this.reverseTimer<=0||this.pinned>1)&&(this.reversing=!this.reversing,this.reverseTimer=this.reversing?1.4:2.2,this.pinned=0);const L=this.recoveryTurn(Ot,e);Qt=this.reversing?-L:L,et=this.reversing?0:e.vFwd<4?.55:0,ot=this.reversing?1:0}const Gt=1-Math.exp(-t/Math.max(.03,o.reaction*.35)),Yt=1-Math.exp(-t/Math.max(.03,o.throttleSmooth*.5)),Bt=this.ctrl;return Bt.steer=ns(Bt.steer,Qt,this.recovering?.3:Gt),Bt.throttle=this.recovering?et:ns(Bt.throttle,et,Yt),Bt.brake=ot>0?this.recovering?ot:ns(Bt.brake,ot,.5):0,Bt.brake>.3&&(Bt.throttle=Math.min(Bt.throttle,.3)),Bt.nitro=this.nitroHold,Bt.handbrake=!1,this.dbg.vT=M,this.dbg.eTrack=Ot,this.dbg.throttle=et,this.dbg.brake=ot,Bt}}const Oh=i=>{const t=Math.sin(i.yaw),e=Math.cos(i.yaw);return{cx:i.pos.x,cz:i.pos.y,fx:t,fz:e,rx:-e,rz:t,hl:i.params.halfLength,hw:i.params.halfWidth}},Bh=(i,t,e)=>Math.abs(i.fx*t+i.fz*e)*i.hl+Math.abs(i.rx*t+i.rz*e)*i.hw;function z_(i){const t=[];for(let e=0;e<i.length;e++)for(let n=e+1;n<i.length;n++){const s=i[e],r=i[n],a=r.pos.x-s.pos.x,o=r.pos.y-s.pos.y;if(a*a+o*o>64)continue;const l=Oh(s),c=Oh(r);let h=1/0,f=0,u=0;for(const[y,E]of[[l.fx,l.fz],[l.rx,l.rz],[c.fx,c.fz],[c.rx,c.rz]]){const S=a*y+o*E,b=Bh(l,y,E)+Bh(c,y,E)-Math.abs(S);if(b<=0){h=0;break}if(b<h){h=b;const M=Math.sign(S)||1;f=y*M,u=E*M}}if(h<=0||h===1/0)continue;const d=h*.6*.5;s.pos.x-=f*d,s.pos.y-=u*d,r.pos.x+=f*d,r.pos.y+=u*d;const g=r.vel.x-s.vel.x,x=r.vel.y-s.vel.y,p=g*f+x*u,m=Math.max(0,-p);if(p<0){const y=-1.05*p/2;s.vel.x-=f*y,s.vel.y-=u*y,r.vel.x+=f*y,r.vel.y+=u*y;const E=-u,S=f,b=g*E+x*S,M=Math.max(-.25*y,Math.min(.25*y,-b/2));s.vel.x-=E*M,s.vel.y-=S*M,r.vel.x+=E*M,r.vel.y+=S*M;const A=(s.pos.x+r.pos.x)/2,v=(s.pos.y+r.pos.y)/2,T=(D,U)=>{const O=A-D.pos.x,I=v-D.pos.y,N=(f*y+E*M)*U*D.params.mass,V=(u*y+S*M)*U*D.params.mass;D.yawRate+=(I*N-O*V)/D.params.inertiaZ*.5};T(s,-1),T(r,1);const C=Math.min(2,.08*m);for(const D of[s,r]){const U=D.vel.length();U>.1&&D.vel.multiplyScalar(Math.max(0,U-C)/U)}}s.contactTimer=0,r.contactTimer=0,t.push({a:s,b:r,x:(s.pos.x+r.pos.x)/2,z:(s.pos.y+r.pos.y)/2,closingSpeed:m})}return t}const _o=10,k_=45;class Ku{constructor(t,e,n,s,r){this.track=t,this.line=e,this.laps=s;const a=t.length;this.gateS=Array.from({length:_o},(l,c)=>c*a/_o);const o=[...n].sort((l,c)=>(l.isPlayer?1:0)-(c.isPlayer?1:0)||(c.skill??0)-(l.skill??0));this.racers=o.map((l,c)=>{const h=new F_(U_(l.spec,l.body),t),f=Math.floor(c/2);h.place(a-8-f*8-c%2*3.5,c%2===0?-2.3:2.3,0);const u=l.isPlayer?null:new vl(xl(l.skill??.5,r),e,a,r);return{entry:l,vehicle:h,ai:u,lap:0,nextGate:0,lapStart:0,lapTimes:[],bestLap:1/0,progress:0,finished:!1,finishTime:1/0,dnf:!1,position:c+1}}),this.updateProgress()}track;line;laps;phase="countdown";t=-3;racers;order=[];leaderFinishT=1/0;contacts=[];impacts=[];scrape=new Map;frameSteps=0;alpha=0;acc=0;maxSteps=8;ghostPlayer=!1;gateS;finishWait=0;get player(){return this.racers.find(t=>t.entry.isPlayer)}update(t,e){if(this.phase==="results")return;this.acc+=Math.min(t,.1*(this.maxSteps/8));let n=0;for(this.contacts=[],this.impacts=[],this.scrape.clear(),this.frameSteps=0;this.acc>=Rs&&n<this.maxSteps;)this.step(Rs,e),this.acc-=Rs,n++;if(n===this.maxSteps&&(this.acc=0),this.frameSteps>0)for(const[s,r]of this.scrape)this.scrape.set(s,r/this.frameSteps);this.alpha=this.acc/Rs,this.phase==="finishing"&&(this.finishWait+=t,this.finishWait>3&&this.fastForward())}idle=Ea();step(t,e){if(this.t+=t,this.phase==="countdown")if(this.t>=0){this.phase="racing";for(const a of this.racers)a.lapStart=0}else return;const n=this.racers.map(a=>a.vehicle),s=this.ghostPlayer?this.racers.filter(a=>!a.entry.isPlayer).map(a=>a.vehicle):n;for(const a of this.racers){const o=s.filter(f=>f!==a.vehicle);let l;a.ai?l=a.ai.update(t,a.vehicle,o):l=a.finished?this.idle:e,a.ai?.wantsReset&&(this.respawn(a),a.ai.afterReset()),a.vehicle.slipstream=this.slipstreamFor(a.vehicle,n);const c=a.vehicle.trackS;a.vehicle.step(t,l),this.gates(a,c,a.vehicle.trackS);const h=a.vehicle.lastBarrier;h&&h.speed>2&&this.impacts.push({x:a.vehicle.pos.x,z:a.vehicle.pos.y,strength:Math.min(1,h.speed/15),player:a.entry.isPlayer}),a.vehicle.wallTouch&&this.scrape.set(a,(this.scrape.get(a)??0)+1)}const r=z_(s);this.contacts.push(...r);for(const a of r)a.closingSpeed>1&&this.impacts.push({x:a.x,z:a.z,strength:Math.min(1,a.closingSpeed/12),player:a.a===this.player.vehicle||a.b===this.player.vehicle});this.frameSteps++,this.updateProgress(),this.checkEnd()}respawn(t){const e=this.track.length;let n=t.vehicle.trackS;for(let r=0;r<20&&this.racers.some(o=>o!==t&&Math.abs(si(n,o.vehicle.trackS,e))<8);r++)n=(n-6+e)%e;const s=this.line.nodeAt(n);t.vehicle.place(n,this.line.e[s],10)}slipstreamFor(t,e){let n=0;const s=Math.sin(t.yaw),r=Math.cos(t.yaw);for(const a of e){if(a===t)continue;const o=a.pos.x-t.pos.x,l=a.pos.y-t.pos.y,c=o*s+l*r,h=-o*r+l*s;c>4&&c<22&&Math.abs(h)<1.6&&(n=Math.max(n,1-c/22))}return t.speed>15?n:0}gates(t,e,n){const s=this.track.length,r=si(e,n,s);if(Math.abs(r)>30)return;const a=this.gateS[t.nextGate];if(r>0&&si(e,a,s)>0&&si(n,a,s)<=0){if(t.nextGate===0){if(t.lap>=1){const l=this.t-t.lapStart;t.lapTimes.push(l),t.bestLap=Math.min(t.bestLap,l)}t.lap++,t.lapStart=this.t,t.lap>this.laps&&!t.finished&&(t.finished=!0,t.finishTime=this.t,this.leaderFinishT=Math.min(this.leaderFinishT,this.t),t.entry.isPlayer?(t.ai=new vl(xl(.5,()=>.5),this.line,s,()=>.99),t.ai.cruise=.6,this.phase="finishing"):t.ai&&(t.ai.cruise=.6))}t.nextGate=(t.nextGate+1)%_o}}updateProgress(){const t=this.track.length;for(const e of this.racers){const n=e.vehicle.trackS,s=e.nextGate===0&&n>t/2?n-t:n;e.progress=e.finished?1e9-e.finishTime:(Math.max(e.lap,1)-1)*t+s}this.order=[...this.racers].sort((e,n)=>n.progress-e.progress),this.order.forEach((e,n)=>e.position=n+1)}checkEnd(){const t=this.racers.every(e=>e.finished||e.dnf);if(this.t>this.leaderFinishT+k_)for(const e of this.racers)e.finished||(e.dnf=!0);(t||this.racers.every(e=>e.finished||e.dnf))&&(this.phase="results")}fastForward(){let t=0;for(;this.phase!=="results"&&t++<14400;)this.step(Rs,this.idle);if(this.phase!=="results"){for(const e of this.racers)e.finished||(e.dnf=!0);this.phase="results"}}gapTo(t,e){return(e.progress-t.progress)/Math.max(10,e.vehicle.speed)}}class G_{constructor(t){this.root=t,window.addEventListener("keydown",e=>{this.keys.add(e.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault()}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),matchMedia("(pointer: coarse)").matches&&this.buildTouch()}root;ctrl=Ea();resetRequested=!1;keys=new Set;touchSteer=null;touchSteerId=-1;touchSteerX=0;touchButtons=new Map;resetHold=0;down(...t){return t.some(e=>this.keys.has(e)||[...this.touchButtons.values()].includes(e))}update(t){const e=this.ctrl,n=this.down("KeyA","ArrowLeft"),s=this.down("KeyD","ArrowRight");if(this.touchSteer!==null)e.steer=this.touchSteer;else{const r=(s?1:0)-(n?1:0),a=r===0||Math.sign(r)!==Math.sign(e.steer)?1/.1:1/.18;e.steer+=Se(r-e.steer,-a*t,a*t)}return e.throttle=this.down("KeyW","ArrowUp","touch-throttle")?1:0,e.brake=this.down("KeyS","ArrowDown","touch-brake")?1:0,e.handbrake=this.down("Space","touch-handbrake"),e.nitro=this.down("ShiftLeft","ShiftRight","touch-nitro"),this.resetHold=this.down("KeyR")?this.resetHold+t:0,this.resetHold>.5&&(this.resetRequested=!0,this.resetHold=-10),e}buildTouch(){const t=document.createElement("div");t.className="touch",t.innerHTML=`
      <div class="t-steer"><div class="t-knob"></div></div>
      <div class="t-btn t-throttle" data-code="touch-throttle">GAS</div>
      <div class="t-btn t-brake" data-code="touch-brake">BRK</div>
      <div class="t-btn t-hand" data-code="touch-handbrake">HB</div>
      <div class="t-btn t-nitro" data-code="touch-nitro">N2O</div>`,this.root.appendChild(t);const e=t.querySelector(".t-steer"),n=t.querySelector(".t-knob");e.addEventListener("pointerdown",r=>{this.touchSteerId=r.pointerId,this.touchSteerX=r.clientX,this.touchSteer=0,e.setPointerCapture(r.pointerId)}),e.addEventListener("pointermove",r=>{if(r.pointerId!==this.touchSteerId)return;const a=r.clientX-this.touchSteerX,o=Math.abs(a)<8?0:Se((a-Math.sign(a)*8)/110,-1,1);this.touchSteer=o,n.style.transform=`translateX(${o*60}px)`});const s=r=>{r.pointerId===this.touchSteerId&&(this.touchSteer=0,this.touchSteerId=-1,n.style.transform="")};e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s);for(const r of t.querySelectorAll(".t-btn")){r.addEventListener("pointerdown",o=>{this.touchButtons.set(o.pointerId,r.dataset.code),r.setPointerCapture(o.pointerId),r.classList.add("on")});const a=o=>{this.touchButtons.delete(o.pointerId),r.classList.remove("on")};r.addEventListener("pointerup",a),r.addEventListener("pointercancel",a)}}}const oi=[{id:"race-red",name:"Race Red",color:11534364,flake:.18},{id:"blaze",name:"Blaze Orange",color:16734720,flake:.16},{id:"solar",name:"Solar Yellow",color:16756736,flake:.15},{id:"toxic",name:"Toxic Green",color:3129146,flake:.18},{id:"ice",name:"Ice Cyan",color:1620184,flake:.2,pearl:!0},{id:"midnight",name:"Midnight Blue",color:797294,flake:.22},{id:"violet",name:"Neon Violet",color:6954960,flake:.22,pearl:!0},{id:"magenta",name:"Hot Magenta",color:13635694,flake:.2},{id:"pearl",name:"Pearl White",color:15790318,flake:.1,pearl:!0},{id:"silver",name:"Liquid Silver",color:12106946,flake:.4},{id:"gunmetal",name:"Gunmetal",color:3817286,flake:.3},{id:"obsidian",name:"Obsidian",color:657932,flake:.35}],Ju="driver.paint";function V_(){let i=null;try{i=localStorage.getItem(Ju)}catch{}return oi.find(t=>t.id===i)??oi[0]}function H_(i){try{localStorage.setItem(Ju,i.id)}catch{}}function _l(i){const t=new Dt(i),e=.4122214708*t.r+.5363325363*t.g+.0514459929*t.b,n=.2119034982*t.r+.6806995451*t.g+.1073969566*t.b,s=.0883024619*t.r+.2817188376*t.g+.6299787005*t.b,[r,a,o]=[Math.cbrt(e),Math.cbrt(n),Math.cbrt(s)];return[.2104542553*r+.793617785*a-.0040720468*o,1.9779984951*r-2.428592205*a+.4505937099*o,.0259040371*r+.7827717662*a-.808675766*o]}const W_=(i,t)=>{const e=_l(i),n=_l(t);return Math.hypot(e[0]-n[0],e[1]-n[1],e[2]-n[2])};function X_(i,t){const e=[i],n=[];for(let s=0;s<t;s++){let r=null,a=-1;for(const l of oi){if(e.includes(l))continue;const c=Math.min(...e.map(h=>W_(h.color,l.color)));c>a&&(a=c,r=l)}const o=r??oi[s%oi.length];e.push(o),n.push(o)}return n}function q_(i){const[t]=_l(i.color);return t>.6?1315860:15921902}const Y_={wedge:"stripes",muscle:"stripes",gt:"side",hatch:"twotone"},$_=`
.hud{position:fixed;inset:0;pointer-events:none;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#fff;
  text-shadow:0 0 8px rgba(0,0,0,.85);letter-spacing:.06em}
.hud .tl{position:absolute;left:18px;top:14px;line-height:1.25}
.hud .pos{font-size:44px;font-weight:800;font-style:italic}.hud .pos small{font-size:18px;opacity:.7}
.hud .lap{font-size:16px;opacity:.9}.hud .times{font-size:13px;opacity:.8;margin-top:6px;font-variant-numeric:tabular-nums}
.hud .gaps{font-size:13px;margin-top:6px;font-variant-numeric:tabular-nums}.hud .gaps .a{color:#ff6b8a}.hud .gaps .b{color:#6bffb5}
.hud .br{position:absolute;right:22px;bottom:18px;text-align:right}
.hud .spd{font-size:64px;font-weight:800;font-style:italic;line-height:1;font-variant-numeric:tabular-nums}
.hud .spd small{font-size:16px;font-style:normal;opacity:.7;margin-left:4px}
.hud .gear{display:inline-block;font-size:28px;font-weight:800;margin-left:10px;color:#ff3f7a}
.hud .bar{width:240px;height:8px;background:rgba(255,255,255,.12);border-radius:4px;margin-top:8px;overflow:hidden;margin-left:auto}
.hud .bar i{display:block;height:100%;background:linear-gradient(90deg,#3ff0ff,#ff3f7a);transform-origin:left}
.hud .nitro i{background:linear-gradient(90deg,#4a7bff,#c06bff)}.hud .nitro.ready{box-shadow:0 0 10px #8a6bff}
.hud .label{font-size:10px;opacity:.6;margin-top:6px}
.hud .center{position:absolute;left:0;right:0;top:32%;text-align:center;font-size:72px;font-weight:900;font-style:italic;
  letter-spacing:.08em;opacity:0;transition:opacity .2s}
.hud .center.on{opacity:1}
.hud .pausebtn{position:absolute;left:50%;top:12px;transform:translateX(-50%);pointer-events:auto;width:40px;height:40px;
  border-radius:20px;border:1px solid rgba(255,255,255,.25);background:rgba(10,8,18,.45);color:#fff;font:700 14px system-ui;cursor:pointer}
.hud canvas.map{position:absolute;inset:14px 18px auto auto;width:170px;height:170px;opacity:.85}
.overlay{position:fixed;inset:0;display:grid;place-items:center;background:rgba(6,5,12,.62);backdrop-filter:blur(3px);
  font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#fff;z-index:10}
.panel{min-width:min(560px,92vw);max-width:92vw;background:rgba(14,12,24,.88);border:1px solid rgba(255,255,255,.1);
  border-radius:14px;padding:22px 24px;box-shadow:0 20px 60px rgba(0,0,0,.5)}
.panel h1{margin:0 0 4px;font-size:30px;font-style:italic;letter-spacing:.12em;color:#ff3f7a}
.panel h2{margin:16px 0 8px;font-size:12px;letter-spacing:.2em;opacity:.7;font-weight:600}
.swatches{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}
.sw{height:38px;border-radius:8px;border:2px solid transparent;cursor:pointer;position:relative}
.sw.on{border-color:#fff;box-shadow:0 0 0 2px #ff3f7a}
.sw span{position:absolute;inset:auto 0 -16px;font-size:9px;text-align:center;opacity:.7;white-space:nowrap}
.row{display:flex;gap:8px;flex-wrap:wrap}
.btn{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);color:#fff;border-radius:8px;
  padding:10px 16px;font-size:14px;letter-spacing:.1em;cursor:pointer;font-weight:600}
.btn.on{background:#ff3f7a;border-color:#ff3f7a}.btn.go{background:#ff3f7a;border-color:#ff3f7a;font-size:16px;padding:12px 28px}
.btn:focus-visible{outline:2px solid #3ff0ff}
.hint{font-size:11px;opacity:.55;margin-top:14px;line-height:1.5}
table.res{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums;font-size:14px}
table.res th{font-size:10px;letter-spacing:.15em;opacity:.6;text-align:left;padding:6px 8px;font-weight:600}
table.res td{padding:7px 8px;border-top:1px solid rgba(255,255,255,.07)}
table.res tr.me td{background:rgba(255,63,122,.18)}
.chip{display:inline-block;width:12px;height:12px;border-radius:3px;margin-right:8px;vertical-align:-1px}
.touch .t-steer{position:fixed;left:20px;bottom:24px;width:200px;height:90px;border-radius:45px;background:rgba(255,255,255,.08);pointer-events:auto}
.touch .t-knob{position:absolute;left:70px;top:15px;width:60px;height:60px;border-radius:30px;background:rgba(255,255,255,.35)}
.touch .t-btn{position:fixed;width:74px;height:74px;border-radius:37px;background:rgba(255,255,255,.1);display:grid;place-items:center;
  font:700 12px system-ui;color:#fff;pointer-events:auto;user-select:none}
.touch .t-btn.on{background:rgba(255,63,122,.5)}
.touch .t-throttle{right:24px;bottom:110px;width:96px;height:96px;border-radius:48px}.touch .t-brake{right:130px;bottom:30px}
.touch .t-hand{right:24px;bottom:20px}.touch .t-nitro{right:130px;bottom:120px}
@media (pointer:coarse){.hud .br{right:auto;left:50%;transform:translateX(-50%);bottom:8px;text-align:center}
  .hud .spd{font-size:40px}.hud .gear{font-size:20px}.hud .bar{width:180px;margin:4px auto 0}.hud .label{display:none}
  .hud .pos{font-size:32px}.hud canvas.map{width:120px;height:120px}}
`;let zh=!1;function Aa(){if(zh)return;zh=!0;const i=document.createElement("style");i.textContent=$_,document.head.appendChild(i)}const ss=i=>{if(!Number.isFinite(i))return"—";const t=Math.floor(i/60),e=i-t*60;return`${t}:${e.toFixed(2).padStart(5,"0")}`},ha=i=>"#"+i.toString(16).padStart(6,"0");class Z_{constructor(t){this.track=t,Aa(),this.el=document.createElement("div"),this.el.className="hud",this.el.innerHTML=`
      <div class="tl"><div class="pos"></div><div class="lap"></div><div class="times"></div><div class="gaps"></div></div>
      <canvas class="map" width="340" height="340"></canvas>
      <div class="br"><div><span class="spd"></span><span class="gear"></span></div>
        <div class="bar rev"><i></i></div><div class="label">RPM</div>
        <div class="bar nitro"><i></i></div><div class="label">NITRO · SHIFT</div></div>
      <div class="center"></div><button class="pausebtn" aria-label="Pause">II</button>`,document.body.appendChild(this.el);const e=n=>this.el.querySelector(n);this.pos=e(".pos"),this.lap=e(".lap"),this.times=e(".times"),this.gaps=e(".gaps"),this.spd=e(".spd"),this.gear=e(".gear"),this.rev=e(".rev i"),this.nitro=e(".nitro"),this.nitroBar=e(".nitro i"),this.center=e(".center"),this.map=e("canvas.map"),e(".pausebtn").addEventListener("click",()=>this.onPause?.()),this.mapBase=this.drawMapBase()}track;el;pos;lap;times;gaps;spd;gear;rev;nitro;nitroBar;center;map;mapBase;calloutTimer=0;onPause=null;lastLap=0;set visible(t){this.el.style.display=t?"":"none"}mapXf={x0:0,z0:0,k:1};drawMapBase(){const t=document.createElement("canvas");t.width=t.height=340;const e=t.getContext("2d");let n=1/0,s=-1/0,r=1/0,a=-1/0;for(const l of this.track.samples)n=Math.min(n,l.pos.x),s=Math.max(s,l.pos.x),r=Math.min(r,l.pos.z),a=Math.max(a,l.pos.z);const o=300/Math.max(s-n,a-r);return this.mapXf={x0:(n+s)/2,z0:(r+a)/2,k:o},e.lineJoin="round",e.beginPath(),this.track.samples.forEach((l,c)=>{const[h,f]=this.mapPt(l.pos.x,l.pos.z);c===0?e.moveTo(h,f):e.lineTo(h,f)}),e.closePath(),e.strokeStyle="rgba(0,0,0,.55)",e.lineWidth=14,e.stroke(),e.strokeStyle="rgba(255,255,255,.75)",e.lineWidth=6,e.stroke(),t}mapPt(t,e){return[170-(t-this.mapXf.x0)*this.mapXf.k,170-(e-this.mapXf.z0)*this.mapXf.k]}callout(t,e=1.6){this.center.textContent=t,this.center.classList.add("on"),this.calloutTimer=e}update(t,e,n){const s=e.player,r=s.vehicle,a=e.racers.length;this.pos.innerHTML=`P${s.position}<small>/${a}</small>`;const o=Math.min(Math.max(s.lap,1),e.laps);this.lap.textContent=`LAP ${o}/${e.laps}`;const l=e.phase==="countdown"?0:e.t-s.lapStart;this.times.innerHTML=`TIME ${ss(Math.max(0,e.t))}<br>LAP ${ss(s.lap>=1?l:0)} · BEST ${ss(s.bestLap)}`;const c=e.order[s.position-2],h=e.order[s.position];if(this.gaps.innerHTML=(c?`<div class="a">▲ ${c.entry.name} −${Math.abs(e.gapTo(s,c)).toFixed(1)}s</div>`:"")+(h?`<div class="b">▼ ${h.entry.name} +${Math.abs(e.gapTo(h,s)).toFixed(1)}s</div>`:""),this.spd.innerHTML=`${Math.round(Math.abs(r.vFwd)*3.6)}<small>KM/H</small>`,this.gear.textContent=r.vFwd<-.5?"R":String(r.gear),this.rev.style.transform=`scaleX(${Math.min(1,r.rpm01)})`,this.nitroBar.style.transform=`scaleX(${r.nitro})`,this.nitro.classList.toggle("ready",r.nitro>.15),e.phase==="countdown"){const u=Math.ceil(-e.t);this.center.textContent=u>0?String(u):"GO",this.center.classList.add("on"),this.calloutTimer=.8}else s.lap!==this.lastLap&&(s.lap===1&&this.lastLap===0?this.callout("GO",.8):s.lap===e.laps?this.callout("FINAL LAP"):s.lap>e.laps&&this.callout("FINISH",2.5));this.lastLap=s.lap,this.calloutTimer>0&&(this.calloutTimer-=t,this.calloutTimer<=0&&this.center.classList.remove("on"));const f=this.map.getContext("2d");f.clearRect(0,0,340,340),f.drawImage(this.mapBase,0,0);for(const u of e.racers){const[d,g]=this.mapPt(u.vehicle.pos.x,u.vehicle.pos.y);f.beginPath(),f.arc(d,g,u===s?9:7,0,Math.PI*2),f.fillStyle=ha(n.get(u)??16777215),f.fill(),f.lineWidth=u===s?3:2,f.strokeStyle=u===s?"#ff3f7a":"#000",f.stroke()}}}function K_(i,t,e,n){return Aa(),new Promise(s=>{const r=document.createElement("div");r.className="overlay";let a=t,o=e;const l=()=>{r.innerHTML=`<div class="panel">
        <h1>DRIVER</h1><div style="opacity:.7;font-size:13px">Level 1 · Harbour Loop · ${Jl[i].name.toUpperCase()}</div>
        <h2>PAINT · ${a.name.toUpperCase()}</h2>
        <div class="swatches">${oi.map(c=>`<div class="sw ${c.id===a.id?"on":""}" data-id="${c.id}" title="${c.name}" style="background:
            linear-gradient(135deg, ${ha(c.color)} 40%, rgba(255,255,255,${c.pearl?.45:.18}) 55%, ${ha(c.color)} 70%)"></div>`).join("")}</div>
        <h2 style="margin-top:26px">LAPS</h2>
        <div class="row">${[3,5,7].map(c=>`<button class="btn ${c===o?"on":""}" data-laps="${c}">${c}</button>`).join("")}</div>
        <div class="row" style="margin-top:20px;justify-content:flex-end"><button class="btn go">RACE</button></div>
        <div class="hint">${Qu}</div>
      </div>`,r.querySelectorAll(".sw").forEach(c=>c.addEventListener("click",()=>{a=oi.find(h=>h.id===c.dataset.id),n(a),l()})),r.querySelectorAll("[data-laps]").forEach(c=>c.addEventListener("click",()=>{o=Number(c.dataset.laps),l()})),r.querySelector(".go").addEventListener("click",()=>{r.remove(),s({paint:a,laps:o})})};l(),document.body.appendChild(r)})}const Qu=`W/↑ throttle · S/↓ brake/reverse · A D / ← → steer · Space handbrake (drift) · Shift nitro<br>
  hold R reset car · Esc pause · M mute · 1 2 3 time of day`;function J_(i,t,e,n,s){Aa();const r=document.createElement("div");r.className="overlay";const a=()=>{r.innerHTML=`<div class="panel"><h1>PAUSED</h1>
      <div class="row" style="margin-top:16px"><button class="btn go resume">RESUME</button>
        <button class="btn restart">RESTART</button><button class="btn menu">MENU</button>
        <button class="btn mute">${n()?"SOUND OFF":"SOUND ON"}</button></div>
      <div class="hint">${Qu}</div></div>`,r.querySelector(".resume").addEventListener("click",i),r.querySelector(".restart").addEventListener("click",t),r.querySelector(".menu").addEventListener("click",e),r.querySelector(".mute").addEventListener("click",()=>{s(),a()})};return a(),document.body.appendChild(r),()=>r.remove()}function Q_(i,t,e,n){Aa();const s=document.createElement("div");s.className="overlay";const r=i.player,a=i.order[0],o=i.order.map(c=>{const h=c===a?"—":c.dnf?`${c.lap-1}/${i.laps} laps`:`+${(c.finishTime-a.finishTime).toFixed(2)}s`;return`<tr class="${c===r?"me":""}"><td>${c.dnf?"DNF":c.position}</td>
        <td><span class="chip" style="background:${ha(t.get(c)??16777215)}"></span>${c.entry.name}
          <span style="opacity:.5;font-size:11px">${c.entry.body.toUpperCase()}</span></td>
        <td>${c.dnf?"—":ss(c.finishTime)}</td><td>${ss(c.bestLap)}</td><td>${h}</td></tr>`}).join(""),l=r.dnf?"DNF":`FINISHED P${r.position}`;s.innerHTML=`<div class="panel">
    <h1>${l}</h1><div style="opacity:.7;font-size:13px;margin-bottom:12px">Harbour Loop · ${i.laps} laps</div>
    <table class="res"><tr><th>POS</th><th>DRIVER</th><th>TOTAL</th><th>BEST LAP</th><th>GAP</th></tr>${o}</table>
    <h2>YOUR LAPS</h2><div style="font-variant-numeric:tabular-nums;font-size:13px">${r.lapTimes.map((c,h)=>`L${h+1} ${ss(c)}${c===r.bestLap?" ★":""}`).join(" · ")}</div>
    <div class="row" style="margin-top:20px;justify-content:flex-end">
      <button class="btn retry">RETRY</button><button class="btn go cont">MENU</button></div>
  </div>`,s.querySelector(".retry").addEventListener("click",e),s.querySelector(".cont").addEventListener("click",n),document.body.appendChild(s)}const kh={wedge:{f:1.3,wave:"sawtooth",drive:2.2,cutoff:1.3,wobble:0},muscle:{f:.75,wave:"square",drive:3.5,cutoff:.8,wobble:1},gt:{f:1,wave:"sawtooth",drive:2.4,cutoff:1,wobble:0},hatch:{f:1.15,wave:"square",drive:1.8,cutoff:1.15,wobble:0}},Gh="driver.audio";class j_{constructor(t,e,n){this.a=t,this.kind=e,this.isPlayer=n;const s=t.ctx,r=kh[e];if(this.out=s.createGain(),this.out.gain.value=n?1:.55,n)this.panner=null,this.out.connect(t.master);else{const c=s.createPanner();c.panningModel="equalpower",c.distanceModel="inverse",c.refDistance=6,c.maxDistance=120,c.rolloffFactor=1.4,this.panner=c,this.out.connect(c).connect(t.master)}this.osc=s.createOscillator(),this.osc.type=r.wave,this.sub=s.createOscillator(),this.sub.type="sine",this.shaper=s.createWaveShaper(),this.shaper.curve=eM(r.drive),this.lp=s.createBiquadFilter(),this.lp.type="lowpass",this.lp.Q.value=.9,this.engineGain=s.createGain(),this.engineGain.gain.value=0;const a=s.createGain();a.gain.value=.5,this.osc.connect(a);const o=s.createGain();o.gain.value=.6,this.sub.connect(o).connect(a),a.connect(this.shaper).connect(this.lp).connect(this.engineGain).connect(this.out),r.wobble?(this.wobble=s.createOscillator(),this.wobble.frequency.value=8,this.wobbleGain=s.createGain(),this.wobbleGain.gain.value=0,this.wobble.connect(this.wobbleGain).connect(this.engineGain.gain),this.wobble.start()):(this.wobble=null,this.wobbleGain=null);const l=t.noiseSource();this.squealBp=s.createBiquadFilter(),this.squealBp.type="bandpass",this.squealBp.frequency.value=1400,this.squealBp.Q.value=6,this.squealGain=s.createGain(),this.squealGain.gain.value=0,l.connect(this.squealBp).connect(this.squealGain).connect(this.out),this.osc.start(),this.sub.start()}a;kind;isPlayer;out;osc;sub;shaper;lp;engineGain;squealBp;squealGain;panner;wobble;wobbleGain;lastGear=1;liftPeak=0;blowoffCooldown=0;shiftDip=0;update(t,e,n){const r=this.a.ctx.currentTime,a=kh[this.kind];let o=1;if(this.panner){const u=t.x-e.x,d=t.z-e.z,g=Math.hypot(u,d)||1,x=((t.vx-e.vx)*u+(t.vz-e.vz)*d)/g;if(o=1-Math.max(-.25,Math.min(.25,x/343)),this.panner.positionX.setTargetAtTime(t.x,r,.02),this.panner.positionY.setTargetAtTime(t.y+.5,r,.02),this.panner.positionZ.setTargetAtTime(t.z,r,.02),g>140){this.engineGain.gain.setTargetAtTime(0,r,.1),this.squealGain.gain.setTargetAtTime(0,r,.1);return}}t.gear!==this.lastGear&&(t.gear>this.lastGear&&(this.shiftDip=.18),this.isPlayer&&this.a.oneShot("shift"),this.lastGear=t.gear),this.liftPeak=Math.max(t.throttle,this.liftPeak-n/.35),this.blowoffCooldown-=n,this.isPlayer&&this.liftPeak>.7&&t.throttle<.25&&t.rpm01>.45&&this.blowoffCooldown<=0&&(this.a.oneShot("blowoff"),this.blowoffCooldown=1,this.liftPeak=0),this.shiftDip=Math.max(0,this.shiftDip-n);const l=(30+90*t.rpm01)*a.f*o;this.osc.frequency.setTargetAtTime(l,r,.03),this.sub.frequency.setTargetAtTime(l*.5,r,.03),this.lp.frequency.setTargetAtTime((800+3500*t.rpm01*(.4+.6*t.throttle))*a.cutoff,r,.04);const c=(.1+.16*t.throttle+.06*t.rpm01)*(this.shiftDip>0?.8:1);this.engineGain.gain.setTargetAtTime(c,r,.04),this.wobbleGain&&this.wobbleGain.gain.setTargetAtTime(t.rpm01<.3?.05:0,r,.1);const h=Math.abs(t.slip),f=tM(.08,.3,h)*Math.min(1,t.speed/15);this.squealBp.frequency.setTargetAtTime(1100+700*Math.min(1,h/.5),r,.05),this.squealGain.gain.setTargetAtTime(f*(this.isPlayer?.35:.25),r,.05)}stop(){this.osc.stop(),this.sub.stop(),this.wobble?.stop(),this.out.disconnect()}}const tM=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function eM(i){const e=new Float32Array(1024);for(let n=0;n<1024;n++){const s=n/1023*2-1;e[n]=Math.tanh(i*s)/Math.tanh(i)}return e}class nM{ctx;master;noiseBuf;voices=new Map;wind;windLp;rain;nitro;brake;scrape;scrapeBp;turbo;turboGain;nitroWas=!1;turboSpool=0;volume=.8;muted=!1;counts={};get turboLevel(){return this.turboGain.gain.value}analyser;async record(t){const e=this.ctx.createMediaStreamDestination();this.analyser.connect(e);const n=new MediaRecorder(e.stream),s=[];n.ondataavailable=l=>s.push(l.data);const r=new Promise(l=>n.onstop=()=>l());n.start(),await new Promise(l=>setTimeout(l,t*1e3)),n.stop(),await r,this.analyser.disconnect(e);const a=new Uint8Array(await new Blob(s,{type:n.mimeType}).arrayBuffer());let o="";for(let l=0;l<a.length;l+=32768)o+=String.fromCharCode(...a.subarray(l,l+32768));return btoa(o)}level(){const t=new Float32Array(this.analyser.fftSize);this.analyser.getFloatTimeDomainData(t);let e=0;for(const n of t)e+=n*n;return Math.sqrt(e/t.length)}get voiceCount(){return this.voices.size}constructor(){this.ctx=new AudioContext;const t=this.ctx.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=4,this.master=this.ctx.createGain(),this.master.connect(t).connect(this.ctx.destination),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=2048,t.connect(this.analyser),this.noiseBuf=this.ctx.createBuffer(1,this.ctx.sampleRate*2,this.ctx.sampleRate);const e=this.noiseBuf.getChannelData(0);for(let s=0;s<e.length;s++)e[s]=Math.random()*2-1;const n=(s,r,a=.7)=>{const o=this.ctx.createBiquadFilter();o.type=s,o.frequency.value=r,o.Q.value=a;const l=this.ctx.createGain();return l.gain.value=0,this.noiseSource().connect(o).connect(l).connect(this.master),[l,o]};[this.wind,this.windLp]=n("lowpass",300),[this.rain]=n("highpass",2500),[this.nitro]=n("bandpass",1800,.8),[this.brake]=n("bandpass",3e3,8),[this.scrape,this.scrapeBp]=n("bandpass",900,3),this.turbo=this.ctx.createOscillator(),this.turbo.type="sine",this.turboGain=this.ctx.createGain(),this.turboGain.gain.value=0,this.turbo.connect(this.turboGain).connect(this.master),this.turbo.start(),this.load(),this.applyVolume()}noiseSource(){const t=this.ctx.createBufferSource();return t.buffer=this.noiseBuf,t.loop=!0,t.loopStart=Math.random(),t.start(0,Math.random()*1.5),t}load(){try{const t=JSON.parse(localStorage.getItem(Gh)??"{}");typeof t.volume=="number"&&(this.volume=t.volume),typeof t.muted=="boolean"&&(this.muted=t.muted)}catch{}}applyVolume(){this.master.gain.setTargetAtTime(this.muted?0:this.volume,this.ctx.currentTime,.05);try{localStorage.setItem(Gh,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}setMaster(t,e){this.volume=t,this.muted=e,this.applyVolume()}toggleMute(){this.setMaster(this.volume,!this.muted)}update(t,e,n,s){const r=this.ctx.currentTime,a=this.ctx.listener;a.positionX&&(a.positionX.setTargetAtTime(e.x,r,.02),a.positionY.setTargetAtTime(e.y,r,.02),a.positionZ.setTargetAtTime(e.z,r,.02),a.forwardX.setTargetAtTime(e.fx,r,.02),a.forwardY.setTargetAtTime(e.fy,r,.02),a.forwardZ.setTargetAtTime(e.fz,r,.02));let o=null;for(const[c,h]of n){let f=this.voices.get(c);f||this.voices.set(c,f=new j_(this,h.kind,h.isPlayer)),f.update(h,e,t),h.isPlayer&&(o=h)}for(const[c,h]of this.voices)n.has(c)||(h.stop(),this.voices.delete(c));if(!o)return;const l=o.speed;this.wind.gain.setTargetAtTime(.35*Math.min(1,(l/80)**2),r,.1),this.windLp.frequency.setTargetAtTime(200+20*l,r,.1),this.rain.gain.setTargetAtTime(.05*s,r,.3),this.nitro.gain.setTargetAtTime(o.nitroOn?.22:0,r,.05),o.nitroOn&&!this.nitroWas&&this.oneShot("whoosh"),this.nitroWas=o.nitroOn,this.brake.gain.setTargetAtTime(o.braking>.7&&l>10?.06:0,r,.05),this.scrape.gain.setTargetAtTime(.4*o.scrape*Math.min(1,l/10),r,.03),this.scrapeBp.frequency.setTargetAtTime(500+25*l,r,.05),this.turboSpool+=(o.rpm01*o.throttle-this.turboSpool)*Math.min(1,t/.4),this.turbo.frequency.setTargetAtTime(1800+3200*this.turboSpool,r,.05),this.turboGain.gain.setTargetAtTime(.06*this.turboSpool*this.turboSpool,r,.05)}oneShot(t,e=1,n){const s=this.ctx,r=s.currentTime;let a=this.master;if(n){const c=s.createPanner();c.panningModel="equalpower",c.refDistance=6,c.rolloffFactor=1.2,c.positionX.value=n.x,c.positionY.value=n.y,c.positionZ.value=n.z,c.connect(this.master),a=c}const o=(c,h,f,u="sine",d=c)=>{const g=s.createOscillator();g.type=u,g.frequency.setValueAtTime(c,r),g.frequency.exponentialRampToValueAtTime(Math.max(20,d),r+h);const x=s.createGain();x.gain.setValueAtTime(f,r),x.gain.exponentialRampToValueAtTime(1e-4,r+h),g.connect(x).connect(a),g.start(r),g.stop(r+h+.02)},l=(c,h,f,u,d,g=1)=>{const x=s.createBufferSource();x.buffer=this.noiseBuf;const p=s.createBiquadFilter();p.type=c,p.Q.value=g,p.frequency.setValueAtTime(h,r),p.frequency.exponentialRampToValueAtTime(f,r+u);const m=s.createGain();m.gain.setValueAtTime(d,r),m.gain.exponentialRampToValueAtTime(1e-4,r+u),x.connect(p).connect(m).connect(a),x.start(r,Math.random()),x.stop(r+u+.02)};switch(this.counts[t]=(this.counts[t]??0)+1,t){case"click":o(1800,.03,.15);break;case"beep":o(880,.12,.3,"square");break;case"go":o(1320,.35,.3,"square");break;case"finish":o(880,.2,.25,"square"),setTimeout(()=>this.oneShot("go"),180);break;case"shift":l("highpass",3e3,2e3,.05,.12);break;case"blowoff":l("bandpass",5200,1100,.32,.55,1.6),l("highpass",7e3,3e3,.18,.25,.7);break;case"whoosh":l("bandpass",400,2600,.4,.3,1.2);break;case"thump":{const c=Math.max(.1,Math.min(1,e));o(80,.14,.8*c,"sine",45),l("lowpass",2500,300,.08,.5*c);break}}}dispose(){for(const t of this.voices.values())t.stop();this.voices.clear()}}let Ds=null,Vh=[];function ri(){return Ds}function iM(){const i=()=>{if(!Ds){try{Ds=new nM}catch{return}for(const t of Vh)t(Ds);Vh=[]}Ds.ctx.resume()};window.addEventListener("keydown",i),window.addEventListener("pointerdown",i)}const Ze=new URLSearchParams(location.search),tc=Ze.get("preset")in Ta?Ze.get("preset"):"night",Qe=Ze.get("cam")??"chase",sM=["hero","side","wheel","tyre","paint"],ir=sM.includes(Qe),Hh=Ze.has("freeze"),an={ready:!1,frames:0,fps:0,preset:tc,errors:[],phase:""};window.__driver=an;window.addEventListener("error",i=>an.errors.push(String(i.message)));const rM=document.getElementById("app"),aM=document.getElementById("hud"),_n=new Ov({antialias:!1,powerPreference:"high-performance"}),ju=Math.min(window.devicePixelRatio,1.5);_n.setPixelRatio(ju);_n.setSize(window.innerWidth,window.innerHeight);_n.toneMapping=ga;_n.outputColorSpace=Be;_n.shadowMap.enabled=!0;_n.shadowMap.type=Ns;rM.appendChild(_n.domElement);qv(_n.capabilities.getMaxAnisotropy());const qn=new hu,Ne=new $e(62,window.innerWidth/window.innerHeight,.1,4e3),tf=new Gv(_n,qn),Rn=new Wv;qn.add(Rn.group);const Ra=new L_(1200);qn.add(Ra.mesh);const ec=new n_(Rn,Ra);qn.add(ec.group);const nc=new N_;qn.add(nc.lines);const ic=new R_(_n,qn,Ne,4),ua=(Ze.get("car")??"wedge")in Jl?Ze.get("car")??"wedge":"wedge";let Vn=oi.find(i=>i.id===Ze.get("paint"))??V_();const Wh=["muscle","gt","hatch","wedge"],oM=["Vega","Ronin","Kestrel","Nyx","Diesel","Halo","Mako"],lM=3,Xh=[12105912,13146682,1118481,2829617];function cM(){return{model:new Yu({body:ua,color:Vn.color,flake:Vn.flake,pearl:Vn.pearl,underglow:9059583}),color:Vn.color}}function ef(){return X_(Vn,lM).map((t,e)=>{const n=Wh[e%Wh.length];return{model:new Yu({body:n,color:t.color,flake:t.flake,pearl:t.pearl,livery:{kind:Y_[n],color:q_(t)},rim:Xh[e%Xh.length],underglow:[3186943,3203327,16732064,6160266][e%4]}),color:t.color}})}const ze=cM();let zn=ef(),Ca=[ze,...zn];for(const i of Ca)qn.add(i.model.group);const nf=[];for(const i of ze.model.headlightPoints){const t=new Lp(15266047,0,90,.42,.55,1.4);t.position.copy(i),t.target.position.set(i.x*1.4,-1.2,i.z+22),ze.model.group.add(t,t.target),nf.push(t)}const qh=new Map;function kr(i,t){let e=qh.get(i);return e||qh.set(i,e=t()),e}const sf=$v();sf.repeat.set(1,3);function Gr(i,t,e=1,n=1){i.map=t.map,i.roughnessMap=t.roughnessMap,i.normalMap=t.normalMap,i.normalScale.setScalar(n),i.roughness=1,i.metalness=0,i.color.setScalar(e),i.needsUpdate=!0}let un=Ta[tc],ea=1;function Hs(i){un=Ta[i],an.preset=i,tf.apply(un);const t=un.wet,e=Rn.materials;Gr(e.road,kr(`asphalt-${t}`,()=>Yv(t)),1,t?.6:1);const n=kr(`concrete-${t}`,()=>mo(t));Gr(e.barrier,n,1.15),Gr(e.sidewalk,kr(`walk-${t}`,()=>mo(t,.85,512,7)),1),Gr(e.gutter,n,.7),e.kerb.map=sf,e.kerb.roughness=t?.25:.6,e.kerb.color.setScalar(t?.7:1),e.kerb.needsUpdate=!0,e.neon.color.set(3729663).multiplyScalar(.5+1.6*un.neon),ec.applyPreset(un,kr(`ground-${t}`,()=>mo(t,.55,512,13))),ic.applyPreset(un),nc.lines.visible=un.rain,ea=i==="night"?1:i==="sunset"?.55:0;for(const s of Ca)s.model.setLights(ea,!1),s.model.setWet(t);for(const s of nf)s.intensity=160*ea;aM.innerHTML=ir?`<b>DRIVER</b> &nbsp; ${un.label} &nbsp;·&nbsp; 1 Day · 2 Sunset · 3 Night/Rain`:""}Hs(tc);window.addEventListener("keydown",i=>{i.key==="1"&&Hs("day"),i.key==="2"&&Hs("sunset"),i.key==="3"&&Hs("night")});const On={s:0,pos:new P,tangent:new P,right:new P,up:new P,curvature:0},fa=new he,Ws=new P,ei=new P,Vr=new P,hM=new P;function uM(i,t,e,n){Rn.frameAt(t,On);const s=i.group;Ws.crossVectors(On.up,On.tangent).normalize(),fa.makeBasis(Ws,On.up,On.tangent),s.quaternion.setFromRotationMatrix(fa);const r=i.spec.trackHalf,a=ca(e-r),o=ca(e+r);s.position.copy(On.pos).addScaledVector(On.right,e).addScaledVector(On.up,(a+o)/2),s.rotateZ(Math.atan2(a-o,2*r)),i.setRoll(hl.clamp(-On.curvature*n*.05,-.04,.04))}const fM=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e};function rf(i,t,e){const n=t.prev.x+(t.curr.x-t.prev.x)*e,s=t.prev.z+(t.curr.z-t.prev.z)*e,r=fM(t.prev.yaw,t.curr.yaw,e),a=Rn.queryTrack(hM.set(n,0,s),t.trackIndex),o=a.sample.tangent,l=Math.hypot(o.x,o.z)||1;ei.set(Math.sin(r),0,Math.cos(r));const c=(ei.x*o.x+ei.z*o.z)/l;ei.y=o.y/l*c,ei.normalize(),Vr.copy(a.sample.up),Ws.crossVectors(Vr,ei).normalize(),Vr.crossVectors(ei,Ws).normalize(),fa.makeBasis(Ws,Vr,ei);const h=i.group;h.quaternion.setFromRotationMatrix(fa);const f=i.spec.trackHalf,u=a.sample.right,d=Math.abs(-Math.cos(r)*u.x+Math.sin(r)*u.z),g=ca(a.lateral-f*d),x=ca(a.lateral+f*d);h.position.set(n,a.height+(g+x)/2,s),h.rotateZ(Math.atan2(g-x,2*f)),i.setRoll(Se(-t.yawRate*.05,-.045,.045)),i.setWheels(t.prev.wheelRoll+(t.curr.wheelRoll-t.prev.wheelRoll)*e,t.curr.steer),i.setLights(ea,t.applied.brake>.1&&t.vFwd>.5)}const Hr=[],Mi=new P;function dM(){if(Hr.length=0,!!un.wet){for(const{model:i}of Ca){const t=i.group;for(const e of i.tailPoints)Mi.copy(e).setY(0),Hr.push({pos:t.localToWorld(Mi.clone()),normal:new P(0,1,0),color:new Dt(1,.05,.08).multiplyScalar(1.6),width:.5,length:9});for(const e of i.headlightPoints)Mi.copy(e).setY(0).setZ(e.z+.4),Hr.push({pos:t.localToWorld(Mi.clone()),normal:new P(0,1,0),color:new Dt(.85,.9,1).multiplyScalar(.5),width:.35,length:5})}Ra.setDynamic(Hr)}}const qi=new P,Yi=new P,Le=new P;let Ml=!1,Is=36;function Mo(i){const t=ze.model.group,e=Mi.set(0,0,1).applyQuaternion(t.quaternion).setY(0).normalize(),n=new P(-e.z,0,e.x);if(Qe==="paint")Le.copy(t.position).addScaledVector(e,.9).addScaledVector(n,-1.5),Le.y=t.position.y+1.05,qi.copy(Le),Yi.copy(t.position).addScaledVector(e,.3).addScaledVector(n,-.9).setY(t.position.y+.72);else if(Qe==="tyre")Le.copy(t.position).addScaledVector(e,1.38).addScaledVector(n,-2.4),Le.y=t.position.y+.34,qi.copy(Le),Yi.copy(t.position).addScaledVector(e,1.38).setY(t.position.y+.34);else if(Qe==="wheel"||Qe==="side"){const r=Qe==="wheel";Le.copy(t.position).addScaledVector(e,r?1.9:0).addScaledVector(n,r?-2.6:-7.5),Le.y=t.position.y+(r?.4:.75),qi.copy(Le),Yi.copy(t.position).addScaledVector(e,r?1.2:0).setY(t.position.y+(r?.38:.6))}else if(Qe==="hero"||Qe==="grid")Le.copy(t.position).addScaledVector(e,9.5).add(n.clone().multiplyScalar(-6.2)),Le.y=t.position.y+1.15,qi.copy(Le),Yi.copy(t.position).addScaledVector(e,-.6).setY(t.position.y+.55);else{Le.copy(t.position).addScaledVector(e,-6.4),Le.y=t.position.y+2.05;const r=Ml?1-Math.exp(-i*7):1;qi.lerp(Le,r);const a=t.position.clone().addScaledVector(e,3).setY(t.position.y+.95);Yi.lerp(a,r)}Ml=!0,Ne.position.copy(qi),Ne.lookAt(Yi);const s=Math.min(1,Is/70);Ne.fov=Qe==="chase"?62+s*10:Qe==="side"?30:Qe==="wheel"||Qe==="tyre"?45:Qe==="paint"?40:32,Ne.updateProjectionMatrix()}function af(){const i=window.innerWidth,t=window.innerHeight;_n.setSize(i,t),ic.setSize(i,t,ju),Ne.aspect=i/t,Ne.updateProjectionMatrix()}window.addEventListener("resize",af);af();const Sl=new O_(Rn);let ce=null,vi=null,Si=null;const yl=new Map,da=new Map;let bl=!1,pa=[3,5,7].includes(Number(Ze.get("laps")))?Number(Ze.get("laps")):3;const pM=Ze.has("cam")||Ze.has("autostart"),of=Se(Number(Ze.get("timescale")??1),.1,8);function Yh(){for(const n of zn)qn.remove(n.model.group);zn=ef(),Ca=[ze,...zn];for(const n of zn)qn.add(n.model.group);Hs(an.preset);const i=hi(Number(Ze.get("seed")??Date.now()%1e5)),t=zn.map((n,s)=>({name:oM[s],body:n.model.spec.name,spec:n.model.spec,isPlayer:!1,skill:.45+i()*.15}));t.push({name:"You",body:ua,spec:ze.model.spec,isPlayer:!0}),ce=new Ku(Rn,Sl,t,pa,i),ce.maxSteps=Math.ceil(8*of),Ze.has("autopilot")&&(ce.player.ai=new vl(xl(.75,i),Sl,Rn.length,i)),yl.clear(),da.clear();let e=0;for(const n of ce.racers){const s=n.entry.isPlayer?ze:zn[e++];yl.set(n,s),da.set(n,s.color)}vi??=new G_(document.body),Si??=new Z_(Rn),Si.onPause=()=>sr(!0),Si.visible=!0,bl=!1,Ml=!1}if(!ir){const i=new Ku(Rn,Sl,[{name:"You",body:ua,spec:ze.model.spec,isPlayer:!0}],1,hi(1));rf(ze.model,i.player.vehicle,1);for(const t of zn)t.model.group.visible=!1;pM?Yh():K_(ua,Vn,pa,t=>{Vn=t,ze.model.setPaint(t.color,t.flake,t.pearl),ze.color=t.color}).then(t=>{Vn=t.paint,pa=t.laps,H_(Vn),Yh()})}let ma=!1,So=null;function lf(i){const t=new URLSearchParams(location.search);for(const[e,n]of Object.entries(i))n===null?t.delete(e):t.set(e,n);t.set("preset",an.preset),location.search=t.toString().replace(/=(&|$)/g,"$1")}function cf(){lf({autostart:"",laps:String(pa),seed:null})}function hf(){lf({autostart:null,autopilot:null,timescale:null})}function sr(i){!ce||ce.phase==="results"||i===ma||(ma=i,i?(ri()?.ctx.suspend(),So=J_(()=>sr(!1),cf,hf,()=>ri()?.muted??!1,()=>ri()?.toggleMute())):(So?.(),So=null,ri()?.ctx.resume()))}window.addEventListener("keydown",i=>{(i.code==="Escape"||i.code==="KeyP")&&sr(!ma)});window.addEventListener("blur",()=>sr(!0));document.addEventListener("visibilitychange",()=>document.hidden&&sr(!0));const $h=ir?[{model:ze.model,s:40,lane:1.8,speed:36,roll:0},...zn.map((i,t)=>({model:i.model,s:58+t*23,lane:[-1.9,1.6,-1.2,1.9][t%4],speed:35-t*.5,roll:0}))]:[];iM();an.record=i=>ri()?.record(i)??Promise.resolve("");window.addEventListener("keydown",i=>{i.code==="KeyM"&&ri()?.toggleMute()});document.addEventListener("click",i=>{i.target.closest?.(".btn, .sw")&&ri()?.oneShot("click")});const yo=new Map;let Wr=99,Zh=!1;function mM(i){const t=ri();if(!t)return;if(yo.clear(),ce){for(const r of ce.racers){const a=r.vehicle;yo.set(r,{x:a.pos.x,y:ze.model.group.position.y,z:a.pos.y,vx:a.vel.x,vz:a.vel.y,speed:a.speed,rpm01:ce.phase==="countdown"?.15+.5*a.applied.throttle:a.rpm01,throttle:ce.phase==="countdown"&&r.entry.isPlayer?vi?.ctrl.throttle??0:a.applied.throttle,gear:a.gear,slip:a.slipRear,braking:a.applied.brake,nitroOn:a.nitroOn,scrape:ce.scrape.get(r)??0,isPlayer:r.entry.isPlayer,kind:r.entry.body})}for(const r of ce.impacts)t.oneShot("thump",r.strength,r.player?void 0:{x:r.x,y:.5,z:r.z});const s=ce.phase==="countdown"?Math.ceil(-ce.t):0;s!==Wr&&(s>0?t.oneShot("beep"):Wr>0&&Wr<99&&t.oneShot("go"),Wr=s),ce.player.finished&&!Zh&&(Zh=!0,t.oneShot("finish"))}an.frames%30===0&&(an.audio={state:t.ctx.state,voices:t.voiceCount,level:t.level(),counts:t.counts,turbo:t.turboLevel});const e=ce?.player.vehicle,n=Ne.getWorldDirection(Mi);t.update(i,{x:Ne.position.x,y:Ne.position.y,z:Ne.position.z,fx:n.x,fy:n.y,fz:n.z,vx:e?.vel.x??0,vz:e?.vel.y??0},yo,un.rain?1:0)}const wl=new Ru;wl.connect(document);let bo=performance.now(),Ki=0,wo=0;document.getElementById("loading")?.remove();function uf(){wl.update();const i=Math.min(wl.getDelta(),1/20);if(Ki+=i,ir){const n=Hh?0:i;for(const s of $h)s.s+=s.speed*n,s.roll+=s.speed*n/s.model.spec.wheelRadius,uM(s.model,s.s,s.lane,s.speed),s.model.setWheels(s.roll,0);Is=$h[0].speed,Mo(i)}else if(ce&&vi&&Si&&ma)Mo(0);else if(ce&&vi&&Si){const n=vi.update(i);vi.resetRequested&&(vi.resetRequested=!1,ce.phase==="racing"&&ce.respawn(ce.player)),ce.update(i*of,n);for(const s of ce.racers){const r=yl.get(s);r.model.group.visible=!0,rf(r.model,s.vehicle,ce.alpha)}Is=Math.abs(ce.player.vehicle.vFwd),Mo(i),Si.update(i,ce,da),an.phase=ce.phase,ce.phase==="results"&&!bl&&(bl=!0,Si.visible=!1,Q_(ce,da,cf,hf))}else Is=0,gM();mM(i),tf.update(Ne,ze.model.group.position,Ki),ec.update(ze.model.group.position),dM(),Ra.update(Ki,un.wet?1:0),nc.update(Ki,Ne);const t=ir||Hh||!ce?0:Math.min(1,Is/70);ic.render(Ki,t),an.frames++,wo++;const e=performance.now();e-bo>=1e3&&(an.fps=wo*1e3/(e-bo),wo=0,bo=e),an.ready=!0,requestAnimationFrame(uf)}function gM(){const i=ze.model.group,t=Mi.set(0,0,1).applyQuaternion(i.quaternion).setY(0).normalize(),e=new P(-t.z,0,t.x),n=Ki*.12;Le.copy(i.position).addScaledVector(t,Math.cos(n)*8.5).addScaledVector(e,Math.sin(n)*8.5-2),Le.y=i.position.y+1.3,Ne.position.copy(Le),Ne.lookAt(i.position.x,i.position.y+.6,i.position.z),Ne.fov=34,Ne.updateProjectionMatrix()}requestAnimationFrame(uf);
