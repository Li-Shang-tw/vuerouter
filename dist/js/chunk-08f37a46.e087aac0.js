(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08f37a46"],{"1dde":function(t,e,c){var n=c("d039"),a=c("b622"),o=c("2d00"),r=a("species");t.exports=function(t){return o>=51||!n((function(){var e=[],c=e.constructor={};return c[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,c){var n=c("861d"),a=c("e8b5"),o=c("b622"),r=o("species");t.exports=function(t,e){var c;return a(t)&&(c=t.constructor,"function"!=typeof c||c!==Array&&!a(c.prototype)?n(c)&&(c=c[r],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===e?0:e)}},8418:function(t,e,c){"use strict";var n=c("c04e"),a=c("9bf2"),o=c("5c6c");t.exports=function(t,e,c){var r=n(e);r in t?a.f(t,r,o(0,c)):t[r]=c}},"99af":function(t,e,c){"use strict";var n=c("23e7"),a=c("d039"),o=c("e8b5"),r=c("861d"),s=c("7b0b"),l=c("50c4"),i=c("8418"),d=c("65f0"),u=c("1dde"),b=c("b622"),f=c("2d00"),p=b("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",v=f>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),h=u("concat"),m=function(t){if(!r(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},g=!v||!h;n({target:"Array",proto:!0,forced:g},{concat:function(t){var e,c,n,a,o,r=s(this),u=d(r,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?r:arguments[e],m(o)){if(a=l(o.length),b+a>j)throw TypeError(O);for(c=0;c<a;c++,b++)c in o&&i(u,b,o[c])}else{if(b>=j)throw TypeError(O);i(u,b++,o)}return u.length=b,u}})},e6dc:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a=Object(n["f"])("h1",null,"商品列",-1),o={class:"container"},r={class:"mt-4"},s={class:"table align-middle"},l=Object(n["f"])("thead",null,[Object(n["f"])("tr",null,[Object(n["f"])("th",null,"圖片"),Object(n["f"])("th",null,"商品名稱"),Object(n["f"])("th",null,"價格"),Object(n["f"])("th")])],-1),i={style:{width:"200px"}},d={class:"h5"},u={class:"h6"},b={class:"h5"},f={class:"btn-group btn-group-sm"},p=Object(n["f"])("button",{type:"button",class:"btn btn-outline-secondary"},[Object(n["f"])("i",{class:"fas fa-spinner fa-pulse"}),Object(n["e"])(" 查看更多 ")],-1),j=Object(n["f"])("i",{class:"fas fa-spinner fa-pulse"},null,-1),O=Object(n["e"])(" 加到購物車 "),v=Object(n["f"])("div",{class:"my-5 row justify-content-center"},null,-1);function h(t,e,c,h,m,g){var y=Object(n["t"])("product");return Object(n["o"])(),Object(n["d"])(n["a"],null,[a,Object(n["f"])("div",o,[Object(n["f"])("div",r,[Object(n["f"])(y),Object(n["f"])("table",s,[l,Object(n["f"])("tbody",null,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["s"])(m.products,(function(t){return Object(n["o"])(),Object(n["d"])("tr",{key:t.id},[Object(n["f"])("td",i,[Object(n["f"])("img",{src:t.imageUrl,alt:"",srcset:"",style:{height:"100px","background-size":"cover","background-position":"center"}},null,8,["src"])]),Object(n["f"])("td",null,Object(n["v"])(t.title),1),Object(n["f"])("td",null,[Object(n["f"])("div",d,Object(n["v"])()+" 元",1),Object(n["f"])("del",u,"原價 "+Object(n["v"])(t.origin_price)+" 元",1),Object(n["f"])("div",b,"現在只要 "+Object(n["v"])(t.price)+" 元",1)]),Object(n["f"])("td",null,[Object(n["f"])("div",f,[p,Object(n["f"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return g.addtoCart(t.id,1)}},[j,O],8,["onClick"])])])])})),128))])])]),v])],64)}c("99af");var m={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},g={class:"modal-dialog modal-xl",role:"document"},y={class:"modal-content border-0"},x={class:"modal-header bg-dark text-white"},w={class:"modal-title",id:"exampleModalLabel"},k=Object(n["f"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),A={class:"modal-body"},C={class:"row"},M=Object(n["f"])("div",{class:"col-sm-6"},[Object(n["f"])("img",{class:"img-fluid",alt:""})],-1),E={class:"col-sm-6"},J={class:"badge bg-primary rounded-pill"},L={class:"h5"},P=Object(n["f"])("div",null,[Object(n["f"])("div",{class:"input-group"},[Object(n["f"])("input",{type:"number",class:"form-control",min:"1"}),Object(n["f"])("button",{type:"button",class:"btn btn-primary"},"加入購物車")])],-1);function T(t,e,c,a,o,r){return Object(n["o"])(),Object(n["d"])("div",m,[Object(n["f"])("div",g,[Object(n["f"])("div",y,[Object(n["f"])("div",x,[Object(n["f"])("h5",w,[Object(n["f"])("span",null,Object(n["v"])(),1)]),k]),Object(n["f"])("div",A,[Object(n["f"])("div",C,[M,Object(n["f"])("div",E,[Object(n["f"])("span",J,Object(n["v"])(),1),Object(n["f"])("p",null,"商品描述："+Object(n["v"])(),1),Object(n["f"])("p",null,"商品內容："+Object(n["v"])(),1),Object(n["f"])("div",L,"現在只要 "+Object(n["v"])()+" 元",1),P])])])])])],512)}var $={};$.render=T;var _=$,q={data:function(){return{products:[]}},methods:{getProductsApi:function(){var t=this;console.log("https://vue3-course-api.hexschool.io/");var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("shang","/products");this.$http.get(e).then((function(e){e.data.success?t.products=e.data.products:alert(e.data.message)}))},addtoCart:function(t,e){var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("shang","/cart");this.$http.post(c,{data:{product_id:t,qty:e}}).then((function(t){t.data.success,alert(t.data.message)}))}},mounted:function(){this.getProductsApi()},components:{product:_}};q.render=h;e["default"]=q},e8b5:function(t,e,c){var n=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-08f37a46.e087aac0.js.map