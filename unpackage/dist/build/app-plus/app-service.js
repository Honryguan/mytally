var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'position:relative;'])
Z([[7],[3,'autoplay']])
Z([3,'__e'])
Z([[7],[3,'circular']])
Z([3,'swiper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'duration']])
Z([[7],[3,'swiperActiveColor']])
Z([[7],[3,'swiperColor']])
Z([[7],[3,'swiperDots']])
Z([[7],[3,'interval']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'swiperList']])
Z(z[11])
Z([[2,'<'],[[7],[3,'index']],[1,10]])
Z(z[2])
Z([3,'swiper-item-view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'clickItem']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'swiperList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'__l'])
Z([3,'swiper-img'])
Z([[2,'?:'],[[2,'==='],[[7],[3,'activeIndex']],[[6],[[7],[3,'item']],[3,'id']]],[1,'#4cd964'],[[6],[[7],[3,'item']],[3,'color']]])
Z([3,'40'])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'>'],[[6],[[7],[3,'swiperList']],[3,'length']],[1,10]])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[11])
Z([[2,'&&'],[[2,'>'],[[7],[3,'index']],[1,9]],[[2,'<'],[[7],[3,'index']],[1,20]]])
Z(z[2])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'customize']],[1,true]],[[2,'=='],[[7],[3,'swiperDots']],[1,false]]])
Z(z[11])
Z(z[12])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[11])
Z([[2,'&&'],[[2,'<'],[[7],[3,'index']],[1,2]],[[2,'>'],[[6],[[7],[3,'swiperList']],[3,'length']],[1,10]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'width']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[1,'uni-grid-item__box data-v-48473e85']],[[2,'?:'],[[7],[3,'showBorder']],[1,'uni-grid-item--border'],[1,'']]],[[2,'?:'],[[2,'&&'],[[7],[3,'showBorder']],[[2,'<'],[[7],[3,'index']],[[7],[3,'column']]]],[1,'uni-grid-item--border-top'],[1,'']]],[[2,'?:'],[[7],[3,'highlight']],[1,'uni-highlight'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'border-right-color:'],[[7],[3,'borderColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'border-bottom-color:'],[[7],[3,'borderColor']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'border-top-color:'],[[7],[3,'borderColor']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-list-item data-v-509b64a9']],[[2,'?:'],[[7],[3,'disabled']],[1,'uni-list-item--disabled'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[2,'||'],[[7],[3,'disabled']],[[7],[3,'showSwitch']]],[1,''],[1,'uni-list-item--hover']])
Z([[4],[[5],[[5],[1,'uni-list-item__container data-v-509b64a9']],[[2,'?:'],[[7],[3,'isFirstChild']],[1,'uni-list-item--first'],[1,'']]]])
Z([[7],[3,'thumb']])
Z([[7],[3,'showExtraIcon']])
Z([3,'__l'])
Z([3,'uni-icon-wrapper data-v-509b64a9'])
Z([[6],[[7],[3,'extraIcon']],[3,'color']])
Z([[6],[[7],[3,'extraIcon']],[3,'size']])
Z([[6],[[7],[3,'extraIcon']],[3,'type']])
Z([3,'1'])
Z([3,'uni-list-item__content data-v-509b64a9'])
Z([[7],[3,'note']])
Z([3,'uni-list-item__content-right data-v-509b64a9'])
Z([[7],[3,'money']])
Z(z[14])
Z([[2,'||'],[[2,'||'],[[7],[3,'showBadge']],[[7],[3,'showArrow']]],[[7],[3,'showSwitch']]])
Z([3,'uni-list-item__extra data-v-509b64a9'])
Z([[7],[3,'showBadge']])
Z(z[7])
Z([3,'data-v-509b64a9'])
Z([[7],[3,'badgeText']])
Z([[7],[3,'badgeType']])
Z([3,'2'])
Z([[7],[3,'showSwitch']])
Z([[7],[3,'showArrow']])
Z(z[7])
Z(z[8])
Z([3,'#bbb'])
Z([1,20])
Z([3,'arrowright'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-section data-v-d272f59e'])
Z([[7],[3,'type']])
Z([3,'uni-section__content data-v-d272f59e'])
Z([[7],[3,'subTitle']])
Z([3,'uni-section__content-right data-v-d272f59e'])
Z([[7],[3,'sumTitle']])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'w-picker-cnt']],[[2,'?:'],[[7],[3,'showPicker']],[1,'show'],[1,'']]]])
Z([[2,'=='],[[7],[3,'mode']],[1,'linkage']])
Z([[2,'=='],[[7],[3,'mode']],[1,'half']])
Z([[2,'=='],[[7],[3,'mode']],[1,'date']])
Z([[2,'=='],[[7],[3,'mode']],[1,'yearMonth']])
Z([[2,'=='],[[7],[3,'mode']],[1,'dateTime']])
Z([[2,'=='],[[7],[3,'mode']],[1,'range']])
Z([[2,'=='],[[7],[3,'mode']],[1,'time']])
Z([[2,'=='],[[7],[3,'mode']],[1,'region']])
Z([3,'__e'])
Z(z[9])
Z(z[9])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindChange']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'pickVal']])
Z([[2,'!'],[[7],[3,'hideArea']]])
Z([[2,'=='],[[7],[3,'mode']],[1,'selector']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limit']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limitHour']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[0])
Z([[7],[3,'extraIcon1']])
Z([[6],[[7],[3,'$root']],[3,'f1']])
Z([[7],[3,'todayNote']])
Z([1,true])
Z([3,'今天'])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
Z(z[0])
Z([[7],[3,'extraIcon2']])
Z([[6],[[7],[3,'$root']],[3,'f2']])
Z([[7],[3,'weekBetweenTime']])
Z(z[7])
Z([3,'本周'])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'1']])
Z(z[0])
Z([[7],[3,'extraIcon3']])
Z([[6],[[7],[3,'$root']],[3,'f3']])
Z([[7],[3,'monthBetweenTime']])
Z(z[7])
Z([3,'本月'])
Z([[2,'+'],[[2,'+'],[1,'4'],[1,',']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickItem']],[[4],[[5],[[4],[[5],[1,'clickItem']]]]]]]]])
Z([[7],[3,'swiperList']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'uni-section-top'])
Z([[7],[3,'sumTitle']])
Z([3,'今天'])
Z([3,'line'])
Z([3,'1'])
Z(z[0])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'moneyList']])
Z(z[9])
Z([3,'12'])
Z(z[0])
Z([[7],[3,'extraIcon1']])
Z([[6],[[7],[3,'item']],[3,'money']])
Z([[6],[[7],[3,'item']],[3,'time']])
Z([1,false])
Z([1,true])
Z([[6],[[7],[3,'item']],[3,'typeName']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'3-'],[[7],[3,'index']]],[1,',']],[1,'2']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/cg-swiper/cg-swiper.wxml','./components/uni-badge/uni-badge.wxml','./components/uni-grid-item/uni-grid-item.wxml','./components/uni-grid/uni-grid.wxml','./components/uni-icons/uni-icons.wxml','./components/uni-list-item/uni-list-item.wxml','./components/uni-list/uni-list.wxml','./components/uni-section/uni-section.wxml','./components/w-picker/w-picker.wxml','./pages/chart/chart.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/node/node.wxml','./pages/today/today.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'style',0,e,s,gg)
var oD=_mz(z,'swiper',['autoplay',1,'bindchange',1,'circular',2,'class',3,'data-event-opts',4,'duration',5,'indicatorActiveColor',6,'indicatorColor',7,'indicatorDots',8,'interval',9],[],e,s,gg)
var cF=_v()
_(oD,cF)
var hG=function(cI,oH,oJ,gg){
var aL=_v()
_(oJ,aL)
if(_oz(z,15,cI,oH,gg)){aL.wxVkey=1
var tM=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],cI,oH,gg)
var eN=_mz(z,'uni-icons',['bind:__l',19,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],cI,oH,gg)
_(tM,eN)
_(aL,tM)
}
aL.wxXCkey=1
aL.wxXCkey=3
return oJ
}
cF.wxXCkey=4
_2z(z,13,hG,e,s,gg,cF,'item','index','index')
var fE=_v()
_(oD,fE)
if(_oz(z,25,e,s,gg)){fE.wxVkey=1
var bO=_v()
_(fE,bO)
var oP=function(oR,xQ,fS,gg){
var hU=_v()
_(fS,hU)
if(_oz(z,30,oR,xQ,gg)){hU.wxVkey=1
var oV=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2],[],oR,xQ,gg)
var cW=_mz(z,'uni-icons',['bind:__l',34,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],oR,xQ,gg)
_(oV,cW)
_(hU,oV)
}
hU.wxXCkey=1
hU.wxXCkey=3
return fS
}
bO.wxXCkey=4
_2z(z,28,oP,e,s,gg,bO,'item','index','index')
}
fE.wxXCkey=1
fE.wxXCkey=3
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,40,e,s,gg)){xC.wxVkey=1
var oX=_v()
_(xC,oX)
var lY=function(t1,aZ,e2,gg){
var o4=_v()
_(e2,o4)
if(_oz(z,45,t1,aZ,gg)){o4.wxVkey=1
}
o4.wxXCkey=1
return e2
}
oX.wxXCkey=2
_2z(z,43,lY,e,s,gg,oX,'item','index','index')
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var o6=_v()
_(r,o6)
if(_oz(z,0,e,s,gg)){o6.wxVkey=1
}
o6.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var c8=_v()
_(r,c8)
if(_oz(z,0,e,s,gg)){c8.wxVkey=1
var h9=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var o0=_n('slot')
_(h9,o0)
_(c8,h9)
}
c8.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oBB=_n('slot')
_(r,oBB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var tEB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var eFB=_n('view')
_rz(z,eFB,'class',4,e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,5,e,s,gg)){bGB.wxVkey=1
}
else{bGB.wxVkey=2
var xIB=_v()
_(bGB,xIB)
if(_oz(z,6,e,s,gg)){xIB.wxVkey=1
var oJB=_mz(z,'uni-icons',['bind:__l',7,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(xIB,oJB)
}
xIB.wxXCkey=1
xIB.wxXCkey=3
}
var fKB=_n('view')
_rz(z,fKB,'class',13,e,s,gg)
var hMB=_n('slot')
_(fKB,hMB)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,14,e,s,gg)){cLB.wxVkey=1
}
cLB.wxXCkey=1
_(eFB,fKB)
var oNB=_n('view')
_rz(z,oNB,'class',15,e,s,gg)
var lQB=_n('slot')
_(oNB,lQB)
var cOB=_v()
_(oNB,cOB)
if(_oz(z,16,e,s,gg)){cOB.wxVkey=1
}
var oPB=_v()
_(oNB,oPB)
if(_oz(z,17,e,s,gg)){oPB.wxVkey=1
}
cOB.wxXCkey=1
oPB.wxXCkey=1
_(eFB,oNB)
var oHB=_v()
_(eFB,oHB)
if(_oz(z,18,e,s,gg)){oHB.wxVkey=1
var aRB=_n('view')
_rz(z,aRB,'class',19,e,s,gg)
var tSB=_v()
_(aRB,tSB)
if(_oz(z,20,e,s,gg)){tSB.wxVkey=1
var oVB=_mz(z,'uni-badge',['bind:__l',21,'class',1,'text',2,'type',3,'vueId',4],[],e,s,gg)
_(tSB,oVB)
}
var eTB=_v()
_(aRB,eTB)
if(_oz(z,26,e,s,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(aRB,bUB)
if(_oz(z,27,e,s,gg)){bUB.wxVkey=1
var xWB=_mz(z,'uni-icons',['bind:__l',28,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(bUB,xWB)
}
tSB.wxXCkey=1
tSB.wxXCkey=3
eTB.wxXCkey=1
bUB.wxXCkey=1
bUB.wxXCkey=3
_(oHB,aRB)
}
bGB.wxXCkey=1
bGB.wxXCkey=3
oHB.wxXCkey=1
oHB.wxXCkey=3
_(tEB,eFB)
_(r,tEB)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var fYB=_n('slot')
_(r,fYB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var h1B=_n('view')
_rz(z,h1B,'class',0,e,s,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,1,e,s,gg)){o2B.wxVkey=1
}
var c3B=_n('view')
_rz(z,c3B,'class',2,e,s,gg)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,3,e,s,gg)){o4B.wxVkey=1
}
var l5B=_n('view')
_rz(z,l5B,'class',4,e,s,gg)
var a6B=_v()
_(l5B,a6B)
if(_oz(z,5,e,s,gg)){a6B.wxVkey=1
}
var t7B=_v()
_(l5B,t7B)
if(_oz(z,6,e,s,gg)){t7B.wxVkey=1
}
a6B.wxXCkey=1
t7B.wxXCkey=1
_(c3B,l5B)
o4B.wxXCkey=1
_(h1B,c3B)
var e8B=_n('slot')
_(h1B,e8B)
o2B.wxXCkey=1
_(r,h1B)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var o0B=_n('view')
_rz(z,o0B,'class',0,e,s,gg)
var xAC=_v()
_(o0B,xAC)
if(_oz(z,1,e,s,gg)){xAC.wxVkey=1
}
var oBC=_v()
_(o0B,oBC)
if(_oz(z,2,e,s,gg)){oBC.wxVkey=1
}
var fCC=_v()
_(o0B,fCC)
if(_oz(z,3,e,s,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(o0B,cDC)
if(_oz(z,4,e,s,gg)){cDC.wxVkey=1
}
var hEC=_v()
_(o0B,hEC)
if(_oz(z,5,e,s,gg)){hEC.wxVkey=1
}
var oFC=_v()
_(o0B,oFC)
if(_oz(z,6,e,s,gg)){oFC.wxVkey=1
}
var cGC=_v()
_(o0B,cGC)
if(_oz(z,7,e,s,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(o0B,oHC)
if(_oz(z,8,e,s,gg)){oHC.wxVkey=1
var eLC=_mz(z,'picker-view',['bindchange',9,'bindtouchend',1,'bindtouchstart',2,'data-event-opts',3,'indicatorStyle',4,'value',5],[],e,s,gg)
var bMC=_v()
_(eLC,bMC)
if(_oz(z,15,e,s,gg)){bMC.wxVkey=1
}
bMC.wxXCkey=1
_(oHC,eLC)
}
var lIC=_v()
_(o0B,lIC)
if(_oz(z,16,e,s,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(o0B,aJC)
if(_oz(z,17,e,s,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(o0B,tKC)
if(_oz(z,18,e,s,gg)){tKC.wxVkey=1
}
xAC.wxXCkey=1
oBC.wxXCkey=1
fCC.wxXCkey=1
cDC.wxXCkey=1
hEC.wxXCkey=1
oFC.wxXCkey=1
cGC.wxXCkey=1
oHC.wxXCkey=1
lIC.wxXCkey=1
aJC.wxXCkey=1
tKC.wxXCkey=1
_(r,o0B)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oPC=_mz(z,'uni-list',['bind:__l',0,'vueId',1,'vueSlots',1],[],e,s,gg)
var fQC=_mz(z,'uni-list-item',['bind:__l',3,'extraIcon',1,'money',2,'note',3,'showExtraIcon',4,'title',5,'vueId',6],[],e,s,gg)
_(oPC,fQC)
var cRC=_mz(z,'uni-list-item',['bind:__l',10,'extraIcon',1,'money',2,'note',3,'showExtraIcon',4,'title',5,'vueId',6],[],e,s,gg)
_(oPC,cRC)
var hSC=_mz(z,'uni-list-item',['bind:__l',17,'extraIcon',1,'money',2,'note',3,'showExtraIcon',4,'title',5,'vueId',6],[],e,s,gg)
_(oPC,hSC)
_(r,oPC)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oVC=_mz(z,'cg-swiper',['bind:__l',0,'bind:clickItem',1,'data-event-opts',1,'swiperList',2,'vueId',3],[],e,s,gg)
_(r,oVC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var aXC=_n('view')
var tYC=_mz(z,'uni-section',['bind:__l',0,'class',1,'sumTitle',1,'title',2,'type',3,'vueId',4],[],e,s,gg)
_(aXC,tYC)
var eZC=_mz(z,'uni-list',['bind:__l',6,'vueId',1,'vueSlots',2],[],e,s,gg)
var b1C=_v()
_(eZC,b1C)
var o2C=function(o4C,x3C,f5C,gg){
var h7C=_mz(z,'uni-list-item',['badgeText',13,'bind:__l',1,'extraIcon',2,'money',3,'note',4,'showArrow',5,'showExtraIcon',6,'title',7,'vueId',8],[],o4C,x3C,gg)
_(f5C,h7C)
return f5C
}
b1C.wxXCkey=4
_2z(z,11,o2C,e,s,gg,b1C,'item','index','index')
_(aXC,eZC)
_(r,aXC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/me/me","pages/chart/chart","pages/today/today","pages/node/node"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/chart/chart","iconPath":"static/tabBarIco/search.png","selectedIconPath":"static/tabBarIco/search_sel.png","text":"图表"},{"pagePath":"pages/index/index","iconPath":"static/tabBarIco/index.png","selectedIconPath":"static/tabBarIco/index_sel.png","text":"首页"},{"pagePath":"pages/me/me","iconPath":"static/tabBarIco/me.png","selectedIconPath":"static/tabBarIco/me_sel.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"极简记账","compilerVersion":"2.4.6","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/cg-swiper/cg-swiper.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['components/cg-swiper/cg-swiper.wxml']=$gwx('./components/cg-swiper/cg-swiper.wxml');

__wxAppCode__['components/uni-badge/uni-badge.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-badge/uni-badge.wxml']=$gwx('./components/uni-badge/uni-badge.wxml');

__wxAppCode__['components/uni-grid-item/uni-grid-item.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-grid-item/uni-grid-item.wxml']=$gwx('./components/uni-grid-item/uni-grid-item.wxml');

__wxAppCode__['components/uni-grid/uni-grid.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-grid/uni-grid.wxml']=$gwx('./components/uni-grid/uni-grid.wxml');

__wxAppCode__['components/uni-icons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icons/uni-icons.wxml']=$gwx('./components/uni-icons/uni-icons.wxml');

__wxAppCode__['components/uni-list-item/uni-list-item.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons","uni-badge":"/components/uni-badge/uni-badge"},"component":true};
__wxAppCode__['components/uni-list-item/uni-list-item.wxml']=$gwx('./components/uni-list-item/uni-list-item.wxml');

__wxAppCode__['components/uni-list/uni-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-list/uni-list.wxml']=$gwx('./components/uni-list/uni-list.wxml');

__wxAppCode__['components/uni-section/uni-section.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-section/uni-section.wxml']=$gwx('./components/uni-section/uni-section.wxml');

__wxAppCode__['components/w-picker/w-picker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/w-picker/w-picker.wxml']=$gwx('./components/w-picker/w-picker.wxml');

__wxAppCode__['pages/chart/chart.json']={"navigationBarTitleText":"图表","usingComponents":{"w-picker":"/components/w-picker/w-picker"}};
__wxAppCode__['pages/chart/chart.wxml']=$gwx('./pages/chart/chart.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"极简记账","usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-icons":"/components/uni-icons/uni-icons"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.json']={"navigationBarTitleText":"我","usingComponents":{}};
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/node/node.json']={"navigationBarTitleText":"记一笔","usingComponents":{"uni-grid":"/components/uni-grid/uni-grid","uni-grid-item":"/components/uni-grid-item/uni-grid-item","uni-badge":"/components/uni-badge/uni-badge","cg-swiper":"/components/cg-swiper/cg-swiper","uni-icons":"/components/uni-icons/uni-icons"}};
__wxAppCode__['pages/node/node.wxml']=$gwx('./pages/node/node.wxml');

__wxAppCode__['pages/today/today.json']={"navigationBarTitleText":"今日详情","usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","uni-icons":"/components/uni-icons/uni-icons","uni-section":"/components/uni-section/uni-section"}};
__wxAppCode__['pages/today/today.wxml']=$gwx('./pages/today/today.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"2dbe":function(e,n,t){"use strict";t.r(n);var o=t("9a45"),u=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,function(){return o[e]})}(c);n["default"]=u.a},"57ee":function(e,n,t){"use strict";var o=t("c7c6"),u=t.n(o);u.a},"8acb":function(e,n,t){"use strict";(function(e){t("eb38"),t("921b");var n=u(t("66fd")),o=u(t("9783"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){r(e,n,t[n])})}return e}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default.config.productionTip=!1,o.default.mpType="app";var a=new n.default(c({},o.default));e(a).$mount()}).call(this,t("6e42")["createApp"])},9783:function(e,n,t){"use strict";t.r(n);var o=t("2dbe");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("57ee");var c,r,a=t("2877"),l=Object(a["a"])(o["default"],c,r,!1,null,null,null);n["default"]=l.exports},"9a45":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};n.default=t}).call(this,t("0de9")["default"])},c7c6:function(e,n,t){}},[["8acb","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var i, o, c = n[0], s = n[1], p = n[2], a = 0, l = []; a < c.length; a++) {
      o = c[a], r[o] && l.push(r[o][0]), r[o] = 0;
    }

    for (i in s) {
      Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
    }

    m && m(n);

    while (l.length) {
      l.shift()();
    }

    return u.push.apply(u, p || []), t();
  }

  function t() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], i = !0, o = 1; o < t.length; o++) {
        var c = t[o];
        0 !== r[c] && (i = !1);
      }

      i && (u.splice(n--, 1), e = s(s.s = t[0]));
    }

    return e;
  }

  var i = {},
      o = {
    "common/runtime": 0
  },
      r = {
    "common/runtime": 0
  },
      u = [];

  function c(e) {
    return s.p + "" + e + ".js";
  }

  function s(n) {
    if (i[n]) return i[n].exports;
    var t = i[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, s), t.l = !0, t.exports;
  }

  s.e = function (e) {
    var n = [],
        t = {
      "components/uni-icons/uni-icons": 1,
      "components/uni-list-item/uni-list-item": 1,
      "components/uni-list/uni-list": 1,
      "components/w-picker/w-picker": 1,
      "components/uni-section/uni-section": 1,
      "components/cg-swiper/cg-swiper": 1,
      "components/uni-badge/uni-badge": 1,
      "components/uni-grid-item/uni-grid-item": 1,
      "components/uni-grid/uni-grid": 1
    };
    o[e] ? n.push(o[e]) : 0 !== o[e] && t[e] && n.push(o[e] = new Promise(function (n, t) {
      for (var i = ({
        "components/uni-icons/uni-icons": "components/uni-icons/uni-icons",
        "components/uni-list-item/uni-list-item": "components/uni-list-item/uni-list-item",
        "components/uni-list/uni-list": "components/uni-list/uni-list",
        "components/w-picker/w-picker": "components/w-picker/w-picker",
        "components/uni-section/uni-section": "components/uni-section/uni-section",
        "components/cg-swiper/cg-swiper": "components/cg-swiper/cg-swiper",
        "components/uni-badge/uni-badge": "components/uni-badge/uni-badge",
        "components/uni-grid-item/uni-grid-item": "components/uni-grid-item/uni-grid-item",
        "components/uni-grid/uni-grid": "components/uni-grid/uni-grid"
      }[e] || e) + ".wxss", r = s.p + i, u = document.getElementsByTagName("link"), c = 0; c < u.length; c++) {
        var p = u[c],
            a = p.getAttribute("data-href") || p.getAttribute("href");
        if ("stylesheet" === p.rel && (a === i || a === r)) return n();
      }

      var l = document.getElementsByTagName("style");

      for (c = 0; c < l.length; c++) {
        p = l[c], a = p.getAttribute("data-href");
        if (a === i || a === r) return n();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = n, m.onerror = function (n) {
        var i = n && n.target && n.target.src || r,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
        u.request = i, delete o[e], m.parentNode.removeChild(m), t(u);
      }, m.href = r;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(m);
    }).then(function () {
      o[e] = 0;
    }));
    var i = r[e];
    if (0 !== i) if (i) n.push(i[2]);else {
      var u = new Promise(function (n, t) {
        i = r[e] = [n, t];
      });
      n.push(i[2] = u);
      var p,
          a = document.createElement("script");
      a.charset = "utf-8", a.timeout = 120, s.nc && a.setAttribute("nonce", s.nc), a.src = c(e), p = function p(n) {
        a.onerror = a.onload = null, clearTimeout(l);
        var t = r[e];

        if (0 !== t) {
          if (t) {
            var i = n && ("load" === n.type ? "missing" : n.type),
                o = n && n.target && n.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + o + ")");
            u.type = i, u.request = o, t[1](u);
          }

          r[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        p({
          type: "timeout",
          target: a
        });
      }, 12e4);
      a.onerror = a.onload = p, document.head.appendChild(a);
    }
    return Promise.all(n);
  }, s.m = e, s.c = i, s.d = function (e, n, t) {
    s.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, n) {
    if (1 & n && (e = s(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (s.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var i in e) {
      s.d(t, i, function (n) {
        return e[n];
      }.bind(null, i));
    }
    return t;
  }, s.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(n, "a", n), n;
  }, s.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, s.p = "/", s.oe = function (e) {
    throw console.error(e), e;
  };
  var p = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = p.push.bind(p);
  p.push = n, p = p.slice();

  for (var l = 0; l < p.length; l++) {
    n(p[l]);
  }

  var m = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0b3d":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],n=t;l.default=n},"0de9":function(e,l,a){"use strict";function t(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function n(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var n=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(n){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=t(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),i="";if(n.length>1){var r=n.pop();i=n.join("---COMMA---"),0===r.indexOf(" at ")?i+=r:i+="---COMMA---"+r}else i=n[0];return i}Object.defineProperty(l,"__esModule",{value:!0}),l.default=n},2877:function(e,l,a){"use strict";function t(e,l,a,t,n,i,r,u){var o,v="function"===typeof e?e.options:e;if(l&&(v.render=l,v.staticRenderFns=a,v._compiled=!0),t&&(v.functional=!0),i&&(v._scopeId="data-v-"+i),r?(o=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},v._ssrRegister=o):n&&(o=u?function(){n.call(this,this.$root.$options.shadowRoot)}:n),o)if(v.functional){v._injectStyles=o;var s=v.render;v.render=function(e,l){return o.call(l),s(e,l)}}else{var b=v.beforeCreate;v.beforeCreate=b?[].concat(b,o):[o]}return{exports:e,options:v}}a.d(l,"a",function(){return t})},"3b57":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={appid:"__UNI__33EA9EA"};l.default=t},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function t(e){return void 0===e||null===e}function n(e){return void 0!==e&&null!==e}function i(e){return!0===e}function r(e){return!1===e}function u(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function o(e){return null!==e&&"object"===typeof e}var v=Object.prototype.toString;function s(e){return"[object Object]"===v.call(e)}function b(e){return"[object RegExp]"===v.call(e)}function c(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function h(e){return n(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function f(e){return null==e?"":Array.isArray(e)||s(e)&&e.toString===v?JSON.stringify(e,null,2):String(e)}function p(e){var l=parseFloat(e);return isNaN(l)?e:l}function d(e,l){for(var a=Object.create(null),t=e.split(","),n=0;n<t.length;n++)a[t[n]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}d("slot,component",!0);var g=d("key,ref,slot,slot-scope,is");function y(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var x=Object.prototype.hasOwnProperty;function m(e,l){return x.call(e,l)}function _(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,A=_(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),S=_(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),T=/\B([A-Z])/g,P=_(function(e){return e.replace(T,"-$1").toLowerCase()});function D(e,l){function a(a){var t=arguments.length;return t?t>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function k(e,l){return e.bind(l)}var O=Function.prototype.bind?k:D;function M(e,l){l=l||0;var a=e.length-l,t=new Array(a);while(a--)t[a]=e[a+l];return t}function $(e,l){for(var a in l)e[a]=l[a];return e}function F(e){for(var l={},a=0;a<e.length;a++)e[a]&&$(l,e[a]);return l}function C(e,l,a){}var R=function(e,l,a){return!1},L=function(e){return e};function I(e,l){if(e===l)return!0;var a=o(e),t=o(l);if(!a||!t)return!a&&!t&&String(e)===String(l);try{var n=Array.isArray(e),i=Array.isArray(l);if(n&&i)return e.length===l.length&&e.every(function(e,a){return I(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(n||i)return!1;var r=Object.keys(e),u=Object.keys(l);return r.length===u.length&&r.every(function(a){return I(e[a],l[a])})}catch(v){return!1}}function E(e,l){for(var a=0;a<e.length;a++)if(I(e[a],l))return a;return-1}function j(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var z=["component","directive","filter"],N=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:R,isReservedAttr:R,isUnknownElement:R,getTagNamespace:C,parsePlatformTagName:L,mustUseProp:R,async:!0,_lifecycleHooks:N},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function V(e,l,a,t){Object.defineProperty(e,l,{value:a,enumerable:!!t,writable:!0,configurable:!0})}var q=new RegExp("[^"+W.source+".$_\\d]");function U(e){if(!q.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var X,G="__proto__"in{},J="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=Y&&WXEnvironment.platform.toLowerCase(),Z=J&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),ee=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),le=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===K),ae=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(J)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(en){}var ne=function(){return void 0===X&&(X=!J&&!Y&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),X},ie=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"===typeof e&&/native code/.test(e.toString())}var ue,oe="undefined"!==typeof Symbol&&re(Symbol)&&"undefined"!==typeof Reflect&&re(Reflect.ownKeys);ue="undefined"!==typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ve=C,se=0,be=function(){this.id=se++,this.subs=[]};function ce(e){be.SharedObject.targetStack.push(e),be.SharedObject.target=e}function he(){be.SharedObject.targetStack.pop(),be.SharedObject.target=be.SharedObject.targetStack[be.SharedObject.targetStack.length-1]}be.prototype.addSub=function(e){this.subs.push(e)},be.prototype.removeSub=function(e){y(this.subs,e)},be.prototype.depend=function(){be.SharedObject.target&&be.SharedObject.target.addDep(this)},be.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},be.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},be.SharedObject.target=null,be.SharedObject.targetStack=[];var fe=function(e,l,a,t,n,i,r,u){this.tag=e,this.data=l,this.children=a,this.text=t,this.elm=n,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=r,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=u,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},pe={child:{configurable:!0}};pe.child.get=function(){return this.componentInstance},Object.defineProperties(fe.prototype,pe);var de=function(e){void 0===e&&(e="");var l=new fe;return l.text=e,l.isComment=!0,l};function ge(e){return new fe(void 0,void 0,void 0,String(e))}function ye(e){var l=new fe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var xe=Array.prototype,me=Object.create(xe),_e=["push","pop","shift","unshift","splice","sort","reverse"];_e.forEach(function(e){var l=xe[e];V(me,e,function(){var a=[],t=arguments.length;while(t--)a[t]=arguments[t];var n,i=l.apply(this,a),r=this.__ob__;switch(e){case"push":case"unshift":n=a;break;case"splice":n=a.slice(2);break}return n&&r.observeArray(n),r.dep.notify(),i})});var we=Object.getOwnPropertyNames(me),Ae=!0;function Se(e){Ae=e}var Te=function(e){this.value=e,this.dep=new be,this.vmCount=0,V(e,"__ob__",this),Array.isArray(e)?(G?e.push!==e.__proto__.push?De(e,me,we):Pe(e,me):De(e,me,we),this.observeArray(e)):this.walk(e)};function Pe(e,l){e.__proto__=l}function De(e,l,a){for(var t=0,n=a.length;t<n;t++){var i=a[t];V(e,i,l[i])}}function ke(e,l){var a;if(o(e)&&!(e instanceof fe))return m(e,"__ob__")&&e.__ob__ instanceof Te?a=e.__ob__:Ae&&!ne()&&(Array.isArray(e)||s(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new Te(e)),l&&a&&a.vmCount++,a}function Oe(e,l,a,t,n){var i=new be,r=Object.getOwnPropertyDescriptor(e,l);if(!r||!1!==r.configurable){var u=r&&r.get,o=r&&r.set;u&&!o||2!==arguments.length||(a=e[l]);var v=!n&&ke(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=u?u.call(e):a;return be.SharedObject.target&&(i.depend(),v&&(v.dep.depend(),Array.isArray(l)&&Fe(l))),l},set:function(l){var t=u?u.call(e):a;l===t||l!==l&&t!==t||u&&!o||(o?o.call(e,l):a=l,v=!n&&ke(l),i.notify())}})}}function Me(e,l,a){if(Array.isArray(e)&&c(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var t=e.__ob__;return e._isVue||t&&t.vmCount?a:t?(Oe(t.value,l,a),t.dep.notify(),a):(e[l]=a,a)}function $e(e,l){if(Array.isArray(e)&&c(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||m(e,l)&&(delete e[l],a&&a.dep.notify())}}function Fe(e){for(var l=void 0,a=0,t=e.length;a<t;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Fe(l)}Te.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)Oe(e,l[a])},Te.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)ke(e[l])};var Ce=B.optionMergeStrategies;function Re(e,l){if(!l)return e;for(var a,t,n,i=oe?Reflect.ownKeys(l):Object.keys(l),r=0;r<i.length;r++)a=i[r],"__ob__"!==a&&(t=e[a],n=l[a],m(e,a)?t!==n&&s(t)&&s(n)&&Re(t,n):Me(e,a,n));return e}function Le(e,l,a){return a?function(){var t="function"===typeof l?l.call(a,a):l,n="function"===typeof e?e.call(a,a):e;return t?Re(t,n):n}:l?e?function(){return Re("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Ie(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Ee(a):a}function Ee(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function je(e,l,a,t){var n=Object.create(e||null);return l?$(n,l):n}Ce.data=function(e,l,a){return a?Le(e,l,a):l&&"function"!==typeof l?e:Le(e,l)},N.forEach(function(e){Ce[e]=Ie}),z.forEach(function(e){Ce[e+"s"]=je}),Ce.watch=function(e,l,a,t){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var n={};for(var i in $(n,e),l){var r=n[i],u=l[i];r&&!Array.isArray(r)&&(r=[r]),n[i]=r?r.concat(u):Array.isArray(u)?u:[u]}return n},Ce.props=Ce.methods=Ce.inject=Ce.computed=function(e,l,a,t){if(!e)return l;var n=Object.create(null);return $(n,e),l&&$(n,l),n},Ce.provide=Le;var ze=function(e,l){return void 0===l?e:l};function Ne(e,l){var a=e.props;if(a){var t,n,i,r={};if(Array.isArray(a)){t=a.length;while(t--)n=a[t],"string"===typeof n&&(i=A(n),r[i]={type:null})}else if(s(a))for(var u in a)n=a[u],i=A(u),r[i]=s(n)?n:{type:n};else 0;e.props=r}}function Be(e,l){var a=e.inject;if(a){var t=e.inject={};if(Array.isArray(a))for(var n=0;n<a.length;n++)t[a[n]]={from:a[n]};else if(s(a))for(var i in a){var r=a[i];t[i]=s(r)?$({from:i},r):{from:r}}else 0}}function We(e){var l=e.directives;if(l)for(var a in l){var t=l[a];"function"===typeof t&&(l[a]={bind:t,update:t})}}function He(e,l,a){if("function"===typeof l&&(l=l.options),Ne(l,a),Be(l,a),We(l),!l._base&&(l.extends&&(e=He(e,l.extends,a)),l.mixins))for(var t=0,n=l.mixins.length;t<n;t++)e=He(e,l.mixins[t],a);var i,r={};for(i in e)u(i);for(i in l)m(e,i)||u(i);function u(t){var n=Ce[t]||ze;r[t]=n(e[t],l[t],a,t)}return r}function Ve(e,l,a,t){if("string"===typeof a){var n=e[l];if(m(n,a))return n[a];var i=A(a);if(m(n,i))return n[i];var r=S(i);if(m(n,r))return n[r];var u=n[a]||n[i]||n[r];return u}}function qe(e,l,a,t){var n=l[e],i=!m(a,e),r=a[e],u=Je(Boolean,n.type);if(u>-1)if(i&&!m(n,"default"))r=!1;else if(""===r||r===P(e)){var o=Je(String,n.type);(o<0||u<o)&&(r=!0)}if(void 0===r){r=Ue(t,n,e);var v=Ae;Se(!0),ke(r),Se(v)}return r}function Ue(e,l,a){if(m(l,"default")){var t=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof t&&"Function"!==Xe(l.type)?t.call(e):t}}function Xe(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function Ge(e,l){return Xe(e)===Xe(l)}function Je(e,l){if(!Array.isArray(l))return Ge(l,e)?0:-1;for(var a=0,t=l.length;a<t;a++)if(Ge(l[a],e))return a;return-1}function Ye(e,l,a){ce();try{if(l){var t=l;while(t=t.$parent){var n=t.$options.errorCaptured;if(n)for(var i=0;i<n.length;i++)try{var r=!1===n[i].call(t,e,l,a);if(r)return}catch(en){Ze(en,t,"errorCaptured hook")}}}Ze(e,l,a)}finally{he()}}function Ke(e,l,a,t,n){var i;try{i=a?e.apply(l,a):e.call(l),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(e){return Ye(e,t,n+" (Promise/async)")}),i._handled=!0)}catch(en){Ye(en,t,n)}return i}function Ze(e,l,a){if(B.errorHandler)try{return B.errorHandler.call(null,e,l,a)}catch(en){en!==e&&Qe(en,null,"config.errorHandler")}Qe(e,l,a)}function Qe(e,l,a){if(!J&&!Y||"undefined"===typeof console)throw e;console.error(e)}var el,ll=[],al=!1;function tl(){al=!1;var e=ll.slice(0);ll.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&re(Promise)){var nl=Promise.resolve();el=function(){nl.then(tl),le&&setTimeout(C)}}else if(Q||"undefined"===typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())el="undefined"!==typeof setImmediate&&re(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var il=1,rl=new MutationObserver(tl),ul=document.createTextNode(String(il));rl.observe(ul,{characterData:!0}),el=function(){il=(il+1)%2,ul.data=String(il)}}function ol(e,l){var a;if(ll.push(function(){if(e)try{e.call(l)}catch(en){Ye(en,l,"nextTick")}else a&&a(l)}),al||(al=!0,el()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var vl=new ue;function sl(e){bl(e,vl),vl.clear()}function bl(e,l){var a,t,n=Array.isArray(e);if(!(!n&&!o(e)||Object.isFrozen(e)||e instanceof fe)){if(e.__ob__){var i=e.__ob__.dep.id;if(l.has(i))return;l.add(i)}if(n){a=e.length;while(a--)bl(e[a],l)}else{t=Object.keys(e),a=t.length;while(a--)bl(e[t[a]],l)}}}var cl=_(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:l}});function hl(e,l){function a(){var e=arguments,t=a.fns;if(!Array.isArray(t))return Ke(t,null,arguments,l,"v-on handler");for(var n=t.slice(),i=0;i<n.length;i++)Ke(n[i],null,e,l,"v-on handler")}return a.fns=e,a}function fl(e,l,a,n,r,u){var o,v,s,b;for(o in e)v=e[o],s=l[o],b=cl(o),t(v)||(t(s)?(t(v.fns)&&(v=e[o]=hl(v,u)),i(b.once)&&(v=e[o]=r(b.name,v,b.capture)),a(b.name,v,b.capture,b.passive,b.params)):v!==s&&(s.fns=v,e[o]=s));for(o in l)t(e[o])&&(b=cl(o),n(b.name,l[o],b.capture))}function pl(e,l,a){var i=l.options.props;if(!t(i)){var r={},u=e.attrs,o=e.props;if(n(u)||n(o))for(var v in i){var s=P(v);dl(r,o,v,s,!0)||dl(r,u,v,s,!1)}return r}}function dl(e,l,a,t,i){if(n(l)){if(m(l,a))return e[a]=l[a],i||delete l[a],!0;if(m(l,t))return e[a]=l[t],i||delete l[t],!0}return!1}function gl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function yl(e){return u(e)?[ge(e)]:Array.isArray(e)?ml(e):void 0}function xl(e){return n(e)&&n(e.text)&&r(e.isComment)}function ml(e,l){var a,r,o,v,s=[];for(a=0;a<e.length;a++)r=e[a],t(r)||"boolean"===typeof r||(o=s.length-1,v=s[o],Array.isArray(r)?r.length>0&&(r=ml(r,(l||"")+"_"+a),xl(r[0])&&xl(v)&&(s[o]=ge(v.text+r[0].text),r.shift()),s.push.apply(s,r)):u(r)?xl(v)?s[o]=ge(v.text+r):""!==r&&s.push(ge(r)):xl(r)&&xl(v)?s[o]=ge(v.text+r.text):(i(e._isVList)&&n(r.tag)&&t(r.key)&&n(l)&&(r.key="__vlist"+l+"_"+a+"__"),s.push(r)));return s}function _l(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function wl(e){var l=Al(e.$options.inject,e);l&&(Se(!1),Object.keys(l).forEach(function(a){Oe(e,a,l[a])}),Se(!0))}function Al(e,l){if(e){for(var a=Object.create(null),t=oe?Reflect.ownKeys(e):Object.keys(e),n=0;n<t.length;n++){var i=t[n];if("__ob__"!==i){var r=e[i].from,u=l;while(u){if(u._provided&&m(u._provided,r)){a[i]=u._provided[r];break}u=u.$parent}if(!u)if("default"in e[i]){var o=e[i].default;a[i]="function"===typeof o?o.call(l):o}else 0}}return a}}function Sl(e,l){if(!e||!e.length)return{};for(var a={},t=0,n=e.length;t<n;t++){var i=e[t],r=i.data;if(r&&r.attrs&&r.attrs.slot&&delete r.attrs.slot,i.context!==l&&i.fnContext!==l||!r||null==r.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(i):(a.default||(a.default=[])).push(i);else{var u=r.slot,o=a[u]||(a[u]=[]);"template"===i.tag?o.push.apply(o,i.children||[]):o.push(i)}}for(var v in a)a[v].every(Tl)&&delete a[v];return a}function Tl(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Pl(e,l,t){var n,i=Object.keys(l).length>0,r=e?!!e.$stable:!i,u=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(r&&t&&t!==a&&u===t.$key&&!i&&!t.$hasNormal)return t;for(var o in n={},e)e[o]&&"$"!==o[0]&&(n[o]=Dl(l,o,e[o]))}else n={};for(var v in l)v in n||(n[v]=kl(l,v));return e&&Object.isExtensible(e)&&(e._normalized=n),V(n,"$stable",r),V(n,"$key",u),V(n,"$hasNormal",i),n}function Dl(e,l,a){var t=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:yl(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:t,enumerable:!0,configurable:!0}),t}function kl(e,l){return function(){return e[l]}}function Ol(e,l){var a,t,i,r,u;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),t=0,i=e.length;t<i;t++)a[t]=l(e[t],t);else if("number"===typeof e)for(a=new Array(e),t=0;t<e;t++)a[t]=l(t+1,t);else if(o(e))if(oe&&e[Symbol.iterator]){a=[];var v=e[Symbol.iterator](),s=v.next();while(!s.done)a.push(l(s.value,a.length)),s=v.next()}else for(r=Object.keys(e),a=new Array(r.length),t=0,i=r.length;t<i;t++)u=r[t],a[t]=l(e[u],u,t);return n(a)||(a=[]),a._isVList=!0,a}function Ml(e,l,a,t){var n,i=this.$scopedSlots[e];i?(a=a||{},t&&(a=$($({},t),a)),n=i(a)||l):n=this.$slots[e]||l;var r=a&&a.slot;return r?this.$createElement("template",{slot:r},n):n}function $l(e){return Ve(this.$options,"filters",e,!0)||L}function Fl(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Cl(e,l,a,t,n){var i=B.keyCodes[l]||a;return n&&t&&!B.keyCodes[l]?Fl(n,t):i?Fl(i,e):t?P(t)!==l:void 0}function Rl(e,l,a,t,n){if(a)if(o(a)){var i;Array.isArray(a)&&(a=F(a));var r=function(r){if("class"===r||"style"===r||g(r))i=e;else{var u=e.attrs&&e.attrs.type;i=t||B.mustUseProp(l,u,r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var o=A(r),v=P(r);if(!(o in i)&&!(v in i)&&(i[r]=a[r],n)){var s=e.on||(e.on={});s["update:"+r]=function(e){a[r]=e}}};for(var u in a)r(u)}else;return e}function Ll(e,l){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!l?t:(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),El(t,"__static__"+e,!1),t)}function Il(e,l,a){return El(e,"__once__"+l+(a?"_"+a:""),!0),e}function El(e,l,a){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&jl(e[t],l+"_"+t,a);else jl(e,l,a)}function jl(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function zl(e,l){if(l)if(s(l)){var a=e.on=e.on?$({},e.on):{};for(var t in l){var n=a[t],i=l[t];a[t]=n?[].concat(n,i):i}}else;return e}function Nl(e,l,a,t){l=l||{$stable:!a};for(var n=0;n<e.length;n++){var i=e[n];Array.isArray(i)?Nl(i,l,a):i&&(i.proxy&&(i.fn.proxy=!0),l[i.key]=i.fn)}return t&&(l.$key=t),l}function Bl(e,l){for(var a=0;a<l.length;a+=2){var t=l[a];"string"===typeof t&&t&&(e[l[a]]=l[a+1])}return e}function Wl(e,l){return"string"===typeof e?l+e:e}function Hl(e){e._o=Il,e._n=p,e._s=f,e._l=Ol,e._t=Ml,e._q=I,e._i=E,e._m=Ll,e._f=$l,e._k=Cl,e._b=Rl,e._v=ge,e._e=de,e._u=Nl,e._g=zl,e._d=Bl,e._p=Wl}function Vl(e,l,t,n,r){var u,o=this,v=r.options;m(n,"_uid")?(u=Object.create(n),u._original=n):(u=n,n=n._original);var s=i(v._compiled),b=!s;this.data=e,this.props=l,this.children=t,this.parent=n,this.listeners=e.on||a,this.injections=Al(v.inject,n),this.slots=function(){return o.$slots||Pl(e.scopedSlots,o.$slots=Sl(t,n)),o.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pl(e.scopedSlots,this.slots())}}),s&&(this.$options=v,this.$slots=this.slots(),this.$scopedSlots=Pl(e.scopedSlots,this.$slots)),v._scopeId?this._c=function(e,l,a,t){var i=ta(u,e,l,a,t,b);return i&&!Array.isArray(i)&&(i.fnScopeId=v._scopeId,i.fnContext=n),i}:this._c=function(e,l,a,t){return ta(u,e,l,a,t,b)}}function ql(e,l,t,i,r){var u=e.options,o={},v=u.props;if(n(v))for(var s in v)o[s]=qe(s,v,l||a);else n(t.attrs)&&Xl(o,t.attrs),n(t.props)&&Xl(o,t.props);var b=new Vl(t,o,r,i,e),c=u.render.call(null,b._c,b);if(c instanceof fe)return Ul(c,t,b.parent,u,b);if(Array.isArray(c)){for(var h=yl(c)||[],f=new Array(h.length),p=0;p<h.length;p++)f[p]=Ul(h[p],t,b.parent,u,b);return f}}function Ul(e,l,a,t,n){var i=ye(e);return i.fnContext=a,i.fnOptions=t,l.slot&&((i.data||(i.data={})).slot=l.slot),i}function Xl(e,l){for(var a in l)e[A(a)]=l[a]}Hl(Vl.prototype);var Gl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Gl.prepatch(a,a)}else{var t=e.componentInstance=Kl(e,wa);t.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,t=l.componentInstance=e.componentInstance;Pa(t,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Ma(a,"mounted")),e.data.keepAlive&&(l._isMounted?Wa(a):ka(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Oa(l,!0):l.$destroy())}},Jl=Object.keys(Gl);function Yl(e,l,a,r,u){if(!t(e)){var v=a.$options._base;if(o(e)&&(e=v.extend(e)),"function"===typeof e){var s;if(t(e.cid)&&(s=e,e=ha(s,v),void 0===e))return ca(s,l,a,r,u);l=l||{},bt(e),n(l.model)&&ea(e.options,l);var b=pl(l,e,u);if(i(e.options.functional))return ql(e,b,l,a,r);var c=l.on;if(l.on=l.nativeOn,i(e.options.abstract)){var h=l.slot;l={},h&&(l.slot=h)}Zl(l);var f=e.options.name||u,p=new fe("vue-component-"+e.cid+(f?"-"+f:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:b,listeners:c,tag:u,children:r},s);return p}}}function Kl(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},t=e.data.inlineTemplate;return n(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Zl(e){for(var l=e.hook||(e.hook={}),a=0;a<Jl.length;a++){var t=Jl[a],n=l[t],i=Gl[t];n===i||n&&n._merged||(l[t]=n?Ql(i,n):i)}}function Ql(e,l){var a=function(a,t){e(a,t),l(a,t)};return a._merged=!0,a}function ea(e,l){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var i=l.on||(l.on={}),r=i[t],u=l.model.callback;n(r)?(Array.isArray(r)?-1===r.indexOf(u):r!==u)&&(i[t]=[u].concat(r)):i[t]=u}var la=1,aa=2;function ta(e,l,a,t,n,r){return(Array.isArray(a)||u(a))&&(n=t,t=a,a=void 0),i(r)&&(n=aa),na(e,l,a,t,n)}function na(e,l,a,t,i){if(n(a)&&n(a.__ob__))return de();if(n(a)&&n(a.is)&&(l=a.is),!l)return de();var r,u,o;(Array.isArray(t)&&"function"===typeof t[0]&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),i===aa?t=yl(t):i===la&&(t=gl(t)),"string"===typeof l)?(u=e.$vnode&&e.$vnode.ns||B.getTagNamespace(l),r=B.isReservedTag(l)?new fe(B.parsePlatformTagName(l),a,t,void 0,void 0,e):a&&a.pre||!n(o=Ve(e.$options,"components",l))?new fe(l,a,t,void 0,void 0,e):Yl(o,a,e,t,l)):r=Yl(l,a,e,t);return Array.isArray(r)?r:n(r)?(n(u)&&ia(r,u),n(a)&&ra(a),r):de()}function ia(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),n(e.children))for(var r=0,u=e.children.length;r<u;r++){var o=e.children[r];n(o.tag)&&(t(o.ns)||i(a)&&"svg"!==o.tag)&&ia(o,l,a)}}function ra(e){o(e.style)&&sl(e.style),o(e.class)&&sl(e.class)}function ua(e){e._vnode=null,e._staticTrees=null;var l=e.$options,t=e.$vnode=l._parentVnode,n=t&&t.context;e.$slots=Sl(l._renderChildren,n),e.$scopedSlots=a,e._c=function(l,a,t,n){return ta(e,l,a,t,n,!1)},e.$createElement=function(l,a,t,n){return ta(e,l,a,t,n,!0)};var i=t&&t.data;Oe(e,"$attrs",i&&i.attrs||a,null,!0),Oe(e,"$listeners",l._parentListeners||a,null,!0)}var oa,va=null;function sa(e){Hl(e.prototype),e.prototype.$nextTick=function(e){return ol(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,t=a.render,n=a._parentVnode;n&&(l.$scopedSlots=Pl(n.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=n;try{va=l,e=t.call(l._renderProxy,l.$createElement)}catch(en){Ye(en,l,"render"),e=l._vnode}finally{va=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof fe||(e=de()),e.parent=n,e}}function ba(e,l){return(e.__esModule||oe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?l.extend(e):e}function ca(e,l,a,t,n){var i=de();return i.asyncFactory=e,i.asyncMeta={data:l,context:a,children:t,tag:n},i}function ha(e,l){if(i(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var a=va;if(a&&n(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),i(e.loading)&&n(e.loadingComp))return e.loadingComp;if(a&&!n(e.owners)){var r=e.owners=[a],u=!0,v=null,s=null;a.$on("hook:destroyed",function(){return y(r,a)});var b=function(e){for(var l=0,a=r.length;l<a;l++)r[l].$forceUpdate();e&&(r.length=0,null!==v&&(clearTimeout(v),v=null),null!==s&&(clearTimeout(s),s=null))},c=j(function(a){e.resolved=ba(a,l),u?r.length=0:b(!0)}),f=j(function(l){n(e.errorComp)&&(e.error=!0,b(!0))}),p=e(c,f);return o(p)&&(h(p)?t(e.resolved)&&p.then(c,f):h(p.component)&&(p.component.then(c,f),n(p.error)&&(e.errorComp=ba(p.error,l)),n(p.loading)&&(e.loadingComp=ba(p.loading,l),0===p.delay?e.loading=!0:v=setTimeout(function(){v=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,b(!1))},p.delay||200)),n(p.timeout)&&(s=setTimeout(function(){s=null,t(e.resolved)&&f(null)},p.timeout)))),u=!1,e.loading?e.loadingComp:e.resolved}}function fa(e){return e.isComment&&e.asyncFactory}function pa(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(n(a)&&(n(a.componentOptions)||fa(a)))return a}}function da(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&ma(e,l)}function ga(e,l){oa.$on(e,l)}function ya(e,l){oa.$off(e,l)}function xa(e,l){var a=oa;return function t(){var n=l.apply(null,arguments);null!==n&&a.$off(e,t)}}function ma(e,l,a){oa=e,fl(l,a||{},ga,ya,xa,e),oa=void 0}function _a(e){var l=/^hook:/;e.prototype.$on=function(e,a){var t=this;if(Array.isArray(e))for(var n=0,i=e.length;n<i;n++)t.$on(e[n],a);else(t._events[e]||(t._events[e]=[])).push(a),l.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,l){var a=this;function t(){a.$off(e,t),l.apply(a,arguments)}return t.fn=l,a.$on(e,t),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var t=0,n=e.length;t<n;t++)a.$off(e[t],l);return a}var i,r=a._events[e];if(!r)return a;if(!l)return a._events[e]=null,a;var u=r.length;while(u--)if(i=r[u],i===l||i.fn===l){r.splice(u,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?M(a):a;for(var t=M(arguments,1),n='event handler for "'+e+'"',i=0,r=a.length;i<r;i++)Ke(a[i],l,t,l,n)}return l}}var wa=null;function Aa(e){var l=wa;return wa=e,function(){wa=l}}function Sa(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Ta(e){e.prototype._update=function(e,l){var a=this,t=a.$el,n=a._vnode,i=Aa(a);a._vnode=e,a.$el=n?a.__patch__(n,e):a.__patch__(a.$el,e,l,!1),i(),t&&(t.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ma(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||y(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ma(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Pa(e,l,t,n,i){var r=n.data.scopedSlots,u=e.$scopedSlots,o=!!(r&&!r.$stable||u!==a&&!u.$stable||r&&e.$scopedSlots.$key!==r.$key),v=!!(i||e.$options._renderChildren||o);if(e.$options._parentVnode=n,e.$vnode=n,e._vnode&&(e._vnode.parent=n),e.$options._renderChildren=i,e.$attrs=n.data.attrs||a,e.$listeners=t||a,l&&e.$options.props){Se(!1);for(var s=e._props,b=e.$options._propKeys||[],c=0;c<b.length;c++){var h=b[c],f=e.$options.props;s[h]=qe(h,f,l,e)}Se(!0),e.$options.propsData=l}t=t||a;var p=e.$options._parentListeners;e.$options._parentListeners=t,ma(e,t,p),v&&(e.$slots=Sl(i,n.context),e.$forceUpdate())}function Da(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function ka(e,l){if(l){if(e._directInactive=!1,Da(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)ka(e.$children[a]);Ma(e,"activated")}}function Oa(e,l){if((!l||(e._directInactive=!0,!Da(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Oa(e.$children[a]);Ma(e,"deactivated")}}function Ma(e,l){ce();var a=e.$options[l],t=l+" hook";if(a)for(var n=0,i=a.length;n<i;n++)Ke(a[n],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+l),he()}var $a=[],Fa=[],Ca={},Ra=!1,La=!1,Ia=0;function Ea(){Ia=$a.length=Fa.length=0,Ca={},Ra=La=!1}var ja=Date.now;if(J&&!Q){var za=window.performance;za&&"function"===typeof za.now&&ja()>document.createEvent("Event").timeStamp&&(ja=function(){return za.now()})}function Na(){var e,l;for(ja(),La=!0,$a.sort(function(e,l){return e.id-l.id}),Ia=0;Ia<$a.length;Ia++)e=$a[Ia],e.before&&e.before(),l=e.id,Ca[l]=null,e.run();var a=Fa.slice(),t=$a.slice();Ea(),Ha(a),Ba(t),ie&&B.devtools&&ie.emit("flush")}function Ba(e){var l=e.length;while(l--){var a=e[l],t=a.vm;t._watcher===a&&t._isMounted&&!t._isDestroyed&&Ma(t,"updated")}}function Wa(e){e._inactive=!1,Fa.push(e)}function Ha(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,ka(e[l],!0)}function Va(e){var l=e.id;if(null==Ca[l]){if(Ca[l]=!0,La){var a=$a.length-1;while(a>Ia&&$a[a].id>e.id)a--;$a.splice(a+1,0,e)}else $a.push(e);Ra||(Ra=!0,ol(Na))}}var qa=0,Ua=function(e,l,a,t,n){this.vm=e,n&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++qa,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ue,this.newDepIds=new ue,this.expression="","function"===typeof l?this.getter=l:(this.getter=U(l),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};Ua.prototype.get=function(){var e;ce(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(en){if(!this.user)throw en;Ye(en,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&sl(e),he(),this.cleanupDeps()}return e},Ua.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},Ua.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Ua.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Va(this)},Ua.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(en){Ye(en,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},Ua.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ua.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Ua.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Xa={enumerable:!0,configurable:!0,get:C,set:C};function Ga(e,l,a){Xa.get=function(){return this[l][a]},Xa.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Xa)}function Ja(e){e._watchers=[];var l=e.$options;l.props&&Ya(e,l.props),l.methods&&nt(e,l.methods),l.data?Ka(e):ke(e._data={},!0),l.computed&&et(e,l.computed),l.watch&&l.watch!==ae&&it(e,l.watch)}function Ya(e,l){var a=e.$options.propsData||{},t=e._props={},n=e.$options._propKeys=[],i=!e.$parent;i||Se(!1);var r=function(i){n.push(i);var r=qe(i,l,a,e);Oe(t,i,r),i in e||Ga(e,"_props",i)};for(var u in l)r(u);Se(!0)}function Ka(e){var l=e.$options.data;l=e._data="function"===typeof l?Za(l,e):l||{},s(l)||(l={});var a=Object.keys(l),t=e.$options.props,n=(e.$options.methods,a.length);while(n--){var i=a[n];0,t&&m(t,i)||H(i)||Ga(e,"_data",i)}ke(l,!0)}function Za(e,l){ce();try{return e.call(l,l)}catch(en){return Ye(en,l,"data()"),{}}finally{he()}}var Qa={lazy:!0};function et(e,l){var a=e._computedWatchers=Object.create(null),t=ne();for(var n in l){var i=l[n],r="function"===typeof i?i:i.get;0,t||(a[n]=new Ua(e,r||C,C,Qa)),n in e||lt(e,n,i)}}function lt(e,l,a){var t=!ne();"function"===typeof a?(Xa.get=t?at(l):tt(a),Xa.set=C):(Xa.get=a.get?t&&!1!==a.cache?at(l):tt(a.get):C,Xa.set=a.set||C),Object.defineProperty(e,l,Xa)}function at(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),be.SharedObject.target&&l.depend(),l.value}}function tt(e){return function(){return e.call(this,this)}}function nt(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?C:O(l[a],e)}function it(e,l){for(var a in l){var t=l[a];if(Array.isArray(t))for(var n=0;n<t.length;n++)rt(e,a,t[n]);else rt(e,a,t)}}function rt(e,l,a,t){return s(a)&&(t=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,t)}function ut(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Me,e.prototype.$delete=$e,e.prototype.$watch=function(e,l,a){var t=this;if(s(l))return rt(t,e,l,a);a=a||{},a.user=!0;var n=new Ua(t,e,l,a);if(a.immediate)try{l.call(t,n.value)}catch(i){Ye(i,t,'callback for immediate watcher "'+n.expression+'"')}return function(){n.teardown()}}}var ot=0;function vt(e){e.prototype._init=function(e){var l=this;l._uid=ot++,l._isVue=!0,e&&e._isComponent?st(l,e):l.$options=He(bt(l.constructor),e||{},l),l._renderProxy=l,l._self=l,Sa(l),da(l),ua(l),Ma(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&wl(l),Ja(l),"mp-toutiao"!==l.mpHost&&_l(l),"mp-toutiao"!==l.mpHost&&Ma(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function st(e,l){var a=e.$options=Object.create(e.constructor.options),t=l._parentVnode;a.parent=l.parent,a._parentVnode=t;var n=t.componentOptions;a.propsData=n.propsData,a._parentListeners=n.listeners,a._renderChildren=n.children,a._componentTag=n.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function bt(e){var l=e.options;if(e.super){var a=bt(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var n=ct(e);n&&$(e.extendOptions,n),l=e.options=He(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function ct(e){var l,a=e.options,t=e.sealedOptions;for(var n in a)a[n]!==t[n]&&(l||(l={}),l[n]=a[n]);return l}function ht(e){this._init(e)}function ft(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=M(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function pt(e){e.mixin=function(e){return this.options=He(this.options,e),this}}function dt(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,t=a.cid,n=e._Ctor||(e._Ctor={});if(n[t])return n[t];var i=e.name||a.options.name;var r=function(e){this._init(e)};return r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.cid=l++,r.options=He(a.options,e),r["super"]=a,r.options.props&&gt(r),r.options.computed&&yt(r),r.extend=a.extend,r.mixin=a.mixin,r.use=a.use,z.forEach(function(e){r[e]=a[e]}),i&&(r.options.components[i]=r),r.superOptions=a.options,r.extendOptions=e,r.sealedOptions=$({},r.options),n[t]=r,r}}function gt(e){var l=e.options.props;for(var a in l)Ga(e.prototype,"_props",a)}function yt(e){var l=e.options.computed;for(var a in l)lt(e.prototype,a,l[a])}function xt(e){z.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&s(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function mt(e){return e&&(e.Ctor.options.name||e.tag)}function _t(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!b(e)&&e.test(l)}function wt(e,l){var a=e.cache,t=e.keys,n=e._vnode;for(var i in a){var r=a[i];if(r){var u=mt(r.componentOptions);u&&!l(u)&&At(a,i,t,n)}}}function At(e,l,a,t){var n=e[l];!n||t&&n.tag===t.tag||n.componentInstance.$destroy(),e[l]=null,y(a,l)}vt(ht),ut(ht),_a(ht),Ta(ht),sa(ht);var St=[String,RegExp,Array],Tt={name:"keep-alive",abstract:!0,props:{include:St,exclude:St,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)At(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){wt(e,function(e){return _t(l,e)})}),this.$watch("exclude",function(l){wt(e,function(e){return!_t(l,e)})})},render:function(){var e=this.$slots.default,l=pa(e),a=l&&l.componentOptions;if(a){var t=mt(a),n=this,i=n.include,r=n.exclude;if(i&&(!t||!_t(i,t))||r&&t&&_t(r,t))return l;var u=this,o=u.cache,v=u.keys,s=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;o[s]?(l.componentInstance=o[s].componentInstance,y(v,s),v.push(s)):(o[s]=l,v.push(s),this.max&&v.length>parseInt(this.max)&&At(o,v[0],v,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},Pt={KeepAlive:Tt};function Dt(e){var l={get:function(){return B}};Object.defineProperty(e,"config",l),e.util={warn:ve,extend:$,mergeOptions:He,defineReactive:Oe},e.set=Me,e.delete=$e,e.nextTick=ol,e.observable=function(e){return ke(e),e},e.options=Object.create(null),z.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,$(e.options.components,Pt),ft(e),pt(e),dt(e),xt(e)}Dt(ht),Object.defineProperty(ht.prototype,"$isServer",{get:ne}),Object.defineProperty(ht.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ht,"FunctionalRenderContext",{value:Vl}),ht.version="2.6.10";var kt="[object Array]",Ot="[object Object]";function Mt(e,l){var a={};return $t(e,l),Ft(e,l,"",a),a}function $t(e,l){if(e!==l){var a=Rt(e),t=Rt(l);if(a==Ot&&t==Ot){if(Object.keys(e).length>=Object.keys(l).length)for(var n in l){var i=e[n];void 0===i?e[n]=null:$t(i,l[n])}}else a==kt&&t==kt&&e.length>=l.length&&l.forEach(function(l,a){$t(e[a],l)})}}function Ft(e,l,a,t){if(e!==l){var n=Rt(e),i=Rt(l);if(n==Ot)if(i!=Ot||Object.keys(e).length<Object.keys(l).length)Ct(t,a,e);else{var r=function(n){var i=e[n],r=l[n],u=Rt(i),o=Rt(r);if(u!=kt&&u!=Ot)i!=l[n]&&Ct(t,(""==a?"":a+".")+n,i);else if(u==kt)o!=kt?Ct(t,(""==a?"":a+".")+n,i):i.length<r.length?Ct(t,(""==a?"":a+".")+n,i):i.forEach(function(e,l){Ft(e,r[l],(""==a?"":a+".")+n+"["+l+"]",t)});else if(u==Ot)if(o!=Ot||Object.keys(i).length<Object.keys(r).length)Ct(t,(""==a?"":a+".")+n,i);else for(var v in i)Ft(i[v],r[v],(""==a?"":a+".")+n+"."+v,t)};for(var u in e)r(u)}else n==kt?i!=kt?Ct(t,a,e):e.length<l.length?Ct(t,a,e):e.forEach(function(e,n){Ft(e,l[n],a+"["+n+"]",t)}):Ct(t,a,e)}}function Ct(e,l,a){e[l]=a}function Rt(e){return Object.prototype.toString.call(e)}function Lt(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<a.length;t++)a[t]()}}function It(e){return $a.find(function(l){return e._watcher===l})}function Et(e,l){if(!e.__next_tick_pending&&!It(e)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return ol(l,e)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var n;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(en){Ye(en,e,"nextTick")}else n&&n(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){n=e})}function jt(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var zt=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,n=Object.create(null);try{n=jt(this)}catch(u){console.error(u)}n.__webviewId__=t.data.__webviewId__;var i=Object.create(null);Object.keys(n).forEach(function(e){i[e]=t.data[e]});var r=Mt(n,i);Object.keys(r).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(r)),this.__next_tick_pending=!0,t.setData(r,function(){a.__next_tick_pending=!1,Lt(a)})):Lt(this)}};function Nt(){}function Bt(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Nt),e.$options.render||(e.$options.render=Nt),"mp-toutiao"!==e.mpHost&&Ma(e,"beforeMount");var t=function(){e._update(e._render(),a)};return new Ua(e,t,C,{before:function(){e._isMounted&&!e._isDestroyed&&Ma(e,"beforeUpdate")}},!0),a=!1,e}function Wt(e,l){return n(e)||n(l)?Ht(e,Vt(l)):""}function Ht(e,l){return e?l?e+" "+l:e:l||""}function Vt(e){return Array.isArray(e)?qt(e):o(e)?Ut(e):"string"===typeof e?e:""}function qt(e){for(var l,a="",t=0,i=e.length;t<i;t++)n(l=Vt(e[t]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function Ut(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Xt=_(function(e){var l={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(t);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Gt(e){return Array.isArray(e)?F(e):"string"===typeof e?Xt(e):e}var Jt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yt(e,l){var a=l.split("."),t=a[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===a.length?e[t]:Yt(e[t],a.slice(1).join("."))}function Kt(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:M(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return Et(this,e)},Jt.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=_l,e.prototype.__init_injections=wl,e.prototype.__call_hook=function(e,l){var a=this;ce();var t,n=a.$options[e],i=e+" hook";if(n)for(var r=0,u=n.length;r<u;r++)t=Ke(n[r],a,l?[l]:null,a,i);return a._hasHookEvent&&a.$emit("hook:"+e),he(),t},e.prototype.__set_model=function(e,l,a,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(a=a.trim()),-1!==t.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return s(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Yt(l||this,e)},e.prototype.__get_class=function(e,l){return Wt(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Gt(e),t=l?$(l,a):a;return Object.keys(t).map(function(e){return P(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,l){var a,t,n,i,r;if(Array.isArray(e)){for(a=new Array(e.length),t=0,n=e.length;t<n;t++)a[t]=l(e[t],t);return a}if(o(e)){for(i=Object.keys(e),a=Object.create(null),t=0,n=i.length;t<n;t++)r=i[t],a[r]=l(e[r],r,t);return a}return[]}}var Zt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function Qt(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Zt.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,t=a.created;Zt.forEach(function(e){a[e]=t}),e.prototype.__lifecycle_hooks__=Zt}ht.prototype.__patch__=zt,ht.prototype.$mount=function(e,l){return Bt(this,e,l)},Qt(ht),Kt(ht),l["default"]=ht}.call(this,a("c8ba"))},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=fl,l.createComponent=Sl,l.createPage=Al,l.default=void 0;var t=n(a("66fd"));function n(e){return e&&e.__esModule?e:{default:e}}function i(e,l){return o(e)||u(e,l)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,l){var a=[],t=!0,n=!1,i=void 0;try{for(var r,u=e[Symbol.iterator]();!(t=(r=u.next()).done);t=!0)if(a.push(r.value),l&&a.length===l)break}catch(o){n=!0,i=o}finally{try{t||null==u["return"]||u["return"]()}finally{if(n)throw i}}return a}function o(e){if(Array.isArray(e))return e}function v(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function s(e){return h(e)||c(e)||b()}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function h(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var f=Object.prototype.toString,p=Object.prototype.hasOwnProperty;function d(e){return"function"===typeof e}function g(e){return"string"===typeof e}function y(e){return"[object Object]"===f.call(e)}function x(e,l){return p.call(e,l)}function m(){}function _(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,A=_(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),S=["invoke","success","fail","complete","returnValue"],T={},P={};function D(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?k(a):a}function k(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function O(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function M(e,l){Object.keys(l).forEach(function(a){-1!==S.indexOf(a)&&d(l[a])&&(e[a]=D(e[a],l[a]))})}function $(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==S.indexOf(a)&&d(l[a])&&O(e[a],l[a])})}function F(e,l){"string"===typeof e&&y(l)?M(P[e]||(P[e]={}),l):y(e)&&M(T,e)}function C(e,l){"string"===typeof e?y(l)?$(P[e],l):delete P[e]:y(e)&&$(T,e)}function R(e){return function(l){return e(l)||l}}function L(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function I(e,l){for(var a=!1,t=0;t<e.length;t++){var n=e[t];if(a)a=Promise.then(R(n));else{var i=n(l);if(L(i)&&(a=Promise.resolve(i)),!1===i)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function E(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var t=l[a];l[a]=function(l){I(e[a],l).then(function(e){return d(t)&&t(e)||e})}}}),l}function j(e,l){var a=[];Array.isArray(T.returnValue)&&a.push.apply(a,s(T.returnValue));var t=P[e];return t&&Array.isArray(t.returnValue)&&a.push.apply(a,s(t.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function z(e){var l=Object.create(null);Object.keys(T).forEach(function(e){"returnValue"!==e&&(l[e]=T[e].slice())});var a=P[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function N(e,l,a){for(var t=arguments.length,n=new Array(t>3?t-3:0),i=3;i<t;i++)n[i-3]=arguments[i];var r=z(e);if(r&&Object.keys(r).length){if(Array.isArray(r.invoke)){var u=I(r.invoke,a);return u.then(function(e){return l.apply(void 0,[E(r,e)].concat(n))})}return l.apply(void 0,[E(r,a)].concat(n))}return l.apply(void 0,[a].concat(n))}var B={returnValue:function(e){return L(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},W=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,V=/^on/;function q(e){return H.test(e)}function U(e){return W.test(e)}function X(e){return V.test(e)&&"onPush"!==e}function G(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function J(e){return!(q(e)||U(e)||X(e))}function Y(e,l){return J(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return d(a.success)||d(a.fail)||d(a.complete)?j(e,N.apply(void 0,[e,l,a].concat(n))):j(e,G(new Promise(function(t,i){N.apply(void 0,[e,l,Object.assign({},a,{success:t,fail:i})].concat(n)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var K=1e-4,Z=750,Q=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,t=e.windowWidth;ee=t,le=a,Q="ios"===l}function te(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/Z*(l||ee);return a<0&&(a=-a),a=Math.floor(a+K),0===a?1!==le&&Q?.5:1:e<0?-a:a}var ne={promiseInterceptor:B},ie=Object.freeze({upx2px:te,interceptors:ne,addInterceptor:F,removeInterceptor:C}),re={},ue=[],oe=[],ve=["success","fail","cancel","complete"];function se(e,l,a){return function(t){return l(ce(e,t,a))}}function be(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(l)){var i=!0===n?l:{};for(var r in d(a)&&(a=a(l,i)||{}),l)if(x(a,r)){var u=a[r];d(u)&&(u=u(l[r],l,i)),u?g(u)?i[u]=l[r]:y(u)&&(i[u.name?u.name:r]=u.value):console.warn("app-plus ".concat(e,"暂不支持").concat(r))}else-1!==ve.indexOf(r)?i[r]=se(e,l[r],t):n||(i[r]=l[r]);return i}return d(l)&&(l=se(e,l,t)),l}function ce(e,l,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d(re.returnValue)&&(l=re.returnValue(e,l)),be(e,l,a,{},t)}function he(e,l){if(x(re,e)){var a=re[e];return a?function(l,t){var n=a;d(a)&&(n=a(l)),l=be(e,l,n.args,n.returnValue);var i=[l];"undefined"!==typeof t&&i.push(t);var r=wx[n.name||e].apply(wx,i);return U(e)?ce(e,r,n.returnValue,q(e)):r}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var fe=Object.create(null),pe=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function de(e){return function(l){var a=l.fail,t=l.complete,n={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};d(a)&&a(n),d(t)&&t(n)}}pe.forEach(function(e){fe[e]=de(e)});var ge=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function ye(e,l,a){return e[l].apply(e,a)}function xe(){return ye(ge(),"$on",Array.prototype.slice.call(arguments))}function me(){return ye(ge(),"$off",Array.prototype.slice.call(arguments))}function _e(){return ye(ge(),"$once",Array.prototype.slice.call(arguments))}function we(){return ye(ge(),"$emit",Array.prototype.slice.call(arguments))}var Ae=Object.freeze({$on:xe,$off:me,$once:_e,$emit:we});function Se(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function Te(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,t="0"===e.__uniapp_mask_id?{setStyle:function(e){var l=e.mask;Se("uni-tabview").setMask({color:l})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),n=e.show,i=e.hide,r=e.close,u=function(){t.setStyle({mask:a})},o=function(){t.setStyle({mask:"none"})};e.show=function(){u();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return n.apply(e,a)},e.hide=function(){o();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return i.apply(e,a)},e.close=function(){o(),l=[];for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return r.apply(e,t)}}}function Pe(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&Te(l),l}var De=Object.freeze({getSubNVueById:Pe,requireNativePlugin:Se}),ke=Page,Oe=Component,Me=/:/g,$e=_(function(e){return A(e.replace(Me,"-"))});function Fe(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return l.apply(e,[$e(a)].concat(n))}}}function Ce(e,l){var a=l[e];l[e]=a?function(){Fe(this);for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];return a.apply(this,l)}:function(){Fe(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("onLoad",e),ke(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("created",e),Oe(e)};var Re=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Le(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){x(a,l)&&(e[l]=a[l])})}function Ie(e,l){if(!l)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(l=l.default||l,d(l))return!!d(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(d(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return Ie(e,l)}):void 0}function Ee(e,l,a){l.forEach(function(l){Ie(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function je(e,l){var a;return l=l.default||l,d(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function ze(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Ne(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function Be(e,l){var a=e.data||{},t=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(n){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(n){}return y(a)||(a={}),Object.keys(t).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||x(a,e)||(a[e]=t[e])}),a}var We=[String,Number,Boolean,Object,Array,null];function He(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function Ve(e,l){var a=e["behaviors"],t=e["extends"],n=e["mixins"],i=e["props"];i||(e["props"]=i=[]);var r=[];return Array.isArray(a)&&a.forEach(function(e){r.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(t)&&t.props&&r.push(l({properties:Ue(t.props,!0)})),Array.isArray(n)&&n.forEach(function(e){y(e)&&e.props&&r.push(l({properties:Ue(e.props,!0)}))}),r}function qe(e,l,a,t){return Array.isArray(l)&&1===l.length?l[0]:l}function Ue(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:He(e)}}):y(e)&&Object.keys(e).forEach(function(l){var t=e[l];if(y(t)){var n=t["default"];d(n)&&(n=n()),t.type=qe(l,t.type),a[l]={type:-1!==We.indexOf(t.type)?t.type:null,value:n,observer:He(l)}}else{var i=qe(l,t);a[l]={type:-1!==We.indexOf(i)?i:null,observer:He(l)}}}),a}function Xe(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=m,e.preventDefault=m,e.target=e.target||{},x(e,"detail")||(e.detail={}),y(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Ge(e,l){var a=e;return l.forEach(function(l){var t=l[0],n=l[2];if(t||"undefined"!==typeof n){var i=l[1],r=l[3],u=t?e.__get_value(t,a):a;Number.isInteger(u)?a=n:i?Array.isArray(u)?a=u.find(function(l){return e.__get_value(i,l)===n}):y(u)?a=Object.keys(u).find(function(l){return e.__get_value(i,u[l])===n}):console.error("v-for 暂不支持循环数据：",u):a=u[n],r&&(a=e.__get_value(r,a))}}),a}function Je(e,l,a){var t={};return Array.isArray(l)&&l.length&&l.forEach(function(l,n){"string"===typeof l?l?"$event"===l?t["$"+n]=a:0===l.indexOf("$event.")?t["$"+n]=e.__get_value(l.replace("$event.",""),a):t["$"+n]=e.__get_value(l):t["$"+n]=e:t["$"+n]=Ge(e,l)}),t}function Ye(e){for(var l={},a=1;a<e.length;a++){var t=e[a];l[t[0]]=t[1]}return l}function Ke(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,r=!1;if(n&&(r=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return r?[l]:l.detail.__args__||l.detail;var u=Je(e,t,l),o=[];return a.forEach(function(e){"$event"===e?"__set_model"!==i||n?n&&!r?o.push(l.detail.__args__[0]):o.push(l):o.push(l.target.value):Array.isArray(e)&&"o"===e[0]?o.push(Ye(e)):"string"===typeof e&&x(u,e)?o.push(u[e]):o.push(e)}),o}var Ze="~",Qe="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=Xe(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var t=a.eventOpts||a["event-opts"];if(!t)return console.warn("事件信息不存在");var n=e.type,i=[];return t.forEach(function(a){var t=a[0],r=a[1],u=t.charAt(0)===Qe;t=u?t.slice(1):t;var o=t.charAt(0)===Ze;t=o?t.slice(1):t,r&&el(n,t)&&r.forEach(function(a){var t=a[0];if(t){var n=l.$vm;if(n.$options.generic&&n.$parent&&n.$parent.$parent&&(n=n.$parent.$parent),"$emit"===t)return void n.$emit.apply(n,Ke(l.$vm,e,a[1],a[2],u,t));var r=n[t];if(!d(r))throw new Error(" _vm.".concat(t," is not a function"));if(o){if(r.once)return;r.once=!0}i.push(r.apply(n,Ke(l.$vm,e,a[1],a[2],u,t)))}})}),"input"===n&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var al=["onShow","onHide","onError","onPageNotFound"];function tl(e,l){var a=l.mocks,n=l.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=v({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(n(this),Le(this,a)))}});var i={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};i.globalData=e.$options.globalData||{};var r=e.$options.methods;return r&&Object.keys(r).forEach(function(e){i[e]=r[e]}),Ee(i,al),i}var nl=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function il(e,l){var a=e.$children,t=a.find(function(e){return e.$scope._$vueId===l});if(t)return t;for(var n=a.length-1;n>=0;n--)if(t=il(a[n],l),t)return t}function rl(e){return Behavior(e)}function ul(){return!!this.route}function ol(e){this.triggerEvent("__l",e)}function vl(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var t=l.selectAllComponents(".vue-ref-in-for");return t.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function sl(e){var l,a=e.detail||e.value,t=a.vuePid,n=a.vueOptions;t&&(l=il(this.$vm,t)),l||(l=this.$vm),n.parent=l}function bl(e){return tl(e,{mocks:nl,initRefs:vl})}var cl=["onUniNViewMessage"];function hl(e){var l=bl(e);return Ee(l,cl),l}function fl(e){return App(hl(e)),e}function pl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,n=l.initRelation,r=je(t.default,e),u=i(r,2),o=u[0],v=u[1],s={multipleSlots:!0,addGlobalClass:!0},b={options:s,data:Be(v,t.default.prototype),behaviors:Ve(v,rl),properties:Ue(v.props,!1,v.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Ne(e.vueId,this),n.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new o(l),ze(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:sl,__e:ll}};return Array.isArray(v.wxsCallMethods)&&v.wxsCallMethods.forEach(function(e){b.methods[e]=function(l){return this.$vm[e](l)}}),a?b:[b,o]}function dl(e){return pl(e,{isPage:ul,initRelation:ol})}function gl(e){var l=dl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var yl=["onShow","onHide","onUnload"];function xl(e,l){l.isPage,l.initRelation;var a=gl(e);return Ee(a.methods,yl,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function ml(e){return xl(e,{isPage:ul,initRelation:ol})}yl.push.apply(yl,Re);var _l=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function wl(e){var l=ml(e);return Ee(l.methods,_l),l}function Al(e){return Component(wl(e))}function Sl(e){return Component(gl(e))}ue.forEach(function(e){re[e]=!1}),oe.forEach(function(e){var l=re[e]&&re[e].name?re[e].name:e;wx.canIUse(l)||(re[e]=!1)});var Tl={};Object.keys(ie).forEach(function(e){Tl[e]=ie[e]}),Object.keys(Ae).forEach(function(e){Tl[e]=Ae[e]}),Object.keys(De).forEach(function(e){Tl[e]=Y(e,De[e])}),Object.keys(wx).forEach(function(e){(x(wx,e)||x(re,e))&&(Tl[e]=Y(e,he(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=Tl,e.UniEmitter=Ae),wx.createApp=fl,wx.createPage=Al,wx.createComponent=Sl;var Pl=Tl,Dl=Pl;l.default=Dl}).call(this,a("c8ba"))},"78ae":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],n=t;l.default=n},"7f88":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],n=t;l.default=n},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_id:"@dcloudio/uni-stat@2.0.0-v3-24020191018001",_inBundle:!1,_integrity:"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"^2.0.0-alpha-24420191128001",saveSpec:null,fetchSpec:"^2.0.0-alpha-24420191128001"},_requiredBy:["/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz",_shasum:"6ef04326cc0b945726413eebe442ab8f47c7536c",_spec:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-v3-24020191018001"}},"897e":function(e,l,a){"use strict";(function(l,a){var t={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarLabelTextMargin:15,gaugeLabelTextMargin:15},n=function(e){for(var l=arguments.length,a=new Array(l>1?l-1:0),t=1;t<l;t++)a[t-1]=arguments[t];if(null==e)throw new TypeError("Cannot convert undefined or null to object");if(!a||a.length<=0)return e;function n(e,l){for(var a in l)e[a]=e[a]&&"[object Object]"===e[a].toString()?n(e[a],l[a]):e[a]=l[a];return e}return a.forEach(function(l){e=n(e,l)}),e},i={toFixed:function(e,l){return l=l||2,this.isFloat(e)&&(e=e.toFixed(l)),e},isFloat:function(e){return e%1!==0},approximatelyEqual:function(e,l){return Math.abs(e-l)<1e-10},isSameSign:function(e,l){return Math.abs(e)===e&&Math.abs(l)===l||Math.abs(e)!==e&&Math.abs(l)!==l},isSameXCoordinateArea:function(e,l){return this.isSameSign(e.x,l.x)},isCollision:function(e,l){e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height,l.end={},l.end.x=l.start.x+l.width,l.end.y=l.start.y-l.height;var a=l.start.x>e.end.x||l.end.x<e.start.x||l.end.y>e.start.y||l.start.y<e.end.y;return!a}};function r(e,l){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=e.replace(a,function(e,l,a,t){return l+l+a+a+t+t}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),i=parseInt(n[1],16),r=parseInt(n[2],16),u=parseInt(n[3],16);return"rgba("+i+","+r+","+u+","+l+")"}function u(e,l,a){if(isNaN(e))throw new Error("[uCharts] unvalid series data!");a=a||10,l=l||"upper";var t=1;while(a<1)a*=10,t*=10;e="upper"===l?Math.ceil(e*t):Math.floor(e*t);while(e%a!==0)"upper"===l?e++:e--;return e/t}function o(e,l,a,t){for(var n=[],i=0;i<e.length;i++){for(var r={data:[],name:l[i],color:a[i]},u=0,o=t.length;u<o;u++)if(u<e[i])r.data.push(null);else{for(var v=0,s=0;s<e[i];s++)v+=t[u-s][1];r.data.push(+(v/e[i]).toFixed(3))}n.push(r)}return n}function v(e,l,a,t,n){var i=n.width-n.area[1]-n.area[3],r=a.eachSpacing*(n.chartData.xAxisData.xAxisPoints.length-1),u=l;return l>=0?(u=0,e.event.trigger("scrollLeft")):Math.abs(l)>=r-i&&(u=i-r,e.event.trigger("scrollRight")),u}function s(e,l,a){function t(e){while(e<0)e+=2*Math.PI;while(e>2*Math.PI)e-=2*Math.PI;return e}return e=t(e),l=t(l),a=t(a),l>a&&(a+=2*Math.PI,e<l&&(e+=2*Math.PI)),e>=l&&e<=a}function b(e,l,a){var t=e,n=a-l,i=t+(a-n-t)/Math.sqrt(2);i*=-1;var r=(a-n)*(Math.sqrt(2)-1)-(a-n-t)/Math.sqrt(2);return{transX:i,transY:r}}function c(e,l){function a(e,l){return!(!e[l-1]||!e[l+1])&&(e[l].y>=Math.max(e[l-1].y,e[l+1].y)||e[l].y<=Math.min(e[l-1].y,e[l+1].y))}var t=.2,n=.2,i=null,r=null,u=null,o=null;if(l<1?(i=e[0].x+(e[1].x-e[0].x)*t,r=e[0].y+(e[1].y-e[0].y)*t):(i=e[l].x+(e[l+1].x-e[l-1].x)*t,r=e[l].y+(e[l+1].y-e[l-1].y)*t),l>e.length-3){var v=e.length-1;u=e[v].x-(e[v].x-e[v-1].x)*n,o=e[v].y-(e[v].y-e[v-1].y)*n}else u=e[l+1].x-(e[l+2].x-e[l].x)*n,o=e[l+1].y-(e[l+2].y-e[l].y)*n;return a(e,l+1)&&(o=e[l+1].y),a(e,l)&&(r=e[l].y),(r>=Math.max(e[l].y,e[l+1].y)||r<=Math.min(e[l].y,e[l+1].y))&&(r=e[l].y),(o>=Math.max(e[l].y,e[l+1].y)||o<=Math.min(e[l].y,e[l+1].y))&&(o=e[l+1].y),{ctrA:{x:i,y:r},ctrB:{x:u,y:o}}}function h(e,l,a){return{x:a.x+e,y:a.y-l}}function f(e,l){if(l)while(i.isCollision(e,l))e.start.x>0?e.start.y--:e.start.x<0?e.start.y++:e.start.y>0?e.start.y++:e.start.y--;return e}function p(e,l,a){var t=0;return e.map(function(e){if(e.color||(e.color=a.colors[t],t=(t+1)%a.colors.length),e.index||(e.index=0),e.type||(e.type=l.type),"undefined"==typeof e.show&&(e.show=!0),e.type||(e.type=l.type),e.pointShape||(e.pointShape="circle"),!e.legendShape)switch(e.type){case"line":e.legendShape="line";break;case"column":e.legendShape="rect";break;case"area":e.legendShape="triangle";break;default:e.legendShape="circle"}return e})}function d(e,l){var a=0,t=l-e;return a=t>=1e4?1e3:t>=1e3?100:t>=100?10:t>=10?5:t>=1?1:t>=.1?.1:t>=.01?.01:t>=.001?.001:t>=1e-4?1e-4:t>=1e-5?1e-5:1e-6,{minRange:u(e,"lower",a),maxRange:u(l,"upper",a)}}function g(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.fontSize;e=String(e);e=e.split("");for(var a=0,n=0;n<e.length;n++){var i=e[n];/[a-zA-Z]/.test(i)?a+=7:/[0-9]/.test(i)?a+=5.5:/\./.test(i)?a+=2.7:/-/.test(i)?a+=3.25:/[\u4e00-\u9fa5]/.test(i)?a+=10:/\(|\)/.test(i)?a+=3.73:/\s/.test(i)?a+=2.5:/%/.test(i)?a+=8:a+=10}return a*l/10}function y(e){return e.reduce(function(e,l){return(e.data?e.data:e).concat(l.data)},[])}function x(e,l){for(var a=new Array(l),t=0;t<a.length;t++)a[t]=0;for(var n=0;n<e.length;n++)for(t=0;t<a.length;t++)a[t]+=e[n].data[t];return e.reduce(function(e,l){return(e.data?e.data:e).concat(l.data).concat(a)},[])}function m(e,l,a){var t,n;return e.clientX?l.rotate?(n=l.height-e.clientX*l.pixelRatio,t=(e.pageY-a.currentTarget.offsetTop-l.height/l.pixelRatio/2*(l.pixelRatio-1))*l.pixelRatio):(t=e.clientX*l.pixelRatio,n=(e.pageY-a.currentTarget.offsetTop-l.height/l.pixelRatio/2*(l.pixelRatio-1))*l.pixelRatio):l.rotate?(n=l.height-e.x*l.pixelRatio,t=e.y*l.pixelRatio):(t=e.x*l.pixelRatio,n=e.y*l.pixelRatio),{x:t,y:n}}function _(e,l){for(var a=[],t=0;t<e.length;t++){var n=e[t];if(null!==n.data[l]&&"undefined"!==typeof n.data[l]&&n.show){var i={};i.color=n.color,i.type=n.type,i.style=n.style,i.pointShape=n.pointShape,i.disableLegend=n.disableLegend,i.name=n.name,i.show=n.show,i.data=n.format?n.format(n.data[l]):n.data[l],a.push(i)}}return a}function w(e){var l=e.map(function(e){return g(e)});return Math.max.apply(null,l)}function A(e){for(var l=2*Math.PI/e,a=[],t=0;t<e;t++)a.push(l*t);return a.map(function(e){return-1*e+Math.PI/2})}function S(e,l,a,t){for(var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=e.map(function(e){var l=[];return l=t||e.data,{text:n.format?n.format(e,l[a]):e.name+": "+e.data,color:e.color}}),r=[],u={x:0,y:0},o=0;o<l.length;o++){var v=l[o];"undefined"!==typeof v[a]&&null!==v[a]&&r.push(v[a])}for(var s=0;s<r.length;s++){var b=r[s];u.x=Math.round(b.x),u.y+=b.y}return u.y/=r.length,{textList:i,offset:u}}function T(e,l,a,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=e.map(function(e){return{text:n.format?n.format(e,t[a]):e.name+": "+e.data,color:e.color,disableLegend:!!e.disableLegend}});i=i.filter(function(e){if(!0!==e.disableLegend)return e});for(var r=[],u={x:0,y:0},o=0;o<l.length;o++){var v=l[o];"undefined"!==typeof v[a]&&null!==v[a]&&r.push(v[a])}for(var s=0;s<r.length;s++){var b=r[s];u.x=Math.round(b.x),u.y+=b.y}return u.y/=r.length,{textList:i,offset:u}}function P(e,l,a,t,n,i){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var r=i.color.upFill,u=i.color.downFill,o=[r,r,u,r],v=[],s={text:n[t],color:null};v.push(s),l.map(function(l){0==t&&l.data[1]-l.data[0]<0?o[1]=u:(l.data[0]<e[t-1][1]&&(o[0]=u),l.data[1]<l.data[0]&&(o[1]=u),l.data[2]>e[t-1][1]&&(o[2]=r),l.data[3]<e[t-1][1]&&(o[3]=u));var a={text:"开盘："+l.data[0],color:o[0]},n={text:"收盘："+l.data[1],color:o[1]},i={text:"最低："+l.data[2],color:o[2]},s={text:"最高："+l.data[3],color:o[3]};v.push(a,n,i,s)});for(var b=[],c={x:0,y:0},h=0;h<a.length;h++){var f=a[h];"undefined"!==typeof f[t]&&null!==f[t]&&b.push(f[t])}return c.x=Math.round(b[0][0].x),{textList:v,offset:c}}function D(e){for(var l=[],a=0;a<e.length;a++)1==e[a].show&&l.push(e[a]);return l}function k(e,l,a,t){for(var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=-1,r=0,u=[],o=0;o<l[0].length;o++)u.push(l[0][o].x);return"line"!=a.type&&"area"!=a.type||"justify"!=a.xAxis.boundaryGap||(r=a.chartData.eachSpacing/2),a.categories||(r=0),$(e,a,t)&&u.forEach(function(l,a){e.x+n+r>l&&(i=a)}),i}function O(e,l,a){var t=-1;if(M(e,l.area)){for(var n=l.points,i=-1,r=0,u=n.length;r<u;r++)for(var o=n[r],v=0;v<o.length;v++){i+=1;var s=o[v]["area"];if(e.x>s[0]&&e.x<s[2]&&e.y>s[1]&&e.y<s[3]){t=i;break}}return t}return t}function M(e,l){return e.x>l.start.x&&e.x<l.end.x&&e.y>l.start.y&&e.y<l.end.y}function $(e,l,a){return e.x<=l.width-l.area[1]+10&&e.x>=l.area[3]-10&&e.y>=l.area[0]&&e.y<=l.height-l.area[2]}function F(e,l,a){var t=2*Math.PI/a,n=-1;if(E(e,l.center,l.radius)){var i=function(e){return e<0&&(e+=2*Math.PI),e>2*Math.PI&&(e-=2*Math.PI),e},r=Math.atan2(l.center.y-e.y,e.x-l.center.x);r*=-1,r<0&&(r+=2*Math.PI);var u=l.angleList.map(function(e){return e=i(-1*e),e});u.forEach(function(e,l){var a=i(e-t/2),u=i(e+t/2);u<a&&(u+=2*Math.PI),(r>=a&&r<=u||r+2*Math.PI>=a&&r+2*Math.PI<=u)&&(n=l)})}return n}function C(e,l){for(var a=-1,t=0,n=l.series.length;t<n;t++){var i=l.series[t];if(e.x>i.funnelArea[0]&&e.x<i.funnelArea[2]&&e.y>i.funnelArea[1]&&e.y<i.funnelArea[3]){a=t;break}}return a}function R(e,l){for(var a=-1,t=0,n=l.length;t<n;t++){var i=l[t];if(e.x>i.area[0]&&e.x<i.area[2]&&e.y>i.area[1]&&e.y<i.area[3]){a=t;break}}return a}function L(e,l){for(var a=-1,t=l.chartData.mapData,n=l.series,i=ze(e.y,e.x,t.bounds,t.scale,t.xoffset,t.yoffset),r=[i.x,i.y],u=0,o=n.length;u<o;u++){var v=n[u].geometry.coordinates;if(Be(r,v)){a=u;break}}return a}function I(e,l){var a=-1;if(E(e,l.center,l.radius)){var t=Math.atan2(l.center.y-e.y,e.x-l.center.x);t=-t;for(var n=0,i=l.series.length;n<i;n++){var r=l.series[n];if(s(t,r._start_,r._start_+2*r._proportion_*Math.PI)){a=n;break}}}return a}function E(e,l,a){return Math.pow(e.x-l.x,2)+Math.pow(e.y-l.y,2)<=Math.pow(a,2)}function j(e){var l=[],a=[];return e.forEach(function(e,t){null!==e?a.push(e):(a.length&&l.push(a),a=[])}),a.length&&l.push(a),l}function z(e,l,a,t){var n={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===l.legend.show)return t.legendData=n,n;var i=l.legend.padding,r=l.legend.margin,u=l.legend.fontSize,o=15*l.pixelRatio,v=5*l.pixelRatio,s=Math.max(l.legend.lineHeight*l.pixelRatio,u);if("top"==l.legend.position||"bottom"==l.legend.position){for(var b=[],c=0,h=[],f=[],p=0;p<e.length;p++){var d=e[p],y=o+v+g(d.name||"undefined",u)+l.legend.itemGap;c+y>l.width-l.padding[1]-l.padding[3]?(b.push(f),h.push(c-l.legend.itemGap),c=y,f=[d]):(c+=y,f.push(d))}if(f.length){b.push(f),h.push(c-l.legend.itemGap),n.widthArr=h;var x=Math.max.apply(null,h);switch(l.legend.float){case"left":n.area.start.x=l.padding[3],n.area.end.x=l.padding[3]+2*i;break;case"right":n.area.start.x=l.width-l.padding[1]-x-2*i,n.area.end.x=l.width-l.padding[1];break;default:n.area.start.x=(l.width-x)/2-i,n.area.end.x=(l.width+x)/2+i}n.area.width=x+2*i,n.area.wholeWidth=x+2*i,n.area.height=b.length*s+2*i,n.area.wholeHeight=b.length*s+2*i+2*r,n.points=b}}else{var m=e.length,_=l.height-l.padding[0]-l.padding[2]-2*r-2*i,w=Math.min(Math.floor(_/s),m);switch(n.area.height=w*s+2*i,n.area.wholeHeight=w*s+2*i,l.legend.float){case"top":n.area.start.y=l.padding[0]+r,n.area.end.y=l.padding[0]+r+n.area.height;break;case"bottom":n.area.start.y=l.height-l.padding[2]-r-n.area.height,n.area.end.y=l.height-l.padding[2]-r;break;default:n.area.start.y=(l.height-n.area.height)/2,n.area.end.y=(l.height+n.area.height)/2}for(var A=m%w===0?m/w:Math.floor(m/w+1),S=[],T=0;T<A;T++){var P=e.slice(T*w,T*w+w);S.push(P)}if(n.points=S,S.length){for(var D=0;D<S.length;D++){for(var k=S[D],O=0,M=0;M<k.length;M++){var $=o+v+g(k[M].name||"undefined",u)+l.legend.itemGap;$>O&&(O=$)}n.widthArr.push(O),n.heightArr.push(k.length*s+2*i)}for(var F=0,C=0;C<n.widthArr.length;C++)F+=n.widthArr[C];n.area.width=F-l.legend.itemGap+2*i,n.area.wholeWidth=n.area.width+i}}switch(l.legend.position){case"top":n.area.start.y=l.padding[0]+r,n.area.end.y=l.padding[0]+r+n.area.height;break;case"bottom":n.area.start.y=l.height-l.padding[2]-n.area.height-r,n.area.end.y=l.height-l.padding[2]-r;break;case"left":n.area.start.x=l.padding[3],n.area.end.x=l.padding[3]+n.area.width;break;case"right":n.area.start.x=l.width-l.padding[1]-n.area.width,n.area.end.x=l.width-l.padding[1];break}return t.legendData=n,n}function N(e,l,a,t){var n={angle:0,xAxisHeight:a.xAxisHeight},i=e.map(function(e){return g(e,l.xAxis.fontSize||a.fontSize)}),r=Math.max.apply(this,i);return 1==l.xAxis.rotateLabel&&r+2*a.xAxisTextPadding>t&&(n.angle=45*Math.PI/180,n.xAxisHeight=2*a.xAxisTextPadding+r*Math.sin(n.angle)),n}function B(e,l,a){var t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,n=y(e),i=[];n=n.filter(function(e){return"object"===typeof e&&null!==e?e.constructor==Array?null!==e:null!==e.value:null!==e}),n.map(function(e){"object"===typeof e?e.constructor==Array?"candle"==l.type?e.map(function(e){i.push(e)}):i.push(e[0]):i.push(e.value):i.push(e)});var r=0,u=0;if(i.length>0&&(r=Math.min.apply(this,i),u=Math.max.apply(this,i)),t>-1?("number"===typeof l.xAxis.data[t].min&&(r=Math.min(l.xAxis.data[t].min,r)),"number"===typeof l.xAxis.data[t].max&&(u=Math.max(l.xAxis.data[t].max,u))):("number"===typeof l.xAxis.min&&(r=Math.min(l.xAxis.min,r)),"number"===typeof l.xAxis.max&&(u=Math.max(l.xAxis.max,u))),r===u){var o=u||10;u+=o}for(var v=d(r,u),s=v.minRange,b=v.maxRange,c=[],h=(b-s)/l.xAxis.splitNumber,f=0;f<=l.xAxis.splitNumber;f++)c.push(s+h*f);return c}function W(e,l,a){var t={angle:0,xAxisHeight:a.xAxisHeight};t.ranges=B(e,l,a),t.rangesFormat=t.ranges.map(function(e){return e=l.xAxis.format?l.xAxis.format(e):i.toFixed(e,2),e});var n=t.ranges.map(function(e){return e=i.toFixed(e,2),e=l.xAxis.format?l.xAxis.format(Number(e)):e,e});t=Object.assign(t,ee(n,l,a));var r=t.eachSpacing,u=n.map(function(e){return g(e)}),o=Math.max.apply(this,u);return o+2*a.xAxisTextPadding>r&&(t.angle=45*Math.PI/180,t.xAxisHeight=2*a.xAxisTextPadding+o*Math.sin(t.angle)),!0===l.xAxis.disabled&&(t.xAxisHeight=0),t}function H(e,l,a,t,n){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,r=n.extra.radar||{};r.max=r.max||0;for(var u=Math.max(r.max,Math.max.apply(null,y(t))),o=[],v=function(n){var r=t[n],v={};v.color=r.color,v.legendShape=r.legendShape,v.pointShape=r.pointShape,v.data=[],r.data.forEach(function(t,n){var r={};r.angle=e[n],r.proportion=t/u,r.position=h(a*r.proportion*i*Math.cos(r.angle),a*r.proportion*i*Math.sin(r.angle),l),v.data.push(r)}),o.push(v)},s=0;s<t.length;s++)v(s);return o}function V(e,l){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=0,n=0,i=0;i<e.length;i++){var r=e[i];r.data=null===r.data?0:r.data,t+=r.data}for(var u=0;u<e.length;u++){var o=e[u];o.data=null===o.data?0:o.data,o._proportion_=0===t?1/e.length*a:o.data/t*a,o._radius_=l}for(var v=0;v<e.length;v++){var s=e[v];s._start_=n,n+=2*s._proportion_*Math.PI}return e}function q(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;e=e.sort(function(e,l){return parseInt(l.data)-parseInt(e.data)});for(var t=0;t<e.length;t++)e[t].radius=e[t].data/e[0].data*l*a,e[t]._proportion_=e[t].data/e[0].data;return e.reverse()}function U(e,l,a,t){for(var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=0,r=0,u=[],o=0;o<e.length;o++){var v=e[o];v.data=null===v.data?0:v.data,i+=v.data,u.push(v.data)}for(var s=Math.min.apply(null,u),b=Math.max.apply(null,u),c=t-a,h=0;h<e.length;h++){var f=e[h];f.data=null===f.data?0:f.data,0===i||"area"==l?(f._proportion_=f.data/i*n,f._rose_proportion_=1/e.length*n):(f._proportion_=f.data/i*n,f._rose_proportion_=f.data/i*n),f._radius_=a+c*((f.data-s)/(b-s))}for(var p=0;p<e.length;p++){var d=e[p];d._start_=r,r+=2*d._rose_proportion_*Math.PI}return e}function X(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==a&&(a=.999999);for(var t=0;t<e.length;t++){var n=e[t];n.data=null===n.data?0:n.data;var i=void 0;i="circle"==l.type?2:l.endAngle<l.startAngle?2+l.endAngle-l.startAngle:l.startAngle-l.endAngle,n._proportion_=i*n.data*a+l.startAngle,n._proportion_>=2&&(n._proportion_=n._proportion_%2)}return e}function G(e,l,a){for(var t=l-a+1,n=l,i=0;i<e.length;i++)e[i].value=null===e[i].value?0:e[i].value,e[i]._startAngle_=n,e[i]._endAngle_=t*e[i].value+l,e[i]._endAngle_>=2&&(e[i]._endAngle_=e[i]._endAngle_%2),n=e[i]._endAngle_;return e}function J(e,l,a){for(var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=0;n<e.length;n++){var i=e[n];if(i.data=null===i.data?0:i.data,"auto"==a.pointer.color){for(var r=0;r<l.length;r++)if(i.data<=l[r].value){i.color=l[r].color;break}}else i.color=a.pointer.color;var u=a.startAngle-a.endAngle+1;i._endAngle_=u*i.data+a.startAngle,i._oldAngle_=a.oldAngle,a.oldAngle<a.endAngle&&(i._oldAngle_+=2),i.data>=a.oldData?i._proportion_=(i._endAngle_-i._oldAngle_)*t+a.oldAngle:i._proportion_=i._oldAngle_-(i._oldAngle_-i._endAngle_)*t,i._proportion_>=2&&(i._proportion_=i._proportion_%2)}return e}function Y(e){e=V(e);for(var l=0,a=0;a<e.length;a++){var t=e[a],n=t.format?t.format(+t._proportion_.toFixed(2)):i.toFixed(100*t._proportion_)+"%";l=Math.max(l,g(n))}return l}function K(e,l,a,t,n,i){return e.map(function(e){return null===e?null:(e.width=Math.ceil((l-2*n.columePadding)/a),i.extra.column&&i.extra.column.width&&+i.extra.column.width>0&&(e.width=Math.min(e.width,+i.extra.column.width)),e.width<=0&&(e.width=1),e.x+=(t+.5-a/2)*e.width,e)})}function Z(e,l,a,t,n,i,r){return e.map(function(e){return null===e?null:(e.width=Math.ceil((l-2*n.columePadding)/2),i.extra.column&&i.extra.column.width&&+i.extra.column.width>0&&(e.width=Math.min(e.width,+i.extra.column.width)),t>0&&(e.width-=2*r),e)})}function Q(e,l,a,t,n,i,r){return e.map(function(e,a){return null===e?null:(e.width=Math.ceil((l-2*n.columePadding)/2),i.extra.column&&i.extra.column.width&&+i.extra.column.width>0&&(e.width=Math.min(e.width,+i.extra.column.width)),e)})}function ee(e,l,a){var t=l.width-l.area[1]-l.area[3],n=l.enableScroll?Math.min(l.xAxis.itemCount,e.length):e.length;("line"==l.type||"area"==l.type)&&n>1&&"justify"==l.xAxis.boundaryGap&&(n-=1);var i=t/n,r=[],u=l.area[3],o=l.width-l.area[1];return e.forEach(function(e,l){r.push(u+l*i)}),"justify"!==l.xAxis.boundaryGap&&(!0===l.enableScroll?r.push(u+e.length*i):r.push(o)),{xAxisPoints:r,startX:u,endX:o,eachSpacing:i}}function le(e,l,a,t,n,i,r){var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,o=[],v=i.height-i.area[0]-i.area[2];return e.forEach(function(e,r){if(null===e)o.push(null);else{var s=[];e.forEach(function(e,o){var b={};b.x=t[r]+Math.round(n/2);var c=e.value||e,h=v*(c-l)/(a-l);h*=u,b.y=i.height-Math.round(h)-i.area[2],s.push(b)}),o.push(s)}}),o}function ae(e,l,a,t,n,i,r){var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,o="center";"line"!=i.type&&"area"!=i.type||(o=i.xAxis.boundaryGap);var v=[],s=i.height-i.area[0]-i.area[2],b=i.width-i.area[1]-i.area[3];return e.forEach(function(e,r){if(null===e)v.push(null);else{var c={};c.color=e.color,c.x=t[r];var h,f,p,d=e;if("object"===typeof e&&null!==e)if(e.constructor==Array)h=[].concat(i.chartData.xAxisData.ranges),f=h.shift(),p=h.pop(),d=e[1],c.x=i.area[3]+b*(e[0]-f)/(p-f);else d=e.value;"center"==o&&(c.x+=Math.round(n/2));var g=s*(d-l)/(a-l);g*=u,c.y=i.height-Math.round(g)-i.area[2],v.push(c)}}),v}function te(e,l,a,t,n,i,r,u,o){var v=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,s=[],b=i.height-i.area[0]-i.area[2];return e.forEach(function(e,r){if(null===e)s.push(null);else{var c={};if(c.color=e.color,c.x=t[r]+Math.round(n/2),u>0){for(var h=0,f=0;f<=u;f++)h+=o[f].data[r];var p=h-e,d=b*(h-l)/(a-l),g=b*(p-l)/(a-l)}else h=e,d=b*(h-l)/(a-l),g=0;var y=g;d*=v,y*=v,c.y=i.height-Math.round(d)-i.area[2],c.y0=i.height-Math.round(y)-i.area[2],s.push(c)}}),s}function ne(e,l,a,t){var n,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1;n="stack"==t?x(e,l.categories.length):y(e);var r=[];n=n.filter(function(e){return"object"===typeof e&&null!==e?e.constructor==Array?null!==e:null!==e.value:null!==e}),n.map(function(e){"object"===typeof e?e.constructor==Array?"candle"==l.type?e.map(function(e){r.push(e)}):r.push(e[1]):r.push(e.value):r.push(e)});var u=0,o=0;if(r.length>0&&(u=Math.min.apply(this,r),o=Math.max.apply(this,r)),i>-1?("number"===typeof l.yAxis.data[i].min&&(u=Math.min(l.yAxis.data[i].min,u)),"number"===typeof l.yAxis.data[i].max&&(o=Math.max(l.yAxis.data[i].max,o))):("number"===typeof l.yAxis.min&&(u=Math.min(l.yAxis.min,u)),"number"===typeof l.yAxis.max&&(o=Math.max(l.yAxis.max,o))),u===o){var v=o||10;o+=v}for(var s=d(u,o),b=s.minRange,c=s.maxRange,h=[],f=(c-b)/l.yAxis.splitNumber,p=0;p<=l.yAxis.splitNumber;p++)h.push(b+f*p);return h.reverse()}function ie(e,l,a){var t=n({},{type:""},l.extra.column),r=l.yAxis.data.length,u=new Array(r);if(r>0){for(var o=0;o<r;o++){u[o]=[];for(var v=0;v<e.length;v++)e[v].index==o&&u[o].push(e[v])}for(var s=new Array(r),b=new Array(r),c=new Array(r),h=function(e){var n=l.yAxis.data[e];1==l.yAxis.disabled&&(n.disabled=!0),s[e]=ne(u[e],l,a,t.type,e);var r=n.fontSize||a.fontSize;c[e]={position:n.position?n.position:"left",width:0},b[e]=s[e].map(function(l){return l=i.toFixed(l,6),l=n.format?n.format(Number(l)):l,c[e].width=Math.max(c[e].width,g(l,r)+5),l});var o=n.calibration?4*l.pixelRatio:0;c[e].width+=o+3*l.pixelRatio,!0===n.disabled&&(c[e].width=0)},f=0;f<r;f++)h(f)}else{s=new Array(1),b=new Array(1),c=new Array(1);s[0]=ne(e,l,a,t.type),c[0]={position:"left",width:0};var p=l.yAxis.fontSize||a.fontSize;b[0]=s[0].map(function(e){return e=i.toFixed(e,6),e=l.yAxis.format?l.yAxis.format(Number(e)):e,c[0].width=Math.max(c[0].width,g(e,p)+5),e}),c[0].width+=3*l.pixelRatio,!0===l.yAxis.disabled?(c[0]={position:"left",width:0},l.yAxis.data[0]={disabled:!0}):l.yAxis.data[0]={disabled:!1,position:"left",max:l.yAxis.max,min:l.yAxis.min,format:l.yAxis.format}}return{rangesFormat:b,ranges:s,yAxisWidth:c}}function re(e,l,a,t,n){for(var i=[].concat(a.chartData.yAxisData.ranges),r=a.height-a.area[0]-a.area[2],u=a.area[0],o=[],v=0;v<i.length;v++){var s=i[v].shift(),b=i[v].pop(),c=s-(s-b)*(e-u)/r;c=a.yAxis.data[v].format?a.yAxis.data[v].format(Number(c)):c.toFixed(0),o.push(String(c))}return o}function ue(e,l){for(var a,t,n=l.height-l.area[0]-l.area[2],i=0;i<e.length;i++){e[i].yAxisIndex=e[i].yAxisIndex?e[i].yAxisIndex:0;var r=[].concat(l.chartData.yAxisData.ranges[e[i].yAxisIndex]);a=r.pop(),t=r.shift();var u=n*(e[i].value-a)/(t-a);e[i].y=l.height-Math.round(u)-l.area[2]}return e}function oe(e,l){!0!==l.rotateLock?(e.translate(l.height,0),e.rotate(90*Math.PI/180)):!0!==l._rotate_&&(e.translate(l.height,0),e.rotate(90*Math.PI/180),l._rotate_=!0)}function ve(e,l,a,t,n){t.beginPath(),"hollow"==n.dataPointShapeType?(t.setStrokeStyle(l),t.setFillStyle(n.background),t.setLineWidth(2*n.pixelRatio)):(t.setStrokeStyle("#ffffff"),t.setFillStyle(l),t.setLineWidth(1*n.pixelRatio)),"diamond"===a?e.forEach(function(e,l){null!==e&&(t.moveTo(e.x,e.y-4.5),t.lineTo(e.x-4.5,e.y),t.lineTo(e.x,e.y+4.5),t.lineTo(e.x+4.5,e.y),t.lineTo(e.x,e.y-4.5))}):"circle"===a?e.forEach(function(e,l){null!==e&&(t.moveTo(e.x+2.5*n.pixelRatio,e.y),t.arc(e.x,e.y,3*n.pixelRatio,0,2*Math.PI,!1))}):"rect"===a?e.forEach(function(e,l){null!==e&&(t.moveTo(e.x-3.5,e.y-3.5),t.rect(e.x-3.5,e.y-3.5,7,7))}):"triangle"===a&&e.forEach(function(e,l){null!==e&&(t.moveTo(e.x,e.y-4.5),t.lineTo(e.x-4.5,e.y+4.5),t.lineTo(e.x+4.5,e.y+4.5),t.lineTo(e.x,e.y-4.5))}),t.closePath(),t.fill(),t.stroke()}function se(e,l,a,t){var n=e.title.fontSize||l.titleFontSize,i=e.subtitle.fontSize||l.subtitleFontSize,r=e.title.name||"",u=e.subtitle.name||"",o=e.title.color||l.titleColor,v=e.subtitle.color||l.subtitleColor,s=r?n:0,b=u?i:0,c=5;if(u){var h=g(u,i),f=t.x-h/2+(e.subtitle.offsetX||0),p=t.y+i/2+(e.subtitle.offsetY||0);r&&(p+=(s+c)/2),a.beginPath(),a.setFontSize(i),a.setFillStyle(v),a.fillText(u,f,p),a.closePath(),a.stroke()}if(r){var d=g(r,n),y=t.x-d/2+(e.title.offsetX||0),x=t.y+n/2+(e.title.offsetY||0);u&&(x-=(b+c)/2),a.beginPath(),a.setFontSize(n),a.setFillStyle(o),a.fillText(r,y,x),a.closePath(),a.stroke()}}function be(e,l,a,t){var n=l.data;e.forEach(function(e,i){if(null!==e){t.beginPath(),t.setFontSize(l.textSize||a.fontSize),t.setFillStyle(l.textColor||"#666666");var r=n[i];"object"===typeof n[i]&&null!==n[i]&&(r=n[i].constructor==Array?n[i][1]:n[i].value);var u=l.format?l.format(r):r;t.fillText(String(u),e.x-g(u,l.textSize||a.fontSize)/2,e.y-4),t.closePath(),t.stroke()}})}function ce(e,l,a,t,n,i){l-=e.width/2+n.gaugeLabelTextMargin;for(var r=e.startAngle-e.endAngle+1,u=r/e.splitLine.splitNumber,o=e.endNumber-e.startNumber,v=o/e.splitLine.splitNumber,s=e.startAngle,b=e.startNumber,c=0;c<e.splitLine.splitNumber+1;c++){var h={x:l*Math.cos(s*Math.PI),y:l*Math.sin(s*Math.PI)},f=e.labelFormat?e.labelFormat(b):b;h.x+=a.x-g(f)/2,h.y+=a.y;var p=h.x,d=h.y;i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.labelColor||"#666666"),i.fillText(f,p,d+n.fontSize/2),i.closePath(),i.stroke(),s+=u,s>=2&&(s%=2),b+=v}}function he(e,l,a,t,n,r){var u=t.extra.radar||{};l+=n.radarLabelTextMargin,e.forEach(function(e,o){var v={x:l*Math.cos(e),y:l*Math.sin(e)},s=h(v.x,v.y,a),b=s.x,c=s.y;i.approximatelyEqual(v.x,0)?b-=g(t.categories[o]||"")/2:v.x<0&&(b-=g(t.categories[o]||"")),r.beginPath(),r.setFontSize(n.fontSize),r.setFillStyle(u.labelColor||"#666666"),r.fillText(t.categories[o]||"",b,c+n.fontSize/2),r.closePath(),r.stroke()})}function fe(e,l,a,t,n,r){for(var u=a.pieChartLinePadding,o=[],v=null,s=e.map(function(e){var l=e.format?e.format(+e._proportion_.toFixed(2)):i.toFixed(100*e._proportion_.toFixed(4))+"%";e._rose_proportion_&&(e._proportion_=e._rose_proportion_);var a=2*Math.PI-(e._start_+2*Math.PI*e._proportion_/2),t=e.color,n=e._radius_;return{arc:a,text:l,color:t,radius:n,textColor:e.textColor,textSize:e.textSize}}),b=0;b<s.length;b++){var c=s[b],p=Math.cos(c.arc)*(c.radius+u),d=Math.sin(c.arc)*(c.radius+u),y=Math.cos(c.arc)*c.radius,x=Math.sin(c.arc)*c.radius,m=p>=0?p+a.pieChartTextPadding:p-a.pieChartTextPadding,_=d,w=g(c.text,c.textSize||a.fontSize),A=_;v&&i.isSameXCoordinateArea(v.start,{x:m})&&(A=m>0?Math.min(_,v.start.y):p<0?Math.max(_,v.start.y):_>0?Math.max(_,v.start.y):Math.min(_,v.start.y)),m<0&&(m-=w);var S={lineStart:{x:y,y:x},lineEnd:{x:p,y:d},start:{x:m,y:A},width:w,height:a.fontSize,text:c.text,color:c.color,textColor:c.textColor,textSize:c.textSize};v=f(S,v),o.push(v)}for(var T=0;T<o.length;T++){var P=o[T],D=h(P.lineStart.x,P.lineStart.y,r),k=h(P.lineEnd.x,P.lineEnd.y,r),O=h(P.start.x,P.start.y,r);t.setLineWidth(1*l.pixelRatio),t.setFontSize(a.fontSize),t.beginPath(),t.setStrokeStyle(P.color),t.setFillStyle(P.color),t.moveTo(D.x,D.y);var M=P.start.x<0?O.x+P.width:O.x,$=P.start.x<0?O.x-5:O.x+5;t.quadraticCurveTo(k.x,k.y,M,O.y),t.moveTo(D.x,D.y),t.stroke(),t.closePath(),t.beginPath(),t.moveTo(O.x+P.width,O.y),t.arc(M,O.y,2,0,2*Math.PI),t.closePath(),t.fill(),t.beginPath(),t.setFontSize(P.textSize||a.fontSize),t.setFillStyle(P.textColor||"#666666"),t.fillText(P.text,$,O.y+3),t.closePath(),t.stroke(),t.closePath()}}function pe(e,l,a,t){var n=l.extra.tooltip||{};n.gridType=void 0==n.gridType?"solid":n.gridType,n.dashLength=void 0==n.dashLength?4:n.dashLength;var i=l.area[0],u=l.height-l.area[2];if("dash"==n.gridType&&t.setLineDash([n.dashLength,n.dashLength]),t.setStrokeStyle(n.gridColor||"#cccccc"),t.setLineWidth(1*l.pixelRatio),t.beginPath(),t.moveTo(e,i),t.lineTo(e,u),t.stroke(),t.setLineDash([]),n.xAxisLabel){var o=l.categories[l.tooltip.index];t.setFontSize(a.fontSize);var v=g(o,a.fontSize),s=e-.5*v,b=u;t.beginPath(),t.setFillStyle(r(n.labelBgColor||a.toolTipBackground,n.labelBgOpacity||a.toolTipOpacity)),t.setStrokeStyle(n.labelBgColor||a.toolTipBackground),t.setLineWidth(1*l.pixelRatio),t.rect(s-a.toolTipPadding,b,v+2*a.toolTipPadding,a.fontSize+2*a.toolTipPadding),t.closePath(),t.stroke(),t.fill(),t.beginPath(),t.setFontSize(a.fontSize),t.setFillStyle(n.labelFontColor||a.fontColor),t.fillText(String(o),s,b+a.toolTipPadding+a.fontSize),t.closePath(),t.stroke()}}function de(e,l,a){for(var t=n({},{type:"solid",dashLength:4,data:[]},e.extra.markLine),i=e.area[3],u=e.width-e.area[1],o=ue(t.data,e),v=0;v<o.length;v++){var s=n({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},o[v]);if("dash"==t.type&&a.setLineDash([t.dashLength,t.dashLength]),a.setStrokeStyle(s.lineColor),a.setLineWidth(1*e.pixelRatio),a.beginPath(),a.moveTo(i,s.y),a.lineTo(u,s.y),a.stroke(),a.setLineDash([]),s.showLabel){var b=e.yAxis.format?e.yAxis.format(Number(s.value)):s.value;a.setFontSize(l.fontSize);var c=g(b,l.fontSize),h=e.padding[3]+l.yAxisTitleWidth-l.toolTipPadding,f=Math.max(e.area[3],c+2*l.toolTipPadding),p=f-h,d=h+(p-c)/2,y=s.y;a.setFillStyle(r(s.labelBgColor,s.labelBgOpacity)),a.setStrokeStyle(s.labelBgColor),a.setLineWidth(1*e.pixelRatio),a.beginPath(),a.rect(h,y-.5*l.fontSize-l.toolTipPadding,p,l.fontSize+2*l.toolTipPadding),a.closePath(),a.stroke(),a.fill(),a.beginPath(),a.setFontSize(l.fontSize),a.setFillStyle(s.labelFontColor),a.fillText(String(b),d,y+.5*l.fontSize),a.stroke()}}}function ge(e,l,a,t,i){var u=n({},{gridType:"solid",dashLength:4},e.extra.tooltip),o=e.area[3],v=e.width-e.area[1];if("dash"==u.gridType&&a.setLineDash([u.dashLength,u.dashLength]),a.setStrokeStyle(u.gridColor||"#cccccc"),a.setLineWidth(1*e.pixelRatio),a.beginPath(),a.moveTo(o,e.tooltip.offset.y),a.lineTo(v,e.tooltip.offset.y),a.stroke(),a.setLineDash([]),u.yAxisLabel)for(var s=re(e.tooltip.offset.y,e.series,e,l,t),b=e.chartData.yAxisData.yAxisWidth,c=e.area[3],h=e.width-e.area[1],f=0;f<s.length;f++){a.setFontSize(l.fontSize);var p=g(s[f],l.fontSize),d=void 0,y=void 0,x=void 0;"left"==b[f].position?(d=c-b[f].width,y=Math.max(d,d+p+2*l.toolTipPadding)):(d=h,y=Math.max(d+b[f].width,d+p+2*l.toolTipPadding)),x=y-d;var m=d+(x-p)/2,_=e.tooltip.offset.y;a.beginPath(),a.setFillStyle(r(u.labelBgColor||l.toolTipBackground,u.labelBgOpacity||l.toolTipOpacity)),a.setStrokeStyle(u.labelBgColor||l.toolTipBackground),a.setLineWidth(1*e.pixelRatio),a.rect(d,_-.5*l.fontSize-l.toolTipPadding,x,l.fontSize+2*l.toolTipPadding),a.closePath(),a.stroke(),a.fill(),a.beginPath(),a.setFontSize(l.fontSize),a.setFillStyle(u.labelFontColor||l.fontColor),a.fillText(s[f],m,_+.5*l.fontSize),a.closePath(),a.stroke(),"left"==b[f].position?c-=b[f].width+e.yAxis.padding:h+=b[f].width+e.yAxis.padding}}function ye(e,l,a,t,i){var u=n({},{activeBgColor:"#000000",activeBgOpacity:.08},l.extra.tooltip),o=l.area[0],v=l.height-l.area[2];t.beginPath(),t.setFillStyle(r(u.activeBgColor,u.activeBgOpacity)),t.rect(e-i/2,o,i,v-o),t.closePath(),t.fill()}function xe(e,l,a,t,i,u,o){var v=n({},{showBox:!0,bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},a.extra.tooltip),s=4*a.pixelRatio,b=5*a.pixelRatio,c=8*a.pixelRatio,h=!1;"line"!=a.type&&"area"!=a.type&&"candle"!=a.type&&"mix"!=a.type||pe(a.tooltip.offset.x,a,t,i),l=n({x:0,y:0},l),l.y-=8*a.pixelRatio;var f=e.map(function(e){return g(e.text,t.fontSize)}),p=s+b+4*t.toolTipPadding+Math.max.apply(null,f),d=2*t.toolTipPadding+e.length*t.toolTipLineHeight;0!=v.showBox&&(l.x-Math.abs(a._scrollDistance_)+c+p>a.width&&(h=!0),d+l.y>a.height&&(l.y=a.height-d),i.beginPath(),i.setFillStyle(r(v.bgColor||t.toolTipBackground,v.bgOpacity||t.toolTipOpacity)),h?(i.moveTo(l.x,l.y+10*a.pixelRatio),i.lineTo(l.x-c,l.y+10*a.pixelRatio-5*a.pixelRatio),i.lineTo(l.x-c,l.y),i.lineTo(l.x-c-Math.round(p),l.y),i.lineTo(l.x-c-Math.round(p),l.y+d),i.lineTo(l.x-c,l.y+d),i.lineTo(l.x-c,l.y+10*a.pixelRatio+5*a.pixelRatio),i.lineTo(l.x,l.y+10*a.pixelRatio)):(i.moveTo(l.x,l.y+10*a.pixelRatio),i.lineTo(l.x+c,l.y+10*a.pixelRatio-5*a.pixelRatio),i.lineTo(l.x+c,l.y),i.lineTo(l.x+c+Math.round(p),l.y),i.lineTo(l.x+c+Math.round(p),l.y+d),i.lineTo(l.x+c,l.y+d),i.lineTo(l.x+c,l.y+10*a.pixelRatio+5*a.pixelRatio),i.lineTo(l.x,l.y+10*a.pixelRatio)),i.closePath(),i.fill(),e.forEach(function(e,a){if(null!==e.color){i.beginPath(),i.setFillStyle(e.color);var n=l.x+c+2*t.toolTipPadding,r=l.y+(t.toolTipLineHeight-t.fontSize)/2+t.toolTipLineHeight*a+t.toolTipPadding+1;h&&(n=l.x-p-c+2*t.toolTipPadding),i.fillRect(n,r,s,t.fontSize),i.closePath()}}),e.forEach(function(e,a){var n=l.x+c+2*t.toolTipPadding+s+b;h&&(n=l.x-p-c+2*t.toolTipPadding+ +s+b);var r=l.y+(t.toolTipLineHeight-t.fontSize)/2+t.toolTipLineHeight*a+t.toolTipPadding;i.beginPath(),i.setFontSize(t.fontSize),i.setFillStyle(v.fontColor),i.fillText(e.text,n,r+t.fontSize),i.closePath(),i.stroke()}))}function me(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=l.chartData.xAxisData,u=r.xAxisPoints,o=r.eachSpacing,v=n({},{type:"group",width:o/2,meter:{border:4,fillColor:"#FFFFFF"}},l.extra.column),s=[];t.save();var b=-2,c=u.length+2;return l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(t.translate(l._scrollDistance_,0),b=Math.floor(-l._scrollDistance_/o)-2,c=b+l.xAxis.itemCount+4),l.tooltip&&l.tooltip.textList&&l.tooltip.textList.length&&1===i&&ye(l.tooltip.offset.x,l,a,t,o),e.forEach(function(n,r){var h,f,p;h=[].concat(l.chartData.yAxisData.ranges[n.index]),f=h.pop(),p=h.shift();var d=n.data;switch(v.type){case"group":var g=ae(d,f,p,u,o,l,a,i),y=te(d,f,p,u,o,l,a,r,e,i);s.push(y),g=K(g,o,e.length,r,a,l);for(var x=0;x<g.length;x++){var m=g[x];if(null!==m&&x>b&&x<c){t.beginPath(),t.setStrokeStyle(m.color||n.color),t.setLineWidth(1),t.setFillStyle(m.color||n.color);var _=m.x-m.width/2,w=l.height-m.y-l.area[2];t.moveTo(_-1,m.y),t.lineTo(_+m.width-2,m.y),t.lineTo(_+m.width-2,l.height-l.area[2]),t.lineTo(_,l.height-l.area[2]),t.lineTo(_,m.y),t.closePath(),t.stroke(),t.fill()}}break;case"stack":g=te(d,f,p,u,o,l,a,r,e,i);s.push(g),g=Q(g,o,e.length,r,a,l,e);for(var A=0;A<g.length;A++){var S=g[A];if(null!==S&&A>b&&A<c){t.beginPath(),t.setFillStyle(S.color||n.color);_=S.x-S.width/2+1,w=l.height-S.y-l.area[2];var T=l.height-S.y0-l.area[2];r>0&&(w-=T),t.moveTo(_,S.y),t.fillRect(_,S.y,S.width-2,w),t.closePath(),t.fill()}}break;case"meter":g=ae(d,f,p,u,o,l,a,i);if(s.push(g),g=Z(g,o,e.length,r,a,l,v.meter.border),0==r)for(var P=0;P<g.length;P++){var D=g[P];if(null!==D&&P>b&&P<c){t.beginPath(),t.setFillStyle(v.meter.fillColor);_=D.x-D.width/2,w=l.height-D.y-l.area[2];t.moveTo(_,D.y),t.fillRect(_,D.y,D.width,w),t.closePath(),t.fill(),v.meter.border>0&&(t.beginPath(),t.setStrokeStyle(n.color),t.setLineWidth(v.meter.border*l.pixelRatio),t.moveTo(_+.5*v.meter.border,D.y+w),t.lineTo(_+.5*v.meter.border,D.y+.5*v.meter.border),t.lineTo(_+D.width-.5*v.meter.border,D.y+.5*v.meter.border),t.lineTo(_+D.width-.5*v.meter.border,D.y+w),t.stroke())}}else for(var k=0;k<g.length;k++){var O=g[k];if(null!==O&&k>b&&k<c){t.beginPath(),t.setFillStyle(O.color||n.color);_=O.x-O.width/2,w=l.height-O.y-l.area[2];t.moveTo(_,O.y),t.fillRect(_,O.y,O.width,w),t.closePath(),t.fill()}}break}}),!1!==l.dataLabel&&1===i&&e.forEach(function(n,r){var s,b,c;s=[].concat(l.chartData.yAxisData.ranges[n.index]),b=s.pop(),c=s.shift();var h=n.data;switch(v.type){case"group":var f=ae(h,b,c,u,o,l,a,i);f=K(f,o,e.length,r,a,l),be(f,n,a,t);break;case"stack":f=te(h,b,c,u,o,l,a,r,e,i);be(f,n,a,t);break;case"meter":f=ae(h,b,c,u,o,l,a,i);be(f,n,a,t);break}}),t.restore(),{xAxisPoints:u,calPoints:s,eachSpacing:o}}function _e(e,l,a,t,i){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,u=n({},{color:{},average:{}},a.extra.candle);u.color=n({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},u.color),u.average=n({},{show:!1,name:[],day:[],color:t.colors},u.average),a.extra.candle=u;var o=a.chartData.xAxisData,v=o.xAxisPoints,s=o.eachSpacing,b=[];i.save();var h=-2,f=v.length+2,p=0,d=a.width+s;return a._scrollDistance_&&0!==a._scrollDistance_&&!0===a.enableScroll&&(i.translate(a._scrollDistance_,0),h=Math.floor(-a._scrollDistance_/s)-2,f=h+a.xAxis.itemCount+4,p=-a._scrollDistance_-s+a.area[3],d=p+(a.xAxis.itemCount+4)*s),u.average.show&&l.forEach(function(e,l){var n,u,o;n=[].concat(a.chartData.yAxisData.ranges[e.index]),u=n.pop(),o=n.shift();for(var b=e.data,h=ae(b,u,o,v,s,a,t,r),f=j(h),g=0;g<f.length;g++){var y=f[g];if(i.beginPath(),i.setStrokeStyle(e.color),i.setLineWidth(1),1===y.length)i.moveTo(y[0].x,y[0].y),i.arc(y[0].x,y[0].y,1,0,2*Math.PI);else{i.moveTo(y[0].x,y[0].y);for(var x=0,m=0;m<y.length;m++){var _=y[m];if(0==x&&_.x>p&&(i.moveTo(_.x,_.y),x=1),m>0&&_.x>p&&_.x<d){var w=c(y,m-1);i.bezierCurveTo(w.ctrA.x,w.ctrA.y,w.ctrB.x,w.ctrB.y,_.x,_.y)}}i.moveTo(y[0].x,y[0].y)}i.closePath(),i.stroke()}}),e.forEach(function(e,l){var n,o,c;n=[].concat(a.chartData.yAxisData.ranges[e.index]),o=n.pop(),c=n.shift();var p=e.data,d=le(p,o,c,v,s,a,t,r);b.push(d);for(var g=j(d),y=0;y<g[0].length;y++)if(y>h&&y<f){var x=g[0][y];i.beginPath(),p[y][1]-p[y][0]>0?(i.setStrokeStyle(u.color.upLine),i.setFillStyle(u.color.upFill),i.setLineWidth(1*a.pixelRatio),i.moveTo(x[3].x,x[3].y),i.lineTo(x[1].x,x[1].y),i.lineTo(x[1].x-s/4,x[1].y),i.lineTo(x[0].x-s/4,x[0].y),i.lineTo(x[0].x,x[0].y),i.lineTo(x[2].x,x[2].y),i.lineTo(x[0].x,x[0].y),i.lineTo(x[0].x+s/4,x[0].y),i.lineTo(x[1].x+s/4,x[1].y),i.lineTo(x[1].x,x[1].y),i.moveTo(x[3].x,x[3].y)):(i.setStrokeStyle(u.color.downLine),i.setFillStyle(u.color.downFill),i.setLineWidth(1*a.pixelRatio),i.moveTo(x[3].x,x[3].y),i.lineTo(x[0].x,x[0].y),i.lineTo(x[0].x-s/4,x[0].y),i.lineTo(x[1].x-s/4,x[1].y),i.lineTo(x[1].x,x[1].y),i.lineTo(x[2].x,x[2].y),i.lineTo(x[1].x,x[1].y),i.lineTo(x[1].x+s/4,x[1].y),i.lineTo(x[0].x+s/4,x[0].y),i.lineTo(x[0].x,x[0].y),i.moveTo(x[3].x,x[3].y)),i.closePath(),i.fill(),i.stroke()}}),i.restore(),{xAxisPoints:v,calPoints:b,eachSpacing:s}}function we(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,u=n({},{type:"straight",opacity:.2,addLine:!1,width:2,gradient:!1},l.extra.area),o=l.chartData.xAxisData,v=o.xAxisPoints,s=o.eachSpacing,b=l.height-l.area[2],h=[];t.save();var f=0,p=l.width+s;return l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(t.translate(l._scrollDistance_,0),f=-l._scrollDistance_-s+l.area[3],p=f+(l.xAxis.itemCount+4)*s),e.forEach(function(e,n){var o,d,g;o=[].concat(l.chartData.yAxisData.ranges[e.index]),d=o.pop(),g=o.shift();var y=e.data,x=ae(y,d,g,v,s,l,a,i);h.push(x);for(var m=j(x),_=0;_<m.length;_++){var w=m[_];if(t.beginPath(),t.setStrokeStyle(r(e.color,u.opacity)),u.gradient){var A=t.createLinearGradient(0,l.area[0],0,l.height-l.area[2]);A.addColorStop("0",r(e.color,u.opacity)),A.addColorStop("1.0",r("#FFFFFF",.1)),t.setFillStyle(A)}else t.setFillStyle(r(e.color,u.opacity));if(t.setLineWidth(u.width*l.pixelRatio),w.length>1){var S=w[0],T=w[w.length-1];t.moveTo(S.x,S.y);var P=0;if("curve"===u.type)for(var D=0;D<w.length;D++){var k=w[D];if(0==P&&k.x>f&&(t.moveTo(k.x,k.y),P=1),D>0&&k.x>f&&k.x<p){var O=c(w,D-1);t.bezierCurveTo(O.ctrA.x,O.ctrA.y,O.ctrB.x,O.ctrB.y,k.x,k.y)}}else for(var M=0;M<w.length;M++){var $=w[M];0==P&&$.x>f&&(t.moveTo($.x,$.y),P=1),M>0&&$.x>f&&$.x<p&&t.lineTo($.x,$.y)}t.lineTo(T.x,b),t.lineTo(S.x,b),t.lineTo(S.x,S.y)}else{var F=w[0];t.moveTo(F.x-s/2,F.y),t.lineTo(F.x+s/2,F.y),t.lineTo(F.x+s/2,b),t.lineTo(F.x-s/2,b),t.moveTo(F.x-s/2,F.y)}if(t.closePath(),t.fill(),u.addLine){if("dash"==e.lineType){var C=e.dashLength?e.dashLength:8;C*=l.pixelRatio,t.setLineDash([C,C])}if(t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(u.width*l.pixelRatio),1===w.length)t.moveTo(w[0].x,w[0].y),t.arc(w[0].x,w[0].y,1,0,2*Math.PI);else{t.moveTo(w[0].x,w[0].y);var R=0;if("curve"===u.type)for(var L=0;L<w.length;L++){var I=w[L];if(0==R&&I.x>f&&(t.moveTo(I.x,I.y),R=1),L>0&&I.x>f&&I.x<p){var E=c(w,L-1);t.bezierCurveTo(E.ctrA.x,E.ctrA.y,E.ctrB.x,E.ctrB.y,I.x,I.y)}}else for(var z=0;z<w.length;z++){var N=w[z];0==R&&N.x>f&&(t.moveTo(N.x,N.y),R=1),z>0&&N.x>f&&N.x<p&&t.lineTo(N.x,N.y)}t.moveTo(w[0].x,w[0].y)}t.stroke(),t.setLineDash([])}}!1!==l.dataPointShape&&ve(x,e.color,e.pointShape,t,l)}),!1!==l.dataLabel&&1===i&&e.forEach(function(e,n){var r,u,o;r=[].concat(l.chartData.yAxisData.ranges[e.index]),u=r.pop(),o=r.shift();var b=e.data,c=ae(b,u,o,v,s,l,a,i);be(c,e,a,t)}),t.restore(),{xAxisPoints:v,calPoints:h,eachSpacing:s}}function Ae(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=n({},{type:"straight",width:2},l.extra.line);r.width*=l.pixelRatio;var u=l.chartData.xAxisData,o=u.xAxisPoints,v=u.eachSpacing,s=[];t.save();var b=0,h=l.width+v;return l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(t.translate(l._scrollDistance_,0),b=-l._scrollDistance_-v+l.area[3],h=b+(l.xAxis.itemCount+4)*v),e.forEach(function(e,n){var u,f,p;u=[].concat(l.chartData.yAxisData.ranges[e.index]),f=u.pop(),p=u.shift();var d=e.data,g=ae(d,f,p,o,v,l,a,i);s.push(g);var y=j(g);if("dash"==e.lineType){var x=e.dashLength?e.dashLength:8;x*=l.pixelRatio,t.setLineDash([x,x])}t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(r.width),y.forEach(function(e,l){if(1===e.length)t.moveTo(e[0].x,e[0].y),t.arc(e[0].x,e[0].y,1,0,2*Math.PI);else{t.moveTo(e[0].x,e[0].y);var a=0;if("curve"===r.type)for(var n=0;n<e.length;n++){var i=e[n];if(0==a&&i.x>b&&(t.moveTo(i.x,i.y),a=1),n>0&&i.x>b&&i.x<h){var u=c(e,n-1);t.bezierCurveTo(u.ctrA.x,u.ctrA.y,u.ctrB.x,u.ctrB.y,i.x,i.y)}}else for(var o=0;o<e.length;o++){var v=e[o];0==a&&v.x>b&&(t.moveTo(v.x,v.y),a=1),o>0&&v.x>b&&v.x<h&&t.lineTo(v.x,v.y)}t.moveTo(e[0].x,e[0].y)}}),t.stroke(),t.setLineDash([]),!1!==l.dataPointShape&&ve(g,e.color,e.pointShape,t,l)}),!1!==l.dataLabel&&1===i&&e.forEach(function(e,n){var r,u,s;r=[].concat(l.chartData.yAxisData.ranges[e.index]),u=r.pop(),s=r.shift();var b=e.data,c=ae(b,u,s,o,v,l,a,i);be(c,e,a,t)}),t.restore(),{xAxisPoints:o,calPoints:s,eachSpacing:v}}function Se(e,l,a,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=l.chartData.xAxisData,u=i.xAxisPoints,o=i.eachSpacing,v=l.height-l.area[2],s=[],b=0,h=0;e.forEach(function(e,l){"column"==e.type&&(h+=1)}),t.save();var f=-2,p=u.length+2,d=0,g=l.width+o;if(l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(t.translate(l._scrollDistance_,0),f=Math.floor(-l._scrollDistance_/o)-2,p=f+l.xAxis.itemCount+4,d=-l._scrollDistance_-o+l.area[3],g=d+(l.xAxis.itemCount+4)*o),e.forEach(function(e,i){var y,x,m;y=[].concat(l.chartData.yAxisData.ranges[e.index]),x=y.pop(),m=y.shift();var _=e.data,w=ae(_,x,m,u,o,l,a,n);if(s.push(w),"column"==e.type){w=K(w,o,h,b,a,l);for(var A=0;A<w.length;A++){var S=w[A];if(null!==S&&A>f&&A<p){t.beginPath(),t.setStrokeStyle(S.color||e.color),t.setLineWidth(1),t.setFillStyle(S.color||e.color);var T=S.x-S.width/2;l.height,S.y,l.area[2];t.moveTo(T,S.y),t.moveTo(T-1,S.y),t.lineTo(T+S.width-2,S.y),t.lineTo(T+S.width-2,l.height-l.area[2]),t.lineTo(T,l.height-l.area[2]),t.lineTo(T,S.y),t.closePath(),t.stroke(),t.fill(),t.closePath(),t.fill()}}b+=1}if("area"==e.type)for(var P=j(w),D=0;D<P.length;D++){var k=P[D];if(t.beginPath(),t.setStrokeStyle(e.color),t.setFillStyle(r(e.color,.2)),t.setLineWidth(2*l.pixelRatio),k.length>1){var O=k[0],M=k[k.length-1];t.moveTo(O.x,O.y);var $=0;if("curve"===e.style)for(var F=0;F<k.length;F++){var C=k[F];if(0==$&&C.x>d&&(t.moveTo(C.x,C.y),$=1),F>0&&C.x>d&&C.x<g){var R=c(k,F-1);t.bezierCurveTo(R.ctrA.x,R.ctrA.y,R.ctrB.x,R.ctrB.y,C.x,C.y)}}else for(var L=0;L<k.length;L++){var I=k[L];0==$&&I.x>d&&(t.moveTo(I.x,I.y),$=1),L>0&&I.x>d&&I.x<g&&t.lineTo(I.x,I.y)}t.lineTo(M.x,v),t.lineTo(O.x,v),t.lineTo(O.x,O.y)}else{var E=k[0];t.moveTo(E.x-o/2,E.y),t.lineTo(E.x+o/2,E.y),t.lineTo(E.x+o/2,v),t.lineTo(E.x-o/2,v),t.moveTo(E.x-o/2,E.y)}t.closePath(),t.fill()}if("line"==e.type){var z=j(w);z.forEach(function(a,n){if("dash"==e.lineType){var i=e.dashLength?e.dashLength:8;i*=l.pixelRatio,t.setLineDash([i,i])}if(t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(2*l.pixelRatio),1===a.length)t.moveTo(a[0].x,a[0].y),t.arc(a[0].x,a[0].y,1,0,2*Math.PI);else{t.moveTo(a[0].x,a[0].y);var r=0;if("curve"==e.style)for(var u=0;u<a.length;u++){var o=a[u];if(0==r&&o.x>d&&(t.moveTo(o.x,o.y),r=1),u>0&&o.x>d&&o.x<g){var v=c(a,u-1);t.bezierCurveTo(v.ctrA.x,v.ctrA.y,v.ctrB.x,v.ctrB.y,o.x,o.y)}}else for(var s=0;s<a.length;s++){var b=a[s];0==r&&b.x>d&&(t.moveTo(b.x,b.y),r=1),s>0&&b.x>d&&b.x<g&&t.lineTo(b.x,b.y)}t.moveTo(a[0].x,a[0].y)}t.stroke(),t.setLineDash([])})}"point"==e.type&&(e.addPoint=!0),1==e.addPoint&&"column"!==e.type&&ve(w,e.color,e.pointShape,t,l)}),!1!==l.dataLabel&&1===n){b=0;e.forEach(function(e,i){var r,v,s;r=[].concat(l.chartData.yAxisData.ranges[e.index]),v=r.pop(),s=r.shift();var c=e.data,f=ae(c,v,s,u,o,l,a,n);"column"!==e.type?be(f,e,a,t):(f=K(f,o,h,b,a,l),be(f,e,a,t),b+=1)})}return t.restore(),{xAxisPoints:u,calPoints:s,eachSpacing:o}}function Te(e,l,a,t,n,i){var r=e.extra.tooltip||{};r.horizentalLine&&e.tooltip&&1===t&&("line"==e.type||"area"==e.type||"column"==e.type||"candle"==e.type||"mix"==e.type)&&ge(e,l,a,n,i),a.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&a.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===t&&xe(e.tooltip.textList,e.tooltip.offset,e,l,a,n,i),a.restore()}function Pe(e,l,a,t){var n=l.chartData.xAxisData,i=n.xAxisPoints,r=n.startX,u=n.endX,o=n.eachSpacing,v="center";"line"!=l.type&&"area"!=l.type||(v=l.xAxis.boundaryGap);var s=l.height-l.area[2],c=l.area[0];if(l.enableScroll&&l.xAxis.scrollShow){var h=l.height-l.area[2]+a.xAxisHeight,f=u-r,p=o*(i.length-1),d=f*f/p,y=0;l._scrollDistance_&&(y=-l._scrollDistance_*f/p),t.beginPath(),t.setLineCap("round"),t.setLineWidth(6*l.pixelRatio),t.setStrokeStyle(l.xAxis.scrollBackgroundColor||"#EFEBEF"),t.moveTo(r,h),t.lineTo(u,h),t.stroke(),t.closePath(),t.beginPath(),t.setLineCap("round"),t.setLineWidth(6*l.pixelRatio),t.setStrokeStyle(l.xAxis.scrollColor||"#A6A6A6"),t.moveTo(r+y,h),t.lineTo(r+y+d,h),t.stroke(),t.closePath(),t.setLineCap("butt")}if(t.save(),l._scrollDistance_&&0!==l._scrollDistance_&&t.translate(l._scrollDistance_,0),!0===l.xAxis.calibration&&(t.setStrokeStyle(l.xAxis.gridColor||"#cccccc"),t.setLineCap("butt"),t.setLineWidth(1*l.pixelRatio),i.forEach(function(e,a){a>0&&(t.beginPath(),t.moveTo(e-o/2,s),t.lineTo(e-o/2,s+3*l.pixelRatio),t.closePath(),t.stroke())})),!0!==l.xAxis.disableGrid&&(t.setStrokeStyle(l.xAxis.gridColor||"#cccccc"),t.setLineCap("butt"),t.setLineWidth(1*l.pixelRatio),"dash"==l.xAxis.gridType&&t.setLineDash([l.xAxis.dashLength,l.xAxis.dashLength]),l.xAxis.gridEval=l.xAxis.gridEval||1,i.forEach(function(e,a){a%l.xAxis.gridEval==0&&(t.beginPath(),t.moveTo(e,s),t.lineTo(e,c),t.stroke())}),t.setLineDash([])),!0!==l.xAxis.disabled){var x=e.length;l.xAxis.labelCount&&(x=l.xAxis.itemCount?Math.ceil(e.length/l.xAxis.itemCount*l.xAxis.labelCount):l.xAxis.labelCount,x-=1);for(var m=Math.ceil(e.length/x),_=[],w=e.length,A=0;A<w;A++)A%m!==0?_.push(""):_.push(e[A]);_[w-1]=e[w-1];var S=l.xAxis.fontSize||a.fontSize;0===a._xAxisTextAngle_?_.forEach(function(e,n){var r=-g(String(e),S)/2;"center"==v&&(r+=o/2);var u=0;l.xAxis.scrollShow&&(u=6*l.pixelRatio),t.beginPath(),t.setFontSize(S),t.setFillStyle(l.xAxis.fontColor||"#666666"),t.fillText(String(e),i[n]+r,s+S+(a.xAxisHeight-u-S)/2),t.closePath(),t.stroke()}):_.forEach(function(e,n){t.save(),t.beginPath(),t.setFontSize(S),t.setFillStyle(l.xAxis.fontColor||"#666666");var r=g(String(e),S),u=-r;"center"==v&&(u+=o/2);var c=b(i[n]+o/2,s+S/2+5,l.height),h=c.transX,f=c.transY;t.rotate(-1*a._xAxisTextAngle_),t.translate(h,f),t.fillText(String(e),i[n]+u,s+S+5),t.closePath(),t.stroke(),t.restore()})}t.restore(),l.xAxis.axisLine&&(t.beginPath(),t.setStrokeStyle(l.xAxis.axisLineColor),t.setLineWidth(1*l.pixelRatio),t.moveTo(r,l.height-l.area[2]),t.lineTo(u,l.height-l.area[2]),t.stroke())}function De(e,l,a,t){if(!0!==l.yAxis.disableGrid){for(var n=l.height-l.area[0]-l.area[2],i=n/l.yAxis.splitNumber,r=l.area[3],u=l.chartData.xAxisData.xAxisPoints,o=l.chartData.xAxisData.eachSpacing,v=o*(u.length-1),s=r+v,b=[],c=0;c<l.yAxis.splitNumber+1;c++)b.push(l.height-l.area[2]-i*c);t.save(),l._scrollDistance_&&0!==l._scrollDistance_&&t.translate(l._scrollDistance_,0),"dash"==l.yAxis.gridType&&t.setLineDash([l.yAxis.dashLength,l.yAxis.dashLength]),t.setStrokeStyle(l.yAxis.gridColor),t.setLineWidth(1*l.pixelRatio),b.forEach(function(e,l){t.beginPath(),t.moveTo(r,e),t.lineTo(s,e),t.stroke()}),t.setLineDash([]),t.restore()}}function ke(e,l,a,t){if(!0!==l.yAxis.disabled){var n=l.height-l.area[0]-l.area[2],i=n/l.yAxis.splitNumber,r=l.area[3],u=l.width-l.area[1],o=l.height-l.area[2],v=o+a.xAxisHeight;l.xAxis.scrollShow&&(v-=3*l.pixelRatio),l.xAxis.rotateLabel&&(v=l.height-l.area[2]+3),t.beginPath(),t.setFillStyle(l.background||"#ffffff"),l._scrollDistance_<0&&t.fillRect(0,0,r,v),1==l.enableScroll&&t.fillRect(u,0,l.width,v),t.closePath(),t.stroke();for(var s=[],b=0;b<=l.yAxis.splitNumber;b++)s.push(l.area[0]+i*b);for(var c=l.area[3],h=l.width-l.area[1],f=function(e){var n=l.yAxis.data[e];if(!0!==n.disabled){var i=l.chartData.yAxisData.rangesFormat[e],r=n.fontSize||a.fontSize,u=l.chartData.yAxisData.yAxisWidth[e];if(i.forEach(function(e,a){var i=s[a]?s[a]:o;t.beginPath(),t.setFontSize(r),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(n.axisLineColor||"#cccccc"),t.setFillStyle(n.fontColor||"#666666"),"left"==u.position?(t.fillText(String(e),c-u.width,i+r/2),1==n.calibration&&(t.moveTo(c,i),t.lineTo(c-3*l.pixelRatio,i))):(t.fillText(String(e),h+4*l.pixelRatio,i+r/2),1==n.calibration&&(t.moveTo(h,i),t.lineTo(h+3*l.pixelRatio,i))),t.closePath(),t.stroke()}),!1!==n.axisLine&&(t.beginPath(),t.setStrokeStyle(n.axisLineColor||"#cccccc"),t.setLineWidth(1*l.pixelRatio),"left"==u.position?(t.moveTo(c,l.height-l.area[2]),t.lineTo(c,l.area[0])):(t.moveTo(h,l.height-l.area[2]),t.lineTo(h,l.area[0])),t.stroke()),l.yAxis.showTitle){var v=n.titleFontSize||a.fontSize,b=n.title;t.beginPath(),t.setFontSize(v),t.setFillStyle(n.titleFontColor||"#666666"),"left"==u.position?t.fillText(b,c-g(b,v)/2,l.area[0]-10*l.pixelRatio):t.fillText(b,h-g(b,v)/2,l.area[0]-10*l.pixelRatio),t.closePath(),t.stroke()}"left"==u.position?c-=u.width+l.yAxis.padding:h+=u.width+l.yAxis.padding}},p=0;p<l.yAxis.data.length;p++)f(p)}}function Oe(e,l,a,t,n){if(!1!==l.legend.show){var i=n.legendData,r=i.points,u=i.area,o=l.legend.padding,v=l.legend.fontSize,s=15*l.pixelRatio,b=5*l.pixelRatio,c=l.legend.itemGap,h=Math.max(l.legend.lineHeight*l.pixelRatio,v);t.beginPath(),t.setLineWidth(l.legend.borderWidth),t.setStrokeStyle(l.legend.borderColor),t.setFillStyle(l.legend.backgroundColor),t.moveTo(u.start.x,u.start.y),t.rect(u.start.x,u.start.y,u.width,u.height),t.closePath(),t.fill(),t.stroke(),r.forEach(function(e,n){var r=0,f=0;r=i.widthArr[n],f=i.heightArr[n];var p=0,d=0;"top"==l.legend.position||"bottom"==l.legend.position?(p=u.start.x+(u.width-r)/2,d=u.start.y+o+n*h):(r=0==n?0:i.widthArr[n-1],p=u.start.x+o+r,d=u.start.y+o+(u.height-f)/2),t.setFontSize(a.fontSize);for(var y=0;y<e.length;y++){var x=e[y];switch(x.area=[0,0,0,0],x.area[0]=p,x.area[1]=d,x.area[3]=d+h,t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(x.show?x.color:l.legend.hiddenColor),t.setFillStyle(x.show?x.color:l.legend.hiddenColor),x.legendShape){case"line":t.moveTo(p,d+.5*h-2*l.pixelRatio),t.fillRect(p,d+.5*h-2*l.pixelRatio,15*l.pixelRatio,4*l.pixelRatio);break;case"triangle":t.moveTo(p+7.5*l.pixelRatio,d+.5*h-5*l.pixelRatio),t.lineTo(p+2.5*l.pixelRatio,d+.5*h+5*l.pixelRatio),t.lineTo(p+12.5*l.pixelRatio,d+.5*h+5*l.pixelRatio),t.lineTo(p+7.5*l.pixelRatio,d+.5*h-5*l.pixelRatio);break;case"diamond":t.moveTo(p+7.5*l.pixelRatio,d+.5*h-5*l.pixelRatio),t.lineTo(p+2.5*l.pixelRatio,d+.5*h),t.lineTo(p+7.5*l.pixelRatio,d+.5*h+5*l.pixelRatio),t.lineTo(p+12.5*l.pixelRatio,d+.5*h),t.lineTo(p+7.5*l.pixelRatio,d+.5*h-5*l.pixelRatio);break;case"circle":t.moveTo(p+7.5*l.pixelRatio,d+.5*h),t.arc(p+7.5*l.pixelRatio,d+.5*h,5*l.pixelRatio,0,2*Math.PI);break;case"rect":t.moveTo(p,d+.5*h-5*l.pixelRatio),t.fillRect(p,d+.5*h-5*l.pixelRatio,15*l.pixelRatio,10*l.pixelRatio);break;default:t.moveTo(p,d+.5*h-5*l.pixelRatio),t.fillRect(p,d+.5*h-5*l.pixelRatio,15*l.pixelRatio,10*l.pixelRatio)}t.closePath(),t.fill(),t.stroke(),p+=s+b;var m=.5*h+.5*v-2;t.beginPath(),t.setFontSize(v),t.setFillStyle(x.show?l.legend.fontColor:l.legend.hiddenColor),t.fillText(x.name,p,d+m),t.closePath(),t.stroke(),"top"==l.legend.position||"bottom"==l.legend.position?(p+=g(x.name,v)+c,x.area[2]=p):(x.area[2]=p+g(x.name,v)+c,p-=s+b,d+=h)}})}}function Me(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,u=n({},{activeOpacity:.5,activeRadius:10*l.pixelRatio,offsetAngle:0,labelWidth:15*l.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},l.extra.pie),o={x:l.area[3]+(l.width-l.area[1]-l.area[3])/2,y:l.area[0]+(l.height-l.area[0]-l.area[2])/2};0==a.pieChartLinePadding&&(a.pieChartLinePadding=u.activeRadius);var v=Math.min((l.width-l.area[1]-l.area[3])/2-a.pieChartLinePadding-a.pieChartTextPadding-a._pieTextMaxLength_,(l.height-l.area[0]-l.area[2])/2-a.pieChartLinePadding-a.pieChartTextPadding);e=V(e,v,i);var s=u.activeRadius;if(e=e.map(function(e){return e._start_+=u.offsetAngle*Math.PI/180,e}),e.forEach(function(e,a){l.tooltip&&l.tooltip.index==a&&(t.beginPath(),t.setFillStyle(r(e.color,l.extra.pie.activeOpacity||.5)),t.moveTo(o.x,o.y),t.arc(o.x,o.y,e._radius_+s,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill()),t.beginPath(),t.setLineWidth(u.borderWidth*l.pixelRatio),t.lineJoin="round",t.setStrokeStyle(u.borderColor),t.setFillStyle(e.color),t.moveTo(o.x,o.y),t.arc(o.x,o.y,e._radius_,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill(),1==u.border&&t.stroke()}),"ring"===l.type){var b=.6*v;"number"===typeof l.extra.pie.ringWidth&&l.extra.pie.ringWidth>0&&(b=Math.max(0,v-l.extra.pie.ringWidth)),t.beginPath(),t.setFillStyle(l.background||"#ffffff"),t.moveTo(o.x,o.y),t.arc(o.x,o.y,b,0,2*Math.PI),t.closePath(),t.fill()}if(!1!==l.dataLabel&&1===i){for(var c=!1,h=0,f=e.length;h<f;h++)if(e[h].data>0){c=!0;break}c&&fe(e,l,a,t,v,o)}return 1===i&&"ring"===l.type&&se(l,a,t,o),{center:o,radius:v,series:e}}function $e(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,u=n({},{type:"area",activeOpacity:.5,activeRadius:10*l.pixelRatio,offsetAngle:0,labelWidth:15*l.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},l.extra.rose);0==a.pieChartLinePadding&&(a.pieChartLinePadding=u.activeRadius);var o={x:l.area[3]+(l.width-l.area[1]-l.area[3])/2,y:l.area[0]+(l.height-l.area[0]-l.area[2])/2},v=Math.min((l.width-l.area[1]-l.area[3])/2-a.pieChartLinePadding-a.pieChartTextPadding-a._pieTextMaxLength_,(l.height-l.area[0]-l.area[2])/2-a.pieChartLinePadding-a.pieChartTextPadding),s=u.minRadius||.5*v;e=U(e,u.type,s,v,i);var b=u.activeRadius;if(e=e.map(function(e){return e._start_+=(u.offsetAngle||0)*Math.PI/180,e}),e.forEach(function(e,a){l.tooltip&&l.tooltip.index==a&&(t.beginPath(),t.setFillStyle(r(e.color,u.activeOpacity||.5)),t.moveTo(o.x,o.y),t.arc(o.x,o.y,b+e._radius_,e._start_,e._start_+2*e._rose_proportion_*Math.PI),t.closePath(),t.fill()),t.beginPath(),t.setLineWidth(u.borderWidth*l.pixelRatio),t.lineJoin="round",t.setStrokeStyle(u.borderColor),t.setFillStyle(e.color),t.moveTo(o.x,o.y),t.arc(o.x,o.y,e._radius_,e._start_,e._start_+2*e._rose_proportion_*Math.PI),t.closePath(),t.fill(),1==u.border&&t.stroke()}),!1!==l.dataLabel&&1===i){for(var c=!1,h=0,f=e.length;h<f;h++)if(e[h].data>0){c=!0;break}c&&fe(e,l,a,t,v,o)}return{center:o,radius:v,series:e}}function Fe(e,l,a,t){var i,r,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=n({},{startAngle:.75,endAngle:.25,type:"default",width:12*l.pixelRatio,gap:2*l.pixelRatio},l.extra.arcbar);e=X(e,o,u),i=o.center?o.center:{x:l.width/2,y:l.height/2},o.radius?r=o.radius:(r=Math.min(i.x,i.y),r-=5*l.pixelRatio,r-=o.width/2);for(var v=0;v<e.length;v++){var s=e[v];t.setLineWidth(o.width),t.setStrokeStyle(o.backgroundColor||"#E9E9E9"),t.setLineCap("round"),t.beginPath(),"default"==o.type?t.arc(i.x,i.y,r-(o.width+o.gap)*v,o.startAngle*Math.PI,o.endAngle*Math.PI,!1):t.arc(i.x,i.y,r-(o.width+o.gap)*v,0,2*Math.PI,!1),t.stroke(),t.setLineWidth(o.width),t.setStrokeStyle(s.color),t.setLineCap("round"),t.beginPath(),t.arc(i.x,i.y,r-(o.width+o.gap)*v,o.startAngle*Math.PI,s._proportion_*Math.PI,!1),t.stroke()}return se(l,a,t,i),{center:i,radius:r,series:e}}function Ce(e,l,a,t,i){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=n({},{type:"default",startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},a.extra.gauge);void 0==o.oldAngle&&(o.oldAngle=o.startAngle),void 0==o.oldData&&(o.oldData=0),e=G(e,o.startAngle,o.endAngle);var v={x:a.width/2,y:a.height/2},s=Math.min(v.x,v.y);s-=5*a.pixelRatio,s-=o.width/2;var b=s-o.width,c=0;if("progress"==o.type){var h=s-3*o.width;i.beginPath();var f=i.createLinearGradient(v.x,v.y-h,v.x,v.y+h);f.addColorStop("0",r(l[0].color,.3)),f.addColorStop("1.0",r("#FFFFFF",.1)),i.setFillStyle(f),i.arc(v.x,v.y,h,0,2*Math.PI,!1),i.fill(),i.setLineWidth(o.width),i.setStrokeStyle(r(l[0].color,.3)),i.setLineCap("round"),i.beginPath(),i.arc(v.x,v.y,b,o.startAngle*Math.PI,o.endAngle*Math.PI,!1),i.stroke(),c=o.startAngle-o.endAngle+1;o.splitLine.splitNumber;var p=c/o.splitLine.splitNumber/o.splitLine.childNumber,d=-s-.5*o.width-o.splitLine.fixRadius,g=-s-o.width-o.splitLine.fixRadius+o.splitLine.width;i.save(),i.translate(v.x,v.y),i.rotate((o.startAngle-1)*Math.PI);for(var y=o.splitLine.splitNumber*o.splitLine.childNumber+1,x=l[0].data*u,m=0;m<y;m++)i.beginPath(),x>m/y?i.setStrokeStyle(r(l[0].color,1)):i.setStrokeStyle(r(l[0].color,.3)),i.setLineWidth(3*a.pixelRatio),i.moveTo(d,0),i.lineTo(g,0),i.stroke(),i.rotate(p*Math.PI);i.restore(),l=X(l,o,u),i.setLineWidth(o.width),i.setStrokeStyle(l[0].color),i.setLineCap("round"),i.beginPath(),i.arc(v.x,v.y,b,o.startAngle*Math.PI,l[0]._proportion_*Math.PI,!1),i.stroke();var _=s-2.5*o.width;i.save(),i.translate(v.x,v.y),i.rotate((l[0]._proportion_-1)*Math.PI),i.beginPath(),i.setLineWidth(o.width/3);var w=i.createLinearGradient(0,.6*-_,0,.6*_);w.addColorStop("0",r("#FFFFFF",0)),w.addColorStop("0.5",r(l[0].color,1)),w.addColorStop("1.0",r("#FFFFFF",0)),i.setStrokeStyle(w),i.arc(0,0,_,.85*Math.PI,1.15*Math.PI,!1),i.stroke(),i.beginPath(),i.setLineWidth(1),i.setStrokeStyle(l[0].color),i.setFillStyle(l[0].color),i.moveTo(-_-o.width/3/2,-4),i.lineTo(-_-o.width/3/2-4,0),i.lineTo(-_-o.width/3/2,4),i.lineTo(-_-o.width/3/2,-4),i.stroke(),i.fill(),i.restore()}else{i.setLineWidth(o.width),i.setLineCap("butt");for(var A=0;A<e.length;A++){var S=e[A];i.beginPath(),i.setStrokeStyle(S.color),i.arc(v.x,v.y,s,S._startAngle_*Math.PI,S._endAngle_*Math.PI,!1),i.stroke()}i.save(),c=o.startAngle-o.endAngle+1;var T=c/o.splitLine.splitNumber,P=c/o.splitLine.splitNumber/o.splitLine.childNumber,D=-s-.5*o.width-o.splitLine.fixRadius,k=-s-.5*o.width-o.splitLine.fixRadius+o.splitLine.width,O=-s-.5*o.width-o.splitLine.fixRadius+o.splitLine.childWidth;i.translate(v.x,v.y),i.rotate((o.startAngle-1)*Math.PI);for(var M=0;M<o.splitLine.splitNumber+1;M++)i.beginPath(),i.setStrokeStyle(o.splitLine.color),i.setLineWidth(2*a.pixelRatio),i.moveTo(D,0),i.lineTo(k,0),i.stroke(),i.rotate(T*Math.PI);i.restore(),i.save(),i.translate(v.x,v.y),i.rotate((o.startAngle-1)*Math.PI);for(var $=0;$<o.splitLine.splitNumber*o.splitLine.childNumber+1;$++)i.beginPath(),i.setStrokeStyle(o.splitLine.color),i.setLineWidth(1*a.pixelRatio),i.moveTo(D,0),i.lineTo(O,0),i.stroke(),i.rotate(P*Math.PI);i.restore(),l=J(l,e,o,u);for(var F=0;F<l.length;F++){var C=l[F];i.save(),i.translate(v.x,v.y),i.rotate((C._proportion_-1)*Math.PI),i.beginPath(),i.setFillStyle(C.color),i.moveTo(o.pointer.width,0),i.lineTo(0,-o.pointer.width/2),i.lineTo(-b,0),i.lineTo(0,o.pointer.width/2),i.lineTo(o.pointer.width,0),i.closePath(),i.fill(),i.beginPath(),i.setFillStyle("#FFFFFF"),i.arc(0,0,o.pointer.width/6,0,2*Math.PI,!1),i.fill(),i.restore()}!1!==a.dataLabel&&ce(o,s,v,a,t,i)}return se(a,t,i,v),1===u&&"gauge"===a.type&&(a.extra.gauge.oldAngle=l[0]._proportion_,a.extra.gauge.oldData=l[0].data),{center:v,radius:s,innerRadius:b,categories:e,totalAngle:c}}function Re(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,u=n({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2,gridCount:3},l.extra.radar),o=A(l.categories.length),v={x:l.area[3]+(l.width-l.area[1]-l.area[3])/2,y:l.area[0]+(l.height-l.area[0]-l.area[2])/2},s=Math.min(v.x-(w(l.categories)+a.radarLabelTextMargin),v.y-a.radarLabelTextMargin);s-=l.padding[1],t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(u.gridColor),o.forEach(function(e){var l=h(s*Math.cos(e),s*Math.sin(e),v);t.moveTo(v.x,v.y),t.lineTo(l.x,l.y)}),t.stroke(),t.closePath();for(var b=function(e){var a={};t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(u.gridColor),o.forEach(function(l,n){var i=h(s/u.gridCount*e*Math.cos(l),s/u.gridCount*e*Math.sin(l),v);0===n?(a=i,t.moveTo(i.x,i.y)):t.lineTo(i.x,i.y)}),t.lineTo(a.x,a.y),t.stroke(),t.closePath()},c=1;c<=u.gridCount;c++)b(c);var f=H(o,v,s,e,l,i);return f.forEach(function(e,a){if(t.beginPath(),t.setFillStyle(r(e.color,u.opacity)),e.data.forEach(function(e,l){0===l?t.moveTo(e.position.x,e.position.y):t.lineTo(e.position.x,e.position.y)}),t.closePath(),t.fill(),!1!==l.dataPointShape){var n=e.data.map(function(e){return e.position});ve(n,e.color,e.pointShape,t,l)}}),he(o,s,v,l,a,t),{center:v,radius:s,angleList:o}}function Le(e,l,a){a=0==a?1:a;for(var t=[],n=0;n<a;n++)t[n]=Math.random();return Math.floor(t.reduce(function(e,l){return e+l})/a*(l-e))+e}function Ie(e,l,a,t){for(var n=!1,i=0;i<l.length;i++)if(l[i].area){if(!(e[3]<l[i].area[1]||e[0]>l[i].area[2]||e[1]>l[i].area[3]||e[2]<l[i].area[0])){n=!0;break}if(e[0]<0||e[1]<0||e[2]>a||e[3]>t){n=!0;break}n=!1}return n}function Ee(e){var l,a={};a.xMin=180,a.xMax=0,a.yMin=90,a.yMax=0;for(var t=0;t<e.length;t++)for(var n=e[t].geometry.coordinates,i=0;i<n.length;i++){l=n[i],1==l.length&&(l=l[0]);for(var r=0;r<l.length;r++){var u=l[r][0],o=l[r][1],v={x:u,y:o};a.xMin=a.xMin<v.x?a.xMin:v.x,a.xMax=a.xMax>v.x?a.xMax:v.x,a.yMin=a.yMin<v.y?a.yMin:v.y,a.yMax=a.yMax>v.y?a.yMax:v.y}}return a}function je(e,l,a,t,n,i){return{x:(l-a.xMin)*t+n,y:(a.yMax-e)*t+i}}function ze(e,l,a,t,n,i){return{x:(l-n)/t+a.xMin,y:a.yMax-(e-i)/t}}function Ne(e,l,a){if(l[1]==a[1])return!1;if(l[1]>e[1]&&a[1]>e[1])return!1;if(l[1]<e[1]&&a[1]<e[1])return!1;if(l[1]==e[1]&&a[1]>e[1])return!1;if(a[1]==e[1]&&l[1]>e[1])return!1;if(l[0]<e[0]&&a[1]<e[1])return!1;var t=a[0]-(a[0]-l[0])*(a[1]-e[1])/(a[1]-l[1]);return!(t<e[0])}function Be(e,l){for(var a=0,t=0;t<l.length;t++){var n=l[t][0];1==l.length&&(n=l[t][0]);for(var i=0;i<n.length-1;i++){var r=n[i],u=n[i+1];Ne(e,r,u)&&(a+=1)}}return a%2==1}function We(e,l,a,t){var i,u,o=n({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},l.extra.map),v=e,s=Ee(v),b=l.width/Math.abs(s.xMax-s.xMin),c=l.height/Math.abs(s.yMax-s.yMin),h=b<c?b:c,f=l.width/2-Math.abs(s.xMax-s.xMin)/2*h,p=l.height/2-Math.abs(s.yMax-s.yMin)/2*h;t.beginPath(),t.clearRect(0,0,l.width,l.height),t.setFillStyle(l.background||"#FFFFFF"),t.rect(0,0,l.width,l.height),t.fill();for(var d=0;d<v.length;d++){t.beginPath(),t.setLineWidth(o.borderWidth*l.pixelRatio),t.setStrokeStyle(o.borderColor),t.setFillStyle(r(e[d].color,o.fillOpacity)),l.tooltip&&l.tooltip.index==d&&(t.setStrokeStyle(o.activeBorderColor),t.setFillStyle(r(o.activeFillColor,o.activeFillOpacity)));for(var y=v[d].geometry.coordinates,x=0;x<y.length;x++){i=y[x],1==i.length&&(i=i[0]);for(var m=0;m<i.length;m++)u=je(i[m][1],i[m][0],s,h,f,p),0===m?(t.beginPath(),t.moveTo(u.x,u.y)):t.lineTo(u.x,u.y);t.fill(),1==o.border&&t.stroke()}if(1==l.dataLabel){var _=v[d].properties.centroid;if(_){u=je(_[1],_[0],s,h,f,p);var w=v[d].textSize||a.fontSize,A=v[d].properties.name;t.beginPath(),t.setFontSize(w),t.setFillStyle(v[d].textColor||"#666666"),t.fillText(A,u.x-g(A,w)/2,u.y+w/2),t.closePath(),t.stroke()}}}l.chartData.mapData={bounds:s,scale:h,xoffset:f,yoffset:p},Te(l,a,t,1),t.draw()}function He(e,l){var a=e.series.sort(function(e,l){return parseInt(l.textSize)-parseInt(e.textSize)});switch(l){case"normal":for(var t=0;t<a.length;t++){var n=a[t].name,i=a[t].textSize,r=g(n,i),u=void 0,o=void 0,v=void 0,s=0;while(1){s++,u=Le(-e.width/2,e.width/2,5)-r/2,o=Le(-e.height/2,e.height/2,5)+i/2,v=[u-5+e.width/2,o-5-i+e.height/2,u+r+5+e.width/2,o+5+e.height/2];var b=Ie(v,a,e.width,e.height);if(!b)break;if(1e3==s){v=[-100,-100,-100,-100];break}}a[t].area=v}break;case"vertical":for(var c=function(){return Math.random()>.7},h=0;h<a.length;h++){var f=a[h].name,p=a[h].textSize,d=g(f,p),y=c(),x=void 0,m=void 0,_=void 0,w=void 0,A=0;while(1){A++;var S=void 0;if(y?(x=Le(-e.width/2,e.width/2,5)-d/2,m=Le(-e.height/2,e.height/2,5)+p/2,_=[m-5-d+e.width/2,-x-5+e.height/2,m+5+e.width/2,-x+p+5+e.height/2],w=[e.width-(e.width/2-e.height/2)-(-x+p+5+e.height/2)-5,e.height/2-e.width/2+(m-5-d+e.width/2)-5,e.width-(e.width/2-e.height/2)-(-x+p+5+e.height/2)+p,e.height/2-e.width/2+(m-5-d+e.width/2)+d+5],S=Ie(w,a,e.height,e.width)):(x=Le(-e.width/2,e.width/2,5)-d/2,m=Le(-e.height/2,e.height/2,5)+p/2,_=[x-5+e.width/2,m-5-p+e.height/2,x+d+5+e.width/2,m+5+e.height/2],S=Ie(_,a,e.width,e.height)),!S)break;if(1e3==A){_=[-1e3,-1e3,-1e3,-1e3];break}}y?(a[h].area=w,a[h].areav=_):a[h].area=_,a[h].rotate=y}break}return a}function Ve(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;n({},{type:"normal",autoColors:!0},l.extra.word);t.beginPath(),t.setFillStyle(l.background||"#FFFFFF"),t.rect(0,0,l.width,l.height),t.fill(),t.save();var r=l.chartData.wordCloudData;t.translate(l.width/2,l.height/2);for(var u=0;u<r.length;u++){t.save(),r[u].rotate&&t.rotate(90*Math.PI/180);var o=r[u].name,v=r[u].textSize,s=g(o,v);t.beginPath(),t.setStrokeStyle(r[u].color),t.setFillStyle(r[u].color),t.setFontSize(v),r[u].rotate?r[u].areav[0]>0&&(l.tooltip&&l.tooltip.index==u?t.strokeText(o,(r[u].areav[0]+5-l.width/2)*i-s*(1-i)/2,(r[u].areav[1]+5+v-l.height/2)*i):t.fillText(o,(r[u].areav[0]+5-l.width/2)*i-s*(1-i)/2,(r[u].areav[1]+5+v-l.height/2)*i)):r[u].area[0]>0&&(l.tooltip&&l.tooltip.index==u?t.strokeText(o,(r[u].area[0]+5-l.width/2)*i-s*(1-i)/2,(r[u].area[1]+5+v-l.height/2)*i):t.fillText(o,(r[u].area[0]+5-l.width/2)*i-s*(1-i)/2,(r[u].area[1]+5+v-l.height/2)*i)),t.stroke(),t.restore()}t.restore()}function qe(e,l,a,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,u=n({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},l.extra.funnel),o=(l.height-l.area[0]-l.area[2])/e.length,v={x:l.area[3]+(l.width-l.area[1]-l.area[3])/2,y:l.height-l.area[2]},s=u.activeWidth,b=Math.min((l.width-l.area[1]-l.area[3])/2-s,(l.height-l.area[0]-l.area[2])/2-s);e=q(e,b,i),t.save(),t.translate(v.x,v.y);for(var c=0;c<e.length;c++)0==c?(l.tooltip&&l.tooltip.index==c&&(t.beginPath(),t.setFillStyle(r(e[c].color,u.activeOpacity)),t.moveTo(-s,0),t.lineTo(-e[c].radius-s,-o),t.lineTo(e[c].radius+s,-o),t.lineTo(s,0),t.lineTo(-s,0),t.closePath(),t.fill()),e[c].funnelArea=[v.x-e[c].radius,v.y-o,v.x+e[c].radius,v.y],t.beginPath(),t.setLineWidth(u.borderWidth*l.pixelRatio),t.setStrokeStyle(u.borderColor),t.setFillStyle(r(e[c].color,u.fillOpacity)),t.moveTo(0,0),t.lineTo(-e[c].radius,-o),t.lineTo(e[c].radius,-o),t.lineTo(0,0),t.closePath(),t.fill(),1==u.border&&t.stroke()):(l.tooltip&&l.tooltip.index==c&&(t.beginPath(),t.setFillStyle(r(e[c].color,u.activeOpacity)),t.moveTo(0,0),t.lineTo(-e[c-1].radius-s,0),t.lineTo(-e[c].radius-s,-o),t.lineTo(e[c].radius+s,-o),t.lineTo(e[c-1].radius+s,0),t.lineTo(0,0),t.closePath(),t.fill()),e[c].funnelArea=[v.x-e[c].radius,v.y-o*(c+1),v.x+e[c].radius,v.y-o*c],t.beginPath(),t.setLineWidth(u.borderWidth*l.pixelRatio),t.setStrokeStyle(u.borderColor),t.setFillStyle(r(e[c].color,u.fillOpacity)),t.moveTo(0,0),t.lineTo(-e[c-1].radius,0),t.lineTo(-e[c].radius,-o),t.lineTo(e[c].radius,-o),t.lineTo(e[c-1].radius,0),t.lineTo(0,0),t.closePath(),t.fill(),1==u.border&&t.stroke()),t.translate(0,-o);return t.restore(),!1!==l.dataLabel&&1===i&&Ue(e,l,t,o,u.labelAlign,s,v),{center:v,radius:b,series:e}}function Ue(e,l,a,t,n,r,u){for(var o=0;o<e.length;o++){var v=e[o],s=void 0,b=void 0,c=void 0,h=void 0,f=v.format?v.format(+v._proportion_.toFixed(2)):i.toFixed(100*v._proportion_)+"%";"right"==n?(s=0==o?(v.funnelArea[2]+u.x)/2:(v.funnelArea[2]+e[o-1].funnelArea[2])/2,b=s+2*r,c=v.funnelArea[1]+t/2,h=v.textSize||l.fontSize,a.setLineWidth(1*l.pixelRatio),a.setStrokeStyle(v.color),a.setFillStyle(v.color),a.beginPath(),a.moveTo(s,c),a.lineTo(b,c),a.stroke(),a.closePath(),a.beginPath(),a.moveTo(b,c),a.arc(b,c,2,0,2*Math.PI),a.closePath(),a.fill(),a.beginPath(),a.setFontSize(h),a.setFillStyle(v.textColor||"#666666"),a.fillText(f,b+5,c+h/2-2),a.closePath(),a.stroke(),a.closePath()):(s=0==o?(v.funnelArea[0]+u.x)/2:(v.funnelArea[0]+e[o-1].funnelArea[0])/2,b=s-2*r,c=v.funnelArea[1]+t/2,h=v.textSize||l.fontSize,a.setLineWidth(1*l.pixelRatio),a.setStrokeStyle(v.color),a.setFillStyle(v.color),a.beginPath(),a.moveTo(s,c),a.lineTo(b,c),a.stroke(),a.closePath(),a.beginPath(),a.moveTo(b,c),a.arc(b,c,2,0,2*Math.PI),a.closePath(),a.fill(),a.beginPath(),a.setFontSize(h),a.setFillStyle(v.textColor||"#666666"),a.fillText(f,b-5-g(f),c+h/2-2),a.closePath(),a.stroke(),a.closePath())}}function Xe(e,l){l.draw()}var Ge={easeIn:function(e){return Math.pow(e,3)},easeOut:function(e){return Math.pow(e-1,3)+1},easeInOut:function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)},linear:function(e){return e}};function Je(e){this.isStop=!1,e.duration="undefined"===typeof e.duration?1e3:e.duration,e.timing=e.timing||"linear";var l=17;function a(){return"undefined"!==typeof setTimeout?function(e,l){setTimeout(function(){var l=+new Date;e(l)},l)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(e){e(null)}}var t=a(),n=null,i=function(a){if(null===a||!0===this.isStop)return e.onProcess&&e.onProcess(1),void(e.onAnimationFinish&&e.onAnimationFinish());if(null===n&&(n=a),a-n<e.duration){var r=(a-n)/e.duration,u=Ge[e.timing];r=u(r),e.onProcess&&e.onProcess(r),t(i,l)}else e.onProcess&&e.onProcess(1),e.onAnimationFinish&&e.onAnimationFinish()};i=i.bind(this),t(i,l)}function Ye(e,l,a,t){var i=this,r=l.series,u=l.categories;r=p(r,l,a);var v=l.animation?l.duration:0;i.animationInstance&&i.animationInstance.stop();var s=null;if("candle"==e){var b=n({},l.extra.candle.average);b.show?(s=o(b.day,b.name,b.color,r[0].data),s=p(s,l,a),l.seriesMA=s):s=l.seriesMA?l.seriesMA=p(l.seriesMA,l,a):r}else s=r;l._series_=r=D(r),l.area=new Array(4);for(var c=0;c<4;c++)l.area[c]=l.padding[c];var h=z(s,l,a,l.chartData),f=h.area.wholeHeight,d=h.area.wholeWidth;switch(l.legend.position){case"top":l.area[0]+=f;break;case"bottom":l.area[2]+=f;break;case"left":l.area[3]+=d;break;case"right":l.area[1]+=d;break}var g={},y=0;if("line"===l.type||"column"===l.type||"area"===l.type||"mix"===l.type||"candle"===l.type){if(g=ie(r,l,a),y=g.yAxisWidth,l.yAxis.showTitle){for(var x=0,m=0;m<l.yAxis.data.length;m++)x=Math.max(x,l.yAxis.data[m].titleFontSize?l.yAxis.data[m].titleFontSize:a.fontSize);l.area[0]+=(x+6)*l.pixelRatio}for(var _=0,w=0,A=0;A<y.length;A++)"left"==y[A].position?(l.area[3]+=w>0?y[A].width+l.yAxis.padding:y[A].width,w+=1):(l.area[1]+=_>0?y[A].width+l.yAxis.padding:y[A].width,_+=1)}else a.yAxisWidth=y;if(l.chartData.yAxisData=g,l.categories&&l.categories.length){l.chartData.xAxisData=ee(l.categories,l,a);var S=N(l.categories,l,a,l.chartData.xAxisData.eachSpacing),T=S.xAxisHeight,P=S.angle;a.xAxisHeight=T,a._xAxisTextAngle_=P,l.area[2]+=T,l.chartData.categoriesData=S}else if("line"===l.type||"area"===l.type||"points"===l.type){l.chartData.xAxisData=W(r,l,a),u=l.chartData.xAxisData.rangesFormat;var k=N(u,l,a,l.chartData.xAxisData.eachSpacing),O=k.xAxisHeight,M=k.angle;a.xAxisHeight=O,a._xAxisTextAngle_=M,l.area[2]+=O,l.chartData.categoriesData=k}else l.chartData.xAxisData={xAxisPoints:[]};if(l.enableScroll&&"right"==l.xAxis.scrollAlign&&void 0===l._scrollDistance_){var $=0,F=l.chartData.xAxisData.xAxisPoints,C=l.chartData.xAxisData.startX,R=l.chartData.xAxisData.endX,L=l.chartData.xAxisData.eachSpacing,I=L*(F.length-1),E=R-C;$=E-I,i.scrollOption={currentOffset:$,startTouchX:$,distance:0,lastMoveTime:0},l._scrollDistance_=$}switch("pie"!==e&&"ring"!==e&&"rose"!==e||(a._pieTextMaxLength_=!1===l.dataLabel?0:Y(s)),e){case"word":var j=n({},{type:"normal",autoColors:!0},l.extra.word);1!=l.updateData&&void 0!=l.updateData||(l.chartData.wordCloudData=He(l,j.type)),this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&oe(t,l),Ve(r,l,a,t,e),Xe(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"map":t.clearRect(0,0,l.width,l.height),We(r,l,a,t);break;case"funnel":this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&oe(t,l),l.chartData.funnelData=qe(r,l,a,t,e),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e),Xe(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Je({timing:"easeIn",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&oe(t,l),De(u,l,a,t),Pe(u,l,a,t);var n=Ae(r,l,a,t,e),i=n.xAxisPoints,o=n.calPoints,v=n.eachSpacing;l.chartData.xAxisPoints=i,l.chartData.calPoints=o,l.chartData.eachSpacing=v,ke(r,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e,v,i),Xe(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Je({timing:"easeIn",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&oe(t,l),De(u,l,a,t),Pe(u,l,a,t);var n=Se(r,l,a,t,e),i=n.xAxisPoints,o=n.calPoints,v=n.eachSpacing;l.chartData.xAxisPoints=i,l.chartData.calPoints=o,l.chartData.eachSpacing=v,ke(r,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e,v,i),Xe(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Je({timing:"easeIn",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&oe(t,l),De(u,l,a,t),Pe(u,l,a,t);var n=me(r,l,a,t,e),i=n.xAxisPoints,o=n.calPoints,v=n.eachSpacing;l.chartData.xAxisPoints=i,l.chartData.calPoints=o,l.chartData.eachSpacing=v,ke(r,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e,v,i),Xe(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Je({timing:"easeIn",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&oe(t,l),De(u,l,a,t),Pe(u,l,a,t);var n=we(r,l,a,t,e),i=n.xAxisPoints,o=n.calPoints,v=n.eachSpacing;l.chartData.xAxisPoints=i,l.chartData.calPoints=o,l.chartData.eachSpacing=v,ke(r,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e,v,i),Xe(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&oe(t,l),l.chartData.pieData=Me(r,l,a,t,e),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e),Xe(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&oe(t,l),l.chartData.pieData=$e(r,l,a,t,e),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e),Xe(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&oe(t,l),l.chartData.radarData=Re(r,l,a,t,e),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e),Xe(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&oe(t,l),l.chartData.arcbarData=Fe(r,l,a,t,e),Xe(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Je({timing:"easeInOut",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&oe(t,l),l.chartData.gaugeData=Ce(u,r,l,a,t,e),Xe(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Je({timing:"easeIn",duration:v,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&oe(t,l),De(u,l,a,t),Pe(u,l,a,t);var n=_e(r,s,l,a,t,e),i=n.xAxisPoints,o=n.calPoints,v=n.eachSpacing;l.chartData.xAxisPoints=i,l.chartData.calPoints=o,l.chartData.eachSpacing=v,ke(r,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Oe(s||l.series,l,a,t,l.chartData),Te(l,a,t,e,v,i),Xe(l,t)},onAnimationFinish:function(){i.event.trigger("renderComplete")}});break}}function Ke(){this.events={}}Je.prototype.stop=function(){this.isStop=!0},Ke.prototype.addEventListener=function(e,l){this.events[e]=this.events[e]||[],this.events[e].push(l)},Ke.prototype.trigger=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];var n=a[0],i=a.slice(1);this.events[n]&&this.events[n].forEach(function(e){try{e.apply(null,i)}catch(a){console.error(l(a," at components\\u-charts\\u-charts.js:5091"))}})};var Ze=function(e){e.pixelRatio=e.pixelRatio?e.pixelRatio:1,e.fontSize=e.fontSize?e.fontSize*e.pixelRatio:13*e.pixelRatio,e.title=n({},e.title),e.subtitle=n({},e.subtitle),e.duration=e.duration?e.duration:1e3,e.yAxis=n({},{data:[],showTitle:!1,disabled:!1,disableGrid:!1,splitNumber:5,gridType:"solid",dashLength:4*e.pixelRatio,gridColor:"#cccccc",padding:10,fontColor:"#666666"},e.yAxis),e.yAxis.dashLength*=e.pixelRatio,e.yAxis.padding*=e.pixelRatio,e.xAxis=n({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4,scrollAlign:"left",boundaryGap:"center",axisLine:!0,axisLineColor:"#cccccc"},e.xAxis),e.xAxis.dashLength*=e.pixelRatio,e.legend=n({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:e.fontSize,lineHeight:e.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},e.legend),e.legend.borderWidth=e.legend.borderWidth*e.pixelRatio,e.legend.itemGap=e.legend.itemGap*e.pixelRatio,e.legend.padding=e.legend.padding*e.pixelRatio,e.legend.margin=e.legend.margin*e.pixelRatio,e.extra=n({},e.extra),e.rotate=!!e.rotate,e.animation=!!e.animation,e.rotate=!!e.rotate;var l=JSON.parse(JSON.stringify(t));if(l.colors=e.colors?e.colors:l.colors,l.yAxisTitleWidth=!0!==e.yAxis.disabled&&e.yAxis.title?l.yAxisTitleWidth:0,"pie"!=e.type&&"ring"!=e.type||(l.pieChartLinePadding=!1===e.dataLabel?0:e.extra.pie.labelWidth*e.pixelRatio||l.pieChartLinePadding*e.pixelRatio),"rose"==e.type&&(l.pieChartLinePadding=!1===e.dataLabel?0:e.extra.rose.labelWidth*e.pixelRatio||l.pieChartLinePadding*e.pixelRatio),l.pieChartTextPadding=!1===e.dataLabel?0:l.pieChartTextPadding*e.pixelRatio,l.yAxisSplit=e.yAxis.splitNumber?e.yAxis.splitNumber:t.yAxisSplit,l.rotate=e.rotate,e.rotate){var i=e.width,r=e.height;e.width=r,e.height=i}e.padding=e.padding?e.padding:l.padding;for(var u=0;u<4;u++)e.padding[u]*=e.pixelRatio;l.yAxisWidth=t.yAxisWidth*e.pixelRatio,l.xAxisHeight=t.xAxisHeight*e.pixelRatio,e.enableScroll&&e.xAxis.scrollShow&&(l.xAxisHeight+=6*e.pixelRatio),l.xAxisLineHeight=t.xAxisLineHeight*e.pixelRatio,l.fontSize=e.fontSize,l.titleFontSize=t.titleFontSize*e.pixelRatio,l.subtitleFontSize=t.subtitleFontSize*e.pixelRatio,l.toolTipPadding=t.toolTipPadding*e.pixelRatio,l.toolTipLineHeight=t.toolTipLineHeight*e.pixelRatio,l.columePadding=t.columePadding*e.pixelRatio,e.$this=e.$this?e.$this:this,this.context=a.createCanvasContext(e.canvasId,e.$this),e.chartData={},this.event=new Ke,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=e,this.config=l,Ye.call(this,e.type,e,l,this.context)};Ze.prototype.updateData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=n({},this.opts,e),this.opts.updateData=!0;var l=e.scrollPosition||"current";switch(l){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var a=ie(this.opts.series,this.opts,this.config),t=a.yAxisWidth;this.config.yAxisWidth=t;var i=0,r=ee(this.opts.categories,this.opts,this.config),u=r.xAxisPoints,o=r.startX,v=r.endX,s=r.eachSpacing,b=s*(u.length-1),c=v-o;i=c-b,this.scrollOption={currentOffset:i,startTouchX:i,distance:0,lastMoveTime:0},this.opts._scrollDistance_=i;break}Ye.call(this,this.opts.type,this.opts,this.config,this.context)},Ze.prototype.zoom=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var a=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=e.itemCount;var t=ie(this.opts.series,this.opts,this.config),n=t.yAxisWidth;this.config.yAxisWidth=n;var i=0,r=ee(this.opts.categories,this.opts,this.config),u=r.xAxisPoints,o=r.startX,v=r.endX,s=r.eachSpacing,b=s*a,c=v-o,h=c-s*(u.length-1);i=c/2-b,i>0&&(i=0),i<h&&(i=h),this.scrollOption={currentOffset:i,startTouchX:i,distance:0,lastMoveTime:0},this.opts._scrollDistance_=i,Ye.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(l("请启用滚动条后使用！"," at components\\u-charts\\u-charts.js:5265"))},Ze.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Ze.prototype.addEventListener=function(e,l){this.event.addEventListener(e,l)},Ze.prototype.getCurrentDataIndex=function(e){var l=null;if(l=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],l){var a=m(l,this.opts,e);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?I({x:a.x,y:a.y},this.opts.chartData.pieData):"radar"===this.opts.type?F({x:a.x,y:a.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?C({x:a.x,y:a.y},this.opts.chartData.funnelData):"map"===this.opts.type?L({x:a.x,y:a.y},this.opts):"word"===this.opts.type?R({x:a.x,y:a.y},this.opts.chartData.wordCloudData):k({x:a.x,y:a.y},this.opts.chartData.calPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Ze.prototype.getLegendDataIndex=function(e){var l=null;if(l=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],l){var a=m(l,this.opts,e);return O({x:a.x,y:a.y},this.opts.chartData.legendData)}return-1},Ze.prototype.touchLegend=function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=null;if(a=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],a){m(a,this.opts,e);var t=this.getLegendDataIndex(e);t>=0&&(this.opts.series[t].show=!this.opts.series[t].show,this.opts.animation=!!l.animation,this.opts._scrollDistance_=this.scrollOption.currentOffset,Ye.call(this,this.opts.type,this.opts,this.config,this.context))}},Ze.prototype.showToolTip=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=null;t=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],t||console.log(l("touchError"," at components\\u-charts\\u-charts.js:5402"));var i=m(t,this.opts,e),r=this.scrollOption.currentOffset,u=n({},this.opts,{_scrollDistance_:r,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var o=this.getCurrentDataIndex(e);if(o>-1){var v=_(this.opts.series,o);if(0!==v.length){var s=S(v,this.opts.chartData.calPoints,o,this.opts.categories,a),b=s.textList,c=s.offset;c.y=i.y,u.tooltip={textList:b,offset:c,option:a,index:o}}}Ye.call(this,u.type,u,this.config,this.context)}if("mix"===this.opts.type){o=this.getCurrentDataIndex(e);if(o>-1){r=this.scrollOption.currentOffset,u=n({},this.opts,{_scrollDistance_:r,animation:!1}),v=_(this.opts.series,o);if(0!==v.length){var h=T(v,this.opts.chartData.calPoints,o,this.opts.categories,a);b=h.textList,c=h.offset;c.y=i.y,u.tooltip={textList:b,offset:c,option:a,index:o}}}Ye.call(this,u.type,u,this.config,this.context)}if("candle"===this.opts.type){o=this.getCurrentDataIndex(e);if(o>-1){r=this.scrollOption.currentOffset,u=n({},this.opts,{_scrollDistance_:r,animation:!1}),v=_(this.opts.series,o);if(0!==v.length){s=P(this.opts.series[0].data,v,this.opts.chartData.calPoints,o,this.opts.categories,this.opts.extra.candle,a),b=s.textList,c=s.offset;c.y=i.y,u.tooltip={textList:b,offset:c,option:a,index:o}}}Ye.call(this,u.type,u,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){o=this.getCurrentDataIndex(e);if(o>-1){r=this.scrollOption.currentOffset,u=n({},this.opts,{_scrollDistance_:r,animation:!1}),v=this.opts._series_[o],b=[{text:a.format?a.format(v):v.name+": "+v.data,color:v.color}],c={x:i.x,y:i.y};u.tooltip={textList:b,offset:c,option:a,index:o}}Ye.call(this,u.type,u,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){o=this.getCurrentDataIndex(e);if(o>-1){r=this.scrollOption.currentOffset,u=n({},this.opts,{_scrollDistance_:r,animation:!1}),v=this.opts._series_[o],b=[{text:a.format?a.format(v):v.properties.name,color:v.color}],c={x:i.x,y:i.y};u.tooltip={textList:b,offset:c,option:a,index:o}}u.updateData=!1,Ye.call(this,u.type,u,this.config,this.context)}if("radar"===this.opts.type){o=this.getCurrentDataIndex(e);if(o>-1){r=this.scrollOption.currentOffset,u=n({},this.opts,{_scrollDistance_:r,animation:!1}),v=_(this.opts.series,o);if(0!==v.length){b=v.map(function(e){return{text:a.format?a.format(e):e.name+": "+e.data,color:e.color}}),c={x:i.x,y:i.y};u.tooltip={textList:b,offset:c,option:a,index:o}}}Ye.call(this,u.type,u,this.config,this.context)}},Ze.prototype.translate=function(e){this.scrollOption={currentOffset:e,startTouchX:e,distance:0,lastMoveTime:0};var l=n({},this.opts,{_scrollDistance_:e,animation:!1});Ye.call(this,this.opts.type,l,this.config,this.context)},Ze.prototype.scrollStart=function(e){var l=null;l=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0];var a=m(l,this.opts,e);l&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=a.x)},Ze.prototype.scroll=function(e){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var l=this.opts.extra.touchMoveLimit||20,a=Date.now(),t=a-this.scrollOption.lastMoveTime;if(!(t<Math.floor(1e3/l))){this.scrollOption.lastMoveTime=a;var i=null;if(i=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],i&&!0===this.opts.enableScroll){var r,u=m(i,this.opts,e);r=u.x-this.scrollOption.startTouchX;var o=this.scrollOption.currentOffset,s=v(this,o+r,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=r=s-o;var b=n({},this.opts,{_scrollDistance_:o+r,animation:!1});return Ye.call(this,b.type,b,this.config,this.context),o+r}}},Ze.prototype.scrollEnd=function(e){if(!0===this.opts.enableScroll){var l=this.scrollOption,a=l.currentOffset,t=l.distance;this.scrollOption.currentOffset=a+t,this.scrollOption.distance=0}},"object"===typeof e.exports&&(e.exports=Ze)}).call(this,a("0de9")["default"],a("6e42")["default"])},"8c9e":function(e,l,a){"use strict";(function(e){function a(e){return i(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var r=function(e){return e<10?"0"+e:e+""},u={date:{init:function(e,l){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"date",n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,o=arguments.length>6?arguments[6]:void 0,v=new Date,s=[],b=new Date(e.toString()),c=new Date(l.toString());e>l&&(b=new Date(l.toString()),c=new Date(e.toString()));var h=b.getFullYear(),f=(b.getMonth(),c.getFullYear()),p=[],d=[],g=[],y=[],x=[],m=[],_=[],w=[],A=[];switch(t){case"half":A=[].concat(a(i.split(" ")[0].split("-")),u?a(i.split(" ")[1].split(":")):[i.split(" ")[1]]);break;case"date":case"yearMonth":A=i.split("-");break;case"dateTime":A=[].concat(a(i.split(" ")[0].split("-")),a(i.split(" ")[1].split(":")));break;case"time":A=i.split(":");break}var S=u?1*A[1]:A[1]+1,T=v.getFullYear(),P=v.getMonth()+1,D=v.getDate(),k=new Date(h,S,0).getDate();switch(t){case"half":case"date":case"yearMonth":var O=A[0],M=A[1];if(o){for(var $=h;$<=T;$++)p.push($+"");if(O==T)for(var F=1;F<=P;F++)d.push(r(F));else for(var C=1;C<=12;C++)d.push(r(C));if(M==P)for(var R=1;R<=D;R++)g.push(r(R));else for(var L=1;L<=k;L++)g.push(r(L))}else{for(var I=h;I<=f;I++)p.push(I+"");for(var E=1;E<=12;E++)d.push(r(E));for(var j=1;j<=k;j++)g.push(r(j))}break;default:for(var z=h;z<=f;z++)p.push(z+"");for(var N=1;N<=12;N++)d.push(r(N));for(var B=1;B<=k;B++)g.push(r(B));break}for(var W=0;W<24;W++)y.push(r(W));for(var H=0;H<60;H+=1*n)x.push(r(H));for(var V=0;V<60;V++)m.push(r(V));switch(u&&(w=[p.indexOf(A[0]),d.indexOf(A[1]),g.indexOf(A[2]),y.indexOf(A[3]),-1==x.indexOf(A[4])?0:x.indexOf(A[4]),m.indexOf(A[5])]),t){case"date":return u?(s=[w[0],w[1],w[2]],{years:p,months:d,days:g,defaultVal:s}):(s=[-1==p.indexOf(A[0])?0:p.indexOf(A[0]),-1==d.indexOf(A[1])?0:d.indexOf(A[1]),-1==g.indexOf(A[2])?0:g.indexOf(A[2])],{years:p,months:d,days:g,defaultVal:s});case"half":if(_=[{label:"上午",value:0},{label:"下午",value:1}],u)return s=[w[0],w[1],w[2],w[3]],{years:p,months:d,days:g,areas:_,defaultVal:s};var q=0;return _.map(function(e,l){e.label==A[3]&&(q=e.value)}),s=[-1==p.indexOf(A[0])?0:p.indexOf(A[0]),-1==d.indexOf(A[1])?0:d.indexOf(A[1]),-1==g.indexOf(A[2])?0:g.indexOf(A[2]),q],{years:p,months:d,days:g,areas:_,defaultVal:s};case"yearMonth":return u?(s=[w[0],w[1]],{years:p,months:d,defaultVal:s}):(s=[-1==p.indexOf(A[0])?0:p.indexOf(A[0]),-1==d.indexOf(A[1])?0:d.indexOf(A[1])],{years:p,months:d,defaultVal:s});case"dateTime":return s=u?w:[-1==p.indexOf(A[0])?0:p.indexOf(A[0]),-1==d.indexOf(A[1])?0:d.indexOf(A[1]),-1==g.indexOf(A[2])?0:g.indexOf(A[2]),-1==y.indexOf(A[3])?0:y.indexOf(A[3]),-1==x.indexOf(A[4])?0:x.indexOf(A[4]),-1==m.indexOf(A[5])?0:m.indexOf(A[5])],{years:p,months:d,days:g,hours:y,minutes:x,seconds:m,defaultVal:s};case"time":return s=u?[w[3],w[4],w[5]]:[-1==y.indexOf(A[0])?0:y.indexOf(A[0]),-1==x.indexOf(A[1])?0:x.indexOf(A[1]),-1==m.indexOf(A[2])?0:m.indexOf(A[2])],{hours:y,minutes:x,seconds:m,defaultVal:s}}},initMonths:function(e,l){var a=new Date,t=a.getFullYear(),n=a.getMonth()+1,i=(a.getDate(),t==e),u=[];if(l)if(i)for(var o=1;o<=n;o++)u.push(r(o));else for(var v=1;v<=12;v++)u.push(r(v));else for(var s=1;s<=12;s++)u.push(r(s));return u},initDays:function(e,l,a){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,u=t.getDate(),o=n==e&&i==l,v=new Date(e,l,0).getDate(),s=[];if(o&&a)for(var b=1;b<=u;b++)s.push(r(b));else for(var c=1;c<=v;c++)s.push(r(c));return s}},limitHour:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,l=arguments.length>1?arguments[1]:void 0,a=new Date,t=[],n=[],i=[],u=(new Date).getHours(),o=["周日","周一","周二","周三","周四","周五","周六"],v=[],s=0,b=0,c=0,h=0;h<e;h++){var f=void 0,p=void 0,d=void 0,g=void 0;f=a.getFullYear(),p=r(a.getMonth()+1),d=r(a.getDate()),g=o[a.getDay()];var y="";switch(h){case 0:y="今天";break;case 1:y="明天";break;case 2:y="后天";break;default:y=p+"月"+d+"日 "+g;break}t.push({label:y,value:f+"-"+p+"-"+d,today:0==h}),a.setDate(a.getDate()+1)}n=u>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}];for(var x=u>12?u-12:u;x<=12;x++)i.push({label:r(x),value:r(u>12?x+12:x)});return t.map(function(e,a){e.label==l[0]&&(s=a)}),0!=s&&(n=this.initAreas(t[s]),i=this.initHours(t[s],n[b])),n.map(function(e,a){e.label==l[1]&&(b=a)}),i.map(function(e,a){e.label==l[2]&&(c=a)}),v=[s,b,c],{date:t,areas:n,hours:i,defaultVal:v}},initAreas:function(e){var l=[],a=(new Date).getHours();return l=e.today&&a>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}],l},initHours:function(e,l){var a=[],t=(new Date).getHours();if(e.today)if(1==l.value&&t<=12)for(var n=1;n<=12;n++)a.push({label:r(n),value:r(1==l.value?n+12:n)});else for(var i=t>12?t-12:t;i<=12;i++)a.push({label:r(i),value:r(1==l.value?i+12:i)});else for(var u=1;u<=12;u++)a.push({label:r(u),value:r(1==l.value?u+12:u)});return a}},limit:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,i=arguments.length>5?arguments[5]:void 0,u=new Date,o=new Date((new Date).getTime()+60*n*1e3),v=[],s=[],b=[],c=o.getHours(),h=Math.floor(o.getMinutes()/t)*t,f=["周日","周一","周二","周三","周四","周五","周六"],p=0,d=0,g=0,y=[],x=0;x<e;x++){var m=void 0,_=void 0,w=void 0,A=void 0;m=u.getFullYear(),_=r(u.getMonth()+1),w=r(u.getDate()),A=f[u.getDay()];var S="";switch(x){case 0:S="今天";break;case 1:S="明天";break;case 2:S="后天";break;default:S=_+"月"+w+"日 "+A;break}v.push({label:S,value:m+"-"+_+"-"+w,flag:0==x}),u.setDate(u.getDate()+1)}c<l&&(c=l),c>a&&(c=a);for(var T=1*c;T<=1*a;T++)s.push({label:r(T),value:r(T),flag:T==c});for(var P=h;P<60;P+=1*t)b.push({label:r(P),value:r(P)});return v.map(function(e,l){e.label==i[0]&&(p=l)}),0!=p&&(s=this.initHours(l=8,a=20,t=1,n=30,v[p].value)),s.map(function(e,l){e.label==i[1]&&(d=l)}),b.map(function(e,l){e.label==i[2]&&(g=l)}),y=[p,d,g],{date:v,hours:s,minutes:b,defaultVal:y}},initHours:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:30),t=arguments.length>4?arguments[4]:void 0,n=[],i=t.split("-"),u=new Date,o=u.getFullYear(),v=u.getMonth()+1,s=u.getDate(),b=new Date((new Date).getTime()+60*a*1e3),c=b.getHours(),h=o==i[0]&&v==i[1]&&s==i[2];if(c>l&&(c=l),h)for(var f=1*c;f<=1*l;f++)n.push({label:r(f),value:r(f),flag:f==c});else for(var p=1*e;p<=1*l;p++)n.push({label:r(p),value:r(p),flag:!1});return n},initMinutes:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,a=arguments.length>4?arguments[4]:void 0,t=arguments.length>5?arguments[5]:void 0,n=[],i=new Date((new Date).getTime()+60*l*1e3),u=a.split("-"),o=new Date,v=o.getFullYear(),s=o.getMonth()+1,b=o.getDate(),c=i.getHours(),h=Math.floor(i.getMinutes()/e)*e,f=v==u[0]&&s==u[1]&&b==u[2];if(f)if(t==c)for(var p=h;p<60;p+=1*e)n.push({label:r(p),value:r(p)});else for(var d=0;d<60;d+=1*e)n.push({label:r(d),value:r(d)});else for(var g=0;g<60;g+=1*e)n.push({label:r(g),value:r(g)});return n}},range:{init:function(e,l,a,t){new Date;var n=[],i=new Date(e.toString()),u=new Date(l.toString());e>l&&(i=new Date(l.toString()),u=new Date(e.toString()));var o=i.getFullYear(),v=(i.getMonth(),u.getFullYear()),s=[],b=[],c=[],h=[],f=[],p=[],d=[],g=[];d=a[0].split("-"),g=a[1].split("-");for(var y=t?1*d[1]:d[1]+1,x=new Date(o,y,0).getDate(),m=o;m<=v;m++)s.push(m+"");for(var _=1;_<=12;_++)b.push(r(_));for(var w=1;w<=x;w++)c.push(r(w));for(var A=d[0];A<=v;A++)h.push(A+"");for(var S=d[1];S<=12;S++)f.push(r(S));for(var T=d[2];T<=x;T++)p.push(r(T));return n=[-1==s.indexOf(d[0])?0:s.indexOf(d[0]),-1==b.indexOf(d[1])?0:b.indexOf(d[1]),-1==c.indexOf(d[2])?0:c.indexOf(d[2]),0,-1==h.indexOf(g[0])?0:h.indexOf(g[0]),-1==f.indexOf(g[1])?0:f.indexOf(g[1]),-1==p.indexOf(g[2])?0:p.indexOf(g[2])],{fyears:s,fmonths:b,fdays:c,tyears:h,tmonths:f,tdays:p,defaultVal:n}},initStartDays:function(e,l){for(var a=new Date(e,l,0).getDate(),t=[],n=1;n<=a;n++)t.push(r(n));return t},initEndYears:function(e,l,a){for(var t=[],n=e;n<=a;n++)t.push(r(n));return t},initEndMonths:function(e){for(var l=[],a=1*e;a<=12;a++)l.push(r(a));return l},initEndDays:function(e,l,a,t,n){for(var i=new Date(e,l,0).getDate(),u=[],o=1*a;o<=i;o++)u.push(r(o));return u},initToMonths:function(l,a,t,n){var i=new Date(l,a,t).getTime(),u=new Date(n,a,t).getTime(),o=[];if(u-i>0){console.log(e(1," at components\\w-picker\\w-picker.js:620"));for(var v=1;v<=12;v++)o.push(r(v))}else for(var s=1*a;s<=12;s++)o.push(r(s));return o},initToDays:function(e,l,a,t,n){var i=new Date(e,l,a).getTime(),u=new Date(t,n,a).getTime(),o=new Date(t,n,0).getDate(),v=[];if(u-i>0)for(var s=1;s<=o;s++)v.push(r(s));else for(var b=1*a;b<=o;b++)v.push(r(b));return v}}},o=u;l.default=o}).call(this,a("0de9")["default"])},"921b":function(e,l,a){"use strict";(function(e){var l=a("8189");function t(e,l){return!l||"object"!==typeof l&&"function"!==typeof l?n(e):l}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function r(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&u(e,l)}function u(e,l){return u=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e},u(e,l)}function o(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function v(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function s(e,l,a){return l&&v(e.prototype,l),a&&v(e,a),e}var b=l.version,c="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",f=1800,p=300,d=10,g="__DC_STAT_UUID",y="__DC_UUID_VALUE";function x(){var l="";if("n"===A()){try{l=plus.runtime.getDCloudId()}catch(a){l=""}return l}try{l=e.getStorageSync(g)}catch(a){l=y}if(!l){l=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(g,l)}catch(a){e.setStorageSync(g,y)}}return l}var m=function(e){var l=Object.keys(e),a=l.sort(),t={},n="";for(var i in a)t[a[i]]=e[a[i]],n+=a[i]+"="+e[a[i]]+"&";return{sign:"",options:n.substr(0,n.length-1)}},_=function(e){var l="";for(var a in e)l+=a+"="+e[a]+"&";return l.substr(0,l.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},A=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},S=function(){var l="";return"wx"!==A()&&"qq"!==A()||e.canIUse("getAccountInfoSync")&&(l=e.getAccountInfoSync().miniProgram.appId||""),l},T=function(){return"n"===A()?plus.runtime.version:""},P=function(){var e=A(),l="";return"n"===e&&(l=plus.runtime.channel),l},D=function(l){var a=A(),t="";return l||("wx"===a&&(t=e.getLaunchOptionsSync().scene),t)},k="First__Visit__Time",O="Last__Visit__Time",M=function(){var l=e.getStorageSync(k),a=0;return l?a=l:(a=w(),e.setStorageSync(k,a),e.removeStorageSync(O)),a},$=function(){var l=e.getStorageSync(O),a=0;return a=l||"",e.setStorageSync(O,w()),a},F="__page__residence__time",C=0,R=0,L=function(){return C=w(),"n"===A()&&e.setStorageSync(F,w()),C},I=function(){return R=w(),"n"===A()&&(C=e.getStorageSync(F)),R-C},E="Total__Visit__Count",j=function(){var l=e.getStorageSync(E),a=1;return l&&(a=l,a++),e.setStorageSync(E,a),a},z=function(e){var l={};for(var a in e)l[a]=encodeURIComponent(e[a]);return l},N=0,B=0,W=function(){var e=(new Date).getTime();return N=e,B=0,e},H=function(){var e=(new Date).getTime();return B=e,e},V=function(e){var l=0;if(0!==N&&(l=B-N),l=parseInt(l/1e3),l=l<1?1:l,"app"===e){var a=l>p;return{residenceTime:l,overtime:a}}if("page"===e){var t=l>f;return{residenceTime:l,overtime:t}}return{residenceTime:l}},q=function(){var e=getCurrentPages(),l=e[e.length-1],a=l.$vm;return"bd"===A()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},U=function(e){var l=getCurrentPages(),a=l[l.length-1],t=a.$vm,n=e._query,i=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return e._query="","bd"===A()?t.$mp&&t.$mp.page.is+i:t.$scope&&t.$scope.route+i||t.$mp&&t.$mp.page.route+i},X=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},G=function(e,l){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof l&&"object"!==typeof l?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof l&&l.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof l?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=a("9f53").default,Y=a("3b57").default||a("3b57"),K=e.getSystemInfoSync(),Z=function(){function l(){o(this,l),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:x(),ut:A(),mpn:S(),ak:Y.appid,usv:b,v:T(),ch:P(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===K.platform?"a":"i",brand:K.brand||"",md:K.model,sv:K.system.replace(/(Android|iOS)\s/,""),mpsdk:K.SDKVersion||"",mpv:K.version||"",lang:K.language,pr:K.pixelRatio,ww:K.windowWidth,wh:K.windowHeight,sw:K.screenWidth,sh:K.screenHeight}}return s(l,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var e=V("app");if(e.overtime){var l={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(l)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,l){this.__licationHide=!0,H();var a=V();W();var t=U(this);this._sendHideRequest({urlref:t,urlref_ts:a.residenceTime},l)}},{key:"_pageShow",value:function(){var e=U(this),l=q();if(this._navigationBarTitle.config=J&&J.pages[l]&&J.pages[l].titleNView&&J.pages[l].titleNView.titleText||J&&J.pages[l]&&J.pages[l].navigationBarTitleText||"",this.__licationShow)return W(),this.__licationShow=!1,void(this._lastPageRoute=e);H(),this._lastPageRoute=e;var a=V("page");if(a.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}W()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var e=V("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var l=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+l||"",this.statData.t=w(),this.statData.sc=D(e.scene),this.statData.fvts=M(),this.statData.lvts=$(),this.statData.tvc=j(),"n"===A()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var l=e.url,a=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:l,tt:this.statData.tt,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}},{key:"_sendHideRequest",value:function(e,l){var a=e.urlref,t=e.urlref_ts,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n,l)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.key,a=void 0===l?"":l,t=e.value,n=void 0===t?"":t,i=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:a,e_v:"object"===typeof n?JSON.stringify(n):n.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var l=this;e.getNetworkType({success:function(e){l.statData.net=e.networkType,l.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(l){e.statData.v=l.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var l=this;Y.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(l.statData.cn=e.address.country,l.statData.pn=e.address.province,l.statData.ct=e.address.city),l.statData.lat=e.latitude,l.statData.lng=e.longitude,l.request(l.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(l,a){var t=this,n=w(),i=this._navigationBarTitle;l.ttn=i.page,l.ttpj=i.config,l.ttc=i.report;var r=this._reportingRequestData;if("n"===A()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[l.lt]||(r[l.lt]=[]),r[l.lt].push(l),"n"===A()&&e.setStorageSync("__UNI__STAT__DATA",r),!(I()<d)||a){var u=this._reportingRequestData;"n"===A()&&(u=e.getStorageSync("__UNI__STAT__DATA")),L();var o=[],v=[],s=[],c=function(e){var l=u[e];l.forEach(function(l){var a=_(l);0===e?o.push(a):3===e?s.push(a):v.push(a)})};for(var h in u)c(h);o.push.apply(o,v.concat(s));var f={usv:b,t:n,requests:JSON.stringify(o)};this._reportingRequestData={},"n"===A()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==l.ut?"n"!==A()||"a"!==this.statData.p?this._sendRequest(f):setTimeout(function(){t._sendRequest(f)},200):this.imageRequest(f)}}},{key:"_sendRequest",value:function(l){var a=this;e.request({url:c,method:"POST",data:l,success:function(){},fail:function(e){++a._retry<3&&setTimeout(function(){a._sendRequest(l)},1e3)}})}},{key:"imageRequest",value:function(e){var l=new Image,a=m(z(e)).options;l.src=h+"?"+a}},{key:"sendEvent",value:function(e,l){G(e,l)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof l?JSON.stringify(l):l},1):this._navigationBarTitle.report=l)}}]),l}(),Q=function(l){function a(){var l;return o(this,a),l=t(this,i(a).call(this)),l.instance=null,"function"===typeof e.addInterceptor&&(l.addInterceptorInit(),l.interceptLogin(),l.interceptShare(!0),l.interceptRequestPayment()),l}return r(a,l),s(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),s(a,[{key:"addInterceptorInit",value:function(){var l=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){l._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var l=this;e.addInterceptor("login",{complete:function(){l._login()}})}},{key:"interceptShare",value:function(l){var a=this;l?e.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var l=this;e.addInterceptor("requestPayment",{success:function(){l._payment("pay_success")},fail:function(){l._payment("pay_fail")}})}},{key:"report",value:function(e,l){this.self=l,L(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,l){if(!l.$scope&&!l.$mp){var a=getCurrentPages();l.$scope=a[a.length-1]}this.self=l,this._query=e}},{key:"show",value:function(e){this.self=e,X(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,X(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var l="";l=e.message?e.stack:JSON.stringify(e);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:l,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}}]),a}(Z),ee=Q.getInstance(),le=!1,ae={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var l=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),l.call(this,e)}}},onShow:function(){le=!1,ee.show(this)},onHide:function(){le=!0,ee.hide(this)},onUnload:function(){le?le=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var l=a("66fd");(l.default||l).mixin(ae),e.report=function(e,l){ee.sendEvent(e,l)}}te()}).call(this,a("6e42")["default"])},"9f53":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={pages:{"pages/index/index":{navigationBarTitleText:"极简记账"},"pages/me/me":{navigationBarTitleText:"我"},"pages/chart/chart":{navigationBarTitleText:"图表"},"pages/today/today":{navigationBarTitleText:"今日详情"},"pages/node/node":{navigationBarTitleText:"记一笔"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};l.default=t},c5ba:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={contact:"",person:"",personadd:"","contact-filled":"","person-filled":"","personadd-filled":"",phone:"",email:"",chatbubble:"",chatboxes:"","phone-filled":"","email-filled":"","chatbubble-filled":"","chatboxes-filled":"",weibo:"",weixin:"",pengyouquan:"",chat:"",qq:"",videocam:"",camera:"",mic:"",location:"","mic-filled":"",speech:"","location-filled":"",micoff:"",image:"",map:"",compose:"",trash:"",upload:"",download:"",close:"",redo:"",undo:"",refresh:"",star:"",plus:"",minus:"",circle:"",checkbox:"","close-filled":"",clear:"","refresh-filled":"","star-filled":"","plus-filled":"","minus-filled":"","circle-filled":"","checkbox-filled":"",closeempty:"",refreshempty:"",reload:"",starhalf:"",spinner:"","spinner-cycle":"",search:"",plusempty:"",forward:"",back:"","left-nav":"",checkmarkempty:"",home:"",navigate:"",gear:"",paperplane:"",info:"",help:"",locked:"",more:"",flag:"","home-filled":"","gear-filled":"","info-filled":"","help-filled":"","more-filled":"",settings:"",list:"",bars:"",loop:"",paperclip:"",eye:"",arrowup:"",arrowdown:"",arrowleft:"",arrowright:"",arrowthinup:"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",pulldown:"",closefill:"",sound:"",scan:""};l.default=t},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a},eb38:function(e,l,a){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/cg-swiper/cg-swiper';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/cg-swiper/cg-swiper.js';

define('components/cg-swiper/cg-swiper.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/cg-swiper/cg-swiper"], {
  "478d": function d(e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var r = function r() {
      return Promise.all([n.e("common/vendor"), n.e("components/uni-icons/uni-icons")]).then(n.bind(null, "601a"));
    },
        i = {
      name: "cg-swiper",
      props: {
        swiperDots: {
          type: Boolean,
          default: !1
        },
        swiperColor: {
          type: String,
          default: "#999999"
        },
        swiperActiveColor: {
          type: String,
          default: "#FFCC00"
        },
        autoplay: {
          type: Boolean,
          default: !1
        },
        interval: {
          type: Number,
          default: 5e3
        },
        duration: {
          type: Number,
          default: 500
        },
        circular: {
          type: Boolean,
          default: !1
        },
        swiperList: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        customize: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          swiperCurrent: 0,
          activeIndex: 2
        };
      },
      components: {
        uniIcons: r
      },
      methods: {
        swiperChange: function swiperChange(e) {
          this.swiperCurrent = e.detail.current;
        },
        clickItem: function clickItem(e) {
          this.activeIndex = e.id, this.$emit("clickItem", e);
        }
      }
    };

    t.default = i;
  },
  "5ee0": function ee0(e, t, n) {},
  "9c16": function c16(e, t, n) {
    "use strict";

    var r = function r() {
      var e = this,
          t = e.$createElement,
          n = (e._self._c, e.__map(e.swiperList, function (t, n) {
        var r = e.__get_style([n == e.swiperCurrent ? {
          background: e.swiperActiveColor
        } : {
          background: e.swiperColor
        }]);

        return {
          $orig: e.__get_orig(t),
          s0: r
        };
      }));
      e.$mp.data = Object.assign({}, {
        $root: {
          l0: n
        }
      });
    },
        i = [];

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "b", function () {
      return i;
    });
  },
  c317: function c317(e, t, n) {
    "use strict";

    var r = n("5ee0"),
        i = n.n(r);
    i.a;
  },
  c741: function c741(e, t, n) {
    "use strict";

    n.r(t);
    var r = n("478d"),
        i = n.n(r);

    for (var o in r) {
      "default" !== o && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(o);
    }

    t["default"] = i.a;
  },
  ccc3: function ccc3(e, t, n) {
    "use strict";

    n.r(t);
    var r = n("9c16"),
        i = n("c741");

    for (var o in i) {
      "default" !== o && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(o);
    }

    n("c317");
    var u = n("2877"),
        c = Object(u["a"])(i["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/cg-swiper/cg-swiper-create-component', {
  'components/cg-swiper/cg-swiper-create-component': function componentsCgSwiperCgSwiperCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ccc3"));
  }
}, [['components/cg-swiper/cg-swiper-create-component']]]);
});
require('components/cg-swiper/cg-swiper.js');
__wxRoute = 'components/uni-badge/uni-badge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-badge/uni-badge.js';

define('components/uni-badge/uni-badge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-badge/uni-badge"], {
  "0d37": function d37(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("485e"),
        u = n("6e04");

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    n("49c3");
    var r = n("2877"),
        c = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, "6819b8ab", null);
    e["default"] = c.exports;
  },
  "485e": function e(t, _e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(_e, "a", function () {
      return a;
    }), n.d(_e, "b", function () {
      return u;
    });
  },
  "49c3": function c3(t, e, n) {
    "use strict";

    var a = n("7372a"),
        u = n.n(a);
    u.a;
  },
  "6e04": function e04(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("9b2c"),
        u = n.n(a);

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    e["default"] = u.a;
  },
  "7372a": function a(t, e, n) {},
  "9b2c": function b2c(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      name: "UniBadge",
      props: {
        type: {
          type: String,
          default: "default"
        },
        inverted: {
          type: Boolean,
          default: !1
        },
        text: {
          type: [String, Number],
          default: ""
        },
        size: {
          type: String,
          default: "normal"
        }
      },
      data: function data() {
        return {
          width: "display: inline-block;width: ".concat(15 * String(this.text).length + 25, "rpx")
        };
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    e.default = a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-badge/uni-badge-create-component', {
  'components/uni-badge/uni-badge-create-component': function componentsUniBadgeUniBadgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0d37"));
  }
}, [['components/uni-badge/uni-badge-create-component']]]);
});
require('components/uni-badge/uni-badge.js');
__wxRoute = 'components/uni-grid-item/uni-grid-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-grid-item/uni-grid-item.js';

define('components/uni-grid-item/uni-grid-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-grid-item/uni-grid-item"], {
  "3bae": function bae(i, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = {
      name: "UniGridItem",
      inject: ["grid"],
      data: function data() {
        return {
          column: 0,
          showBorder: !0,
          square: !0,
          highlight: !0,
          left: 0,
          top: 0,
          index: 0,
          openNum: 2,
          width: 0,
          borderColor: "#e5e5e5"
        };
      },
      created: function created() {
        this.column = this.grid.column, this.showBorder = this.grid.showBorder, this.square = this.grid.square, this.highlight = this.grid.highlight, this.top = 0 === this.hor ? this.grid.hor : this.hor, this.left = 0 === this.ver ? this.grid.ver : this.ver, this.borderColor = this.grid.borderColor, this.index = this.grid.index++, this.grid.children.push(this), this.width = this.grid.width;
      },
      methods: {
        _onClick: function _onClick() {
          this.grid.change({
            detail: {
              index: this.index
            }
          });
        }
      }
    };
    t.default = r;
  },
  4564: function _(i, t, e) {
    "use strict";

    var r = e("f6c5"),
        n = e.n(r);
    n.a;
  },
  5154: function _(i, t, e) {
    "use strict";

    e.r(t);
    var r = e("ec2d"),
        n = e("c47b");

    for (var o in n) {
      "default" !== o && function (i) {
        e.d(t, i, function () {
          return n[i];
        });
      }(o);
    }

    e("4564");
    var s = e("2877"),
        d = Object(s["a"])(n["default"], r["a"], r["b"], !1, null, "48473e85", null);
    t["default"] = d.exports;
  },
  c47b: function c47b(i, t, e) {
    "use strict";

    e.r(t);
    var r = e("3bae"),
        n = e.n(r);

    for (var o in r) {
      "default" !== o && function (i) {
        e.d(t, i, function () {
          return r[i];
        });
      }(o);
    }

    t["default"] = n.a;
  },
  ec2d: function ec2d(i, t, e) {
    "use strict";

    var r = function r() {
      var i = this,
          t = i.$createElement;
      i._self._c;
    },
        n = [];

    e.d(t, "a", function () {
      return r;
    }), e.d(t, "b", function () {
      return n;
    });
  },
  f6c5: function f6c5(i, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-grid-item/uni-grid-item-create-component', {
  'components/uni-grid-item/uni-grid-item-create-component': function componentsUniGridItemUniGridItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5154"));
  }
}, [['components/uni-grid-item/uni-grid-item-create-component']]]);
});
require('components/uni-grid-item/uni-grid-item.js');
__wxRoute = 'components/uni-grid/uni-grid';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-grid/uni-grid.js';

define('components/uni-grid/uni-grid.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-grid/uni-grid"], {
  "479b": function b(t, n, e) {},
  "4f1b": function f1b(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  8859: function _(t, n, e) {
    "use strict";

    var i = e("479b"),
        u = e.n(i);
    u.a;
  },
  "91bc": function bc(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("4f1b"),
        u = e("953a");

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    e("8859");
    var r = e("2877"),
        c = Object(r["a"])(u["default"], i["a"], i["b"], !1, null, "6191f4ae", null);
    n["default"] = c.exports;
  },
  "953a": function a(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("c67d"),
        u = e.n(i);

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    n["default"] = u.a;
  },
  c67d: function c67d(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        name: "UniGrid",
        props: {
          column: {
            type: Number,
            default: 3
          },
          showBorder: {
            type: Boolean,
            default: !0
          },
          borderColor: {
            type: String,
            default: "#e5e5e5"
          },
          square: {
            type: Boolean,
            default: !0
          },
          highlight: {
            type: Boolean,
            default: !0
          }
        },
        provide: function provide() {
          return {
            grid: this
          };
        },
        data: function data() {
          var t = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
          return {
            index: 0,
            elId: t,
            width: 0
          };
        },
        created: function created() {
          this.children = [], this.index = 0;
        },
        mounted: function mounted() {
          this.init();
        },
        methods: {
          init: function init() {
            var t = this;
            setTimeout(function () {
              t._getSize(function (n) {
                t.children.forEach(function (t, e) {
                  t.width = n;
                });
              });
            }, 50);
          },
          change: function change(t) {
            this.$emit("change", t);
          },
          _getSize: function _getSize(n) {
            var e = this;
            t.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function (t) {
              e.width = parseInt(t[0].width / e.column) - 1 + "px", n(e.width);
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-grid/uni-grid-create-component', {
  'components/uni-grid/uni-grid-create-component': function componentsUniGridUniGridCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("91bc"));
  }
}, [['components/uni-grid/uni-grid-create-component']]]);
});
require('components/uni-grid/uni-grid.js');
__wxRoute = 'components/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icons/uni-icons.js';

define('components/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icons/uni-icons"], {
  "00d4": function d4(t, n, e) {
    "use strict";

    var u = e("5dbc"),
        r = e.n(u);
    r.a;
  },
  3856: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("d2b3"),
        r = e.n(u);

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    n["default"] = r.a;
  },
  "5dbc": function dbc(t, n, e) {},
  "601a": function a(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("e42d"),
        r = e("3856");

    for (var c in r) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(c);
    }

    e("00d4");
    var i = e("2877"),
        a = Object(i["a"])(r["default"], u["a"], u["b"], !1, null, "1315b2c6", null);
    n["default"] = a.exports;
  },
  d2b3: function d2b3(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = r(e("c5ba"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var c = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      data: function data() {
        return {
          icons: u.default
        };
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = c;
  },
  e42d: function e42d(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icons/uni-icons-create-component', {
  'components/uni-icons/uni-icons-create-component': function componentsUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("601a"));
  }
}, [['components/uni-icons/uni-icons-create-component']]]);
});
require('components/uni-icons/uni-icons.js');
__wxRoute = 'components/uni-list-item/uni-list-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-list-item/uni-list-item.js';

define('components/uni-list-item/uni-list-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-list-item/uni-list-item"], {
  2702: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("3993"),
        o = e.n(i);

    for (var u in i) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(u);
    }

    n["default"] = o.a;
  },
  3287: function _(t, n, e) {},
  3993: function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var i = function i() {
      return Promise.all([e.e("common/vendor"), e.e("components/uni-icons/uni-icons")]).then(e.bind(null, "601a"));
    },
        o = function o() {
      return e.e("components/uni-badge/uni-badge").then(e.bind(null, "0d37"));
    },
        u = {
      name: "UniListItem",
      components: {
        uniIcons: i,
        uniBadge: o
      },
      props: {
        titleRight: {
          type: String,
          default: ""
        },
        noteRight: {
          type: String,
          default: ""
        },
        title: {
          type: String,
          default: ""
        },
        money: {
          type: String,
          default: ""
        },
        note: {
          type: String,
          default: ""
        },
        disabled: {
          type: [Boolean, String],
          default: !1
        },
        showArrow: {
          type: [Boolean, String],
          default: !0
        },
        showBadge: {
          type: [Boolean, String],
          default: !1
        },
        showSwitch: {
          type: [Boolean, String],
          default: !1
        },
        switchChecked: {
          type: [Boolean, String],
          default: !1
        },
        badgeText: {
          type: String,
          default: ""
        },
        badgeType: {
          type: String,
          default: "success"
        },
        thumb: {
          type: String,
          default: ""
        },
        showExtraIcon: {
          type: [Boolean, String],
          default: !1
        },
        extraIcon: {
          type: Object,
          default: function _default() {
            return {
              type: "contact",
              color: "#000000",
              size: 20
            };
          }
        }
      },
      inject: ["list"],
      data: function data() {
        return {
          isFirstChild: !1
        };
      },
      mounted: function mounted() {
        this.list.firstChildAppend || (this.list.firstChildAppend = !0, this.isFirstChild = !0);
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        },
        onSwitchChange: function onSwitchChange(t) {
          this.$emit("switchChange", t.detail);
        }
      }
    };

    n.default = u;
  },
  "3a99": function a99(t, n, e) {
    "use strict";

    var i = e("3287"),
        o = e.n(i);
    o.a;
  },
  "70b3": function b3(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("f3e1"),
        o = e("2702");

    for (var u in o) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(u);
    }

    e("3a99");
    var a = e("2877"),
        r = Object(a["a"])(o["default"], i["a"], i["b"], !1, null, "509b64a9", null);
    n["default"] = r.exports;
  },
  f3e1: function f3e1(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return o;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-list-item/uni-list-item-create-component', {
  'components/uni-list-item/uni-list-item-create-component': function componentsUniListItemUniListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("70b3"));
  }
}, [['components/uni-list-item/uni-list-item-create-component']]]);
});
require('components/uni-list-item/uni-list-item.js');
__wxRoute = 'components/uni-list/uni-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-list/uni-list.js';

define('components/uni-list/uni-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-list/uni-list"], {
  "2f53": function f53(t, n, e) {
    "use strict";

    var i = e("fdba"),
        o = e.n(i);
    o.a;
  },
  "3d6a": function d6a(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = {
      name: "UniList",
      "mp-weixin": {
        options: {
          multipleSlots: !1
        }
      },
      props: {
        enableBackToTop: {
          type: [Boolean, String],
          default: !1
        },
        scrollY: {
          type: [Boolean, String],
          default: !1
        }
      },
      provide: function provide() {
        return {
          list: this
        };
      },
      created: function created() {
        this.firstChildAppend = !1;
      },
      methods: {
        loadMore: function loadMore(t) {
          this.$emit("scrolltolower");
        }
      }
    };
    n.default = i;
  },
  "6a34": function a34(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return o;
    });
  },
  "6bd9": function bd9(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("3d6a"),
        o = e.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    n["default"] = o.a;
  },
  ad25: function ad25(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("6a34"),
        o = e("6bd9");

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    e("2f53");
    var u = e("2877"),
        r = Object(u["a"])(o["default"], i["a"], i["b"], !1, null, "016c108a", null);
    n["default"] = r.exports;
  },
  fdba: function fdba(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-list/uni-list-create-component', {
  'components/uni-list/uni-list-create-component': function componentsUniListUniListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ad25"));
  }
}, [['components/uni-list/uni-list-create-component']]]);
});
require('components/uni-list/uni-list.js');
__wxRoute = 'components/uni-section/uni-section';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-section/uni-section.js';

define('components/uni-section/uni-section.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-section/uni-section"], {
  "643f": function f(t, n, e) {
    "use strict";

    var u = e("c83c"),
        i = e.n(u);
    i.a;
  },
  "91b1": function b1(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("c5f0"),
        i = e.n(u);

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    n["default"] = i.a;
  },
  "925f": function f(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  a400: function a400(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("925f"),
        i = e("91b1");

    for (var c in i) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(c);
    }

    e("643f");
    var r = e("2877"),
        f = Object(r["a"])(i["default"], u["a"], u["b"], !1, null, "d272f59e", null);
    n["default"] = f.exports;
  },
  c5f0: function c5f0(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        name: "UniTitle",
        props: {
          type: {
            type: String,
            default: ""
          },
          title: {
            type: String,
            default: ""
          },
          subTitle: {
            type: String,
            default: ""
          },
          sumTitle: {
            type: String,
            default: "0.00"
          }
        },
        data: function data() {
          return {};
        },
        watch: {
          title: function title(n) {
            t.report && "" !== n && t.report("title", n);
          }
        },
        methods: {
          onClick: function onClick() {
            this.$emit("click");
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  c83c: function c83c(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-section/uni-section-create-component', {
  'components/uni-section/uni-section-create-component': function componentsUniSectionUniSectionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a400"));
  }
}, [['components/uni-section/uni-section-create-component']]]);
});
require('components/uni-section/uni-section.js');
__wxRoute = 'components/w-picker/w-picker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/w-picker/w-picker.js';

define('components/w-picker/w-picker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/w-picker/w-picker"], {
  "1bb1": function bb1(a, t, e) {
    "use strict";

    (function (a, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var s = i(e("7f88")),
          n = i(e("78ae")),
          l = i(e("0b3d")),
          d = i(e("8c9e"));

      function i(a) {
        return a && a.__esModule ? a : {
          default: a
        };
      }

      function u(a) {
        return o(a) || h(a) || c();
      }

      function c() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }

      function h(a) {
        if (Symbol.iterator in Object(a) || "[object Arguments]" === Object.prototype.toString.call(a)) return Array.from(a);
      }

      function o(a) {
        if (Array.isArray(a)) {
          for (var t = 0, e = new Array(a.length); t < a.length; t++) {
            e[t] = a[t];
          }

          return e;
        }
      }

      function f(a, t) {
        for (var e = 0; e < t.length; e++) {
          if (a === t[e]) return !0;
        }

        throw new Error("mode无效，请选择有效的mode!");
      }

      var m = {
        data: function data() {
          return {
            result: [],
            data: {},
            checkArr: [],
            checkValue: [],
            pickVal: [],
            showPicker: !1,
            resultStr: "",
            itemHeight: "height: ".concat(a.upx2px(88), "px;"),
            confirmFlag: !0
          };
        },
        computed: {},
        props: {
          mode: {
            type: String,
            validator: function validator(a) {
              var t = ["half", "date", "dateTime", "yearMonth", "time", "region", "selector", "limit", "limitHour", "range", "linkage"];
              return f(a, t);
            },
            default: function _default() {
              return "date";
            }
          },
          themeColor: {
            type: String,
            default: function _default() {
              return "#f5a200";
            }
          },
          startYear: {
            type: [String, Number],
            default: function _default() {
              return "1970";
            }
          },
          endYear: {
            type: [String, Number],
            default: function _default() {
              return new Date().getFullYear() + "";
            }
          },
          defaultVal: {
            type: [Array, String],
            default: ""
          },
          areaCode: {
            type: Array,
            default: function _default() {
              return null;
            }
          },
          hideArea: {
            type: Boolean,
            default: !1
          },
          step: {
            type: [String, Number],
            default: 1
          },
          current: {
            type: Boolean,
            default: !1
          },
          selectList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          dayStep: {
            type: [String, Number],
            default: 7
          },
          startHour: {
            type: [String, Number],
            default: 8
          },
          endHour: {
            type: [String, Number],
            default: 20
          },
          minuteStep: {
            type: [String, Number],
            default: 10
          },
          afterStep: {
            type: [String, Number],
            default: 30
          },
          disabledAfter: {
            type: Boolean,
            default: !1
          },
          linkList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          value: {
            type: Array,
            default: function _default() {
              return null;
            }
          },
          level: {
            type: [Number, String],
            default: 2
          },
          timeout: {
            type: Boolean,
            default: !1
          }
        },
        watch: {
          mode: function mode() {
            this.initData();
          },
          selectList: function selectList() {
            this.initData();
          },
          linkList: function linkList() {
            this.initData();
          },
          defaultVal: function defaultVal(a) {
            this.initData(), console.log(r(a, " at components\\w-picker\\w-picker.vue:311"));
          },
          areaCode: function areaCode() {
            this.initData();
          },
          value: function value() {
            this.initData();
          }
        },
        methods: {
          touchStart: function touchStart() {
            this.timeout && (this.confirmFlag = !1);
          },
          touchEnd: function touchEnd() {
            var a = this;
            this.timeout && setTimeout(function () {
              a.confirmFlag = !0;
            }, 500);
          },
          getLinkageVal: function getLinkageVal(a, t) {
            var e = [],
                r = this.linkList,
                s = this.level,
                n = a,
                l = 0,
                d = [],
                i = [],
                u = "",
                c = [];

            switch (s) {
              case 2:
                e = [0, 0];
                break;

              case 3:
                e = [0, 0, 0];
                break;
            }

            var h = function a(r, l, h) {
              if (l < s) {
                if (c.push(r), n) r.map(function (r, s) {
                  (t ? r.value == n[l] : r.label == n[l]) && (e[l] = s, d.push(r.label), i.push(r.value), u += r.label, r.children && a(r.children, l += 1));
                });else {
                  var o = r[0];
                  d.push(o.label), i.push(o.value), u += o.label, o.children && a(o.children, l += 1);
                }
                return {
                  data: c,
                  dval: e,
                  checkArr: d,
                  checkValue: i,
                  resultStr: u
                };
              }

              return !1;
            };

            return h(r, l);
          },
          getRegionVal: function getRegionVal(a, t) {
            var e = a[0],
                r = a[1],
                d = 0,
                i = 0,
                u = 0,
                c = [],
                h = this;
            if (s.default.map(function (a, r) {
              (t ? a.value == e : a.label == e) && (d = r);
            }), n.default[d].map(function (a, e) {
              (t ? a.value == r : a.label == r) && (i = e);
            }), h.hideArea) c = [d, i];else {
              var o = a[2];
              l.default[d][i].map(function (a, e) {
                (t ? a.value == o : a.label == o) && (u = e);
              }), c = [d, i, u];
            }
            return c;
          },
          useCurrent: function useCurrent() {
            var a = new Date(),
                t = a.getFullYear().toString(),
                e = this.formatNum(a.getMonth() + 1).toString(),
                r = this.formatNum(a.getDate()).toString(),
                s = this.formatNum(a.getHours()).toString(),
                n = this.formatNum(a.getMinutes()).toString(),
                l = this.formatNum(a.getSeconds()).toString();
            if (!this.current && this.defaultVal) return this.defaultVal;

            switch (this.mode) {
              case "range":
                return [t + "-" + e + "-" + r, t + "-" + e + "-" + r];

              case "date":
                return t + "-" + e + "-" + r;

              case "yearMonth":
                return t + "-" + e;

              case "time":
                return s + ":" + (Math.floor(n / this.step) * this.step).toString() + ":" + l;

              default:
                return t + "-" + e + "-" + r + " " + s + ":" + (Math.floor(n / this.step) * this.step).toString() + ":" + l;
            }
          },
          formatNum: function formatNum(a) {
            return a < 10 ? "0" + a : a + "";
          },
          maskTap: function maskTap() {
            this.$emit("cancel", {
              checkArr: this.checkArr,
              defaultVal: this.pickVal
            }), this.showPicker = !1;
          },
          show: function show() {
            this.showPicker = !0;
          },
          hide: function hide() {
            this.showPicker = !1;
          },
          pickerCancel: function pickerCancel() {
            this.$emit("cancel", {
              checkArr: this.checkArr,
              defaultVal: this.pickVal
            }), this.showPicker = !1;
          },
          pickerConfirm: function pickerConfirm(t) {
            if (this.confirmFlag) {
              switch (this.mode) {
                case "range":
                  var e = this.checkArr,
                      r = new Date(e[0], e[1], e[2]),
                      s = new Date(e[3], e[4], e[5]),
                      n = this.pickVal;
                  r > s ? (this.checkArr = [e[3], e[4], e[5], e[0], e[1], e[2]], this.pickVal = [n[4], n[5], n[6], 0, n[0], n[1], n[2]], this.$emit("confirm", {
                    checkArr: u(this.checkArr),
                    from: e[3] + "-" + e[4] + "-" + e[5],
                    to: e[0] + "-" + e[1] + "-" + e[2],
                    defaultVal: u(this.pickVal),
                    result: this.resultStr
                  })) : this.$emit("confirm", {
                    checkArr: u(this.checkArr),
                    from: e[0] + "-" + e[1] + "-" + e[2],
                    to: e[3] + "-" + e[4] + "-" + e[5],
                    defaultVal: u(this.pickVal),
                    result: this.resultStr
                  });
                  break;

                case "limit":
                  var l = new Date().getTime(),
                      d = new Date(this.resultStr.replace(/-/g, "/")).getTime();
                  if (l > d) return void a.showModal({
                    title: "提示",
                    content: "选择时间必须大于当前时间",
                    confirmColor: this.themeColor
                  });
                  this.$emit("confirm", {
                    checkArr: u(this.checkArr),
                    defaultVal: u(this.pickVal),
                    result: this.resultStr
                  });
                  break;

                case "region":
                case "linkage":
                  this.$emit("confirm", {
                    checkArr: u(this.checkArr),
                    checkValue: u(this.checkValue),
                    defaultVal: u(this.pickVal),
                    result: this.resultStr
                  });
                  break;

                case "selector":
                  this.$emit("confirm", {
                    checkArr: this.checkArr,
                    defaultVal: u(this.pickVal),
                    result: this.resultStr
                  });
                  break;

                default:
                  this.$emit("confirm", {
                    checkArr: [this.checkArr],
                    defaultVal: u(this.pickVal),
                    result: this.resultStr
                  });
                  break;
              }

              this.showPicker = !1;
            }
          },
          bindChange: function bindChange(a) {
            var t,
                e,
                r,
                s,
                i,
                u,
                c,
                h,
                o,
                f = this,
                m = a.detail.value,
                y = "",
                g = "",
                k = "",
                b = "",
                v = "",
                p = "",
                A = f.checkArr,
                S = [],
                V = [],
                w = [],
                D = [],
                H = [],
                M = [],
                Y = f.mode;
            new Date().getTime();

            switch (Y) {
              case "limitHour":
                if (s = f.data.date[m[0]], i = f.data.areas[m[1]], f.data.hours[m[2]], s.value != A[0].value) {
                  m[1] = 0, m[2] = 0;
                  var N = d.default.limitHour.initAreas(s);
                  f.data.areas = N;
                  var E = d.default.limitHour.initHours(s, f.data.areas[m[1]]);
                  f.data.hours = E;
                }

                if (i.value != A[1].value) {
                  m[2] = 0;
                  var C = d.default.limitHour.initHours(s, f.data.areas[m[1]]);
                  f.data.hours = C;
                }

                u = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], c = f.data.areas[m[1]] || f.data.areas[f.data.areas.length - 1], h = f.data.hours[m[2]] || f.data.hours[f.data.hours.length - 1], f.checkArr = [u, c, h], f.resultStr = "".concat(u.value + " " + c.label + " " + h.label + "时");
                break;

              case "limit":
                if (s = f.data.date[m[0]], i = f.data.hours[m[1]], s.value != A[0].value) {
                  var T = d.default.limit.initHours(f.startHour, f.endHour, f.minuteStep, f.afterStep, s.value),
                      L = d.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, s.value, i.value);
                  f.data.hours = T, f.data.minutes = L;
                }

                if (i.value != A[1].value) {
                  var $ = d.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, s.value, i.value);
                  f.data.minutes = $;
                }

                u = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], h = f.data.hours[m[1]] || f.data.hours[f.data.hours.length - 1], o = f.data.minutes[m[2]] || f.data.minutes[f.data.minutes.length - 1], f.checkArr = [u, h, o], f.resultStr = "".concat(u.value + " " + h.value + ":" + o.value + ":00");
                break;

              case "range":
                var P = f.data.fyears[m[0]] || f.data.fyears[f.data.fyears.length - 1],
                    x = f.data.fmonths[m[1]] || f.data.fmonths[f.data.fmonths.length - 1],
                    F = f.data.fdays[m[2]] || f.data.fdays[f.data.fdays.length - 1],
                    _ = f.data.tyears[m[4]] || f.data.tyears[f.data.tyears.length - 1],
                    j = f.data.tmonths[m[5]] || f.data.tmonths[f.data.tmonths.length - 1],
                    B = f.data.tdays[m[6]] || f.data.tdays[f.data.tdays.length - 1];

                P != A[0] && (m[4] = 0, m[5] = 0, m[6] = 0, M = d.default.range.initStartDays(P, x), w = d.default.range.initEndYears(P, f.startYear, f.endYear), D = d.default.range.initEndMonths(x), H = d.default.range.initEndDays(P, x, F, _, j), f.data.fdays = M, f.data.tyears = w, f.data.tmonths = D, f.data.tdays = H, _ = f.data.tyears[0], A[3] = f.data.tyears[0], j = f.data.tmonths[0], A[4] = f.data.tmonths[0], B = f.data.tdays[0], A[5] = f.data.tdays[0]), x != A[1] && (m[4] = 0, m[5] = 0, m[6] = 0, M = d.default.range.initStartDays(P, x), w = d.default.range.initEndYears(P, f.startYear, f.endYear), D = d.default.range.initEndMonths(x), H = d.default.range.initEndDays(P, x, F, _, j), f.data.fdays = M, f.data.tyears = w, f.data.tmonths = D, f.data.tdays = H, _ = f.data.tyears[0], A[3] = f.data.tyears[0], j = f.data.tmonths[0], A[4] = f.data.tmonths[0], B = f.data.tdays[0], A[5] = f.data.tdays[0]), F != A[2] && (m[4] = 0, m[5] = 0, m[6] = 0, w = d.default.range.initEndYears(P, f.startYear, f.endYear), D = d.default.range.initEndMonths(x), H = d.default.range.initEndDays(P, x, F, _, j), f.data.tyears = w, f.data.tmonths = D, f.data.tdays = H, _ = f.data.tyears[0], A[3] = f.data.tyears[0], j = f.data.tmonths[0], A[4] = f.data.tmonths[0], B = f.data.tdays[0], A[5] = f.data.tdays[0]), _ != A[3] && (m[5] = 0, m[6] = 0, D = d.default.range.initToMonths(P, x, F, _), H = d.default.range.initEndDays(P, x, F, _, j), f.data.tmonths = D, f.data.tdays = H, j = f.data.tmonths[0], A[4] = f.data.tmonths[0], B = f.data.tdays[0], A[5] = f.data.tdays[0]), j != A[4] && (m[6] = 0, H = d.default.range.initToDays(P, x, F, _, j), f.data.tdays = H, B = f.data.tdays[0], A[5] = f.data.tdays[0]), f.checkArr = [P, x, F, _, j, B], f.resultStr = "".concat(P + "-" + x + "-" + F + "至" + _ + "-" + j + "-" + B);
                break;

              case "half":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], r = f.data.areas[m[3]] || f.data.areas[f.data.areas.length - 1], y != A[0] && (V = d.default.date.initMonths(y, f.disabledAfter), S = d.default.date.initDays(y, g, f.disabledAfter), f.disabledAfter && (m[1] = m[1] > V.length - 1 ? V.length - 1 : m[1], m[2] = m[2] > S.length - 1 ? S.length - 1 : m[2], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1]), f.data.days = S, f.data.months = V), g != A[1] && (S = d.default.date.initDays(y, g, f.disabledAfter), m[2] = m[2] > S.length - 1 ? S.length - 1 : m[2], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], f.data.days = S), f.checkArr = [y, g, k, r], f.resultStr = "".concat(y + "-" + g + "-" + k + r.label);
                break;

              case "date":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], y != A[0] && (V = d.default.date.initMonths(y, f.disabledAfter), S = d.default.date.initDays(y, g, f.disabledAfter), f.disabledAfter && (m[1] = m[1] > V.length - 1 ? V.length - 1 : m[1], m[2] = m[2] > S.length - 1 ? S.length - 1 : m[2], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1]), f.data.days = S, f.data.months = V), g != A[1] && (S = d.default.date.initDays(y, g, f.disabledAfter), m[2] = m[2] > S.length - 1 ? S.length - 1 : m[2], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], f.data.days = S), f.checkArr = [y, g, k], f.resultStr = "".concat(y + "-" + g + "-" + k);
                break;

              case "yearMonth":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], y != A[0] && (f.disabledAfter && (m[1] = m[1] > V.length - 1 ? V.length - 1 : m[1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1]), V = d.default.date.initMonths(y, f.disabledAfter), f.data.months = V), f.checkArr = [y, g], f.resultStr = "".concat(y + "-" + g);
                break;

              case "dateTime":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], b = f.data.hours[m[3]] || f.data.hours[f.data.hours.length - 1], v = f.data.minutes[m[4]] || f.data.minutes[f.data.minutes.length - 1], p = f.data.seconds[m[5]] || f.data.seconds[f.data.seconds.length - 1], y != A[0] && (m[2] = 0, S = d.default.date.initDays(y, g), k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], f.data.days = S), g != A[1] && (m[2] = 0, S = d.default.date.initDays(y, g), k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], f.data.days = S), f.checkArr = [y, g, k, b, v, p], f.resultStr = "".concat(y + "-" + g + "-" + k + " " + b + ":" + v + ":" + p);
                break;

              case "time":
                b = f.data.hours[m[0]] || f.data.hours[f.data.hours.length - 1], v = f.data.minutes[m[1]] || f.data.minutes[f.data.minutes.length - 1], p = f.data.seconds[m[2]] || f.data.seconds[f.data.seconds.length - 1], f.checkArr = [b, v, p], f.resultStr = "".concat(b + ":" + v + ":" + p);
                break;

              case "linkage":
                var O,
                    R,
                    J,
                    I = this.linkList;
                O = f.data[0][m[0]] || f.data[0][0], R = f.data[1][m[1]] || f.data[1][0], 3 == this.level ? (J = f.data[2][m[2]] || f.data[2][0], O.label != A[0] && (m[1] = 0, m[2] = 0, f.data[1] = I[m[0]].children, f.data[2] = I[m[0]].children[m[1]].children, R = f.data[1][m[1]] || f.data[1][0], J = f.data[2][m[2]] || f.data[2][0]), R.label != A[1] && (m[2] = 0, f.data[2] = I[m[0]].children[m[1]].children, J = f.data[2][m[2]] || f.data[2][0]), f.checkArr = [O.label, R.label, J.label], f.checkValue = [f.data[0][m[0]] ? f.data[0][m[0]].value : f.data[0][0].value, f.data[1][m[1]] ? f.data[1][m[1]].value : f.data[1][0].value, f.data[2][m[2]] ? f.data[2][m[2]].value : f.data[2][0].value], f.resultStr = O.label + R.label + J.label) : (O.label != A[0] && (f.data[1] = I[m[0]].children, m[1] = 0, R = f.data[1][m[1]] || f.data[1][0]), f.checkArr = [O.label, R.label], f.checkValue = [f.data[0][m[0]] ? f.data[0][m[0]].value : f.data[0][0].value, f.data[1][m[1]] ? f.data[1][m[1]].value : f.data[1][0].value], f.resultStr = O.label + R.label);
                break;

              case "region":
                t = f.data.provinces[m[0]] || f.data.provinces[0], e = f.data.citys[m[1]] || f.data.citys[0], f.hideArea || (r = f.data.areas[m[2]] || f.data.areas[0]), t.label != A[0] && (f.data.citys = n.default[m[0]] || n.default[0], f.hideArea || (f.data.areas = l.default[m[0]][0] || l.default[0][0]), m[1] = 0, m[2] = 0, e = f.data.citys[m[1]] || f.data.citys[0], f.hideArea || (r = f.data.areas[m[2]] || f.data.areas[0])), e.label == A[1] || f.hideArea || (f.data.areas = l.default[m[0]][m[1]] || l.default[0][0], m[2] = 0, r = f.data.areas[m[2]] || f.data.areas[0]), f.hideArea ? (f.checkArr = [t.label, e.label], f.checkValue = [f.data.provinces[m[0]] ? f.data.provinces[m[0]].value : f.data.provinces[0].value, f.data.citys[m[1]] ? f.data.citys[m[1]].value : f.data.citys[0].value], f.resultStr = t.label + e.label) : (f.checkArr = [t.label, e.label, r.label], f.checkValue = [f.data.provinces[m[0]] ? f.data.provinces[m[0]].value : f.data.provinces[0].value, f.data.citys[m[1]] ? f.data.citys[m[1]].value : f.data.citys[0].value, f.data.areas[m[2]] ? f.data.areas[m[2]].value : f.data.areas[0].value], f.resultStr = t.label + e.label + r.label);
                break;

              case "selector":
                f.checkArr = f.data[m[0]] || f.data[f.data.length - 1], f.resultStr = f.data[m[0]] ? f.data[m[0]].label : f.data[f.data.length - 1].label;
                break;
            }

            f.$nextTick(function () {
              f.pickVal = m;
            });
          },
          initData: function initData() {
            var a,
                t,
                e,
                r,
                i,
                c,
                h,
                o,
                f,
                m,
                y,
                g,
                k = this,
                b = this,
                v = {},
                p = b.mode,
                A = [];

            switch (p) {
              case "linkage":
                var S;
                S = b.value ? b.getLinkageVal(b.value, !0) : b.getLinkageVal(b.defaultVal), A = S.dval, v = S.data, b.checkArr = S.checkArr, b.checkValue = S.checkValue, b.resultStr = S.resultStr;
                break;

              case "region":
                A = b.areaCode ? b.getRegionVal(b.areaCode, !0) : b.getRegionVal(b.defaultVal), v = b.hideArea ? {
                  provinces: s.default,
                  citys: n.default[A[0]]
                } : {
                  provinces: s.default,
                  citys: n.default[A[0]],
                  areas: l.default[A[0]][A[1]]
                };
                break;

              case "selector":
                var V = 0;
                v = u(b.selectList), b.selectList.map(function (a, t) {
                  a.label == k.defaultVal && (V = t);
                }), A = [V];
                break;

              case "limit":
                v = d.default.limit.init(b.dayStep, b.startHour, b.endHour, b.minuteStep, b.afterStep, this.defaultVal), A = v.defaultVal || b.defaultVal;
                break;

              case "limitHour":
                v = d.default.limitHour.init(b.dayStep, this.defaultVal), A = v.defaultVal || b.defaultVal;
                break;

              case "range":
                v = d.default.range.init(b.startYear, b.endYear, b.useCurrent(), b.current), A = v.defaultVal || b.defaultVal;
                break;

              default:
                v = d.default.date.init(b.startYear, b.endYear, b.mode, b.step, b.useCurrent(), b.current, b.disabledAfter), A = v.defaultVal || b.defaultVal;
                break;
            }

            switch (b.data = v, p) {
              case "limitHour":
                m = v.date[A[0]] || v.date[v.date.length - 1], y = v.areas[A[2]] || v.areas[v.areas.length - 1], g = v.hours[A[1]] || v.hours[v.hours.length - 1], b.checkArr = [m, y, g], b.resultStr = "".concat(m.value + " " + y.label + " " + g.label + "时");
                break;

              case "limit":
                m = v.date[A[0]] || v.date[v.date.length - 1], y = v.hours[A[1]] || v.hours[v.hours.length - 1], g = v.minutes[A[2]] || v.minutes[v.minutes.length - 1], b.checkArr = [m, y, g], b.resultStr = "".concat(m.value + " " + y.value + ":" + g.value + ":00");
                break;

              case "range":
                var w = v.fyears[A[0]] || v.fyears[v.fyears.length - 1],
                    D = v.fmonths[A[1]] || v.fmonths[v.fmonths.length - 1],
                    H = v.fdays[A[2]] || v.fdays[v.fdays.length - 1],
                    M = v.tyears[A[4]] || v.tyears[v.tyears.length - 1],
                    Y = v.tmonths[A[5]] || v.tmonths[v.tmonths.length - 1],
                    N = v.tdays[A[6]] || v.tdays[v.tdays.length - 1];
                b.checkArr = [w, D, H, M, Y, N], b.resultStr = "".concat(w + "-" + D + "-" + H + "至" + M + "-" + Y + "-" + N);
                break;

              case "half":
                a = v.years[A[0]] || v.years[v.years.length - 1], t = v.months[A[1]] || v.months[v.months.length - 1], e = v.days[A[2]] || v.days[v.days.length - 1], f = v.areas[A[3]] || v.areas[v.areas.length - 1], b.checkArr = [a, t, e, f], b.resultStr = "".concat(a + "-" + t + "-" + e + " " + f.label);
                break;

              case "date":
                a = v.years[A[0]] || v.years[v.years.length - 1], t = v.months[A[1]] || v.months[v.months.length - 1], e = v.days[A[2]] || v.days[v.days.length - 1], b.checkArr = [a, t, e], b.resultStr = "".concat(a + "-" + t + "-" + e);
                break;

              case "yearMonth":
                a = v.years[A[0]] || v.years[v.years.length - 1], t = v.months[A[1]] || v.months[v.months.length - 1], b.checkArr = [a, t], b.resultStr = "".concat(a + "-" + t);
                break;

              case "dateTime":
                a = v.years[A[0]] || v.years[v.years.length - 1], t = v.months[A[1]] || v.months[v.months.length - 1], e = v.days[A[2]] || v.days[v.days.length - 1], r = v.hours[A[3]] || v.hours[v.hours.length - 1], i = v.minutes[A[4]] || v.minutes[v.minutes.length - 1], c = v.seconds[A[5]] || v.seconds[v.seconds.length - 1], b.resultStr = "".concat(a + "-" + t + "-" + e + " " + r + ":" + i + ":" + c), b.checkArr = [a, t, e, r, i];
                break;

              case "time":
                r = v.hours[A[0]] || v.hours[v.hours.length - 1], i = v.minutes[A[1]] || v.minutes[v.minutes.length - 1], c = v.seconds[A[2]] || v.seconds[v.seconds.length - 1], b.checkArr = [r, i, c], b.resultStr = "".concat(r + ":" + i + ":" + c);
                break;

              case "region":
                h = v.provinces[A[0]], o = v.citys[A[1]], b.hideArea ? (b.checkArr = [h.label, o.label], b.checkValue = [h.value, o.value], b.resultStr = h.label + o.label) : (f = v.areas[A[2]], b.checkArr = [h.label, o.label, f.label], b.checkValue = [h.value, o.value, f.value], b.resultStr = h.label + o.label + f.label);
                break;

              case "selector":
                b.checkArr = v[A[0]] || v[v.length - 1], b.resultStr = v[A[0]].label || v[v.length - 1].label;
                break;
            }

            b.$nextTick(function () {
              b.pickVal = u(A);
            });
          }
        },
        mounted: function mounted() {
          this.initData();
        }
      };
      t.default = m;
    }).call(this, e("6e42")["default"], e("0de9")["default"]);
  },
  "9a67": function a67(a, t, e) {
    "use strict";

    var r = e("cf06"),
        s = e.n(r);
    s.a;
  },
  cf06: function cf06(a, t, e) {},
  e37f: function e37f(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("ecf5"),
        s = e("f2af");

    for (var n in s) {
      "default" !== n && function (a) {
        e.d(t, a, function () {
          return s[a];
        });
      }(n);
    }

    e("9a67");
    var l = e("2877"),
        d = Object(l["a"])(s["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = d.exports;
  },
  ecf5: function ecf5(a, t, e) {
    "use strict";

    var r = function r() {
      var a = this,
          t = a.$createElement;
      a._self._c;
    },
        s = [];

    e.d(t, "a", function () {
      return r;
    }), e.d(t, "b", function () {
      return s;
    });
  },
  f2af: function f2af(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("1bb1"),
        s = e.n(r);

    for (var n in r) {
      "default" !== n && function (a) {
        e.d(t, a, function () {
          return r[a];
        });
      }(n);
    }

    t["default"] = s.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/w-picker/w-picker-create-component', {
  'components/w-picker/w-picker-create-component': function componentsWPickerWPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e37f"));
  }
}, [['components/w-picker/w-picker-create-component']]]);
});
require('components/w-picker/w-picker.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1759:function(e,t,n){"use strict";n.r(t);var l=n("f159"),a=n.n(l);for(var i in l)"default"!==i&&function(e){n.d(t,e,function(){return l[e]})}(i);t["default"]=a.a},"3e04":function(e,t,n){"use strict";var l=function(){var e=this,t=e.$createElement,n=(e._self._c,e._f("dateFormat")(e.sumMonth)),l=e._f("dateFormat")(e.sumToday),a=e._f("dateFormat")(e.sumWeek),i=e._f("dateFormat")(e.sumMonth);e.$mp.data=Object.assign({},{$root:{f0:n,f1:l,f2:a,f3:i}})},a=[];n.d(t,"a",function(){return l}),n.d(t,"b",function(){return a})},afed:function(e,t,n){"use strict";n.r(t);var l=n("3e04"),a=n("1759");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("ed4e");var s=n("2877"),u=Object(s["a"])(a["default"],l["a"],l["b"],!1,null,null,null);t["default"]=u.exports},c13d:function(e,t,n){"use strict";(function(e){n("eb38"),n("921b");l(n("66fd"));var t=l(n("afed"));function l(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},cba4:function(e,t,n){},ed4e:function(e,t,n){"use strict";var l=n("cba4"),a=n.n(l);a.a},f159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"601a"))},a=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"ad25"))},i=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"70b3"))},s={data:function(){return{title:"SQLite",extraIcon1:{color:"#4cd964",size:"22",type:"compose"},extraIcon2:{color:"#4cd964",size:"22",type:"spinner-cycle"},extraIcon3:{color:"#4cd964",size:"22",type:"navigate"},sumToday:0,sumMonth:0,sumWeek:0,todayNote:"最近一笔 餐饮 0.00",startTodayTime:"",endTodayTime:"",month:"1",weekBetweenTime:"1月13日 - 1月19日",monthBetweenTime:"2月1日 - 2月30日",startWeekTime:"",endWeekTime:"",startMonthTime:"",endMonthTime:""}},filters:{dateFormat:function(e){return e.toFixed(2)}},components:{uniList:a,uniListItem:i,uniIcons:l},onLoad:function(){this.openDB(),this.createTables(),this.initTypesData()},onShow:function(){this.initLastToday(),this.initDataToday(),this.initIndexMouth(),this.initIndexMouthMoney(),this.initWeekBetweenTime(),this.initMonthBetweenTime(),this.initWeekSum()},methods:{initIndexMouthMoney:function(){var e=this,t=0;e.startTodayTime=e.getTodayTime(5),e.endTodayTime=e.getTodayTime(6),plus.sqlite.selectSql({name:"tally",sql:'SELECT a.id AS id,a.time AS time,a.money AS money,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id WHERE a.time >= "'+e.startTodayTime+'" AND a.time < "'+e.endTodayTime+'";',success:function(n){for(var l in n)t+=n[l].money;e.sumMonth=t},fail:function(e){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(e))}})},openDB:function(){plus.sqlite.openDatabase({name:"tally",path:"_doc/tally.db",success:function(e){},fail:function(e){}})},initWeekBetweenTime:function(){var e=this,t=new Date,n=new Date,l=new Date;0==t.getDay()?n.setDate(t.getDate()-6):(n.setDate(t.getDate()-t.getDay()+1),l.setDate(t.getDate()+7-t.getDay()));var a=n.getMonth()+1,i=n.getDate();i>=1&&i<=9&&(i="0"+i),a>=1&&a<=9&&(a="0"+a);var s=l.getMonth()+1,u=l.getDate();s>=1&&s<=9&&(s="0"+s),u>=1&&u<=9&&(u="0"+u),e.weekBetweenTime=a+"月"+n.getDate()+"日 - "+s+"月"+l.getDate()+"日",e.startWeekTime=n.getFullYear()+"-"+a+"-"+i+" 00:00:00",e.endWeekTime=l.getFullYear()+"-"+s+"-"+u+" 23:59:59"},initMonthBetweenTime:function(){var e=this,t=new Date,n=new Date;t.setDate(1);t=new Date;var l=t.getMonth(),a=++l,i=new Date(t.getFullYear(),a,1),s=864e5,u=(n=new Date(i-s),t.getMonth()+1),o=n.getDate();u>=1&&u<=9&&(u="0"+u),e.monthBetweenTime=u+"月"+t.getDate()+"日 - "+u+"月"+n.getDate()+"日",e.startMonthTime=t.getFullYear()+"-"+u+"-01 00:00:00",o>=0&&o<=9&&(o="0"+o),e.endMonthTime=t.getFullYear()+"-"+u+"-"+o+" 23:59:59"},initIndexMouth:function(){var e=this,t=new Date;e.month=t.getMonth()+1},initDataToday:function(){var e=this,t=0,n=e.getTodayTime(3),l=e.getTodayTime(4);plus.sqlite.selectSql({name:"tally",sql:'SELECT a.id AS id,a.time AS time,a.money AS money,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id WHERE a.time >= "'+n+'" AND a.time < "'+l+'" ',success:function(n){for(var l in n)t+=n[l].money;e.sumToday=t},fail:function(e){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(e))}})},initWeekSum:function(){var e=this,t=0;e.getTodayTime(3),e.getTodayTime(4);plus.sqlite.selectSql({name:"tally",sql:'SELECT a.id AS id,a.time AS time,a.money AS money,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id WHERE a.time >= "'+e.startWeekTime+'" AND a.time < "'+e.endWeekTime+'" ',success:function(n){for(var l in n)t+=n[l].money;e.sumWeek=t},fail:function(e){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(e))}})},initLastToday:function(){var e=this;e.startTodayTime=e.getTodayTime(3),e.endTodayTime=e.getTodayTime(4),plus.sqlite.selectSql({name:"tally",sql:'SELECT a.id AS id,a.time AS time,a.money AS money,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id WHERE a.time >= "'+e.startTodayTime+'" AND a.time < "'+e.endTodayTime+'" ORDER BY a.time DESC limit 0,1;',success:function(t){for(var n in t)e.todayNote="最近一笔 "+t[n].typeName+" "+t[n].money},fail:function(e){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(e))}})},existTableAccount:function(e){plus.sqlite.selectSql({name:"tally",sql:'select count(*) as count  from sqlite_master where type="table" and name = "'+e+'";',success:function(e){e.count>0&&plus.sqlite.selectSql({name:"tally",sql:"select count(*) as count  from types;",success:function(e){e.count>0||this.initTypesData()}})},fail:function(e){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(e))}})},initTypesData:function(){plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "其他", "2020-12-12", "contact", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "餐饮", "2020-12-12", "person", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "交通", "2020-12-12", "personadd", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "购物", "2020-12-12", "phone", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "服饰", "2020-12-12", "location", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "日用品", "2020-12-12", "email", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "娱乐", "2020-12-12", "weibo", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "食材", "2020-12-12", "chat", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "零食", "2020-12-12", "qq", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "烟酒茶", "2020-12-12", "camera", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "学习", "2020-12-12", "mic", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "医疗", "2020-12-12", "image", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "住房", "2020-12-12", "map", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "水电煤", "2020-12-12", "trash", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "通讯", "2020-12-12", "close", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "人情往来", "2020-12-12", "undo", null, null);'}),plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO types VALUES (null, "设置", "2020-12-12", "star", null, null);'})},createTables:function(){plus.sqlite.executeSql({name:"tally",sql:'CREATE TABLE if not exists types ("id"  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,"name"  TEXT,"time"  TEXT,"icon"  TEXT,"color"  TEXT,"parentId"  INTEGER);',success:function(){},fail:function(){}}),plus.sqlite.executeSql({name:"tally",sql:'CREATE TABLE if not exists tally ("id"  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,"time"  TEXT,"typeId"  INTEGER,"money"  REAL,"remark"  TEXT,"accountId"  INTEGER);',success:function(){},fail:function(){}})},getTodayTime:function(e){var t=new Date,n=t.getFullYear(),l=t.getMonth()+1,a=t.getDate(),i=t.getHours()<10?"0"+t.getHours():t.getHours(),s=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),u=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();l>=1&&l<=9&&(l="0"+l),a>=0&&a<=9&&(a="0"+a);var o="";return 1==e?o=n+"-"+l+"-"+a+" "+i+":"+s+":"+u:2==e?o=n+"-"+l+"-"+a:3==e?o=n+"-"+l+"-"+a+" 00:00:00":4==e?o=n+"-"+l+"-"+a+" 23:59:59":5==e?o=n+"-"+l+"-00 23:59:59":6==e&&(o=n+"-"+l+"-31 23:59:59"),o},closeDB:function(){plus.sqlite.closeDatabase({name:"tally",success:function(e){plus.nativeUI.alert("关闭数据库成功")},fail:function(e){plus.nativeUI.alert("关闭数据库失败: "+JSON.stringify(e))}})},isOpenDB:function(){plus.sqlite.isOpenDatabase({name:"tally",path:"_doc/tally.db"})?plus.nativeUI.alert("Opened!"):plus.nativeUI.alert("Unopened!")}}};t.default=s}},[["c13d","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/me/me';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/me.js';

define('pages/me/me.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/me"],{"2e2e":function(t,n,e){},4046:function(t,n,e){"use strict";(function(t){e("eb38"),e("921b");o(e("66fd"));var n=o(e("620a"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},5609:function(t,n,e){"use strict";var o=e("2e2e"),u=e.n(o);u.a},"620a":function(t,n,e){"use strict";e.r(n);var o=e("9d03"),u=e("7372");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("5609");var r=e("2877"),i=Object(r["a"])(u["default"],o["a"],o["b"],!1,null,"6e3f4b4e",null);n["default"]=i.exports},7372:function(t,n,e){"use strict";e.r(n);var o=e("c533"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a},"9d03":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},c533:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},onLoad:function(){},methods:{gotoRegistration:function(){t.navigateTo({url:"registration"})},gotoForgetPassword:function(){t.navigateTo({url:"forget-password"})}}};n.default=e}).call(this,e("6e42")["default"])}},[["4046","common/runtime","common/vendor"]]]);
});
require('pages/me/me.js');
__wxRoute = 'pages/chart/chart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chart/chart.js';

define('pages/chart/chart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chart/chart"],{"55a1":function(e,t,n){"use strict";(function(e){n("eb38"),n("921b");o(n("66fd"));var t=o(n("c09e"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"6eb5":function(e,t,n){"use strict";n.r(t);var o=n("8593"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},8593:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("897e"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u,l=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e37f"))},s=null,f={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,serverData:"",scrollTop:0,old:{scrollTop:0}}},components:{wPicker:l},onLoad:function(){u=this,this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(500)},onShow:function(){this.getServerData()},methods:{scroll:function(e){console.log(o(e," at pages\\chart\\chart.vue:106")),this.old.scrollTop=e.detail.scrollTop},toggleTab:function(e){this.$refs[e].show()},onConfirm:function(e){console.log(o(e," at pages\\chart\\chart.vue:113")),this.resultInfo=r({},e)},getServerData:function(){var e=this;e.startTodayTime=e.getTodayTime(5),e.endTodayTime=e.getTodayTime(6),plus.sqlite.selectSql({name:"tally",sql:'SELECT sum(a.money) as sum,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id WHERE a.time >= "'+e.startTodayTime+'" AND a.time < "'+e.endTodayTime+'" group by t.name;',success:function(e){var t={series:[]};for(var n in e){var o={name:e[n].typeName,data:e[n].sum};t.series.push(o)}u.showRing("canvasRing",t)},fail:function(e){u.tips="网络错误，小程序端请检查合法域名"}})},getTodayTime:function(e){var t=new Date,n=t.getFullYear(),o=t.getMonth()+1,i=t.getDate(),a=t.getHours()<10?"0"+t.getHours():t.getHours(),r=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),c=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();o>=1&&o<=9&&(o="0"+o),i>=0&&i<=9&&(i="0"+i);var u="";return 1==e?u=n+"-"+o+"-"+i+" "+a+":"+r+":"+c:2==e?u=n+"-"+o+"-"+i:3==e?u=n+"-"+o+"-"+i+" 00:00:00":4==e?u=n+"-"+o+"-"+i+" 23:59:59":5==e?u=n+"-"+o+"-00 23:59:59":6==e&&(u=n+"-"+o+"-31 23:59:59"),u},showRing:function(e,t){s=new i.default({$this:u,canvasId:e,type:"ring",fontSize:11,legend:!0,title:{name:"70%",color:"#7cb5ec",fontSize:20*u.pixelRatio,offsetY:-5*u.pixelRatio},subtitle:{name:"收益率",color:"#666666",fontSize:15*u.pixelRatio,offsetY:1*u.pixelRatio},extra:{pie:{offsetAngle:-45,ringWidth:40*u.pixelRatio,labelWidth:15}},background:"#FFFFFF",pixelRatio:u.pixelRatio,series:t.series,animation:!0,width:u.cWidth*u.pixelRatio,height:u.cHeight*u.pixelRatio,disablePieStroke:!0,dataLabel:!0})},touchRing:function(e){s.showToolTip(e,{format:function(e){return e.name+":"+e.data}})}}};t.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},"92d8":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},a93d:function(e,t,n){"use strict";var o=n("ecdf"),i=n.n(o);i.a},c09e:function(e,t,n){"use strict";n.r(t);var o=n("92d8"),i=n("6eb5");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("a93d");var r=n("2877"),c=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},ecdf:function(e,t,n){}},[["55a1","common/runtime","common/vendor"]]]);
});
require('pages/chart/chart.js');
__wxRoute = 'pages/today/today';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/today/today.js';

define('pages/today/today.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/today/today"],{"1d58":function(t,e,n){},"5e6f":function(t,e,n){"use strict";n.r(e);var i=n("e87d"),o=n("79e2");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("a29c");var u=n("2877"),c=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"79e2":function(t,e,n){"use strict";n.r(e);var i=n("8a18"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"8a18":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/uni-section/uni-section").then(n.bind(null,"a400"))},o=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"601a"))},a=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"ad25"))},u=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"70b3"))},c={data:function(){return{title:"SQLite",extraIcon1:{color:"#4cd964",size:"22",type:"compose"},extraIcon2:{color:"#4cd964",size:"22",type:"spinner-cycle"},extraIcon3:{color:"#4cd964",size:"22",type:"navigate"},moneyList:[],sumTitle:0}},components:{uniList:a,uniListItem:u,uniIcons:o,uniSection:i},onLoad:function(){this.openDB(),this.initData()},methods:{openDB:function(){plus.sqlite.openDatabase({name:"tally",path:"_doc/tally.db",success:function(t){plus.nativeUI.alert("打开数据库test.db成功 ")},fail:function(t){}})},getTodayTime:function(t){var e=new Date,n=e.getFullYear(),i=e.getMonth()+1,o=e.getDate(),a=e.getHours()<10?"0"+e.getHours():e.getHours(),u=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),c=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();i>=1&&i<=9&&(i="0"+i),o>=0&&o<=9&&(o="0"+o);var s="";return 1==t?s=n+"-"+i+"-"+o+" "+a+":"+u+":"+c:2==t?s=n+"-"+i+"-"+o:3==t?s=n+"-"+i+"-"+o+" 00:00:00":4==t&&(s=n+"-"+i+"-"+o+" 23:59:59"),s},initData:function(){var t=this,e=0,n=t.getTodayTime(3),i=t.getTodayTime(4);plus.sqlite.selectSql({name:"tally",sql:'SELECT a.id AS id,a.time AS time,a.money AS money,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id WHERE a.time >= "'+n+'" AND a.time < "'+i+'" ORDER BY a.time DESC ',success:function(n){for(var i in n){var o=n[i];t.moneyList.push({id:o.id,time:o.time,money:"-"+o.money,typeName:o.typeName}),e+=o.money}t.sumTitle=e},fail:function(t){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(t))}})}}};e.default=c},a29c:function(t,e,n){"use strict";var i=n("1d58"),o=n.n(i);o.a},b365:function(t,e,n){"use strict";(function(t){n("eb38"),n("921b");i(n("66fd"));var e=i(n("5e6f"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e87d:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})}},[["b365","common/runtime","common/vendor"]]]);
});
require('pages/today/today.js');
__wxRoute = 'pages/node/node';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/node/node.js';

define('pages/node/node.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/node/node"],{"1d9e":function(t,n,e){"use strict";var i=e("c84b"),u=e.n(i);u.a},"38da":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})},"44f9":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-grid/uni-grid").then(e.bind(null,"91bc"))},u=function(){return e.e("components/uni-grid-item/uni-grid-item").then(e.bind(null,"5154"))},c=function(){return e.e("components/uni-badge/uni-badge").then(e.bind(null,"0d37"))},r=function(){return e.e("components/cg-swiper/cg-swiper").then(e.bind(null,"ccc3"))},s=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"601a"))},a={data:function(){return{dynamicList:[],swiperList:[],type:2,money:"",list:[{url:"/static/c1.png",text:"Grid 1",badge:"0",type:"primary"},{url:"/static/c2.png",text:"Grid 2",badge:"1",type:"success"},{url:"/static/c3.png",text:"Grid 3",badge:"99",type:"warning"},{url:"/static/c4.png",text:"Grid 4",badge:"2",type:"error"},{url:"/static/c5.png",text:"Grid 5"},{url:"/static/c6.png",text:"Grid 6"},{url:"/static/c7.png",text:"Grid 7"},{url:"/static/c8.png",text:"Grid 8"},{url:"/static/c9.png",text:"Grid 9"}]}},onLoad:function(){var t=this;t.openDB(),plus.sqlite.selectSql({name:"tally",sql:"select * from types",success:function(n){for(var e in n){var i=n[e];t.swiperList.push({id:i.id,icon:i.icon,text:i.name,color:"#bbbbbb"})}},fail:function(t){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(t))}})},methods:{saveTally:function(n){var e=this,i=e.getTime(),u=e.money;plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO tally VALUES (null, "'+i+'", '+e.type+", "+u+", null, 1);",success:function(n){t.navigateBack({delta:1})},fail:function(t){plus.nativeUI.alert("打开数据库test.db失败: "+JSON.stringify(t))}})},getTime:function(){var t=new Date,n=t.getFullYear(),e=t.getMonth()+1,i=t.getDate(),u=t.getHours()<10?"0"+t.getHours():t.getHours(),c=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),r=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();e>=1&&e<=9&&(e="0"+e),i>=0&&i<=9&&(i="0"+i);var s=n+"-"+e+"-"+i+" "+u+":"+c+":"+r;return s},clickItem:function(t){var n=this;n.type=t.id,t.color="#444444"},openDB:function(){plus.sqlite.openDatabase({name:"tally",path:"_doc/tally.db",success:function(t){},fail:function(t){}})},selectSQL:function(){plus.sqlite.selectSql({name:"tally",sql:"select * from types",success:function(t){},fail:function(t){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(t))}})}},components:{uniGrid:i,uniGridItem:u,uniBadge:c,cgSwiper:r,uniIcons:s}};n.default=a}).call(this,e("6e42")["default"])},"68a7":function(t,n,e){"use strict";(function(t){e("eb38"),e("921b");i(e("66fd"));var n=i(e("9280"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},9280:function(t,n,e){"use strict";e.r(n);var i=e("38da"),u=e("d84e");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("1d9e");var r=e("2877"),s=Object(r["a"])(u["default"],i["a"],i["b"],!1,null,null,null);n["default"]=s.exports},c84b:function(t,n,e){},d84e:function(t,n,e){"use strict";e.r(n);var i=e("44f9"),u=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);n["default"]=u.a}},[["68a7","common/runtime","common/vendor"]]]);
});
require('pages/node/node.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

