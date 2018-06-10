<template>
<input
    class="input p-md is-shadowless"
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
    name: 'step-create',
    props: {
        disabled: {
            default: false
        },
        placeholder: {
            default: "Add step"
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
            text: ""
        }
    },
    methods: {
        submit(e) {
            this.$validator.validate("input").then(result => {
                if (!result) {
                    return;
                }

                this.onSubmit(this.text);
                this.text = "";
            });
        }
    }
}
</script>
