import{g as v,j as a}from"./bem.util-BelROq__.js";import{r as i}from"./index-RYns6xqu.js";const u=({rows:e,tableHeight:o=200,rowHeight:s=35})=>{const{bem:l}=v("virtual-table"),[d,b]=i.useState(0),x=s*e.length,m=i.useMemo(()=>Object.keys(e[0]),[e]),y=i.useCallback(r=>{b(Math.floor(r.target.scrollTop/s))},[]),M=()=>{const r=Math.min(d+Math.ceil(o*2/s),e.length);return{start:Math.max(d-1,0),end:Math.min(r+1,e.length)}},_=i.useMemo(()=>{const{start:r,end:j}=M(),p=[],N=t=>console.log(t),S=(t,n)=>n!=="action"?e[t][n]:a.jsx("button",{onFocus:()=>N({ak:e[t][n],index:t}),children:e[t][n]});for(let t=r;t<j;t++)p.push(a.jsx("tr",{className:l("row",{odd:!!(t%2)}),style:{top:t*s},children:m.map(n=>a.jsx("td",{children:S(t,n)},n))},t));return p},[e,o,s,d]);return a.jsxs("div",{className:l("wrapper"),style:{"--vt-prop-row-height":`${s}px`,"--vt-prop-table-height":`${o}px`,"--vt-prop-total-height":`${x}px`},children:[a.jsx("table",{className:l("table",{header:!0}),children:a.jsx("thead",{children:a.jsx("tr",{className:l("row"),children:m.map(r=>a.jsx("th",{children:r},r))})})}),a.jsx("table",{className:l("table",{windowed:!0}),onScroll:y,children:a.jsx("tbody",{children:_})})]})};try{u.displayName="VirtualTable",u.__docgenInfo={description:"",displayName:"VirtualTable",props:{rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"Record<string, any>[]"}},tableHeight:{defaultValue:{value:"200"},description:"",name:"tableHeight",required:!1,type:{name:"number"}},rowHeight:{defaultValue:{value:"35"},description:"",name:"rowHeight",required:!1,type:{name:"number"}}}}}catch{}const O={title:"Fluidity/VirtualTable",component:u,parameters:{layout:"centered"},tags:["autodocs"]},V=location.href.endsWith("viewMode=story")?2e4:100,c={args:{rows:new Array(V).fill(!0).map((e,o)=>({id:o,firstName:Math.random().toString(20).substring(8),lastName:Math.random().toString(20).substring(8),age:Math.ceil(Math.random()*80),action:"focus"}))}};var h,g,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    rows: new Array(ROWS_COUNT).fill(true).map((_, id) => ({
      id,
      firstName: Math.random().toString(20).substring(8),
      lastName: Math.random().toString(20).substring(8),
      age: Math.ceil(Math.random() * 80),
      action: 'focus'
    }))
  }
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const w=["Default"];export{c as Default,w as __namedExportsOrder,O as default};
