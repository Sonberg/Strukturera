<template>
<div
    id="app"
    class="is-fullheight"
>
    <Topbar class=" is-top-menu" />
    <router-view class="" />
    </div>
</template>

<script lang="ts">

import {
    Component,
    Vue
} from "vue-property-decorator";

import {
    projectsRef,
    storiesRef,
    stepsRef,
    tagsRef
} from '@/firebase';

import Topbar from "@/components/Topbar.vue";

@Component({
    components: {
        Topbar
    }
})
export default class App extends Vue {
    created() {
        this.$store.dispatch('initProjects', projectsRef);
        this.$store.dispatch('initStories', storiesRef);
        this.$store.dispatch('initSteps', stepsRef);
        this.$store.dispatch('initTags', tagsRef);
    }
}
</script>

<style lang="scss">
@import url("./style/app.scss");
</style>
