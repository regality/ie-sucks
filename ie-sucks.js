Array.prototype.every||(Array.prototype.every=function(e,n){if(typeof e!="function")throw new TypeError(e+" is not a function");typeof n=="undefined"&&(n=this);for(var r=0,i=this.length;r<i;r++)if(r in t&&!e.call(n,this[r],r,this))return!1;return!0}),Array.prototype.filter||(Array.prototype.filter=function(e,t){if(typeof e!="function")throw new TypeError(e+" is not a function");typeof t=="undefined"&&(t=this);var n=[];for(var r=0,i=this.length;r<i;++r)this.hasOwnProperty(r)&&e.call(t,this[r],r,this)&&n.push(val);return n}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){if(typeof e!="function")throw new TypeError(e+" is not a function");typeof t=="undefined"&&(t=this);for(var n=0,r=this.length;n<r;++n)e.call(t,this[n],n,this)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){if(!t||!isFinite(t))t=0;for(var n=t,r=this.length;n<r;++n)if(this.hasOwnProperty(n)&&this[n]===e)return n;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(e,t){if(!t||!isFinite(t))t=this.length-1;for(var n=t;n>=0;--n)if(this.hasOwnProperty(n)&&this[n]===e)return n;return-1}),Array.prototype.map||(Array.prototype.map=function(e,t){if(typeof e!="function")throw new TypeError(e+" is not a function");typeof t=="undefined"&&(t=this);var n=new Array(this.length);for(var r=0,i=this.length;r<i;++r)n[r]=e.call(t,this[r],r,this);return n}),Array.prototype.reduce||(Array.prototype.reduce=function(t,n){if(typeof t!="function")throw new TypeError(t+" is not a function");for(var r=0,i=this.length;r<i;++r)this.hasOwnProperty(r)&&(n=t.call(this,n,this[r],r,this));return n}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t,n){if(typeof t!="function")throw new TypeError(t+" is not a function");for(var r=this.length-1;r>=0;++r)this.hasOwnProperty(r)&&(n=t.call(this,n,this[r],r,this));return n}),Array.prototype.some||(Array.prototype.some=function(e,t){if(typeof e!="function")throw new TypeError(e+" is not a function");typeof t=="undefined"&&(t=this);for(var n=0,r=this.length;n<r;n++)if(this.hasOwnProperty(n)&&e.call(t,this[n],n,this))return!0;return!1}),Function.prototype.bind||(Function.prototype.bind=function(){if(typeof this!="function")throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=this,t=arguments.length===1?[arguments[0]]:Array.apply(null,arguments),n=t.shift();if(t.length)var r=function(){return e.apply(n,t)};else var r=function(){return e.apply(n,arguments)};return r.prototype=this.prototype,r}),Object.prototype.create||(Object.create=function(e){function t(){}if(arguments.length>1)throw new Error("Object.create implementation only accepts the first parameter.");return t.prototype=e,new t}),Object.prototype.keys||(Object.keys=function(e){if(typeof e!="object"&&typeof e!="function"||e===null)throw new TypeError("Object.keys called on non-object");var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t});