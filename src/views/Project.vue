<template>
<div
    v-if="project && $route.name == 'project'"
    class="project"
    :key="project.id"
    :style="{ backgroundImage: `url(${project.image})`}"
>
    <div>
        <div class="flex flex-justify flex-center p-none p-b-lg">
            <div class="title is-marginless">
                {{ project.name }}
            </div>
        </div>
        <steps :project-id="id" />
    </div>
    </div>

    <router-view
        v-else-if="$route.name != 'project'"
        class="project"
    />

         <div class="hero-body" v-else>
    <div class="container has-text-centered">
      <p class="title">
        Hmm... project not found
      </p>
      <p class="subtitle">
        Go create one
      </p>
    </div>
  </div>

</template>

<script lang="js">
import draggable from 'vuedraggable';
import steps from '@/components/Steps.vue';

export default {
    name: 'project',
    components: {
        draggable,
        steps
    },
    computed: {
        id() {
            return this.$route.params.projectId;
        },
        project: {
            get() {
                return this.$store.getters.project(this.id)
            },
            set(val) {
                this.$store.commit('updateProject', { id: this.id, data: val });
            }
        }
    }
}
</script>
