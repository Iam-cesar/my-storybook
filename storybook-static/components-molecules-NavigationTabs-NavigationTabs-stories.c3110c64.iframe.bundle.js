"use strict";(self.webpackChunkstorybook_components=self.webpackChunkstorybook_components||[]).push([[538],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectDestructuringEmpty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/molecules/NavigationTabs/NavigationTabs.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NavigationTabs:()=>molecules_NavigationTabs,default:()=>NavigationTabs_stories});var objectDestructuringEmpty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js");const hooks_useNavigationTabs=function useNavigationTabs(){var _useState=(0,react.useState)({start:0,width:0}),activeTab=_useState[0],setActiveTab=_useState[1];return(0,react.useEffect)((function(){var firstBtn=document.querySelectorAll("#nav-btn").item(0);setActiveTab((function(){return{start:null==firstBtn?void 0:firstBtn.offsetLeft,width:null==firstBtn?void 0:firstBtn.offsetWidth}}))}),[]),{activeTab,setClientTab:function setClientTab(e){var el=e.target;setActiveTab((function(){return{start:null==el?void 0:el.offsetLeft,width:null==el?void 0:el.offsetWidth}}))}}};var _templateObject,objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),MarkerContainer=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  background-color: navajowhite;\n  bottom: 0;\n  height: 3px;\n  left: ","px;\n  position: absolute;\n  transition: 250ms ease-in-out;\n  width: ","px;\n"])),(function(_ref){return _ref.activetab.start}),(function(_ref2){return _ref2.activetab.width})),_excluded=["activeTab"],__jsx=react.createElement,Marker=function Marker(_ref){var activeTab=_ref.activeTab,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(MarkerContainer,(0,esm_extends.Z)({activetab:activeTab},props))};Marker.displayName="Marker",Marker.__docgenInfo={description:"",methods:[],displayName:"Marker",props:{activeTab:{required:!0,tsType:{name:"signature",type:"object",raw:"{ start: number; width: number }",signature:{properties:[{key:"start",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}}]}},description:""}}};const atoms_Marker=Marker;try{Marker.displayName="Marker",Marker.__docgenInfo={description:"",displayName:"Marker",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!0,type:{name:"{ start: number; width: number; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Marker/index.tsx#Marker"]={docgenInfo:Marker.__docgenInfo,name:"Marker",path:"src/components/atoms/Marker/index.tsx#Marker"})}catch(__react_docgen_typescript_loader_error){}var styles_templateObject,_templateObject2,NavigationTabsContainer=styled_components_browser_esm.zo.div(styles_templateObject||(styles_templateObject=(0,taggedTemplateLiteral.Z)(['\n  display: flex;\n  position: relative;\n  font-family: "Inter";\n\n  :hover {\n    cursor: pointer;\n  }\n']))),NavigationButton=styled_components_browser_esm.zo.button(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  color: rgba(242, 242, 242, 0.8);\n  font-family: Inter;\n  font-size: 1rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%; /* 24px */\n\n  background-color: transparent;\n  border: none;\n  border-radius: 4px;\n  padding: 0.65rem 1rem;\n"]))),NavigationTabs_jsx=react.createElement,NavigationTabs=function NavigationTabs(_ref){var props=(0,esm_extends.Z)({},((0,objectDestructuringEmpty.Z)(_ref),_ref)),_useNavigationTabs=hooks_useNavigationTabs(),activeTab=_useNavigationTabs.activeTab,setClientTab=_useNavigationTabs.setClientTab;return NavigationTabs_jsx(NavigationTabsContainer,props,NavigationTabs_jsx(NavigationButton,{id:"nav-btn",onClick:setClientTab},"Conteúdos"),NavigationTabs_jsx(NavigationButton,{id:"nav-btn",onClick:setClientTab},"Conversas"),NavigationTabs_jsx(NavigationButton,{id:"nav-btn",onClick:setClientTab},"Quizz"),NavigationTabs_jsx(NavigationButton,{id:"nav-btn",onClick:setClientTab},"Materiais"),NavigationTabs_jsx(NavigationButton,{id:"nav-btn",onClick:setClientTab},"Sobre"),NavigationTabs_jsx(NavigationButton,{id:"nav-btn",onClick:setClientTab},"Mais..."),NavigationTabs_jsx(atoms_Marker,{activeTab}))};NavigationTabs.displayName="NavigationTabs",NavigationTabs.__docgenInfo={description:"",methods:[],displayName:"NavigationTabs"};const molecules_NavigationTabs=NavigationTabs;try{NavigationTabs.displayName="NavigationTabs",NavigationTabs.__docgenInfo={description:"",displayName:"NavigationTabs",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/NavigationTabs/index.tsx#NavigationTabs"]={docgenInfo:NavigationTabs.__docgenInfo,name:"NavigationTabs",path:"src/components/molecules/NavigationTabs/index.tsx#NavigationTabs"})}catch(__react_docgen_typescript_loader_error){}const NavigationTabs_stories={title:"components/navigation/NavigationTabs",component:molecules_NavigationTabs}}}]);