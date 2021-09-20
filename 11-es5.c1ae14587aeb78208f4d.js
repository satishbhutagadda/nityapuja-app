!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"ct+p":function(t,o,i){"use strict";i.r(o),i.d(o,"HomePageModule",(function(){return k}));var a,r,b,c,u=i("ofXK"),l=i("TEn/"),s=i("3Pt+"),g=i("tyNb"),f=i("fXoL"),m=i("tk/3"),p=((a=function(){function t(e){n(this,t),this.http=e}return e(t,[{key:"getData",value:function(){return this.http.get("https://jsonplaceholder.typicode.com/users")}}]),t}()).\u0275fac=function(n){return new(n||a)(f.Nb(m.a))},a.\u0275prov=f.Db({token:a,factory:a.\u0275fac,providedIn:"root"}),a),h=function(){return["/grid-card"]},d=function(){return["/multiple-choice"]},K=function(){return["/form"]},J=[{path:"",component:(r=function(){function t(e,o,i){n(this,t),this.menu=e,this.hs=o,this.navCtrl=i,this.pageTitle="Nitya Puja"}return e(t,[{key:"ngOnInit",value:function(){this.getData()}},{key:"getData",value:function(){var n=this;this.hs.getData().subscribe((function(t){console.log(t),n.data=t}))}},{key:"openFirst",value:function(){this.menu.enable(!0,"first"),this.menu.open("first")}},{key:"setLanguage",value:function(){console.log("languageSelected",this.languageSelected)}}]),t}(),r.\u0275fac=function(n){return new(n||r)(f.Hb(l.G),f.Hb(p),f.Hb(l.H))},r.\u0275cmp=f.Bb({type:r,selectors:[["app-home"]],decls:46,vars:12,consts:[["color","primary"],["slot","start"],["name","menu"],["side","start","menuId","first","contentId","main"],["id","grid-card-menu",3,"routerLink"],["id","multiple-choice-menu",3,"routerLink"],["id","form-menu",3,"routerLink"],["id","main"],[1,"ion-padding"],[1,"mb-3"],["slot","end"],[3,"ngModel","ngModelChange","ionChange"],["value","telugu"],["value","tamil"],["value","kannada"],["button","",3,"routerLink"],["slot","start","name","logo-angular",2,"color","#E63135"]],template:function(n,t){1&n&&(f.Kb(0,"ion-header"),f.Kb(1,"ion-toolbar",0),f.Kb(2,"ion-buttons",1),f.Kb(3,"ion-menu-button"),f.Ib(4,"ion-icon",2),f.Jb(),f.Jb(),f.Kb(5,"ion-title"),f.ac(6,"Nitya Puja"),f.Jb(),f.Jb(),f.Jb(),f.Kb(7,"ion-menu",3),f.Kb(8,"ion-header"),f.Kb(9,"ion-toolbar",0),f.Kb(10,"ion-title"),f.ac(11,"Menu"),f.Jb(),f.Jb(),f.Jb(),f.Kb(12,"ion-content"),f.Kb(13,"ion-list"),f.Kb(14,"ion-item",4),f.ac(15,"Grid Card"),f.Jb(),f.Kb(16,"ion-item",5),f.ac(17,"Multiple Choice"),f.Jb(),f.Kb(18,"ion-item",6),f.ac(19,"Form"),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Ib(20,"ion-router-outlet",7),f.Kb(21,"ion-content",8),f.Kb(22,"h2"),f.ac(23,"Welcome!"),f.Jb(),f.Kb(24,"div",9),f.Kb(25,"ion-item",10),f.Kb(26,"ion-label"),f.ac(27,"Choose Language"),f.Jb(),f.Kb(28,"ion-select",11),f.Rb("ngModelChange",(function(n){return t.languageSelected=n}))("ionChange",(function(){return t.setLanguage()})),f.Kb(29,"ion-select-option",12),f.ac(30,"Telugu"),f.Jb(),f.Kb(31,"ion-select-option",13),f.ac(32,"Tamil"),f.Jb(),f.Kb(33,"ion-select-option",14),f.ac(34,"Kannada"),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Kb(35,"ion-list"),f.Kb(36,"ion-item",15),f.Ib(37,"ion-icon",16),f.Kb(38,"ion-label"),f.Kb(39,"h2"),f.ac(40),f.Jb(),f.Jb(),f.Jb(),f.Kb(41,"ion-item",15),f.Ib(42,"ion-icon",16),f.Kb(43,"ion-label"),f.Kb(44,"h2"),f.ac(45,"Special Puja"),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb()),2&n&&(f.xb(14),f.Vb("routerLink",f.Wb(7,h)),f.xb(2),f.Vb("routerLink",f.Wb(8,d)),f.xb(2),f.Vb("routerLink",f.Wb(9,K)),f.xb(10),f.Vb("ngModel",t.languageSelected),f.xb(8),f.Vb("routerLink",f.Wb(10,h)),f.xb(4),f.bc(t.pageTitle),f.xb(1),f.Vb("routerLink",f.Wb(11,K)))},directives:[l.l,l.D,l.c,l.t,l.m,l.C,l.s,l.i,l.r,l.p,l.K,g.h,l.w,l.q,l.y,l.L,s.d,s.e,l.z],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.my-custom-menu[_ngcontent-%COMP%]{--width:500px}.mb-3[_ngcontent-%COMP%]{margin-bottom:3rem}"]}),r)}],y=((c=function t(){n(this,t)}).\u0275mod=f.Fb({type:c}),c.\u0275inj=f.Eb({factory:function(n){return new(n||c)},imports:[[g.i.forChild(J)],g.i]}),c),k=((b=function t(){n(this,t)}).\u0275mod=f.Fb({type:b}),b.\u0275inj=f.Eb({factory:function(n){return new(n||b)},imports:[[u.b,s.a,l.E,y]]}),b)}}])}();