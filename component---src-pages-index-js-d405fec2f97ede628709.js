"use strict";(self.webpackChunkaccelerator_hub=self.webpackChunkaccelerator_hub||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),i=new RegExp(l.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,s=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,i=s,s=!0,o++):s&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=s,s=!1,l=!0):(l=r(c)===c&&n(c)!==c,i=s,s=n(c)===c&&r(c)!==c)}return e})(e,l,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return _},L:function(){return p},M:function(){return w},P:function(){return E},_:function(){return i},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),l=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,l,i,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=i(e,m);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=i(e,f);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},x=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=i(e,h);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:`${t}-${l}-${a}`,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},x.displayName="Picture",x.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=i(e,v);return t?r.createElement(x,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(b=x.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const w=function(e){return r.createElement(r.Fragment,null,r.createElement(x,s({},e)),r.createElement("noscript",null,r.createElement(x,s({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=x.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],C=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},N={image:l().object.isRequired,alt:S},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],T=new Set;let $,R;const O=function(e){let{as:t="div",image:n,style:l,backgroundColor:d,className:u,class:m,onStartLoad:g,onLoad:p,onError:f}=e,h=i(e,j);const{width:y,height:x,layout:b}=n,v=c(y,x,b),{style:E,className:w}=v,k=i(v,I),L=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(b,y,x);return(0,r.useEffect)((()=>{$||($=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(C);if(R&&T.has(C))return;let t,r;return $.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;L.current&&(L.current.innerHTML=a(s({isLoading:!0,isLoaded:T.has(C),image:n},h)),T.has(C)||(t=requestAnimationFrame((()=>{L.current&&(r=i(L.current,C,T,l,g,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{T.has(C)&&R&&(L.current.innerHTML=R(s({isLoading:T.has(C),isLoaded:T.has(C),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},k,{style:s({},E,l,{backgroundColor:d}),className:`${w}${u?` ${u}`:""}`,ref:L,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));_.propTypes=N,_.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=i(t,q);return l&&console.warn(l),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const P=A((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:m="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:x}=e,b=i(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=s({objectFit:y,objectPosition:x,backgroundColor:h},f);const{width:v,height:S,layout:N,images:j,placeholder:I,backgroundColor:T}=o,$=c(v,S,N),{style:R,className:O}=$,_=i($,L),q={fallback:void 0,sources:[]};return j.fallback&&(q.fallback=s({},j.fallback,{srcSet:j.fallback.srcSet?C(j.fallback.srcSet):void 0})),j.sources&&(q.sources=j.sources.map((e=>s({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,s({},_,{style:s({},R,l,{backgroundColor:h}),className:`${O}${a?` ${a}`:""}`}),r.createElement(p,{layout:N,width:v,height:S},r.createElement(E,s({},u(I,!1,N,v,S,T,y,x))),r.createElement(w,s({"data-gatsby-image-ssr":"",className:g},b,d("eager"===m,!1,q,m,f)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},M=new Set(["fixed","fullWidth","constrained"]),W={src:l().string.isRequired,alt:S,width:z,height:z,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};P.displayName="StaticImage",P.propTypes=W;const F=A(_);F.displayName="StaticImage",F.propTypes=W},2618:function(e,t){t.Z=void 0;var a=function(e,t){void 0===t&&(t="start");var a=document.querySelector(e);return!!a&&(a.scrollIntoView({behavior:"smooth",block:t}),!0)};t.Z=a},6235:function(e,t,a){a.r(t),a.d(t,{Head:function(){return p},default:function(){return g}});var r=a(7294),n=a(4160),l=a.p+"static/EXL_logo-7899e4512dc04c535f40d3f654e62a90.png",s=a(2618);var i=()=>r.createElement("header",{class:"absolute inset-x-0 top-0 z-50"},r.createElement("nav",{class:"flex items-center justify-between p-6 lg:px-8","aria-label":"Global"},r.createElement("div",{class:"flex lg:flex-1"},r.createElement("a",{href:"#",class:"-m-1.5 p-1.5"},r.createElement("span",{class:"sr-only"},"EXL"),r.createElement("img",{class:"h-6 w-auto",src:l,alt:"Exl logo"}))),r.createElement("div",{class:"flex lg:hidden"},r.createElement("button",{type:"button",class:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"},r.createElement("span",{class:"sr-only"},"Open main menu"),r.createElement("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},r.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})))),r.createElement("div",{class:"hidden lg:flex lg:gap-x-12"},r.createElement("a",{href:"#features",onClick:()=>(0,s.Z)("features"),class:"text-sm font-semibold leading-6 text-gray-900"},"Features"),r.createElement("a",{href:"#products",onClick:()=>(0,s.Z)("products"),class:"text-sm font-semibold leading-6 text-gray-900"},"Products"),r.createElement("a",{href:"#team",class:"text-sm font-semibold leading-6 text-gray-900"},"Team"),r.createElement("a",{href:"#about",class:"text-sm font-semibold leading-6 text-gray-900"},"About")),r.createElement("div",{class:"hidden lg:flex lg:flex-1 lg:justify-end"})));var o=()=>{const e=(0,n.K2)("1819329077").markdownRemark.frontmatter;return r.createElement("div",{class:"bg-white"},r.createElement("div",{class:"relative isolate px-6 pt-14 lg:px-8"},r.createElement("div",{class:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-44"},r.createElement("div",{class:"hidden sm:mb-8 sm:flex sm:justify-center"},r.createElement("div",{class:"relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"},e.banner," ",r.createElement("a",{href:"#",class:"font-semibold text-indigo-600"},r.createElement("span",{class:"absolute inset-0","aria-hidden":"true"}),"Read more ",r.createElement("span",{"aria-hidden":"true"},"→")))),r.createElement("div",{class:"text-center"},r.createElement("h1",{class:"text-4xl font-bold tracking-tight text-primary sm:text-6xl"},e.title),r.createElement("p",{class:"mt-6 text-lg leading-8 text-primary-400"},e.subtitle),r.createElement("div",{class:"mt-10 flex items-center justify-center gap-x-6"},r.createElement("a",{href:"#!",class:"animate-pulse text-sm font-semibold leading-6 text-gray-900"},"scroll to learn more ",r.createElement("span",{"aria-hidden":"true"})))))))},c=a(8032);var d=()=>{const e=(0,n.K2)("849548748"),{title:t,sections:a}=e.markdownRemark.frontmatter;return r.createElement("div",{id:"features",class:"relative isolate text-center"},r.createElement("h2",{class:"text-4xl font-bold tracking-tight text-dark mb-4 py-10"},t),r.createElement("div",{class:"flex px-32 py-12 justify-around gap-12"},a.map(((e,t)=>{var a,n;const l=null===(a=e.imgSrc)||void 0===a||null===(n=a.childImageSharp)||void 0===n?void 0:n.gatsbyImageData;return r.createElement("div",{class:"w-4/12 p-2 pb-12 bg-transparent flex flex-col justify-center items-center hover:shadow-md transition ease-in-out hover:translate-y-2"},r.createElement("div",{className:"w-6/12 flex justify-center align-middle items-center p-2"},r.createElement(c.G,{class:"w-12 object-fill ",image:l,alt:"our Strength"})),r.createElement("h5",{class:"text-2xl p-4 font-bold tracking-tight text-primary"},e.title),r.createElement("ul",null,e.items.map((e=>r.createElement("li",null,r.createElement("p",{class:"mt-0 text-lg leading-8 text-secondary-600"},e))))),r.createElement("a",{href:"#",class:"inline-flex items-center px-3 py-2 my-4 text-sm font-medium text-center underline focus:ring-4 focus:outline-none focus:ring-blue-300"},"Read more"))}))))};const u=e=>{var t;let{title:a,text:n,imgSrc:l,reverse:s=!1,tags:i="",link:o}=e;const d=null==l||null===(t=l.childImageSharp)||void 0===t?void 0:t.gatsbyImageData;return r.createElement("div",{className:`p-4 flex gap-8 rounded-3xl ${s?"flex-row-reverse":"flex-row"} mx-8`},r.createElement("div",{className:"w-6/12 flex justify-center align-middle items-center"},r.createElement("div",{style:{height:"18rem",width:"20rem",background:"lightgoldenrodyellow",position:"absolute","clip-path":"polygon(29% 39%, 68% 12%, 99% 27%, 91% 84%, 57% 89%, 15% 89%, 0 69%, 5% 33%)"}}),r.createElement(c.G,{class:"w-96 mix-blend-darken",image:d})),r.createElement("div",{className:"w-6/12 flex flex-col items-start"},i?r.createElement("p",{class:"text-xs mb-2 bg-slate-400 px-1.5 py-0.5 tracking-tight rounded text-white"},i):null,r.createElement("h3",{className:"text-4xl leading-tight font-bold mb-8 text-primary"},a),r.createElement("p",{className:"text-xl text-left mb-12"},n),r.createElement("div",{class:"flex flex-row gap-2"},r.createElement("button",{className:"bg-secondary text-white px-4 py-2 rounded max-w-fit hover:bg-dark hover:text-white transition-colors"},"Learn more"),o&&r.createElement("button",{className:"text-dark px-4 py-2 rounded max-w-fit hover:bg-dark hover:text-white transition-colors",target:"_blank",onClick:()=>window.open(o)},"Try it out"))))};var m=()=>{const e=(0,n.K2)("1996576319"),{title:t,subtitle:a,banner:l,products:s}=e.markdownRemark.frontmatter;return r.createElement("div",{id:"products",class:"min-h-screen relative isolate flex flex-col justify-center text-center p-16 space-x-24"},r.createElement("div",{class:"self-center max-w-7xl space-y-4 rounded-3xl bg-purple-50 py-16 px-8 m-auto bg-background"},r.createElement("div",{class:"py-16"},r.createElement("p",{class:"text-lg leading-8 text-gray-600 mb-1"},l),r.createElement("h2",{class:"text-4xl font-bold tracking-tight text-dark mb-4"},t),r.createElement("p",{class:"text-lg leading-8 text-gray-600"},a)),r.createElement("div",{class:"py-16 flex flex-col justify-center items-center gap-52"},s.map(((e,t)=>r.createElement(u,{key:t,reverse:t%2,title:e.product,text:e.summary,imgSrc:(null==e?void 0:e.imgSrc)||"",tags:null==e?void 0:e.tags,link:null==e?void 0:e.link}))))))};var g=()=>{(0,n.K2)("1819329077");return r.createElement("div",{class:"bg-white"},r.createElement(i,null),r.createElement(o,null),r.createElement(d,null),r.createElement(m,null))};const p=()=>r.createElement("title",null,"Accelerator Hub")}}]);
//# sourceMappingURL=component---src-pages-index-js-d405fec2f97ede628709.js.map