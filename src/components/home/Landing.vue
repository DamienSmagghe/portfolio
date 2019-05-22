<template>
    <div class="home__landing wrapped">
        <app-particles></app-particles>
        <transition name="fadeleft" appear>
            <h2>
                <strong>Hello world ! </strong>I’m Damien a
                <strong>web developer</strong> based in Paris. <br> I enjoy building
                <strong>experiences</strong> that are <strong>user-focused</strong>.
            </h2>
        </transition>
        <transition name="fadedown" appear>
            <p>
                You can see my work on <a href="https://github.com/DamienSmagghe" target="blank" title="Damien Smagghe's Github page">Github </a> or <a href="https://codepen.io/DamienSmg/" target="blank" title="Damien Smagghe's Codepen link">Codepen</a> and my professionnal history on <a href="https://www.linkedin.com/in/damien-smagghe-2a226a171/" target="blank" title="Link to Damien Smagghe's Linkedin">Linkedin</a> or <a href="https://www.malt.fr/profile/damiensmagghe" target="blank" title="Damien Smagghe's malt profile">Malt</a>. If you
                want to work with me or say hello, feel free to <a href="mailto:damien.smagghe@hotmail.fr" title="Mail Damien Smagghe">contact me</a>.
            </p>
        </transition>
        <transition name="fade" appear>
            <div class="home__landing__scrollInvite">
                <a href="#" title="Scroll to Projects" @click="scrollToProject">See my projects</a> 
            </div>
        </transition>
    </div>
</template>

<script>
import anime from 'animejs'
import Particles from '../core/Particles'
    export default {
        name: 'landing',
        components: {
            'app-particles': Particles
        },
        methods: {
            scrollToProject() {
                const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
                anime.timeline({
                    loop: false
                }).add({
                    targets: scrollElement,
                    scrollTop: window.innerHeight,
                    easing: "easeInOutQuad",
                    duration: 1500,
                })
            }
        }
    }
</script>

<style>

    .home__landing {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100vh - 14rem)
    }
    
    .home__landing h2 {
        font-family: Playfair;
        font-size: 2.5rem;
        width: 58.3333%;
        line-height: 1.3;
    }
    
    .home__landing h2 strong {
        color: #1C23F5;
        font-weight: 600;
    }
    
    .home__landing p {
        width: 58.3333%;
        font-size: 1.2rem;
        line-height: 1.5;
    }
    
    .home__landing p a {
        position: relative;
        display: inline-block;
        padding: 0 2px;
        color: #1C23F5;
        transition: color .25s cubic-bezier(.19, 1, .22, 1);
        border-bottom: 0;
        white-space: nowrap;
    }
    
    .home__landing p a:hover {
        color: white;
    }
    
    .home__landing p a:hover::before {
        transform: scaleY(1);
    }
    
    .home__landing p a::before {
        content: "";
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        height: 1.4rem;
        background: #1C23F5;
        will-change: transform;
        transform-origin: bottom;
        transform: scaleY(0.03);
        border: none;
        transition: 0.25s ease-out;
        z-index: -1;
    }
    
    .home__landing__scrollInvite {
        font-family: Playfair;
        font-size: 1.2rem;
        position: relative;
    }
    @media screen and (max-width: 1040px) {
        .home__landing p {
            width: 100%;
        }
        .home__landing h2 {
            width: 100%;
        }
    }
    @media screen and (max-width: 660px) {
         .home__landing h2 {
             font-size: 1.5rem;
         }
         .home__landing p {
             font-size: 1rem;
             margin: 2rem 0;
         }
         .header__nav ul li a {
            padding: 0.8rem;
        }
    }
</style>

