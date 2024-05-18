"use strict";(self.webpackChunkmy_portfolio_website=self.webpackChunkmy_portfolio_website||[]).push([[1927],{1927:(t,i,e)=>{e.d(i,{Container:()=>D});var s=e(2496),n=e(8164),o=e(6480),a=e(753);function r(t,i,e){const s=i[e];var n;void 0!==s&&(t[e]=(null!==(n=t[e])&&void 0!==n?n:1)*s)}function h(t,i){let e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!i)return;if(!t)return;const s=t.style;if(s)for(const n in i){const t=i[n];t&&s.setProperty(n,t,e?"important":"")}}class l{constructor(t){this.container=t,this._applyPostDrawUpdaters=t=>{for(const e of this._postDrawUpdaters){var i;null===(i=e.afterDraw)||void 0===i||i.call(e,t)}},this._applyPreDrawUpdaters=(t,i,e,s,n,o)=>{for(const h of this._preDrawUpdaters){var a;if(h.getColorStyles){const{fill:o,stroke:a}=h.getColorStyles(i,t,e,s);o&&(n.fill=o),a&&(n.stroke=a)}if(h.getTransformValues){const t=h.getTransformValues(i);for(const i in t)r(o,t,i)}null===(a=h.beforeDraw)||void 0===a||a.call(h,i)}},this._applyResizePlugins=()=>{for(const i of this._resizePlugins){var t;null===(t=i.resize)||void 0===t||t.call(i)}},this._getPluginParticleColors=t=>{let i,e;for(const s of this._colorPlugins)if(!i&&s.particleFillColor&&(i=(0,a.R5)(s.particleFillColor(t))),!e&&s.particleStrokeColor&&(e=(0,a.R5)(s.particleStrokeColor(t))),i&&e)break;return[i,e]},this._initCover=async()=>{const t=this.container.actualOptions.backgroundMask.cover,i=t.color;if(i){const e=(0,a.BN)(i);if(e){const i={...e,a:t.opacity};this._coverColorStyle=(0,a.xx)(i,i.a)}}else await new Promise(((i,e)=>{if(!t.image)return;const s=document.createElement("img");s.addEventListener("load",(()=>{this._coverImage={image:s,opacity:t.opacity},i()})),s.addEventListener("error",(t=>{e(t.error)})),s.src=t.image}))},this._initStyle=()=>{const t=this.element,i=this.container.actualOptions;if(t){this._fullScreen?(this._originalStyle=(0,n.zw)({},t.style),this._setFullScreenStyle()):this._resetOriginalStyle();for(const e in i.style){if(!e||!i.style)continue;const s=i.style[e];s&&t.style.setProperty(e,s,"important")}}},this._initTrail=async()=>{const t=this.container.actualOptions.particles.move.trail,i=t.fill;if(!t.enable)return;const e=1/t.length;if(i.color){const t=(0,a.BN)(i.color);if(!t)return;this._trailFill={color:{...t},opacity:e}}else await new Promise(((t,s)=>{if(!i.image)return;const n=document.createElement("img");n.addEventListener("load",(()=>{this._trailFill={image:n,opacity:e},t()})),n.addEventListener("error",(t=>{s(t.error)})),n.src=i.image}))},this._paintBase=t=>{this.draw((i=>(0,o.Sn)(i,this.size,t)))},this._paintImage=(t,i)=>{this.draw((e=>(0,o.Md)(e,this.size,t,i)))},this._repairStyle=()=>{const t=this.element;t&&(this._safeMutationObserver((t=>t.disconnect())),this._initStyle(),this.initBackground(),this._safeMutationObserver((i=>i.observe(t,{attributes:!0}))))},this._resetOriginalStyle=()=>{const t=this.element,i=this._originalStyle;t&&i&&h(t,i)},this._safeMutationObserver=t=>{this._mutationObserver&&t(this._mutationObserver)},this._setFullScreenStyle=()=>{const t=this.element;if(!t)return;h(t,{position:"fixed",zIndex:this.container.actualOptions.fullScreen.zIndex.toString(10),top:"0",left:"0",width:"100%",height:"100%"},!0)},this.size={height:0,width:0},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){const t=this.container.actualOptions,i=t.particles.move.trail,e=this._trailFill;t.backgroundMask.enable?this.paint():i.enable&&i.length>0&&e?e.color?this._paintBase((0,a.xx)(e.color,e.opacity)):e.image&&this._paintImage(e.image,e.opacity):t.clear&&this.draw((t=>{(0,o.IU)(t,this.size)}))}destroy(){if(this.stop(),this._generated){const t=this.element;null===t||void 0===t||t.remove()}else this._resetOriginalStyle();this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(t){const i=this._context;if(i)return t(i)}drawAsync(t){const i=this._context;if(i)return t(i)}drawParticle(t,i){var e;if(t.spawning||t.destroyed)return;const s=t.getRadius();if(s<=0)return;const n=t.getFillColor(),r=null!==(e=t.getStrokeColor())&&void 0!==e?e:n;let[h,l]=this._getPluginParticleColors(t);h||(h=n),l||(l=r),(h||l)&&this.draw((e=>{var n,r,c,d;const u=this.container,p=u.actualOptions,f=t.options.zIndex,v=1-t.zIndexFactor,_=v**f.opacityRate,g=null!==(n=null!==(r=t.bubble.opacity)&&void 0!==r?r:null===(c=t.opacity)||void 0===c?void 0:c.value)&&void 0!==n?n:1,m=g*_,y=(null!==(d=t.strokeOpacity)&&void 0!==d?d:g)*_,w={},b={fill:h?(0,a.LC)(h,m):void 0};b.stroke=l?(0,a.LC)(l,y):b.fill,this._applyPreDrawUpdaters(e,t,s,m,b,w),(0,o.p0)({container:u,context:e,particle:t,delta:i,colorStyles:b,backgroundMask:p.backgroundMask.enable,composite:p.backgroundMask.composite,radius:s*v**f.sizeRate,opacity:m,shadow:t.options.shadow,transform:w}),this._applyPostDrawUpdaters(t)}))}drawParticlePlugin(t,i,e){this.draw((s=>(0,o.Wb)(s,t,i,e)))}drawPlugin(t,i){this.draw((e=>(0,o.e_)(e,t,i)))}async init(){this._safeMutationObserver((t=>t.disconnect())),this._mutationObserver=(0,n.tG)((t=>{for(const i of t)"attributes"===i.type&&"style"===i.attributeName&&this._repairStyle()})),this.resize(),this._initStyle(),await this._initCover();try{await this._initTrail()}catch(t){(0,n.tZ)().error(t)}this.initBackground(),this._safeMutationObserver((t=>{this.element&&t.observe(this.element,{attributes:!0})})),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){const t=this.container.actualOptions.background,i=this.element;if(!i)return;const e=i.style;if(e){if(t.color){const i=(0,a.BN)(t.color);e.backgroundColor=i?(0,a.xx)(i,t.opacity):""}else e.backgroundColor="";e.backgroundImage=t.image||"",e.backgroundPosition=t.position||"",e.backgroundRepeat=t.repeat||"",e.backgroundSize=t.size||""}}initPlugins(){this._resizePlugins=[];for(const[,i]of this.container.plugins){var t;i.resize&&this._resizePlugins.push(i),(null!==(t=i.particleFillColor)&&void 0!==t?t:i.particleStrokeColor)&&this._colorPlugins.push(i)}}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(const e of this.container.particles.updaters){var t,i;e.afterDraw&&this._postDrawUpdaters.push(e),(null!==(t=null!==(i=e.getColorStyles)&&void 0!==i?i:e.getTransformValues)&&void 0!==t?t:e.beforeDraw)&&this._preDrawUpdaters.push(e)}}loadCanvas(t){this._generated&&this.element&&this.element.remove(),this._generated=t.dataset&&s.eb in t.dataset?"true"===t.dataset[s.eb]:this._generated,this.element=t,this.element.ariaHidden="true",this._originalStyle=(0,n.zw)({},this.element.style),this.size.height=t.offsetHeight,this.size.width=t.offsetWidth,this._context=this.element.getContext("2d"),this._safeMutationObserver((t=>{this.element&&t.observe(this.element,{attributes:!0})})),this.container.retina.init(),this.initBackground()}paint(){const t=this.container.actualOptions;this.draw((i=>{t.backgroundMask.enable&&t.backgroundMask.cover?((0,o.IU)(i,this.size),this._coverImage?this._paintImage(this._coverImage.image,this._coverImage.opacity):this._coverColorStyle?this._paintBase(this._coverColorStyle):this._paintBase()):this._paintBase()}))}resize(){if(!this.element)return!1;const t=this.container,i=t.retina.pixelRatio,e=t.canvas.size,s=this.element.offsetWidth*i,n=this.element.offsetHeight*i;if(n===e.height&&s===e.width&&n===this.element.height&&s===this.element.width)return!1;const o={...e};return this.element.width=e.width=this.element.offsetWidth*i,this.element.height=e.height=this.element.offsetHeight*i,this.container.started&&t.particles.setResizeFactor({width:e.width/o.width,height:e.height/o.height}),!0}stop(){this._safeMutationObserver((t=>t.disconnect())),this._mutationObserver=void 0,this.draw((t=>(0,o.IU)(t,this.size)))}async windowResize(){if(!this.element||!this.resize())return;const t=this.container,i=t.updateActualOptions();t.particles.setDensity(),this._applyResizePlugins(),i&&await t.refresh()}}var c=e(5268);function d(t,i,e,s,n){if(s){let s={passive:!0};(0,c.Lm)(n)?s.capture=n:void 0!==n&&(s=n),t.addEventListener(i,e,s)}else{const s=n;t.removeEventListener(i,e,s)}}class u{constructor(t){this.container=t,this._doMouseTouchClick=t=>{const i=this.container,e=i.actualOptions;if(this._canPush){const t=i.interactivity.mouse,s=t.position;if(!s)return;t.clickPosition={...s},t.clickTime=(new Date).getTime();const o=e.interactivity.events.onClick;(0,n.wJ)(o.mode,(t=>this.container.handleClickMode(t)))}if("touchend"===t.type){setTimeout((()=>this._mouseTouchFinish()),500)}},this._handleThemeChange=t=>{const i=t,e=this.container,s=e.options,n=s.defaultThemes,o=i.matches?n.dark:n.light,a=s.themes.find((t=>t.name===o));a&&a.default.auto&&e.loadTheme(o)},this._handleVisibilityChange=()=>{const t=this.container,i=t.actualOptions;this._mouseTouchFinish(),i.pauseOnBlur&&(document&&document.hidden?(t.pageHidden=!0,t.pause()):(t.pageHidden=!1,t.animationStatus?t.play(!0):t.draw(!0)))},this._handleWindowResize=()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout);const t=async()=>{const t=this.container.canvas;await(null===t||void 0===t?void 0:t.windowResize())};this._resizeTimeout=setTimeout((()=>{t()}),this.container.actualOptions.interactivity.events.resize.delay*s.Xu)},this._manageInteractivityListeners=(t,i)=>{const e=this._handlers,n=this.container,o=n.actualOptions,a=n.interactivity.element;if(!a)return;const r=a,h=n.canvas.element;h&&(h.style.pointerEvents=r===h?"initial":"none"),(o.interactivity.events.onHover.enable||o.interactivity.events.onClick.enable)&&(d(a,s.Rb,e.mouseMove,i),d(a,s.s7,e.touchStart,i),d(a,s.DG,e.touchMove,i),o.interactivity.events.onClick.enable?(d(a,s.Bp,e.touchEndClick,i),d(a,s.vo,e.mouseUp,i),d(a,s.ms,e.mouseDown,i)):d(a,s.Bp,e.touchEnd,i),d(a,t,e.mouseLeave,i),d(a,s.G3,e.touchCancel,i))},this._manageListeners=t=>{const i=this._handlers,e=this.container,n=e.actualOptions.interactivity.detectsOn,o=e.canvas.element;let a=s.Z0;if("window"===n)e.interactivity.element=window,a=s.sf;else if("parent"===n&&o){var r;e.interactivity.element=null!==(r=o.parentElement)&&void 0!==r?r:o.parentNode}else e.interactivity.element=o;this._manageMediaMatch(t),this._manageResize(t),this._manageInteractivityListeners(a,t),document&&d(document,s.nK,i.visibilityChange,t,!1)},this._manageMediaMatch=t=>{const i=this._handlers,e=(0,n.lV)("(prefers-color-scheme: dark)");e&&(void 0===e.addEventListener?void 0!==e.addListener&&(t?e.addListener(i.oldThemeChange):e.removeListener(i.oldThemeChange)):d(e,"change",i.themeChange,t))},this._manageResize=t=>{const i=this._handlers,e=this.container;if(!e.actualOptions.interactivity.events.resize)return;if("undefined"===typeof ResizeObserver)return void d(window,s.NF,i.resize,t);const n=e.canvas.element;this._resizeObserver&&!t?(n&&this._resizeObserver.unobserve(n),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&t&&n&&(this._resizeObserver=new ResizeObserver((t=>{t.find((t=>t.target===n))&&this._handleWindowResize()})),this._resizeObserver.observe(n))},this._mouseDown=()=>{const{interactivity:t}=this.container;if(!t)return;const{mouse:i}=t;i.clicking=!0,i.downPosition=i.position},this._mouseTouchClick=t=>{const i=this.container,e=i.actualOptions,{mouse:s}=i.interactivity;s.inside=!0;let n=!1;const o=s.position;if(o&&e.interactivity.events.onClick.enable){for(const[,t]of i.plugins)if(t.clickPositionValid&&(n=t.clickPositionValid(o),n))break;n||this._doMouseTouchClick(t),s.clicking=!1}},this._mouseTouchFinish=()=>{const t=this.container.interactivity;if(!t)return;const i=t.mouse;delete i.position,delete i.clickPosition,delete i.downPosition,t.status=s.Z0,i.inside=!1,i.clicking=!1},this._mouseTouchMove=t=>{const i=this.container,e=i.actualOptions,n=i.interactivity,o=i.canvas.element;if(null===n||void 0===n||!n.element)return;let a;if(n.mouse.inside=!0,t.type.startsWith("pointer")){this._canPush=!0;const i=t;if(n.element===window){if(o){const t=o.getBoundingClientRect();a={x:i.clientX-t.left,y:i.clientY-t.top}}}else if("parent"===e.interactivity.detectsOn){const t=i.target,e=i.currentTarget;if(t&&e&&o){const s=t.getBoundingClientRect(),n=e.getBoundingClientRect(),r=o.getBoundingClientRect();a={x:i.offsetX+2*s.left-(n.left+r.left),y:i.offsetY+2*s.top-(n.top+r.top)}}else{var r,h;a={x:null!==(r=i.offsetX)&&void 0!==r?r:i.clientX,y:null!==(h=i.offsetY)&&void 0!==h?h:i.clientY}}}else if(i.target===o){var l,c;a={x:null!==(l=i.offsetX)&&void 0!==l?l:i.clientX,y:null!==(c=i.offsetY)&&void 0!==c?c:i.clientY}}}else if(this._canPush="touchmove"!==t.type,o){var d,u;const i=t,e=1,s=i.touches[i.touches.length-e],n=o.getBoundingClientRect(),r=0;a={x:s.clientX-(null!==(d=n.left)&&void 0!==d?d:r),y:s.clientY-(null!==(u=n.top)&&void 0!==u?u:r)}}const p=i.retina.pixelRatio;a&&(a.x*=p,a.y*=p),n.mouse.position=a,n.status=s.Rb},this._touchEnd=t=>{const i=t,e=Array.from(i.changedTouches);for(const s of e)this._touches.delete(s.identifier);this._mouseTouchFinish()},this._touchEndClick=t=>{const i=t,e=Array.from(i.changedTouches);for(const s of e)this._touches.delete(s.identifier);this._mouseTouchClick(t)},this._touchStart=t=>{const i=t,e=Array.from(i.changedTouches);for(const s of e)this._touches.set(s.identifier,performance.now());this._mouseTouchMove(t)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:t=>this._mouseTouchMove(t),mouseUp:t=>this._mouseTouchClick(t),touchStart:t=>this._touchStart(t),touchMove:t=>this._mouseTouchMove(t),touchEnd:t=>this._touchEnd(t),touchCancel:t=>this._touchEnd(t),touchEndClick:t=>this._touchEndClick(t),visibilityChange:()=>this._handleVisibilityChange(),themeChange:t=>this._handleThemeChange(t),oldThemeChange:t=>this._handleThemeChange(t),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}var p=e(8888);class f{constructor(t,i){this.container=i,this._engine=t,this._interactors=[],this._externalInteractors=[],this._particleInteractors=[]}externalInteract(t){for(const i of this._externalInteractors)i.isEnabled()&&i.interact(t)}handleClickMode(t){for(const e of this._externalInteractors){var i;null===(i=e.handleClickMode)||void 0===i||i.call(e,t)}}async init(){this._interactors=await this._engine.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[];for(const t of this._interactors){switch(t.type){case"external":this._externalInteractors.push(t);break;case"particles":this._particleInteractors.push(t)}t.init()}}particlesInteract(t,i){for(const e of this._externalInteractors)e.clear(t,i);for(const e of this._particleInteractors)e.isEnabled(t)&&e.interact(t,i)}reset(t){for(const i of this._externalInteractors)i.isEnabled()&&i.reset(t);for(const i of this._particleInteractors)i.isEnabled(t)&&i.reset(t)}}var v=e(8025),_=e(9135),g=e(1189),m=e(8802);const y=.5;function w(t){if(!(0,n.hn)(t.outMode,t.checkModes))return;const i=2*t.radius;t.coord>t.maxCoord-i?t.setCb(-t.radius):t.coord<i&&t.setCb(t.radius)}class b{constructor(t,i){var e=this;this.container=i,this._calcPosition=function(t,i,s){var n,o,a,r;let h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;for(const[,_]of t.plugins){const t=void 0!==_.particlePosition?_.particlePosition(i,e):void 0;if(t)return v.p.create(t.x,t.y,s)}const l=t.canvas.size,c=(0,_.Nx)({size:l,position:i}),d=v.p.create(c.x,c.y,s),u=e.getRadius(),p=e.options.move.outModes,f=i=>{w({outMode:i,checkModes:["bounce"],coord:d.x,maxCoord:t.canvas.size.width,setCb:t=>d.x+=t,radius:u})},g=i=>{w({outMode:i,checkModes:["bounce"],coord:d.y,maxCoord:t.canvas.size.height,setCb:t=>d.y+=t,radius:u})};if(f(null!==(n=p.left)&&void 0!==n?n:p.default),f(null!==(o=p.right)&&void 0!==o?o:p.default),g(null!==(a=p.top)&&void 0!==a?a:p.default),g(null!==(r=p.bottom)&&void 0!==r?r:p.default),e._checkOverlap(d,h)){const i=1;return e._calcPosition(t,void 0,s,h+i)}return d},this._calculateVelocity=()=>{const t=(0,_.$m)(this.direction).copy(),i=this.options.move;if("inside"===i.direction||"outside"===i.direction)return t;const e=(0,_.pu)((0,_.VG)(i.angle.value)),s=(0,_.pu)((0,_.VG)(i.angle.offset)),n={left:s-e*y,right:s+e*y};return i.straight||(t.angle+=(0,_.U4)((0,_.DT)(n.left,n.right))),i.random&&"number"===typeof i.speed&&(t.length*=(0,_.G0)()),t},this._checkOverlap=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=e.options.collisions,o=e.getRadius();if(!n.enable)return!1;const a=n.overlap;if(a.enable)return!1;const r=a.retries;if(r>=0&&i>r)throw new Error("".concat(s.dI," particle is overlapping and can't be placed"));return!!e.container.particles.find((i=>(0,_.Yf)(t,i.position)<o+i.getRadius()))},this._getRollColor=t=>{var i;if(!t||!this.roll||!this.backColor&&!this.roll.alter)return t;const e=this.roll.horizontal&&this.roll.vertical?2:1,s=this.roll.horizontal?Math.PI*y:0;return Math.floor(((null!==(i=this.roll.angle)&&void 0!==i?i:0)+s)/(Math.PI/e))%2?this.backColor?this.backColor:this.roll.alter?(0,o.yx)(t,this.roll.alter.type,this.roll.alter.value):t:t},this._initPosition=t=>{var i,e;const s=this.container,o=(0,_.VG)(this.options.zIndex.value);this.position=this._calcPosition(s,t,(0,_.qE)(o,0,s.zLayers)),this.initialPosition=this.position.copy();const a=s.canvas.size;switch(this.moveCenter={...(0,n.E9)(this.options.move.center,a),radius:null!==(i=this.options.move.center.radius)&&void 0!==i?i:0,mode:null!==(e=this.options.move.center.mode)&&void 0!==e?e:"percent"},this.direction=(0,_.JY)(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case"inside":this.outType="inside";break;case"outside":this.outType="outside"}this.offset=v.M.origin},this._engine=t}destroy(t){var i;if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const e=this.container,s=this.pathGenerator,n=e.shapeDrawers.get(this.shape);null===n||void 0===n||null===(i=n.particleDestroy)||void 0===i||i.call(n,this);for(const[,r]of e.plugins){var o;null===(o=r.particleDestroyed)||void 0===o||o.call(r,this,t)}for(const r of e.particles.updaters){var a;null===(a=r.particleDestroyed)||void 0===a||a.call(r,this,t)}null===s||void 0===s||s.reset(this),this._engine.dispatchEvent("particleDestroyed",{container:this.container,data:{particle:this}})}draw(t){const i=this.container,e=i.canvas;for(const[,s]of i.plugins)e.drawParticlePlugin(s,this,t);e.drawParticle(this,t)}getFillColor(){var t;return this._getRollColor(null!==(t=this.bubble.color)&&void 0!==t?t:(0,a.O_)(this.color))}getMass(){return this.getRadius()**2*Math.PI*y}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){var t;return null!==(t=this.bubble.radius)&&void 0!==t?t:this.size.value}getStrokeColor(){var t;return this._getRollColor(null!==(t=this.bubble.color)&&void 0!==t?t:(0,a.O_)(this.strokeColor))}init(t,i,e,o){var r,h,l,c,d,u,p,f,v,y,w;const b=this.container,z=this._engine;this.id=t,this.group=o,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType="normal",this.ignoresResizeRatio=!0;const C=b.retina.pixelRatio,x=b.actualOptions,k=(0,m.y)(this._engine,b,x.particles),P=k.effect.type,O=k.shape.type,{reduceDuplicates:T}=k;this.effect=(0,n.TA)(P,this.id,T),this.shape=(0,n.TA)(O,this.id,T);const M=k.effect,S=k.shape;if(e){var D,I;if(null!==(D=e.effect)&&void 0!==D&&D.type){const t=e.effect.type,i=(0,n.TA)(t,this.id,T);i&&(this.effect=i,M.load(e.effect))}if(null!==(I=e.shape)&&void 0!==I&&I.type){const t=e.shape.type,i=(0,n.TA)(t,this.id,T);i&&(this.shape=i,S.load(e.shape))}}this.effectData=function(t,i,e,s){const o=i.options[t];if(o)return(0,n.zw)({close:i.close,fill:i.fill},(0,n.TA)(o,e,s))}(this.effect,M,this.id,T),this.shapeData=function(t,i,e,s){const o=i.options[t];if(o)return(0,n.zw)({close:i.close,fill:i.fill},(0,n.TA)(o,e,s))}(this.shape,S,this.id,T),k.load(e);const R=this.effectData;R&&k.load(R.particles);const E=this.shapeData;E&&k.load(E.particles);const L=new g.k(z,b);L.load(b.actualOptions.interactivity),L.load(k.interactivity),this.interactivity=L,this.effectFill=null!==(r=null===R||void 0===R?void 0:R.fill)&&void 0!==r?r:k.effect.fill,this.effectClose=null!==(h=null===R||void 0===R?void 0:R.close)&&void 0!==h?h:k.effect.close,this.shapeFill=null!==(l=null===E||void 0===E?void 0:E.fill)&&void 0!==l?l:k.shape.fill,this.shapeClose=null!==(c=null===E||void 0===E?void 0:E.close)&&void 0!==c?c:k.shape.close,this.options=k;const F=this.options.move.path;this.pathDelay=(0,_.VG)(F.delay.value)*s.Xu,F.generator&&(this.pathGenerator=this._engine.getPathGenerator(F.generator),this.pathGenerator&&b.addPath(F.generator,this.pathGenerator)&&this.pathGenerator.init(b)),b.retina.initParticle(this),this.size=(0,n.Xs)(this.options.size,C),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(i),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy();this.moveDecay=1-(0,_.VG)(this.options.move.decay);const A=b.particles;A.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/b.zLayers,this.sides=24;let G=b.effectDrawers.get(this.effect);G||(G=this._engine.getEffectDrawer(this.effect),G&&b.effectDrawers.set(this.effect,G)),null!==(d=G)&&void 0!==d&&d.loadEffect&&G.loadEffect(this);let V=b.shapeDrawers.get(this.shape);V||(V=this._engine.getShapeDrawer(this.shape),V&&b.shapeDrawers.set(this.shape,V)),null!==(u=V)&&void 0!==u&&u.loadShape&&V.loadShape(this);const B=null===(p=V)||void 0===p?void 0:p.getSidesCount;B&&(this.sides=B(this)),this.spawning=!1,this.shadowColor=(0,a.BN)(this.options.shadow.color);for(const s of A.updaters)s.init(this);for(const s of A.movers){var U;null===(U=s.init)||void 0===U||U.call(s,this)}null===(f=G)||void 0===f||null===(v=f.particleInit)||void 0===v||v.call(f,b,this),null===(y=V)||void 0===y||null===(w=y.particleInit)||void 0===w||w.call(y,b,this);for(const[,s]of b.plugins){var X;null===(X=s.particleCreated)||void 0===X||X.call(s,this)}}isInsideCanvas(){const t=this.getRadius(),i=this.container.canvas.size,e=this.position;return e.x>=-t&&e.y>=-t&&e.y<=i.height+t&&e.x<=i.width+t}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(const i of this.container.particles.updaters){var t;null===(t=i.reset)||void 0===t||t.call(i,this)}}}class z{constructor(t,i){this.position=t,this.particle=i}}var C=e(4859);const x=.5;class k{constructor(t,i){this.rectangle=t,this.capacity=i,this._subdivide=()=>{const{x:t,y:i}=this.rectangle.position,{width:e,height:s}=this.rectangle.size,{capacity:n}=this;for(let o=0;o<4;o++){const a=o%2;this._subs.push(new k(new C.M_(t+e*x*a,i+s*x*(Math.round(o*x)-a),e*x,s*x),n))}this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(t){return!!this.rectangle.contains(t.position)&&(this._points.length<this.capacity?(this._points.push(t),!0):(this._divided||this._subdivide(),this._subs.some((i=>i.insert(t)))))}query(t,i){const e=[];if(!t.intersects(this.rectangle))return[];for(const s of this._points)!t.contains(s.position)&&(0,_.Yf)(t.position,s.position)>s.particle.getRadius()&&(!i||i(s.particle))||e.push(s.particle);if(this._divided)for(const s of this._subs)e.push(...s.query(t,i));return e}queryCircle(t,i,e){return this.query(new C.jl(t.x,t.y,i),e)}queryRectangle(t,i,e){return this.query(new C.M_(t.x,t.y,i.width,i.height),e)}}const P=t=>{const{height:i,width:e}=t;return new C.M_(-.25*e,-.25*i,1.5*e,1.5*i)};class O{constructor(t,i){var e=this;this._addToPool=function(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];for(const n of i)e._pool.push(n)},this._applyDensity=(t,i,e)=>{var s;const n=t.number;if(null===(s=t.number.density)||void 0===s||!s.enable)return void(void 0===e?this._limit=n.limit.value:n.limit&&this._groupLimits.set(e,n.limit.value));const o=this._initDensityFactor(n.density),a=n.value,r=n.limit.value>0?n.limit.value:a,h=Math.min(a,r)*o+i,l=Math.min(this.count,this.filter((t=>t.group===e)).length);void 0===e?this._limit=n.limit.value*o:this._groupLimits.set(e,n.limit.value*o),l<h?this.push(Math.abs(h-l),void 0,t,e):l>h&&this.removeQuantity(l-h,e)},this._initDensityFactor=t=>{const i=this._container;if(!i.canvas.element||!t.enable)return 1;const e=i.canvas.element,s=i.retina.pixelRatio;return e.width*e.height/(t.height*t.width*s**2)},this._pushParticle=(t,i,e,o)=>{try{let s=this._pool.pop();s||(s=new b(this._engine,this._container)),s.init(this._nextId,t,i,e);let n=!0;if(o&&(n=o(s)),!n)return;return this._array.push(s),this._zArray.push(s),this._nextId++,this._engine.dispatchEvent("particleAdded",{container:this._container,data:{particle:s}}),s}catch(a){(0,n.tZ)().warning("".concat(s.dI," adding particle: ").concat(a))}},this._removeParticle=(t,i,e)=>{const s=this._array[t];if(!s||s.group!==i)return!1;const n=this._zArray.indexOf(s);return this._array.splice(t,1),this._zArray.splice(n,1),s.destroy(e),this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:s}}),this._addToPool(s),!0},this._engine=t,this._container=i,this._nextId=0,this._array=[],this._zArray=[],this._pool=[],this._limit=0,this._groupLimits=new Map,this._needsSort=!1,this._lastZIndex=0,this._interactionManager=new f(t,i),this._pluginsInitialized=!1;const o=i.canvas.size;this.quadTree=new k(P(o),4),this.movers=[],this.updaters=[]}get count(){return this._array.length}addManualParticles(){const t=this._container,i=t.actualOptions;for(const e of i.manualParticles)this.addParticle(e.position?(0,n.E9)(e.position,t.canvas.size):void 0,e.options)}addParticle(t,i,e,s){var n;const o=this._container.actualOptions.particles.number.limit,a=void 0===e?this._limit:null!==(n=this._groupLimits.get(e))&&void 0!==n?n:this._limit,r=this.count;if(a>0)if("delete"===o.mode){const t=r+1-a;t>0&&this.removeQuantity(t)}else if("wait"===o.mode&&r>=a)return;return this._pushParticle(t,i,e,s)}clear(){this._array=[],this._zArray=[],this._pluginsInitialized=!1}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}draw(t){const i=this._container,e=i.canvas;e.clear(),this.update(t);for(const[,s]of i.plugins)e.drawPlugin(s,t);for(const s of this._zArray)s.draw(t)}filter(t){return this._array.filter(t)}find(t){return this._array.find(t)}get(t){return this._array[t]}handleClickMode(t){this._interactionManager.handleClickMode(t)}async init(){const t=this._container,i=t.actualOptions;this._lastZIndex=0,this._needsSort=!1,await this.initPlugins();let e=!1;for(const[,n]of t.plugins)if(void 0!==n.particlesInitialization&&(e=n.particlesInitialization()),e)break;if(this.addManualParticles(),!e){const t=i.particles,e=t.groups;for(const i in e){const n=e[i];for(let e=this.count,o=0;o<(null===(s=n.number)||void 0===s?void 0:s.value)&&e<t.number.value;e++,o++){var s;this.addParticle(void 0,n,i)}}for(let i=this.count;i<t.number.value;i++)this.addParticle()}}async initPlugins(){if(this._pluginsInitialized)return;const t=this._container;this.movers=await this._engine.getMovers(t,!0),this.updaters=await this._engine.getUpdaters(t,!0),await this._interactionManager.init();for(const[,i]of t.pathGenerators)i.init(t)}push(t,i,e,s){for(let n=0;n<t;n++)this.addParticle(null===i||void 0===i?void 0:i.position,e,s)}async redraw(){this.clear(),await this.init(),this.draw({value:0,factor:0})}remove(t,i,e){this.removeAt(this._array.indexOf(t),void 0,i,e)}removeAt(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;if(t<0||t>this.count)return;let n=0;for(let o=t;n<i&&o<this.count;o++)this._removeParticle(o--,e,s)&&n++}removeQuantity(t,i){this.removeAt(0,t,i)}setDensity(){const t=this._container.actualOptions,i=t.particles.groups;for(const e in i)this._applyDensity(i[e],0,e);this._applyDensity(t.particles,t.manualParticles.length)}setLastZIndex(t){this._lastZIndex=t,this._needsSort=this._needsSort||this._lastZIndex<t}setResizeFactor(t){this._resizeFactor=t}update(t){const i=this._container,e=new Set;this.quadTree=new k(P(i.canvas.size),4);for(const[,a]of i.pathGenerators)a.update();for(const[,a]of i.plugins){var s;null===(s=a.update)||void 0===s||s.call(a,t)}const n=this._resizeFactor;for(const a of this._array){n&&!a.ignoresResizeRatio&&(a.position.x*=n.width,a.position.y*=n.height,a.initialPosition.x*=n.width,a.initialPosition.y*=n.height),a.ignoresResizeRatio=!1,this._interactionManager.reset(a);for(const[,i]of this._container.plugins){var o;if(a.destroyed)break;null===(o=i.particleUpdate)||void 0===o||o.call(i,a,t)}for(const i of this.movers)i.isEnabled(a)&&i.move(a,t);a.destroyed?e.add(a):this.quadTree.insert(new z(a.getPosition(),a))}if(e.size){const t=t=>!e.has(t);this._array=this.filter(t),this._zArray=this._zArray.filter(t);for(const i of e)this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:i}});this._addToPool(...e)}this._interactionManager.externalInteract(t);for(const a of this._array){for(const i of this.updaters)i.update(a,t);a.destroyed||a.spawning||this._interactionManager.particlesInteract(a,t)}if(delete this._resizeFactor,this._needsSort){const t=this._zArray;t.sort(((t,i)=>i.position.z-t.position.z||t.id-i.id));const i=1;this._lastZIndex=t[t.length-i].position.z,this._needsSort=!1}}}class T{constructor(t){this.container=t,this.pixelRatio=1,this.reduceFactor=1}init(){const t=this.container,i=t.actualOptions;this.pixelRatio=!i.detectRetina||(0,n.B9)()?1:window.devicePixelRatio,this.reduceFactor=1;const e=this.pixelRatio,s=t.canvas;if(s.element){const t=s.element;s.size.width=t.offsetWidth*e,s.size.height=t.offsetHeight*e}const o=i.particles,a=o.move;this.maxSpeed=(0,_.VG)(a.gravity.maxSpeed)*e,this.sizeAnimationSpeed=(0,_.VG)(o.size.animation.speed)*e}initParticle(t){const i=t.options,e=this.pixelRatio,s=i.move,n=s.distance,o=t.retina;o.moveDrift=(0,_.VG)(s.drift)*e,o.moveSpeed=(0,_.VG)(s.speed)*e,o.sizeAnimationSpeed=(0,_.VG)(i.size.animation.speed)*e;const a=o.maxDistance;a.horizontal=void 0!==n.horizontal?n.horizontal*e:void 0,a.vertical=void 0!==n.vertical?n.vertical*e:void 0,o.maxSpeed=(0,_.VG)(s.gravity.maxSpeed)*e}}function M(t){return t&&!t.destroyed}function S(t,i){const e=new p.J(t,i);for(var s=arguments.length,n=new Array(s>2?s-2:0),o=2;o<s;o++)n[o-2]=arguments[o];return(0,m.Z)(e,...n),e}class D{constructor(t,i,e){this._intersectionManager=t=>{if(M(this)&&this.actualOptions.pauseOnOutsideViewport)for(const i of t)i.target===this.interactivity.element&&(i.isIntersecting?this.play():this.pause())},this._nextFrame=t=>{try{var i;if(!this._smooth&&void 0!==this._lastFrameTime&&t<this._lastFrameTime+s.Xu/this.fpsLimit)return void this.draw(!1);null!==(i=this._lastFrameTime)&&void 0!==i||(this._lastFrameTime=t);const e=function(t){return{value:t,factor:arguments.length>2&&void 0!==arguments[2]&&arguments[2]?60/(arguments.length>1&&void 0!==arguments[1]?arguments[1]:60):60*t/s.Xu}}(t-this._lastFrameTime,this.fpsLimit,this._smooth);if(this.addLifeTime(e.value),this._lastFrameTime=t,e.value>s.Xu)return void this.draw(!1);if(this.particles.draw(e),!this.alive())return void this.destroy();this.animationStatus&&this.draw(!1)}catch(e){(0,n.tZ)().error("".concat(s.dI," in animation loop"),e)}},this._engine=t,this.id=Symbol(i),this.fpsLimit=120,this._smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this._lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._sourceOptions=e,this._initialSourceOptions=e,this.retina=new T(this),this.canvas=new l(this),this.particles=new O(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this._options=S(this._engine,this),this.actualOptions=S(this._engine,this),this._eventListeners=new u(this),this._intersectionObserver=(0,n.BR)((t=>this._intersectionManager(t))),this._engine.dispatchEvent("containerBuilt",{container:this})}get animationStatus(){return!this._paused&&!this.pageHidden&&M(this)}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(t){if(!M(this))return;const i=this.interactivity.element;if(!i)return;const e=(i,e,s)=>{if(!M(this))return;const n=this.retina.pixelRatio,o={x:e.x*n,y:e.y*n},a=this.particles.quadTree.queryCircle(o,s*n);t(i,a)};let s=!1,n=!1;i.addEventListener("click",(t=>{if(!M(this))return;const i=t,s={x:i.offsetX||i.clientX,y:i.offsetY||i.clientY};e(t,s,1)})),i.addEventListener("touchstart",(()=>{M(this)&&(s=!0,n=!1)})),i.addEventListener("touchmove",(()=>{M(this)&&(n=!0)})),i.addEventListener("touchend",(t=>{if(M(this)){if(s&&!n){const i=t,s=1;let n=i.touches[i.touches.length-s];if(!n&&(n=i.changedTouches[i.changedTouches.length-s],!n))return;const o=this.canvas.element,a=o?o.getBoundingClientRect():void 0,r=0,h={x:n.clientX-(a?a.left:r),y:n.clientY-(a?a.top:r)};e(t,h,Math.max(n.radiusX,n.radiusY))}s=!1,n=!1}})),i.addEventListener("touchcancel",(()=>{M(this)&&(s=!1,n=!1)}))}addLifeTime(t){this._lifeTime+=t}addPath(t,i){let e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!(!M(this)||!e&&this.pathGenerators.has(t))&&(this.pathGenerators.set(t,i),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}destroy(){if(!M(this))return;this.stop(),this.particles.destroy(),this.canvas.destroy();for(const[,n]of this.effectDrawers){var t;null===(t=n.destroy)||void 0===t||t.call(n,this)}for(const[,n]of this.shapeDrawers){var i;null===(i=n.destroy)||void 0===i||i.call(n,this)}for(const n of this.effectDrawers.keys())this.effectDrawers.delete(n);for(const n of this.shapeDrawers.keys())this.shapeDrawers.delete(n);this._engine.clearPlugins(this),this.destroyed=!0;const e=this._engine.dom(),s=e.findIndex((t=>t===this));if(s>=0){const t=1;e.splice(s,t)}this._engine.dispatchEvent("containerDestroyed",{container:this})}draw(t){if(!M(this))return;let i=t;const e=t=>{i&&(this._lastFrameTime=void 0,i=!1),this._nextFrame(t)};this._drawAnimationFrame=requestAnimationFrame((t=>e(t)))}async export(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(const[,e]of this.plugins){if(!e.export)continue;const s=await e.export(t,i);if(s.supported)return s.blob}(0,n.tZ)().error("".concat(s.dI," - Export plugin with type ").concat(t," not found"))}handleClickMode(t){if(M(this)){this.particles.handleClickMode(t);for(const[,e]of this.plugins){var i;null===(i=e.handleClickMode)||void 0===i||i.call(e,t)}}}async init(){if(!M(this))return;const t=this._engine.getSupportedEffects();for(const s of t){const t=this._engine.getEffectDrawer(s);t&&this.effectDrawers.set(s,t)}const i=this._engine.getSupportedShapes();for(const s of i){const t=this._engine.getShapeDrawer(s);t&&this.shapeDrawers.set(s,t)}await this.particles.initPlugins(),this._options=S(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=S(this._engine,this,this._options);const e=await this._engine.getAvailablePlugins(this);for(const[s,h]of e)this.plugins.set(s,h);this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize(),this.zLayers=this.actualOptions.zLayers,this._duration=(0,_.VG)(this.actualOptions.duration)*s.Xu,this._delay=(0,_.VG)(this.actualOptions.delay)*s.Xu,this._lifeTime=0;this.fpsLimit=this.actualOptions.fpsLimit>0?this.actualOptions.fpsLimit:120,this._smooth=this.actualOptions.smooth;for(const[,s]of this.effectDrawers){var n;await(null===(n=s.init)||void 0===n?void 0:n.call(s,this))}for(const[,s]of this.shapeDrawers){var o;await(null===(o=s.init)||void 0===o?void 0:o.call(s,this))}for(const[,s]of this.plugins){var a;await(null===(a=s.init)||void 0===a?void 0:a.call(s))}this._engine.dispatchEvent("containerInit",{container:this}),await this.particles.init(),this.particles.setDensity();for(const[,s]of this.plugins){var r;null===(r=s.particlesSetup)||void 0===r||r.call(s)}this._engine.dispatchEvent("particlesSetup",{container:this})}async loadTheme(t){M(this)&&(this._currentTheme=t,await this.refresh())}pause(){if(M(this)&&(void 0!==this._drawAnimationFrame&&(cancelAnimationFrame(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(const[,i]of this.plugins){var t;null===(t=i.pause)||void 0===t||t.call(i)}this.pageHidden||(this._paused=!0),this._engine.dispatchEvent("containerPaused",{container:this})}}play(t){if(!M(this))return;const i=this._paused||t;if(!this._firstStart||this.actualOptions.autoPlay){if(this._paused&&(this._paused=!1),i)for(const[,t]of this.plugins)t.play&&t.play();this._engine.dispatchEvent("containerPlay",{container:this}),this.draw(null!==i&&void 0!==i&&i)}else this._firstStart=!1}async refresh(){if(M(this))return this.stop(),this.start()}async reset(){if(M(this))return this._initialSourceOptions=void 0,this._options=S(this._engine,this),this.actualOptions=S(this._engine,this,this._options),this.refresh()}async start(){M(this)&&!this.started&&(await this.init(),this.started=!0,await new Promise((t=>{const i=async()=>{this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(const[,t]of this.plugins){var i;await(null===(i=t.start)||void 0===i?void 0:i.call(t))}this._engine.dispatchEvent("containerStarted",{container:this}),this.play(),t()};this._delayTimeout=setTimeout((()=>{i()}),this._delay)})))}stop(){if(M(this)&&this.started){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(const[,i]of this.plugins){var t;null===(t=i.stop)||void 0===t||t.call(i)}for(const t of this.plugins.keys())this.plugins.delete(t);this._sourceOptions=this._options,this._engine.dispatchEvent("containerStopped",{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];const t=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this._responsiveMaxWidth!==t&&(this._responsiveMaxWidth=t,!0)}}}}]);
//# sourceMappingURL=1927.e7d9b05b.chunk.js.map