"use strict";(self.webpackChunkbakistan=self.webpackChunkbakistan||[]).push([[681],{9681:(e,a,t)=>{t.r(a),t.d(a,{default:()=>N});var n=t(5043),i=t(2880),s=t(7196),l=t(3892),r=t(899),c=t(7154),m=t(9793),o=t(8292),d=t(579);function N(e){let{HandleShow:a,ID:t,refetch:N}=e;const[u,h]=(0,n.useState)(!1),p=r.Ik({NewName:r.Yj().required("Add new name is required")}),b=(0,l.Wx)({initialValues:{NewName:""},validationSchema:p,onSubmit:async e=>{h(!0),await c.A.patch("".concat(o.D,"/app/Update/").concat(t),{key:"name",result:e.NewName},{headers:{token:m.s.get("token")}}).then((e=>{h(!1),N(),a()})).catch((e=>{console.log(e)}))}});return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(i.P.div,{className:"popupName",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,type:"spring"},children:(0,d.jsxs)(i.P.div,{className:"Nameform",initial:{opacity:0},animate:{opacity:1},transition:{duration:1,type:"spring"},children:[(0,d.jsx)("div",{className:"close align-self-end",children:(0,d.jsx)(s.qFd,{onClick:a})}),(0,d.jsxs)("form",{className:"mt-5",onSubmit:b.handleSubmit,children:[(0,d.jsx)("label",{htmlFor:"NewName",children:"New Name"}),(0,d.jsx)("input",{type:"text",className:"form-control",id:"NewName",name:"NewName",onChange:b.handleChange,onBlur:b.handleBlur}),b.errors.NewName&&b.touched.NewName?(0,d.jsx)("div",{className:"alert alert-danger py-2 mt-2",children:b.errors.NewName}):null,u?(0,d.jsx)("button",{type:"button",className:"btn bg-main text-light mt-2",children:(0,d.jsx)("i",{className:"fas fa-spinner fa-spin "})}):(0,d.jsx)("button",{className:"btn mt-3",type:"submit",children:"Submit"})]})]})})})}}}]);
//# sourceMappingURL=681.09d4215b.chunk.js.map