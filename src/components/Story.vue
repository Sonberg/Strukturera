<template>
<li>
    <tags
        :tags="story.tags"
        v-if="story.tags"
        class="m-b-xs"
    />
    <span
        class="is-size-6"
        v-html="story.name"
        @click="gotoStory"
    />
</li>
</template>

<script lang="js">
import tags from './Tags.vue';

export default {
    name: 'story',
    components: {
        tags
    },
    props: {
        story: {
            required: true
        }
    },
    methods: {
        gotoStory() {
            this.$router.push({
                name: "story",
                params: {
                    storyId: this.story.id
                }
            });
        }
    }
}
/*
    <div class="flex is-size-7 m-t-md m-b-sm has-text-grey">

        <div class="tag">
            <zondicons
                name="link"
                class="m-r-sm"
            /> 0
        </div>

        <div class="tag">
            <zondicons
                name="checkmark"
                class="m-r-sm"
            /> 2/19
        </div>

        <div class="tag">
            <zondicons
                name="conversation"
                class="m-r-sm"
            /> 2
        </div>
    </div>*/
</script>


