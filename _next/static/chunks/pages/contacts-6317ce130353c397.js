(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{20829:function(e,t,n){"use strict";n.d(t,{ZP:function(){return b}});var r=n(67294),a=n(11719),o=n(35117),c=n(52663),s=n(66083),l=n(29525),u=n(7212),i=n(66856),d=n(29773),f=n(7513),m=n(54303);var p=(0,a.Z)((function(e){return(0,o.Z)(function(e){return(0,m.createStyles)(e,["icons","button"],{dialog:{width:640},dialogActions:{padding:e.spacing(2.4)},dialogTitle:{fontSize:e.typography.h2.fontSize,fontWeight:e.typography.h2.fontWeight},dialogText:{fontWeight:e.typography.body.fontWeight,fontFamily:e.typography.body.fontFamily},dangerButton:{backgroundColor:e.palette.error.main}})}(e))}));function b(){var e=p(),t=(0,r.useContext)(f.ZP),n=t.open,a=t.title,o=t.content,m=t.customContentWrapper,b=t.setConfirmed,g=t.cancelText,v=t.confirmText,E=t.omitCancelButton,y=t.isDangerousAction;return r.createElement(c.Z,{classes:{paperWidthFalse:e.dialog},"data-testid":"confirmation-dialog",maxWidth:!1,"aria-labelledby":"confirmation-dialog",open:!!n},a&&r.createElement(s.Z,{"data-testid":"confirmation-dialog-title",disableTypography:!0,classes:{root:e.dialogTitle}},a),r.createElement(l.Z,null,!m&&r.createElement(u.Z,{"data-testid":"confirmation-dialog-content",classes:{root:e.dialogText},id:"alert-confirmation-dialog"},o),m&&r.createElement("div",null,o)),r.createElement(i.Z,{classes:{root:e.dialogActions}},!E&&r.createElement(d.zx,{variant:"secondary","data-testid":"confirmation-cancel-button",className:e.cancelButton,autoFocus:!0,onClick:function(){return b(!1)}},g||"Cancel"),r.createElement(d.zx,{"data-testid":"confirm-button",className:y?e.dangerButton:e.submitAgentsButton,type:"submit",onClick:function(){return b(!0)}},v||"Confirm")))}},87440:function(e,t,n){"use strict";n.d(t,{ZP:function(){return y}});var r=n(36864),a=n(4730),o=n(50029),c=n(87794),s=n.n(c),l=n(67294),u=n(86010),i=n(11719),d=n(10150),f=n(54303),m=n(46903),p=n(7513),b=function(e){return f.button.styles(e)},g=n(55612),v=["confirmationTitle","confirmationContent","dialogId","onDelete","successMessage","resourceName"],E=(0,i.Z)((function(e){return(0,d.Z)(b(e))}));function y(e){var t=e.confirmationTitle,n=e.confirmationContent,c=e.dialogId,i=e.onDelete,d=e.successMessage,b=e.resourceName,y=(0,a.Z)(e,v),h=(0,f.useBem)(E()),Z=(0,l.useContext)(m.ZP),w=Z.setAlertOpen,x=Z.setMessage,C=Z.setSeverity,P=(0,l.useState)(!1),k=P[0],S=P[1],O=(0,l.useContext)(p.ZP),D=O.confirmed,_=O.open,N=O.setContent,I=O.setOpen,T=O.setTitle,A=O.closeDialog;var j=function(e){var t=e.onDelete,n=e.onDeleteError,r=e.setAlertOpen,a=e.setMessage,c=e.setSeverity,l=e.successMessage;return(0,o.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:c("success"),a(l),r(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))}({onDelete:i,onDeleteError:function(e){C("error"),(0,g.ky)(e,409)?x("".concat(b," has files in it and cannot be deleted.")):x(e.toString()),w(!0)},setAlertOpen:w,setMessage:x,setSeverity:C,successMessage:d});return(0,l.useEffect)((function(){_===c&&(k&&null===D||(T(t),N(n),S(!0),k&&D&&j(),k&&null!==D&&(A(),S(!1))))}),[j,_,c,t,n,S,D,k,N,T,A]),l.createElement("button",(0,r.Z)({type:"button",className:(0,u.Z)(h("button")),"data-testid":"delete-button"},y,{onClick:function(){return I(c)}}))}y.defaultProps={resourceName:"this resource"}},34653:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(67294),a=n(84549),o=n(23934),c=n(16835),s=n(50029),l=n(87794),u=n.n(l),i=n(86010),d=n(41664),f=n(35117),m=n(11719),p=n(54303),b=n(29773),g=n(68504),v=n(95287),E=n(35863),y=n(40478),h=n(80480),Z=n(47687),w=n(21015),x=function(e){var t=p.table.styles(e);return(0,p.createStyles)(e,["table","icons"],{table:{"& tbody td":{"&:first-child":t["table__body-cell--width-preview"]},"& tbody a":t.table__link},avatar:{width:"30px",height:"30px"}})},C=n(98258),P=n(51059),k=n(38603);var S=n(19615),O=n(52932),D=n(18196),_=n(18780),N=n(27959),I=n(50743),T=n(61201),A=(0,n(63786).Z)(r.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),j=n(36864),B=n(4730),M=n(87440),W=["onDelete","name","webId"];function z(e){var t=e.onDelete,n=e.name,a=e.webId,o=(0,B.Z)(e,W);return r.createElement(M.ZP,(0,j.Z)({confirmationTitle:"Delete Contact",confirmationContent:"Are you sure you wish to delete ".concat(n||a," from your contacts?"),dialogId:"delete-contact",onDelete:t,successMessage:"Contact was successfully deleted."},o),"Delete")}z.defaultProps={name:null};var F=n(20829);function X(e){var t=e.open,n=e.onClose,a=e.onDelete,o=e.selectedContactName,c=e.selectedContactWebId,s=e.profileIri,l=b.PC.useBem();return r.createElement(b.dy,{open:t,close:n},r.createElement(N.Z,{defaultExpanded:!0,square:!0},r.createElement(I.Z,{expandIcon:r.createElement(A,null)},"Actions"),r.createElement(T.Z,null,r.createElement(b.PC,null,r.createElement(b.F9,null,r.createElement(d.default,{href:(0,O.Qe)(s,"/contacts")},r.createElement("a",{className:l("action-menu__trigger")},"View Profile"))),r.createElement(b.F9,null,r.createElement(z,{className:l("action-menu__trigger","danger"),onDelete:a,name:o,webId:c}))))),r.createElement(F.ZP,null))}X.defaultProps={selectedContactName:null};var Y=n(10150),K=n(59499);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,K.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){return(0,p.createStyles)(e,[],{"icon-large":R(R({},e.icons.iconColor("#0D6796")),{},{fontSize:64})})},q=(0,m.Z)((function(e){return(0,Y.Z)(U(e))}));function H(){var e=(0,p.useBem)(q());return r.createElement(b.VY,null,r.createElement(b.W2,{variant:"empty"},r.createElement(b.PJ,{name:"user-astronaut",className:e("icon-large")}),r.createElement("h1",null,"You don\u2019t have any contacts yet!"),r.createElement("p",null,"Add a new contact to share files with."),r.createElement(d.default,{href:"/contacts/add"},r.createElement(b.Qj,{"data-testid":"add-new-contact-button",variant:"small",iconBefore:"add"},"Add new contact"))))}var Q=(0,m.Z)((function(e){return(0,f.Z)(x(e))}));var V=function(e){var t=e.value,n=e.row;return r.createElement(D.Z,{altText:n.values.col1,imageUrl:t})};V.defaultProps={value:null,row:null};var G=function(){(0,o.KW)();var e=b.iA.useTableClass("table","inherits"),t=Q(),n=(0,p.useBem)(t),a=b.mr.usePageHeaderActionClassName(),l=(0,r.useState)(""),f=l[0],m=l[1],x=(0,C.Z)(),D=(0,c.Z)(x,2),N=D[0],I=D[1],T=(0,P.Z)(N,h.ay.Person),A=T.data,j=T.error,B=T.mutate,M=function(e){var t=(0,r.useState)(null),n=t[0],a=t[1],o=(0,y.useSession)().session.fetch;return(0,r.useEffect)((function(){e?(0,s.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,k.cp)(e,o);case 2:n=t.sent,a(n);case 4:case"end":return t.stop()}}),t)})))():a(null)}),[o,e]),n}(A),W=h.ay.name,z=h.w_.hasPhoto,F=(0,y.useSession)().session.fetch,Y=(0,r.useState)(null),K=Y[0],L=Y[1],R=(0,r.useState)(""),U=R[0],q=R[1],G=(0,r.useState)(""),J=G[0],$=G[1];if((0,r.useEffect)((function(){var e,t;if(null!==K){var n=null===(e=A[K])||void 0===e?void 0:e.dataset,r=null===(t=A[K])||void 0===t?void 0:t.iri,a=(0,v.YY)(n,r),o=(0,k.d)(n,r),c=(0,E.oX)(a,W)||(0,E.oX)(a,h.w_.fn)||o;q(c),$(o)}}),[K,W,A,F]),I)return I;if(j)return j;if(!N||!A||!M)return r.createElement(w.Z,null);var ee=M.map((function(e){return{thing:e,dataset:N}})),te=function(e){return function(){return e(null)}}(L),ne=function(e){var t=e.addressBook,n=e.closeDrawer,r=e.fetch,a=e.people,o=e.peopleMutate,c=e.selectedContactIndex;return(0,s.Z)(u().mark((function e(){var s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a[c],e.next=3,(0,k.GK)((0,g.LH)(t),s,h.ay.Person,r);case 3:o(),n();case 5:case"end":return e.stop()}}),e)})))}({addressBook:N,closeDrawer:te,fetch:F,people:A,peopleMutate:B,selectedContactIndex:K}),re=r.createElement(X,{open:null!==K,onClose:te,onDelete:ne,selectedContactName:U,profileIri:J,selectedContactWebId:J});return r.createElement(_.X,{setSearch:m},r.createElement(b.mr,{title:"Contacts",actions:[r.createElement(d.default,{href:"/contacts/add"},r.createElement("a",{className:a},"Add new contact"))]},r.createElement(S.ZP,{people:M})),ee.length?r.createElement(b.qt,{drawer:re,open:null!==K},r.createElement(y.Table,{things:ee,className:(0,i.Z)(e,n("table")),filter:f,ascIndicator:r.createElement(Z.Z,{sorted:!0}),descIndicator:r.createElement(Z.Z,{sorted:!0,sortedDesc:!0}),getRowProps:function(e,t){return{tabIndex:"0",className:(0,i.Z)(n("table__body-row","selectable",t===M[K]?"selected":null)),onKeyUp:function(t){"Enter"===t.key&&L(e.index)},onClick:function(){L(e.index)}}}},r.createElement(y.TableColumn,{property:z,header:"",dataType:"url",body:V}),r.createElement(y.TableColumn,{property:W,header:"Name",filterable:!0,sortable:!0,body:O.ZP}))):r.createElement(H,null))};function J(){return(0,o.KW)(),r.createElement(a.g9,null,r.createElement(G,null))}function $(){return r.createElement(J,null)}},98258:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(50029),a=n(87794),o=n.n(a),c=n(67294),s=n(40478),l=n(44770),u=n(38603),i=n(28e3),d=n(55612),f=n(16448);function m(){var e=(0,c.useState)(null),t=e[0],n=e[1],a=(0,c.useState)(null),m=a[0],p=a[1],b=(0,s.useSession)().session,g=(0,l.Z)().data,v=(0,f.Z)();return(0,c.useEffect)((function(){if(b.info.isLoggedIn&&g&&v){var e=g.webId,t=b.fetch,a=(0,u.kd)(v);(0,r.Z)(o().mark((function r(){var c,s,l,f,m,b;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,i.RX)(a,t);case 2:if(c=r.sent,s=c.response,l=c.error,!s){r.next=8;break}return n(s.dataset),r.abrupt("return");case 8:if(!l||!(0,d.ky)(l,d.O1.NOT_FOUND)){r.next=19;break}return r.next=11,(0,u.cR)({iri:v,owner:e},t);case 11:if(f=r.sent,m=f.response,!(b=f.error)){r.next=17;break}return p(b),r.abrupt("return");case 17:return n(m.index),r.abrupt("return");case 19:p(l);case 20:case"end":return r.stop()}}),r)})))()}}),[b,g,v]),[t,m]}},16448:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(40478),o=n(44770),c=n(38603);function s(){var e=(0,r.useState)(null),t=e[0],n=e[1],s=(0,a.useSession)().session,l=(0,o.Z)().data;return(0,r.useEffect)((function(){if(s.info.isLoggedIn&&l){var e=l.pods;n((0,c.I6)(e[0]))}}),[l,s.info.isLoggedIn]),t}},51059:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(50029),a=n(87794),o=n.n(a),c=n(35345),s=n(40478),l=n(38603);function u(e,t){var n=(0,s.useSession)().session.fetch;return(0,c.ZP)(e,(0,r.Z)(o().mark((function r(){var a,c,s,u,i,d,f;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=l.zY[t].indexFilePredicate,c=l.zY[t].contactTypeIri,r.next=4,(0,l.ml)(e,a,n);case 4:return s=r.sent,u=s.response,r.next=8,(0,l.K2)(u,c,n);case 8:if(i=r.sent,d=i.response,!(f=i.error)){r.next=13;break}throw f;case 13:return r.abrupt("return",d);case 14:case"end":return r.stop()}}),r)}))),{refreshInterval:0})}},19930:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return n(34653)}])}},function(e){e.O(0,[224,706,823,547,33,537,888,774,179],(function(){return t=19930,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=contacts-6317ce130353c397.js.map