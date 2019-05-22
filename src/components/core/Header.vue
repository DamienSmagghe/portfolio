<template>
    <div class="header wrapped" id="head">
        <div class="header__info">
            <router-link to="/" href="#" title="Back to home" class="logo">DS</router-link>
            <transition name="fadeup" appear>
                <div class="header__nav">
                    <ul>
                        <li @mouseenter="swipeText" @mouseleave="resetText" :class="{current : $route.name === 'home'}">
                            <router-link to="/" >
                                <span class="letter">P</span><span class="letter">r</span><span class="letter">o</span><span class="letter">j</span><span class="letter">e</span><span class="letter">c</span><span class="letter">t</span><span class="letter">s</span>
                            </router-link>
                            <div class="header__nav__hoverBar"></div>
                        </li>
                        <li @mouseenter="swipeText" @mouseleave="resetText" :class="{current : $route.name === 'about'}">
                            <router-link to="/about">
                                <span class="letter">A</span><span class="letter">b</span><span class="letter">o</span><span class="letter">u</span><span class="letter">t</span>&nbsp<span class="letter">m</span><span class="letter">e</span>
                            </router-link>
                            <div class="header__nav__hoverBar"></div>
                        </li>
                        <li @mouseenter="swipeText" @mouseleave="resetText">
                            <a href="mailto:damien.smagghe@hotmail.fr" title="Mail Damien Smagghe">
                                <span class="letter">C</span><span class="letter">o</span><span class="letter">n</span><span class="letter">t</span><span class="letter">a</span><span class="letter">c</span><span class="letter">t</span>

                            </a>
                            <div class="header__nav__hoverBar"></div>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
        <h1>Damien Smagghe - Freelance front-end developer</h1>
    </div>
</template>

<script>
    import anime from 'animejs'
    export default {
        name: 'header',
        methods: {
            text(event) {

            },
            swipeText(event) {
                if(!event.target.classList.contains('current'))
                {
                    event.target.classList.add('hoverAnimated')
                anime.timeline({
                        loop: false
                    }).add({
                        targets: '.hoverAnimated .letter',
                        translateY: [0, -10],
                        opacity: [1, 0],
                        easing: "easeInExpo",
                        duration: 250,
                        delay: function(el, i) {
                            return  20 + 20 * i;
                        }
                    })
                    .add({
                        targets: '.hoverAnimated .letter',
                        translateY: [10, 0],
                        translateZ: 0,
                        opacity: [0, 1],
                        easing: "easeOutExpo",
                        duration: 250,
                        delay: function(el, i) {
                            return  20 + 20 * i;
                        }
                    })                }

            },
            resetText(event) {
                if(!event.target.classList.contains('current'))
                {
                    
                    anime.timeline({
                        loop: false
                    }).add({
                        targets: '.hoverAnimated .letter',
                        translateY: [0, 8],
                        opacity: [1, 0],
                        easing: "easeInExpo",
                        duration: 250,
                        delay: function(el, i) {
                            return  20 + 20 * i;
                        }
                    })
                    // .add({
                    //     targets: '.hoverAnimated',
                    //     opacity: 0.7,
                    //     duration: 5
                    // })
                    .add({
                        targets: '.hoverAnimated .letter',
                        translateY: [-8, 0],
                        translateZ: 0,
                        opacity: [0, 1],
                        easing: "easeOutExpo",
                        duration: 250,
                        delay: function(el, i) {
                            return  20 + 20 * i;
                        }
                    })
                event.target.classList.remove('hoverAnimated')
                }
                
            }
    
        }
    }
</script>

<style>
    .header {
        margin-bottom: 4rem;
    }
    .header__info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        padding: 2rem 0;
    }
    
    .header__info .logo {
        font-family: Playfair;
        font-weight: 600;
        font-size: 2rem;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient( to right, #1C23F5, #1C23F5 50%, #1c1d30 50%);
        background-size: 200% 100%;
        background-position: 100%;
        transition: all 0.25s ease-out;
    }
    .header__info .logo:hover {
        background-position: 0%;
    }
    .header__nav ul {
        font-family: Playfair;
        font-style: italic;
        display: flex;
    }
    
    .header__nav ul li {
        position: relative;
        opacity: 0.7;
    }
    .header__nav ul .current {
        opacity: 1;
    }
    .header__nav ul .current .header__nav__hoverBar {
        transform: scaleX(1);
    }
    .header__nav ul li a {
        padding: 1rem;
    }
    .header h1 {
        opacity: 0.7;
        font-size: 0.8rem;
    }
    
    .header__nav__hoverBar {
        width: calc(100% - 1.96rem);
        height: 0.5rem;
        background: #1C23F5;
        opacity: 0.3;
        position: absolute;
        top: 0.6rem;
        left: 0.96rem;
        will-change: transform;
        transform-origin: left;
        transform: scaleX(0);
        transition: 0.25s ease-out;
        z-index: -1;
    }
    
    .header__nav ul li a:hover+.header__nav__hoverBar {
        transform: scaleX(1);
    }
    .header__nav ul li a .letter {
        display: inline-block;
        line-height: 1em;
    }
    @media screen and (max-width: 660px) {
        .header {
            margin-bottom: 2rem;
        }
        .header__info .logo {
            font-size: 1.5rem
        }
    }
</style>


