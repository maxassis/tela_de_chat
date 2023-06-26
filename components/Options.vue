<template>
  <div class="options">
      <User v-if="option === 'user'" />  
      <Notes v-else-if="option === 'notes'" />
      <Funnels v-else-if="option === 'funnels'" />
      <Chatbot v-else-if="option === 'chatbot'" />
      <Historic v-else-if="option === 'historic'" />
      <Delegated v-else-if="option === 'delegated'" />
      <Nps v-else-if="option === 'nps'" />
      <Midias v-else-if="option === 'midias'" />
  </div>
</template>

<script lang="ts" setup>
import options from '../store/options';

const { option } = options();

console.log(option.value)



</script>


<style lang="scss" scoped>
.options {
  block-size: 100%;
  background: #ffffff;
  overflow: hidden;
}
</style>
