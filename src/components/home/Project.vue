<template>
    <div class="home__projects__project" @click="runProject">
        <div class="row"></div>
        <span class="home__projects__project__id" v-html="data.id"></span>
        <div class="home__projects__project__overview">
            <img :src="data.imageName" :srcset="data.srcset" :alt="data.alt">
        </div>
        <div class="home__projects__project__information">
            <h3 v-html="data.title"></h3>
            <small v-html="data.type"></small>
            <small v-html="data.date"></small>
            <h4><span>Role : </span>{{data.role}}</h4>
            <p v-html="data.description"></p>
            <a class='animated-arrow' target="blank" :href="data.link">
                <span class='the-arrow -left'>
                        <span class='shaft'></span>
                </span>
                <span class='main'>
                  <span class='text'>
                    Demo
                  </span>
                <span class='the-arrow -right'>
                    <span class='shaft'></span>
                </span>
                </span>
            </a>
        </div>
        <div v-if="last" class="lastRow"></div>
    </div>
</template>

<script>
import anime from 'animejs'
    export default {
        name: 'project',
        props: {
            data: Object
        },
        data() {
            return {
                last: false
            }
        },
        methods: {
            runProject() {
                window.open(this.data.link, '_blank')
            }
        },
        computed: {
            imageSrc(_image) {
                return `../../assets/images/projects/${_image}`
            }
        },
        mounted() {
    this.last = this.$parent.$children[this.$parent.$children.length - 1] === this
}
    }
</script>

<style scoped>
    .home__projects__project {
        display: flex;
        justify-content: space-between;
        padding: 0 10%;
        position: relative;
        cursor: pointer;
    }
    .home__projects__project .row, .home__projects__project .lastRow {
        position: absolute;
        width: 105vw;
        height: 1px;
        background: #1c1d3050;
        z-index: -1;
        left: -05vw;
    }
    .home__projects__project .lastRow {
        bottom: 0;
    }
    .home__projects__project:hover .home__projects__project__overview img {
        transform: scale(1.025);
    }
    .home__projects__project:hover .animated-arrow {
        opacity: 1;
        transform: translateX(0);
    }
    .home__projects__project:hover .home__projects__project__information h3 {
        transform: translateY(0) scale(1);
    }
    .home__projects__project:hover .home__projects__project__information p,
    .home__projects__project:hover .home__projects__project__information small,
    .home__projects__project:hover .home__projects__project__information h4 {
        transform: translateY(0);
        opacity: 1;
    }
    .home__projects__project__overview {
        width: calc(100% / 3 * 2);
        overflow: hidden;
    }
    
    .home__projects__project__overview img {
        width: 100%;
        height: 100%;
        transition: 0.25s ease-out;
        object-fit: cover;
    }
    
    .home__projects__project__information {
        padding: 2rem 0;
        width: 25%;
        font-family: Playfair;
    }
    
    .home__projects__project__information h3 {
        font-size: 2.5rem;
        color: #1C23F5;
        font-weight: 600;
        margin-bottom: 0.6rem;
        transform-origin: bottom left;
        transform: translateY(1rem) scale(0.9);
        transition: 0.25s ease-out;
    }
    
    .home__projects__project__information small {
        font-style: italic;
        display: block;
        margin-bottom: 0.3rem;
    }
    
    .home__projects__project__information small:nth-of-type(2) {
        color: #ccc;
    }
    
    .home__projects__project__information h4 {
        margin-bottom: 2rem;
    }
    
    .home__projects__project__information h4 span {
        font-weight: 600;
    }
    
    .home__projects__project__information p {
        font-family: Manrope;
        font-size: 0.8rem;
        margin-bottom: 1rem;
        line-height: 1.5;
    }
    .home__projects__project__information small:first-of-type {
        opacity: 1;
    }
   .home__projects__project__information p,
   .home__projects__project__information h4,
   .home__projects__project__information small
    {
        transform: translateY(1rem);
        transition: 0.25s ease-out;
        opacity: 0;
    }
    .home__projects__project__information p {
        transition-delay: 0.25s;
    }
    .home__projects__project__information h4 {
        transition-delay: 0.2s;
    }
    .home__projects__project__information a {
        font-weight: 600;
        font-size: 1rem;
    }
    
    .home__projects__project__id {
        position: absolute;
        left: 5%;
        top: 1rem;
        transform: translateX(-50%);
        font-size: 2.5rem;
        z-index: 10;
    }
    .animated-arrow {
        transform: translateY(1rem);
        opacity: 0;
        transition: 0.3s ease-out;
        transition-delay: 0.4s;
    }
    @media screen and (max-width: 1040px ) {
        .home__projects__project {
            flex-direction: column;
            padding: 0;
            margin-bottom: 3rem;
        }
        .home__projects__project__overview {
            width: 100%;
        }
        .home__projects__project__information {
            width: 100%;
            padding: 5%;
        }
        .home__projects__project__id {
            color: white;
            text-shadow: 0 0 3px #444;
            margin-left: 10px;
        }
         .home__projects__project__information p,
        .home__projects__project__information small,
        .home__projects__project__information h4 {
            transform: translateY(0);
            opacity: 1;
        }
        .home__projects__project__information h3 {
            transform: translateY(0) scale(1);
        }
        .animated-arrow {
            opacity: 1;
            transform: translateX(0);
        }
    }
</style>


