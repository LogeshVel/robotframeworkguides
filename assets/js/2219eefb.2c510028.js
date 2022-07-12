"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[734],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2670:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l="Dealing with flaky tests",u={unversionedId:"flaky_tests",id:"flaky_tests",title:"Dealing with flaky tests",description:"Re-Run Failed Tests and merge results",source:"@site/docs/flaky_tests.md",sourceDirName:".",slug:"/flaky_tests",permalink:"/robotframeworkguides/flaky_tests",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/flaky_tests.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to contribute",permalink:"/robotframeworkguides/contribute"},next:{title:"Parsing Results",permalink:"/robotframeworkguides/parsing_results"}},c={},f=[{value:"Re-Run Failed Tests and merge results",id:"re-run-failed-tests-and-merge-results",level:2},{value:"Try and Except",id:"try-and-except",level:2},{value:"Wait Until Keyword Succeeds",id:"wait-until-keyword-succeeds",level:2}],p={toc:f};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dealing-with-flaky-tests"},"Dealing with flaky tests"),(0,a.kt)("h2",{id:"re-run-failed-tests-and-merge-results"},"Re-Run Failed Tests and merge results"),(0,a.kt)("p",null,"It is possible to run the same test suite(s) multiple times - but only re-run the failed tests. Afterwards the results can be merged into a single results file using ",(0,a.kt)("inlineCode",{parentName:"p"},"rebot"),".\nYou can find the required steps in the ",(0,a.kt)("a",{parentName:"p",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#merging-outputs"},"Robot Framework User Guide")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"robot --output original.xml tests                          # first execute all tests\nrobot --rerunfailed original.xml --output rerun.xml tests  # then re-execute failing\nrebot --merge original.xml rerun.xml                       # finally merge results\n")),(0,a.kt)("h2",{id:"try-and-except"},"Try and Except"),(0,a.kt)("h2",{id:"wait-until-keyword-succeeds"},"Wait Until Keyword Succeeds"))}d.isMDXComponent=!0}}]);