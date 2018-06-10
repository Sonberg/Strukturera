<template>
<div class="flex flex-row flex-start">
    <draggable
        :move="onMove"
        :options="options"
        v-if="steps"
        v-model="steps"
        class="flex flex-row flex-start steps"
    >
        <div
            class="step"
            v-for="step in steps"
            :key="step.id"
        >
        <img v-if="step.image" :src="step.image"/>
            <div class="step-header">
                <div class="has-text-weight-bold is-size-4" v-html="`${step.name}`" v-if="step.name"/>
                <base-dropdown>
                    <zondicons name="dots-horizontal-triple" slot="button" />
                </base-dropdown>
            </div>

            <stories
                :step-id="step.id"
                :set-dragging="setDragging"
            />

            <div class="step-footer">
                <story-create
                    :on-submit="createStory"
                    :step-id="step.id"
                />
            </div>
</div>
</draggable>
<div class="step p-md">
    <step-create
        :on-submit="createStep"
/>
</div>
</div>
</template>

<script lang="js">
import draggable from 'vuedraggable';
import stories from '@/components/Stories.vue';
import storyCreate from '@/components/Story.Create.vue';
import stepCreate from '@/components/Step.Create.vue';

export default {
    name: 'steps',
    components: {
        draggable,
        stories,
        storyCreate,
        stepCreate
    },
    props: {
        projectId: {
            required: true
        }
    },
    computed: {
        steps: {
            get() {
                return this.$store.getters.steps.filter(this.isForProject);
            },
            set(values) {
                values.forEach((value, index) => {
                    this.$store.commit('updateStep', {
                        id: value.id,
                        data: {
                            order: index + 1
                        }
                    });
                });
            }
        }
    },
    data() {
        return {
            isDragging: false,
            options: {
                group: 'steps',
                animation: 300,
                handle: '.step-header',
                cancel: 'input',
                axis: 'x'
            }
        }
    },
    methods: {
        isForProject(x) {
            return x.project_id == this.projectId;
        },
        setDragging(val) {
            this.isDragging = val;
        },
        createStory(name, step_id) {
            this.$store.commit('createStory', {
                name,
                step_id,
                project_id: this.projectId
            })
        },
        createStep(name) {
            this.$store.commit('createStep', {
                name,
                project_id: this.projectId
            })
        },
        onMove({
            relatedContext,
            draggedContext
        }) {
            const relatedElement = relatedContext.element;
            const draggedElement = draggedContext.element;

            return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed;
        }
    }
}
</script>
