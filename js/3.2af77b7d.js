(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"07a4":function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return c}));var s=a("ded3"),r=a.n(s),n=a("2b0e");const l=n["a"].observable({searchQuery:"",searchResults:[],selectedStores:[],spinner:!1,stores:[]}),c={setStores(e){l.stores=e},toggleSpinner(e){l.spinner=e},updateQuery(e){l.searchQuery=e},updateResults(e){l.searchResults=e.map((e=>r()(r()({},e),{},{store:l.stores.data.find((t=>t.storeID===e.storeID))})))}}},"713b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh lpR fFf"}},[a("q-header",{staticClass:"bg-dark text-white",attrs:{bordered:""}},[a("q-toolbar",{staticClass:"q-px-sm q-py-xs"},[a("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"fal fa-sliders-h"},on:{click:function(t){e.drawer=!e.drawer}}}),a("q-toolbar-title",[a("q-avatar",{staticClass:"q-ml-none",attrs:{icon:"fad fa-gamepad-alt",size:"xl"}})],1),a("SearchInput",{staticClass:"lt-sm",attrs:{dense:!0,filled:!0}})],1)],1),a("q-drawer",{attrs:{side:"left","show-if-above":"",width:250,bordered:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("SearchInput",{staticClass:"gt-sm",attrs:{filled:!0}}),a("q-list",[a("q-item-label",{staticClass:"row items-center text-body1 q-pb-sm",attrs:{header:""}},[a("q-icon",{staticClass:"q-mr-sm",attrs:{name:"fal fa-cog"}}),a("span",[e._v("Search Settings")])],1),a("StoreSelector",{attrs:{dense:!0}}),a("q-separator"),a("PriceSelector"),a("q-separator")],1),a("q-item",{staticClass:"absolute-bottom"},[a("q-item-section",{staticClass:"text-center no-margin"},[a("q-btn",{staticClass:"bg-primary q-ma-sm",attrs:{disable:""}},[e._v(" Apply Filter ")]),a("span",{staticClass:"text-weight-light text-italic"},[e._v("\n          ( Filtering is currently disabled )\n        ")])],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{staticClass:"column q-mb-sm"},[a("span",{staticClass:"text-body2 q-mb-sm"},[e._v(" Prices ")]),a("q-checkbox",{staticClass:"q-mb-sm",attrs:{label:"$10 or less",dense:""},model:{value:e.tenOrLess,callback:function(t){e.tenOrLess=t},expression:"tenOrLess"}}),a("q-checkbox",{staticClass:"q-mb-sm",attrs:{label:"$5 or less",dense:""},model:{value:e.fiveOrLess,callback:function(t){e.fiveOrLess=t},expression:"fiveOrLess"}}),a("q-checkbox",{staticClass:"q-mb-sm",attrs:{label:"Free",dense:""},model:{value:e.free,callback:function(t){e.free=t},expression:"free"}}),a("div",{staticClass:"flex row items-center space-between"},[a("q-checkbox",{staticClass:"q-mb-xs q-mr-sm",attrs:{dense:""},model:{value:e.customPriceRange,callback:function(t){e.customPriceRange=t},expression:"customPriceRange"}}),a("q-input",{staticStyle:{width:"75px"},attrs:{placeholder:"Min",outlined:"",dense:""}}),a("span",[e._v(" — ")]),a("q-input",{staticStyle:{width:"75px"},attrs:{placeholder:"Max",outlined:"",dense:""}})],1)],1)},l=[],c={name:"PriceSelector",data:()=>({customPriceRange:!1,fiveOrLess:!1,free:!1,tenOrLess:!1})},o=c,i=a("2877"),d=a("66e5"),u=a("8f8e"),p=a("27f9"),m=a("eebe"),h=a.n(m),b=Object(i["a"])(o,n,l,!1,null,null,null),f=b.exports;h()(b,"components",{QItem:d["a"],QCheckbox:u["a"],QInput:p["a"]});var S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-input",{attrs:{type:"search",debounce:"300",placeholder:"Search Games...",borderless:"",dense:e.dense,filled:e.filled},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.search?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.search=""}}}):e._e(),""===e.search?a("q-icon",{attrs:{name:"search"}}):e._e()]},proxy:!0}]),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})},q=[],g=a("d2ca"),x=a("07a4"),v={name:"SearchInput",props:{dense:Boolean,filled:Boolean},computed:{spinner(){return x["b"].spinner}},data:()=>({emptyResults:[],search:""}),methods:{toggleSpinnger:x["a"].toggleSpinner,updateQuery:x["a"].updateQuery,updateResults:x["a"].updateResults},watch:{async search(){x["a"].updateQuery(this.search),x["a"].toggleSpinner(!0),this.search.length>2&&(x["a"].updateResults(await g["a"].findDeals(this.search)),x["a"].toggleSpinner(!1)),this.search.length<2&&(x["a"].updateResults(this.emptyResults),x["a"].toggleSpinner(!1))}}},w=v,y=a("0016"),Q=Object(i["a"])(w,S,q,!1,null,null,null),C=Q.exports;h()(Q,"components",{QInput:p["a"],QIcon:y["a"]});var k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-expansion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[a("q-item-section",{staticClass:"q-pa-xs text-body2"},[e._v("\n      Stores "+e._s(e.storeSelection)+"\n    ")])]},proxy:!0}]),model:{value:e.storePanel,callback:function(t){e.storePanel=t},expression:"storePanel"}},[a("q-separator"),a("q-scroll-area",{staticClass:"q-ml-md",staticStyle:{height:"calc(100vh - 425px)"}},e._l(e.allStores,(function(t){return a("q-checkbox",{key:t.storeID,staticClass:"q-mb-sm full-width",attrs:{val:t.storeID,label:t.storeName,dense:""},model:{value:e.selectedStores,callback:function(t){e.selectedStores=t},expression:"selectedStores"}})})),1)],1)},I=[],_={name:"StoreSelector",computed:{storeSelection(){return`( ${this.selectedStores.length}/${this.allStores.length} Selected )`}},mounted:async function(){const e=await g["a"].getStores();this.allStores=e.data.map((e=>e)),this.selectedStores=this.allStores.map((e=>e.storeID))},data:()=>({allStores:[],selectedStores:[],storePanel:!0,stores:[]}),watch:{selectedStores(){}}},R=_,P=a("3b73"),L=a("4074"),O=a("eb85"),D=a("4983"),$=Object(i["a"])(R,k,I,!1,null,null,null),j=$.exports;h()($,"components",{QExpansionItem:P["a"],QItemSection:L["a"],QSeparator:O["a"],QScrollArea:D["a"],QCheckbox:u["a"]});var E={components:{PriceSelector:f,SearchInput:C,StoreSelector:j},data:()=>({drawer:!1})},A=E,F=a("4d5a"),T=a("e359"),B=a("65c6"),z=a("9c40"),H=a("6ac5"),J=a("cb32"),M=a("9404"),G=a("1c1c"),N=a("0170"),U=a("09e3"),K=Object(i["a"])(A,s,r,!1,null,null,null);t["default"]=K.exports;h()(K,"components",{QLayout:F["a"],QHeader:T["a"],QToolbar:B["a"],QBtn:z["a"],QToolbarTitle:H["a"],QAvatar:J["a"],QDrawer:M["a"],QList:G["a"],QItemLabel:N["a"],QIcon:y["a"],QSeparator:O["a"],QItem:d["a"],QItemSection:L["a"],QPageContainer:U["a"]})},d2ca:function(e,t,a){"use strict";var s=a("ded3"),r=a.n(s),n=a("bc3a"),l=a.n(n);const c=l.a.create({baseURL:"https://www.cheapshark.com/api/1.0/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});t["a"]={async findDeals(e){const t=await c.get(`deals?title=${e}`);return t.data},async getDeals(){const e=await c.get("stores"),t=await c.get("deals?pageSize=10"),a=t.data.map((t=>r()(r()({},t),{},{store:e.data.find((e=>e.storeID===t.storeID))})));return a},getStores(){return c.get("stores")}}}}]);