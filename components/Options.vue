<template>
  <div class="options">
      <User v-if="option === 'user'" />  
      <Notes v-if="option === 'notes'" />
      <Funnels v-if="option === 'funnels'" />
      <Chatbot v-if="option === 'chatbot'" />
      <Historic v-if="option === 'historic'" />
  </div>
</template>

<script lang="ts" setup>
import options from '../store/options';

const { option } = options()

</script>


<style lang="scss" scoped>
.options {
  block-size: 100%;
  background: #ffffff;
  overflow: hidden;
}
</style>
