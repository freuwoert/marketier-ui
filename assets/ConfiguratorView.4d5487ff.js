import{_ as v,o as u,c as m,a as t,b as s,d as f,e as p,n as T,w as b,v as _,f as S,g as U,p as g,h as V,i as x,r as h,j as k,F as C}from"./index.8feb1477.js";const P={data(){return{type:"input",inputType:"text",noBorder:!1,border:!1,clearable:!1,label:"",placeholder:"",iconLeft:"",iconRight:"",prefix:"",suffix:"",helper:"",errorText:"",disabled:!1,required:!1,min:"",max:"",pattern:"",resize:"none",hideObfuscationToggle:!1,showPasswordScore:!1,hideMax:!1,previewFixed:!1,initialPreviewPosition:0}},mounted(){this.initialPreviewPosition=this.$refs.preview.getBoundingClientRect().top+window.scrollY,window.addEventListener("resize",this.calculateScroll),window.addEventListener("scroll",this.calculateScroll),this.calculateScroll()},computed:{displayPasswordSpecificOptions(){return this.inputType==="password"},displayTextareaSpecificOptions(){return this.inputType==="textarea"},min__(){return this.min||this.min===0?this.min:null},max__(){return this.max||this.max===0?this.max:null},pattern__(){return this.pattern?this.pattern:null},inputCode(){let i=`<mui-input type="${this.inputType}"`;return this.label&&(i+=` label="${this.label}"`),this.placeholder&&(i+=` placeholder="${this.placeholder}"`),this.iconLeft&&(i+=` icon-left="${this.iconLeft}"`),this.iconRight&&(i+=` icon-right="${this.iconRight}"`),this.prefix&&(i+=` prefix="${this.prefix}"`),this.suffix&&(i+=` suffix="${this.suffix}"`),this.noBorder&&(i+=" no-border"),this.disabled&&(i+=" disabled"),this.clearable&&(i+=" clearable"),this.required&&(i+=" required"),this.min__&&(i+=` :min="${this.min__}"`),this.max__&&(i+=` :max="${this.max__}"`),this.max__&&this.hideMax&&(i+=" hide-max"),this.pattern__&&(i+=` pattern="${this.pattern__}"`),this.inputType==="textarea"&&this.resize!=="none"&&(i+=` resize="${this.resize}"`),this.errorText&&(i+=` error-text="${this.errorText}"`),this.inputType==="password"&&this.hideObfuscationToggle&&(i+=" hide-obfuscation-toggle"),this.inputType==="password"&&this.showPasswordScore&&(i+=" show-password-score"),i+="/>",i}},methods:{variantByActiveState(i){return this.type===i?"filled":"text"},setType(i){this.type=i},calculateScroll(){var i,o;this.previewFixed=this.initialPreviewPosition<window.scrollY+(((o=(i=document==null?void 0:document.getElementById("header"))==null?void 0:i.getBoundingClientRect())==null?void 0:o.height)||0)},generateCode(){let i="";switch(this.type){case"input":i=this.inputCode;break}console.log(i)}}},n=i=>(g("data-v-f0e7e8ba"),i=i(),V(),i),z={class:"configurator-wrapper"},B={class:"header"},L=n(()=>t("div",{class:"spacer"},null,-1)),M=n(()=>t("div",{class:"info"},[t("span",null,"Preview")],-1)),R={class:"options"},I=n(()=>t("legend",null,"General settings",-1)),q=k('<option value="text" data-v-f0e7e8ba>text</option><option value="password" data-v-f0e7e8ba>password</option><option value="email" data-v-f0e7e8ba>email</option><option value="number" data-v-f0e7e8ba>number</option><option value="tel" data-v-f0e7e8ba>tel</option><option value="url" data-v-f0e7e8ba>url</option><option value="search" data-v-f0e7e8ba>search</option><option value="textarea" data-v-f0e7e8ba>textarea</option>',8),O=[q],E={class:"row"},F=n(()=>t("legend",null,"Labels & text",-1)),N={class:"row"},G=n(()=>t("legend",null,"Icons",-1)),H=n(()=>t("small",null,[t("b",null,'This site uses Googles "Material Symbols Rounded" icon font.'),t("br"),x(" You can use any icon font in your project as long as you set the "),t("code",null,"--mui-icon-font"),x(" css-variable to the desired font family. ")],-1)),Y={class:"row"},j=n(()=>t("legend",null,"Validation",-1)),A={class:"row"},D={key:0},J=n(()=>t("legend",null,"Password options",-1)),K=n(()=>t("b",null,"Show password score",-1)),Q=n(()=>t("br",null,null,-1)),W=x(" Requires dropbox/zxcvbn "),X={key:1},Z=n(()=>t("legend",null,"Textarea options",-1)),$=n(()=>t("option",{value:"none"},"none",-1)),ee=n(()=>t("option",{value:"vertical"},"vertical",-1)),oe=n(()=>t("option",{value:"horizontal"},"horizontal",-1)),le=n(()=>t("option",{value:"both"},"both",-1)),ie=[$,ee,oe,le],te={class:"bottom-bar"};function se(i,o,w,ce,e,a){const c=h("mui-button"),r=h("mui-input"),d=h("mui-toggle"),y=h("mui-loader");return u(),m("div",z,[t("div",B,[s(c,{size:"small",variant:a.variantByActiveState("input"),onClick:o[0]||(o[0]=l=>a.setType("input")),label:"input"},null,8,["variant"]),L,s(c,{class:"top-generate-code-button",size:"small",variant:"text",label:"Generate code","icon-right":"download",onClick:o[1]||(o[1]=l=>a.generateCode())})]),t("div",{class:T(["preview",{fixed:e.previewFixed}]),ref:"preview"},[e.type==="input"?(u(),f(r,{key:0,type:e.inputType,label:e.label,placeholder:e.placeholder,"icon-left":e.iconLeft,"icon-right":e.iconRight,helper:e.helper,errorText:e.errorText,"hide-obfuscation-toggle":e.hideObfuscationToggle,"show-password-score":e.showPasswordScore,resize:e.resize,"no-border":e.noBorder,clearable:e.clearable,prefix:e.prefix,suffix:e.suffix,disabled:e.disabled,required:e.required,min:a.min__,max:a.max__,pattern:a.pattern__,hideMax:e.hideMax},null,8,["type","label","placeholder","icon-left","icon-right","helper","errorText","hide-obfuscation-toggle","show-password-score","resize","no-border","clearable","prefix","suffix","disabled","required","min","max","pattern","hideMax"])):p("",!0),e.type==="button"?(u(),f(c,{key:1,label:e.label},null,8,["label"])):p("",!0),e.type==="toggle"?(u(),f(d,{key:2})):p("",!0),e.type==="loader"?(u(),f(y,{key:3})):p("",!0),M],2),t("div",R,[t("fieldset",null,[I,b(t("select",{class:"dropdown","onUpdate:modelValue":o[2]||(o[2]=l=>e.inputType=l)},O,512),[[_,e.inputType]]),t("div",E,[s(d,{class:"checkbox flex-1",modelValue:e.disabled,"onUpdate:modelValue":o[3]||(o[3]=l=>e.disabled=l),"no-border":"","append-label":"Disabled"},null,8,["modelValue"]),s(d,{class:"checkbox flex-1",modelValue:e.clearable,"onUpdate:modelValue":o[4]||(o[4]=l=>e.clearable=l),"no-border":"","append-label":"Clearable"},null,8,["modelValue"]),s(d,{class:"checkbox flex-1",modelValue:e.noBorder,"onUpdate:modelValue":o[5]||(o[5]=l=>e.noBorder=l),"no-border":"","append-label":"Hide border"},null,8,["modelValue"])])]),t("fieldset",null,[F,s(r,{"no-border":"",label:"Label",modelValue:e.label,"onUpdate:modelValue":o[6]||(o[6]=l=>e.label=l)},null,8,["modelValue"]),t("div",N,[s(r,{"no-border":"",label:"Prefix",modelValue:e.prefix,"onUpdate:modelValue":o[7]||(o[7]=l=>e.prefix=l),class:"affix"},null,8,["modelValue"]),s(r,{"no-border":"",label:"Placeholder",modelValue:e.placeholder,"onUpdate:modelValue":o[8]||(o[8]=l=>e.placeholder=l),class:"placeholder"},null,8,["modelValue"]),s(r,{"no-border":"",label:"Suffix",modelValue:e.suffix,"onUpdate:modelValue":o[9]||(o[9]=l=>e.suffix=l),class:"affix"},null,8,["modelValue"])]),s(r,{"no-border":"",label:"Helper text",modelValue:e.helper,"onUpdate:modelValue":o[10]||(o[10]=l=>e.helper=l)},null,8,["modelValue"])]),t("fieldset",null,[G,H,t("div",Y,[s(r,{class:"flex-1","no-border":"",label:"Left Icon",modelValue:e.iconLeft,"onUpdate:modelValue":o[11]||(o[11]=l=>e.iconLeft=l)},null,8,["modelValue"]),s(r,{class:"flex-1","no-border":"",label:"Right Icon",modelValue:e.iconRight,"onUpdate:modelValue":o[12]||(o[12]=l=>e.iconRight=l)},null,8,["modelValue"])])]),t("fieldset",null,[j,s(d,{class:"checkbox",modelValue:e.required,"onUpdate:modelValue":o[13]||(o[13]=l=>e.required=l),"no-border":"","append-label":"Required"},null,8,["modelValue"]),t("div",A,[s(r,{class:"flex-1","no-border":"",type:"number",label:"Min",modelValue:e.min,"onUpdate:modelValue":o[14]||(o[14]=l=>e.min=l)},null,8,["modelValue"]),s(r,{class:"flex-1","no-border":"",type:"number",label:"Max",modelValue:e.max,"onUpdate:modelValue":o[15]||(o[15]=l=>e.max=l)},null,8,["modelValue"])]),s(r,{"no-border":"",label:"Pattern",modelValue:e.pattern,"onUpdate:modelValue":o[16]||(o[16]=l=>e.pattern=l)},null,8,["modelValue"]),s(r,{"no-border":"",label:"Error Text",modelValue:e.errorText,"onUpdate:modelValue":o[17]||(o[17]=l=>e.errorText=l)},null,8,["modelValue"]),b(s(d,{class:"checkbox",modelValue:e.hideMax,"onUpdate:modelValue":o[18]||(o[18]=l=>e.hideMax=l),"no-border":"","append-label":"Hide character counter"},null,8,["modelValue"]),[[S,!!a.max__]])]),a.displayPasswordSpecificOptions?(u(),m("fieldset",D,[J,s(d,{class:"checkbox",modelValue:e.hideObfuscationToggle,"onUpdate:modelValue":o[19]||(o[19]=l=>e.hideObfuscationToggle=l),"no-border":"","append-label":"Hide obfuscation toggle"},null,8,["modelValue"]),s(d,{class:"checkbox",modelValue:e.showPasswordScore,"onUpdate:modelValue":o[20]||(o[20]=l=>e.showPasswordScore=l),"no-border":""},{appendLabel:U(()=>[K,Q,W]),_:1},8,["modelValue"])])):p("",!0),a.displayTextareaSpecificOptions?(u(),m("fieldset",X,[Z,b(t("select",{class:"dropdown","onUpdate:modelValue":o[21]||(o[21]=l=>e.resize=l)},ie,512),[[_,e.resize]])])):p("",!0),t("div",te,[s(c,{label:"Generate code","icon-right":"download",onClick:o[22]||(o[22]=l=>a.generateCode())})])])])}var ne=v(P,[["render",se],["__scopeId","data-v-f0e7e8ba"]]);const re=i=>(g("data-v-37056076"),i=i(),V(),i),ae=re(()=>t("section",{id:"hero"},[t("div",{class:"limiter"},[t("h1",null,"MUI Configurator")])],-1)),de={id:"configurator"},ue={class:"limiter"},pe={setup(i){return(o,w)=>(u(),m(C,null,[ae,t("main",null,[t("section",de,[t("div",ue,[s(ne)])])])],64))}};var he=v(pe,[["__scopeId","data-v-37056076"]]);export{he as default};