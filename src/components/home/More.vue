<template>
    <div class="home__more__container wrapped">
        <app-more-section v-for="section in sectionsData" :key="section.id" :data="section"></app-more-section>
    </div>
</template>
<script>
import MoreSection from './MoreSection'
import sectionsData from '../store/sections.js'
export default {
    name: 'more',
    components: {
        'app-more-section': MoreSection
    },
    data() {
        return {
            sectionsData : sectionsData
        }
    }
}
</script>
<style>
.home__more__container {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    margin-bottom: 4rem;
}
@media screen and (max-width: 1040px ) {
    .home__more__container {
        flex-direction: column;
    }
}
</style>


