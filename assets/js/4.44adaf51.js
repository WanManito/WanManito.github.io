(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{291:function(t,e,o){},294:function(t,e,o){"use strict";var i=o(291);o.n(i).a},296:function(t,e,o){"use strict";o.r(e);var i={name:"cat",data:function(){return{isLoaded:!0,model:{blackCat:"https://wanmanito.github.io/live2DModels/live2d-widget-model-hijiki/assets/hijiki.model.json",whiteCat:"https://wanmanito.github.io/live2DModels/live2d-widget-model-tororo/assets/tororo.model.json"}}},mounted:function(){var t=this,e=document.querySelector("body"),o=document.createElement("script");o.src="https://wanmanito.github.io/live2DModels/L2Dwidget.min.js",e.appendChild(o),o.onload=function(){t.isLoaded=!1,L2Dwidget.init({model:{jsonPath:Math.random()>.5?t.model.blackCat:t.model.whiteCat},display:{superSample:2,width:120,height:150,position:"right",hOffset:0,vOffset:-20},mobile:{show:!0,scale:.5,motion:!0},react:{opacityDefault:.9,opacityOnHover:.2}}),console.clear(),console.log("找猫? 在这里 https://github.com/xiazeyu/live2d-widget.js"),console.log("感谢作者 ~")}}},s=(o(294),o(1)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoaded,expression:"isLoaded"}],staticClass:"cat-container"},[this._v("一只猫正在赶来 ~")])},[],!1,null,"028c3d37",null);a.options.__file="cat.vue";e.default=a.exports}}]);