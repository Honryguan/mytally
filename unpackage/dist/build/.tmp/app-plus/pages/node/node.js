(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/node/node"],{"1d9e":function(t,n,e){"use strict";var i=e("c84b"),u=e.n(i);u.a},"38da":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})},"44f9":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-grid/uni-grid").then(e.bind(null,"91bc"))},u=function(){return e.e("components/uni-grid-item/uni-grid-item").then(e.bind(null,"5154"))},c=function(){return e.e("components/uni-badge/uni-badge").then(e.bind(null,"0d37"))},r=function(){return e.e("components/cg-swiper/cg-swiper").then(e.bind(null,"ccc3"))},s=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"601a"))},a={data:function(){return{dynamicList:[],swiperList:[],type:2,money:"",list:[{url:"/static/c1.png",text:"Grid 1",badge:"0",type:"primary"},{url:"/static/c2.png",text:"Grid 2",badge:"1",type:"success"},{url:"/static/c3.png",text:"Grid 3",badge:"99",type:"warning"},{url:"/static/c4.png",text:"Grid 4",badge:"2",type:"error"},{url:"/static/c5.png",text:"Grid 5"},{url:"/static/c6.png",text:"Grid 6"},{url:"/static/c7.png",text:"Grid 7"},{url:"/static/c8.png",text:"Grid 8"},{url:"/static/c9.png",text:"Grid 9"}]}},onLoad:function(){var t=this;t.openDB(),plus.sqlite.selectSql({name:"tally",sql:"select * from types",success:function(n){for(var e in n){var i=n[e];t.swiperList.push({id:i.id,icon:i.icon,text:i.name,color:"#bbbbbb"})}},fail:function(t){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(t))}})},methods:{saveTally:function(n){var e=this,i=e.getTime(),u=e.money;plus.sqlite.executeSql({name:"tally",sql:'INSERT INTO tally VALUES (null, "'+i+'", '+e.type+", "+u+", null, 1);",success:function(n){t.navigateBack({delta:1})},fail:function(t){plus.nativeUI.alert("打开数据库test.db失败: "+JSON.stringify(t))}})},getTime:function(){var t=new Date,n=t.getFullYear(),e=t.getMonth()+1,i=t.getDate(),u=t.getHours()<10?"0"+t.getHours():t.getHours(),c=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),r=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();e>=1&&e<=9&&(e="0"+e),i>=0&&i<=9&&(i="0"+i);var s=n+"-"+e+"-"+i+" "+u+":"+c+":"+r;return s},clickItem:function(t){var n=this;n.type=t.id,t.color="#444444"},openDB:function(){plus.sqlite.openDatabase({name:"tally",path:"_doc/tally.db",success:function(t){},fail:function(t){}})},selectSQL:function(){plus.sqlite.selectSql({name:"tally",sql:"select * from types",success:function(t){},fail:function(t){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(t))}})}},components:{uniGrid:i,uniGridItem:u,uniBadge:c,cgSwiper:r,uniIcons:s}};n.default=a}).call(this,e("6e42")["default"])},"68a7":function(t,n,e){"use strict";(function(t){e("eb38"),e("921b");i(e("66fd"));var n=i(e("9280"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},9280:function(t,n,e){"use strict";e.r(n);var i=e("38da"),u=e("d84e");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("1d9e");var r=e("2877"),s=Object(r["a"])(u["default"],i["a"],i["b"],!1,null,null,null);n["default"]=s.exports},c84b:function(t,n,e){},d84e:function(t,n,e){"use strict";e.r(n);var i=e("44f9"),u=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);n["default"]=u.a}},[["68a7","common/runtime","common/vendor"]]]);