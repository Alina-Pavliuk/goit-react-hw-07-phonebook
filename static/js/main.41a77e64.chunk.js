(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,c){t.exports={contactItem:"ContactItem_contactItem__D_wUJ",listItemEnterActive:"ContactItem_listItemEnterActive__28bVf",task:"ContactItem_task__20LfY",listItemExitActive:"ContactItem_listItemExitActive__1wZ3F",hinge:"ContactItem_hinge__m3PqO",removeBtn:"ContactItem_removeBtn__29UAM",paragraph:"ContactItem_paragraph__1OKz_"}},14:function(t,e,c){t.exports={wrapper:"App_wrapper__3tY0G",formButton:"App_formButton__2c67t",title:"App_title__3V7C6",titleEnterActive:"App_titleEnterActive__3N9_4",task:"App_task__27kAO",contactsList:"App_contactsList__2K84T",alertBox:"App_alertBox__1Gmo0",alertBoxEnterActive:"App_alertBoxEnterActive__3Ldyv",alertBoxExitActive:"App_alertBoxExitActive__1s6lO",hinge:"App_hinge__Gxptf"}},16:function(t,e,c){t.exports={ContactForm:"ContactForm_ContactForm__212Qj",titleLabel:"ContactForm_titleLabel__2badp",inputForm:"ContactForm_inputForm__2de9Q",formButton:"ContactForm_formButton__fthjp"}},25:function(t,e,c){t.exports={filterInput:"Filter_filterInput__AdX91",filterLabel_span:"Filter_filterLabel_span__oJAe_",wrapperSearch:"Filter_wrapperSearch__3WE7k"}},51:function(t,e,c){},75:function(t,e,c){"use strict";c.r(e);var a,n=c(1),r=c(0),o=c(12),s=c.n(o),i=(c(51),c(6)),l=c(21),u=c(15),b=c(78),j=c(79),m=c(14),p=c.n(m),O=c(13),f=c.n(O),_=c(11),d=c(16),h=c.n(d),v={number:"",name:""},x=function(t){var e=t.setAlert,c=t.addContact,a=t.contacts,o=Object(r.useState)(v),s=Object(l.a)(o,2),u=s[0],b=s[1],j=u.name,m=u.number,p=function(t){var e=t.target,c=e.name,a=e.value;b(Object(i.a)(Object(i.a)({},u),{},Object(_.a)({},c,a)))};return Object(n.jsxs)("form",{className:h.a.ContactForm,onSubmit:function(t){t.preventDefault();var n=t.target,r=n.name,o=n.number,s={name:r.value,number:o.value};a.some((function(t){return t.name===r.value}))?e(!0):(c(s),b(Object(i.a)({},v)))},children:[Object(n.jsxs)("label",{children:[Object(n.jsx)("span",{className:h.a.titleLabel,children:"Name"}),Object(n.jsx)("input",{className:h.a.inputForm,type:"text",value:j,name:"name",placeholder:"Name",onChange:p})]}),Object(n.jsxs)("label",{children:[Object(n.jsx)("span",{className:h.a.titleLabel,children:" Number"}),Object(n.jsx)("input",{className:h.a.inputForm,type:"text",value:m,name:"number",placeholder:"Number",onChange:p})]}),Object(n.jsx)("button",{className:h.a.formButton,type:"submit",children:"Add contact"})]})},A=c(25),C=c.n(A),N=function(t){var e=t.filter,c=t.filterHandler;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:C.a.wrapperSearch,children:Object(n.jsxs)("label",{children:[Object(n.jsx)("span",{className:C.a.filterLabel_span,children:" Find contacts by name"}),Object(n.jsx)("input",{className:C.a.filterInput,type:"text",name:"filter",value:e,onChange:c,placeholder:"Search"})]})})})},g=function(t){var e=t.id,c=t.name,a=t.number,r=t.removeContact;return Object(n.jsxs)("li",{className:f.a.contactItem,children:[Object(n.jsxs)("p",{className:f.a.paragraph,children:[c,": ",a]}),Object(n.jsx)("button",{className:f.a.removeBtn,type:"button",onClick:r(e),children:"X"})]})},E=c(5),w=Object(E.b)("contacts/addRequest"),I=Object(E.b)("contacts/addSuccess"),k=Object(E.b)("contacts/addError"),B=Object(E.b)("contacts/getRequest"),y=Object(E.b)("contacts/getSuccess"),F=Object(E.b)("contacts/getError"),L=Object(E.b)("contacts/removeRequest"),S=Object(E.b)("contacts/removeSuccess"),q=Object(E.b)("contacts/removeError"),J=(Object(E.b)("contacts/add",(function(t){return{payload:{contactObj:t}}})),Object(E.b)("contacts/remove"),Object(E.b)("contacts/set"),Object(E.b)("filter/edit")),G=c(17),R=c.n(G),X=c(26),D=c(27),H=c.n(D),K=function(t){return function(){var e=Object(X.a)(R.a.mark((function e(c){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(w()),e.next=4,H.a.post("http://localhost:5000/contacts",t);case 4:a=e.sent,c(I(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c(k(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},P=function(){return function(){var t=Object(X.a)(R.a.mark((function t(e){var c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(B()),t.next=4,H.a.get("http://localhost:5000/contacts");case 4:c=t.sent,e(y(c.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e(F(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Q=function(t){return function(){var e=Object(X.a)(R.a.mark((function e(c){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(L()),e.next=4,H.a.delete("http://localhost:5000/contacts/".concat(t));case 4:e.sent,c(S(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c(q(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},T=c(7),U=function(t){return t.contacts},V=Object(T.a)(U,(function(t){return t.items})),Y=Object(T.a)(U,(function(t){return t.filter})),z=Object(T.a)(V,Y,(function(t,e){return 0===t.length?[]:t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),M=function(){var t=Object(u.c)(V),e=Object(u.c)(Y),c=Object(u.c)(z),a=Object(u.b)(),o=Object(r.useState)(!1),s=Object(l.a)(o,2),m=s[0],O=(s[1],Object(r.useState)(!1)),_=Object(l.a)(O,2),d=_[0],h=_[1];Object(r.useEffect)((function(){a(P())}),[]),console.log(t);var v=function(t){return function(e){a(Q(t))}};return Object(n.jsxs)("div",{className:p.a.wrapper,children:[Object(n.jsx)(b.a,{classNames:{enterActive:p.a.alertBoxEnterActive,exitActive:p.a.alertBoxExitActive},mountOnEnter:!0,unmountOnExit:!0,timeout:300,in:d,children:Object(n.jsxs)("div",{className:p.a.alertBox,children:[Object(n.jsx)("h2",{children:"The name is already a contact"}),Object(n.jsx)("button",{onClick:function(){return h(!1)},className:f.a.alertBtn,type:"button",children:"X"})]})}),Object(n.jsx)(b.a,{classNames:{enterActive:p.a.titleEnterActive},timeout:800,in:m,children:Object(n.jsx)("h2",{className:p.a.title,children:"Phonebook "})}),Object(n.jsx)(x,{setAlert:h,addContact:function(t){a(K(t))},contacts:t}),Object(n.jsx)(N,{filter:e,filterHandler:function(t){a(J(t.target.value))}}),Object(n.jsx)(j.a,{className:p.a.contactsList,component:"ul",children:c.map((function(t){return Object(n.jsx)(b.a,{timeout:800,classNames:{enterActive:f.a.listItemEnterActive,exitActive:f.a.listItemExitActive},children:Object(n.jsx)(g,Object(i.a)(Object(i.a)({},t),{},{removeContact:v}))},t.id)}))})]})},W=c(44),Z=c(22),$=Object(E.c)({items:[],filter:""},(a={},Object(_.a)(a,I,(function(t,e){var c=e.payload;return Object(i.a)(Object(i.a)({},t),{},{items:[].concat(Object(Z.a)(t.items),[c])})})),Object(_.a)(a,y,(function(t,e){var c=e.payload;return Object(i.a)(Object(i.a)({},t),{},{items:Object(Z.a)(c)})})),Object(_.a)(a,S,(function(t,e){var c=e.payload;return Object(i.a)(Object(i.a)({},t),{},{items:t.items.filter((function(t){return t.id!==c}))})})),Object(_.a)(a,J,(function(t,e){var c=e.payload;return Object(i.a)(Object(i.a)({},t),{},{filter:c})})),a)),tt=c(43),et=c.n(tt),ct=Object(E.d)(),at=Object(E.a)({reducer:{contacts:$},middleware:[].concat(Object(Z.a)(ct),[et.a])});s.a.render(Object(n.jsx)(u.a,{store:at,children:Object(n.jsx)(W.a,{children:Object(n.jsx)(M,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.41a77e64.chunk.js.map