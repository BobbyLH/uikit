(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ab1d9c2"],{"1e4b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.groups,(function(e){return n("f-panel",{key:e.label,staticClass:"py-2 mb-4",attrs:{padding:0}},[n("div",{staticClass:"f-caption f-greyscale-3 mx-4"},[t._v(t._s(e.label))]),n("f-list",[t._l(t.filterComponents(e.coms),(function(e,a){return[n("f-list-item",{key:a,attrs:{title:e.displayName},on:{click:function(n){return t.handleViewComponent(e)}}})]}))],2)],1)})),t.otherComponents.length?n("f-panel",{staticClass:"py-2 mb-4",attrs:{padding:0}},[n("div",{staticClass:"f-caption f-greyscale-3 mx-4"},[t._v("Others")]),n("v-list",[t._l(t.otherComponents,(function(e,a){return[n("v-list-item",{key:a,on:{click:function(n){return t.handleViewComponent(e)}}},[n("v-list-item-title",[t._v(" "+t._s(e.displayName)+" ")]),n("v-list-item-action",[n("v-icon",[t._v(" "+t._s(t.mdiChevronRight)+" ")])],1)],1)]}))],2)],1):t._e()],2)},o=[],i=(n("2d6d"),n("8d0d"),n("cfce"),n("ef1f"),n("2aa5"),n("c78b"),n("32f5"),n("918c"),n("f5f2")),r=n("30c6"),s=n("f0ad"),c=n("02a5"),l=n("0f9e"),u=n("fc36"),p=n("4d84"),f=n.n(p),m=n("4b47"),d=n.n(m),b=n("a46b"),v=n("536d"),h=n("ffe0"),g=h.keys().map((function(t){var e=f()(d()(t.replace(/\.\//,"").replace(/\.\w+$/,""))),n=t.replace(/^[.]+\//,"").replace(/.vue$/,"");return{componentName:e,displayName:n}})),y=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.mdiChevronRight=b["e"],t.componentsList=g,t.groups=[{label:"Layout & Container",coms:["panel","appbar","actionbar","bottomnav","slidertabs","floataction","list"]},{label:"Form",coms:["assetamountinput","assetselect","button","buttonswitch","phoneinput"]},{label:"Presentation",coms:["bottomsheet","payingmodal","tips","toast","buttonswitch","loading","qrcode","formtips","mixinassetlogo"]},{label:"Styles",coms:["color","typography"]},{label:"Overrided",coms:["chip"]}],t}return Object(r["a"])(n,[{key:"filterComponents",value:function(t){return g.filter((function(e){return t.includes(e.displayName.toLowerCase())}))}},{key:"handleViewComponent",value:function(t){this.$router.push({name:"page-component",params:{component:t.componentName}})}},{key:"appbar",get:function(){return{title:"Components",back:!1}}},{key:"otherComponents",get:function(){var t=this;return g.filter((function(e){for(var n=0;n<t.groups.length;n++)if(t.groups[n].coms.includes(e.displayName.toLowerCase()))return!1;return!0}))}}]),n}(Object(u["b"])(v["a"]));y=Object(l["a"])([u["a"]],y);var C=y,w=C,k=n("2be6"),_=n("16aa"),j=n.n(_),O=n("213b"),V=n("a5fe"),L=n("ecef"),N=n("2099"),$=n("d963"),x=Object(k["a"])(w,a,o,!1,null,null,null);e["default"]=x.exports;j()(x,{VIcon:O["a"],VList:V["a"],VListItem:L["a"],VListItemAction:N["a"],VListItemTitle:$["b"]})},"536d":function(t,e,n){"use strict";n("8d0d"),n("c78b");var a=n("0b38"),o=n("9869"),i=n("9ce4");function r(){var t=navigator.language;return t.includes("zh")?"zh":t.includes("ja")?"ja":"en"}e["a"]=o["a"].extend({name:"PageView",data:function(){return{}},computed:{appbar:function(){return{title:"",back:!0,show:!0}}},methods:Object(a["a"])({},Object(i["d"])({setAppBar:"app/SET_APP_BAR"})),beforeRouteEnter:function(t,e,n){n((function(t){t.setAppBar(t.appbar);var e=r();t.$vuetify.lang.current=e,t.$i18n.locale=e}))}})}}]);
//# sourceMappingURL=chunk-4ab1d9c2.5054238b.js.map