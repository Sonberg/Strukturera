<template>
  <svgicon
    :class="{
      [$options.name]: true,
      [`${$options.name}--${size}`]: size,
    }"
    :name="name">
  </svgicon>
</template>

<script>
export default {
  name: "zondicons",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String
    }
  },
  created() {
    import(`@/components/icons/${this.name}`);
  }
};
</script>

<style scoped>
.Zondicons {
    display: inline-block;
    width: 16px;
    height: 16px;
    color: inherit;
    padding: 1px;
    vertical-align: middle;
    fill: none;
    stroke: currentColor;
    transform: scale(1.2);
}

.Icon--fill {
  fill: currentColor;
  stroke: none;
      height: 16px;
}

.Zondicons--s {
  height: 0.5em;
}

.Zondicons--m {
  height: 1em;
}

.Zondicons--l {
  height: 3em;
}
</style>