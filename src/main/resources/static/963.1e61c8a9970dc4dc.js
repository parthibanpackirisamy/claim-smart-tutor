"use strict";(self.webpackChunkclaim_smart_tutor=self.webpackChunkclaim_smart_tutor||[]).push([[963],{5963:(X,f,i)=>{i.r(f),i.d(f,{AdminLayoutModule:()=>$});var M=i(747),_=i(6895),C=i(433),m=i(6308),c=i(5717);class k{constructor(o,e,r,a,s,l){this.Type=o,this.Shipper=e,this.Address=r,this.Date=a,this.Time=s,this.Status=l}}var d=i(5412),p=i(529),n=i(1571);new p.WM({"Content-Type":"text/plain"});let S=(()=>{class t{constructor(e){this.http=e}getPredictionDescription(e,r){const a=new p.WM({"Content-Type":"text/plain"});return this.http.get("https://claim-smart-tutor-isbgcrdsna-uc.a.run.app/getInstruction?key="+e+"&type="+r,{headers:a,responseType:"text"})}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(p.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=i(4859),g=i(3546);const x=["myTblPgn"];function A(t,o){1&t&&(n.TgZ(0,"th",20),n._uU(1,"Type"),n.qZA())}function P(t,o){if(1&t&&(n.TgZ(0,"td",21),n._uU(1),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.hij("",e.Type," ")}}function y(t,o){1&t&&(n.TgZ(0,"th",20),n._uU(1,"Shipper"),n.qZA())}function Z(t,o){if(1&t&&(n.TgZ(0,"td",21),n._uU(1),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.hij("",e.Shipper," ")}}function w(t,o){1&t&&(n.TgZ(0,"th",20),n._uU(1,"Address"),n.qZA())}function O(t,o){if(1&t&&(n.TgZ(0,"td",21),n._uU(1),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.hij(" ",e.Address," ")}}function R(t,o){1&t&&(n.TgZ(0,"th",20),n._uU(1,"Date"),n.qZA())}function N(t,o){if(1&t&&(n.TgZ(0,"td",21),n._uU(1),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.hij(" ",e.Date," ")}}function U(t,o){1&t&&(n.TgZ(0,"th",20),n._uU(1,"Time"),n.qZA())}function B(t,o){if(1&t&&(n.TgZ(0,"td",21),n._uU(1),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.hij(" ",e.Time," ")}}function Y(t,o){1&t&&(n.TgZ(0,"th",20),n._uU(1,"Status"),n.qZA())}function J(t,o){if(1&t){const e=n.EpF();n.TgZ(0,"td",22),n.NdJ("click",function(){const s=n.CHM(e).$implicit,l=n.oxw();return n.KtG(l.openDialog(s))}),n._uU(1),n.qZA()}if(2&t){const e=o.$implicit;n.xp6(1),n.hij(" ",e.Status," ")}}function j(t,o){1&t&&n._UZ(0,"tr",23)}function H(t,o){1&t&&n._UZ(0,"tr",24)}let L=(()=>{class t{constructor(e,r,a){this.dialog=e,this.backendService=r,this.cdr=a,this.displayedColumns=["Type","Shipper","Address","Date","Time","Status"],this.packageMovements=[],this.dataSource=new c.by,this.jsonDatas=[],this.dataSource=new c.by,this.trackingDetails={TrackingNumber:"",ServiceLevel:"",ScheduledDeliveryDate:"",EstimatedDeliveryTime:"",PackageMovement:null},this.data={ResponseFor:"",ResponseString:""}}ngOnInit(){this.setBasicDetails(),this.setPackageMovementDetails(),console.log(this.trackingDetails)}setBasicDetails(){this.trackingDetails.TrackingNumber="1ZJH508567ABCDEFGH",this.trackingDetails.ServiceLevel="WORLDWIDE SERVICES",this.trackingDetails.ScheduledDeliveryDate="Not Available",this.trackingDetails.EstimatedDeliveryTime="11:45 AM - 3:45 PM"}setBasic5678Details(){this.trackingDetails.TrackingNumber="1ZJH508567PQRSTUVW",this.trackingDetails.ServiceLevel="WORLDWIDE SERVICES",this.trackingDetails.ScheduledDeliveryDate="Not Available",this.trackingDetails.EstimatedDeliveryTime="11:45 AM - 3:45 PM"}setPackageMovementDetails(){this.setTracking1234List(),this.dataSource=new c.by(this.packageMovements),this.cdr.detectChanges(),console.log(this.dataSource)}setPackageMovementDetails5678(){this.setTracking5678List(),this.dataSource=new c.by(this.packageMovements),this.cdr.detectChanges(),console.log(this.dataSource)}clearDataSource(){this.dataSource.data=[]}setTracking1234List(){this.addPackageMovement("SCAN","JH5086","Address2","2024-07-12","11:00 AM","No tracking information found"),this.addPackageMovement("SCAN","JH5087","Address3","2024-07-12","11:00 AM","Package has been voided"),this.addPackageMovement("SCAN","JH5087","Address4","2024-07-12","11:00 AM","Claim exists or is open"),this.addPackageMovement("SCAN","JH5085","Address1","2024-07-11","10:00 AM","COD - Payment has been collected")}setTracking5678List(){this.addPackageMovement("SCAN","JH5086","Address2","2024-07-12","11:00 AM","COD - Role of initiator is not shipper"),this.addPackageMovement("SCAN","JH5087","Address3","2024-07-12","11:00 AM","Manifest Only / Recepient"),this.addPackageMovement("SCAN","JH5087","Address4","2024-07-12","11:00 AM","Shipper Restrictions exist in CRIS/ICRIS"),this.addPackageMovement("SCAN","JH5085","Address1","2024-07-11","10:00 AM","Fraud Indicator")}onClickShowDiffTracking(e){if(this.packageMovements=[],this.packageMovements.length=0,"1ZJH508567PQRSTUVW"==e){this.setBasicDetails(),this.setTracking1234List();let r=this.packageMovements;this.clearDataSource(),this.dataSource=new c.by(r),this.cdr.detectChanges(),console.log(this.dataSource)}else if("1ZJH508567ABCDEFGH"==e){this.setBasic5678Details(),this.setTracking5678List();let r=this.packageMovements;this.clearDataSource(),this.dataSource=new c.by(r),this.cdr.detectChanges(),console.log(this.dataSource)}}addPackageMovement1(e,r,a,s,l,u){const h=new k(e,r,a,s,l,u);this.packageMovements.push(h)}addPackageMovement(e,r,a,s,l,u){const h=new k(e,r,a,s,l,u);this.packageMovements.push(h)}openDialog(e){this.dialog.open(I,{data:e}).afterClosed().subscribe(a=>{console.log("The dialog was closed "+a),"Cancel"!==a&&this.backendService.getPredictionDescription(e.Status,a).subscribe(s=>{console.log("response form bakcend API "+s),this.data.ResponseString=s,this.data.ResponseFor=a,this.dialog.open(T,{data:this.data})},s=>{this.dialog.open(T,{data:"error occured"}),console.log(s),console.log("error in backend API "+s)})})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(d.uw),n.Y36(S),n.Y36(n.sBO))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-dashboard"]],viewQuery:function(e,r){if(1&e&&(n.Gf(x,5),n.Gf(m.YE,5)),2&e){let a;n.iGM(a=n.CRH())&&(r.paginator=a.first),n.iGM(a=n.CRH())&&(r.sort=a.first)}},decls:47,vars:7,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"jobs-detail-div"],[2,"display","flex","flex-direction","row-reverse"],["mat-raised-button","","color","primary",1,"custom-button",2,"background-color","#351C15","color","white","border","none","padding","5px 10px","cursor","pointer","border-radius","4px","font-size","14px","margin","5px","line-height","24px","width","auto",3,"click"],["mat-table","","matSort","",1,"table-style","mat-elevation-z8","auto-width-table",3,"dataSource"],["matColumnDef","Type"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Shipper"],["matColumnDef","Address"],["matColumnDef","Date"],["matColumnDef","Time"],["matColumnDef","Status"],["mat-cell","","class","status-field",3,"click",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"status-field",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,r){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"mat-card",5)(6,"div",6)(7,"button",7),n.NdJ("click",function(){return r.onClickShowDiffTracking(null==r.trackingDetails?null:r.trackingDetails.TrackingNumber)}),n._uU(8,"Show Another Tracking"),n.qZA()(),n.TgZ(9,"mat-card-header")(10,"mat-card-subtitle")(11,"b"),n._uU(12,"Tracking Number"),n.qZA(),n._uU(13),n.qZA(),n.TgZ(14,"mat-card-subtitle")(15,"b"),n._uU(16,"Service Level"),n.qZA(),n._uU(17),n.qZA(),n.TgZ(18,"mat-card-subtitle")(19,"b"),n._uU(20,"Scheduled Delivery Date"),n.qZA(),n._uU(21),n.qZA(),n.TgZ(22,"mat-card-subtitle")(23,"b"),n._uU(24,"Estimated Delivery Time"),n.qZA(),n._uU(25),n.qZA()()()(),n.TgZ(26,"table",8),n.ynx(27,9),n.YNc(28,A,2,0,"th",10),n.YNc(29,P,2,1,"td",11),n.BQk(),n.ynx(30,12),n.YNc(31,y,2,0,"th",10),n.YNc(32,Z,2,1,"td",11),n.BQk(),n.ynx(33,13),n.YNc(34,w,2,0,"th",10),n.YNc(35,O,2,1,"td",11),n.BQk(),n.ynx(36,14),n.YNc(37,R,2,0,"th",10),n.YNc(38,N,2,1,"td",11),n.BQk(),n.ynx(39,15),n.YNc(40,U,2,0,"th",10),n.YNc(41,B,2,1,"td",11),n.BQk(),n.ynx(42,16),n.YNc(43,Y,2,0,"th",10),n.YNc(44,J,2,1,"td",17),n.BQk(),n.YNc(45,j,1,0,"tr",18),n.YNc(46,H,1,0,"tr",19),n.qZA()()()()()),2&e&&(n.xp6(13),n.hij(": ",null==r.trackingDetails?null:r.trackingDetails.TrackingNumber,""),n.xp6(4),n.hij(": ",null==r.trackingDetails?null:r.trackingDetails.ServiceLevel," "),n.xp6(4),n.hij(" : ",null==r.trackingDetails?null:r.trackingDetails.ScheduledDeliveryDate," "),n.xp6(4),n.hij(": ",null==r.trackingDetails?null:r.trackingDetails.EstimatedDeliveryTime," "),n.xp6(1),n.Q6J("dataSource",r.dataSource),n.xp6(19),n.Q6J("matHeaderRowDef",r.displayedColumns),n.xp6(1),n.Q6J("matRowDefColumns",r.displayedColumns))},dependencies:[v.lW,g.a8,g.dk,g.$j,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,m.YE],styles:[".example-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .mat-table[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  \r\n  .dashboard-content[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    margin-left: 2%;\r\n  }\r\n  \r\n  .spinner-div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: calc(80vh - 10px);\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .wrapper-div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 0;\r\n  }\r\n  \r\n  th.mat-header-cell[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .table-section[_ngcontent-%COMP%] {\r\n    width: 98%;\r\n    padding-top: 20px;\r\n  }\r\n  \r\n  \r\n  \r\n  th.mat-header-cell[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: #fff;\r\n    width: 20%;\r\n  }\r\n  \r\n  td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\r\n    padding: 8px !important;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  tr.mat-row[_ngcontent-%COMP%]:hover {\r\n    background-color: #ececff;\r\n  }\r\n  \r\n  tr.mat-header-row[_ngcontent-%COMP%] {\r\n    height: 56px;\r\n    background-color:  #351c15;\r\n  }\r\n  \r\n  .job-name[_ngcontent-%COMP%]:hover {\r\n    font-weight: bold !important;\r\n  }\r\n  \r\n  \r\n  \r\n  .desktop-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background-color: white;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n  }\r\n  \r\n  .bqjobs-title[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #030303e7;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .job-name-heading[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    color: #030303e7;\r\n    margin-top: 18px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .job-name[_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: none;\r\n    word-break: break-word;\r\n    \r\n    text-align: left;\r\n  }\r\n  \r\n    .mat-sort-header-arrow {\r\n    color: #fff !important;\r\n    opacity: 1 !important;\r\n    transform: translateY(5%) !important;\r\n  }\r\n  \r\n  \r\n  \r\n  .right-options[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    align-items: center !important;\r\n  }\r\n  \r\n  .table-style[_ngcontent-%COMP%] {\r\n    \r\n    margin-right: 10px;\r\n  }\r\n  \r\n  .card-header-maroon[_ngcontent-%COMP%] {\r\n    background-color: #351c15;\r\n  }\r\n  \r\n  \r\n  \r\n    .mat-form-field-appearance-standard .mat-form-field-underline {\r\n    background-color: #351c15;\r\n  }\r\n  \r\n    .mat-form-field-appearance-standard .mat-form-field-underline .mat-form-field-ripple {\r\n    background-color:  #351c15;\r\n  }\r\n  \r\n  \r\n  \r\n  .mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\r\n    color:  #351c15;\r\n    \r\n  }\r\n  \r\n  \r\n  \r\n  .mat-form-field-appearance-standard.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\r\n    color:  #351c15;\r\n    \r\n  }\r\n  \r\n  .mat-label-cls[_ngcontent-%COMP%] {\r\n    color:  #351c15;\r\n  }\r\n  \r\n  .mat-input-element[_ngcontent-%COMP%] {\r\n    caret-color:  #351c15;\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    \r\n    align-items: flex-start;\r\n    \r\n    \r\n  }\r\n  \r\n  .label[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    padding: .2em .6em .3em;\r\n    font-size: 75%;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: #fff;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: baseline;\r\n    border-radius: .25em;\r\n  }\r\n  \r\n  .label-success[_ngcontent-%COMP%] {\r\n    background-color: #5cb85c;\r\n  }\r\n  \r\n  .label-danger[_ngcontent-%COMP%] {\r\n    background-color: #d9534f;\r\n  }\r\n  \r\n  .mat-sort-header[_ngcontent-%COMP%] {\r\n    font-weight: 300 !important;\r\n  }\r\n  \r\n  .table_nav[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    padding: 0%;\r\n    color:  351c15;\r\n  }\r\n  \r\n  .table_nav[_ngcontent-%COMP%]:hover {\r\n    font-weight: bold !important;\r\n  }\r\n  \r\n  .table_nav_a[_ngcontent-%COMP%] {\r\n    margin-bottom: auto;\r\n  }\r\n  \r\n  .custom-button[_ngcontent-%COMP%] {\r\n    background-color:  351c15;\r\n    color: white;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    margin-left: 10px;\r\n    line-height: inherit;\r\n  }\r\n  \r\n  .custom-button[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n  }\r\n  \r\n  .auto-width-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    table-layout: auto;\r\n  }\r\n  \r\n  .auto-width-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .auto-width-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n  }\r\n  \r\n  .status-field[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    padding: 0%;\r\n    color:  351c15;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .status-field[_ngcontent-%COMP%]:hover {\r\n    font-weight: bold !important;\r\n  }\r\n  \r\n  .custom-button[_ngcontent-%COMP%] {\r\n    background-color: #351C15;\r\n    color: white;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    margin : 5px;\r\n    width: 60px;\r\n    line-height: 24px;\r\n  }\r\n  \r\n  .custom-button[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n  }"]}),t})(),I=(()=>{class t{constructor(e,r){this.dialogRef=e,this.data=r}ngOnInit(){}onClickButton(e){this.dialogRef.close(e)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(d.so),n.Y36(d.WI))},t.\u0275cmp=n.Xpm({type:t,selectors:[["status-dialog"]],decls:11,vars:0,consts:[[2,"display","flex","flex-direction","row-reverse","cursor","pointer"],[1,"material-icons","close_icon",3,"click"],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-raised-button","","color","primary",1,"custom-button",2,"background-color","#351C15","color","white","border","none","padding","5px 10px","cursor","pointer","border-radius","4px","font-size","14px","margin","5px","line-height","24px",3,"click"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0)(1,"i",1),n.NdJ("click",function(){return r.onClickButton("Cancel")}),n._uU(2,"close"),n.qZA()(),n.TgZ(3,"div",2)(4,"p"),n._uU(5,"Who is looking for this data? "),n.qZA()(),n.TgZ(6,"div",3)(7,"button",4),n.NdJ("click",function(){return r.onClickButton("Shipper")}),n._uU(8,"Shipper"),n.qZA(),n.TgZ(9,"button",4),n.NdJ("click",function(){return r.onClickButton("Receiver")}),n._uU(10,"Receiver"),n.qZA()())},encapsulation:2}),t})(),T=(()=>{class t{constructor(e,r){this.dialogRef1=e,this.data=r}ngOnInit(){console.log(this.data)}onClickButton(e){this.dialogRef1.close(e)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(d.so),n.Y36(d.WI))},t.\u0275cmp=n.Xpm({type:t,selectors:[["response-dialog"]],decls:8,vars:2,consts:[[2,"display","flex","flex-direction","row-reverse","cursor","pointer"],[1,"material-icons","close_icon",3,"click"],["mat-dialog-title",""],["mat-dialog-content",""]],template:function(e,r){1&e&&(n.TgZ(0,"div",0)(1,"i",1),n.NdJ("click",function(){return r.onClickButton("Cancel")}),n._uU(2,"close"),n.qZA()(),n.TgZ(3,"h3",2),n._uU(4),n.qZA(),n.TgZ(5,"div",3)(6,"p"),n._uU(7),n.qZA()()),2&e&&(n.xp6(4),n.hij("Message to ",r.data.ResponseFor," !"),n.xp6(3),n.Oqu(r.data.ResponseString))},encapsulation:2}),t})();const E=[{path:"tracking",component:L}];var b=i(4144),z=i(3238),D=i(9549),Q=i(266),W=i(4385),F=i(1516),q=i(1481),G=i(8739);let $=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[_.ez,M.Bz.forChild(E),C.u5,C.UX,v.ot,z.si,D.lN,b.c,W.LD,Q.AV,q.b2,F.PW,b.c,D.lN,g.QW,c.p0,G.TU,m.JX,d.Is]}),t})()}}]);