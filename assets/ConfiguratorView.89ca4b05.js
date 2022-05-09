import{_ as V,o as a,c as v,b as n,d as t,e as m,f as b,w as p,v as h,g as f,h as U,p as g,i as y,j as _,r as c,a as S}from"./index.1030cc28.js";const k={data(){return{type:"input",inputType:"text",noBorder:!1,border:!1,clearable:!1,label:"",placeholder:"",iconLeft:"",iconRight:"",prefix:"",suffix:"",helper:"",errorText:"",disabled:!1,required:!1,min:"",max:"",pattern:"",resize:"none",hideObfuscationToggle:!1,showPasswordScore:!1,hideMax:!1}},computed:{displayPasswordSpecificOptions(){return this.inputType==="password"},displayTextareaSpecificOptions(){return this.inputType==="textarea"},min__(){return this.min||this.min===0?this.min:null},max__(){return this.max||this.max===0?this.max:null},pattern__(){return this.pattern?this.pattern:null}},methods:{variantByActiveState(s){return this.type===s?"filled":"text"},setType(s){this.type=s}}},r=s=>(g("data-v-26debe44"),s=s(),y(),s),M={class:"configurator-wrapper"},z={class:"header"},B=r(()=>n("div",{class:"spacer"},null,-1)),C={class:"preview"},I={class:"options"},P=r(()=>n("legend",null,"General settings",-1)),q=S('<option value="text" data-v-26debe44>text</option><option value="password" data-v-26debe44>password</option><option value="email" data-v-26debe44>email</option><option value="number" data-v-26debe44>number</option><option value="tel" data-v-26debe44>tel</option><option value="url" data-v-26debe44>url</option><option value="search" data-v-26debe44>search</option><option value="textarea" data-v-26debe44>textarea</option>',8),L=[q],O={class:"row"},R=r(()=>n("legend",null,"Labels & text",-1)),N={class:"row"},H=r(()=>n("legend",null,"Icons",-1)),j=r(()=>n("small",null,[n("b",null,'This site uses Googles "Material Symbols Rounded" icon font.'),n("br"),_(" You can use any icon font in your project as long as you set the"),n("br"),n("code",null,"--mui-icon-font"),_(" css-variable to the desired font family. ")],-1)),A={class:"row"},D=r(()=>n("legend",null,"Validation",-1)),E={class:"row"},G=r(()=>n("legend",null,"Password options",-1)),Y=r(()=>n("b",null,"Show password score",-1)),F=r(()=>n("br",null,null,-1)),J=_(" Requires dropbox/zxcvbn "),K=r(()=>n("legend",null,"Textarea options",-1)),Q=r(()=>n("option",{value:"none"},"none",-1)),W=r(()=>n("option",{value:"vertical"},"vertical",-1)),X=r(()=>n("option",{value:"horizontal"},"horizontal",-1)),Z=r(()=>n("option",{value:"both"},"both",-1)),$=[Q,W,X,Z];function ee(s,l,w,ie,e,d){const x=c("mui-button"),i=c("mui-input"),u=c("mui-toggle"),T=c("mui-loader");return a(),v("div",M,[n("div",z,[t(x,{size:"small",variant:d.variantByActiveState("input"),onClick:l[0]||(l[0]=o=>d.setType("input")),label:"input"},null,8,["variant"]),B]),n("div",C,[e.type==="input"?(a(),m(i,{key:0,type:e.inputType,label:e.label,placeholder:e.placeholder,"icon-left":e.iconLeft,"icon-right":e.iconRight,helper:e.helper,errorText:e.errorText,"hide-obfuscation-toggle":e.hideObfuscationToggle,"show-password-score":e.showPasswordScore,resize:e.resize,"no-border":e.noBorder,clearable:e.clearable,prefix:e.prefix,suffix:e.suffix,disabled:e.disabled,required:e.required,min:d.min__,max:d.max__,pattern:d.pattern__,hideMax:e.hideMax},null,8,["type","label","placeholder","icon-left","icon-right","helper","errorText","hide-obfuscation-toggle","show-password-score","resize","no-border","clearable","prefix","suffix","disabled","required","min","max","pattern","hideMax"])):b("",!0),e.type==="button"?(a(),m(x,{key:1,label:e.label},null,8,["label"])):b("",!0),e.type==="toggle"?(a(),m(u,{key:2})):b("",!0),e.type==="loader"?(a(),m(T,{key:3})):b("",!0)]),n("div",I,[n("fieldset",null,[P,p(n("select",{class:"dropdown","onUpdate:modelValue":l[1]||(l[1]=o=>e.inputType=o)},L,512),[[h,e.inputType]]),n("div",O,[t(u,{class:"checkbox flex-1",modelValue:e.disabled,"onUpdate:modelValue":l[2]||(l[2]=o=>e.disabled=o),"no-border":"","append-label":"Disabled"},null,8,["modelValue"]),t(u,{class:"checkbox flex-1",modelValue:e.clearable,"onUpdate:modelValue":l[3]||(l[3]=o=>e.clearable=o),"no-border":"","append-label":"Clearable"},null,8,["modelValue"]),t(u,{class:"checkbox flex-1",modelValue:e.noBorder,"onUpdate:modelValue":l[4]||(l[4]=o=>e.noBorder=o),"no-border":"","append-label":"Hide border"},null,8,["modelValue"])])]),n("fieldset",null,[R,t(i,{"no-border":"",label:"Label",modelValue:e.label,"onUpdate:modelValue":l[5]||(l[5]=o=>e.label=o)},null,8,["modelValue"]),n("div",N,[t(i,{"no-border":"",label:"Prefix",modelValue:e.prefix,"onUpdate:modelValue":l[6]||(l[6]=o=>e.prefix=o),class:"affix"},null,8,["modelValue"]),t(i,{"no-border":"",label:"Placeholder",modelValue:e.placeholder,"onUpdate:modelValue":l[7]||(l[7]=o=>e.placeholder=o),class:"placeholder"},null,8,["modelValue"]),t(i,{"no-border":"",label:"Suffix",modelValue:e.suffix,"onUpdate:modelValue":l[8]||(l[8]=o=>e.suffix=o),class:"affix"},null,8,["modelValue"])]),t(i,{"no-border":"",label:"Helper text",modelValue:e.helper,"onUpdate:modelValue":l[9]||(l[9]=o=>e.helper=o)},null,8,["modelValue"])]),n("fieldset",null,[H,j,n("div",A,[t(i,{"no-border":"",label:"Left Icon",modelValue:e.iconLeft,"onUpdate:modelValue":l[10]||(l[10]=o=>e.iconLeft=o)},null,8,["modelValue"]),t(i,{"no-border":"",label:"Right Icon",modelValue:e.iconRight,"onUpdate:modelValue":l[11]||(l[11]=o=>e.iconRight=o)},null,8,["modelValue"])])]),n("fieldset",null,[D,t(u,{class:"checkbox",modelValue:e.required,"onUpdate:modelValue":l[12]||(l[12]=o=>e.required=o),"no-border":"","append-label":"Required"},null,8,["modelValue"]),n("div",E,[t(i,{"no-border":"",type:"number",label:"Min",modelValue:e.min,"onUpdate:modelValue":l[13]||(l[13]=o=>e.min=o)},null,8,["modelValue"]),t(i,{"no-border":"",type:"number",label:"Max",modelValue:e.max,"onUpdate:modelValue":l[14]||(l[14]=o=>e.max=o)},null,8,["modelValue"])]),t(i,{"no-border":"",label:"Pattern",modelValue:e.pattern,"onUpdate:modelValue":l[15]||(l[15]=o=>e.pattern=o)},null,8,["modelValue"]),t(i,{"no-border":"",label:"Error Text",modelValue:e.errorText,"onUpdate:modelValue":l[16]||(l[16]=o=>e.errorText=o)},null,8,["modelValue"]),p(t(u,{class:"checkbox",modelValue:e.hideMax,"onUpdate:modelValue":l[17]||(l[17]=o=>e.hideMax=o),"no-border":"","append-label":"Hide character counter"},null,8,["modelValue"]),[[f,!!d.max__]])]),p(n("fieldset",null,[G,t(u,{class:"checkbox",modelValue:e.hideObfuscationToggle,"onUpdate:modelValue":l[18]||(l[18]=o=>e.hideObfuscationToggle=o),"no-border":"","append-label":"Hide obfuscation toggle"},null,8,["modelValue"]),t(u,{class:"checkbox",modelValue:e.showPasswordScore,"onUpdate:modelValue":l[19]||(l[19]=o=>e.showPasswordScore=o),"no-border":""},{appendLabel:U(()=>[Y,F,J]),_:1},8,["modelValue"])],512),[[f,d.displayPasswordSpecificOptions]]),p(n("fieldset",null,[K,p(n("select",{class:"dropdown","onUpdate:modelValue":l[20]||(l[20]=o=>e.resize=o)},$,512),[[h,e.resize]])],512),[[f,d.displayTextareaSpecificOptions]])])])}var le=V(k,[["render",ee],["__scopeId","data-v-26debe44"]]);const oe=s=>(g("data-v-792f5bf2"),s=s(),y(),s),ne=oe(()=>n("section",{id:"hero"},[n("div",{class:"limiter"},[n("h1",null,"MUI Configurator")])],-1)),te={id:"configurator"},re={class:"limiter"},se={setup(s){return(l,w)=>(a(),v("main",null,[ne,n("section",te,[n("div",re,[t(le)])])]))}};var ue=V(se,[["__scopeId","data-v-792f5bf2"]]);export{ue as default};