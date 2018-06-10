<template>
<div
    v-if="projects"
    class="project"
>
    <div
        v-for="project in projects"
        :key="project.id"
    >
        <div class="flex flex-justify flex-center p-none p-b-lg flex-column">
            <router-link
                class="title is-marginless"
                :to="{ name: 'project', params: { projectId: project.id }}"
            >
                {{ project.name }}
                </router-link>
                    <div
                    class=""
                    v-for="step in steps(project.id)"
                    :key="step.id"
                >
                    {{ step.name }}:  {{stories(step.id).length}}
                    </div>
        </div>
        </div>
        <base-input
            @keyup.enter="create"
            v-model="text"
        />
        </div>
</template>

<script lang="js">
import Vuex from 'vuex';

export default {
    name: 'projects',
    computed: Vuex.mapGetters(['projects']),
    data() {
        return {
            text: ''
        }
    },
    methods: {
        create(e) {
            this.$store.commit('createProject', {
                name: this.text
            })
            this.text = '';
        },
        steps(projectId) {
            return this.$store.getters.stepsForProject(projectId);
        },
        stories(stepId) {
            return this.$store.getters.storiesForStep(stepId);
        }
    }
}
</script>
