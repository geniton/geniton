import{a as c}from"./chunk-3M3ELC2B.js";import{a as u}from"./chunk-SOXN4HDT.js";import"./chunk-74TMIHW5.js";import"./chunk-GUI3OGMB.js";import{a as r}from"./chunk-L6N6NYYY.js";import"./chunk-CPJJWSXC.js";import{a as o}from"./chunk-VHIWQVIH.js";import{a as n}from"./chunk-TRLJ3REA.js";import"./chunk-ASNOHHIB.js";import"./chunk-MMHF6C7D.js";import"./chunk-WVTRNJZX.js";import"./chunk-6AQZFSUS.js";import{f as t}from"./chunk-CYAHTR6D.js";import"./chunk-CRNLDV6W.js";import"./chunk-2EUX5SQC.js";function p(){let{displaySearchbar:e}=r();return t(n,{class:"btn-square btn-ghost","aria-label":"search icon button",onClick:()=>{e.value=!e.peek()},children:t(o,{id:"MagnifyingGlass",width:20,height:20,strokeWidth:.1})})}function g(){let{displayMenu:e}=r();return t(n,{class:"btn-square btn-ghost","aria-label":"open menu",onClick:()=>{e.value=!0},children:t(o,{id:"Bars3",width:20,height:20,strokeWidth:.01})})}function b(){let{displayCart:e}=r(),{loading:d,cart:a,mapItemsToAnalyticsItems:m}=u(),i=a.value?.items.length||null,v=a.value?.storePreferencesData.currencyCode,l=a.value?.totalizers.find(s=>s.id==="Items"),h=a.value?.totalizers.find(s=>s.id==="Discounts"),f=()=>{e.value=!0,c({name:"view_cart",params:{currency:a.value?v:"",value:l?.value?(l?.value-(h?.value??0))/100:0,items:a.value?m(a.value):[]}})};return t(n,{class:"btn-square btn-ghost relative","aria-label":"open cart","data-deco":e.value&&"open-cart",loading:d.value,onClick:f,children:t("div",{class:"indicator",children:[i&&t("span",{class:"indicator-item badge badge-secondary badge-sm",children:i>9?"9+":i}),t(o,{id:"ShoppingCart",width:20,height:20,strokeWidth:2})]})})}function y({variant:e}){return e==="cart"?t(b,{}):e==="search"?t(p,{}):e==="menu"?t(g,{}):null}var C=y;export{C as default};
