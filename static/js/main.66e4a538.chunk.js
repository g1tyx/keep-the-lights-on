(this["webpackJsonpkeep-the-lights-on"]=this["webpackJsonpkeep-the-lights-on"]||[]).push([[0],{99:function(e,t,a){"use strict";a.r(t);var r,s=a(120),n=a(0),c=a.n(n),i=a(24),o=a.n(i),l=a(29),d=a(125),u=a(49),h=a(115),b=a(118),j=a(119),x=a(111),m=a(126),O=a(113),p=a(18),f=function(e){return p.a.fromMantissaExponent(e.man,e.exp)},y=function(e){var t=new p.a(e);return{man:t.mantissa,exp:t.exponent}},v=function(e,t){return y(p.a.add(f(e),f(t)))},g=function(e,t){return y(p.a.subtract(f(e),f(t)))},w=function(e,t){return y(p.a.multiply(f(e),f(t)))},P=function(e,t){return y(p.a.divide(f(e),f(t)))},S=function(e,t){return y(p.a.max(f(e),f(t)))},C=function(e,t){return y(p.a.min(f(e),f(t)))},A=function(e,t){return p.a.compare(f(e),f(t))},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=f(e);return a.lt(new p.a(1e4))?a.trunc().eq(a)?a.toFixed(0):a.toFixed(t):a.toExponential(3)},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=f(e);return a.lt(new p.a(1e3))?t&&a.trunc().eq(a)?a.toFixed(0):a.toFixed(2):a.toExponential(3)},I=a(53),k=a(12);!function(e){e.hamsters="hamsters",e.pinwheels="pinwheels",e.bicycle="bicycle"}(r||(r={}));var R,E={hamsters:{name:"Hamster",colorText:"Watch those little legs go!",baseCost:y(.25),costOfNthGenerator:function(e){return y(.25*e)}},pinwheels:{name:"Pinwheel",colorText:"One day you'll build a great wind farm.",baseCost:y(2),costOfNthGenerator:function(e){return y(2*e)}},bicycle:{name:"Human-powered Bicycle",colorText:"You can make it up the hill, just keep pedaling!",baseCost:y(20),costOfNthGenerator:function(e){return y(5*(e-1)+20)}}},z=Object.keys(r).sort((function(e,t){return A(E[e].baseCost,E[t].baseCost)})),T={hamsters:{numberOwned:0,wattsPerDay:y(.5),nextPurchaseCost:E.hamsters.baseCost},pinwheels:{numberOwned:0,wattsPerDay:y(2),nextPurchaseCost:E.pinwheels.baseCost},bicycle:{numberOwned:0,wattsPerDay:y(10),nextPurchaseCost:E.pinwheels.baseCost}},W=function(e,t){return-1!==A(e,t.nextPurchaseCost)};!function(e){e.juniorResearchAssistant="juniorResearchAssistant",e.researchAssistant="researchAssistant"}(R||(R={}));var H,N={juniorResearchAssistant:{name:"Junior Research Assistant",colorText:"Maybe recruiting your 12 year old cousin wasn't the best idea.",baseCost:y(5),costOfNthResearcher:function(e){return y(2*e+3)}},researchAssistant:{name:"Research Assistant",colorText:"The honors students from your high school are interested in your project. They might be helpful.",baseCost:y(25),costOfNthResearcher:function(e){return y(10*e+15)}}},M=Object.keys(R).sort((function(e,t){return A(N[e].baseCost,N[t].baseCost)})),$={juniorResearchAssistant:{numberEmployed:0,ideasPerDay:y(.5),nextPurchaseCost:N.juniorResearchAssistant.baseCost},researchAssistant:{numberEmployed:0,ideasPerDay:y(3),nextPurchaseCost:N.researchAssistant.baseCost}},F=function(e,t){return-1!==A(e,t.nextPurchaseCost)},q={daysElapsed:y(0),ticksPerDay:16,cashAvailable:y(1),maxCashAvailable:y(0),totalCashEarned:y(0),cashEarnedPerDay:y(0),homesPowered:y(0),homesInPowerGrid:y(1),wattsUsedPerHomePerDay:y(20),pricePerWatt:y(.03),wattsGeneratedPerDay:y(0),totalWattsSold:y(0),ideasAvailable:y(0),maxIdeasAvailable:y(0),totalIdeasGenerated:y(0),ideasGeneratedPerDay:y(0)},J=function(e){var t=e.ticksPerDay,a=e.homesInPowerGrid,r=e.wattsUsedPerHomePerDay,s=e.wattsGeneratedPerDay,n=C(s,w(a,r));return P(n,y(t))},U=function(e,t){var a=function(e,t){var a=e.daysElapsed;return t%e.ticksPerDay===0?v(a,y(1)):a}(e,t),r=function(e){var t=e.pricePerWatt;return w(J(e),t)}(e),s=v(e.cashAvailable,r),n=v(e.totalCashEarned,r),c=S(s,e.maxCashAvailable),i=function(e){var t=e.ticksPerDay,a=e.ideasGeneratedPerDay;return P(a,y(t))}(e),o=v(e.ideasAvailable,i),l=v(e.totalIdeasGenerated,i),d=S(o,e.maxIdeasAvailable),u=v(e.totalWattsSold,J(e));return Object(k.a)(Object(k.a)({},e),{},{daysElapsed:a,cashAvailable:s,maxCashAvailable:c,totalCashEarned:n,ideasAvailable:o,maxIdeasAvailable:d,totalIdeasGenerated:l,totalWattsSold:u})},B=function(e,t,a){var r,s=function(e){return Object.values(e).reduce((function(e,t){return v(e,w(y(t.numberOwned),t.wattsPerDay))}),y(0))}(t),n=C(s,w(e.homesInPowerGrid,e.wattsUsedPerHomePerDay)),c=w(n,e.pricePerWatt),i=C(e.homesInPowerGrid,P(s,e.wattsUsedPerHomePerDay)),o=(r=a,Object.values(r).reduce((function(e,t){return v(e,w(y(t.numberEmployed),t.ideasPerDay))}),y(0)));return Object(k.a)(Object(k.a)({},e),{},{cashEarnedPerDay:c,homesPowered:i,wattsGeneratedPerDay:s,ideasGeneratedPerDay:o})},L=function(e,t){var a=g(e.cashAvailable,t);return e.cashAvailable=a,e};!function(e){e.expandGrid1="expandGrid1",e.expandGrid2="expandGrid2"}(H||(H={}));var Y,K=[{identifier:H.expandGrid1,name:"Power the Street",description:"Expand your power grid to provide power to your whole street",cost:y(100),requiresResearchProjects:[],applyResearch:function(e){return e.currentStatistics.homesInPowerGrid=y(10),e}},{identifier:H.expandGrid2,name:"Power the Neighborhood",description:"Expand your power grid to provide power to your whole street",cost:y(2e3),requiresResearchProjects:[H.expandGrid1],applyResearch:function(e){return e.currentStatistics.homesInPowerGrid=y(100),e}}],X=function(e,t){var a=new Set(t);return e.requiresResearchProjects.every((function(e){return a.has(e)}))},Q=function(e,t,a){return-1!==A(e,t.cost)&&X(t,a)},V={currentStatistics:q,generators:T,researchers:$,purchasedResearchProjects:[]},Z=Object(I.b)({name:"game",initialState:V,reducers:{tick:function(e,t){e.currentStatistics=U(e.currentStatistics,t.payload)},updateTicksPerDay:function(e,t){e.currentStatistics.ticksPerDay=t.payload},buyGenerator:function(e,t){var a=t.payload,r=e.currentStatistics,s=e.generators,n=e.researchers,c=r.cashAvailable,i=s[a];if(W(c,i)){var o=i.nextPurchaseCost;e.generators[a]=function(e,t){var a=t.numberOwned,r=E[e].costOfNthGenerator(a+2);return Object(k.a)(Object(k.a)({},t),{},{numberOwned:a+1,nextPurchaseCost:r})}(a,i),e.currentStatistics=L(r,o),e.currentStatistics=B(r,s,n)}},buyResearcher:function(e,t){var a=t.payload,r=e.currentStatistics,s=e.generators,n=e.researchers,c=r.cashAvailable,i=n[a];if(F(c,i)){var o=i.nextPurchaseCost;e.researchers[a]=function(e,t){var a=t.numberEmployed,r=N[e].costOfNthResearcher(a+2);return Object(k.a)(Object(k.a)({},t),{},{numberEmployed:a+1,nextPurchaseCost:r})}(a,i),e.currentStatistics=L(r,o),e.currentStatistics=B(r,s,n)}},purchaseResearchProject:function(e,t){var a=K.find((function(e){return e.identifier===t.payload}));a&&Q(e.currentStatistics.ideasAvailable,a,e.purchasedResearchProjects)&&((e=a.applyResearch(e)).currentStatistics.ideasAvailable=g(e.currentStatistics.ideasAvailable,a.cost),e.purchasedResearchProjects.push(t.payload))},resetGame:function(e,t){return t.payload?t.payload:V}}}),_=Z.actions,ee=_.tick,te=_.buyGenerator,ae=_.buyResearcher,re=_.purchaseResearchProject,se=(_.updateTicksPerDay,_.resetGame),ne=function(e){return e.game},ce=function(e){return e.game.generators},ie=function(e){return e.game.researchers},oe=function(e){return e.game.currentStatistics.ticksPerDay},le=function(e){return e.game.currentStatistics},de=function(e){return e.game.currentStatistics.cashAvailable},ue=function(e){return e.game.currentStatistics.maxCashAvailable},he=function(e){return e.game.currentStatistics.ideasAvailable},be=function(e){return e.game.currentStatistics.maxIdeasAvailable},je=function(e){return e.game.purchasedResearchProjects},xe=function(e){return{maxCashAvailable:e.game.currentStatistics.maxCashAvailable,maxIdeasAvailable:e.game.currentStatistics.maxIdeasAvailable}},me=function(e){return{totalCashEarned:e.game.currentStatistics.totalCashEarned,totalIdeasGenerated:e.game.currentStatistics.totalIdeasGenerated,totalWattsSold:e.game.currentStatistics.totalWattsSold}},Oe=(Z.reducer,function(){return Object(l.b)()}),pe=l.c,fe=a(3),ye=function(e){var t=pe(le),a=t.daysElapsed,r=t.cashAvailable,s=t.cashEarnedPerDay,n=t.homesPowered,c=t.homesInPowerGrid,i=t.wattsUsedPerHomePerDay,o=t.pricePerWatt,l=t.wattsGeneratedPerDay,d=t.ideasAvailable,u=t.ideasGeneratedPerDay,h=w(y(100),P(n,c));return Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsx)(x.a,{as:"h1",size:"md",pb:2,children:"Keep the Lights On"}),Object(fe.jsxs)(m.c,{pt:4,align:"stretch",spacing:4,children:[Object(fe.jsxs)(m.b,{children:[Object(fe.jsx)(x.a,{as:"h2",size:"sm",pb:1,children:"Time Elapsed"}),Object(fe.jsxs)(O.a,{children:[G(a)," days"]})]}),Object(fe.jsxs)(m.b,{children:[Object(fe.jsx)(x.a,{as:"h2",size:"sm",pb:1,children:"Funds"}),Object(fe.jsxs)(O.a,{pb:1,children:["$",D(r)]}),Object(fe.jsxs)(O.a,{fontSize:"sm",color:"gray.400",children:["$",D(s)," per day"]})]}),Object(fe.jsxs)(m.b,{children:[Object(fe.jsx)(x.a,{as:"h2",size:"sm",pb:1,children:"Power Generation"}),Object(fe.jsxs)(O.a,{pb:1,children:[G(l)," watts per day"]}),Object(fe.jsxs)(O.a,{fontSize:"sm",color:"gray.400",children:["$",D(o)," per watt"]})]}),Object(fe.jsxs)(m.b,{children:[Object(fe.jsx)(x.a,{as:"h2",size:"sm",pb:1,children:"Houses Illuminated"}),Object(fe.jsxs)(O.a,{pb:1,children:[G(n,2)," / ",G(c)]}),Object(fe.jsxs)(O.a,{pb:1,color:n===c?void 0:"red.500",children:[G(h),"%"]}),Object(fe.jsxs)(O.a,{fontSize:"sm",color:"gray.400",children:[G(i)," watts used per house per day"]})]}),Object(fe.jsxs)(m.b,{children:[Object(fe.jsx)(x.a,{as:"h2",size:"sm",pb:1,children:"Research"}),Object(fe.jsxs)(O.a,{pb:1,children:[G(d)," ideas"]}),Object(fe.jsxs)(O.a,{fontSize:"sm",color:"gray.400",children:[G(u)," ideas per day"]})]})]})]})},ve=a(122),ge=a(127),we=function(e){var t=pe(xe),a=pe(me);return Object(fe.jsx)(m.c,{align:"flex-start",spacing:8,children:Object(fe.jsxs)(m.b,{children:[Object(fe.jsx)(x.a,{as:"h2",size:"md",pb:2,children:"Statistics"}),Object(fe.jsxs)(ge.a,{columns:2,spacingX:4,children:[Object(fe.jsx)(O.a,{fontWeight:"bold",children:"Max cash available"}),Object(fe.jsxs)(O.a,{children:["$",D(t.maxCashAvailable)]}),Object(fe.jsx)(O.a,{fontWeight:"bold",children:"Total cash earned"}),Object(fe.jsxs)(O.a,{children:["$",D(a.totalCashEarned)]}),Object(fe.jsx)(O.a,{fontWeight:"bold",children:"Max ideas available"}),Object(fe.jsxs)(O.a,{children:[G(t.maxIdeasAvailable)," ideas"]}),Object(fe.jsx)(O.a,{fontWeight:"bold",children:"Total ideas created"}),Object(fe.jsxs)(O.a,{children:[G(a.totalIdeasGenerated)," ideas"]}),Object(fe.jsx)(O.a,{fontWeight:"bold",children:"Total power sold"}),Object(fe.jsxs)(O.a,{children:[G(a.totalWattsSold)," watts"]})]})]})})},Pe=a(123),Se=function(e){var t=Oe(),a=pe(de),r=pe(ue),s=pe(ce);return Object(fe.jsx)(m.c,{align:"stretch",spacing:4,children:z.map((function(e){var n=s[e],c=E[e];return-1===A(r,w(y(.75),c.baseCost))?null:Object(fe.jsxs)(m.b,{children:[Object(fe.jsxs)(x.a,{as:"h2",size:"sm",pb:1,children:[c.name," x ",n.numberOwned]}),Object(fe.jsxs)(O.a,{pb:2,fontSize:"sm",color:"gray.400",children:["Generates ",G(n.wattsPerDay)," watts per day -- ",c.colorText]}),Object(fe.jsxs)(Pe.a,{onClick:function(){return t(te(e))},disabled:!W(a,n),children:["Buy for $",D(n.nextPurchaseCost,!0)]})]},e)}))})},Ce=w(y(.75),N[R.juniorResearchAssistant].baseCost),Ae=function(e){var t=Oe(),a=pe(de),r=pe(ue),s=pe(he),n=pe(be),c=pe(ie),i=pe(je);return 1!==A(r,Ce)?Object(fe.jsx)(O.a,{fontStyle:"italic",color:"gray.400",children:"If you collect enough money, maybe you can hire staff to research improvements."}):Object(fe.jsxs)(m.c,{align:"stretch",spacing:8,children:[Object(fe.jsxs)(m.b,{children:[Object(fe.jsx)(x.a,{as:"h2",size:"md",pb:4,children:"Researchers"}),Object(fe.jsx)(m.c,{align:"stretch",spacing:4,children:M.map((function(e){var s=c[e],n=N[e];return-1===A(r,w(y(.75),n.baseCost))?null:Object(fe.jsxs)(m.b,{children:[Object(fe.jsxs)(x.a,{as:"h3",size:"sm",pb:1,children:[n.name," x ",s.numberEmployed]}),Object(fe.jsxs)(O.a,{pb:2,fontSize:"sm",color:"gray.400",children:["Generates ",G(s.ideasPerDay)," ideas per day --"," ",n.colorText]}),Object(fe.jsxs)(Pe.a,{onClick:function(){return t(ae(e))},disabled:!F(a,s),children:["Hire for $",D(s.nextPurchaseCost,!0)]})]},e)}))})]}),Object(fe.jsxs)(m.b,{children:[Object(fe.jsx)(x.a,{as:"h2",size:"md",pb:4,children:"Projects"}),n===y(0)?Object(fe.jsx)(O.a,{fontStyle:"italic",color:"gray.400",children:"Hire some researchers, and they might have an idea or two of how to improve your power grid."}):Object(fe.jsx)(m.c,{align:"stretch",spacing:4,children:K.map((function(e){return i.includes(e.identifier)?null:-1!==A(n,w(y(.75),e.cost))&&X(e,i)?Object(fe.jsxs)(m.b,{children:[Object(fe.jsx)(x.a,{as:"h3",size:"sm",pb:1,children:e.name}),Object(fe.jsx)(O.a,{pb:2,fontSize:"sm",color:"gray.400",children:e.description}),Object(fe.jsxs)(Pe.a,{onClick:function(){return t(re(e.identifier))},disabled:!Q(s,e,i),children:["Purchase for ",G(e.cost)," ideas"]})]},e.identifier):null}))})]})]})},Ge=a(4),De=a(84),Ie=a(65),ke=function(e){var t=Object(De.c)().toggleColorMode,a=Object(De.d)("Switch to Dark Mode","Switch to Light Mode"),r=Object(De.d)(Ie.a,Ie.b);return Object(fe.jsx)(Pe.a,{leftIcon:Object(fe.jsx)(r,{}),onClick:t,children:a})},Re=a(114),Ee=a(124),ze=a(38),Te=function(e){return btoa(JSON.stringify(e))},We=function(e){try{return JSON.parse(atob(e))}catch(t){return}},He=function(e){localStorage.setItem("gameSave",Te(e))},Ne=Object(ze.a)((function(e){var t=Object(n.useState)(""),a=Object(Ge.a)(t,2),r=a[0],s=a[1],c=pe(ne),i=Object(Re.a)(r),o=i.hasCopied,l=i.onCopy;return Object(n.useEffect)((function(){s(Te(c))}),[s]),Object(fe.jsxs)(h.a,Object(k.a)(Object(k.a)({},e),{},{position:"relative",children:[Object(fe.jsx)(Ee.a,{readOnly:!0,value:r,height:250}),Object(fe.jsx)(Pe.a,{onClick:l,variant:"solid",colorScheme:"teal",size:"xs",textTransform:"uppercase",position:"absolute",zIndex:1,top:3,right:6,children:o?"Copied!":"Copy"})]}))})),Me=a(121),$e=Object(ze.a)((function(e){var t=Object(n.useState)(""),a=Object(Ge.a)(t,2),r=a[0],s=a[1],c=Object(l.b)(),i=Object(Me.a)();return Object(fe.jsxs)(h.a,Object(k.a)(Object(k.a)({},e),{},{children:[Object(fe.jsx)(Ee.a,{value:r,onChange:function(e){return s(e.target.value)}}),Object(fe.jsx)(Pe.a,{mt:2,onClick:function(){if(window.confirm("This will overwrite all of your current save data, and cannot be undone. Are you sure you want to continue?")){var e=We(r);e?(c(se(e)),i({title:"Save Imported",description:"Your game save has been imported successfully!",status:"success",duration:9e3,isClosable:!0,position:"top-right"})):i({title:"Import Failed",description:"Importing the game save failed. Check that you have entered the entire game state.",status:"error",duration:9e3,isClosable:!0,position:"top-right"})}},disabled:!r,children:"Import Data"})]}))})),Fe=function(e){var t=pe(ne);return Object(fe.jsx)(Pe.a,Object(k.a)(Object(k.a)({},e),{},{onClick:function(){He(t)},children:"Save"}))},qe=function(e){var t=Object(n.useState)(!1),a=Object(Ge.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),i=Object(Ge.a)(c,2),o=i[0],l=i[1],d=Oe();pe(oe);return Object(fe.jsxs)(m.c,{align:"flex-start",spacing:8,children:[Object(fe.jsxs)(m.b,{children:[Object(fe.jsx)(x.a,{as:"h2",size:"sm",pb:2,children:"Theme"}),Object(fe.jsx)(ke,{})]}),Object(fe.jsxs)(m.b,{children:[Object(fe.jsx)(x.a,{as:"h2",size:"sm",pb:2,children:"Manual Game Saves"}),Object(fe.jsxs)(m.a,{spacing:4,children:[Object(fe.jsx)(Fe,{}),Object(fe.jsx)(Pe.a,{onClick:function(){l(!1),s(!r)},children:"Export Game Save"}),Object(fe.jsx)(Pe.a,{onClick:function(){s(!1),l(!o)},children:"Import Game Save"}),Object(fe.jsx)(Pe.a,{onClick:function(){window.confirm("This will reset all of your progress with no benefit, and cannot be undone. Are you sure you want to continue?")&&d(se())},children:"Reset"})]}),r&&Object(fe.jsx)(Ne,{mt:4}),o&&Object(fe.jsx)($e,{mt:4})]}),!1]})},Je=function(e){return Object(fe.jsxs)(ve.e,{children:[Object(fe.jsxs)(ve.b,{children:[Object(fe.jsx)(ve.a,{children:"Generation"}),Object(fe.jsx)(ve.a,{children:"Research"}),Object(fe.jsx)(ve.a,{children:"Achievements"}),Object(fe.jsx)(ve.a,{children:"Settings"})]}),Object(fe.jsxs)(ve.d,{children:[Object(fe.jsx)(ve.c,{children:Object(fe.jsx)(Se,{})}),Object(fe.jsx)(ve.c,{children:Object(fe.jsx)(Ae,{})}),Object(fe.jsx)(ve.c,{children:Object(fe.jsx)(we,{})}),Object(fe.jsx)(ve.c,{children:Object(fe.jsx)(qe,{})})]})]})},Ue=function(){var e=localStorage.getItem("gameSave");return e?We(e):void 0}();Ue&&(Y={game:Ue});var Be=Object(I.a)({preloadedState:Y,reducer:{game:Z.reducer}}),Le=0;setInterval((function(){Be.dispatch(ee(Le)),Le=(Le+1)%16}),62.5);var Ye=Be,Ke=a(117),Xe=function(e){var t=pe(ne);return Object(Ke.a)((function(){He(t)}),3e4),null},Qe=function(){return Object(fe.jsx)(l.a,{store:Ye,children:Object(fe.jsxs)(d.a,{theme:u.theme,children:[Object(fe.jsx)(Xe,{}),Object(fe.jsx)(h.a,{children:Object(fe.jsxs)(b.a,{minH:"100vh",direction:"row",alignItems:"stretch",children:[Object(fe.jsx)(h.a,{overflow:"auto",w:250,p:3,children:Object(fe.jsx)(ye,{})}),Object(fe.jsx)(h.a,{children:Object(fe.jsx)(j.a,{orientation:"vertical"})}),Object(fe.jsx)(h.a,{flexGrow:1,overflow:"auto",children:Object(fe.jsx)(Je,{})})]})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(fe.jsxs)(c.a.StrictMode,{children:[Object(fe.jsx)(s.a,{}),Object(fe.jsx)(Qe,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[99,1,2]]]);
//# sourceMappingURL=main.66e4a538.chunk.js.map