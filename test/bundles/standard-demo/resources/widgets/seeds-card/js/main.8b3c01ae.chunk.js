(window["webpackJsonpseedscard-details-widget"]=window["webpackJsonpseedscard-details-widget"]||[]).push([[0],{52:function(e){e.exports=JSON.parse('{"common":{"couldNotFetchData":"Unfortunately we could not get data for this user","widgetName":"{{widgetNamePlaceholder}}","name":"Name","value":"Value","loading":"Loading...","missingId":"Please provide seedscard ID","notAuthenticated":"Waiting for authorization...","download":"Download file"},"entities":{"seedscard":{"id":"ID","accountNumber":"entities.seedscard.accountNumber","balance":"entities.seedscard.balance","userId":"entities.seedscard.userId"}}}')},55:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAjCAYAAADv0ujUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGxSURBVHgB1di7SsNQHMfx30lT7SAiLoKLEXEoglacHMT6BvoIfQIpgqt2FcShD2LfwNBBcBCKSwUFlbp5oXaIlrQ55l+sIK1JTi4nyRfOcpLAh+SEXBgkd9uq7lvcOgaY3u33S+uL5bbI8QwSa7aqR3yA/Ymj0bWsHRG0NPAIdpggWoGE/sVSDIXJTOYcHosc7Ij9jRfhsUjB3rA2l1sVeCyyNSyCXVkou+43LBJwVFgqdHCUWCpUcNRYKjSwDCzFTi6KBSXHzxiHBp/lZ9agTS1pbvvddZq47zQfIRgH2ozx2sFmvcJOL7cf7AkNPluezg+GW4SlEST7HaSkpAVLMTDN94NDNnaYL3BcWEoYHCeWEgLHjaU8g5OApTyBk4KlXMFJwlKO4KySTRSWcgSrNtgtmVgq0BeHbCzlGxwHlvIFjgtLqU4bP3sGrl7qf+f6Bgx73mt0487l5iFax2zb42NkXnU78K37iiDRjbs6uwHR6AqOA0v5kRJmrmc4aD3LxLPxBNFoSYwrcrBpg2/erxFWqVsSKQQz6EhJHEpNzXyxPXMCuwyWhiRnKfrhlt74BrRpEiKr3wkIAAAAAElFTkSuQmCC"},66:function(e,t,a){e.exports=a(85)},85:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(39),o=a(26),i={en:a(52)};function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var s=Object.keys(i).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,Object(n.a)({},t,{translation:i[t]}))}),{});r.a.use(o.a).init({fallbackLng:"en",resources:s,interpolation:{escapeValue:!1}});var l=a(35),u=a(36),d=a(40),f=a(24),p=a(37),m=a(58),b=a(0),h=a.n(b),g=a(9),v=a.n(g),w=h.a.createContext(null);var y=a(31),O=a(111),k=a(57),E=a(3),S=a.n(E),j=(S.a.shape({initialized:S.a.bool,authenticated:S.a.bool}),function(e){var t=e.children,a=e.keycloak;return a.initialized&&a.authenticated?t:null}),A=function(e){var t=e.children,a=e.keycloak;return a.initialized&&a.authenticated?null:t},C=a(8),N=a(59),P=(S.a.shape({id:S.a.number,accountNumber:S.a.string,balance:S.a.number,userId:S.a.string}),a(55)),D=a.n(P),_=function(e){var t=e.classes,a=e.t,n=e.account,r=e.onDetail,o=e.cardname,i=h.a.createElement("div",{className:t.SeedsCard__header},h.a.createElement("img",{alt:"interest account icon",className:t.SeedsCard__icon,src:D.a}),h.a.createElement("div",{className:t.SeedsCard__title},a("common.widgetName",{widgetNamePlaceholder:o.replace(/^\w/,(function(e){return e.toUpperCase()}))})),h.a.createElement("div",{className:t.SeedsCard__value},"...",n&&n.id&&n.accountNumber.substring(n.accountNumber.length-4,n.accountNumber.length)),h.a.createElement("div",{className:t.SeedsCard__action},h.a.createElement("i",{className:"fas fa-ellipsis-v"})));return h.a.createElement("div",{onClick:n&&n.id?function(){return r({cardname:o,accountID:n.id})}:null},h.a.createElement("div",{className:t.SeedsCard},n&&n.id?h.a.createElement(h.a.Fragment,null,i,h.a.createElement("p",{className:t.SeedsCard__balance},"$",n.balance.toString().replace(/\B(?<!\.\d)(?=(\d{3})+(?!\d))/g,",")),h.a.createElement("p",{className:t.SeedsCard__balanceCaption},"Balance"),n.rewardPoints&&h.a.createElement("p",{className:t.SeedsCard__balanceReward},"Reward Points:"," ",h.a.createElement("span",{className:t.SeedsCard__balanceRewardValue},n.rewardPoints))):h.a.createElement(h.a.Fragment,null,i,h.a.createElement("p",{className:t.SeedsCard__balanceCaption},"You don't have a ",o," account"))))};_.defaultProps={account:null};var x=Object(N.a)(Object(C.a)((function(){return{SeedsCard:{display:"block !important",height:"300px",background:"#ffffff",padding:"10%",boxShadow:"0 0 18px rgba(0, 0, 0, 0.25)",borderRadius:"20px",transition:"0.3s ease","&:hover":{height:"300px",background:"#7ab7740d",boxShadow:"0 0 18px #7ab774",padding:"10%",borderRadius:"20px"}},SeedsCard__icon:{},SeedsCard__header:{display:"flex",alignItems:"baseline",position:"relative","& *":{backgroundColor:"transparent !important"}},SeedsCard__title:{fontWeight:"500",fontSize:"30px",color:"#0e6837",margin:"0 20px",lineHeight:"35px"},SeedsCard__value:{fontSize:"16px",color:"#c7c7c7",lineHeight:"33px"},SeedsCard__action:{position:"absolute",right:"0",top:"19%",color:"#c7c7c7"},SeedsCard__balance:{fontWeight:"500",fontSize:"50px",color:"#000000",margin:"10% 0 0 0"},SeedsCard__balanceCaption:{fontWeight:"500",fontSize:"18px",color:"#c7c7c7"},SeedsCard__balanceReward:{fontWeight:"500",fontSize:"18px",color:"#c7c7c7"},SeedsCard__balanceRewardValue:{fontWeight:"500",fontSize:"18px",color:"#000000"}}}),{withTheme:!0}),Object(o.b)())(_),R=a(110),I=a(109),z=void 0;function B(e){return h.a.createElement(I.a,Object.assign({elevation:6,variant:"filled"},e))}var H={success:3e3,error:null,info:5e3},F=function e(t){var a=t.status,n=t.message,r=t.onClose,o=!!n;console.log(o),console.log(n);var i=a||e.INFO,c=H[i];return h.a.createElement(R.a,{open:o,autoHideDuration:c,onClose:r},h.a.createElement(B,{onClose:r,severity:i},n))};F.SUCCESS="success",F.ERROR="error",F.defaultProps={message:null,status:F.INFO="info",onClose:function(){return z.setState({open:!1})}};var L=Object(C.a)({},{withTheme:!0})(F);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var K=function(){var e=window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:"";return{headers:new Headers({Authorization:"Bearer ".concat(e),"Content-Type":"application/json"})}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,a=e.options;return fetch(t,U({method:"GET"},K(),{},a)).then((function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText||e.status))})).then((function(e){return e.json()}))},M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={loading:!0,account:null,notificationStatus:null,notificationMessage:null},a.theme=Object(k.a)(),a.closeNotification=a.closeNotification.bind(Object(y.a)(a)),a.fetchData=a.fetchData.bind(Object(y.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData({firstCall:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.keycloak,a=t.initialized&&t.authenticated,n=e.keycloak.authenticated!==a;a&&n&&this.fetchData({firstCall:!0})}},{key:"fetchData",value:function(e){var t=this,a=e.firstCall,n=this.props,r=n.onError,o=n.t,i=n.keycloak,c=n.cardname,s=n.onDetail,l=i.initialized&&i.authenticated,u=i.idTokenParsed.preferred_username;l&&(u?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.userID,a=e.options,n=e.cardname,r="".concat("/").concat("/".endsWith("/")?"":"/","banking/api/").concat(n,"s/user/").concat(t);return W({url:r,options:a})}({userID:u,cardname:c}).then((function(e){t.setState({notificationStatus:null,notificationMessage:null,account:e}),"checking"===c&&a&&s({cardname:c,accountID:e.id})})).catch((function(e){r(e)})).finally((function(){return t.setState({loading:!1})})):this.setState({loading:!1,notificationStatus:L.ERROR,notificationMessage:o("common.missingId")}))}},{key:"closeNotification",value:function(){this.setState({notificationStatus:null,notificationMessage:null})}},{key:"render",value:function(){var e=this.state,t=e.account,a=e.notificationStatus,n=e.notificationMessage,r=e.loading,o=this.props,i=o.t,c=o.keycloak,s=o.onDetail,l=o.cardname;return h.a.createElement(O.a,{theme:this.theme},h.a.createElement(A,{keycloak:c},i("common.notAuthenticated")),h.a.createElement(j,{keycloak:c},r&&i("common.loading"),!r&&h.a.createElement(x,{account:t,onDetail:s,cardname:l})),h.a.createElement(L,{status:a,message:n,onClose:this.closeNotification}))}}]),t}(h.a.Component);M.defaultProps={onError:function(){}};var V,X=(V=Object(o.b)()(M),function(e){return h.a.createElement(w.Consumer,null,(function(t){return h.a.createElement(V,Object.assign({},e,{keycloak:t}))}))}),Q=function(e){return function(t){return function(e,t){var a=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(a)}(e,t)}},Y={transactionsDetail:"seedscard.transactionsDetail"};function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var G=function(){return window&&window.entando&&window.entando.keycloak&&J({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},Z={cardname:"cardname"},$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onDetail=Q(Y.transactionsDetail),a.mountPoint=null,a.unsubscribeFromKeycloakEvent=null,a.keycloak=G(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"attributeChangedCallback",value:function(e,t,a){if(!Object.values(Z).includes(e))throw new Error("Untracked changed attribute: ".concat(e));this.mountPoint&&a!==t&&this.render()}},{key:"connectedCallback",value:function(){var e=this;this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint);var t,a,n=this.getAttribute("locale")||"en";r.a.changeLanguage(n),this.keycloak=J({},G(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",a=function(){e.keycloak=J({},G(),{initialized:!0}),e.render()},window.addEventListener(t,a),function(){window.removeEventListener(t,a)}),this.render()}},{key:"render",value:function(){var e=this,t=this.getAttribute(Z.cardname),a=h.a.createElement(X,{cardname:t,onError:function(t){var a=new CustomEvent("".concat("seedscard.details.","error"),{details:{error:t}});e.dispatchEvent(a)},onDetail:this.onDetail});v.a.render(h.a.createElement(w.Provider,{value:this.keycloak},a),this.mountPoint)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}}],[{key:"observedAttributes",get:function(){return Object.values(Z)}}]),t}(Object(m.a)(HTMLElement));customElements.define("seedscard-details",$);var ee=document.getElementById("app");v.a.render(h.a.createElement((function(){return h.a.createElement("div",{className:"App"},h.a.createElement("h1",null,"test"),h.a.createElement(L,{status:"success",message:"test",onClose:function(){}}))}),null),ee)}},[[66,1,2]]]);
//# sourceMappingURL=main.8b3c01ae.chunk.js.map