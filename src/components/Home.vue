<template>
    <div class="home">
        <app-landing></app-landing>
        <app-projects></app-projects>
        <app-more></app-more>
        <app-footer></app-footer>
        <transition name="fade" appear>
        </transition>
    </div>
</template>
<script>
import Landing from './home/Landing'
import Projects from './home/Projects'
import More from './home/More'
import Footer from './core/Footer'
export default {
    name: 'home',
    components: {
        'app-landing': Landing,
        'app-projects': Projects,
        'app-more': More,
        'app-footer': Footer
    }
}
</script>


