"use strict";(self.webpackChunkjobten=self.webpackChunkjobten||[]).push([[130],{3318:function(e,n,t){var s=t(9439),a=t(2791),c=(t(9626),t(184));n.Z=function(e){var n=e.faqData,t=(0,a.useState)(null),i=(0,s.Z)(t,2),r=i[0],l=i[1],o=(0,a.useRef)(null),u=function(e){return e===r?(null===o||void 0===o?void 0:o.current.scrollHeight)+"px":"0"};return(0,c.jsxs)("div",{className:"faqs_cont",children:[(0,c.jsx)("h3",{children:"F.A.Q"}),(0,c.jsx)("div",{className:"faqs_content",children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,c.jsxs)("div",{className:"faq",children:[(0,c.jsxs)("div",{className:"plus",onClick:function(){return function(e){l(e==r?null:e)}(n)},children:[(0,c.jsx)("div",{className:"horizontal"}),(0,c.jsx)("div",{className:"vertical ".concat(n==r&&"vertical_opened")})]}),(0,c.jsxs)("div",{className:"faq_text",children:[(0,c.jsx)("h4",{children:e.question}),(0,c.jsx)("p",{className:"faq_answer ".concat(n==r&&"margin_top"),ref:o,style:{maxHeight:u(n)},children:e.answer})]})]},n)}))})]})}},6130:function(e,n,t){t.r(n);var s=t(4165),a=t(5861),c=t(9439),i=t(2791),r=t(1243),l=(t(4735),t(1087)),o=t(2132),u=t(1582),v=t(4691),d=t(3318),f=t(6616),h=t(184);n.default=function(){var e=(0,i.useState)(null),n=(0,c.Z)(e,2),t=n[0],m=n[1],x=(0,i.useState)(null),j=(0,c.Z)(x,2),_=j[0],p=j[1],Z=(0,i.useState)(null),N=(0,c.Z)(Z,2),g=N[0],q=N[1],w=(0,i.useState)(!0),k=(0,c.Z)(w,2),S=k[0],b=k[1];(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.Z.get("".concat(o.BaseURL,"/service/list/"));case 3:n=e.sent,m(n.data.services),p(n.data.faqs),q(n.data.testimonial),b(!1),(0,o.scrollTP)(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e();window.scrollTo(0,0)}),[]);var C=(0,i.useState)(null),E=(0,c.Z)(C,2),y=E[0],D=E[1],R=(0,u.YD)(),F=R.ref,H=R.inView;return(0,h.jsx)(h.Fragment,{children:S?(0,h.jsx)(v.Z,{}):(0,h.jsxs)("div",{className:"services_cont",children:[(0,h.jsx)("h2",{children:"SERVICES"}),(0,h.jsx)("div",{className:"home_service_cont",ref:F,children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,h.jsxs)(l.rU,{target:"_blank",to:"/services/".concat(e.slug),className:"hoem_service_item ".concat(H&&"service_animation_".concat(n," ")),onMouseEnter:function(){return D(n)},onMouseLeave:function(){return D(null)},children:[(0,h.jsx)("h3",{className:"home_service_title ".concat(y==n&&"home_service_title_active"," "),children:e.title}),(0,h.jsx)("img",{src:e.image,alt:""}),(0,h.jsx)("div",{className:"service_bacgound ".concat(y==n&&"opacity_1"," ")})]},n)}))}),(0,h.jsx)(d.Z,{faqData:_}),(0,h.jsx)(f.Z,{testimonials:g})]})})}},9626:function(){},4735:function(){}}]);
//# sourceMappingURL=130.cebc6fb8.chunk.js.map