<template>
  <div id="app">
    <transition name="fade" appear>
      <app-header></app-header>
    </transition>
    <transition
        :name="transitionName"
         mode="out-in"
         @beforeLeave="beforeLeave"
         @enter="enter">
        <router-view/>
    </transition>
  </div>
</template>

<script>
const DEFAULT_TRANSITION = 'fade';
import Header from './components/core/Header'
export default {
  name: 'App',
  components: {
    'app-header': Header,
  },
  data() {
     return {
       prevHeight: 0,
        transitionName: DEFAULT_TRANSITION,
        cursorMain: {
          x: 0,
          y: 0
        }
     };
   },
  created() {
    this.$router.beforeEach((to, from, next) => {

      let transitionName = to.meta.transitionName || from.meta.transitionName;
      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    })
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
}
</script>

<style>

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)

   RESET CSS
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    font-size:100%;
    font:inherit;
    vertical-align:baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display:block;
}
body {
    line-height:1;
}
ol, ul {
    list-style:none;
}
blockquote, q {
    quotes:none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}
table {
    border-collapse:collapse;
    border-spacing:0;
}

/* apply a natural box layout model to all elements */
*,*::before,*::after,*:before,*:after {
    -moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;
}

/* inputs */
input,button,textarea,select {
    color:inherit;
    font-size:inherit;
    font-style:inherit;
    font-family:inherit;
    -webkit-border-radius:0;
    border-radius:0;
    -webkit-padding-start:0;
    align-items:flex-start;
    text-index:0;
    border:none;
    outline:none;
    background:none;
    padding:0;
    margin:0;
    width:auto;
    height:auto;
    line-height:1em;
}

/* inputs appearance (not for every input)  */
input[type=text],input[type=reset],input[type=password],input[type=search],input[type=email],input[type=tel],input[type=url],input[type=time],input[type=week],input[type=month],input[type=date],input[type=datetime],input[type=datetime-local],input[type=number],
input[type=submit],input[type=reset],input[type=color],input[type=file],
button,textarea,select {
    height:1em;
    -webkit-appearance:none;
       -moz-appearance:none;
            appearance:none;
}

/* input color width */
input[type=color] {
    width:1em;
}

/* IE clear cross */
input::-ms-clear {
    display:none;
}

/* details and summary */
details, summary {
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
}

/* text size adjusting */
body {
    -webkit-text-size-adjust:100%;
       -moz-text-size-adjust:100%;
            text-size-adjust:100%;
}

/* mark */
mark {background:none;}

/* Font smoothing */
/**,*::before,*::after,*:before,*:after {
     -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}*/

/* hr */
hr {
    height:1px;
    margin:0;padding:0;
}

/* u */
u {
    text-decoration:none;
}

/* th */
table th {
    text-align:left;
}

/* a */
a {
    color:inherit;
    outline:none;
    text-decoration: none;
}

