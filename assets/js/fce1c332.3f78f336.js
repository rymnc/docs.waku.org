"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=n(87462),i=(n(67294),n(3905));const r={title:"Content Topics"},a=void 0,c={unversionedId:"overview/concepts/content-topics",id:"overview/concepts/content-topics",title:"Content Topics",description:"Content Topics are metadata strings set by developers on outgoing messages to facilitate protocol-level features like selectively processing incoming messages (Relay or Filter) and retrieving historical messages (Store) that meet specific filtering criteria. Please refer to the WAKU2-TOPICS specification to learn more.",source:"@site/docs/overview/concepts/content-topics.md",sourceDirName:"overview/concepts",slug:"/overview/concepts/content-topics",permalink:"/overview/concepts/content-topics",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/overview/concepts/content-topics.md",tags:[],version:"current",lastUpdatedAt:1687905501,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{title:"Content Topics"},sidebar:"main",previous:{title:"Protocols",permalink:"/overview/concepts/protocols"},next:{title:"Network Domains",permalink:"/overview/concepts/network-domains"}},p={},s=[{value:"Naming Format",id:"naming-format",level:2},{value:"Naming Considerations",id:"naming-considerations",level:2}],l={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Content Topics")," are metadata strings set by developers on outgoing messages to facilitate protocol-level features like selectively processing incoming messages (",(0,i.kt)("a",{parentName:"p",href:"/overview/concepts/protocols#relay"},"Relay")," or ",(0,i.kt)("a",{parentName:"p",href:"/overview/concepts/protocols#filter"},"Filter"),") and retrieving historical messages (",(0,i.kt)("a",{parentName:"p",href:"/overview/concepts/protocols#store"},"Store"),") that meet specific filtering criteria. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/23/#content-topics"},"WAKU2-TOPICS")," specification to learn more."),(0,i.kt)("h2",{id:"naming-format"},"Naming Format"),(0,i.kt)("p",null,"Here is the recommended format for content topics:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/{application-name}/{version}/{content-topic-name}/{encoding}")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"application-name"),": This is the unique name of your decentralized application (dApp) to prevent conflicts with other dApps."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),": Typically starting at ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", this field helps track breaking changes in your messages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content-topic-name"),": The specific name of the content topic used for filtering."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encoding"),": The message serialization/encoding format, with ",(0,i.kt)("a",{parentName:"li",href:"https://protobuf.dev/"},"Protocol Buffers")," (",(0,i.kt)("inlineCode",{parentName:"li"},"proto"),") being the recommended choice.")),(0,i.kt)("p",null,"For instance, if your dApp is called ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperCrypto")," and it allows users to receive notifications and send private messages, you can consider using the following content topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/supercrypto/1/notification/proto")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/supercrypto/1/private-message/proto"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"While you can choose any encoding format for your ",(0,i.kt)("inlineCode",{parentName:"p"},"Content Topic"),", we highly recommend using Protocol Buffers (",(0,i.kt)("inlineCode",{parentName:"p"},"proto"),") because of its efficiency. Choosing a lightweight format ensures optimal performance of your dApp.")),(0,i.kt)("h2",{id:"naming-considerations"},"Naming Considerations"),(0,i.kt)("p",null,"When choosing a content topic, it is crucial to consider privacy implications. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Store"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Light Push")," protocols disclose content topics to peers, enabling said peer to link ip and content topic interests. ",(0,i.kt)("inlineCode",{parentName:"p"},"Relay")," provides recipient anonymity thanks to ",(0,i.kt)("inlineCode",{parentName:"p"},"GossipSub"),", but this may be lost if the content topic reveals information about the user."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Waku is developing privacy-preserving features like ",(0,i.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/12/#future-work"},"Anonymous Filter Subscription")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," protocol and ",(0,i.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/13/#future-work"},"Anonymous Query")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," protocol to hide content topics from potential adversaries.")),(0,i.kt)("p",null,"You can preserve the anonymity of individual identities by increasing ",(0,i.kt)("a",{parentName:"p",href:"https://www.privitar.com/blog/k-anonymity-an-introduction/"},"k-anonymity"),", where k is proportional to the network size (number of subscribers). This involves using a single content topic across the entire application or specific features such as notifications or private messages, allowing multiple users to share it."),(0,i.kt)("p",null,"However, maintaining functionality with a single content topic can introduce complexity. We recommend switching functionality using the Protocol Buffer message format. By doing so, applications can retain a high granularity and functionality while using a single content topic, preserving user privacy."))}u.isMDXComponent=!0}}]);