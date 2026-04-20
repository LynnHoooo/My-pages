1:"$Sreact.fragment"
3:I[3719,["461","static/chunks/461-a9a5d7b05a71d978.js","874","static/chunks/874-6cc630662f3664af.js","291","static/chunks/291-e39730cc9327e39b.js","177","static/chunks/app/layout-1184d0d2a29e34fc.js"],"ThemeProvider"]
4:I[310,["461","static/chunks/461-a9a5d7b05a71d978.js","874","static/chunks/874-6cc630662f3664af.js","291","static/chunks/291-e39730cc9327e39b.js","177","static/chunks/app/layout-1184d0d2a29e34fc.js"],"LocaleProvider"]
5:I[4574,["461","static/chunks/461-a9a5d7b05a71d978.js","874","static/chunks/874-6cc630662f3664af.js","291","static/chunks/291-e39730cc9327e39b.js","177","static/chunks/app/layout-1184d0d2a29e34fc.js"],"default"]
6:I[7555,[],""]
7:I[1295,[],""]
8:I[2548,["461","static/chunks/461-a9a5d7b05a71d978.js","874","static/chunks/874-6cc630662f3664af.js","291","static/chunks/291-e39730cc9327e39b.js","177","static/chunks/app/layout-1184d0d2a29e34fc.js"],"default"]
9:I[9665,[],"MetadataBoundary"]
b:I[9665,[],"OutletBoundary"]
e:I[4911,[],"AsyncMetadataOutlet"]
10:I[9665,[],"ViewportBoundary"]
12:I[6614,[],""]
:HL["/_next/static/css/1323167429cc407e.css","style"]
2:T590,
    try {
      const cfg = {"enabled":true,"locales":["zh","en"],"defaultLocale":"en","mode":"auto","fixedLocale":"en","persist":true,"switcher":true,"labels":{"zh":"中文","en":"English"}};
      const storageKey = 'locale-storage';
      const normalize = (value) => typeof value === 'string' ? value.trim().replace('_', '-').toLowerCase() : '';
      const matchLocale = (candidate) => {
        const normalized = normalize(candidate);
        if (!normalized) return null;
        if (cfg.locales.includes(normalized)) return normalized;
        const language = normalized.split('-')[0];
        if (cfg.locales.includes(language)) return language;
        return null;
      };

      let resolved = null;

      if (cfg.persist) {
        resolved = matchLocale(localStorage.getItem(storageKey));
      }

      if (!resolved) {
        if (cfg.mode === 'fixed') {
          resolved = cfg.fixedLocale;
        } else {
          resolved = matchLocale(navigator.language);
        }
      }

      if (!resolved) {
        resolved = cfg.defaultLocale;
      }

      const root = document.documentElement;
      root.lang = resolved;
      root.setAttribute('data-locale', resolved);

      if (cfg.persist) {
        localStorage.setItem(storageKey, resolved);
      }
    } catch (e) {
      const root = document.documentElement;
      root.lang = 'en';
      root.setAttribute('data-locale', 'en');
    }
  0:{"P":null,"b":"QCGPBSyEjnoYba5DNogAO","p":"","c":["","_not-found",""],"i":false,"f":[[["",{"children":["/_not-found",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/1323167429cc407e.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","className":"scroll-smooth","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","href":"/favicon.svg","type":"image/svg+xml"}],["$","link",null,{"rel":"dns-prefetch","href":"https://jialeliu.com"}],["$","link",null,{"rel":"preconnect","href":"https://jialeliu.com","crossOrigin":""}],["$","link",null,{"rel":"preload","as":"font","type":"font/woff2","href":"https://jialeliu.com/fonts/georgiab.woff2","crossOrigin":""}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"\n              try {\n                const theme = localStorage.getItem('theme-storage');\n                const parsed = theme ? JSON.parse(theme) : null;\n                const setting = parsed?.state?.theme || 'system';\n                const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;\n                const effective = setting === 'dark' ? 'dark' : (setting === 'light' ? 'light' : (prefersDark ? 'dark' : 'light'));\n                var root = document.documentElement;\n                root.classList.add(effective);\n                root.setAttribute('data-theme', effective);\n              } catch (e) {\n                var root = document.documentElement;\n                root.classList.add('light');\n                root.setAttribute('data-theme', 'light');\n              }\n            "}}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}]]}],["$","body",null,{"className":"font-sans antialiased","children":["$","$L3",null,{"children":["$","$L4",null,{"config":{"enabled":true,"locales":["zh","en"],"defaultLocale":"en","mode":"auto","fixedLocale":"en","persist":true,"switcher":true,"labels":{"zh":"中文","en":"English"}},"children":[["$","$L5",null,{"items":[{"title":"About","type":"page","target":"about","href":"/"},{"title":"Publications","type":"page","target":"publications","href":"/publications"},{"title":"Teaching","type":"page","target":"teaching","href":"/teaching"},{"title":"Awards","type":"page","target":"awards","href":"/awards"},{"title":"Services","type":"page","target":"services","href":"/services"},{"title":"CV","type":"page","target":"cv","href":"/cv"}],"siteTitle":"Jiale Liu","enableOnePageMode":false,"i18n":"$0:f:0:1:1:props:children:1:props:children:1:props:children:props:children:props:config","itemsByLocale":{"zh":[{"title":"关于我","type":"page","target":"about","href":"/"},{"title":"论文","type":"page","target":"publications","href":"/publications"},{"title":"教学","type":"page","target":"teaching","href":"/teaching"},{"title":"奖项","type":"page","target":"awards","href":"/awards"},{"title":"服务","type":"page","target":"services","href":"/services"},{"title":"简历","type":"page","target":"cv","href":"/cv"}],"en":[{"title":"About","type":"page","target":"about","href":"/"},{"title":"Publications","type":"page","target":"publications","href":"/publications"},{"title":"Teaching","type":"page","target":"teaching","href":"/teaching"},{"title":"Awards","type":"page","target":"awards","href":"/awards"},{"title":"Services","type":"page","target":"services","href":"/services"},{"title":"CV","type":"page","target":"cv","href":"/cv"}]},"siteTitleByLocale":{"zh":"刘嘉乐","en":"Jiale Liu"}}],["$","main",null,{"className":"min-h-screen pt-16 lg:pt-20","children":["$","$L6",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L7",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","$L8",null,{"lastUpdated":"November 18, 2025","lastUpdatedByLocale":{"zh":"2025年11月18日","en":"November 18, 2025"},"defaultLocale":"en"}]]}]}]}]]}]]}],{"children":["/_not-found",["$","$1","c",{"children":[null,["$","$L6",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L7",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:1:props:children:props:children:props:children:1:props:children:props:notFound:0:1:props:style","children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":"$0:f:0:1:1:props:children:1:props:children:1:props:children:props:children:props:children:1:props:children:props:notFound:0:1:props:children:props:children:1:props:style","children":404}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:1:props:children:props:children:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:style","children":["$","h2",null,{"style":"$0:f:0:1:1:props:children:1:props:children:1:props:children:props:children:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:children:props:style","children":"This page could not be found."}]}]]}]}]],["$","$L9",null,{"children":"$La"}],null,["$","$Lb",null,{"children":["$Lc","$Ld",["$","$Le",null,{"promise":"$@f"}]]}]]}],{},null,false]},null,false]},null,false],["$","$1","h",{"children":[["$","meta",null,{"name":"robots","content":"noindex"}],["$","$1","nmoYcrkYUN-panM7dxPRn",{"children":[["$","$L10",null,{"children":"$L11"}],null]}],null]}],false]],"m":"$undefined","G":["$12","$undefined"],"s":false,"S":true}
13:"$Sreact.suspense"
14:I[4911,[],"AsyncMetadata"]
a:["$","$13",null,{"fallback":null,"children":["$","$L14",null,{"promise":"$@15"}]}]
d:null
11:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
c:null
15:{"metadata":[["$","title","0",{"children":"Jiale Liu"}],["$","meta","1",{"name":"description","content":"PhD student at the University of Example."}],["$","meta","2",{"name":"author","content":"Jiale Liu"}],["$","meta","3",{"name":"keywords","content":"Jiale Liu,PhD,Research,University of Example"}],["$","meta","4",{"name":"creator","content":"Jiale Liu"}],["$","meta","5",{"name":"publisher","content":"Jiale Liu"}],["$","meta","6",{"property":"og:title","content":"Jiale Liu"}],["$","meta","7",{"property":"og:description","content":"PhD student at the University of Example."}],["$","meta","8",{"property":"og:site_name","content":"Jiale Liu's Academic Website"}],["$","meta","9",{"property":"og:locale","content":"en_US"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary"}],["$","meta","12",{"name":"twitter:title","content":"Jiale Liu"}],["$","meta","13",{"name":"twitter:description","content":"PhD student at the University of Example."}],["$","link","14",{"rel":"icon","href":"/favicon.svg"}]],"error":null,"digest":"$undefined"}
f:{"metadata":"$15:metadata","error":null,"digest":"$undefined"}
