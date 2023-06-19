<template>
  <div class="options">
      <User v-if="option === 'user'" />  
      <Notes v-else-if="option === 'notes'" />
      <Funnels v-else-if="option === 'funnels'" />
      <Chatbot v-else-if="option === 'chatbot'" />
      <Historic v-else-if="option === 'historic'" />
      <Delegated v-else="option === 'delegated'" />
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
