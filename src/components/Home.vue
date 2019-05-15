<template>
    <div class="home">
        <!-- <app-canvas></app-canvas> -->
        <app-landing></app-landing>
        <app-projects></app-projects>
        <app-more></app-more>
        <app-footer></app-footer>
        <transition name="fade" appear>
            <app-social></app-social>
        </transition>
    </div>
</template>
<script>
import Canvas from './home/Canvas'
import Landing from './home/Landing'
import Social from './core/Social'
import Projects from './home/Projects'
import More from './home/More'
import Footer from './core/Footer'
export default {
    name: 'home',
    components: {
        'app-canvas': Canvas,
        'app-landing': Landing,
        'app-social': Social,
        'app-projects': Projects,
        'app-more': More,
        'app-footer': Footer
    }
}
</script>


