<template>
    <div class="home__projects">
        <ul>
            <li v-for="project in projects" :key="project.id">
                <app-project :data="project"></app-project>
            </li>
        </ul>
    </div>
</template>
<script>
import projectsData from '../store/projects.js'
import Project from './Project'
export default {
    name: 'projects',
    components: {
        'app-project': Project
    },
    data() {
        return {
            projects: projectsData
        }
    }
}
</script>
<style>
.home__projects {
    margin-top: 10rem;
}
</style>

