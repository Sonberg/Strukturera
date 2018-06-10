<template>
<draggable
    :move="onMove"
    :options="options"
    @start="onStart"
    @end="onEnd"
    v-model="stories"
    v-if="stories"
    element="ul"
>
    <story
        v-for="story in stories"
        :key="story.id"
        :story="story"
    />

    </draggable>
</template>

<script lang="js">

import draggable from 'vuedraggable';
import story from './Story.vue'

export default {
    name: 'stories',
    components: {
        draggable,
        story
    },
    props: {
        stepId: {
            required: true
        },
        setDragging: {
            default: () => null
        }
    },
    computed: {
        stories: {
            get() {
                return this.$store.getters.stories.filter(this.isForStep);
            },
            set(values) {
                values.forEach((value, index) => {
                    this.$store.commit('updateStory', { id: value.id, data: { order: index + 1, step_id: this.stepId } });
                });
            }
        }
    },
    data() {
        return {
            editable: true,
            delayedDragging: false,
            options: {
                group: 'stories',
                animation: 150
            }
        }
    },
    methods: {
        isForStep(x) {
            return x.step_id == this.stepId;
        },
        onStart() {
            this.setDragging(true);
        },
        onEnd(e) {            
            this.setDragging(false);
        },
        onMove({
            relatedContext,
            draggedContext
        }) {
            const relatedElement = relatedContext.element;
            const draggedElement = draggedContext.element;
            return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        }
    }
}
</script>