/*
GENERAL STYLING
*/
@font-face {
  font-family: "Manrope";
  src: url("./assets/fonts/manrope/manrope-light.woff2") format("woff2"),
  url("./assets/fonts/manrope/manrope-light.woff") format("woff"),
  url("./assets/fonts/manrope/manrope-light.otf") format("truetype");
  font-style: normal;
  font-weight: 300;
}
@font-face {
  font-family: "Manrope";
  src: url("./assets/fonts/manrope/manrope-bold.otf") format("truetype");
  font-style: normal;
  font-weight: bold;
}
@font-face {
  font-family: "Playfair";
  src: url("./assets/fonts/playfair/PlayfairDisplay-Regular.ttf");
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: "Playfair";
  src: url("./assets/fonts/playfair/PlayfairDisplay-Italic.ttf");
  font-style: italic;
  font-weight: 400;
}
@font-face {
  font-family: "Playfair";
  src: url("./assets/fonts/playfair/PlayfairDisplay-Black.ttf");
  font-style: normal;
  font-weight: 600;
}
*,*:before,*:after {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  }
.wrapped {
  width: 80%;
  margin: 0 auto;
}
body * ::selection {
  background: #1C23F5;
  color: white;
}
body {
  overflow-x: hidden;
}
body, html {
  font-family: Manrope, Helvetica, sans-serif;
  color: #1c1d30;
}
body * {
  letter-spacing: 0.0em;
}
   .the-arrow {
        width: 1px;
        transition: all 0.2s;
    }
    
    .the-arrow.-left {
        position: absolute;
        top: 50%;
        left: 0;
    }
    
    .the-arrow.-left>.shaft {
        width: 0;
        background-color: #1c1d30;
    }
    
    .the-arrow.-left>.shaft:before,
    .the-arrow.-left>.shaft:after {
        width: 0;
        background-color: #1c1d30;
    }
    
    .the-arrow.-left>.shaft:before {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    
    .the-arrow.-left>.shaft:after {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    
    .the-arrow.-right {
        top: 1px;
    }
    
    .the-arrow.-right>.shaft {
        width: 1px;
        transition-delay: 0.2s;
    }
    
    .the-arrow.-right>.shaft:before,
    .the-arrow.-right>.shaft:after {
        width: 0.5rem;
        transition-delay: 0.3s;
        transition: all ease-out 0.3s;
    }
    
    .the-arrow.-right>.shaft:before {
        -webkit-transform: rotate(40deg);
        transform: rotate(40deg);
    }
    
    .the-arrow.-right>.shaft:after {
        -webkit-transform: rotate(-40deg);
        transform: rotate(-40deg);
    }
    
    .the-arrow>.shaft {
        background-color: #1c1d30;
        display: block;
        height: 1px;
        position: relative;
        transition: all ease-out 0.2s;
        transition-delay: 0;
        will-change: transform;
    }
    
    .the-arrow>.shaft:before,
    .the-arrow>.shaft:after {
        background-color: #1c1d30;
        content: '';
        display: block;
        height: 1px;
        position: absolute;
        top: 0;
        right: 0;
        transition: all ease-out 0.2s;
        transition-delay: 0;
    }
    
    .the-arrow>.shaft:before {
        -webkit-transform-origin: top right;
        transform-origin: top right;
    }
    
    .the-arrow>.shaft:after {
        -webkit-transform-origin: bottom right;
        transform-origin: bottom right;
    }
    
    .animated-arrow {
        display: inline-block;
        color: #1c1d30;
        font-size: 1rem;
        font-family: Playfair;
        font-weight: 600;
        font-style: italic;
        text-decoration: none;
        position: relative;
        transition: all ease-out 0.2s;
    }
    
    .animated-arrow:hover {
        color: #1c1d30;
    }
    
    .animated-arrow:hover>.the-arrow.-left>.shaft {
        width: 2rem;
        transition-delay: 0.1s;
        background-color: #1c1d30;
    }
    
    .animated-arrow:hover>.the-arrow.-left>.shaft:before,
    .animated-arrow:hover>.the-arrow.-left>.shaft:after {
        width: 8px;
        transition-delay: 0.1s;
        background-color: #1c1d30;
    }
    
    .animated-arrow:hover>.the-arrow.-left>.shaft:before {
        -webkit-transform: rotate(40deg);
        transform: rotate(40deg);
    }
    
    .animated-arrow:hover>.the-arrow.-left>.shaft:after {
        -webkit-transform: rotate(-40deg);
        transform: rotate(-40deg);
    }
    
    .animated-arrow:hover>.main {
        -webkit-transform: translateX(17px);
        transform: translateX(17px);
        -webkit-transform: translateX(2.5rem);
        transform: translateX(2.5rem);
    }
    
    .animated-arrow:hover>.main>.the-arrow.-right>.shaft {
        width: 0;
        -webkit-transform: translateX(200%);
        transform: translateX(200%);
        transition-delay: 0;
    }
    
    .animated-arrow:hover>.main>.the-arrow.-right>.shaft:before,
    .animated-arrow:hover>.main>.the-arrow.-right>.shaft:after {
        width: 0;
        transition-delay: 0;
        transition: all ease-out 0.1s;
    }
    
    .animated-arrow:hover>.main>.the-arrow.-right>.shaft:before {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    
    .animated-arrow:hover>.main>.the-arrow.-right>.shaft:after {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    
    .animated-arrow>.main {
        display: flex;
        align-items: center;
        transition: all ease-out 0.2s;
    }
    
    .animated-arrow>.main>.text {
        margin: 0 16px 0 0;
        line-height: 1;
    }
    
    .animated-arrow>.main>.the-arrow {
        position: relative;
    }

    /* ANIMATION */
   .fade-enter-active,
.fade-leave-active {
  transition-duration: 2.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

  .fadeleft-enter-active,
.fadeleft-leave-active {
  transition-duration: 1s;
  transition-timing-function: ease;
}

.fadeleft-enter,
.fadeleft-leave-active {
  opacity: 0;
  transform: translateX(-60px);
}


  .fadedown-enter-active,
.fadedown-leave-active {
  transition-duration: 1.5s;
  transition-timing-function: ease;
}

.fadedown-enter,
.fadedown-leave-active {
  opacity: 0;
  transform: translateY(60px);
}

  .fadeup-enter-active,
.fadeup-leave-active {
  transition-duration: 0.7s;
  transition-timing-function: ease;
}

.fadeup-enter,
.fadeup-leave-active {
  opacity: 0;
  transform: translateY(-60px);
}


.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(4em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-4em, 0);
}
@media screen and (max-width: 1040px) {
  .wrapped {
    width: 90%;
    margin: 0 auto;
  }
}

</style>
