<template>
    <div class="scroll__container">
        <a class="scroll__link" v-if="hasScrolled" @click="scrollTop">Back to top</a>
    </div>
</template>

<script>
    import anime from 'animejs'
    export default {
        name: 'scroll',
        methods: {
            scrollTop() {
                const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
                anime.timeline({
                    loop: false
                }).add({
                    targets: scrollElement,
                    scrollTop: 0,
                    easing: "easeInOutQuad",
                    duration: 1500,
                })
            }
        },
        watch: {
            hasScrolled() {
                return window.scrollTop() !==0
            }
        }
    }
</script>

<style>
    .scroll__container {
        position: fixed;
        bottom: 2rem;
        right: 1rem;
        /* width: 10%;
        height: 40%;
        text-align: center;
        padding: 36px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between; */
        z-index: 0;
    }
    
    /* .scroll__container ul {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 75%;
    }
    
    .scroll__container ul li {
        padding: 6px;
        background: white;
    }
    
    .scroll__container ul li a {
        opacity: 0.5;
        transition: all 0.25s ease-out;
    } */
    
    /* .scroll__container ul li a:hover {
        opacity: 1;
    }
     */
    .scroll__container>a {
        padding: 0.8rem;
        font-size: 0.8rem;
        font-family: Playfair;
        cursor: pointer;
    }
    
    /* .scroll__container ul li a img {
        width: 30px;
        height: 30px;
    }
    
    .scroll__container__row {
        width: 1px;
        height: 280px;
        background: #1c1d3070;
        position: absolute;
        bottom: 40px;
        left: 50%;
        z-index: -1;
    } */
</style>

