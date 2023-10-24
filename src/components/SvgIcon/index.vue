<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: "#icon-"
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: "#000"
  },
  width: {
    type: String,
    default: "16px"
  },
  height: {
    type: String,
    default: "16px"
  }
});
</script>

<style scope lang="less"></style>
