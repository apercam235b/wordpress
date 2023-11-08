(()=>{"use strict";let e={};function t(t={}){e={animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000",...t}}function o(t){return t?e[t]:e}function n(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t}function i(e){const t='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap((e=>{const o=e.matches(t),n=Array.from(e.querySelectorAll(t));return[...o?[e]:[],...n]})).filter((e=>"none"!==getComputedStyle(e).pointerEvents&&function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}(e)))}function r(e){if(!e||function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(e))return;const t=o("smoothScroll");e.scrollIntoView({behavior:!t||s(e)?"auto":"smooth",inline:"center",block:"center"})}function s(e){if(!e||!e.parentElement)return;const t=e.parentElement;return t.scrollHeight>t.clientHeight}let d={};function a(e,t){d[e]=t}function l(e){return e?d[e]:d}function p(){d={}}let c={};function u(e,t){c[e]=t}function v(e){var t;null==(t=c[e])||t.call(c)}function h(e){if(!e)return;const t=e.getBoundingClientRect(),o={x:t.x,y:t.y,width:t.width,height:t.height};a("__activeStagePosition",o),m(o)}function m(e){const t=l("__overlaySvg");if(!t)return void function(e){const t=function(e){const t=window.innerWidth,n=window.innerHeight,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.classList.add("driver-overlay","driver-overlay-animated"),i.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("xmlSpace","preserve"),i.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),i.setAttribute("version","1.1"),i.setAttribute("preserveAspectRatio","xMinYMin slice"),i.style.fillRule="evenodd",i.style.clipRule="evenodd",i.style.strokeLinejoin="round",i.style.strokeMiterlimit="2",i.style.zIndex="10000",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%";const r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",b(e)),r.style.fill=o("overlayColor")||"rgb(0,0,0)",r.style.opacity=`${o("overlayOpacity")}`,r.style.pointerEvents="auto",r.style.cursor="auto",i.appendChild(r),i}(e);document.body.appendChild(t),C(t,(e=>{"path"===e.target.tagName&&v("overlayClick")})),a("__overlaySvg",t)}(e);const n=t.firstElementChild;if("path"!==(null==n?void 0:n.tagName))throw new Error("no path element found in stage svg");n.setAttribute("d",b(e))}function b(e){const t=window.innerWidth,n=window.innerHeight,i=o("stagePadding")||0,r=o("stageRadius")||0,s=e.width+2*i,d=e.height+2*i,a=Math.min(r,s/2,d/2),l=Math.floor(Math.max(a,0)),p=s-2*l,c=d-2*l;return`M${t},0L0,0L0,${n}L${t},${n}L${t},0Z\n    M${e.x-i+l},${e.y-i} h${p} a${l},${l} 0 0 1 ${l},${l} v${c} a${l},${l} 0 0 1 -${l},${l} h-${p} a${l},${l} 0 0 1 -${l},-${l} v-${c} a${l},${l} 0 0 1 ${l},-${l} z`}function w(e){const{element:t}=e;let i="string"==typeof t?document.querySelector(t):t;i||(i=function(){const e=document.getElementById("driver-dummy-element");if(e)return e;let t=document.createElement("div");return t.id="driver-dummy-element",t.style.width="0",t.style.height="0",t.style.pointerEvents="none",t.style.opacity="0",t.style.position="fixed",t.style.top="50%",t.style.left="50%",document.body.appendChild(t),t}()),function(e,t){const i=Date.now(),s=l("__activeStep"),d=l("__activeElement")||e,p=!d||d===e,c="driver-dummy-element"===e.id,u="driver-dummy-element"===d.id,v=o("animate"),b=t.onHighlightStarted||o("onHighlightStarted"),w=(null==t?void 0:t.onHighlighted)||o("onHighlighted"),g=(null==s?void 0:s.onDeselected)||o("onDeselected"),f=o(),y=l();!p&&g&&g(u?void 0:d,s,{config:f,state:y}),b&&b(c?void 0:e,t,{config:f,state:y});const x=!p&&v;let C=!1;(function(){const e=l("popover");e&&(e.wrapper.style.display="none")})(),a("previousStep",s),a("previousElement",d),a("activeStep",t),a("activeElement",e);const _=()=>{if(l("__transitionCallback")!==_)return;const r=Date.now()-i,p=400-r<=200;t.popover&&p&&!C&&x&&(k(e,t),C=!0),o("animate")&&r<400?function(e,t,o,i){let r=l("__activeStagePosition");const s=r||o.getBoundingClientRect(),d=i.getBoundingClientRect();r={x:n(e,s.x,d.x-s.x,t),y:n(e,s.y,d.y-s.y,t),width:n(e,s.width,d.width-s.width,t),height:n(e,s.height,d.height-s.height,t)},m(r),a("__activeStagePosition",r)}(r,400,d,e):(h(e),w&&w(c?void 0:e,t,{config:o(),state:l()}),a("__transitionCallback",void 0),a("__previousStep",s),a("__previousElement",d),a("__activeStep",t),a("__activeElement",e)),window.requestAnimationFrame(_)};a("__transitionCallback",_),window.requestAnimationFrame(_),r(e),!x&&t.popover&&k(e,t),d.classList.remove("driver-active-element","driver-no-interaction"),d.removeAttribute("aria-haspopup"),d.removeAttribute("aria-expanded"),d.removeAttribute("aria-controls"),o("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}(i,e)}function g(){const e=l("__activeElement"),t=l("__activeStep");e&&(h(e),function(){const e=l("__activeStagePosition"),t=l("__overlaySvg");if(!e)return;if(!t)return void console.warn("No stage svg found.");const o=window.innerWidth,n=window.innerHeight;t.setAttribute("viewBox",`0 0 ${o} ${n}`)}(),P(e,t))}function f(){const e=l("__resizeTimeout");e&&window.cancelAnimationFrame(e),a("__resizeTimeout",window.requestAnimationFrame(g))}function y(e){var t;if(!l("isInitialized")||"Tab"!==e.key&&9!==e.keyCode)return;const o=l("__activeElement"),n=null==(t=l("popover"))?void 0:t.wrapper,r=i([...n?[n]:[],...o?[o]:[]]),s=r[0],d=r[r.length-1];if(e.preventDefault(),e.shiftKey){const e=r[r.indexOf(document.activeElement)-1]||d;null==e||e.focus()}else{const e=r[r.indexOf(document.activeElement)+1]||s;null==e||e.focus()}}function x(e){(o("allowKeyboardControl")??1)&&("Escape"===e.key?v("escapePress"):"ArrowRight"===e.key?v("arrowRightPress"):"ArrowLeft"===e.key&&v("arrowLeftPress"))}function C(e,t,o){const n=(t,n)=>{const i=t.target;e.contains(i)&&((!o||o(i))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()),null==n||n(t))};document.addEventListener("pointerdown",n,!0),document.addEventListener("mousedown",n,!0),document.addEventListener("pointerup",n,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("click",(e=>{n(e,t)}),!0)}function k(e,t){var n,s;let d=l("popover");d&&document.body.removeChild(d.wrapper),d=function(){const e=document.createElement("div");e.classList.add("driver-popover");const t=document.createElement("div");t.classList.add("driver-popover-arrow");const o=document.createElement("header");o.id="driver-popover-title",o.classList.add("driver-popover-title"),o.style.display="none",o.innerText="Popover Title";const n=document.createElement("div");n.id="driver-popover-description",n.classList.add("driver-popover-description"),n.style.display="none",n.innerText="Popover description is here";const i=document.createElement("button");i.type="button",i.classList.add("driver-popover-close-btn"),i.setAttribute("aria-label","Close"),i.innerHTML="&times;";const r=document.createElement("footer");r.classList.add("driver-popover-footer");const s=document.createElement("span");s.classList.add("driver-popover-progress-text"),s.innerText="";const d=document.createElement("span");d.classList.add("driver-popover-navigation-btns");const a=document.createElement("button");a.type="button",a.classList.add("driver-popover-prev-btn"),a.innerHTML="&larr; Previous";const l=document.createElement("button");return l.type="button",l.classList.add("driver-popover-next-btn"),l.innerHTML="Next &rarr;",d.appendChild(a),d.appendChild(l),r.appendChild(s),r.appendChild(d),e.appendChild(i),e.appendChild(t),e.appendChild(o),e.appendChild(n),e.appendChild(r),{wrapper:e,arrow:t,title:o,description:n,footer:r,previousButton:a,nextButton:l,closeButton:i,footerButtons:d,progress:s}}(),document.body.appendChild(d.wrapper);const{title:p,description:c,showButtons:u,disableButtons:h,showProgress:m,nextBtnText:b=o("nextBtnText")||"Next &rarr;",prevBtnText:w=o("prevBtnText")||"&larr; Previous",progressText:g=o("progressText")||"{current} of {total}"}=t.popover||{};d.nextButton.innerHTML=b,d.previousButton.innerHTML=w,d.progress.innerHTML=g,p?(d.title.innerText=p,d.title.style.display="block"):d.title.style.display="none",c?(d.description.innerHTML=c,d.description.style.display="block"):d.description.style.display="none";const f=u||o("showButtons"),y=m||o("showProgress")||!1,x=(null==f?void 0:f.includes("next"))||(null==f?void 0:f.includes("previous"))||y;d.closeButton.style.display=f.includes("close")?"block":"none",x?(d.footer.style.display="flex",d.progress.style.display=y?"block":"none",d.nextButton.style.display=f.includes("next")?"block":"none",d.previousButton.style.display=f.includes("previous")?"block":"none"):d.footer.style.display="none";const k=h||o("disableButtons")||[];null!=k&&k.includes("next")&&(d.nextButton.disabled=!0,d.nextButton.classList.add("driver-popover-btn-disabled")),null!=k&&k.includes("previous")&&(d.previousButton.disabled=!0,d.previousButton.classList.add("driver-popover-btn-disabled")),null!=k&&k.includes("close")&&(d.closeButton.disabled=!0,d.closeButton.classList.add("driver-popover-btn-disabled"));const _=d.wrapper;_.style.display="block",_.style.left="",_.style.top="",_.style.bottom="",_.style.right="",_.id="driver-popover-content",_.setAttribute("role","dialog"),_.setAttribute("aria-labelledby","driver-popover-title"),_.setAttribute("aria-describedby","driver-popover-description"),d.arrow.className="driver-popover-arrow";const L=(null==(n=t.popover)?void 0:n.popoverClass)||o("popoverClass")||"";_.className=`driver-popover ${L}`.trim(),C(d.wrapper,(n=>{var i,r,s;const d=n.target,a=(null==(i=t.popover)?void 0:i.onNextClick)||o("onNextClick"),p=(null==(r=t.popover)?void 0:r.onPrevClick)||o("onPrevClick"),c=(null==(s=t.popover)?void 0:s.onCloseClick)||o("onCloseClick");return d.classList.contains("driver-popover-next-btn")?a?a(e,t,{config:o(),state:l()}):v("nextClick"):d.classList.contains("driver-popover-prev-btn")?p?p(e,t,{config:o(),state:l()}):v("prevClick"):d.classList.contains("driver-popover-close-btn")?c?c(e,t,{config:o(),state:l()}):v("closeClick"):void 0}),(e=>!(null!=d&&d.description.contains(e))&&!(null!=d&&d.title.contains(e))&&e.className.includes("driver-popover"))),a("popover",d);const E=(null==(s=t.popover)?void 0:s.onPopoverRender)||o("onPopoverRender");E&&E(d,{config:o(),state:l()}),P(e,t),r(_);const S=i([_,...e.classList.contains("driver-dummy-element")?[]:[e]]);S.length>0&&S[0].focus()}function _(){const e=l("popover");if(null==e||!e.wrapper)return;const t=e.wrapper.getBoundingClientRect(),n=o("stagePadding")||0,i=o("popoverOffset")||0;return{width:t.width+n+i,height:t.height+n+i,realWidth:t.width,realHeight:t.height}}function L(e,t){const{elementDimensions:o,popoverDimensions:n,popoverPadding:i,popoverArrowDimensions:r}=t;return"start"===e?Math.max(Math.min(o.top-i,window.innerHeight-n.realHeight-r.width),r.width):"end"===e?Math.max(Math.min(o.top-(null==n?void 0:n.realHeight)+o.height+i,window.innerHeight-(null==n?void 0:n.realHeight)-r.width),r.width):"center"===e?Math.max(Math.min(o.top+o.height/2-(null==n?void 0:n.realHeight)/2,window.innerHeight-(null==n?void 0:n.realHeight)-r.width),r.width):0}function E(e,t){const{elementDimensions:o,popoverDimensions:n,popoverPadding:i,popoverArrowDimensions:r}=t;return"start"===e?Math.max(Math.min(o.left-i,window.innerWidth-n.realWidth-r.width),r.width):"end"===e?Math.max(Math.min(o.left-(null==n?void 0:n.realWidth)+o.width+i,window.innerWidth-(null==n?void 0:n.realWidth)-r.width),r.width):"center"===e?Math.max(Math.min(o.left+o.width/2-(null==n?void 0:n.realWidth)/2,window.innerWidth-(null==n?void 0:n.realWidth)-r.width),r.width):0}function P(e,t){const n=l("popover");if(!n)return;const{align:i="start",side:r="left"}=(null==t?void 0:t.popover)||{},s=i,d="driver-dummy-element"===e.id?"over":r,a=o("stagePadding")||0,p=_(),c=n.arrow.getBoundingClientRect(),u=e.getBoundingClientRect(),v=u.top-p.height;let h=v>=0;const m=window.innerHeight-(u.bottom+p.height);let b=m>=0;const w=u.left-p.width;let g=w>=0;const f=window.innerWidth-(u.right+p.width);let y=f>=0;const x=!(h||b||g||y);let C=d;if("top"===d&&h?y=g=b=!1:"bottom"===d&&b?y=g=h=!1:"left"===d&&g?y=h=b=!1:"right"===d&&y&&(g=h=b=!1),"over"===d){const e=window.innerWidth/2-p.realWidth/2,t=window.innerHeight/2-p.realHeight/2;n.wrapper.style.left=`${e}px`,n.wrapper.style.right="auto",n.wrapper.style.top=`${t}px`,n.wrapper.style.bottom="auto"}else if(x){const e=window.innerWidth/2-(null==p?void 0:p.realWidth)/2,t=10;n.wrapper.style.left=`${e}px`,n.wrapper.style.right="auto",n.wrapper.style.bottom=`${t}px`,n.wrapper.style.top="auto"}else if(g){const e=Math.min(w,window.innerWidth-(null==p?void 0:p.realWidth)-c.width),t=L(s,{elementDimensions:u,popoverDimensions:p,popoverPadding:a,popoverArrowDimensions:c});n.wrapper.style.left=`${e}px`,n.wrapper.style.top=`${t}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",C="left"}else if(y){const e=Math.min(f,window.innerWidth-(null==p?void 0:p.realWidth)-c.width),t=L(s,{elementDimensions:u,popoverDimensions:p,popoverPadding:a,popoverArrowDimensions:c});n.wrapper.style.right=`${e}px`,n.wrapper.style.top=`${t}px`,n.wrapper.style.bottom="auto",n.wrapper.style.left="auto",C="right"}else if(h){const e=Math.min(v,window.innerHeight-p.realHeight-c.width);let t=E(s,{elementDimensions:u,popoverDimensions:p,popoverPadding:a,popoverArrowDimensions:c});n.wrapper.style.top=`${e}px`,n.wrapper.style.left=`${t}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",C="top"}else if(b){const e=Math.min(m,window.innerHeight-(null==p?void 0:p.realHeight)-c.width);let t=E(s,{elementDimensions:u,popoverDimensions:p,popoverPadding:a,popoverArrowDimensions:c});n.wrapper.style.left=`${t}px`,n.wrapper.style.bottom=`${e}px`,n.wrapper.style.top="auto",n.wrapper.style.right="auto",C="bottom"}x?n.arrow.classList.add("driver-popover-arrow-none"):function(e,t,o){const n=l("popover");if(!n)return;const i=o.getBoundingClientRect(),r=_(),s=n.arrow,d=r.width,a=window.innerWidth,p=i.width,c=i.left,u=r.height,v=window.innerHeight,h=i.top,m=i.height;s.className="driver-popover-arrow";let b=t,w=e;"top"===t?(c+p<=0?(b="right",w="end"):c+p-d<=0&&(b="top",w="start"),c>=a?(b="left",w="end"):c+d>=a&&(b="top",w="end")):"bottom"===t?(c+p<=0?(b="right",w="start"):c+p-d<=0&&(b="bottom",w="start"),c>=a?(b="left",w="start"):c+d>=a&&(b="bottom",w="end")):"left"===t?(h+m<=0?(b="bottom",w="end"):h+m-u<=0&&(b="left",w="start"),h>=v?(b="top",w="end"):h+u>=v&&(b="left",w="end")):"right"===t&&(h+m<=0?(b="bottom",w="start"):h+m-u<=0&&(b="right",w="start"),h>=v?(b="top",w="start"):h+u>=v&&(b="right",w="end")),b?(s.classList.add(`driver-popover-arrow-side-${b}`),s.classList.add(`driver-popover-arrow-align-${w}`)):s.classList.add("driver-popover-arrow-none")}(s,C,e)}const S=e=>{const t=jQuery(".superbaddons-admindashboard-modal-wrapper"),o=t.find(".superbaddons-admindashboard-modal-overlay"),n=t.find(".superbaddons-admindashboard-modal-close-button"),i=t.find(".superbaddons-admindashboard-modal-confirm-btn"),r=t.find(".superbaddons-admindashboard-modal-cancel-btn"),s=t.find(".superbaddons-admindashboard-modal-ok-btn"),d=t.find(".superbaddons-admindashboard-modal-title"),a=t.find(".superbaddons-admindashboard-modal-content"),l=t.find(".superbaddons-admindashboard-modal-header-spinner"),p=t.find(".superbaddons-admindashboard-modal-footer"),c=t.find(".superbaddons-element-separator"),u=e.title||!1,v=e.content||!1,h=e.confirmCallback||!1,m=e.cancelCallback||!1,b=e.awaitConfirmCallback||!1,w=e.stopCloseOnConfirm||!1,g=e.preventClosing||!1,f=e.isLoader||!1,y=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];i.off(),r.off(),n.off(),o.off(),s.off(),jQuery(window).off("keydown.superbaddons-admin-modal"),e?t.hide():t.fadeOut("fast")};return((e,u,v,h,m,b,g)=>{if(b||(jQuery(window).on("keydown.superbaddons-admin-modal",(e=>{27==(e.keyCode||e.which)&&y()})),n.click((()=>{y()})),o.click((()=>{y()}))),g)return l.show(),d.hide(),p.hide(),n.hide(),c.hide(),a.text(u),void t.fadeIn("fast");l.hide(),p.show(),d.show(),n.show(),c.show(),e&&d.text(e),u&&(Array.isArray(u)?(a.text(""),u.map((e=>{const t=jQuery("<div class='superbaddons-admindashboard-modal-content-item'></div>"),o=jQuery("<div class='superbaddons-admindashboard-modal-content-item-title'></div>"),n=jQuery("<div class='superbaddons-admindashboard-modal-content-item-content'></div>"),i=jQuery("<img class='superbaddons-admindashboard-modal-content-item-icon' />");superbaddonssettings_g&&(i.attr("src",e.shared?superbaddonssettings_g.modal.view_logs.icon_shared:superbaddonssettings_g.modal.view_logs.icon_unshared),i.attr("title",e.shared?superbaddonssettings_g.modal.view_logs.shared_title:superbaddonssettings_g.modal.view_logs.unshared_title));const r=new Date(1e3*e.time),s=r.toLocaleDateString()+" "+r.toLocaleTimeString();o.text(s+" (v."+e.version+"): "+e.title),o.prepend(i),n.text(e.stack),t.append(o),t.append(n),a.append(t)}))):a.text(u)),v?(i.show(),r.show(),s.hide(),i.click((async()=>{m?await v():v(),w||y()}))):(i.hide(),r.hide(),s.show(),s.click((()=>{w||y()}))),h?r.click((()=>{h(),y()})):r.click((()=>{y()})),t.fadeIn("fast")})(u,v,h,m,b,g,f),y};function A(e,t,o){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,o)}function T(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,B(e,t,"get"))}function $(e,t,o){return function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=o}}(e,B(e,t,"set"),o),o}function B(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}const{__:H}=wp.i18n,I="superbaddons-guided-tour-popover-next-hidden",D="superb-addons-guided-tour-last-insert";var M=new WeakMap,W=new WeakMap,N=new WeakMap;class j{constructor(){A(this,M,{writable:!0,value:void 0}),A(this,W,{writable:!0,value:void 0}),A(this,N,{writable:!0,value:void 0});const e=this;$(e,W,[]),$(e,M,function(e={}){function n(){o("allowClose")&&m()}function i(){const e=l("activeIndex"),t=o("steps")||[];if(typeof e>"u")return;const n=e+1;t[n]?h(n):m()}function r(){const e=l("activeIndex"),t=o("steps")||[];if(typeof e>"u")return;const n=e-1;t[n]?h(n):m()}function s(){var e;if(l("__transitionCallback"))return;const t=l("activeIndex"),n=l("__activeStep"),i=l("__activeElement");if(typeof t>"u"||typeof n>"u"||typeof l("activeIndex")>"u")return;const s=(null==(e=n.popover)?void 0:e.onPrevClick)||o("onPrevClick");if(s)return s(i,n,{config:o(),state:l()});r()}function d(){var e;if(l("__transitionCallback"))return;const t=l("activeIndex"),n=l("__activeStep"),r=l("__activeElement");if(typeof t>"u"||typeof n>"u")return;const s=(null==(e=n.popover)?void 0:e.onNextClick)||o("onNextClick");if(s)return s(r,n,{config:o(),state:l()});i()}function v(){l("isInitialized")||(a("isInitialized",!0),document.body.classList.add("driver-active",o("animate")?"driver-fade":"driver-simple"),window.addEventListener("keyup",x,!1),window.addEventListener("keydown",y,!1),window.addEventListener("resize",f),window.addEventListener("scroll",f),u("overlayClick",n),u("escapePress",n),u("arrowLeftPress",s),u("arrowRightPress",d))}function h(e=0){var t,n,i,r,s,d,l,p;const c=o("steps");if(!c)return console.error("No steps to drive through"),void m();if(!c[e])return void m();a("__activeOnDestroyed",document.activeElement),a("activeIndex",e);const u=c[e],v=c[e+1],b=c[e-1],g=(null==(t=u.popover)?void 0:t.doneBtnText)||o("doneBtnText")||"Done",f=o("allowClose"),y=typeof(null==(n=u.popover)?void 0:n.showProgress)<"u"?null==(i=u.popover)?void 0:i.showProgress:o("showProgress"),x=((null==(r=u.popover)?void 0:r.progressText)||o("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${e+1}`).replace("{{total}}",`${c.length}`),C=(null==(s=u.popover)?void 0:s.showButtons)||o("showButtons"),k=["next","previous",...f?["close"]:[]].filter((e=>!(null!=C&&C.length)||C.includes(e))),_=(null==(d=u.popover)?void 0:d.onNextClick)||o("onNextClick"),L=(null==(l=u.popover)?void 0:l.onPrevClick)||o("onPrevClick"),E=(null==(p=u.popover)?void 0:p.onCloseClick)||o("onCloseClick");w({...u,popover:{showButtons:k,nextBtnText:v?void 0:g,disableButtons:[...b?[]:["previous"]],showProgress:y,progressText:x,onNextClick:_||(()=>{v?h(e+1):m()}),onPrevClick:L||(()=>{h(e-1)}),onCloseClick:E||(()=>{m()}),...(null==u?void 0:u.popover)||{}}})}function m(e=!0){const t=l("__activeElement"),n=l("__activeStep"),i=l("__activeOnDestroyed"),r=o("onDestroyStarted");if(e&&r)return void r(t&&"driver-dummy-element"!==(null==t?void 0:t.id)?t:void 0,n,{config:o(),state:l()});const s=(null==n?void 0:n.onDeselected)||o("onDeselected"),d=o("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),window.removeEventListener("keyup",x),window.removeEventListener("resize",f),window.removeEventListener("scroll",f),function(){var e;const t=l("popover");t&&(null==(e=t.wrapper.parentElement)||e.removeChild(t.wrapper))}(),function(){var e;null==(e=document.getElementById("driver-dummy-element"))||e.remove(),document.querySelectorAll(".driver-active-element").forEach((e=>{e.classList.remove("driver-active-element","driver-no-interaction"),e.removeAttribute("aria-haspopup"),e.removeAttribute("aria-expanded"),e.removeAttribute("aria-controls")}))}(),function(){const e=l("__overlaySvg");e&&e.remove()}(),c={},p(),t&&n){const e="driver-dummy-element"===t.id;s&&s(e?void 0:t,n,{config:o(),state:l()}),d&&d(e?void 0:t,n,{config:o(),state:l()})}i&&i.focus()}return t(e),{isActive:()=>l("isInitialized")||!1,refresh:f,drive:(e=0)=>{v(),h(e)},setConfig:t,setSteps:e=>{p(),t({...o(),steps:e})},getConfig:o,getState:l,getActiveIndex:()=>l("activeIndex"),isFirstStep:()=>0===l("activeIndex"),isLastStep:()=>{const e=o("steps")||[],t=l("activeIndex");return void 0!==t&&t===e.length-1},getActiveStep:()=>l("activeStep"),getActiveElement:()=>l("activeElement"),getPreviousElement:()=>l("previousElement"),getPreviousStep:()=>l("previousStep"),moveNext:i,movePrevious:r,moveTo:function(e){(o("steps")||[])[e]?h(e):m()},hasNextStep:()=>{const e=o("steps")||[],t=l("activeIndex");return void 0!==t&&e[t+1]},hasPreviousStep:()=>{const e=o("steps")||[],t=l("activeIndex");return void 0!==t&&e[t-1]},highlight:e=>{v(),w({...e,popover:e.popover?{showButtons:[],showProgress:!1,progressText:"",...e.popover}:void 0})},destroy:()=>{m(!1)}}}({popoverClass:"superbaddons-guided-tour-popover",showProgress:!0,allowKeyboardControl:!1,onDestroyStarted:()=>{T(e,M).hasNextStep()?S({stopCloseOnConfirm:!0,title:H("Close Tutorial?","superbadons"),content:H("Closing the tutorial will close this window and end the tutorial.","superbadons"),confirmCallback:function(){e.EndTour()}}):e.EndTour()}}))}onEndTour(e){$(this,N,e)}EndTour(){if(T(this,N))return S({preventClosing:!0,isLoader:!0,content:H("Closing Tutorial...","superbaddons")}),void T(this,N).call(this);T(this,M).destroy()}StartTour(){T(this,M).setSteps(T(this,W)),T(this,M).drive()}AddStep(e){const t=T(this,W).push(e),o=t-1;return T(this,W)[t-1].stepIndex=o,o}AddSteps(e){for(const t in e)e[t].stepIndex=this.AddStep(e[t]);return e}NextStep(){T(this,M).moveNext()}PreviousStep(){T(this,M).movePrevious()}GoToStep(e){T(this,M).drive(e.stepIndex)}Highlight(e){T(this,M).highlight(e)}}const R="click.superbaddonsguidedtour",O={IgnoreCloseEvent:!1,LibraryLoaded:!1},Q=()=>{jQuery(`.${I}`).removeClass(I),jQuery(".superb-addons-template-library-template-item-preview-btn").off(),jQuery(".superb-addons-template-library-template-item-preview-btn").css({opacity:"0.3",cursor:"not-allowed"})},z={},G=(e,t,o)=>{document.addEventListener(t,o),z[t]||(z[t]=[]),Y(e),z[t].push({id:e,callback:o})},Y=e=>{Object.keys(z).forEach((t=>{z[t].forEach((o=>{o.id===e&&document.removeEventListener(t,o.callback)}))}))},{__:q}=wp.i18n;jQuery(document).ready((function(e){(()=>{const e=wp.data.dispatch("core/editor");e.lockPostAutosaving("superbaddonstour"),e.lockPostSaving("superbaddonstour"),wp.data.select("core/editor").isEditedPostSaveable=function(){return!1},wp.data.select("core").__experimentalGetDirtyEntityRecords=function(){return[]}})();const t=new j;t.onEndTour((()=>{setTimeout((()=>{window.close()}),1500)}));const o=".superb-addons-template-library-page-frame .superb-addons-template-library-template-item .superb-addons-template-library-template-item-insert-btn",n={PatternIntro:{popover:{title:q("Superb Addons","superbadons"),description:q("Let's guide you through inserting one of our patterns. To begin, simply open our library by using one of the library buttons.","superbadons"),side:"left",align:"start"}},PatternAppenderButton:{element:".superb-addons-gutenberg-library-button-appender",popover:{title:q("Patterns","superbadons"),description:q("You can use the pattern appender button.","superbadons"),side:"bottom",align:"start"}},PatternLibraryButton:{element:".superb-addons-gutenberg-library-button-wrapper .superbaddons-element-button",popover:{title:q("Patterns","superbadons"),description:q("And you can use the main toolbar button. Let's go ahead and click it now.","superbadons"),side:"bottom",align:"start",popoverClass:I}},LibraryOpened:{popover:{title:q("Pattern Library","superbadons"),description:q("You've done it! You're now all set to browse and insert patterns.","superbadons"),side:"top",align:"start",popoverClass:I,onPrevClick:()=>{e(".superb-addons-template-library-close-btn").click()}},onHighlightStarted:()=>{if(O.LibraryLoaded)return;const e="guided-tour-library-loaded";G(e,"superbaddons-library-loaded",(()=>{setTimeout((()=>{Q()}),100),O.LibraryLoaded=!0,Y(e)}))},onHighlighted:()=>{O.LibraryLoaded&&Q()}},PatternExample:{element:".superb-addons-template-library-page-frame .superb-addons-template-library-template-item",popover:{title:q("Pattern Library","superbadons"),description:q("You'll find a variety of patterns to choose from, just like the one shown here.","superbadons"),side:"bottom",align:"start"},onHighlightStarted:()=>{e(o).off(R),e(o).on(R,(function(){setTimeout((()=>{t.Highlight({element:".superb-addons-template-library-page-frame .superb-addons-loading .superb-addons-loader-wrapper"})}),10),e(this).off(R)}));const i="guided-tour-pattern-inserted";G(i,"superbaddons-library-inserted",(()=>{O.IgnoreCloseEvent=!0,setTimeout((()=>{(()=>{jQuery(`.${D}`).removeClass(D);const e=wp.data.select("core/block-editor").getSelectedBlock();e&&jQuery(`.wp-block-post-content > .wp-block.block-editor-block-list__block[data-block='${e.clientId}']`).addClass(D)})(),t.GoToStep(n.PatternAdded),Y(i)}),100)}))}},InsertPattern:{element:o,popover:{title:q("Pattern Library","superbadons"),description:q('Let\'s try inserting this pattern. Click the "Insert" button to add it.',"superbadons"),side:"bottom",align:"start",popoverClass:I}},PatternAdded:{element:`.${D}`,popover:{title:q("Patterns","superbadons"),description:q("You've just inserted a pattern. Good job! Patterns can be edited to match your preferences.","superbadons"),side:"top",align:"start",onPrevClick:()=>{t.GoToStep(n.PatternLibraryButton)}}},Complete:{popover:{title:q("Superb Addons","superbadons"),description:q("That concludes this tutorial. You can now explore the rest of the plugin. Enjoy!","superbadons"),side:"top",align:"start"}}};t.AddSteps(n);const i="guided-tour-init";G(i,"superbaddons-library-initialized",(()=>{setTimeout((()=>{e(".wp-block.wp-block-post-title.block-editor-block-list__block.editor-post-title.editor-post-title__input").text(q("Superb Addons Tutorial","superbadons")),t.StartTour()}),100),Y(i)})),G("guided-tour-library-opened","superbaddons-library-opened",(()=>{t.GoToStep(n.LibraryOpened)})),G("guided-tour-library-closed","superbaddons-library-closed",(()=>{O.IgnoreCloseEvent||(O.IgnoreCloseEvent=!1,t.GoToStep(n.PatternLibraryButton))}))}))})();