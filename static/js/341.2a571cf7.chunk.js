"use strict";(self.webpackChunkjobten=self.webpackChunkjobten||[]).push([[341],{3318:function(e,s,n){var t=n(9439),a=n(2791),c=(n(9626),n(184));s.Z=function(e){var s=e.faqData,n=(0,a.useState)(null),r=(0,t.Z)(n,2),i=r[0],l=r[1],d=(0,a.useRef)(null),o=function(e){return e===i?(null===d||void 0===d?void 0:d.current.scrollHeight)+"px":"0"};return(0,c.jsxs)("div",{className:"faqs_cont",children:[(0,c.jsx)("h3",{children:"F.A.Q"}),(0,c.jsx)("div",{className:"faqs_content",children:null===s||void 0===s?void 0:s.map((function(e,s){return(0,c.jsxs)("div",{className:"faq",children:[(0,c.jsxs)("div",{className:"plus",onClick:function(){return function(e){l(e==i?null:e)}(s)},children:[(0,c.jsx)("div",{className:"horizontal"}),(0,c.jsx)("div",{className:"vertical ".concat(s==i&&"vertical_opened")})]}),(0,c.jsxs)("div",{className:"faq_text",children:[(0,c.jsx)("h4",{children:e.question}),(0,c.jsx)("p",{className:"faq_answer ".concat(s==i&&"margin_top"),ref:d,style:{maxHeight:o(s)},children:e.answer})]})]},s)}))})]})}},8341:function(e,s,n){n.r(s);var t=n(4165),a=n(5861),c=n(9439),r=n(2791),i=n(1243),l=(n(2632),n(1087)),d=n(2132),o=n(4691),u=n(3318),h=n(6616),x=n(5027),v=n(4114),m=n(3728),j=n(9985),f=n(7802),_=n(184);s.default=function(){var e=(0,r.useState)(null),s=(0,c.Z)(e,2),n=s[0],g=s[1],p=(0,r.useState)(null),N=(0,c.Z)(p,2),Z=N[0],b=N[1],w=(0,r.useState)(null),S=(0,c.Z)(w,2),k=S[0],q=S[1],C=(0,r.useState)(!0),R=(0,c.Z)(C,2),y=R[0],A=R[1],B=(0,r.useState)(!0),E=(0,c.Z)(B,2),T=E[0],F=E[1],I=(0,r.useState)(0),P=(0,c.Z)(I,2),U=P[0],D=P[1],H=(0,r.useState)(0),W=(0,c.Z)(H,2),z=W[0],L=W[1],Q=(0,r.useState)(null),G=(0,c.Z)(Q,2),J=G[0],K=G[1];(0,r.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.prev=1,e.next=4,i.Z.get("".concat(d.BaseURL,"/webinar/list/?is_active=").concat(T));case 4:s=e.sent,g(s.data),console.log(s.data),b(s.data.faqs),q(s.data.testimonials),K(s.data.recommended_course),A(!1),(0,d.scrollTP)(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();e();window.scrollTo(0,0)}),[T]);var M=(0,r.useRef)();(0,r.useEffect)((function(){if(M.current){var e=M.current.getBoundingClientRect().width;D(e)}}),[J]);var O=(0,r.useState)(window.innerWidth),V=(0,c.Z)(O,2),X=V[0],Y=(V[1],function(e){X<=600&&e>0&&z<=J.length-2&&L(z+1),X<1163&&X>600&&e>0&&z<=J.length-3&&L(z+1),X>1163&&e>0&&z<=J.length-4&&L(z+1),e<0&&z>0&&L(z-1)});return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"webinars_cont",children:[(0,_.jsx)("h2",{children:"WEBINARS"}),(0,_.jsxs)("div",{className:"archive_Btns",children:[(0,_.jsx)("button",{className:"".concat(T?"curr_state":"prev_state"),onClick:function(){return F(!0)},children:"Active"}),(0,_.jsxs)("button",{className:"".concat(T?"prev_state":"curr_state"),onClick:function(){return F(!1)},children:["Archived"," "]})]}),y?(0,_.jsx)(o.Z,{}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"webinars_div_cont",children:null===n||void 0===n?void 0:n.webinars.map((function(e,s){return(0,_.jsxs)(l.rU,{to:T&&"/webinar/".concat(e.slug),className:"webinars_item",children:[(0,_.jsx)("img",{src:"".concat(e.img),alt:"Python Image"}),(0,_.jsxs)("div",{className:"webinars_text",children:[(0,_.jsx)("h3",{children:e.title}),(0,_.jsxs)("div",{className:"webinar_dates",children:[(0,_.jsxs)("p",{children:["Starts At :",(0,_.jsx)("span",{children:(0,f.convertTime)(e.start_date_time).all})," "]}),(0,_.jsxs)("p",{children:["Ends At :",(0,_.jsx)("span",{children:(0,f.convertTime)(e.end_date_time).all})," "]})]}),(0,_.jsxs)("div",{className:"btn_cont",children:[(0,_.jsxs)("p",{children:[(0,_.jsx)("span",{children:e.registration_count})," people have registered"]}),(0,_.jsx)("button",{disabled:!T&&!0,className:"".concat(T?"":"disapled_btn"),children:T?"Register Now":"Registration has ended"})]})]})]},s)}))}),(0,_.jsx)(u.Z,{faqData:Z}),(0,_.jsx)(h.Z,{testimonials:k}),(0,_.jsxs)("div",{className:"recomended_courses",children:[(0,_.jsx)("h2",{children:"Recomended Courses"}),(0,_.jsx)("div",{className:"rec_relative_cont",children:(0,_.jsx)("div",{className:"courses_rec_cont",style:{left:"calc((".concat(U,"px + 5rem) * -1 * ").concat(z,")")},children:null===J||void 0===J?void 0:J.map((function(e,s){var n;return(0,_.jsxs)(l.rU,{ref:M,className:"courses_rec_item",to:"/course/".concat(e.slug),children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("img",{src:"".concat(e.img),alt:"Python Image"}),(0,_.jsxs)("div",{className:"course_rec_text",children:[(0,_.jsx)("h3",{children:e.title}),(0,_.jsx)("div",{className:"rec_yeses",children:null===(n=e.extra_details.details)||void 0===n?void 0:n.map((function(e,s){return(0,_.jsxs)("div",{className:"rec_yes",children:[(0,_.jsx)("img",{src:j.Z,alt:""}),(0,_.jsx)("p",{children:e})]},s)}))})]})]}),(0,_.jsxs)("div",{className:"course_rating",children:[(0,_.jsx)(x.Z,{rating:e.rating}),(0,_.jsxs)("h5",{children:[" (",null===e||void 0===e?void 0:e.rating_count,")"]})]})]},s)}))})}),(0,_.jsxs)("div",{className:"rec_btns",children:[(0,_.jsx)("img",{src:v.Z,alt:"",className:"test_left",onClick:function(){return Y(-1)}}),(0,_.jsx)("img",{src:m.Z,alt:"",className:"test_right",onClick:function(){return Y(1)}})]})]})]})]})})}}}]);
//# sourceMappingURL=341.2a571cf7.chunk.js.map