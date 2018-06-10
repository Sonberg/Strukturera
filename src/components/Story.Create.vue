<template>
<input
    class="input is-shadowless"
    type="text"
    v-model="text"
    :placeholder="placeholder"
    :disabled="disabled"
    ref="input"
    name="input"
    autocomplete="false"
    v-validate="'required'"
    v-bind:class="{ 
        error: errors.has('input')
        }"
    @keyup.enter="submit"
/>
</template>

<script lang="js">
export default {
    name: 'story-create',
    props: {
        disabled: {
            default: false
        },
        placeholder: {
            default: "Add story"
        },
        stepId: {
            required: false
        },
        value: {
            required: false
        },
        onSubmit: {
            default: () => null
        }
    },
    data() {
        return {
            text: this.value || ""
        }
    },
    methods: {
        submit(e) {
            this.$validator.validate("input").then(result => {
                if (!result) {
                    return;
                }

                this.onSubmit(this.text, this.stepId);
                this.text = "";
            });
        }
    }
}
</script>
