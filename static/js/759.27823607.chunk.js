"use strict";(self.webpackChunkjobten=self.webpackChunkjobten||[]).push([[759],{4759:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var s=n(4165),c=n(5861),a=n(9439),r=n(2791),o=n(1243),l=n(7689),i=n(1087),u=n(2132),m=n(4691),d=n(5568),h=n(9985),v=n(4861),x=n(184),f=function(e){var t=e.comment,n=e.blog,l=e.setOpne_comments,i=(0,r.useState)(!1),m=(0,a.Z)(i,2),f=m[0],g=m[1],p=(0,r.useState)("Add Comment"),j=(0,a.Z)(p,2),_=j[0],b=j[1],Z=(0,r.useState)(""),N=(0,a.Z)(Z,2),k=N[0],S=N[1],C=(0,r.useState)(""),w=(0,a.Z)(C,2),y=w[0],B=w[1],R=(0,r.useState)(!1),T=(0,a.Z)(R,2),U=T[0],L=T[1],F=(0,r.useState)(!1),I=(0,a.Z)(F,2),O=I[0],P=I[1],q=function(){g(!0),b("Name:")},z=function(){k||y||(g(!1),b("Add Comment"))},A=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(c){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),L(!0),e.prev=2,e.next=5,o.Z.post("".concat(u.BaseURL,"/comment/"),{blog:n,comment:y,name:k});case 5:e.sent,L(!1),P(!0),setTimeout((function(){P(!1)}),3e3),S(""),B(""),t.unshift({comment:y,name:k}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:"comments_cont",children:[(0,x.jsxs)("div",{className:"comments_title_cont",children:[(0,x.jsx)("h3",{children:"Comments:"}),(0,x.jsx)("img",{src:d.Z,alt:"",onClick:function(){return l(!1)}})]}),(0,x.jsxs)("form",{className:"comment_input ".concat(f?"comment_focus":""),onSubmit:A,children:[(0,x.jsx)("input",{type:"text",name:"",id:"",placeholder:_,onFocus:q,required:!0,onBlur:z,value:k,onChange:function(e){return S(e.currentTarget.value)}}),(0,x.jsx)("textarea",{type:"text",name:"",id:"",placeholder:"Comment:",onFocus:q,required:!0,onBlur:z,value:y,onChange:function(e){return B(e.currentTarget.value)}}),(0,x.jsxs)("div",{className:"comment_button_cont",children:[(0,x.jsx)("button",{children:"Send Comment"}),U&&(0,x.jsx)("div",{className:"coment_loading",children:(0,x.jsx)(v.Z,{})}),O&&(0,x.jsx)("div",{className:"coment_loading",children:(0,x.jsx)("img",{src:h.Z,alt:"",className:"comment_yes"})})]})]}),(0,x.jsx)("div",{className:"comments",children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,x.jsxs)("div",{className:"comment",children:[(0,x.jsxs)("h3",{children:[e.name,":"]}),(0,x.jsx)("p",{children:e.comment})]},t)}))})]})};var g=n.p+"static/media/commen.107928a409b9499d3619f22befc21270.svg";var p=n.p+"static/media/like.f3121bd660eaa572771f81a2a53a4bfb.svg",j=n(8703),_=n.n(j),b=n(4114),Z=n(3728),N=(n(7485),function(){var e=(0,l.UO)().blogId,t=(0,r.useState)(),n=(0,a.Z)(t,2),d=n[0],h=n[1],v=(0,r.useState)(),j=(0,a.Z)(v,2),N=j[0],k=j[1],S=(0,r.useState)(!1),C=(0,a.Z)(S,2),w=C[0],y=C[1],B=(0,r.useState)(0),R=(0,a.Z)(B,2),T=R[0],U=R[1],L=(0,r.useState)(),F=(0,a.Z)(L,2),I=F[0],O=F[1],P=(0,r.useState)(!0),q=(0,a.Z)(P,2),z=q[0],A=q[1],E=(0,r.useState)(!0),D=(0,a.Z)(E,2),H=D[0],M=D[1],W=(0,r.useState)(!1),G=(0,a.Z)(W,2),J=G[0],K=G[1],Q=(0,r.useState)([]),V=(0,a.Z)(Q,2),X=V[0],Y=V[1],$=(0,r.useState)(0),ee=(0,a.Z)($,2),te=ee[0],ne=ee[1],se=(0,r.useState)(0),ce=(0,a.Z)(se,2),ae=ce[0],re=ce[1];(0,r.useEffect)((function(){var t=function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var n,c;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(u.BaseURL,"/blog/").concat(e));case 3:n=t.sent,h(n.data.blogs),O(n.data.comment.reverse()),U(n.data.blogs.thumbs_up),c=_().sanitize(n.data.blogs.details),k(c),A(!1),(0,u.scrollTP)(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();t();var n=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.prev=1,e.next=4,o.Z.get("".concat(u.BaseURL,"/blog/list/"));case 4:t=e.sent,Y(t.data.blogs),M(!1),(0,u.scrollTP)(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();n();window.scrollTo(0,0)}),[e]);var oe=function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(w){t.next=12;break}return t.prev=1,t.next=4,o.Z.post("".concat(u.BaseURL,"/thumsup/").concat(e,"/"),{});case 4:t.sent,y(!0),U(T+1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),le=(0,r.useRef)();(0,r.useEffect)((function(){if(le.current){var e=le.current.getBoundingClientRect().width;re(e)}}),[X]);var ie=(0,r.useState)(window.innerWidth),ue=(0,a.Z)(ie,2),me=ue[0],de=(ue[1],function(e){me<=600&&e>0&&te<=X.length-2&&ne(te+1),me<1163&&me>600&&e>0&&te<=X.length-3&&ne(te+1),me>1163&&e>0&&te<=X.length-4&&ne(te+1),e<0&&te>0&&ne(te-1)});return(0,x.jsxs)(x.Fragment,{children:[z?(0,x.jsx)(m.Z,{}):(0,x.jsxs)("div",{className:"single_blog_cont",children:[(0,x.jsxs)("div",{className:"blog_coments_container ".concat(J&&"openComents"),children:[(0,x.jsx)("div",{className:"blog_coments_bacground ".concat(!J&&"opacity_zero"),onClick:function(){return K(!1)}}),(0,x.jsx)("div",{className:"coment_closed ".concat(J&&"coment_open"),children:(0,x.jsx)(f,{comment:I,setOpne_comments:K,blog:d.id})})]}),(0,x.jsxs)("div",{className:"blog",children:[(0,x.jsx)("h2",{className:"blog_title",children:d.title}),(0,x.jsxs)("div",{className:"blog_likes_cont",children:[(0,x.jsxs)("div",{className:"blog_likes ".concat(w&&"blog_liked"),children:[(0,x.jsx)("img",{src:p,alt:"",onClick:oe}),"(",T,")"]}),(0,x.jsxs)("div",{className:"blog_likes",children:[(0,x.jsx)("img",{src:g,alt:"",onClick:function(){return K(!J)}}),"(",I.length||0,")"]})]}),(0,x.jsxs)("div",{className:"blog_content",children:[(0,x.jsx)("img",{src:null===d||void 0===d?void 0:d.image,alt:""}),(0,x.jsx)("div",{className:"html_text",children:(0,x.jsx)("div",{dangerouslySetInnerHTML:{__html:N}})})]})]})]}),!H&&(0,x.jsxs)("div",{className:"recomended_blogs",children:[(0,x.jsx)("h2",{children:"Recomended Blogs"}),(0,x.jsx)("div",{className:"rec_relative_cont",children:(0,x.jsx)("div",{className:"blogs_rec_cont",style:{left:"calc((".concat(ae,"px + 5rem) * -1 * ").concat(te,")")},children:null===X||void 0===X?void 0:X.map((function(e,t){return(0,x.jsx)(i.rU,{ref:le,className:"courses_rec_item",to:"/blogs/".concat(e.slug),children:(0,x.jsxs)("div",{children:[(0,x.jsx)("img",{src:"".concat(e.image),alt:"Python Image"}),(0,x.jsx)("div",{className:"course_rec_text",children:(0,x.jsx)("h3",{children:e.title})})]})},t)}))})}),(0,x.jsxs)("div",{className:"rec_btns",children:[(0,x.jsx)("img",{src:b.Z,alt:"",className:"test_left",onClick:function(){return de(-1)}}),(0,x.jsx)("img",{src:Z.Z,alt:"",className:"test_right",onClick:function(){return de(1)}})]})]})]})})},7485:function(){}}]);
//# sourceMappingURL=759.27823607.chunk.js.map