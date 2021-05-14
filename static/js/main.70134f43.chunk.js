(this["webpackJsonpkeep-the-lights-on"]=this["webpackJsonpkeep-the-lights-on"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var r,s=a(122),n=a(0),c=a.n(n),i=a(24),o=a.n(i),l=a(30),d=a(127),u=a(50),h=a(115),b=a(120),j=a(121),p=a(112),m=a(128),f=a(114),x=a(17),O=function(e){return x.a.fromMantissaExponent(e.man,e.exp)},y=function(e){var t=new x.a(e);return{man:t.mantissa,exp:t.exponent}},g=function(e){return y(x.a.trunc(O(e)))},w=function(e,t){return y(x.a.add(O(e),O(t)))},P=function(e,t){return y(x.a.subtract(O(e),O(t)))},v=function(e,t){return y(x.a.multiply(O(e),O(t)))},S=function(e,t){return y(x.a.divide(O(e),O(t)))},D=function(e,t){return y(x.a.max(O(e),O(t)))},A=function(e,t){return y(x.a.min(O(e),O(t)))},G=function(e,t){return x.a.compare(O(e),O(t))},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=O(e);return a.lt(new x.a(1e4))?a.trunc().eq(a)?a.toFixed(0):a.toFixed(t):a.toExponential(3)},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=O(e);return a.lt(new x.a(1e3))?t&&a.trunc().eq(a)?a.toFixed(0):a.toFixed(2):a.toExponential(3)},I=a(10),k=a(54),W=a(4),M=function(e,t){return function(a){return y(e*a+t)}},R=function(e,t,a){return function(r){return y(e*r*r+t*r+a)}},N=function(e,t,a,r){return function(s){return y(e*s*s*s+t*s*s+a*s+r)}};!function(e){e.hamsters="hamsters",e.pinwheels="pinwheels",e.handCrank="handCrank",e.bicycle="bicycle",e.solarPanel="solarPanel",e.picoHydro="picoHydro",e.biomass="biomass",e.tidalStream="tidalStream",e.solarDish="solarDish",e.ethanol="ethanol",e.smallHydro="smallHydro",e.windTurbine="windTurbine",e.coal="coal",e.oil="oil",e.solarPowerTower="solarPowerTower",e.naturalGas="naturalGas",e.hydroelectricDam="hydroelectricDam",e.nuclearFission="nuclearFission",e.spaceSolarArray="spaceSolarArray",e.nuclearFusion="nuclearFusion",e.dysonSphere="dysonSphere"}(r||(r={}));var E,z={hamsters:{name:"Hamster",colorText:"Watch those little legs go!",baseWattsPerDay:y(.5),costOfNthGenerator:M(.25,0)},pinwheels:{name:"Pinwheel",colorText:"One day you'll build a great wind farm.",baseWattsPerDay:y(3),costOfNthGenerator:M(1,1)},handCrank:{name:"Hand Crank",colorText:"Skip the gym and make some money.",baseWattsPerDay:y(11),costOfNthGenerator:M(7,3)},bicycle:{name:"Human-powered Bicycle",colorText:"You can make it up the hill, just keep pedaling!",baseWattsPerDay:y(127),costOfNthGenerator:M(31,23)},solarPanel:{name:"Solar Panel",colorText:"The photo-voltaic cells soak up the sun's rays and turn it into a modest amount of electricity.",baseWattsPerDay:y(307),costOfNthGenerator:M(101,43)},picoHydro:{name:"Pico Hydro",colorText:"These small power plants generate electricity using water from nearby streams.",baseWattsPerDay:y(1669),costOfNthGenerator:M(569,83)},biomass:{name:"Biomass Power Plant",colorText:"These power plants burn things like plants, trees, and even garbage to generate electricity.",baseWattsPerDay:y(4229),costOfNthGenerator:M(2143,257)},tidalStream:{name:"Tidal Stream Generator",colorText:"It's like a wind turbine, for the sea!",baseWattsPerDay:y(16903),costOfNthGenerator:M(9157,1409)},solarDish:{name:"Solar Dish",colorText:"A parabolic dish that focuses energy from the sun onto a receiver.",baseWattsPerDay:y(69427),costOfNthGenerator:M(26927,6373)},ethanol:{name:"Ethanol Power Plant",colorText:"A power plant that burns ethanol to generate electricity.",baseWattsPerDay:y(251393),costOfNthGenerator:M(94583,18661)},smallHydro:{name:"Small Hydro",colorText:"A hydroelectric powerplant located on a small river",baseWattsPerDay:y(969503),costOfNthGenerator:R(7,173431,22769)},windTurbine:{name:"Wind Turbine",colorText:"Finally, the wind farm that you've always dreamed of!",baseWattsPerDay:y(3117467),costOfNthGenerator:R(31,340801,83341)},coal:{name:"Coal Power Plant",colorText:"A power plant that burns coal to generate electricity. This is a bit dirty...",baseWattsPerDay:y(12138481),costOfNthGenerator:R(101,999983,243197)},oil:{name:"Oil Power Plant",colorText:"A power plant that burns oil to generate electricity.",baseWattsPerDay:y(42666601),costOfNthGenerator:R(569,2804569,976909)},solarPowerTower:{name:"Solar Power Tower",colorText:"A collection of mirrors that focus sunlight on a central tower to generate heat.",baseWattsPerDay:y(369671453),costOfNthGenerator:R(2143,9009163,3914269)},naturalGas:{name:"Natural Gas Power Plant",colorText:"A power plant that burns natural gas to generate electricity.",baseWattsPerDay:y(2429698879),costOfNthGenerator:R(9157,32046979,15662723)},hydroelectricDam:{name:"Hydroelectric Dam",colorText:"A large hydroelectric dam that generates a large amount of power.",baseWattsPerDay:y(9679695049),costOfNthGenerator:R(26927,132045167,62659657)},nuclearFission:{name:"Nuclear Fission Reactor",colorText:"A power plant that uses controlled nuclear fission reactions to generate electricity.",baseWattsPerDay:y(31679723617),costOfNthGenerator:N(7,94583,373202677,250641211)},spaceSolarArray:{name:"Space Solar Panel Array",colorText:"With nothing in the way, we can generate even more solar power!",baseWattsPerDay:y(187679724691),costOfNthGenerator:N(31,173431,923212441,1002572119)},nuclearFusion:{name:"Nuclear Fusion Reactor",colorText:"An even more efficient form of nuclear power.",baseWattsPerDay:y(969679760479),costOfNthGenerator:N(101,340801,2735208481,4010292701)},dysonSphere:{name:"Dyson Sphere",colorText:"Capture energy from stars across the universe.",baseWattsPerDay:y(42e12),costOfNthGenerator:N(569,999983,6135210871,16041259051)}},F=Object.entries(z).reduce((function(e,t){var a=Object(W.a)(t,2),r=a[0],s=a[1];return e[r]={numberOwned:0,wattsPerDay:s.baseWattsPerDay,nextPurchaseCost:s.costOfNthGenerator(1)},e}),{}),H=Object.entries(F).sort((function(e,t){var a=Object(W.a)(e,2),r=(a[0],a[1]),s=Object(W.a)(t,2),n=(s[0],s[1]);return G(r.nextPurchaseCost,n.nextPurchaseCost)})).map((function(e){var t=Object(W.a)(e,2),a=t[0];t[1];return a})),U=function(e,t){return-1!==G(e,t.nextPurchaseCost)};!function(e){e.juniorResearchAssistant="juniorResearchAssistant",e.highSchoolStudent="highSchoolStudent",e.undergraduateStudent="undergraduateStudent",e.mastersStudent="mastersStudent",e.researchAssistant="researchAssistant",e.phdStudent="phdStudent",e.postdoc="postdoc",e.assistantProf="assistantProf",e.tenuredProf="tenuredProf",e.seniorResearchFellow="seniorResearchFellow",e.principalResearchFellow="principalResearchFellow",e.nobelLauriate="nobelLauriate"}(E||(E={}));var $,Y={juniorResearchAssistant:{name:'"Junior" Research Assistant',colorText:"Maybe recruiting your 12 year old cousin wasn't the best idea.",baseIdeasPerDay:y(.5),costOfNthResearcher:M(2,3)},highSchoolStudent:{name:"High School Student",colorText:"The honors students from your high school are interested in your project. They might be helpful.",baseIdeasPerDay:y(3),costOfNthResearcher:M(11,13)},undergraduateStudent:{name:"Undergraduate Student",colorText:"Undergraduate interns can help speed up your progress cheaply.",baseIdeasPerDay:y(13),costOfNthResearcher:M(43,23)},mastersStudent:{name:"Masters Student",colorText:"More educated and enthusiastic, masters students will accelerate your progress.",baseIdeasPerDay:y(41),costOfNthResearcher:M(191,89)},researchAssistant:{name:"Research Assistant",colorText:"Full-time staff that are the workhorse of your research department.",baseIdeasPerDay:y(109),costOfNthResearcher:M(977,457)},phdStudent:{name:"PhD Student",colorText:"Students that have dedicated their life to the field.",baseIdeasPerDay:y(317),costOfNthResearcher:M(4861,2339)},postdoc:{name:"Postdoc Research Fellow",colorText:"After graduating with their PhD, they are preparing for the rest of their careers as researchers.",baseIdeasPerDay:y(1259),costOfNthResearcher:M(27277,13967)},assistantProf:{name:"Assistant Professor",colorText:"Professors starting their career path towards tenure.",baseIdeasPerDay:y(3769),costOfNthResearcher:M(142799,72383)},tenuredProf:{name:"Tenured Professor",colorText:"The highest ranking professors, they bring along their own student researchers to help speed up their work.",baseIdeasPerDay:y(12721),costOfNthResearcher:M(721451,362237)},seniorResearchFellow:{name:"Senior Research Fellow",colorText:"Full-time, highly trained researchers.",baseIdeasPerDay:y(39541),costOfNthResearcher:M(3607255,1804813)},principalResearchFellow:{name:"Principal Research Fellow",colorText:"Even more senior full-time researchers.",baseIdeasPerDay:y(121883),costOfNthResearcher:M(18039319,9025013)},nobelLauriate:{name:"Nobel Lauriate",colorText:"Scientists that have won the most prestigious award in their field, they are worth every penny.",baseIdeasPerDay:y(549641),costOfNthResearcher:M(90205261,451031871)}},B=Object.entries(Y).reduce((function(e,t){var a=Object(W.a)(t,2),r=a[0],s=a[1];return e[r]={numberEmployed:0,ideasPerDay:s.baseIdeasPerDay,nextPurchaseCost:s.costOfNthResearcher(1)},e}),{}),J=Object.entries(B).sort((function(e,t){var a=Object(W.a)(e,2),r=(a[0],a[1]),s=Object(W.a)(t,2),n=(s[0],s[1]);return G(r.nextPurchaseCost,n.nextPurchaseCost)})).map((function(e){var t=Object(W.a)(e,2),a=t[0];t[1];return a})),L=function(e,t){return-1!==G(e,t.nextPurchaseCost)},q={daysElapsed:y(0),ticksPerDay:16,cashAvailable:y(1),maxCashAvailable:y(0),totalCashEarned:y(0),cashEarnedPerDay:y(0),homesPowered:y(0),homesInPowerGrid:y(1),wattsUsedPerHomePerDay:y(20),pricePerWatt:y(.03),wattsGeneratedPerDay:y(0),totalWattsSold:y(0),ideasAvailable:y(0),maxIdeasAvailable:y(0),totalIdeasGenerated:y(0),ideasGeneratedPerDay:y(0),timesAscended:0,nextAscensionPrice:y(1e6),wattsUsedMultiplier:y(1),priceMultiplier:y(1),wattsMultiplier:y(1),ideasMultiplier:y(1)},_=function(e){var t=e.wattsUsedPerHomePerDay,a=e.wattsUsedMultiplier;return v(t,a)},X=function(e,t){var a=e.wattsMultiplier,r=function(e){return Object.values(e).reduce((function(e,t){return w(e,v(y(t.numberOwned),t.wattsPerDay))}),y(0))}(t);return v(r,a)},K=function(e,t){var a,r=e.ideasMultiplier,s=(a=t,Object.values(a).reduce((function(e,t){return w(e,v(y(t.numberEmployed),t.ideasPerDay))}),y(0)));return v(s,r)},V=function(e){var t=e.ticksPerDay,a=e.homesInPowerGrid,r=e.wattsGeneratedPerDay,s=A(r,v(a,_(e)));return S(s,y(t))},Q=function(e,t){var a=function(e,t){var a=e.daysElapsed;return t%e.ticksPerDay===0?w(a,y(1)):a}(e,t),r=function(e){var t=e.pricePerWatt,a=e.priceMultiplier;return v(V(e),v(t,a))}(e),s=w(e.cashAvailable,r),n=w(e.totalCashEarned,r),c=D(s,e.maxCashAvailable),i=function(e){var t=e.ticksPerDay,a=e.ideasGeneratedPerDay;return S(a,y(t))}(e),o=w(e.ideasAvailable,i),l=w(e.totalIdeasGenerated,i),d=D(o,e.maxIdeasAvailable),u=w(e.totalWattsSold,V(e));return Object(I.a)(Object(I.a)({},e),{},{daysElapsed:a,cashAvailable:s,maxCashAvailable:c,totalCashEarned:n,ideasAvailable:o,maxIdeasAvailable:d,totalIdeasGenerated:l,totalWattsSold:u})},Z=function(e,t,a){var r=X(e,t),s=A(r,v(e.homesInPowerGrid,_(e))),n=v(s,v(e.pricePerWatt,e.priceMultiplier)),c=A(e.homesInPowerGrid,S(r,_(e))),i=K(e,a);return Object(I.a)(Object(I.a)({},e),{},{cashEarnedPerDay:n,homesPowered:c,wattsGeneratedPerDay:r,ideasGeneratedPerDay:i})},ee=function(e,t){var a=P(e.cashAvailable,t);return e.cashAvailable=a,e},te=a(12),ae=a(66),re=["street","neighborhood","town","city","state","country","continent","planet","galaxy","universe","multiverse"].map((function(e,t,a){var r=Object(ae.startCase)(e),s=a[t-1],n=[];s&&(n=["expandGrid_".concat(s)]);var c=y(100);c=0===t?y(100):1===t?y(2500):2===t?y(10301):g(y(14257681*(t-3)*(t-3)*(t-3)+25667*(t-2)*(t-2)+8647*t));var i=y(Math.pow(10,t+1));return{identifier:"expandGrid_".concat(e),name:"Power the ".concat(r),description:"Expand your power grid to provide power to the ".concat(e," with a base of ").concat(T(i,0)," homes"),cost:c,requiresResearchProjects:n,applyResearch:function(e){return e.currentStatistics.homesInPowerGrid=i,e}}})),se=["basic","beginner","intermediate","advanced","professional","excellent","award-winning","world-renown"].map((function(e,t,a){var r=Object(ae.startCase)(e),s=a[t-1],n=[];s&&(n=["salesPower_".concat(s)]);var c=y(500);c=0===t?y(500):1===t?y(7500):2===t?y(19739):g(y(34260761*(t-3)*(t-3)*(t-3)+47501*(t-2)*(t-2)+8647*t));var i=y(.03+.01*(t+1)+t*t*.01);return{identifier:"salesPower_".concat(e),name:"".concat(r," Sales"),description:"Hire ".concat(e," sales people to increase the base price per watt to $").concat(C(i)),cost:c,requiresResearchProjects:n,applyResearch:function(e){return e.currentStatistics.pricePerWatt=i,e}}})),ne=[].concat(Object(te.a)(re),Object(te.a)(se)),ce=function(e,t){var a=new Set(t);return e.requiresResearchProjects.every((function(e){return a.has(e)}))},ie=function(e,t,a){return-1!==G(e,t.cost)&&ce(t,a)},oe={currentStatistics:q,generators:F,researchers:B,purchasedResearchProjects:[]},le=Object(k.b)({name:"game",initialState:oe,reducers:{tick:function(e,t){e.currentStatistics=Q(e.currentStatistics,t.payload)},updateTicksPerDay:function(e,t){e.currentStatistics.ticksPerDay=t.payload},buyGenerator:function(e,t){var a=t.payload,r=e.currentStatistics,s=e.generators,n=e.researchers,c=r.cashAvailable,i=s[a];if(U(c,i)){var o=i.nextPurchaseCost;e.generators[a]=function(e,t){var a=t.numberOwned,r=z[e].costOfNthGenerator(a+2);return Object(I.a)(Object(I.a)({},t),{},{numberOwned:a+1,nextPurchaseCost:r})}(a,i),e.currentStatistics=ee(r,o),e.currentStatistics=Z(r,s,n)}},buyResearcher:function(e,t){var a=t.payload,r=e.currentStatistics,s=e.generators,n=e.researchers,c=r.cashAvailable,i=n[a];if(L(c,i)){var o=i.nextPurchaseCost;e.researchers[a]=function(e,t){var a=t.numberEmployed,r=Y[e].costOfNthResearcher(a+2);return Object(I.a)(Object(I.a)({},t),{},{numberEmployed:a+1,nextPurchaseCost:r})}(a,i),e.currentStatistics=ee(r,o),e.currentStatistics=Z(r,s,n)}},purchaseResearchProject:function(e,t){var a=ne.find((function(e){return e.identifier===t.payload}));a&&ie(e.currentStatistics.ideasAvailable,a,e.purchasedResearchProjects)&&((e=a.applyResearch(e)).currentStatistics.ideasAvailable=P(e.currentStatistics.ideasAvailable,a.cost),e.purchasedResearchProjects.push(t.payload),e.currentStatistics=Z(e.currentStatistics,e.generators,e.researchers))},ascend:function(e,t){var a=e.currentStatistics,r=Object(I.a)(Object(I.a)({},oe.currentStatistics),{},{timesAscended:a.timesAscended+1,nextAscensionPrice:v(a.nextAscensionPrice,y(10)),wattsUsedMultiplier:a.wattsUsedMultiplier,priceMultiplier:a.priceMultiplier,wattsMultiplier:a.wattsMultiplier,ideasMultiplier:a.ideasMultiplier});return r[t.payload]=w(r[t.payload],y(.1)),Object(I.a)(Object(I.a)({},oe),{},{currentStatistics:Z(r,oe.generators,oe.researchers)})},resetGame:function(e,t){return t.payload?t.payload:oe}}}),de=le.actions,ue=de.tick,he=de.buyGenerator,be=de.buyResearcher,je=de.purchaseResearchProject,pe=(de.updateTicksPerDay,de.resetGame),me=de.ascend,fe=function(e){return e.game},xe=function(e){return e.game.generators},Oe=function(e){return e.game.researchers},ye=function(e){return e.game.currentStatistics.ticksPerDay},ge=function(e){return e.game.currentStatistics},we=function(e){return e.game.currentStatistics.cashAvailable},Pe=function(e){return e.game.currentStatistics.maxCashAvailable},ve=function(e){return e.game.currentStatistics.ideasAvailable},Se=function(e){return e.game.currentStatistics.maxIdeasAvailable},De=function(e){return e.game.purchasedResearchProjects},Ae=function(e){return{maxCashAvailable:e.game.currentStatistics.maxCashAvailable,maxIdeasAvailable:e.game.currentStatistics.maxIdeasAvailable}},Ge=function(e){return{totalCashEarned:e.game.currentStatistics.totalCashEarned,totalIdeasGenerated:e.game.currentStatistics.totalIdeasGenerated,totalWattsSold:e.game.currentStatistics.totalWattsSold}},Te=function(e){return e.game.currentStatistics.wattsMultiplier},Ce=function(e){return e.game.currentStatistics.ideasMultiplier},Ie=function(e){var t=e.game.currentStatistics;return{timesAscended:t.timesAscended,nextAscensionPrice:t.nextAscensionPrice,wattsUsedMultiplier:t.wattsUsedMultiplier,priceMultiplier:t.priceMultiplier,wattsMultiplier:t.wattsMultiplier,ideasMultiplier:t.ideasMultiplier}},ke=(le.reducer,function(){return Object(l.b)()}),We=l.c,Me=a(1),Re=function(e){var t=We(ge),a=t.daysElapsed,r=t.cashAvailable,s=t.cashEarnedPerDay,n=t.homesPowered,c=t.homesInPowerGrid,i=t.wattsUsedPerHomePerDay,o=t.pricePerWatt,l=t.wattsGeneratedPerDay,d=t.ideasAvailable,u=t.ideasGeneratedPerDay,h=v(y(100),S(n,c));return Object(Me.jsxs)(Me.Fragment,{children:[Object(Me.jsx)(p.a,{as:"h1",size:"md",pb:2,children:"Keep the Lights On"}),Object(Me.jsxs)(m.c,{pt:4,align:"stretch",spacing:4,children:[Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"sm",pb:1,children:"Time Elapsed"}),Object(Me.jsxs)(f.a,{children:[T(a)," days"]})]}),Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"sm",pb:1,children:"Funds"}),Object(Me.jsxs)(f.a,{pb:1,children:["$",C(r)]}),Object(Me.jsxs)(f.a,{fontSize:"sm",color:"gray.500",children:["$",C(s)," per day"]})]}),Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"sm",pb:1,children:"Power Generation"}),Object(Me.jsxs)(f.a,{pb:1,children:[T(l)," watts per day"]}),Object(Me.jsxs)(f.a,{fontSize:"sm",color:"gray.500",children:["$",C(o)," per watt"]})]}),Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"sm",pb:1,children:"Houses Illuminated"}),Object(Me.jsxs)(f.a,{pb:1,children:[T(n,2)," / ",T(c)]}),Object(Me.jsxs)(f.a,{pb:1,color:0===G(n,c)?"red.500":void 0,children:[T(h),"%"]}),Object(Me.jsxs)(f.a,{fontSize:"sm",color:"gray.500",children:[T(i)," watts used per house per day"]})]}),Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"sm",pb:1,children:"Research"}),Object(Me.jsxs)(f.a,{pb:1,children:[T(d)," ideas"]}),Object(Me.jsxs)(f.a,{fontSize:"sm",color:"gray.500",children:[T(u)," ideas per day"]})]})]})]})},Ne=a(124),Ee=a(125),ze=a(129),Fe=function(e){var t=We(Ae),a=We(Ge),r=We(Ie),s=ke(),n=1!==G(r.nextAscensionPrice,a.totalCashEarned);return Object(Me.jsxs)(m.c,{align:"flex-start",spacing:8,children:[Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"md",pb:2,children:"Sell Your Company"}),n?Object(Me.jsxs)(h.a,{children:[Object(Me.jsx)(f.a,{pb:4,children:"There are several buyers interested in your company. You can sell your company, and start a new one by selecting an extra perk."}),Object(Me.jsxs)(m.c,{align:"flex-start",spacing:4,children:[Object(Me.jsx)(Ee.a,{onClick:function(){return s(me("wattsUsedMultiplier"))},children:"Increase Watts Used per House by 1%"}),Object(Me.jsx)(Ee.a,{onClick:function(){return s(me("priceMultiplier"))},children:"Increase Price per Watt by 10%"}),Object(Me.jsx)(Ee.a,{onClick:function(){return s(me("wattsMultiplier"))},children:"Increase Watts Generated by 10%"}),Object(Me.jsx)(Ee.a,{onClick:function(){return s(me("ideasMultiplier"))},children:"Increase Ideas Generated by 10%"})]})]}):Object(Me.jsxs)(f.a,{children:["You can sell your company after earning a total of $",C(r.nextAscensionPrice),"."]})]}),r.timesAscended>0&&Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"md",pb:2,children:"Ascension Perks"}),Object(Me.jsxs)(ze.a,{columns:2,spacingX:4,children:[Object(Me.jsx)(f.a,{fontWeight:"bold",children:"Times Ascended"}),Object(Me.jsx)(f.a,{children:r.timesAscended}),Object(Me.jsx)(f.a,{fontWeight:"bold",children:"Watts Used Per House Multiplier"}),Object(Me.jsxs)(f.a,{children:[T(v(r.wattsUsedMultiplier,y(100)),0),"%"]}),Object(Me.jsx)(f.a,{fontWeight:"bold",children:"Price per Watt Multiplier"}),Object(Me.jsxs)(f.a,{children:[T(v(r.priceMultiplier,y(100)),0),"%"]}),Object(Me.jsx)(f.a,{fontWeight:"bold",children:"Watts Generated Multiplier"}),Object(Me.jsxs)(f.a,{children:[T(v(r.wattsMultiplier,y(100)),0),"%"]}),Object(Me.jsx)(f.a,{fontWeight:"bold",children:"Ideas Generated Multiplier"}),Object(Me.jsxs)(f.a,{children:[T(v(r.ideasMultiplier,y(100)),0),"%"]})]})]}),Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"md",pb:2,children:"Statistics"}),Object(Me.jsxs)(ze.a,{columns:2,spacingX:4,children:[Object(Me.jsx)(f.a,{fontWeight:"bold",children:"Max cash available"}),Object(Me.jsxs)(f.a,{children:["$",C(t.maxCashAvailable)]}),Object(Me.jsx)(f.a,{fontWeight:"bold",children:"Total cash earned"}),Object(Me.jsxs)(f.a,{children:["$",C(a.totalCashEarned)]}),Object(Me.jsx)(f.a,{fontWeight:"bold",children:"Max ideas available"}),Object(Me.jsxs)(f.a,{children:[T(t.maxIdeasAvailable)," ideas"]}),Object(Me.jsx)(f.a,{fontWeight:"bold",children:"Total ideas created"}),Object(Me.jsxs)(f.a,{children:[T(a.totalIdeasGenerated)," ideas"]}),Object(Me.jsx)(f.a,{fontWeight:"bold",children:"Total power sold"}),Object(Me.jsxs)(f.a,{children:[T(a.totalWattsSold)," watts"]})]})]})]})},He=function(e){var t=ke(),a=We(we),r=We(Pe),s=We(xe),n=We(Te);return Object(Me.jsx)(m.c,{align:"stretch",spacing:4,children:H.map((function(e){var c=s[e],i=z[e],o=F[e].nextPurchaseCost;return-1===G(r,v(y(.75),o))?null:Object(Me.jsxs)(m.b,{children:[Object(Me.jsxs)(p.a,{as:"h2",size:"sm",pb:1,children:[i.name," x ",c.numberOwned]}),Object(Me.jsxs)(f.a,{pb:2,fontSize:"sm",color:"gray.500",children:["Generates ",T(v(c.wattsPerDay,n))," watts per day --"," ",i.colorText]}),Object(Me.jsxs)(Ee.a,{onClick:function(){return t(he(e))},disabled:!U(a,c),children:["Buy for $",C(c.nextPurchaseCost,!0)]})]},e)}))})},Ue=v(y(.75),B[E.juniorResearchAssistant].nextPurchaseCost),$e=function(e){var t=ke(),a=We(we),r=We(Pe),s=We(ve),n=We(Se),c=We(Oe),i=We(De),o=We(Ce);return 1!==G(r,Ue)?Object(Me.jsx)(f.a,{fontStyle:"italic",color:"gray.500",children:"If you collect enough money, maybe you can hire staff to research improvements."}):Object(Me.jsxs)(m.c,{align:"stretch",spacing:8,children:[Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"md",pb:4,children:"Researchers"}),Object(Me.jsx)(m.c,{align:"stretch",spacing:4,children:J.map((function(e){var s=c[e],n=Y[e],i=B[e].nextPurchaseCost;return-1===G(r,v(y(.75),i))?null:Object(Me.jsxs)(m.b,{children:[Object(Me.jsxs)(p.a,{as:"h3",size:"sm",pb:1,children:[n.name," x ",s.numberEmployed]}),Object(Me.jsxs)(f.a,{pb:2,fontSize:"sm",color:"gray.500",children:["Generates ",T(v(s.ideasPerDay,o))," ideas per day --"," ",n.colorText]}),Object(Me.jsxs)(Ee.a,{onClick:function(){return t(be(e))},disabled:!L(a,s),children:["Hire for $",C(s.nextPurchaseCost,!0)]})]},e)}))})]}),Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"md",pb:4,children:"Projects"}),n===y(0)?Object(Me.jsx)(f.a,{fontStyle:"italic",color:"gray.500",children:"Hire some researchers, and they might have an idea or two of how to improve your power grid."}):Object(Me.jsx)(m.c,{align:"stretch",spacing:4,children:ne.map((function(e){return i.includes(e.identifier)?null:-1!==G(n,v(y(.75),e.cost))&&ce(e,i)?Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h3",size:"sm",pb:1,children:e.name}),Object(Me.jsx)(f.a,{pb:2,fontSize:"sm",color:"gray.500",children:e.description}),Object(Me.jsxs)(Ee.a,{onClick:function(){return t(je(e.identifier))},disabled:!ie(s,e,i),children:["Purchase for ",T(e.cost)," ideas"]})]},e.identifier):null}))})]})]})},Ye=a(118),Be=a(86),Je=a(68),Le=function(e){var t=Object(Be.c)().toggleColorMode,a=Object(Be.d)("Switch to Dark Mode","Switch to Light Mode"),r=Object(Be.d)(Je.a,Je.b);return Object(Me.jsx)(Ee.a,{leftIcon:Object(Me.jsx)(r,{}),onClick:t,children:a})},qe=a(116),_e=a(126),Xe=a(34),Ke=function(e){return btoa(JSON.stringify(e))},Ve=function(e){try{return JSON.parse(atob(e))}catch(t){return}},Qe=function(e){localStorage.setItem("gameSave",Ke(e))},Ze=Object(Xe.a)((function(e){var t=Object(n.useState)(""),a=Object(W.a)(t,2),r=a[0],s=a[1],c=We(fe),i=Object(qe.a)(r),o=i.hasCopied,l=i.onCopy;return Object(n.useEffect)((function(){s(Ke(c))}),[s]),Object(Me.jsxs)(h.a,Object(I.a)(Object(I.a)({},e),{},{position:"relative",children:[Object(Me.jsx)(_e.a,{readOnly:!0,value:r,height:250}),Object(Me.jsx)(Ee.a,{onClick:l,variant:"solid",colorScheme:"teal",size:"xs",textTransform:"uppercase",position:"absolute",zIndex:1,top:3,right:6,children:o?"Copied!":"Copy"})]}))})),et=a(123),tt=Object(Xe.a)((function(e){var t=Object(n.useState)(""),a=Object(W.a)(t,2),r=a[0],s=a[1],c=Object(l.b)(),i=Object(et.a)();return Object(Me.jsxs)(h.a,Object(I.a)(Object(I.a)({},e),{},{children:[Object(Me.jsx)(_e.a,{value:r,onChange:function(e){return s(e.target.value)}}),Object(Me.jsx)(Ee.a,{mt:2,onClick:function(){if(window.confirm("This will overwrite all of your current save data, and cannot be undone. Are you sure you want to continue?")){var e=Ve(r);e?(c(pe(e)),i({title:"Save Imported",description:"Your game save has been imported successfully!",status:"success",duration:9e3,isClosable:!0,position:"top-right"})):i({title:"Import Failed",description:"Importing the game save failed. Check that you have entered the entire game state.",status:"error",duration:9e3,isClosable:!0,position:"top-right"})}},disabled:!r,children:"Import Data"})]}))})),at=function(e){var t=We(fe);return Object(Me.jsx)(Ee.a,Object(I.a)(Object(I.a)({},e),{},{onClick:function(){Qe(t)},children:"Save"}))},rt=function(e){var t=Object(n.useState)(!1),a=Object(W.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),i=Object(W.a)(c,2),o=i[0],l=i[1],d=ke();We(ye);return Object(Me.jsxs)(m.c,{align:"flex-start",spacing:8,children:[Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"sm",pb:2,children:"Theme"}),Object(Me.jsx)(Le,{})]}),Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"sm",pb:2,children:"Manual Game Saves"}),Object(Me.jsxs)(m.a,{spacing:4,children:[Object(Me.jsx)(at,{}),Object(Me.jsx)(Ee.a,{onClick:function(){l(!1),s(!r)},children:"Export Game Save"}),Object(Me.jsx)(Ee.a,{onClick:function(){s(!1),l(!o)},children:"Import Game Save"}),Object(Me.jsx)(Ee.a,{onClick:function(){window.confirm("This will reset all of your progress with no benefit, and cannot be undone. Are you sure you want to continue?")&&d(pe())},children:"Reset"})]}),r&&Object(Me.jsx)(Ze,{mt:4}),o&&Object(Me.jsx)(tt,{mt:4})]}),!1,Object(Me.jsxs)(m.b,{children:[Object(Me.jsx)(p.a,{as:"h2",size:"sm",mb:2,children:"About the Game"}),Object(Me.jsxs)(f.a,{color:"gray.500",fontStyle:"italic",children:["Version 0.1.1 \u2014"," ",Object(Me.jsx)(Ye.a,{color:"teal.500",href:"https://github.com/katzenbar/keep-the-lights-on",children:"https://github.com/katzenbar/keep-the-lights-on"})]}),Object(Me.jsxs)(f.a,{mt:2,children:["This game was developed as part of the"," ",Object(Me.jsx)(Ye.a,{color:"teal.500",href:"https://itch.io/jam/incremental-game-jam-2",children:"Incremental Game Jam 2"})," ","on itch.io, over the course of one week in February 2021. Because of the time limit, the game may not be very balanced and may have a few bugs. However, I hope that it is still enjoyable."]})]})]})},st=function(e){return Object(Me.jsxs)(Ne.e,{display:"flex",flexDirection:"column",maxH:"100vh",children:[Object(Me.jsxs)(Ne.b,{children:[Object(Me.jsx)(Ne.a,{children:"Generation"}),Object(Me.jsx)(Ne.a,{children:"Research"}),Object(Me.jsx)(Ne.a,{children:"Achievements"}),Object(Me.jsx)(Ne.a,{children:"Settings"})]}),Object(Me.jsxs)(Ne.d,{flexGrow:1,overflowY:"auto",children:[Object(Me.jsx)(Ne.c,{children:Object(Me.jsx)(He,{})}),Object(Me.jsx)(Ne.c,{children:Object(Me.jsx)($e,{})}),Object(Me.jsx)(Ne.c,{children:Object(Me.jsx)(Fe,{})}),Object(Me.jsx)(Ne.c,{children:Object(Me.jsx)(rt,{})})]})]})},nt=function(){var e=localStorage.getItem("gameSave");return e?Ve(e):void 0}();nt&&($={game:nt});var ct=Object(k.a)({preloadedState:$,reducer:{game:le.reducer}}),it=0;setInterval((function(){ct.dispatch(ue(it)),it=(it+1)%16}),62.5);var ot=ct,lt=a(119),dt=function(e){var t=We(fe);return Object(lt.a)((function(){Qe(t)}),3e4),null},ut=function(){return Object(Me.jsx)(l.a,{store:ot,children:Object(Me.jsxs)(d.a,{theme:u.theme,children:[Object(Me.jsx)(dt,{}),Object(Me.jsx)(h.a,{children:Object(Me.jsxs)(b.a,{minH:"100vh",height:"100vh",maxH:"100vh",direction:"row",alignItems:"stretch",children:[Object(Me.jsx)(h.a,{w:250,p:3,flexShrink:0,overflowY:"auto",children:Object(Me.jsx)(Re,{})}),Object(Me.jsx)(h.a,{children:Object(Me.jsx)(j.a,{orientation:"vertical"})}),Object(Me.jsx)(h.a,{flexGrow:1,children:Object(Me.jsx)(st,{})})]})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(Me.jsxs)(c.a.StrictMode,{children:[Object(Me.jsx)(s.a,{}),Object(Me.jsx)(ut,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.70134f43.chunk.js.map