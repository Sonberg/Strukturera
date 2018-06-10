<template>
<div
    v-if="story"
    :key="id"
>
<div>
     <div class="flex flex-center p-none p-b-lg">
            <router-link
                :to="{ name: 'project', params: { projectId: story.project_id }}"
                class="button is-primary m-r-lg"
            >
                <Zondicons name="arrow-thin-left" />
                </router-link>
                <div
                    class="title is-marginless"
                    v-html="story.name"
                />
        </div>
        <markdown v-model="story.content" />
</div>
       
    </div>
</template>

<script lang="js">
import draggable from 'vuedraggable';
import steps from '@/components/Steps.vue';
import markdown from '@/components/Markdown.vue';


export default {
    name: 'story',
    components: {
        markdown
    },
    computed: {
        id() {
            return this.$route.params.storyId;
        },
        story: {
            get() {
                return this.$store.getters.story(this.id)
            },
            set(val) {
                this.$store.commit('updateStory', {
                    id: this.id,
                    data: val
                });
            }
        }
    },
    watch: {
        story: {
            immediate: true,
            handler(newVal, oldVal) {
                if (!newVal) {
                    return;
                }

                this.description = newVal.content;
            }
        }
    },
    methods: {
        save() {
            this.$store.commit('updateStory', {
                id: this.id,
                data: {
                    content: this.description
                }
            });
        }
    }
}
</script>
