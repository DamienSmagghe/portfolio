<template>
    <div class="home__more__section">
            <h3 v-html="data.title"></h3>
            <p v-html="data.content"></p>
            <router-link class='animated-arrow' :to="data.link" v-if="data.isRouter">
                <span class='the-arrow -left'>
                        <span class='shaft'></span>
                </span>
                <span class='main'>
                  <span class='text' v-html="data.cta"></span>
                <span class='the-arrow -right'>
                    <span class='shaft'></span>
                </span>
                </span>
            </router-link>
            <a class='animated-arrow' :href="data.link" v-if="!data.isRouter">
                <span class='the-arrow -left'>
                        <span class='shaft'></span>
                </span>
                <span class='main'>
                  <span class='text' v-html="data.cta"></span>
                <span class='the-arrow -right'>
                    <span class='shaft'></span>
                </span>
                </span>
            </a>
        </div>
</template>
<script>
export default {
    name: 'more-section',
    props: {
        data: Object
    }
}
</script>
<style>
.home__more__section {
    width: 33%;
}
.home__more__section h3 {
    font-family: Playfair;
    font-size: 2rem;
    font-weight: bold;
    color: #1C23F5;
}
.home__more__section p {
    line-height: 1.5;
    font-size: 0.8rem;
    margin: 1rem 0 2rem 0;
}
@media screen and (max-width: 1040px ) {
    .home__more__section {
        width: 100%;
    }
    .home__more__section:last-child {
        margin-top: 2rem;
    }
}
</style>

